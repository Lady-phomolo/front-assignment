import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import "rxjs/add/operator/catch";
import { Router } from "@angular/router";

import { EntityCic } from "../entity-cic";

@Injectable({
  providedIn: "root"
})
export class CicService {
  private baseUrl: string = "http://localhost:8080/cic/";

  private headers = new Headers({ "content-Type": "application/json" });
  private options = new RequestOptions({ headers: this.headers });

  private cicList: EntityCic;

  constructor(private http: Http) {}

  getCic() {
    return this.http
      .get(this.baseUrl + "list", this.options)
      .pipe(map((res: Response) => res.json()));
  }

  getCicById(id: number) {
    return this.http
      .get(this.baseUrl + "/" + id, this.options)
      .pipe(map((res: Response) => res.json()));
  }

  updateCicList(cic: EntityCic) {
    return this.http
      .post(this.baseUrl + "add", JSON.stringify(cic), this.options)
      .pipe(map((res: Response) => res.json()));
  }

  createCicList(cic: EntityCic) {
    return this.http
      .post(this.baseUrl + "add", JSON.stringify(cic), this.options)
      .pipe(map((res: Response) => res.json()));
  }
  // pipe(map((response:Response)=>response.json())
  //

  setter(cicList: EntityCic) {
    this.cicList = cicList;
  }

  getter() {
    return this.cicList;
  }
}
