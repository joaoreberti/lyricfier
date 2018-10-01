

export interface Song {
    lyric?: string;
    title: string;
    artist: string;
    sourceUrl?: string;
    sourceName?: string;
    playing: string;
    album: {
        name: string;
        images: string;
    };
    duration: number;
}
