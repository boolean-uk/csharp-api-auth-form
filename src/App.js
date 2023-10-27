import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from './components/loginform.component';
import Register from './components/register.component';
import Layout from './components/layout.component'
import GetAll from "./components/getall.component";
import NoPage  from "./components/nopage.component";

const token = "";
const api = "https://localhost:7233"

const handleApiOnline = () => {

}
const handleLogout = () => {
  console.log('logout')
  localStorage.removeItem("token");
};

const handleRegister = ({ username, password }) => {
  
  fetch(`${api}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((loginResponse) => {
      if (!loginResponse.data) {
        return;
      }
      console.log(loginResponse);

      
    });

};
const handleLogin = async ({ username, password }) => {
  fetch(`${api}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((loginResponse) => {
      if (!loginResponse.data) {
        return;
      }
      console.log(loginResponse.data);

      localStorage.setItem("token", loginResponse.data);
    });
};

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout handleSubmit={handleLogout} />}>    
        <Route path="login" element={<LoginForm handleSubmit={handleLogin}/>} />        
        <Route path="register" element={<Register handleSubmit={handleRegister} />} />
        <Route path="getall" element={<GetAll />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

  
  );
}

export default App;
