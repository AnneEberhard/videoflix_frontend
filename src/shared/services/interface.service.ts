export type VideoGenre = "Fantasy" | "Dystopia" | "Historical" | "Spy" | "Contemporary";

export const genres:VideoGenre[] = ["Fantasy" , "Dystopia" , "Historical" , "Spy" , "Contemporary"];

export interface Video {
    title: string;
    created_at?: string;
    description: string;
    genre: VideoGenre;
    id?: number;
    thumbnail_url: string | File;
    video_file_url: string | File;  
}


export interface User {
    name: string;
    email: string;
    password?: string;
}