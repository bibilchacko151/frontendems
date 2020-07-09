import { Component, OnInit } from '@angular/core';
import { ExpenseEntityService } from '../expense-entity.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators/';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private ex:ExpenseEntityService) { }

  ngOnInit(): void {
    this.ex.getAll().pipe(map(value=>{
      console.log(value);
    }));
  }

}
