import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-services',
  template: `<p>{{title}}</p>
              <router-outlet></router-outlet>`
})
export class ServicesComponent implements OnInit {

  title :string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route
      .data
      .subscribe(v => this.title = v["title"]);
  }
}
