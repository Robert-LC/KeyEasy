import React, { useState } from 'react';
import { notes } from '../helpers';
import Piano from './Piano';

import '../styles/Game.css';
import { NoteStatus } from '../helpers';

import GameModel from '../Models/GameModel';
import { useScaleService } from '../contexts/ScaleServiceContext';
import ScaleType from '../enums/ScaleType';
import ScaleModel from '../Models/ScaleModel';
import ScaleService from '../services/ScaleService';
import NoteModel from '../Models/NoteModel';

/**
 * Game displays the piano and accompanying information to the user
 */
const Game: React.FC = () => {
    const scaleSvc: ScaleService = useScaleService();
    const gameModel: GameModel = new GameModel(ScaleType.Major, scaleSvc); 
   
    //State Variables
    const [currentScale, setCurrentScale] = useState<ScaleModel>(gameModel.currentScale!); 
    const [score, setScore] = useState<number>(gameModel.currentScore);

    const [currentNote, setCurrentNote] = useState<number>(1);
    const [noteStatuses, setNoteStatuses] = useState<Record<string, NoteStatus>>({});
    const [guesses, setGuesses] = useState<number>(2);

    const [showNoteNames, setShowNoteNames] = useState<boolean>(false);

    const handleGuess = (note: NoteModel): void => {
        if (isCorrect(note)) {
            // Mark the key as correct (make it green)
            setNoteStatuses(prevNoteStatuses => ({
                ...prevNoteStatuses,
                [note.Name]: 'correct',
            }));

            setScore(score + 1);
            nextNote();
        } 
        else {
            setGuesses(guesses - 1);
            
            if (guesses === 0) {
                // mark the correct key as missed (make it orange)
                setNoteStatuses((prevNoteStatuses) => ({
                    ...prevNoteStatuses,
                    [currentScale!.Notes[currentNote - 1].Name]: 'missedCorrect',
                }));

                setScore(score - 1);
                nextNote();
            }
        }
    }

    // Move to the next note in the scale
    const nextNote = (): void => {
        if (currentNote + 1 <= currentScale!.Notes.length) {
            setCurrentNote(currentNote + 1);
            setGuesses(2);
        }
        else {
            nextScale();
        }
    };

    const nextScale = (): void => {
        gameModel.nextScale();
        setCurrentScale(gameModel.currentScale!);
        setCurrentNote(1);
        setGuesses(2);

        // Reset the note statuses
        var resetNoteStatuses: Record<string, NoteStatus> = {};
        notes.forEach(note => {
            resetNoteStatuses[note.Name] = 'none';
        });

        setNoteStatuses(resetNoteStatuses);
    };

    const numberSuffix = (num: number): string => {
        switch (num % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const isCorrect = (note: NoteModel): boolean => {
        return note.Name === currentScale!.Notes[currentNote - 1].Name
    }

    const handleToggleNoteNames = () => {
        setShowNoteNames(!showNoteNames);
    };

    return( 
        <div>
            <div className='info-container'>
                <div className='push-left'>
                    <h1 className='info-text'>Current Scale: <p className='highlight-text'>{currentScale?.Name}</p></h1>
                    <div className="note-names-toggle">
                        <label htmlFor="noteNamesToggle" className='sub-text bold'>Show Note Names</label>
                        <input type="checkbox" id="noteNamesToggle" checked={showNoteNames} onChange={handleToggleNoteNames}/>
                    </div>
                </div>    

                <div>
                    <h1 className='info-text'>Score: {score}/{gameModel.maxScore}</h1>
                    <h3 className='sub-text'>Tries Left: {guesses + 1}</h3>
                </div>
            </div>
            
            <h1 className='note-prompt'>Click the <p className='highlight-text'>{currentNote}{numberSuffix(currentNote)}</p> Note</h1>
            <Piano 
                notes={notes} 
                onKeyClick={handleGuess}
                noteStatuses={noteStatuses}
                showNoteNames={showNoteNames}
            />


            <h1 className='demo-disclaimer'><em>Demo Mode only offers C and C# Major for Practice</em></h1>
        </div>
    );
}

export default Game;