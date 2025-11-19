import React from "react";
import "./index.css"
import AllMembers from "./components/AllMembers";
import AddMebmer from "./components/AddData";
import { Link, Route, Routes, useParams } from "react-router-dom";

const customers = [
  { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
  { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
  { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
  { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
  { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
  { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
  { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0125", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
  { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
];

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
