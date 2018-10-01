import { SpotifyClient } from "../api/SpotifyClient";

export class SpotifyDefault implements SpotifyClient {
  constructor() {
    console.error('[hyper-spotify] Unsupported OS')
  }

  supportedActions() {
    return []
  }

  isRunning() {
    Promise.resolve(false)
  }
  getState() {
    return Promise.reject('Method "getState" not supported on this platform.');
  }
  getTrack() {
    return Promise.reject('Method "getTrack" not supported on this platform.');
  }
  togglePlayPause() {
    return Promise.reject('Method "togglePlayPause" not supported on this platform.');
  }
  previousTrack() {
    return Promise.reject('Method "previousTrack" not supported on this platform.');
  }
  nextTrack() {
    return Promise.reject('Method "nextTrack" not supported on this platform.');
  }
}
