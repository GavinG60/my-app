import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './primaryComponents/AppHeader.js';
import AppBody from './primaryComponents/AppBody.js';
import LoginPage from './primaryComponents/LoginPage';
import DetailedView from './primaryComponents/DetailedView';
import EditCard from './primaryComponents/EditCard';

function App() {
  let thePlaceDescription = "Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap.";
  let thePlaceIMGLink = "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg";
  let thePlaceWEBLink = "https://www.theplaceathens.com/"
  let thePlaceHours = "11 AM - 9 PM"

  let tedsBestDescription = "Pizza & casual Italian eats served in a rehabbed tire garage with outdoor seating & a bocce court.";
  let tedsBestIMGLink = "https://static.rootsrated.com/image/upload/s--T6my01Iz--/t_rr_large_traditional/bhyhujvnsnnueov4zg2r.jpg";
  let tedsBestWEBLink = "https://tedsmostbest.com/"
  let tedsBestHours = "11 AM - 10 PM"

  //Order of info in array: Name, Address, IMGLink, Price, Description, Rating, Index, WEBLink, FoodType, Hours
  let thePlaceInfo = ["The Place", "229 E Broad St, Athens, GA 30608", thePlaceIMGLink, "Low", thePlaceDescription, "4.6 Stars", 0, thePlaceWEBLink, "Southern", thePlaceHours];
  let tedsBestInfo = ["Ted's Most Best", "254 W Washington St, Athens, GA 30601", tedsBestIMGLink, "Medium", tedsBestDescription, "4.4 Stars", 1, tedsBestWEBLink, "Italian", tedsBestHours];
  let cardInfo = [thePlaceInfo, tedsBestInfo];
  let detailedViewIndex = [-1];

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader userInfo={userInfo} isLoggedIn={isLoggedIn}/>}>
          <Route index element={<AppBody cardInfo={cardInfo} isLoggedIn={isLoggedIn} detailedViewIndex={detailedViewIndex}/>} />
          <Route path="loginpage" element={<LoginPage isLoggedIn={isLoggedIn} login={login} userInfo={userInfo} logout={logout} addUser={addUser}/>} />
          <Route path="detailedview" element={<DetailedView cardInfo={cardInfo} DVIndex={detailedViewIndex}/>}/>
          <Route path="editcard" element={<EditCard cardInfo={cardInfo} DVIndex={detailedViewIndex}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
