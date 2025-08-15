import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // private api = inject(ApiService);

  constructor(private api: ApiService) { }

  ngOnInit() { 
      this.api.get('Services', { lang: 'ar' }, (res) => {
        console.log('Data fetched:', res);
      });
   }

}
