import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './primaryComponents/AppHeader.js';
import AppBody from './primaryComponents/AppBody.js';
import { NewCardForm } from './extraComponents/Gallery';

function App() {
  let thePlaceDescription = "Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap.";
  let thePlaceIMGLink = "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg";
  let tedsBestDescription = "Pizza & casual Italian eats served in a rehabbed tire garage with outdoor seating & a bocce court.";
  let tedsBestIMGLink = "https://static.rootsrated.com/image/upload/s--T6my01Iz--/t_rr_large_traditional/bhyhujvnsnnueov4zg2r.jpg";

  //Order of info in array: Name, Address, IMGLink, Price, Description, Rating
  let thePlaceInfo = ["The Place", "229 E Broad St, Athens, GA 30608", thePlaceIMGLink, "Low", thePlaceDescription, "4.6 Stars", 0];
  let tedsBestInfo = ["Ted's Most Best", "254 W Washington St, Athens, GA 30601", tedsBestIMGLink, "Medium", tedsBestDescription, "4.4 Stars", 1];
  let cardInfo = [thePlaceInfo, tedsBestInfo];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<AppBody cardInfo={cardInfo}/>} />
          <Route path="newcardform" element={<NewCardForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
