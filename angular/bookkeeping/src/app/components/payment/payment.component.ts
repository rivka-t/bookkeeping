import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
@Input() expense:{
  date: Date,
  amount: number,
  provider: string,
  paymentMethod: string,
  details:string,
}={date:new Date(),amount:0,provider:'',paymentMethod:'',details:''}
}
