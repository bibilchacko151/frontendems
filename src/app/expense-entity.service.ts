import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntityService extends EntityCollectionServiceBase<Expense>
{

  constructor(elementServiceFactory:EntityCollectionServiceElementsFactory) {
    super('Expense',elementServiceFactory);
  }
}
