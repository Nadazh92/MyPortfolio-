
import { Page } from './basepage.js';

export class Home extends Page {
    constructor (title,fRolle,sRolle,fCta, sCta){
        super(title);
        this.title=title;
        this.fRolle=fRolle;
        this.sRolle=sRolle;
        this.fCta=fCta;
        this.sCta=sCta;
    }
  

    getContent(){
        
        return`
        <section class="home-container">
     
        <div class="main-content">
            <div class="namerolle">
            <h1>${this.title}</h1>
            <p>${this.fRolle}</p>
            <p class="fend">${this.sRolle}</p>
            </div>
            

            <div class="cta-home-container" >
                <a href="#" class="seemywork" id="seemywork-button">${this.fCta} <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href="pdf/Nada-Zaher-CV.pdf" download="" class="downloadcv">${this.sCta}</a>
            </div>

            <div class="sm-container">
               <a href="https://www.linkedin.com/in/nada-zaher-167087384/"><i class="fa-brands fa-square-linkedin"></i></a>
               <a href="https://github.com/Nadazh92"><i class="fa-brands fa-github"></i></a>
            </div>

             </div>
            </section>
        
        `
    }
}