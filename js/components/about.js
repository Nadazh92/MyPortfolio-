
import { Page } from './basepage.js';

export class About extends Page{
    constructor(title, img, para1,para2){
        super(title);
        this.img=img;
        this.para1=para1;
        this.para2=para2;
    }

    getContent(){
        return `
    <section class="about-sec">
    <h1>${this.title}</h1>
    <div class="about-container">
    <img src=${this.img} alt="my picture">
    <div>
    <span> Hey Iam Nada </span>
    <p>${this.para1} <br> ${this.para2}</p>
     <a href="#" id="about-contactme">Contact me <i class="fa-regular fa-envelope"></i></a>
    </div>
    </div>
    </section>

     <section class="proskills">
    <h2>Professional Skills</h2>
    <div>
        <img src="img/skill1.png" alt="professional skill one">
        <img src="img/skill2.png" alt="professional skill two">
        <img src="img/skill3.png" alt="professional skill three">
        <img src="img/skill4.png" alt="professional skill four">
        <img src="img/skill5.png" alt="professional skill five">
    </div>
    </section>


    <section class="perskills">
    <h2>Personal Skills</h2>
    <img src="img/pskills.png" alt="personal skills">
    </section>


    <section class="lang">
    <h2>Languages</h2>
     <ul>
        <li>Arabic: Native</li>
        <li>Danish: Very good</li>
        <li>English: Good</li>
     </ul>
     </section>


     <section class="volun">
    <h2>Volunteering</h2>
    <span>Webshop assistant - Danish Red Cross</span>
    <p>Responsible for accurately entering and managing clothing products in the webshop, ensuring product information and details are correct and making it easy for customers to browse and shop from a wide selection of items.</p>
    </section>

        ` 
    }  
}

