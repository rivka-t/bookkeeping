import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomersComponent } from "../customers/customers.component";
import { Customer } from '../../modules/interface';


@Component({
  selector: 'app-revenues',
  standalone: true,
  imports: [CommonModule, CustomersComponent],
  templateUrl: './revenues.component.html',
  styleUrl: './revenues.component.scss'
})
export class RevenuesComponent {
  @Input() revenue: {
    id: number,
    customer: Customer,
    date: Date,
    paymentMethods: string,
    amount: number,
    details: string
  } 
  = { id: 0, customer: {name:'',num:0}, date: new Date(), paymentMethods: '', amount: 0, details: '' }

}
