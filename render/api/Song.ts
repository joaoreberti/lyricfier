

export interface Song {
    lyric?: string;
    title: string;
    artist: string;
    sourceUrl?: string;
    sourceName?: string;
    playing: boolean;
    album: {
        name: string;
        imageUrl: string;
    };
    duration: number;
}
