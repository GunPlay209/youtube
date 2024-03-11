import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sample-monorepo-consoles-web-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consoles-web-ui.component.html',
  styleUrl: './consoles-web-ui.component.css',
})
export class ConsolesWebUiComponent {
   @Input({required: true}) title!: string;
   @Input({required: true}) link!: string;
   @Input({required: true}) imgSrc!: string;
}
