export interface Task {
    title: string;
    done: boolean;
    category?: Category //optional property + literal type
}

export type Category = "hobby"|"work"| "poker"|  "general" |"hobby"