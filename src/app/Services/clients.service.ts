import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from '../Models/Clients';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  
  id:number=0

url="https://localhost:44341//api/clients";

  constructor(private http:HttpClient) { }
  
insertClient(client:Clients):Observable<string>
{
   return this.http.post<string>(this.url+'/insert',client)
}

deleteClient(client:Clients):Observable<number>
{
   return this.http.post<number>(this.url+'/delete',client)
}

updateClient(client:Clients):Observable<number>
{
return this.http.post<number>(this.url+'/update',client)
}

loginClient(user:string,password:string):Observable<number>
{
  return this.http.get<number>(this.url+'/login/'+user+'/'+password) 
}
getAll():Observable<Clients[]>
{
  return this.http.get<Clients[]>(this.url+'/getAll/') 
}
}
