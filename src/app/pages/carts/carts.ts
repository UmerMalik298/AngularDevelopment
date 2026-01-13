import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  imports: [CommonModule],
  templateUrl: './carts.html',
  styleUrl: './carts.css',
})
export class Carts implements OnInit {
  carts : any[] = [];
  loading = true;
  error = ''

  constructor(private api : Api){}

  
   
  ngOnInit(): void {
    this.api.getCarts().subscribe({
      next: (res)=>{
        this.carts = res.carts ?? res;
        this.loading = false;
      },
       error: () => {
        this.error = 'Could not load products';
        this.loading = false;
       }
    });
  }

}
