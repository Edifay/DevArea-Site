import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../../services/member.service";
import {Router} from "@angular/router";
import {MemberInfos} from "../../../models/member-infos";
import {MarkdownService} from "ngx-markdown";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-mission-creator',
  templateUrl: './mission-creator.html',
  styleUrls: ['./mission-creator.scss']
})
export class MissionCreator implements OnInit {

  public titleController = new FormControl('');
  public descriptionController = new FormControl('');
  public dateRetourController = new FormControl('Non définie');
  public langageController = new FormControl('Non définie');
  public supportController = new FormControl('Non définie');
  public niveauController = new FormControl('Non définie');
  public budgetController = new FormControl('');

  memberInfos: MemberInfos | undefined;

  public test: string = "<a href=\"google.fr\"> coucou </a>"

  public date: string = '';

  constructor(private httpClient: HttpClient, private memberService: MemberService, private markdownService: MarkdownService, private router: Router) {
  }

  connected: any;

  ngOnInit(): void {

    this.date = formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en');

    this.memberService.memberInfos$.subscribe({
      next: (memberInfos) => this.memberInfos = memberInfos
    });

    this.memberService.connected$.subscribe({
      next: (connected) => {
        this.connected = connected;
        if (this.connected == "not_connected")
          this.router.navigate(['/', 'how-connect']);
      }
    });

  }

  public loading: boolean = false;
  public error: boolean = false;

  validate() {
    if (!this.loading) {
      this.loading = true;
      this.httpClient
        .post('/data/missions/create?code=' + this.memberService.code,

          {
            title: this.titleController.value,
            description: this.descriptionController.value,
            dateRetour: this.dateRetourController.value,
            langage: this.langageController.value,
            support: this.supportController.value,
            niveau: this.niveauController.value,
            budget: this.budgetController.value
          }
        ).subscribe({
        complete: () => {
          this.loading = false;
        },
        next: (bol) => {
          this.error = !bol;
          if (bol) {
            this.memberService.loadInfos();
            this.router.navigate(['options']);
          }
        },
        error: (error) => {
          console.log('Problem : ' + error);
        }
      });
    }
  }
}
