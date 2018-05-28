import { Component, OnInit } from "@angular/core";
import { CicService } from "../../shared-service/cic.service";
import { EntityCic } from "../../entity-cic";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-cic",
  templateUrl: "./list-cic.component.html",
  styleUrls: ["./list-cic.component.css"]
})
export class ListCicComponent implements OnInit {
  private cicList: EntityCic[];

  constructor(private cicService: CicService , private router:Router ) {}

  ngOnInit() {
    this.cicService.getCic().subscribe(
      cicList => {
        console.log(cicList);
        this.cicList = cicList;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateCic(cicList) {
    this.cicService.setter(cicList);
    this.router.navigate(['/op']);
  }

  newCic() {
    let cicList = new EntityCic;
    this.cicService.setter(cicList);
    this.router.navigate(['/op']);
  }
}
