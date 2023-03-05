import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: any;

  // Get userinformation from keycloak-angular
  constructor(
    private keycloakService: KeycloakService
  ) {
    this.keycloakService.loadUserProfile().then(user => {
      this.user = user;
    });
  }

}
