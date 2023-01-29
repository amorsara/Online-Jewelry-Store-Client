import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../Models/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  url='https://localhost:44341/api/orders';

  constructor(private http:HttpClient) { }

insertProduct(Order:Orders):Observable<string>
{
return this.http.post<string>(this.url+'/insert',Order)
}

deleteProduct(Order:Orders):Observable<number>
{
return this.http.post<number>(this.url+'/delete',Order)
}

updateProduct(Order:Orders):Observable<number>
{
return this.http.post<number>(this.url+'/update',Order)
}
getAll():Observable<Orders[]>
{
  return this.http.get<Orders[]>(this.url+'/getAll/') 
}
}
