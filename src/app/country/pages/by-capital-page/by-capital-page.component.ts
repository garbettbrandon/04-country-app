import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInputComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);

    this.isError.set(null);

    this.countryService.searchByCapital(query).subscribe((countries) => {
      this.isLoading.set(false);
      this.countries.set(countries);
    });
  }
}
