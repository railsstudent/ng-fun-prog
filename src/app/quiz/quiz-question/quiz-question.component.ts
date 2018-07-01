import {
	Component,
	Input,
	ChangeDetectionStrategy,
	ViewChildren,
	QueryList,
	AfterViewInit
} from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { IQuestion, IPerson } from '../index';

@Component({
	selector: 'quiz-question',
	templateUrl: './quiz-question.component.html',
	styleUrls: ['./quiz-question.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizQuestionComponent implements AfterViewInit {
	@Input() array: IPerson[];
	@Input() problems: IQuestion[];
	@ViewChildren(MatSort) sort: QueryList<MatSort>;

	columnsToDisplay = ['name', 'age', 'gender', 'inUS'];
	dataSources = {};

	ngAfterViewInit() {
		const sortArray = this.sort.toArray();
		this.dataSources = this.problems
			.filter(p => Array.isArray(p.results))
			.reduce((acc, p, i) => {
				const dataSource = new MatTableDataSource(p.results as IPerson[]);
				dataSource.sort = sortArray[i];
				acc[p.question] = dataSource;
				return acc;
			}, {});
	}
}
