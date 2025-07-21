import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.scss',
})
export class Inventory {
  protected title = 'signals-practice';
  quantity = signal<number>(0);
  options = signal<number[]>([1, 2, 3, 4, 5]);

  constructor() {
    console.log(this.quantity());
  }

  onQuantityChange(arg0: number) {
    this.quantity.set(arg0);
  }
}
