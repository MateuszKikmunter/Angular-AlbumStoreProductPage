import { Track } from './track';

export class Album {
    id: number;
    artist: string;
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}
