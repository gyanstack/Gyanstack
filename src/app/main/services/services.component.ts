import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
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
