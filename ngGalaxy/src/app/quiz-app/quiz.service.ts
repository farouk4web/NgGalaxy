import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuizService {
  questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Rembrandt"],
      answer: "Leonardo da Vinci"
    }
  ];

  score = 0;
}