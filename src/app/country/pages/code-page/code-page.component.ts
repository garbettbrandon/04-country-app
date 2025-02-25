import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInfoComponent } from './country-info/country-info.component';

@Component({
  selector: 'app-code-page',
  imports: [NotFoundComponent, CountryInfoComponent],
  templateUrl: './code-page.component.html',
})
export class CodePageComponent {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request: () => ({ code: this.countryCode }),
    loader: ({ request }) => {
      return this.countryService.searchByCountryByAlphaCode(request.code);
    },
  });
}
