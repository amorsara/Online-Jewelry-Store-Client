import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../Models/Products';
import { listToBuy } from '../Models/ListToBuy';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  url='https://localhost:44341/api/products';

  constructor(private http:HttpClient) { }

insertProduct(Product:Products):Observable<string>
{
return this.http.post<string>(this.url+'/insert',Product)
}

deleteProduct(Product:Products):Observable<number>
{
return this.http.post<number>(this.url+'/delete',Product)
}

updateProduct(Product:Products):Observable<number>
{
return this.http.post<number>(this.url+'/update',Product)
}
getAll():Observable<Products[]>
{
  return this.http.get<Products[]>(this.url+'/getAll/') 
}
buyP(listToBuy:listToBuy):Observable<Products[]>
{
  return this.http.post<Products[]>(this.url+'/buy/',listToBuy) 
}
}

