import React from 'react';
import styled from 'styled-components';
import NoteModel from '../Models/NoteModel';
import { NoteStatus } from '../helpers';

type Props = {
    note: NoteModel;
    noteStatus: NoteStatus;
    onKeyClick: (note: NoteModel) => void;  
}

const Key: React.FC<Props> = ({ note, noteStatus, onKeyClick }) => (

    note.Color === 'white' 
        ? <WhiteKey value={note.Name} onClick={() => onKeyClick(note)} noteStatus={noteStatus}/> 
        : <BlackKey value={note.Name} onClick={() => onKeyClick(note)} noteStatus={noteStatus}/>
);


//Styled Components
const BlackKey = styled.button<{ noteStatus: NoteStatus }>`
    width: 80px;
    height: 260px;
    position: absolute;
    margin: 1px;
    margin-left: -40px;
    background: ${props => props.noteStatus === 'correct' ? 'green' : (props.noteStatus === 'missedCorrect' ? 'orange' : 'black')};

    :active {
        background: #333;
    }
`
const WhiteKey = styled.button<{ noteStatus: NoteStatus }>`
    width: 120px;
    height: 400px;
    margin: 1px;   
    border: 1px solid black;
    box-shadow: 2px 5px;
    background: ${props => props.noteStatus === 'correct' ? 'green' : (props.noteStatus === 'missedCorrect' ? 'orange' : '#ededed')};

    :active {
        background: #ccc;
    }
`
export default Key;