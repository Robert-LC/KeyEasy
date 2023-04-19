import { Scale } from "tonal";
import ScaleType from "../enums/ScaleType";
import { sample } from 'lodash';
import ScaleModel from "../Models/ScaleModel";
import NoteModel from "../Models/NoteModel";

/**
 * ScaleService is responsible for handling scale related logic.
 * It can generate a list of scales, select a random scale, and create a custom list of scales.
 */
class ScaleService {

    /**
     * Initialize the list of scales that the ScaleService will manipulate.
     * @param scaleType Major, Minor, or All
     * @returns Generates a list of all scales depending on scaleType passed in
     */
    public GenerateScales(scaleType: ScaleType): ScaleModel[] {
        var scalesArray: ScaleModel[] = [];

        notes.forEach((note: string) => {
            // Use tonalJS to get scale Data for each note name
            var scale = Scale.get(`${note} ${scaleType.toString()}`);
            
            // Create NoteModel instances for each note in scale.notes
            const noteModels: NoteModel[] = scale.notes.map((noteName: string) => new NoteModel(noteName));
            
            // Use data to create ScaleModels
            const model = new ScaleModel(scale.name, noteModels);
            scalesArray.push(model);
        });
          
        return scalesArray;
    }

    /**
     * Selected a random scale from the list of scales that were created
     * returns it and removes it from the list so it cant be picked in the future.
     * @returns The random scale that was selected
     */
    public SelectRandomScale(scaleList: ScaleModel[]): ScaleModel | undefined  {
        if (scaleList.length === 0) {
            return undefined;
        }
      
        const selectedScale: ScaleModel = sample(scaleList)!;
      
        const index: number = scaleList.indexOf(selectedScale);
        scaleList.splice(index, 1);
      
        return selectedScale;
    }
}

const notes: string[] = [
    "C","C#",
    "D","D#",
    "E",
    "F","F#",
    "G","G#",
    "A","A#",
    "B"
];
  
export default ScaleService;