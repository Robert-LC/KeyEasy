import { Scale } from "tonal";
import ScaleType from "../enums/ScaleType";
import { sample } from 'lodash';
import ScaleModel from "../Models/ScaleModel";

class ScaleService {
    private _scales: ScaleModel[] = [];

    constructor(scaleType: ScaleType) {
        this._scales = this.initScales(scaleType);
    }

    /**
     * Initialize the list of scales that the ScaleService will manipulate.
     * @param scaleType Major, Minor, or All
     * @returns Generates a list of all scales depending on scaleType passed in
     */
    private initScales(scaleType: ScaleType): ScaleModel[] {
        var scalesArray: ScaleModel[] = [];

        notes.forEach((note: string) => {
            
            //use tonalJS to get scale Data for each note name
            const scale = Scale.get(`${note} ${scaleType}`);

            //use data to create ScaleModels
            const model = new ScaleModel(scale.name, scale.notes);
            scalesArray.push(model);
        });

        return scalesArray;
    }

    /**
     * Selected a random scale from the list of scales that were created
     * returns it and removes it from the list so it cant be picked in the future.
     * @returns The random scale, or undefined if there are no scales left to pick from.
     */
    public selectRandomScale(): ScaleModel | undefined {

        var selectedScale: ScaleModel | undefined;

        selectedScale = sample(this._scales);
        
        if(selectedScale !== undefined) 
        {
            const index: number = this._scales.indexOf(selectedScale);
            this._scales.splice(index, 1);
        }
        
        return selectedScale;
    }


    //TODO: will take the users input and build a list of scales of their choosing
    //so they can focus their progress (Tier 3)
    public createCustomScaleList() {

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