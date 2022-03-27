export class Post {
    username: string;
    thePost: string;
    timestamp: number;


    constructor (usr: string, post: string, time: number) {
        this.username = usr;
        this.thePost = post;
        this.timestamp = time;
    }


    console () {

        console.log(this.username);
    }
    

}