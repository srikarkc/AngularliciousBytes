import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  greeting = '';

  constructor(private greetingService: GreetingService) {}

  displayGreeting() {
    this.greetingService.getGreeting(this.userName).subscribe(
      (response) => {
        this.greeting = response;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
