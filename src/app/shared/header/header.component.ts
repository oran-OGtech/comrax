import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchFormService} from './search-form.service';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Router} from "@angular/router";
import {debounceTime} from "rxjs";

@Component({
  selector: 'woo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class HeaderComponent {
  constructor(readonly form: SearchFormService, router: Router) {
    form.valueChanges.pipe(untilDestroyed(this), debounceTime(400))
      .subscribe(
        () => router.navigate(['/movies'], {queryParams: {q: form.value.q}})
      )
  }
}
