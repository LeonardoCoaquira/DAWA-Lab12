import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    { id: 1, title: 'Concierto Épico de Linkin Park', content: 'Linkin Park ofreció un concierto épico en el estadio principal, tocando todos sus éxitos y conectando con la audiencia de una manera única.' },
    { id: 2, title: 'Nuevo Álbum de Tokio Hotel en Producción', content: 'Tokio Hotel anunció oficialmente que están trabajando en su próximo álbum, prometiendo un sonido fresco y emocionante para sus fanáticos.' },
    { id: 3, title: 'Lady Gaga en el Escenario Mundial', content: 'Lady Gaga deslumbró al mundo con su última actuación en un evento global, mostrando su increíble talento y estilo único.' },
    { id: 4, title: 'Rammstein Anuncia Gira Mundial', content: 'Rammstein emocionó a sus seguidores al revelar planes para una gira mundial, llevando su espectáculo pirotécnico y potente música a todos los rincones del planeta.' },
    { id: 5, title: 'Linked Horizon: Banda Sonora de Ataque de los Titanes', content: 'Linked Horizon lanzó su última obra maestra: la banda sonora para el épico "Shingeki no Kyojin" (Attack on Titan). Este emocionante lanzamiento tuvo lugar durante el emocionante episodio final del anime, transmitido el 4 de noviembre. La música captura magistralmente la intensidad y emoción de la conclusión de este famoso anime.' },
    { id: 6, title: 'Zedd y Martin Garrix: Colaboración Épica', content: 'Zedd y Martin Garrix sorprendieron a la industria musical al anunciar una colaboración que promete ser un éxito mundial, fusionando sus distintivos estilos musicales.' }
  ];

  selectedPost: any;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(post: any): void {
    this.selectedPost = post;
  }
}
