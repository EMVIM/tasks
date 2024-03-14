import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface SurveyResults {
  [key: string]: number;
}

@Component({
  selector: 'app-project-one',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './project-one.component.html',
  styleUrl: './project-one.component.scss',
})
export class ProjectOneComponent {
  surveyForm: FormGroup;
  question: string = '¿Cuál es tu lenguaje de programación favorito?';
  options: string[] = ['JavaScript', 'Python', 'TypeScript', 'Java', 'C#'];
  results: SurveyResults = {};

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      favoriteLanguage: [],
    });
  }

  submit() {
    const favoriteLanguage: string | null =
      this.surveyForm.get('favoriteLanguage')?.value;

    if (!favoriteLanguage) {
      console.log('No se seleccionó un lenguaje de programación.');
      return;
    }

    if (!this.results[favoriteLanguage]) {
      this.results[favoriteLanguage] = 1;
    } else {
      this.results[favoriteLanguage]++;
    }
    console.log(this.results);
    this.surveyForm.reset();
  }
}
