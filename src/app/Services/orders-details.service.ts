import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDetails } from '../Models/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  
  url='https://localhost:44341/api/orderdetails';

  constructor(private http:HttpClient) { }
  
insertClient(OrderD:OrderDetails):Observable<string>
{
return this.http.post<string>(this.url+'/insert',OrderD)
}

deleteClient(OrderD:OrderDetails):Observable<number>
{
return this.http.post<number>(this.url+'/delete',OrderD)
}

updateClient(OrderD:OrderDetails):Observable<number>
{
return this.http.post<number>(this.url+'/update',OrderD)
}
getAll():Observable<OrderDetails[]>
{
  return this.http.get<OrderDetails[]>(this.url+'/getAll/') 
}
}

