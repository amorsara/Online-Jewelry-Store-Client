import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from 'src/app/Models/Clients';
import { ClientsService } from 'src/app/Services/clients.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

 client:Clients=new Clients();
 name:string=''
 phone:string=''
 password:string=''
 id:string=''
 ans:string=''


  constructor(private logService:ClientsService,private router:Router,private route:ActivatedRoute) {  
   }

  ngOnInit(): void {
  }
  connect(){
    this.client.nameClient=this.name
    this.client.PasswordClient=this.password
    this.client.phoneClient=this.phone
    this.client.IdClient=this.id
    this.logService.insertClient(this.client).subscribe(a=>{(this.ans)=a;
      alert(this.ans)
      // if(this.ans='client is exist')
      //    alert("succes")
      // else
      //   alert("error")
    })

  }
}
