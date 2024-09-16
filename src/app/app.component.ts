import { Component } from '@angular/core';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';  // Importa o FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BindingComponent, FormsModule],  // Adicione o FormsModule e BindingComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade 2';
}
