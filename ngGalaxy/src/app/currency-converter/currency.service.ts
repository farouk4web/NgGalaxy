import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private apiUrl = 'https://open.er-api.com/v6/latest';

  constructor(private http: HttpClient) {}

  getRates(base: string = 'USD'): Observable<any> {
    // Replace 'USD' with desired base currency code
    return this.http.get(`${this.apiUrl}/${base}`);
  }
}
