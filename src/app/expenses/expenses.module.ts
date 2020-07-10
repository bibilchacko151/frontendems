import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { entityMetadata } from '../entity-metadata';
import { ExpenseEntityService } from '../expense-entity.service';
import { ExpenseDataService } from '../expense-data.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromExpensesReducer from '../reducers/expenses-reducer.reducer';



@NgModule({
  declarations: [ExpensesComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromExpensesReducer.expensesReducerFeatureKey, fromExpensesReducer.reducer),
  ],
  providers:[ExpenseEntityService,ExpenseDataService]
})
export class ExpensesModule { 
  constructor(private _eds:EntityDefinitionService,private _ed:EntityDataService,
    private exp:ExpenseDataService){
     _eds.registerMetadataMap(entityMetadata);
    _ed.registerService('Expense',exp);

  }
}
