import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Tutorial from "./pages/Tutorial";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Account from "./pages/Account";
import Login from "./pages/Login";
import useUserState from "./context/useUserState";

function App() {
  const { StateProvider } = useUserState();

  return (
    <StateProvider>
      <div>
        <h1 className="App-header">Testing</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/market" element={<Market />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StateProvider>
  );
}

export default App;
