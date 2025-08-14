import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  private weatherService = inject(WeatherService);

  city = '';
  weatherData: any = null;
  loading = false;
  error = '';

  searchWeather() {
    if (!this.city.trim()) return;
    this.loading = true;
    this.error = '';
    this.weatherData = null;

    this.weatherService.getWeatherByCity(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Error fetching weather';
        this.loading = false;
      }
    });
  }
}
