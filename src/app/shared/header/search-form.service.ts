import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService extends FormGroup {
  constructor() {
    super({q: new FormControl()});
  }
}
