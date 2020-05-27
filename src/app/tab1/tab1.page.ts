import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  dataReceived = {};
  subs;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subs = this.route.paramMap.subscribe(x => {
      const notif = x.get('notificacao') || '{}';
      const notificacao = JSON.parse(notif);
      console.log(notificacao);
      this.dataReceived = notificacao;
    });
  }

}
