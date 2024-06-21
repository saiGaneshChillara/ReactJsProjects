import { useEffect, useState } from 'react';

//RandomColor generator Component
export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex'); //State that manages the type of the color
    const [color, setColor] = useState('#000000'); // State that manages the color of the component

    //Function that returns a random number from 0 to the given number
    function generateRandomNumber(limit) {
        return Math.floor(Math.random() * limit);
    }

    //Function that generates a random hex color using the hexArr
    function generateHexColor() {
        //console.log("Random color is being generated");
        const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', "B", "C", "D", "E", "F"];
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += hexArr[generateRandomNumber(hexArr.length)];
        }
        setColor(randomColor); //Setting the random color as color of the component
    }

    
   

    //Function that generates a random rgb color
    function generateRgbColor() {
       //console.log("Rgb color is being generated");
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);

        const randomColor = `rgb(${r}, ${g}, ${b})`;
        setColor(randomColor); //Setting the random color as color of the component
    }

    useEffect(() => {
        if (typeOfColor === "rgb") generateRgbColor();
        else generateHexColor();
    }, [typeOfColor]);

    return (
        <div className="random-color-container" style={{
            width: "100vw",
            height: "100vh",
            background: color
            //Style of the component.
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button> {/*Button that sets the type of the color as hex*/}
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button> {/*Button that sets the type of the color as rgb*/}
            <button onClick={
                () => typeOfColor === 'hex' ? generateHexColor() : generateRgbColor()
            }>Generate Random Color</button> {/*Button that generates a random color based on the type of the color*/}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '30px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}