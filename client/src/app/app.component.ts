import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (response) => ((this.users = response), console.log(response)),
      error: (error) => console.log(error),
    });
  }
}
