import ScaleType from "../enums/ScaleType";
import ScaleService from "../services/ScaleService";
import ScaleModel from "./ScaleModel";

class GameModel {
    constructor(scaleType: ScaleType, scaleSvc: ScaleService) {
        this.scaleSvc = scaleSvc;
        this.scalesLeftToGuess = scaleSvc.GenerateScales(scaleType);
        this.maxScore = this.calculateMaxScore();
        this.currentScale = scaleSvc.SelectRandomScale(this.scalesLeftToGuess)
        this.currentNoteIndex = 0;
        this.currentScore = 0;
    }

    public currentScore: number;
    public maxScore?: number; 
    public scalesLeftToGuess: ScaleModel[];
    public currentScale: ScaleModel | undefined;
    public currentNote?: string;
    public currentNoteIndex: number;

    private scaleSvc: ScaleService;

    private calculateMaxScore(): number {
        return this.scalesLeftToGuess.reduce((total: number, scale: ScaleModel) => total + scale.Notes.length, 0);
    }

    public nextScale(): void {
        this.currentScale = this.scaleSvc.SelectRandomScale(this.scalesLeftToGuess);
        this.currentNoteIndex = 0;
    }

    public reset(): void {
        this.currentScore = 0;
        this.currentNoteIndex = 0;
        this.scalesLeftToGuess = this.scaleSvc.GenerateScales(ScaleType.Major);
        this.maxScore = this.calculateMaxScore();
        this.currentScale = this.scaleSvc.SelectRandomScale(this.scalesLeftToGuess);       
    }
}

export default GameModel;
