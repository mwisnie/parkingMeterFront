import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CostService } from 'src/app/services/cost.service';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {

  income: Observable<number>;

  constructor(private costSerivce: CostService) { }

  ngOnInit() {
    this.costSerivce.getAllIncome();
    this.income = this.costSerivce.incomeSubject;
  }

  refresh() {
    this.costSerivce.getAllIncome();
  }

}
