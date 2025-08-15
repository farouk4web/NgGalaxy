import { Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { QuizComponent } from './quiz-app/quiz/quiz.component';
import { ResultComponent } from './quiz-app/result/result.component';
import { CurrencyComponent } from './currency-converter/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'todo',
        component: ToDoComponent
    },
    {
        path: 'quiz',
        component: QuizComponent,
        children: [
            {
                path: 'result',
                component: ResultComponent
            }
        ]
    },
    {
        path: 'currency-converter',
        component: CurrencyComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    }
];
