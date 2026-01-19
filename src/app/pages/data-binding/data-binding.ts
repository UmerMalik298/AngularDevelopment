import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sign } from 'crypto';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css'],
})
export class DataBinding {
  project: string = 'Angular Developer';
  experience: number = 2;
  
name = signal('Umer');
number = signal(0);
constructor() {}

increment () : void {
  this.number.update(n => n + 1);

}
decrement () : void {
 this.number.update(n => n -1);

}

reset () : void {
  this.number.set(0);
}

StudentList = [
  {id: 1, name: 'Umer', age: 24, status: true},
  {id: 2, name: 'Ali', age: 22, status: false},
  {id: 3, name: 'Ahsan', age: 23, status: true},
  {id: 4, name: 'Ahmed', age: 21, status: false},
]

}
