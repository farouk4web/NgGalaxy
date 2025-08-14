import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  currentQuestionIndex = 0;
  currentQuestion: any;

  constructor(
    @Inject(QuizService) public quizService: QuizService,
    @Inject(Router) private router: Router
  ) {}

  ngOnInit() {
    this.currentQuestion = this.quizService.questions[this.currentQuestionIndex];
  }

  selectOption(option: string) {
    if (option === this.currentQuestion.answer) {
      this.quizService.score++;
    }
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.quizService.questions.length) {
      this.currentQuestion = this.quizService.questions[this.currentQuestionIndex];
    }
  }

  goToResult() {
    this.router.navigate(['/quiz-app/result']);
  }
}
