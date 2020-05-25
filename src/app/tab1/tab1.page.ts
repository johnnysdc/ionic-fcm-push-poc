import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  dataReceived: any = '';
  subs;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.subs = this.route.data
    //   .subscribe(v => {
    //     console.log({v});
    //     this.dataReceived = v.dados;
    //   });
    const params = this.route.snapshot.params;
    console.log({params});
    this.dataReceived = this.route.snapshot.params.dados; // ['dataReceived'];
    // this.route.snapshot.params.dataReceived;
  }

}
