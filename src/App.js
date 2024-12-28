import {Routes, Route, Navigate} from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Main from "./components/layout/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/">
          <Route index={true} element={<Main/>}/>
        </Route>
        <Route path="/" element={<Main/>}>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/tables" element={<Tables/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/rtl" element={<Rtl/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/dashboard"/>}/>
      </Routes>
    </div>
  );
}

export default App;
