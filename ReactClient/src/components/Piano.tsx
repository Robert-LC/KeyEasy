import React from 'react';
import styled from 'styled-components';
import NoteModel from '../Models/NoteModel';
import { NoteStatus } from '../helpers';
import Key from './Key';

type Props = {
    notes: NoteModel[];
    noteStatuses: Record<string, NoteStatus>
    onKeyClick: (note: NoteModel) => void;   
    showNoteNames: boolean;
}

const playAudio = (note: NoteModel) => {
    const audio = new Audio(`sounds/piano_${note.Key}.mp3`);
    audio.volume = 0.05;
    audio.play();
};


/**
 * Piano component generates all Key's in an octave (12 notes/keys)
 * @returns One octave of a working clickable piano.
 */
const Piano: React.FC<Props> = ({ notes, noteStatuses, onKeyClick, showNoteNames }) => {
    const handleKeyClick = (note: NoteModel) => {
        playAudio(note);
        onKeyClick(note);
    };

    return (
        <Wrapper>
            <div>
                {notes.map((element: NoteModel) => (
                    <Key
                        key={element.Name} //not used, but required to stop React Warning
                        note={element}
                        onKeyClick={handleKeyClick}
                        noteStatus={noteStatuses[element.Name] || 'none'}
                        showNoteNames={showNoteNames}
                    />
                ))}
            </div>
        </Wrapper>
    );
};

//Styled components
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
`
export default Piano;