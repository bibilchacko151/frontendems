import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { EntityDefinitionService } from '@ngrx/data';
import { entityMetadata } from '../entity-metadata';
import { ExpenseEntityService } from '../expense-entity.service';



@NgModule({
  declarations: [ExpensesComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ],
  providers:[ExpenseEntityService]
})
export class ExpensesModule { 
  constructor(private _eds:EntityDefinitionService){
     _eds.registerMetadataMap(entityMetadata);
  }
}
