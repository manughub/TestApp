export class Joke {

    setup: string;
    punchLine: string;
    hide:boolean;


    constructor(setup: string, punchLine: string){
    this.hide = true;
    this.setup = setup;
    this.punchLine = punchLine;

    }


    toggle() {

        this.hide = !this.hide;
        }

}
 