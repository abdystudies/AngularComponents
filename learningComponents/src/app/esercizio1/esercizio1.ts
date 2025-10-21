import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  imports: [],
  templateUrl: './esercizio1.html',
  styleUrl: './esercizio1.css'
})
export class Esercizio1 {
  show = true;
  message = 'esempio *ngIf!';

  toggle() {
    this.show = !this.show;
  }
}
