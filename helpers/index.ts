// @ts-nocheck
export const loadItemFromStorage = (name) => {
  let item = false;
  try {
    item = JSON.parse(localStorage.getItem(name));
  } catch (error) {
    try {
      item = localStorage.getItem(name);
    } catch (err) {
      console.log('loadItemFromStorage', error);
    }
    return item;
  }
  return item;
};

export const saveItemToStorage = (name, item) => {
  item = typeof item === 'object' ? JSON.stringify(item) : item;
  try {
    localStorage.setItem(name, item);
    return { name: item };
  } catch (error) {
    return new Error(`Something went wrong: ${error}`);
  }
};
