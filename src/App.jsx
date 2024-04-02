import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Approvisionnement from "./pages/approvisionnement/Approvisionnemnt";
import Virement from "./pages/virement/Virement";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import "../src/components/sidebar/Sidebar.css";
import "../src/components/nav/navDashCss/content.css";
import ContentHeader from "./components/nav/navDash/ContentHeader";
function App() {
  return (
    <BrowserRouter>
      <div className="content--dashboard">
        <Sidebar className="dashboard" />
        <Dashboard className="dashboard--content content">
          <ContentHeader className="dashboard--content content" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil/:id" element={<Profile />} />
            <Route path="/approvisionnement" element={<Approvisionnement />} />
            <Route path="/virement" element={<Virement />} />
          </Routes>
        </Dashboard>
      </div>
    </BrowserRouter>
  );
}

export default App;
