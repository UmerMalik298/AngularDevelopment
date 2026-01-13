import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsPage implements OnInit {
  products: any[] = [];
  loading = true;
  error = '';

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.products = res.products ?? res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load products';
        this.loading = false;
      }
    });
  }
}
