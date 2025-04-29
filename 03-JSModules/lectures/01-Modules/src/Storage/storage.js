const addStorage = (key, value) => {
  const todosString = JSON.stringify(value);
  localStorage.setItem(key, todosString);
};

const getStorage = (key) => {
  const todosString = localStorage.getItem(key);
  return JSON.parse(todosString) || [];
};

const removeStorage = (id, key) => {
  const items = getStorage(key);
  const newItems = items.filter((item) => item.id !== id);
  addStorage(key, newItems);
  return newItems;
};

export { addStorage, getStorage, removeStorage };