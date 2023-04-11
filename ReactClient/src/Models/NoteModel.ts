
class NoteModel {
    Key: string;
    Name: string;  
    Color: string;

    constructor(name: string) {
        this.Name = name;

        if(this.Name.includes('#')) {
            this.Color = 'black';
        } else {
            this.Color = 'white';
        }

        this.Key = this.Name.replace('#', 'Sharp');
    }
}

export default NoteModel