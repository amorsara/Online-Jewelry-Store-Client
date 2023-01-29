import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { using } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formdata!: FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
        this.formdata = new FormGroup({fname:new FormControl("",[Validators.required]),
                                       lname:new FormControl("",[Validators.min(2)]),
                                       phone:new FormControl("",[Validators.min(4)]),
                                       email:new FormControl("",[Validators.required,Validators.email]),
                                       subject:new FormControl("",[Validators.required]),
                                       })
  }
  send(){
    if(this.formdata.valid){
      this.router.navigate(['/sent/'])
    }
    else
      alert("נא למלאות שדות חובה")
  }
}
