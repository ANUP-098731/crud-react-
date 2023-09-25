import { createContext } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./components/Home";
import Userlist from "./components/Userlist";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Router>
          <Appbar />
        <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userlist" element={<Userlist/>}/>
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/edit-user/:user_id" element={<EditUser/>}/>
         </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
