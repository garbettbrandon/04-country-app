import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-table',
  imports: [],
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  countries = input.required<Country[]>();
}
