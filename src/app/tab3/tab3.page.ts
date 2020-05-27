import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
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
