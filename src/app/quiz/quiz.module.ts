import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
	imports: [CommonModule],
	declarations: [QuizAppComponent, QuizQuestionComponent],
	exports: [QuizAppComponent]
})
export class QuizModule {}
