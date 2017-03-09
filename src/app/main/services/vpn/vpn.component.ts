import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-vpn',
  templateUrl: './vpn.component.html',
  styleUrls: ['./vpn.component.css']
})
export class VpnComponent implements OnInit {
  title: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route
      .data
      .subscribe(v => this.title = v["title"]);
  }

}
