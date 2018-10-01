import { encodeData } from "./Utils";
import { Song } from "./api/Song";
import { SongMetadata } from "./api/SongMetadata";
import { SpotifyClient } from "./api/SpotifyClient";
import { SpotifyClientFactory } from "./SpotifyClientFactory";
import { join, reduce, split, toLower } from "lodash";

const request = require('request').defaults({ timeout: 5000 });
const async = require('async');


export class SpotifyService {
    private albumImagesCache = {};

    private spotifyClient: SpotifyClient;

    constructor() {
        this.spotifyClient = SpotifyClientFactory.getSpotifyClient();
    }

    private getAlbumImage(albumArtUrl: string, cb) {
        if (this.albumImagesCache[albumArtUrl]) {
            return cb(null, this.albumImagesCache[albumArtUrl])
        }
        async.retry(2, (finish) => {
            request(albumArtUrl, (err, status, body) => {
                if (err) {
                    console.error('Error getting album images', err, ' URL: ', albumArtUrl);
                    return finish(err, null)
                }
                try {
                    const parsed = JSON.parse(body);
                    finish(null, parsed.images);
                    this.albumImagesCache[albumArtUrl] = parsed.images;
                } catch (e) {
                    const msgParseFail = 'Failed to parse response from spotify api';
                    console.error(msgParseFail, 'URL USED: ', albumArtUrl);
                    finish(msgParseFail, null);
                }
            });
        }, cb);


    }

    public getCurrentSong(cb: (err: any, song?: Song) => any) {
        this.spotifyClient.getTrack().then((status: SongMetadata) => {
            console.log(JSON.stringify(status));

            if (status.trackid) {
                const result: Song = {
                    playing: true,
                    artist: status.artist || 'Unknown',
                    title: status.name,
                    album: {
                        name: status.album || 'Unknown',
                        images: null
                    },
                    duration: status.length
                };

                if (status.artUrl) {
                    return this.getAlbumImage(status.artUrl, (err, images) => {
                        if (!err) {
                            result.album.images = images;
                        }
                        return cb(null, result);
                    });
                } else {
                    return cb(null, result);
                }

            }
            return cb('No song', null)
        }, (err) => cb(err));
    }
}
