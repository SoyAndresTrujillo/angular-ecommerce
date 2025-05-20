import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: false,
})
export class FormPage {
  formData = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
  };

  constructor(private router: Router) {}

  printData() {}
}
