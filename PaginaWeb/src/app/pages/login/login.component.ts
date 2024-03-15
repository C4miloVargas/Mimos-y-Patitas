import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private titulo:Title) {
    this.titulo.setTitle('Login')
  }

  iniciar(){
    console.log('Iniciando sesión...')
    alert('Iniciando sesión...')
  }
}
