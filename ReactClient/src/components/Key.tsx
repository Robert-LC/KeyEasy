import React from 'react';
import styled from 'styled-components';
import NoteModel from '../Models/NoteModel';
import { NoteStatus } from '../helpers';

type Props = {
    note: NoteModel;
    noteStatus: NoteStatus;
    onKeyClick: (note: NoteModel) => void;
    showNoteNames: boolean;
}

const Key: React.FC<Props> = ({ note, noteStatus, onKeyClick, showNoteNames }) => (

    note.Color === 'white' ? (
        <WhiteKey value={note.Name} onClick={() => onKeyClick(note)} noteStatus={noteStatus}>
            {showNoteNames && note.Name}
        </WhiteKey>) : (
        <BlackKey value={note.Name} onClick={() => onKeyClick(note)} noteStatus={noteStatus}>
            {showNoteNames && note.Name}
        </BlackKey>
    )
);


//Styled Components
const BlackKey = styled.button<{ noteStatus: NoteStatus }>`
    width: 80px;
    height: 260px;
    position: absolute;
    margin: 1px;
    padding-bottom: 10px;
    margin-left: -40px;
    background: ${props => props.noteStatus === 'correct' ? 'green' : (props.noteStatus === 'missedCorrect' ? 'orange' : 'black')};
    
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 40px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content:center;

    :active {
        background: #333;
    }
`
const WhiteKey = styled.button<{ noteStatus: NoteStatus }>`
    width: 120px;
    height: 400px;
    margin: 1px;
    padding-bottom: 10px;   
    border: 1px solid black;
    box-shadow: 2px 5px;
    background: ${props => props.noteStatus === 'correct' ? 'green' : (props.noteStatus === 'missedCorrect' ? 'orange' : '#ededed')};

    font-family: sans-serif;
    font-weight: bold;
    font-size: 40px;
    display: inline-flex;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content:center;

    :active {
        background: #ccc;
    }
`
export default Key;