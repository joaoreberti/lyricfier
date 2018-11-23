import { Song } from "./api/Song";
import { SongMetadata } from "./api/SongMetadata";
import { SpotifyClient } from "./api/SpotifyClient";
import { SpotifyClientFactory } from "./SpotifyClientFactory";
import { join, reduce, split, toLower } from "lodash";


export class SpotifyService {
    private albumImageCache = {};

    private spotifyClient: SpotifyClient;

    constructor() {
        this.spotifyClient = SpotifyClientFactory.getSpotifyClient();
    }

    public getCurrentSong(cb: (err: any, song?: Song) => any) {
        this.spotifyClient.getTrack().then((status: SongMetadata) => {
            console.log('Retrieved song metadata: ' + JSON.stringify(status));

            if (status.id || status.trackid) {
                const result: Song = {
                    playing: true,
                    artist: status.artist || 'Unknown',
                    title: status.name,
                    album: {
                        name: status.album || 'Unknown',
                        imageUrl: status.artUrl || null
                    },
                    duration: status.length
                };
                return cb(null, result);
            }
            return cb('No song', null)
        }, (err) => cb(err));
    }
}
