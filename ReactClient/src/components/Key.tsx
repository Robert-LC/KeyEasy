import React from 'react';
import styled from 'styled-components';

type Props = {
    note: string;
    color: string;
    onKeyClick: (note: string) => void;
}

const Key: React.FC<Props> = ({ note, color, onKeyClick }) => (

    color === 'white' 
        ? <WhiteKey value={note} onClick={() => onKeyClick(note)} /> 
        : <BlackKey value={note} onClick={() => onKeyClick(note)}/>
);


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