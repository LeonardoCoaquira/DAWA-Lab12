import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'John', description: 'Developer' },
    { id: 2, name: 'Jane', description: 'Designer' },
    { id: 3, name: 'Doe', description: 'Tester' },
    { id: 4, name: 'Leonardo', description: 'Product Manager' },
    { id: 5, name: 'Juan', description: 'Analyst' },
    { id: 6, name: 'Manuel', description: 'Engineer' },
    { id: 7, name: 'Samantha', description: 'UX Designer' },
    { id: 8, name: 'Nicoll', description: 'QA Engineer' },
  ];

  selectedUserId: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(userId: number): void {
    this.selectedUserId = userId;
  }
}
