import { CommonModule } from '@angular/common';
import { Component ,OnDestroy} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {FormControl,FormGroup, FormsModule, ReactiveFormsModule,  FormBuilder, Validators } from '@angular/forms';
import {DataService} from '../../data-service/data-service.service'
import { Customer } from '../../modules/interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-receipt',
  providers: [FormsModule,DataService],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet,ReactiveFormsModule],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})

export class ReceiptComponent{// implements OnDestroy{
  
  receiptForm: FormGroup
  customers:Array<Customer>=[]
  constructor(private dataService: DataService) {
    this.dataService.getAllCustomers.subscribe((data: Customer[]) => {
      console.log(data);
      if (data && Array.isArray(data)) {
        this.customers = data;
      } 
    });
    

    this.receiptForm = new FormGroup({
      customer: new FormControl(''),
      date: new FormControl(''),
      paymentMethods: new FormControl(''),
      amount: new FormControl(''),
      details: new FormControl(''),
    })
  }

  saveReceipt() {
    if (this.receiptForm.valid) {
      this.dataService.addReceipt(this.receiptForm.value).subscribe(
        (response)=>{
          console.log('Receipt added successfully',response);
        },
        (error)=>{
          console.log('Error adding receipt:',error);
          
        }
        )
      // Save receipt data to the backend or perform any other necessary action
      // console.log(this.receiptForm.value);
    } else {
      // Handle form validation errors
      alert('Please fill in all required fields correctly.');
    }
  }
}
