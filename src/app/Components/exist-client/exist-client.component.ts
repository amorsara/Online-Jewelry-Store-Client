import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/Services/clients.service';

@Component({
  selector: 'app-exist-client',
  templateUrl: './exist-client.component.html',
  styleUrls: ['./exist-client.component.css']
})
export class ExistClientComponent implements OnInit {
 
 user:string=''
 password:string=''
 ans:number=0
 

  constructor(private logService:ClientsService,private logUser:ClientsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  check(){
    this.logService.loginClient(this.user,this.password).subscribe(a=>{(this.ans)=a;
      if(this.ans==1)
      {
        this.router.navigate(['/shopping/'])
      }    
      else
      {
        if(this.ans==0)
        {
          alert("סיסמא שגויה")   
        }
        else
          alert("לקוח אינו קיים")              
      }
  })
  }
}
