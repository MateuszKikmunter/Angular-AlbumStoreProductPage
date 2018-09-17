import { Track } from './track';

export interface Album {
    id: number;
    artist: string;
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}
