import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseModel }        from 'app/appModels/BaseModel';
import { VpnService } from 'app/appServices/Vpn.service';

@Component({
  moduleId: module.id,
  selector: 'app-cloud',
  templateUrl: '../services.component.html'
})
export class AntivirusComponent implements OnInit {
title: string;
  contentList: BaseModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private vpnService: VpnService
  ) { }

  ngOnInit() {
    this.route
      .data
      .subscribe(v => this.title = v["title"]);

      this.vpnService.getCloudContents()
      .then(cloudContents=>this.contentList = cloudContents);
  }
}