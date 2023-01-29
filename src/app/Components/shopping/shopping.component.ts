import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/Products';
import { ProductsService } from 'src/app/Services/products.service';
import {ChangeDetectionStrategy} from '@angular/core';
import { Clients } from 'src/app/Models/Clients';
import {listToBuy} from 'src/app/Models/ListToBuy'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  //הצגת מוצרים 
  arrProduct:Products[]=[]
  arrHead:string[]=["choose","code","name","color","material","price","description","count"]
  //מערך לצורך הכמויות
  arr:number[]=[]
  //רשימת מוצרים קימים
  listOfProducts:Products[]=[]
  //רשימת מוצרים לקניה
  listOfBuingProduct:Products[]=[]
  //רשימת מוצרים שנקנו
  listBuing:Products[]=[]
    //פרטי משתמש
    client:Clients = new Clients()
    product:Products = new Products()
    listToBuy:listToBuy = new listToBuy()

  constructor(private logService:ProductsService,private router:Router,private route:ActivatedRoute) { 
 
      this.logService.getAll().subscribe(arr=>{
        arr.forEach(b => {
          this.listOfProducts.push(b)
          this.arr.push(0)
        });
      });
      this.route.params.subscribe(params=>{
      this.client.codeClient=params['id']})
  }

  ngOnInit(): void {
    this.logService.getAll().subscribe(a=>{(this.arrProduct)=a;})
  }
   buy(){
    for(var i=0; i<this.arr.length;i++)
    {
        this.listOfProducts[i].countProduct = this.arr[i]
        this.listOfBuingProduct.push(this.listOfProducts[i])
    }
    this.listToBuy = { listOfProducts:this.listOfBuingProduct, client:this.client}
    // this.logService.loginClient(this.user,this.password).subscribe(a=>{(this.ans)=a;

    this.logService.buyP(this.listToBuy).subscribe(arr=>{
      arr.forEach(x=>{
        this.listBuing.push(x);
      })
      alert("הקניה נעשתה בהצלחה!")
    })
    
  }

  
   ok(){
      alert("hello")
   }
  }

