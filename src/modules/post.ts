export class Post {

    username: string;
    text: string;
    category: number
    time: Date;

    constructor (uname: string, txt: string, categ: number, t: Date) {
    
        this.username = uname;
        this.text = txt;
        this.category = categ;
        this.time = t;
    }

}


