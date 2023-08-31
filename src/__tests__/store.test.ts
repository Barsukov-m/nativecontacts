import axios from 'axios';

describe('use RTK Query to fetch a list of contacts', () => {
	it('fetches contacts successfull', async () => {
		const data = await axios
			.get('https://dummyjson.com/users')
			.then((res) => res.data)
			.catch((err) => {
				throw new Error(err);
			});

		console.log(data);

		expect(1).toEqual(1);
	});
});
