import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { NoteType } from '../helpers';
import Key from './Key';

type Props = {
    notes: NoteType[],
    onKeyClick: (note: string) => void;
}

const playAudio = (note: string) => {
    const audio = new Audio(`sounds/piano_${note}.mp3`);
    audio.volume = 0.05;
    audio.play();
};


/**
 * Piano component generates all Key's in an octave (12 notes/keys)
 * @returns One octave of a working clickable piano.
 */
const Piano: React.FC<Props> = ({ notes, onKeyClick }) => {
    const handleKeyClick = (note: string) => {
        playAudio(note);
        onKeyClick(note);
    };

    return (
        <Wrapper>
            <div>
                {notes.map((element: NoteType) => (
                    <Key
                        key={element.note}
                        note={element.note}
                        color={element.color}
                        onKeyClick={handleKeyClick}
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
`
export default Piano;