import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {
  users: any[] = [];
  loading = true;
  error = '';

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
