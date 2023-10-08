import "./App.css";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Nav from "./components/Nav";
import OpenSource from "./components/OpenSource";
import OpenSourceAll from "./components/OpenSourceAll";
import SideNav from "./components/SideNav";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./Login";
import Settings from "./components/Settings";
import Create from "./components/Create";


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="sides">
        <SideNav />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Detail />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/create-opensource-project" element={<Create />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/manage-open-source" element={<OpenSource />}/>
        <Route path="/open-source/" element={<OpenSourceAll />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
