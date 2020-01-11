import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service'
import { User } from 'src/app/interfaces/user.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currPage = '/overview';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _router: Router,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // Listen for page changes, highlight the sidebar link that is the current one
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.currPage = event.url;
      }
    })
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
