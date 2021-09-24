import { Component, OnInit } from '@angular/core';
import { faGlobe, faMountain, faFilm, faBook, faGamepad, faGlobeEurope, faMobileAlt, faBriefcase, faGraduationCap, faUserGraduate, faSchool, faServer,faMicrochip,faDatabase,faLaptopCode, faAtom, faCode,faFileCode, faFolderOpen, faCaretSquareRight, faBuilding, faUserTie, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faWordpress, faMicrosoft  } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

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
  devHobbie = faCode;
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
  randoHobbie = faMountain;
  travelHobbie = faGlobeEurope;
  gameHobbie = faGamepad;
  movieHobbie = faFilm;
  bookHobbie = faBook;



  constructor() { }

  ngOnInit(): void {
  }

}
