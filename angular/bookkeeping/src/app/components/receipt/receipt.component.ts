import { Component, OnInit } from '@angular/core';
import { Customer } from '../../modules/interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../data-service/data-service.service'

@Component({
  selector: 'app-receipt',
  providers: [FormsModule, DataService],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule],
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  receiptForm: FormGroup;
  newCustomer: Customer = { name: '', num: 0 };
  customers: Array<Customer> = [];
  flagNew: boolean = false
  id: number = 0;

  constructor(private dataService: DataService) {
    this.receiptForm = new FormGroup({
      id: new FormControl(''),
      customer: new FormControl(''),
      date: new FormControl(''),
      paymentMethods: new FormControl(''),
      amount: new FormControl(''),
      details: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.dataService.getAllCustomers.subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }

  enterName(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newCustomer.name = target.value;
  }

  enterNum(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newCustomer.num = parseInt(target.value);
  }

  addCustomer(): void {
    this.dataService.addCustomer(this.newCustomer).subscribe((response) => {
      console.log('Customer added successfully', response);
      this.customers.push(this.newCustomer); // Update the local list of customers
      this.newCustomer = { name: '', num: 0 }; // Reset the new customer object
    });
  }

  saveReceipt(): void {
    if (this.receiptForm.valid) {
      this.id++;
      this.receiptForm.patchValue({ id: this.id });
      this.dataService.addReceipt(this.receiptForm.value).subscribe(
        (response) => {
          console.log('Receipt added successfully', response);
        },
        (error) => {
          console.log('Error adding receipt:', error);
        }
      );
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
