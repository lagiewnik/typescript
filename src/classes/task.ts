import {Category} from "../types/types.js";

export class TaskClass {
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

//const task = new TaskClass()