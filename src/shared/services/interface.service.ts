/**
 * this service delacres all models used in the frontend
 */

export type VideoGenre = "Dystopia" | "Fantasy" | "Historical" | "Spy" | "Contemporary";


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