import React from 'react';
import styled from 'styled-components';
import { NoteType } from './helpers';
import Key from './Key';

type Props = {
    notes: NoteType[]
}

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
    height: 100vh;
`
export default Piano;