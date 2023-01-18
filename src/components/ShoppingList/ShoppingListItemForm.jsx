import { useState } from 'react';

const defaultShoppingItem = {
  id: null,
  item_name: '',
  quantity: 0,
  created_at: new Date().getTime().toString(),
  done: false,
};

export default function ShoppingListItemForm({
  id,
  shoppingItem,
  onSubmit,
}) {
  const [newShoppingItem, setNewShoppingItem] = useState(
    shoppingItem || defaultShoppingItem
  );

  return (
    <form
      data-testId={`new-shopping-item-${id}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newShoppingItem);
        setNewShoppingItem(defaultShoppingItem);
      }}
    >
      <label>
        Item name:
        <input
          data-testId={`new-shopping-item-name-${id}`}
          type="text"
          name="name"
          value={newShoppingItem.item_name}
          onChange={(e) =>
            setNewShoppingItem({
              ...newShoppingItem,
              item_name: e.target.value,
            })
          }
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          data-testId={`new-shopping-item-quantity-${id}`}
          type="number"
          name="quantity"
          value={newShoppingItem.quantity}
          onChange={(e) =>
            setNewShoppingItem({
              ...newShoppingItem,
              quantity: e.target.value,
            })
          }
        />
      </label>
      <br />
      <button
        data-testId={`shopping-item-form-submit-button-${id}`}
        onClick={(e) => {
          e.preventDefault();
          onSubmit(newShoppingItem);
        }}
        type="submit"
      >
        Add item
      </button>
    </form>
  );
}
