import "./App.css";

import { Route, Routes } from "react-router-dom";
import ShareList from "./components/ShareList/ShareList";
import Split from "./components/Split";
import { useState } from "react";
import TotalContext from "./context/TotalContxt";

function App() {
  const [total, setTotal] = useState([]);
  return (
    <div className="App">
      {/* <h1>Wish List</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <img src={iphone} alt="iphone" />
          <h3>459.900 KD</h3>

          <button onClick={() => setShowItem(true)}>Purchase Your Gift</button>
        </>
      )} */}
      <TotalContext.Provider value={{ total, setTotal }}>
        <Routes>
          <Route path="/SharedWishList/:wishlistId" Component={ShareList} />
          <Route path="/paylink" Component={Split} />
        </Routes>
      </TotalContext.Provider>
    </div>
  );
}

export default App;
