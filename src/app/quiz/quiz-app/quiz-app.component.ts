import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'quiz-app',
	templateUrl: './quiz-app.component.html',
	styleUrls: ['./quiz-app.component.scss']
})
export class QuizAppComponent implements OnInit {
	questions = [1, 2, 3];
	answers = [];

	constructor() {}

	ngOnInit() {}
}
