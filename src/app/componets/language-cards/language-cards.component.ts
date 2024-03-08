import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-cards.component.html',
  styleUrl: './language-cards.component.css'
})
export class LanguageCardsComponent implements OnInit {
  languages = [
    { name: 'JavaScript', logo: 'assets/js-logo.png', description: 'Lenguaje de programación ampliamente utilizado en desarrollo web.' },
    { name: 'Python', logo: 'assets/python-logo.png', description: 'Lenguaje de programación de alto nivel conocido por su simplicidad y versatilidad.' },
    { name: 'Java', logo: 'assets/java-logo.png', description: 'Lenguaje de programación popular utilizado en el desarrollo de aplicaciones empresariales.' },
    { name: 'C#', logo: 'assets/csharp-logo.png', description: 'Lenguaje de programación desarrollado por Microsoft utilizado en el desarrollo de aplicaciones de escritorio y web.' },
    { name: 'Ruby', logo: 'assets/ruby-logo.png', description: 'Lenguaje de programación conocido por su enfoque en la simplicidad y la productividad.' },
    { name: 'Swift', logo: 'assets/swift-logo.png', description: 'Lenguaje de programación utilizado para el desarrollo de aplicaciones en plataformas de Apple.' }
  ];
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
