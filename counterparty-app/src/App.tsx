import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h2>CIS</h2>
          <span>Counterparty Intelligence Suite</span>
        </div>

        <nav className="menu">
          <button className="menu-item active">📊 Dashboard</button>
          <button className="menu-item">📥 Import Data</button>
          <button className="menu-item">💳 Transactions</button>
          <button className="menu-item">👥 Counterparties</button>
          <button className="menu-item">🔗 Relationship Graph</button>
          <button className="menu-item">💰 Money Trail</button>
          <button className="menu-item">📑 Reports</button>
          <button className="menu-item">⚙ Settings</button>
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1>Counterparty Intelligence Suite</h1>

          <div className="status">
            <span className="status-dot"></span>
            System Ready
          </div>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Total Transactions</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Counterparties</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Accounts</h3>
            <h2>0</h2>
          </div>

          <div className="card">
            <h3>Investigations</h3>
            <h2>0</h2>
          </div>
        </section>

        <section className="workspace">
          <h2>Welcome</h2>

          <p>
            Counterparty Intelligence Suite is ready.
          </p>

          <p>
            The next milestone is implementing Excel/CSV import and the
            transaction explorer.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;