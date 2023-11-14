import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'part2';
  userId: number = 0;
  selectedUserId: number = 0;

  onViewDetails(userId: number) {
    console.log('View details clicked for user:', userId);
    this.selectedUserId = userId;
  }
}
