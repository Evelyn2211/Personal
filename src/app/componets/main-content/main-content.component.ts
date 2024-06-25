import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  constructor() {}
  
  ngOnInit(): void {
    
  }

  submitForm() {
    console.log('Formulario enviado:', this.formData);
    // Aquí puedes implementar la lógica para enviar los datos del formulario a tu servidor, API, etc.
    // Por ahora, solo se imprime en la consola.
  }
}
