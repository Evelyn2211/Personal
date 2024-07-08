import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  formData = {
    name: '',
    email: '',
    message: ''
  };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 constructor(){
  
 }

  submitForm() {
    console.log('Formulario enviado:', this.formData);
    // Aquí puedes implementar la lógica para enviar los datos del formulario a tu servidor, API, etc.
    // Por ahora, solo se imprime en la consola.
  }

}
