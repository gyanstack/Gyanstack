import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ArticleModel } from 'app/appModels/ArticleModel';
import { ContentService } from 'app/appServices/content.service';
import { DashboardModel } from 'app/appModels/DashboardModel';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent implements OnInit {
  advertiseList: DashboardModel[] = [];
  constructor(private sanitizer: DomSanitizer, private contentService: ContentService) { }
  gcsesearch: SafeHtml;
  mostViewed: ArticleModel[] = [];
  ngOnInit() {
    //this.initiateGoogleSearch();
    this.getMostViewed();
  }

  getMostViewed(): void {
    this.contentService.getAdvertiseSection()
      .subscribe(contents => this.loadData(contents));
  }

  loadData(model: DashboardModel[]): void {
    this.advertiseList = model;
  }

  // initiateGoogleSearch(): void {
  //   this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml("<gcse:search></gcse:search>");
  //   var cx = '012556502739128545047:0ugxtgpijge';
  //   var gcse = document.createElement('script');
  //   gcse.type = 'text/javascript';
  //   gcse.async = true;
  //   gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  //   var s = document.getElementsByTagName('script')[0];
  //   s.parentNode.insertBefore(gcse, s);
  // }
}
