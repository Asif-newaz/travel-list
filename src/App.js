export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Stats() {
  return (
    <footer className="stats">
      <em></em>
    </footer>
  );
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select value="form">
        <option value="car" key="1">
          car
        </option>
      </select>
      <input type="text" placeholder="Item..." value="form input" />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul></ul>
      <div className="actions">
        <select value="items">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}
