import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import KeyService from "../services/KeyService";

type Props = {
    note: string;
    color: string;
}

const Key: React.FC<Props> = ({ note, color }) => (
    color === 'white' ? <WhiteKey value={note} onClick={onKeyClick} /> 
        : <BlackKey value={note} onClick={onKeyClick}/>
);


/**
 * When a key is clicked this method is called to run other methods
 * that need to happen on click.
 * @param e Mouse Click Event
 */
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
    background: #ededed;
    border: 1px solid black;
    box-shadow: 2px 5px;

    :active {
        background: #ccc;
    }
`

export default Key;



