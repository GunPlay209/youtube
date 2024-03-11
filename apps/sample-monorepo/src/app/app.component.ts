import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConsolesWebUiComponent } from '@sample-monorepo/consoles-web-ui';

@Component({
  standalone: true,
  imports: [CommonModule, ConsolesWebUiComponent],
  selector: 'sample-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sample-monorepo';
  active = false;
}
