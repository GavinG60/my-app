import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './primaryComponents/AppHeader.js';
import AppBody from './primaryComponents/AppBody.js';
import { NewCardForm } from './extraComponents/Gallery';

function App() {
  return (
    // Test Comment
    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<AppBody />} />
          <Route path="newcardform" element={<NewCardForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
