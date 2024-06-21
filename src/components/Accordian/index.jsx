import { useState } from "react";
import "./styles.css";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState([]);

  function handleSelection(currentId) {
    //console.log("selected is", selected);
    const index = selected.indexOf(currentId);
    //console.log("Index is", index);
    index === - 1 ? 
        setSelected((previousValue) => {
            //console.log("processinfg is", [...previousValue, currentId]);
            return [...previousValue, currentId]
        })
    : setSelected(previousValue => previousValue.splice(index));
    //console.log("Updated value is", selected);
  }

  return (
    <div className="accordian-container">
      <div className="accordian-inner">
        {data && data.length ? (
          data.map((dataItem) => (
            <div className="accordian-item">
              <div
                onClick={() => handleSelection(dataItem.id)}
                className="accordian-title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected.includes(dataItem.id) ? (
                <div className="accordian-content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
