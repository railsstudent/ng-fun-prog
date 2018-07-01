import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IExercise } from '../index';

@Component({
	selector: 'quiz-app',
	templateUrl: './quiz-app.component.html',
	styleUrls: ['./quiz-app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizAppComponent {
	@Input() exercises: IExercise[];
}
