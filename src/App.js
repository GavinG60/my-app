import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './primaryComponents/AppHeader.js';
import AppBody from './primaryComponents/AppBody.js';
import LoginPage from './primaryComponents/LoginPage';
import DetailedView from './primaryComponents/DetailedView';
import EditCard from './primaryComponents/EditCard';

function App() {

  let currentRestaurant = ["none"];

  let isLoggedIn = [false];
  const userInfo = ['null', 'null'];

  let dummyUser = ["a@a", "p"];
  const validUsers = [dummyUser];

  function login() {
    userInfo[0] = document.getElementById('emailInput').value
    userInfo[1] = document.getElementById('passwordInput').value
    for (let i = 0; i < validUsers.length; i++) {
      if (userInfo[0] === validUsers[i][0]) {
        if (userInfo[1] === validUsers[i][1]) {
          //alert("IS LOGGED IN")
          isLoggedIn[0] = true;
        }
      }
    }
    document.getElementById('emailInput').value = ''
    document.getElementById('passwordInput').value = ''
    return isLoggedIn[0]
  }

  function logout() {
    userInfo[0] = "null"
    userInfo[1] = "null"
    isLoggedIn[0] = false;
  }

  function addUser() {
    let newUser = [];
    newUser.push(document.getElementById('emailInput').value)
    newUser.push(document.getElementById('passwordInput').value)
    document.getElementById('emailInput').value = ''
    document.getElementById('passwordInput').value = ''
    validUsers.push(newUser)
  }

  // Fetch Requests
  useEffect(() => {
    const info = {
        name: "First Last",
        age: 100,
    } // info

    // Need to set proxy in package.json to proxy backend for /exampleroute
    fetch("/exampleroute", {
        method:"POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": localStorage.getItem("token")   
        }, 
        body: JSON.stringify(info)
    }) // fetch
    // Get data from the backend
    .then(res => res.json())
    .then(data => console.log(data))
  }) // useEffect

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader userInfo={userInfo} isLoggedIn={isLoggedIn}/>}>
          <Route index element={<AppBody currentRestaurant={currentRestaurant} isLoggedIn={isLoggedIn} />} />
          <Route path="loginpage" element={<LoginPage currentRestaurant={currentRestaurant} isLoggedIn={isLoggedIn} login={login} userInfo={userInfo} logout={logout} addUser={addUser}/>} />
          <Route path="detailedview" element={<DetailedView currentRestaurant={currentRestaurant}/>}/>
          <Route path="editcard" element={<EditCard currentRestaurant={currentRestaurant}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
