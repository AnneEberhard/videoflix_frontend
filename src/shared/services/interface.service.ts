export type VideoGenre = "documentation" | "blockbuster" | "comedy" | "action" | "drama" | "sitcom";

export const genres:VideoGenre[] = ["documentation" , "blockbuster" , "comedy" , "action" , "drama" , "sitcom"];

export interface Video {
    title: string;
    created_at?: string;
    description: string;
    genre: VideoGenre;
    id?: number;
    thumbnail: string | File;
    video_file: string | File;  
}


export interface User {
    name: string;
    email: string;
    password?: string;
}