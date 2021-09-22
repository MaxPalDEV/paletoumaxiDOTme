import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class PortfolioService{

  portfolioSubject = new Subject<any[]>();

  private portfolios = [
    {
      id: 1,
      name: "PaletouMaxi.me",
      logo: "../../../../assets/images/LogoSiteMax.png",
      technos: "Angular, NodeJS",
      description: "PaletouMaxi.me est mon site personnel réalisé afin de présenter mes compétences et les différents projets auxquels j'ai participé. Le site a été réalisé avec Angular connecté à une API NodeJS et une base de données NoSQL MangoDB",
      libraryImages: [
        {
          image: "../../../../assets/images/imageSites/paletoumaxdotme/pmmeimg1.png"
        },
        {
          image: "../../../../assets/images/imageSites/paletoumaxdotme/pmmeimg2.png"
        }
      ]
    },
    {
      id: 2,
      name: "GASPRA V2",
      logo: "../../../../assets/images/GaspraV2.png",
      technos: "HTML, CSS, JS, LabView",
      description: "<span style='font-weight:bold'>GASPRA V2</span> est une interface de pilotage de sonde utilisé dans les moteurs en développement chez Safran. Cette interface est intégrée au serveur web de l'automate pilotant la sonde. Le but de cette interface est de récupérer les données renvoyées par la sonde, les traduires sous forme de graphique représentant le balayage de la sonde dans son environnement ainsi que les valeur associées. <br> La sonde est pilotable depuis l'interface de manière automatique ou manuelle. L'interface permet également de régler différents paramètres de la sonde.",
      libraryImages: [
        {
          image: "../../../../assets/images/imageSites/gasprav2/1.png"
        },
        {
          image: "../../../../assets/images/imageSites/gasprav2/2.png"
        },
        {
          image: "../../../../assets/images/imageSites/gasprav2/3.png"
        }
      ]
    },
    {
      id: 3,
      name: "Bible du développeur",
      logo: " ",
      technos: "html, css, js, php, MySQL",
      description: "\n\n## Freedom Tour 2021\n\nPour promouvoir ses gammes de motos Softail®, Touring® et Pan America®, Harley-Davidson® organisait un événement permettant à tout le monde de tester parmi 21 de leurs modèles.\n\n### Site statique\n\nBien évidemment",
      libraryImages: [
        {
          image: ""
        },
        {
          image: ""
        }
      ]
    },
    {
      id: 4,
      name: "Football Manager",
      logo: " ",
      technos: "Symfony, MySQL",
      description: "ceci est la description du projet",
      libraryImages: [
        {
          image: ""
        },
        {
          image: ""
        }
      ]
    },
    {
      id: 5,
      name: "Site Personnel V1",
      logo: " ",
      technos: "html, css, js, php",
      description: "ceci est la description du projet",
      libraryImages: [
        {
          image: ""
        },
        {
          image: ""
        }
      ]
    }
  ];

  emitPortfolioSubject(){
    this.portfolioSubject.next(this.portfolios.slice());
  }

  getPortfolioById(id: number){
    const portfolio = this.portfolios.find(
      (portfolioObject) => {
        return portfolioObject.id === id
      }
    );
    return portfolio
  }
}
