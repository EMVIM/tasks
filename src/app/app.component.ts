import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent } from './project-three/project-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proyect-1';
}
