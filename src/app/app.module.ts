import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizModule } from './quiz';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, QuizModule, BrowserAnimationsModule],
	providers: [Title],
	bootstrap: [AppComponent]
})
export class AppModule {}
