import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  amount = 1;
  from = 'USD';
  to = 'EUR';
  rates: any = {};
  convertedAmount: number | null = null;
  currencies: string[] = [];

  constructor(@Inject(CurrencyService) private currencyService: CurrencyService) {}

  ngOnInit() {
    this.loadRates();
  }

  loadRates() {
    this.currencyService.getRates(this.from).subscribe((data) => {
      this.rates = data.rates;
      this.currencies = Object.keys(this.rates);
      this.convert();
    });
  }

  convert() {
    if (this.rates[this.to]) {
      this.convertedAmount = this.amount * this.rates[this.to];
    }
  }
}
