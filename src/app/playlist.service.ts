import { Injectable } from '@angular/core';
import { DUMMY_PLAYLIST } from './dummy-playlist';
import { DUMMY_SONG } from './dummy-song';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  // Restituisce tutte le playlist
  getPlaylists() {
    return of(DUMMY_PLAYLIST);
  }

  // Restituisce le canzoni associate a una playlist
  getSongsByPlaylist(playlistId: string) {
    return of(DUMMY_SONG.filter((song) => song.playlistId === playlistId));
  }
}
