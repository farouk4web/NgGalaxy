import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./result.component.html`,
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
  constructor(public quizService: QuizService, private router: Router) {}

  restart() {
    this.quizService.score = 0;
    this.router.navigate(['/quiz']);
  }
}
