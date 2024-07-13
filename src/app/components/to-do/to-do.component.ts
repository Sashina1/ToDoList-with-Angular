import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  newTask: string = ''; // Stringa per memorizzare il nuovo compito da aggiungere
  tasks: Task[] = [];   // Array per memorizzare l'elenco dei compiti

/**
 * funzione per ggiungere una task.
 * 
 * dopo aver rimosso spazi bianchi iniziali e finali,
 * se l'input non è vuoto aggiunge il nome inserito ad input
 * all'array di task, aggiungendo uno stato "completato impostato su falso"
 * e subito doporesetta il campo input
 */
addTask(): void {
  if (this.newTask.trim()) { 
    this.tasks.push({ name: this.newTask.trim(), completed: false }); 
    this.newTask = ''; 
  }
}


/**
 * funzione per cambiare stato alla task.
 * 
 * inverte lo stato di completamento dell'attività
 * (da vero a falso o da falso a vero)
 * tramite checkbox
 * @param task 
 */
changeTask(task: Task): void {
  task.completed = !task.completed; 
}

/**
 * funzione per eliminare un'attività.
 * 
 * prende come parametro un'attività (task), memorizza nella variabile `index`
 * l'indice dell'attività trovata nell'array `tasks`.
 * Se l'indice è maggiore o uguale a zero (cioè, se l'attività è trovata),
 * rimuove l'attività dall'array.
 * @param task 
 */
deleteTask(task: Task): void {
  const index = this.tasks.indexOf(task); 
  if (index >= 0) {
    this.tasks.splice(index, 1);
  }
}

}