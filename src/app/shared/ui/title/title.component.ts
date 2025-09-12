import { Component, input } from '@angular/core';

@Component({
  selector: 'title-shared',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  public title = input.required<string>();
}
