import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent], // Agrega FormComponent aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'penultimo_Reto_U2';
}
