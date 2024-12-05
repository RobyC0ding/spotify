import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { SongComponent } from '../song/song.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule, SongComponent],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent {
  playlists: any[] = [];
  songs: any[] = [];
  selectedPlaylistId!: string;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    this.playlistService.getPlaylists().subscribe((playlists) => {
      this.playlists = playlists;
    });
  }

  onSelectPlaylist(playlistId: string) {
    this.selectedPlaylistId = playlistId;
    this.playlistService.getSongsByPlaylist(playlistId).subscribe((songs) => {
      this.songs = songs;
    });
  }

  // Getter per ottenere il percorso dell'immagine della playlist
  getImagePath(imageName: string): string {
    return `assets/images/playlist/${imageName}`;
  }

  // Getter per ottenere il percorso dell'immagine della canzone
  getSongImagePath(imageName: string): string {
    return `assets/images/songs/${imageName}`;
  }
}
