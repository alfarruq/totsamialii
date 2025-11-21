// import React from "react";
import "./index.css"
import AllMembers from "./components/AllMembers";
import AddMebmer from "./components/AddData";
import {  Route, Routes,  } from "react-router-dom";
import EditData from "./components/EditData";



export default function App() {




  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Dashboard<span className="version">v.01</span></h2>
        <nav>
          <ul>
            <li>📦 Dashboard</li>
            <li>🛍 Product</li>
            <li className="active">👥 Customers</li>
            <li>💰 Income</li>
            <li>📢 Promote</li>
            <li>❓ Help</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Hello Evano 👋</h1>
          <input type="text" placeholder="Search" className="search" />
        </header>

        <section className="customers">
          <div className="card">
           



            <Routes>
              <Route path="/" element={<AllMembers />} />
              <Route path="/addmember" element={<AddMebmer />} />
              <Route path="/editmember/:id" element={<EditData />} />
            </Routes>





            <div className="pagination">
              <p>Showing data 1 to 8 of 256K entries</p>
              <div className="pages">
                <button>{"<"}</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>{">"}</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
