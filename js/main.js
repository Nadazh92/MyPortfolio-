
// const myname = document.querySelector("#myname");


// window.onload= function (){
    
//  myname.style.transform = "rotate(60deg)";
// }

class Page{
    constructor(title){
        this.title=title;
    }
    

    getNav(){
        return`

          <header>
            <nav class="nav-container">
            <img src="img/mypic.png" alt="mypicture">
            <ul>
               <li><a href="#" class="homePage">Home</a></li>
               <li><a href="#" id="aboutPage">About</a></li>
               <li><a href="#">Work</a></li>
               <li><a href="#">Contact</a></li>
            </ul>

            <button><i class="fa-regular fa-moon"></i></button>
        
        </nav>
        </header>
         `
    }  


    getContent(){
        return `<p>Page is yet to be created</p>`
    }



    getFooter(){

        return`
        <footer>
           
           <img src="img/logo1.png" alt="logo">

             <ul>
               <li><a href="#" class="homePage">Home</a></li>
               <li><a href="#" id="aboutPage">About</a></li>
               <li><a href="#">Work</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
           
            <div>
             <a href="https://www.linkedin.com/in/nada-zaher-167087384/"><i class="fa-brands fa-square-linkedin"></i></a>
             <a href="https://github.com/Nadazh92"><i class="fa-brands fa-github"></i></a>

             </div>

          </footer>
        `

    }


    render(){
        return`
         ${this.getNav()}
            <main>
                ${this.getContent()}
            </main>
            ${this.getFooter()}
        `
    }
   
}

// -------------------------------------


class About extends Page{
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
    <img src=${this.img} alt="my picture">
    <p>${this.para1}</p>
    <p>${this.para2}</p>
    </section>
        
        ` 
    }  
}

class Home extends Page {
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
                <a href="#" id="seemywork">${this.fCta} <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href="#">${this.sCta}</a>
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

// ----------------------------------------------




// document.addEventListener("DOMContentLoaded",function(){

// const page = new Page("Nada Zaher");
// const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");
// document.body.classList.add("home-page");
// document.body.innerHTML= home.getNav() + home.getContent();

// });

const page = new Page("Nada Zaher");
const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");
document.body.classList.add("home-page");
document.body.innerHTML= home.getNav() + home.getContent();




 


const aboutPage = document.querySelector("#aboutPage");

aboutPage.addEventListener("click", function(){
document.body.classList.remove("home-page");
const page = new Page("Nada Zaher");
const about= new About ("About me","img/me.png","UX/UI Designer & Front-End Developer based in Denmark. I create digital experiences that combine thoughtful design, usability, and clean front-end development.", "From UX research and wireframes to responsive websites, I help transform ideas into products that are accessible, fast, and easy to use.");

document.body.innerHTML= about.render();
});


const homePage=document.querySelector(".homePage");

homePage.addEventListener("click", function(){
const page = new Page("Nada Zaher");
const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");
document.body.classList.add("home-page");
document.body.innerHTML= home.getNav() + home.getContent();

});


