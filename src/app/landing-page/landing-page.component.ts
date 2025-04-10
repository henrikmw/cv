import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: '../../styles.css'
})
export class LandingPageComponent {
  displayedText = '';
  private fullText = 'Henrik Moe Wæhre';
  private index = 0;

  ngOnInit() {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriterEffect(), 150);
    }
  }
}
