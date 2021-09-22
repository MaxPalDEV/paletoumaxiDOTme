import { Component, OnInit } from '@angular/core';
import { faGlobe, faMobileAlt, faBriefcase, faGraduationCap, faUserGraduate, faSchool, faServer,faMicrochip,faDatabase,faLaptopCode, faAtom, faCode,faFileCode, faFolderOpen, faCaretSquareRight, faBuilding, faUserTie, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faWordpress, faMicrosoft  } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  /*animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }*/
})
export class CvComponent implements OnInit {

    // FontAwesome Icons
    pointTitleIcon = faCaretSquareRight
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
    companyIcon = faBuilding;
    postIcon = faUserTie;
    dateIcon = faCalendarAlt;
    otherJobsIcon = faBriefcase;
    schoolIcon = faSchool;
    diplomaIcon = faGraduationCap;
    levelIcon = faUserGraduate;

  constructor() { }

  ngOnInit(): void {
  }

}
