import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { NoteType } from '../helpers';
import Key from './Key';

type Props = {
    notes: NoteType[]
}

/**
 * Piano component generates all Key's in an octave (12 notes/keys)
 * @returns One octave of a working clickable piano.
 */
const Piano: React.FC<Props> = ({ notes }) => (
    <Wrapper>
        <div>
        {notes.map((element: NoteType) => (
            <Key
                key={element.note}
                note={element.note}
                color={element.color} 
            />
        ))}
    </div>
    </Wrapper>
);

//Styled components
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export default Piano;