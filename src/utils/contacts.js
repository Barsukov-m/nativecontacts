const capitalizeFirstLetter = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

const wipWarning = () => {
  alert('Work in Progress 🤫');
};

export { capitalizeFirstLetter, wipWarning };