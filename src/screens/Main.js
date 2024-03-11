import { Data } from "../Data";
import { useState } from "react";
import './Main.css';

const Main = () => {
  const [updatevalue, setValue] = useState(0);
  const [text, setText] = useState([]);

  const createpara = (e) => {
    e.preventDefault();

    let intValue = parseInt(updatevalue);

    if (intValue < 0) {
      intValue = 1;
    }
    if (intValue > 8) {
      intValue = 8;
    }

    setText(Data.slice(0, intValue));
  };

  return (
    <>
      <div>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className="subdiv">
          <span>Paragraphs</span>
          <input
            type="number"
            value={updatevalue}
            onChange={(e) => {
              setValue(parseInt(e.target.value));
            }}
          />
          <button id="genbtn" onClick={createpara}>
            GENERATE
          </button>
        </div>

        <div className="para">
          {text.map((elem, index) => 
          <p key={index}>{elem}</p>)}
        </div>
      </div>
    </>
  );
};

export default Main;
