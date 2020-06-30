import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos = [
    {
      url:
        'https://ichef.bbci.co.uk/news/1024/branded_news/1CE8/production/_109100470_ed01bd7f-0c64-4f6b-9d29-f43261119ade.jpg',
      description: 'Leão',
    },
    {
      url:
        'https://ichef.bbci.co.uk/news/1024/branded_news/1CE8/production/_109100470_ed01bd7f-0c64-4f6b-9d29-f43261119ade.jpg',
      description: 'Leão',
    },
  ];
}
