import {SpotifyClient}from './api/SpotifyClient';
import {SpotifyDarwin}from "./spotify/SpotifyDarwin";
import {SpotifyLinux}from "./spotify/SpotifyLinux";
import {SpotifyDefault}from "./spotify/SpotifyDefault";

const os = require('os');

export class SpotifyClientFactory {

  static getSpotifyClient(): SpotifyClient {
    switch (os.platform()) {
      case 'darwin':
        return new SpotifyDarwin();
      case 'linux':
        return new SpotifyLinux();
      case 'win32':
        // return new SpotifyWindows();
      default:
        return new SpotifyDefault()
    }
  }

}
