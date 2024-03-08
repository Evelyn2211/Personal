import { Routes } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { HomeComponent } from './componets/home/home.component';
import { LanguageCardsComponent } from './componets/language-cards/language-cards.component';
import { ContactComponent } from './componets/contact/contact.component';

export const routes: Routes = [
    {path:'', component :HeaderComponent} ,
    {path:'home', component :HomeComponent},
    {path:'skills', component :LanguageCardsComponent},
    {path:'cel', component : ContactComponent}
];
