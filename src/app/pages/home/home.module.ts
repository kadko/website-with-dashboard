import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeTableComponent, MaterialTableComponent } from './components';
@NgModule({
  declarations: [HomePageComponent, EmployeeTableComponent, MaterialTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule, MatIconModule,
	MatMenuModule,
	MatTableModule,
	MatButtonModule,
	MatCheckboxModule,
	MatPaginatorModule,
	MatFormFieldModule
  ]
})
export class HomeModule { }
