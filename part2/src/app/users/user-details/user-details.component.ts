import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userId: number | undefined;
  @Input() selectedUser: any;
  @Input() users: { id: number; name: string; description?: string }[] = [];

  constructor() { }

  getUserName(): string | undefined {
    const user = this.users.find(u => u.id === this.userId);
    return user ? user.name : undefined;
  }

  getUserDescription(): string | undefined {
    const user = this.users.find(u => u.id === this.userId);
    return user ? user.description : undefined;
  }
}
