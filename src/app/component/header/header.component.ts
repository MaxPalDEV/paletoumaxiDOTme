import { Component, OnInit } from '@angular/core';
import { faInstagramSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Icônes FontAwesome
  InstagramIcon = faInstagramSquare;
  GitHubIcon = faGithubSquare;
  LinkedInIcon = faLinkedin;

  constructor() {
   }

  ngOnInit(): void {
  }

}
