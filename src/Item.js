export default function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" value="item" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
