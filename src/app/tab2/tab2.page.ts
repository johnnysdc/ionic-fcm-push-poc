import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
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
