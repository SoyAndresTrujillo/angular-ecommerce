import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: false,
})
export class FormPage implements OnInit {
  formData = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  printData() {
    console.log('Form Data:', this.formData);
  }
}
