import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  standalone: true,
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent {
  @Input() title!: string; // Titolo della canzone
  @Input() artist!: string; // Artista della canzone
  @Input() image!: string; // Immagine della canzone

  // Getter per il percorso dell'immagine, con fallback
  get imagePath(): string {
    // Se l'immagine non viene passata, restituisci un'immagine di default
    return this.image ? `assets/images/song/${this.image}` : 'assets/images/default-song.png';
  }
}
