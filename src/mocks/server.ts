import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockContacts from './contacts';

export const server = setupServer(
	rest.get('https://dummyjson.com/users', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ users: mockContacts }));
	}),
	rest.post('https://dummyjson.com/users/add', async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockContacts[0]));
	}),
	rest.delete('https://dummyjson.com/users/:id', async (req, res, ctx) => {
		const { id } = req.params;
		const contact = mockContacts.find(
			(contact) => contact.id == parseInt(id as string)
		);

		if (contact) {
			return res(ctx.status(200), ctx.json(contact));
		} else {
			return res(
				ctx.status(404),
				ctx.json({ message: `Contact with the ID: ${id} provided not found.` })
			);
		}
	})
);

export const initServer = () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());
};
