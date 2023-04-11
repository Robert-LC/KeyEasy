import NoteModel from "./Models/NoteModel";

export const notes: NoteModel[] = [
  new NoteModel('C'),
  new NoteModel('C#'),
  new NoteModel('D'),
  new NoteModel('D#'),
  new NoteModel('E'),
  new NoteModel('F'),
  new NoteModel('F#'),
  new NoteModel('G'),
  new NoteModel('G#'),
  new NoteModel('A'),
  new NoteModel('A#'),
  new NoteModel('B')
];


export type NoteStatus = 'correct' | 'missedCorrect' | 'none';
