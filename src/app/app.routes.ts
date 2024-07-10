import { Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component'; 

export const routes: Routes = [
  { path: 'to-do', component: ToDoComponent },  // Definisci la rotta per il nuovo componente
  { path: '', redirectTo: '/to-do', pathMatch: 'full' }  // Reindirizza di default al nuovo componente (opzionale)
];
