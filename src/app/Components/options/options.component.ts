import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from 'src/app/Models/Clients';
import { ClientsService } from 'src/app/Services/clients.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  client:Clients=new Clients();  
  name:string=''
  password:string=''
  ans:number=-1

  constructor(private logService:ClientsService,private logUser:ClientsService,private router:Router,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  del(){  
    this.client.nameClient=this.name
    this.client.PasswordClient=this.password
    // this.logService.loginClient(this.name,this.password).subscribe(a=>{(this.ans)=a;
    //   if(this.ans==1){
        this.logService.deleteClient(this.client).subscribe(a=>{(this.ans)=a;
          alert(this.ans)})
          //  if(this.ans==1)
          //    alert(this.ans)
          //  else
          //     alert (this.ans)})
      // }
      // // else
      // // {
      //   if(this.ans==0)
      //   {
      //     alert("סיסמא שגויה")
      //   }
      //   else
  
      //     alert("לקוח אינו קיים")
      //   }
    // })
  }
    update(){
    
      this.router.navigate(['/newClient/'])
      // this.logService.updateClient(this.client).subscribe(a=>{(this.ans)=a;
      //   if(this.ans=1)
      //     alert("delete")
      //   else
      //      alert ("not delete")})
  
   }
}
