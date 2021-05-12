export const addToCartItem = (allItems, singleItem) => {
  const isExisting = allItems.some((item) => item.id === singleItem.id);

  if (isExisting) {
    return allItems.map((item) =>
      item.id === singleItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...allItems, { ...singleItem, quantity: 1 }];
};

export const removeToCartItem = (allItems, singleItem) => {
  const existingItem = allItems.find((item) => item.id === singleItem.id);

  if (existingItem && existingItem.quantity === 1) {
    return allItems.filter((item) => item.id !== singleItem.id);
  }

  return allItems.map((item) =>
    item.id === singleItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
