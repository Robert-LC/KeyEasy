import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';


type Props = {
    note: string;
    color: string;
}

const Key: React.FC<Props> = ({ note, color }) => (
    color === 'white' ? <WhiteKey value={note} onClick={onKeyClick} /> 
        : <BlackKey value={note} onClick={onKeyClick}/>
);


const onKeyClick = (e: MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.volume = 0.05;
    audio.play();
};


//Styled Components
const BlackKey = styled.button`
    width: 80px;
    height: 260px;
    position: absolute;
    margin: 1px;
    margin-left: -40px;
    background: black;

    :active {
        background: #333;
    }
`

const WhiteKey = styled.button`
    width: 120px;
    height: 400px;
    margin: 1px;
    background: white;
    border: 1px solid black;
    box-shadow: 2px 5px;

    :active {
        background: #eee;
    }
`


export default Key;



