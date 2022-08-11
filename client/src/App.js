import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Tutorial from "./pages/Tutorial";
import Dashboard from "./pages/Dashboard";
import Profiles from "./pages/Profiles";
import Account from "./pages/Account";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

function App() {
  const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;
  const navigate = useNavigate();

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <SignedIn>
        <Hello className="hello" />
        <Menu />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Hello() {
  // Get the user's first name
  const { user } = useUser();
  console.log(user);

  return (
    <div className="App-header navbar sticky app-toolbar">
      <UserButton />
    </div>
  );
}

function Menu() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
