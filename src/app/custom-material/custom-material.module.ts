import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
	imports: [CommonModule, MatTableModule, MatListModule, MatSortModule],
	declarations: [],
	exports: [MatTableModule, MatListModule, MatSortModule]
})
export class CustomMaterialModule {}
