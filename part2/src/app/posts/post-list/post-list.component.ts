import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    { id: 1, title: 'Introducción a Angular 12', content: 'Explorando las nuevas características y mejoras en Angular 12, la última versión del popular framework de desarrollo web.' },
    { id: 2, title: 'Desarrollo de Aplicaciones con React y TypeScript', content: 'Descubre cómo utilizar React junto con TypeScript para construir aplicaciones web modernas y escalables.' },
    { id: 3, title: 'Principios SOLID en Programación Orientada a Objetos', content: 'Una mirada profunda a los principios SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) y cómo aplicarlos en tu código.' },
    { id: 4, title: 'Inteligencia Artificial: Avances Recientes y Futuro', content: 'Explorando los últimos avances en inteligencia artificial, desde modelos de lenguaje hasta avances en visión por computadora y aprendizaje profundo.' },
    { id: 5, title: 'Desarrollo de Aplicaciones Móviles con Flutter', content: 'Una guía paso a paso sobre cómo construir aplicaciones móviles atractivas y multiplataforma con Flutter, el marco de desarrollo de Google.' },
    { id: 6, title: 'Ciberseguridad: Tendencias y Mejores Prácticas', content: 'Analizando las tendencias actuales en ciberseguridad y proporcionando mejores prácticas para proteger tus aplicaciones y datos en un mundo digital.' }
  ];

  selectedPost: any;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(post: any): void {
    this.selectedPost = post;
  }
}