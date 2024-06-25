import { Routes } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { HomeComponent } from './componets/home/home.component';
import { LanguageCardsComponent } from './componets/language-cards/language-cards.component';
import { ContactComponent } from './componets/contact/contact.component';
import { MainContentComponent } from './componets/main-content/main-content.component';
import { StudiesComponent } from './componets/studies/studies.component';
import { ProjectsComponent } from './componets/projects/projects.component';

export const routes: Routes = [
    
    {path:'', component :MainContentComponent},
    {path:'d',component:HomeComponent},

    {path:'contact', component : ContactComponent},
    {path:'studies',component:StudiesComponent},
    {path:'projects',component:ProjectsComponent}
];
