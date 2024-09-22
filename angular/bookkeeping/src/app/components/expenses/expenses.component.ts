import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../data-service/data-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})


export class ExpensesComponent {
  expenseForm:FormGroup
  constructor(private dataService: DataService) {
  
  this.expenseForm = new FormGroup({
    date: new FormControl(''),
    amount: new FormControl(''),
    provider: new FormControl(''),
    paymentMethod: new FormControl(''),
    details: new FormControl(''),
  })
}

saveExpense() {
  if (this.expenseForm.valid) {
    this.dataService.addExpense(this.expenseForm.value).subscribe(
      (response)=>{
        console.log('Receipt added successfully',response);
      },
      (error)=>{
        console.log('Error adding receipt:',error);
      }
      )
  } else {
    alert('Please fill in all required fields correctly.');
  }
}}
