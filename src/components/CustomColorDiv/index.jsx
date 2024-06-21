import { useState } from "react";
import InputField from "./input";
import './styles.css';

export default function CustomColorDiv() {
    
    const [color, setColor] = useState(null);
    const changeColor = (newcolor) => {
        setColor(newcolor);
    }
    return (
        <>
            <div className="custom-color"
                style={{ "background-color": `${color}` }}>

            </div>
            <InputField value={color} onChangeHandler={changeColor} />
        </>
    );
};