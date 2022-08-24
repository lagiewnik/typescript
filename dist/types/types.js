// export interface Task {
//     title: string;
//     done: boolean;
//     category?: Category //optional property + literal type
// }
export class Task {
    constructor(title, done, category = Category.GENERAL) {
        this.title = "New challenge";
        this.done = false;
        this.title = title;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
        this.LogCreatedDate();
        //console.log("constructor!!!!")
    }
    LogCreatedDate() {
        console.log(`Task created ${this.createdAt}`);
    }
}
//export type Category = "hobby"|"work"| "poker"|  "general" |"hobby"
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["POKER"] = "poker";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
