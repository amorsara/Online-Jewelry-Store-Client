import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
arrImg=["assets/img1.png","assets/img2.png","assets/img3.png","assets/img4.png",
        "assets/img5.png","assets/img6.png","assets/img7.png","assets/img8.png"]
index:number=0
isDisableN:boolean=false
isDisableP:boolean=false
cntN:number=0
cntP:number=0
  constructor() { }

ngOnInit(): void {
  }
nextImg(){ 
  this.cntN=this.cntN+1
  if(this.index<4)
      this.index=this.index+1
  else
       this.isDisableN=true
  if(this.cntN>0)
      this.isDisableP=false
}
prevImg(){ 
  this.cntP=this.cntP+1 
  if(this.index>0)
      this.index=this.index-1
  else
      this.isDisableP=true
  if(this.cntP>0)
     this.isDisableN=false
}
}
