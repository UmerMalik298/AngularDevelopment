import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  users: any[] = [];
  loading = true;
  error = '';
  searchText = '';

  get filteredOrders() {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.users;

    return this.users.filter((u: any) =>{
      const id = String(u.id ?? '').toLowerCase();
      const first = String(u.firstName ?? '').toLowerCase();
      const last = String(u.lastName ?? '').toLowerCase();
      const email = String(u.email ?? '').toLowerCase();
      return id.includes(q) 
      || first.includes(q) 
      || last.includes(q)
       || email.includes(q);
    }
    );
  }

  constructor(private api: Api) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: (res) => {
        this.users = res.users ?? [];
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = 'Could not load users';
        this.loading = false;
      },
    });
  }
}
