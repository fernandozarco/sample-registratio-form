import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'prueba-tecnica';
  width: String = '10rem';
  label: String = 'Mostrar';

  toggleType(passwordField) {
    if (passwordField.type == 'text') {
      passwordField.type = 'password';
      this.label = 'Mostrar';
    } else {
      passwordField.type = 'text';
      this.label = 'Ocultar';
    }
  }

  sendForm() {
    console.log('You have been succesfully registered.');
  }
}

