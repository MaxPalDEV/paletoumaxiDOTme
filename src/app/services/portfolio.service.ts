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
      description: "<p> <b>GASPRA V2</b> est une interface de pilotage de sonde utilisé dans les moteurs en développement chez <b>Safran</b>. Cette interface est intégrée au serveur web de l'automate pilotant la sonde. <br> <br> Le but de cette interface est de récupérer les données renvoyées par la sonde, les traduires sous forme de graphique représentant le balayage de la sonde dans son environnement ainsi que les valeur associées. <br> <br> La sonde est pilotable depuis l'interface de manière automatique ou manuelle. L'interface permet également de régler différents paramètres de la sonde.</p>",
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
      name: "Reïki Website",
      logo: "../../../../assets/images/portfolio_logo/logoReiki.png",
      technos: "html, css, js, php, MySQL",
      description: "<p>Site de présentation des prestations de l'énergeticienne <b>Muriel Hobel</b></p>",
      libraryImages: [
        {
          image: "../../../../assets/images/imageSites/reiki/1.png"
        },
        {
          image: "../../../../assets/images/imageSites/reiki/2.png"
        }
      ]
    },
    {
      id: 4,
      name: "Football Manager",
      logo: "../../../../assets/images/portfolio_logo/footLogo.png",
      technos: "Symfony, MySQL",
      description: "<p><b>FootBall Manager</b> est un projet réalisé lors de mes études qui avait pour but de gérer l'ensemble des matchs de ligue <br/><br/> Les entraineurs de chacun des équipe dispose d'un accès au site leur permettant de gérer leur équipe et définir les joueurs pour chacun des prochains matchs ainsi que leur positions et postes sur le terrain. <br/> Les commentateurs ont la possibilité de créer un match en définissant le lieu,la date et les arbitres. Le match est lancé à la date créée et les commentateur renseignent en direct les différents moments forts du match (buts, cartons). <br/> À la fin du match, un résumé est disponible au format PDF comportant l'ensemble des informations du match (joueurs, scores, cartons,...)</p>",
      libraryImages: [
        {
          image: "../../../../assets/images/imageSites/projetFoot/1.png"
        },
        {
          image: "../../../../assets/images/imageSites/projetFoot/2.png"
        }
      ]
    },
    {
      id: 5,
      name: "Madera",
      logo: "../../../../assets/images/portfolio_logo/logo2.2.2.png",
      technos: "Symfony, Kotlin",
      description: "<p><b>MADERA</b> est un projet scolaire réalisé lors de mon alternance au CESI. L'interface permet la création de plans de maisons modulaires pour les particuliers et les professsionnels. <br> <br> <u>Les fonctionnalités :</u> <ul><li>Gestion des clients</li><li>Gestion des projets/chantier</li> <li>Création des plans modulaires</li></ul></p> <h2> L'application mobile </h2> <p>Le projet est également composée d'une application mobile utilisée sur tablette par les commerciaux afin de pouvoir gérer les projets et créer des plans. L'application dispose d'un mode <b>hors ligne</b> permettant aux commerciaux de travailler même sans accès réseau.</p>",
      libraryImages: [
        {
          image: "../../../../assets/images/imageSites/madera/1.png"
        },
        {
          image: "../../../../assets/images/imageSites/madera/2.png"
        },
        {
          image: "../../../../assets/images/imageSites/madera/3.png"
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
