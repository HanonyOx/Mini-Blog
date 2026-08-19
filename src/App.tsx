import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateBog from "./pages/CreateBog";
import Home from "./pages/Home";
import "./App.css";
import Blogdetail from "./pages/Blogdetail";
import Navbar from "./components/Navbar";
import EditBlog from "./pages/EditBlog";

function App() {
  const location = useLocation();

  const hideNavbar = [
    "/Login",
    "/Signup",
    "/CreateBog",
  ].includes(location.pathname) ||
    location.pathname.startsWith("/EditBlog");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/CreateBog" element={<CreateBog />} />
        <Route path="/Blogdetail/:id" element={<Blogdetail />} />
        <Route path="/EditBlog/:id" element={<EditBlog />} />
      </Routes>
    </>
  );
}

export default App;