import {Component} from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SongComponent, CommonModule, PlaylistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedPlaylist() {
    let p = this.playlists.find(p => p.id === this.selectedPlaylistId);
    return this.users.find(playlist => playlist.id === this.selectedUserId);
  }

  onSelectPlaylist(id: string) {
    this.selectedPlaylistId = id;
    console.log("User selected id: " + id);
  }
}
