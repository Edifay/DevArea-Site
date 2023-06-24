import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../../../../services/member.service";
import {FormControl} from "@angular/forms";
import {MarkdownService} from "ngx-markdown";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.html',
  styleUrls: ['./presentation-card.scss']
})
export class PresentationCard implements OnInit {
  @Input() description: string | undefined;
  public controller = new FormControl('');

  constructor(private httpClient: HttpClient, private service: MemberService, private markdownService: MarkdownService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['edit']) {
      this.edit();
    }
  }

  public editing: boolean = false;

  public edit() {
    if (this.description == undefined)
      this.controller.setValue("");
    else
      this.controller.setValue(this.description);
    this.editing = true;
  }

  public sending: boolean = false;
  public error: boolean = false;

  public save() {
    if (!this.sending) {
      this.sending = true;
      this.httpClient
        .post('data/user-data/update-description?code=' + this.service.code,
          this.controller.value
        ).subscribe({
        complete: () => {
          this.sending = false;
          this.editing = false;
        },
        next: (bol) => {
          this.error = !bol;
          this.sending = false;
          if (bol) {
            this.service.loadInfos();
            this.description = this.controller.value!;
            this.markdownService.reload();
          }
        },
        error: (error) => {
          console.log('Problem : ' + error);
        }
      });
    }
  }

  public cancel() {
    this.editing = false;
  }


}
