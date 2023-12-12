import { useState } from "react";
import "./App.css";
import StripeContainer from "./components/StripeContainer";
import iphone from "./asset/ipohnemax.jpg";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Wish List</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <img src={iphone} alt="iphone" />
          <h3>459.900 KD</h3>

          <button onClick={() => setShowItem(true)}>Purchase Your Gift</button>
        </>
      )}
    </div>
  );
}

export default App;
