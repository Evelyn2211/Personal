import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { StudiesComponent } from "../studies/studies.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.css',
    imports: [HomeComponent, StudiesComponent, ProjectsComponent, ContactComponent]
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


}
