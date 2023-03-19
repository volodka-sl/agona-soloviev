import React, {Component, useState} from 'react';

export const FunctionComponent = () => {
    const [name, setName] = useState("FunctionComponent")
    const [background, setBackground] = useState("red");

    const ButtonStyle = {
        width: "100px",
        height: "40px",
    }

    const changeBackground = () => {
        background === "red" ? setBackground("blue") : setBackground("red")
    }

    return (
        <div style={{backgroundColor: background}}>
            <div>It's {name}</div>
            <br/>
            <button style={ButtonStyle} onClick={changeBackground}>Push me too</button>
        </div>
    )
}