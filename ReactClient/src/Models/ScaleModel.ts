import NoteModel from "./NoteModel";

class ScaleModel {
  Name: string;
  Notes: NoteModel[];

  constructor(name: string, notes: NoteModel[]) {
    this.Name = name;
    this.Notes = notes; 
  }
}

export default ScaleModel