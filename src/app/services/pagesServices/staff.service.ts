import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MemberInfos} from "../../models/member-infos";
import {HttpClient} from "@angular/common/http";
import {staffCard} from "../../components/pages/staff/staff";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffList$ = new BehaviorSubject<staffCard[] | undefined>(undefined);

  constructor(private httpClient: HttpClient) {

  }

  update(){
    this.getStaff();
  }

  getStaff() {
    this.httpClient
        .get<staffCard[]>('/data/staff/staff_list')
        .subscribe(
            (response) => {
              this.staffList$.next(response);
            },
            (error) => {
              console.log('Problem : ' + error);
            }
        )

  }
}
