export default function ShoppingListItem({
  id,
  item_name,
  quantity,
}) {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{item_name}</li>
        <li>{quantity}</li>
      </ul>
    </div>
  );
}
