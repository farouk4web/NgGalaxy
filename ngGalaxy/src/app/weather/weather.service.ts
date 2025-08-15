import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    // Step 1: Get coordinates from city name
    return this.http.get<any[]>(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`
    ).pipe(
      switchMap((geo) => {
        if (!geo.length) throw new Error('City not found');
        const { lat, lon } = geo[0];
        // Step 2: Fetch weather
        return this.http.get<any>(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        ).pipe(
          map(weather => ({
            city,
            temp: weather.current_weather.temperature,
            wind: weather.current_weather.windspeed,
            code: weather.current_weather.weathercode
          }))
        );
      })
    );
  }
}
