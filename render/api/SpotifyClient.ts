

export interface SpotifyClient {
    supportedActions();
    isRunning();
    getState();
    getTrack();
    togglePlayPause();
    previousTrack();
    nextTrack();
}
