export interface Task {
    title: string;
    done: boolean;
    category?: Category //optional property + literal type
}

//export type Category = "hobby"|"work"| "poker"|  "general" |"hobby"

export enum Category {
    GENERAL = 'general',
    WORK = 'work',
    POKER = 'poker',
    HOBBY = 'hobby'
}