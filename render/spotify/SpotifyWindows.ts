import {SpotifyClient}from '../api/SpotifyClient';

const Spotilocal = require('spotilocal');

export class SpotifyWindows implements SpotifyClient {
  private spotilocal;
  constructor () {
    this.spotilocal = new Spotilocal();
    this.spotilocal.init()
  }

  supportedActions () {
    return [
      'togglePlayPause'
    ];
  }

  isRunning () {
    return this.spotilocal.getStatus()
      .then(() => Promise.resolve(true))
      .catch(() => Promise.resolve(false));
  }

  getState () {
    return this.spotilocal.getStatus()
      .then(status => Promise.resolve({
        state: status.playing ? 'playing' : 'paused'
      }));
  }

  getTrack () {
    return this.spotilocal.getStatus()
      .then(status => Promise.resolve({
        name: status.track.track_resource.name,
        artist: status.track.artist_resource.name
      }));
  }

  togglePlayPause () {
    return this.getState()
    .then(({state}) => this.spotilocal.pause(state == 'playing'))
    .then(status => Promise.resolve({
      state: status.playing ? 'playing' : 'pause'
    }));
  }

  previousTrack () {
    return Promise.reject('Method "previousTrack" not supported on this platform.');
  }

  nextTrack () {
    return Promise.reject('Method "nextTrack" not supported on this platform.');
  }
}

export default SpotifyWindows
