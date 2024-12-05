import { Component, OnInit } from '@angular/core'; // Importa il modulo necessario per componenti Angular
import { PlaylistService } from './playlist.service'; // Importa il servizio che gestisce la logica delle playlist e delle canzoni
import { HeaderComponent } from './header/header.component'; // Importa HeaderComponent per il logo e la navigazione
import { SongComponent } from './song/song.component'; // Importa SongComponent per visualizzare le canzoni
import { CommonModule } from '@angular/common'; // Importa CommonModule per utilizzare direttive come ngFor e ngIf

@Component({
  selector: 'app-root', // Il selettore per il componente principale
  templateUrl: './app.component.html', // Il template HTML del componente
  styleUrls: ['./app.component.css'], // Il CSS del componente
  imports: [HeaderComponent, SongComponent, CommonModule], // Aggiunge i componenti e CommonModule all'elenco degli import
})
export class AppComponent implements OnInit {
  playlists: any[] = []; // Array per memorizzare le playlist
  songs: any[] = []; // Array per memorizzare le canzoni
  selectedPlaylist: any = null; // Variabile per tenere traccia della playlist selezionata

  constructor(private playlistService: PlaylistService) {} // Inietta PlaylistService per poter fare le chiamate alle playlist e canzoni

  ngOnInit() {
    // Metodo eseguito quando il componente viene inizializzato
    // Carica tutte le playlist
    this.playlistService.getPlaylists().subscribe((data) => {
      this.playlists = data; // Memorizza le playlist nella variabile 'playlists'
    });
  }

  onSelectPlaylist(playlist: any) {
    // Metodo chiamato quando l'utente seleziona una playlist
    this.selectedPlaylist = playlist; // Imposta la playlist selezionata

    // Carica le canzoni della playlist selezionata
    this.playlistService.getSongsByPlaylist(playlist.id).subscribe((data) => {
      this.songs = data; // Memorizza le canzoni nella variabile 'songs'
    });
  }
}
