import { Component } from '@angular/core';
import { Inventory } from './components/inventory/inventory';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [Inventory],
})
export class App {}
