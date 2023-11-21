import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    { id: 4, name: 'Yefersson' },
    { id: 5, name: 'Guillermo' }
  ];

  selectedUserId: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(userId: number): void {
    this.selectedUserId = userId;
  }
}
