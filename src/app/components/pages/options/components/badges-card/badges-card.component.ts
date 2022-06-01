import {Component, Input, OnInit} from '@angular/core';
import {MemberService} from "../../../../../services/member.service";
import {MemberInfos} from "../../../../../models/member-infos";

@Component({
  selector: 'app-badges-card',
  templateUrl: './badges-card.component.html',
  styleUrls: ['./badges-card.component.scss']
})
export class BadgesCardComponent implements OnInit {

  memberInfos: MemberInfos | undefined;

  constructor(public service: MemberService) {
  }

  ngOnInit(): void {
    this.service.memberInfos$.subscribe({
      next: (memberInfos) => this.memberInfos = memberInfos
    });
  }

}
