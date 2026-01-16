import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carts.html',
  styleUrl: './carts.css',
})
export class Carts implements OnInit {
  carts : any[] = [];
  loading = true;
  error = ''
  searchText = '';

  get filteredCarts() {
     const q = this.searchText.toLowerCase();
     if (!q) return this.carts;
      return this.carts.filter((c: any) =>
      String(c.id).toLowerCase().includes(q)
    );

  }

  constructor(private api : Api){}

  
   
  ngOnInit(): void {
    this.api.getCarts().subscribe({
      next: (res)=>{
        this.carts = res.carts ?? res;
        this.loading = false;
      },
       error: () => {
       this.error = 'Could not load carts';   
        this.loading = false;
       }
    });
  }

}
