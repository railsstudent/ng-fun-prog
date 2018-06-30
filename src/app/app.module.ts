import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizModule } from './quiz';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, QuizModule],
	providers: [Title],
	bootstrap: [AppComponent]
})
export class AppModule {}
