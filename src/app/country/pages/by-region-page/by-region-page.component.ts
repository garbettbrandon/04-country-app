import { Component } from '@angular/core';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'by-region-page',
  imports: [CountryTableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {}
