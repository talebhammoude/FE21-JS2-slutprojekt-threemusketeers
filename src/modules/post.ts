export class Post {

    username: string;
    text: string;
    time: Date;

    constructor (uname: string, txt: string, t: Date) {
    
        this.username = uname;
        this.text = txt;
        this.time = t;
    }

}


