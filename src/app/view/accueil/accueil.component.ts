import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation/index';
import { faGlobe, faMobileAlt, faServer,faMicrochip,faDatabase,faLaptopCode, faAtom, faCode,faFileCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faWordpress, faMicrosoft  } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class AccueilComponent implements OnInit {

  // FontAwesome Icons
  webIcone = faGlobe;
  mobilIcone = faMobileAlt;
  frontendIcon = faLaptopCode;
  backendIcon = faServer;
  logicielIcon = faMicrochip;
  serverIcon = faDatabase;
  crmIcon = faWordpress;
  ideIcon = faAtom;
  softIcon = faCode;
  langueIcon = faFileCode;
  microsoftIcon = faMicrosoft;
  diverIcon = faFolderOpen;



  constructor() { }

  ngOnInit(): void {
  }

}
