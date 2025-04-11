import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlinkingCursorComponent } from "./blinking-cursor/blinking-cursor.component";

@Component({
  selector: 'app-root',
  imports: [LandingPageComponent, BlinkingCursorComponent],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
})
export class AppComponent {
  title = 'cv-page';
}
