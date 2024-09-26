import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer, Receipt } from '../modules/interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  get getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`${this.apiUrl}/customer/findCustomers`);
  }
  getExpenseByYear(filter: any): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/expense/getByYear/${filter}`);
  }
  getExpenseByMonth(filter: any): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/expense/getByMonth/${filter}`);
  }
  getExpenseBy2Date(startDate: Date, endDate: Date): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/expense/getBy2Date/${startDate}/${endDate}`);
  }
  getRevenueByYear(filter: any): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/receipt/getByYear/${filter}`);
  }
  getRevenueByMonth(filter: any): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/receipt/getByMonth/${filter}`);
  }
  getRevenueBy2Date(startDate: Date, endDate: Date): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/receipt/getBy2Date/${startDate}/${endDate}`);
  }
  getByCustomer(customer: any): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.apiUrl}/receipt/getBycustomer/${customer}`);
  }

  addReceipt(receipt: Receipt): Observable<Receipt> {
    return this.http.post<Receipt>(`${this.apiUrl}/receipt/addReceipt`, receipt)
  }
  addExpense(expense: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/expense/addExpense`, expense)
  }
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/customer/addCustomer`, customer)
  }
}

