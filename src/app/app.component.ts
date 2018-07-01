import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IQuestion } from './quiz/';

// ARRAY 1
const texasss = [
	{
		name: 'Mike',
		age: 23,
		gender: 'm',
		us: false
	},
	{
		name: 'Liz',
		age: 20,
		gender: 'f',
		us: true
	},
	{
		name: 'Chris',
		age: 102,
		gender: 'm',
		us: true
	},
	{
		name: 'Chuloo',
		age: 27,
		gender: 'm',
		us: false
	},
	{
		name: 'Annie',
		age: 30,
		gender: 'f',
		us: true
	}
];

// Part 1 - Find all users older than 24
// Part 2 - Find the total age of all users
// Part 3 - List all female coders

// ARRAY 2
const newieyork = [
	{
		name: 'Michelle',
		age: 65,
		coder: true,
		gender: 'f',
		us: true
	},
	{
		name: 'Sam',
		age: 25,
		coder: false,
		gender: 'm',
		us: false
	},
	{
		name: 'Ivy',
		age: 26,
		coder: true,
		gender: 'f',
		us: false
	},
	{
		name: 'Nick',
		age: 32,
		coder: true,
		gender: 'm',
		us: true
	},
	{
		name: 'Jim Beglin',
		age: 17,
		coder: false,
		gender: 'm',
		us: true
	}
];

// Part 1 - List all users in US in ascending order
// Part 2 - Sort all users by age
// Part 3 -  List all female coders

// ARRAY 3
const vegzas = [
	{
		name: 'Charly',
		age: 22,
		coder: true,
		gender: 'm'
	},
	{
		name: 'Law',
		age: 21,
		coder: true,
		gender: 'm'
	},
	{
		name: 'Rosey',
		age: 42,
		coder: false,
		gender: 'f'
	},
	{
		name: 'Steph',
		age: 18,
		coder: true,
		gender: 'f'
	},
	{
		name: 'Jon',
		age: 47,
		coder: false,
		gender: 'm'
	}
];

// Part 1 - Find the total age of male coders under 25
// Part 2 - List all male coders over 30
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	source = [];

	constructor(private title: Title) {
		title.setTitle('JS Fun Prog');
	}

	ngOnInit() {
		this.evaluate();
	}

	evaluate() {
		// Part 1 - Find all users older than 24
		// Part 2 - Find the total age of all users
		// Part 3 - List all female coders
		const totalTexasssAges = texasss.reduce((acc, t) => acc + t.age, 0);
		const array1Answers: IQuestion[] = [
			{
				question: 'Part 1 - Find all users older than 24',
				results: texasss.filter(t => t.age > 24)
			},
			{
				question: 'Part 2 - Find the total age of all users',
				results: totalTexasssAges
			},
			{
				question: 'Part 3 - List all users in the US',
				results: texasss.filter(t => t.us)
			}
		];

		// Part 1 - List all users in US in ascending order
		// Part 2 - Sort all users by age
		// Part 3 -  List all female coders

		const sortedByUSName = JSON.parse(JSON.stringify(newieyork))
			.filter(t => t.us === true)
			.sort((a, b) => {
				const aLowercase = a.name.toLowerCase();
				const bLowercase = b.name.toLowerCase();
				return aLowercase < bLowercase ? -1 : aLowercase > bLowercase ? 1 : 0;
			});

		const array2Answers: IQuestion[] = [
			{
				question: 'Part 1 - List all users in US in ascending orders',
				results: sortedByUSName
			},
			{
				question: 'Part 2 - Sort all users by age',
				results: JSON.parse(JSON.stringify(newieyork)).sort(
					(a, b) => a.age - b.age
				)
			},
			{
				question: 'Part 3 - List all female coders',
				results: newieyork.filter(t => t.gender === 'f')
			}
		];

		// Part 1 - Find the total age of male coders under 25
		// Part 2 - List all male coders over 30
		// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
		const totalAges =
			totalTexasssAges +
			newieyork.reduce((acc, t) => acc + t.age, 0) +
			vegzas.reduce((acc, t) => acc + t.age, 0);
		const array3Answers: IQuestion[] = [
			{
				question: 'Part 1 - Find the total age of male coders under 25',
				results: vegzas
					.filter(t => t.gender === 'm' && t.age < 25)
					.reduce((acc, t) => acc + t.age, 0)
			},
			{
				question: 'Part 2 - List all male coders over 30',
				results: vegzas.filter(t => t.gender === 'm' && t.age > 30)
			},
			{
				question:
					'Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined',
				results: totalAges
			}
		];

		this.source = [
			{ array: texasss, problems: array1Answers },
			{ array: newieyork, problems: array2Answers },
			{ array: vegzas, problems: array3Answers }
		];
	}
}
