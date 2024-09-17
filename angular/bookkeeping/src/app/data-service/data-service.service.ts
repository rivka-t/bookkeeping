import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer ,Receipt} from '../modules/interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  get getAllCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.apiUrl}/customer/findCustomers`);
  }

  addReceipt(receipt:Receipt):Observable<Receipt>{
    return this.http.post<Receipt>(`${this.apiUrl}/receipt/addReceipt`,receipt)
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}

