import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.ngFlashMessageService.showFlashMessage( {
      messages: ['You are now logged out'],
      dismissible: true,
      timeout: 3000,
      type: 'success'
    });
    this.router.navigate(['/login']);
    return false;
  }
}
