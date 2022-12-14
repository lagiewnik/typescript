// export interface Task {
//     title: string;
//     done: boolean;
//     category?: Category //optional property + literal type
// }

export class Task {
    title: string = "New challenge"
    private done: boolean = false;
    category?: Category;
    private readonly createdAt : Date;

    constructor(title: string, done: boolean, category: Category = Category.GENERAL) {
        this.title = title;
        this.done = done;
        this.category  = category;
        this.createdAt = new Date();
        this.LogCreatedDate()
        //console.log("constructor!!!!")
    }

    public LogCreatedDate() {
        console.log(`Task created ${this.createdAt}`)
    }
}
//export type Category = "hobby"|"work"| "poker"|  "general" |"hobby"

export enum Category {
    GENERAL = 'general',
    WORK = 'work',
    POKER = 'poker',
    HOBBY = 'hobby'
}