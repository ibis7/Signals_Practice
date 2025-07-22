import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
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
  selectedVehicle = signal<Vehicle>({
    name: 'Car',
    id: 1,
    price: 20000,
    type: 'Sedan',
  });
  vehicles = signal<Vehicle[]>([]);
  calculatedPrice = computed(
    () => this.selectedVehicle().price * this.quantity()
  );

  displayInConsole = effect(() =>
    console.log(`Current quantity: ${this.quantity()}`)
  );

  constructor() {
    console.log(this.quantity());
    this.quantity.update((current) => current + 1);
    this.selectedVehicle.update((v) => ({
      ...v,
      price: v.price + v.price * 0.1,
    })); // Increase price by 10%
  }

  onQuantityChange(arg0: number) {
    this.quantity.set(arg0);
  }
}

export interface Vehicle {
  id: number;
  name: string;
  type?: string;
  price: number;
}
