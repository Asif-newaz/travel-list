export default function Item({ item }) {
  return (
    <li>
      <input type="checkbox" value="item" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
