import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  filterbodyhome: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null),
    categoriesName:new FormControl<string | null>(null)
  });
  filterbodynav: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null),
    categoriesName:new FormControl<string | null>(null)
  });

  constructor() { }
}
