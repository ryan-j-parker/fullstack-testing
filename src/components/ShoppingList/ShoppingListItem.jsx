export default function ShoppingListItem({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) {
  return (
    <div>
      <span>
        {shoppingItem.item_name}: {shoppingItem.quantity}
      </span>

      <button 
        data-testid={`update-shopping-item-${shoppingItem.id}`} 
        onClick={() => onUpdateShoppingItem(shoppingItem.id)}>
        update
      </button>
      <button 
        data-testid={`delete-shopping-item-${shoppingItem.id}`} 
        onClick={() => onDeleteShoppingItem(shoppingItem.id)}>
        delete
      </button>
    </div>
  );
}
