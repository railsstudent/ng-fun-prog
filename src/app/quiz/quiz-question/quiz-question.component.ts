import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion, IPerson } from '../index';

@Component({
	selector: 'quiz-question',
	templateUrl: './quiz-question.component.html',
	styleUrls: ['./quiz-question.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizQuestionComponent {
	@Input() array: IPerson[];
	@Input() problems: IQuestion[];
}
