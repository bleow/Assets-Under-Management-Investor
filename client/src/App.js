import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Tutorial from "./pages/Tutorial";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Account from "./pages/Account";
import AccountMenu from "./components/header/Header";

function App() {
  return (
    <div>
      <div className="App-header">
        <AccountMenu></AccountMenu>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/market" element={<Market />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
