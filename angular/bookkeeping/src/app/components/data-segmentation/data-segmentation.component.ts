import { Component } from '@angular/core';
import { DataService } from '../../data-service/data-service.service';
import { CommonModule } from '@angular/common';
import { Customer } from '../../modules/interface';
import { RevenuesComponent } from "../revenues/revenues.component";
import { PaymentComponent } from "../payment/payment.component";

@Component({
  selector: 'app-data-segmentation',
  standalone: true,
  imports: [CommonModule, RevenuesComponent, PaymentComponent],
  templateUrl: './data-segmentation.component.html',
  styleUrl: './data-segmentation.component.scss'
})
export class DataSegmentationComponent {
  expenses:Array<any>=[]
  revenue:Array<any>=[]
  customers:Array<Customer>=[]
  flagExpense:boolean=false
  flagRevenue:boolean=false
  flagY:boolean=false
  flagM:boolean=false
  flagBetween:boolean=false
  flagCust:boolean=false
  filter:any=''
  value1:any=''
  value2:any=''
  constructor(private dataService: DataService) {
  
  this.dataService.getAllCustomers.subscribe((data:any[])=>{
this.customers=data
  })
  }

onYearInputChange(event: Event) {
  const target = event.target as HTMLInputElement;
 this.value1 = target.value;
}

onMonthInputChange(event: Event) {
  const target = event.target as HTMLInputElement;
   this.value1 = target.value;
}
onInput1Change(event: Event) {
  const target = event.target as HTMLInputElement;
  this.value1 = target.value;
}
onInput2Change(event: Event) {
  const target = event.target as HTMLInputElement;
  this.value2 = target.value;
}
onCustChange(event: Event) {
  const target = event.target as HTMLInputElement;
  this.value1 = target.value;
}




save(){
  if(this.flagExpense){
  if(this.filter=='y'){
    this.dataService.getExpenseByYear(this.value1).subscribe((data:any[])=>{
      console.log(data);
      this.expenses=data
    })
  }
  if(this.filter=='m'){
    this.dataService.getExpenseByMonth(this.value1).subscribe((data:any[])=>{
      console.log(data);
      this.expenses=data
    })
  }
  if(this.filter=='2'){
    this.dataService.getExpenseBy2Date(new Date(this.value1),new Date(this.value2)).subscribe((data:any[])=>{
      console.log(data);
      this.expenses=data
    })
  }
}else{
  if(this.filter=='y'){
    this.dataService.getRevenueByYear(this.value1).subscribe((data:any[])=>{
      console.log(data);
      this.revenue=data
    })
  }
  if(this.filter=='m'){
    this.dataService.getRevenueByMonth(this.value1).subscribe((data:any[])=>{
      console.log(data);
      this.revenue=data
    })
  }
  if(this.filter=='2'){
    this.dataService.getRevenueBy2Date(new Date(this.value1),new Date(this.value2)).subscribe((data:any[])=>{
      console.log(data);
      this.revenue=data
    })
  }
  if(this.filter=='cust'){  
    this.dataService.getByCustomer(this.value1).subscribe((data:any[])=>{
      console.log(data);
      this.revenue=data
    })
  }}
  
}
}
