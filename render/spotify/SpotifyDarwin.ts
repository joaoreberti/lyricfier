import { SpotifyClient } from '../api/SpotifyClient';

const spotify = require('spotify-node-applescript');

export class SpotifyDarwin implements SpotifyClient {

    supportedActions() {
        return [
            'togglePlayPause',
            'previousTrack',
            'nextTrack'
        ];
    }

    isRunning() {
        return new Promise((resolve, reject) => spotify.isRunning(this.genericCallback(resolve, reject)))
    }

    getState() {
        return new Promise((resolve, reject) => spotify.getState(this.genericCallback(resolve, reject)));
    }

    getTrack() {
        return new Promise((resolve, reject) => spotify.getTrack(this.genericCallback(resolve, reject)));
    }

    togglePlayPause() {
        return new Promise((resolve, reject) => spotify.playPause(this.genericCallback(resolve, reject)));
    }

    previousTrack() {
        return new Promise((resolve, reject) => spotify.previous(this.genericCallback(resolve, reject)));
    }

    nextTrack() {
        return new Promise((resolve, reject) => spotify.next(this.genericCallback(resolve, reject)))
    }

    private genericCallback(promiseResolve, promiseReject) {
        return (err, resolve) => {
            console.log(err, resolve);
            if (err) {
                promiseReject(err)
            } else {
                promiseResolve(resolve)
            }
        }
    }
}
