export type VideoGenre = "Dystopia" | "Fantasy" | "Historical" | "Spy" | "Contemporary";

export const genres:VideoGenre[] = ["Historical" , "Fantasy" , "Spy" , "Contemporary"];

export interface Video {
    title: string;
    created_at?: string;
    description: string;
    genre: VideoGenre;
    id?: number;
    thumbnail_file_url: string;
    video_file_url: string;  
}


export interface User {
    name: string;
    email: string;
    password?: string;
}