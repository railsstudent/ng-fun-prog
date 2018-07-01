import { QuizModule } from './quiz.module';

export interface IPerson {
	name: string;
	age: number;
	gender: string;
	us: boolean;
}

export interface IQuestion {
	question: string;
	results: IPerson[] | number;
}

export interface IExercise {
	array: IPerson[];
	problems: IQuestion[];
}

export { QuizModule };
