import { Component, OnInit } from '@angular/core';
import {EntityCic} from '../../entity-cic';
import { CicService } from "../../shared-service/cic.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cic-form',
  templateUrl: './cic-form.component.html',
  styleUrls: ['./cic-form.component.css']
})
export class CicFormComponent implements OnInit {

  private cList : EntityCic;

  constructor(private cicService : CicService , private router:Router) { }

  ngOnInit() {

    this.cList = this.cicService.getter();
  }
 
  processForm(){
    if(this.cList.cicId==undefined){
        this.cicService.createCicList(this.cList).subscribe((cicList)=>{
          console.log(cicList);
          this.router.navigate(['/'])
        },(error)=>{
          console.log(error);
        });
    }
    else{
      this.cicService.updateCicList(this.cList).subscribe((cicList)=>{
        console.log(cicList);
        this.router.navigate(['/'])
      },(error)=>{
        console.log(error)
      })
    }
  }
}
