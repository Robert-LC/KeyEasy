import { Scale } from "tonal";
import ScaleType from "../enums/ScaleType";
import { sample } from 'lodash';
import ScaleModel from "../Models/ScaleModel";

class ScaleService {
    private _scales: ScaleModel[] = [];

    constructor(scaleType?: ScaleType) {
        if(scaleType !== undefined) {
            this._scales = this.GenerateScales(scaleType);
        }
    }
    /**
     * Initialize the list of scales that the ScaleService will manipulate.
     * @param scaleType Major, Minor, or All
     * @returns Generates a list of all scales depending on scaleType passed in
     */
    public GenerateScales(scaleType: ScaleType): ScaleModel[] {
        var scalesArray: ScaleModel[] = [];

        notes.forEach((note: string) => {
            
            //use tonalJS to get scale Data for each note name
            var scale = Scale.get(`${note} ${scaleType.toString()}`);

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
    public SelectRandomScale(): ScaleModel | undefined {
        var selectedScale: ScaleModel | undefined;

        selectedScale = sample(this._scales);
        
        if(selectedScale !== undefined) {
            const index: number = this._scales.indexOf(selectedScale);
            this._scales.splice(index, 1);
        }
        
        return selectedScale;
    }

    public GetScalesLeft(): number {
        return this._scales.length;
    }


    //TODO: will take the users input and build a list of scales of their choosing
    //so they can focus their progress (Tier 3)
    public CreateCustomScaleList() {

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