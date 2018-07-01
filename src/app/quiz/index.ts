import { QuizModule } from './quiz.module';

export interface IPerson {
	name: string;
	age: number;
	gender: string;
	us: boolean;
}

export interface IQuestion {
	question: string;
	result: IPerson[] | number;
}

export { QuizModule };
