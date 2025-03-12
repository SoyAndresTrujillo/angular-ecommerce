import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: false,
})
export class UserPage implements OnInit {
  profileUrlImage: string =
    'https://s.t13.cl/sites/default/files/styles/manualcrop_1600x800/public/t13/field-imagen/2017-04/1492376426-clarence-2.jpg.jpeg?itok=iNZMaZh5';

  user = {
    name: 'Juan Pérez',
    address: 'Calle Principal #123',
    email: 'juan.perez@example.com',
    phone: '+1234567890',
    age: 30,
    gender: 'Male',
    occupation: 'Software Developer',
    company: 'Tech Solutions',
  };

  show: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToFormPage() {
    this.router.navigate(['/form']);
  }
}
