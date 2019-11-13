import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currPage = '/overview';

  constructor(
    private _router: Router,
  ) {
    // Listen for page changes, highlight the sidebar link that is the current one
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currPage = event.url;
      }
    })
  }

  ngOnInit() {
  }

}
