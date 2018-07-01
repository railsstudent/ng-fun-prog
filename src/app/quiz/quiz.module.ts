import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
	imports: [CommonModule, CustomMaterialModule],
	declarations: [QuizAppComponent, QuizQuestionComponent],
	exports: [QuizAppComponent]
})
export class QuizModule {}
