
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
        
           
             <a href="#"><img src="img/mypic.png" alt="mypicture"></a>
            
            <ul>
               <li><a href="#" class="homePage">Home</a></li>
               <li><a href="#" id="workPage">Projects</a></li>
                <li><a href="#" >Process</a></li>
                <li><a href="#" id="aboutPage">About</a></li>
               <li><a href="#" id="contactPage">Contact</a></li>
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
    <span> Hey Iam Nada </span>
    <p>${this.para1} <br> ${this.para2}</p>
    </section>

     <section class="proskills">
    <h2>Professional Skills</h2>
    <div>
    <a href="#"><i class="fa-solid fa-code"></i> Web Development</a>
    <a href="#"><i class="fa-brands fa-figma"></i> UI/UX Design</a>
    <a href="#"><i class="fa-solid fa-bezier-curve"></i> Visual Identity</a>
    <a href="#"><i class="fa-solid fa-magnifying-glass"></i> UX Research</a>
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
                <a href="#" class="seemywork">${this.fCta} <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href="#" class="downloadcv">${this.sCta}</a>
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


class Contact extends Page {
    constructor (title,adres,email,phone,linkedin){
        super(title);
        this.title=title;
        this.adres=adres;
        this.email=email;
        this.phone=phone;
        this.linkedin=linkedin;
    }

        getContent(){
        return `
        
            <section class="contact-me">
                <h1>${this.title}</h1>
                <h2>Let's work together</h2>
                
               <div class="getintouch"> 
                <div>
                     <h2>Get In Touch</h2>
                    <address><i class="fa-solid fa-location-dot"></i>  ${this.adres}</address>
                    <p><i class="fa-solid fa-envelope"></i>  ${this.email} </p>
                    <p><i class="fa-solid fa-phone"></i>  ${this.phone}</p>
                    <a href="nada-zaher-167087384"><i class="fa-brands fa-square-linkedin"></i> ${this.linkedin}</a> 
                </div>

                <div>
                    <img src="img/copic.png" alt="my picture">
                 </div>
            </div>

                </section>
                        `
    }      
        }



class ProjectCard {
    constructor(src, alt, title, link,lHref, fBtn, fBtnhref, sBtn, sBtnhref){
        this.src =src;
        this.alt=alt;
        this.title=title;
        this.link=link;
        this.lHref= lHref;
        this.fBtn=fBtn;
        this.sBtn=sBtn;
        this.fBtnhref =fBtnhref;
        this.sBtnhref=sBtnhref;
    }

    render(){
        const article=document.createElement("article");
        const image = document.createElement("img");
        image.src= this.src;
        image.alt=this.alt;

        const heading = document.createElement("h2");
        heading.textContent= this.title;

        const readMore = document.createElement("a");
        readMore.textContent = this.link;
        readMore.href=this.lHref;

        const btnContainer =document.createElement("div");
        

        const firstBtn = document.createElement("a");
        firstBtn.textContent= this.fBtn;
        firstBtn.href= this.fBtnhref;
        btnContainer.append(firstBtn);
       

        const secondBtn = document.createElement("a");
        secondBtn.textContent=this.sBtn;
        secondBtn.href=this.sBtnhref;
        btnContainer.append(secondBtn);
      

        // article.append(image,heading,readMore,firstBtn,secondBtn);
        article.append(image,heading,readMore,btnContainer);

        return article;
    }
}


class Projects {
    constructor(title, projectsList){
        this.title=title;
        this.projectsList=projectsList;  
    }

    render(){
       const section = document.createElement("section");
       section.className ="project-cards";
       const heading = document.createElement("h1");
       const myProjects = document.createElement("div");

       heading.textContent= this.title;
       myProjects.className = "project-list";

       this.projectsList.forEach(project => {
        myProjects.append(project.render());
        });
        // her kalder jeg på ProjectCard method via project.render();

         section.append(heading, myProjects);

        return section;
 
    }
}
    


// ----------------------------------------------




document.addEventListener("DOMContentLoaded",function(){

const page = new Page("Nada Zaher");
const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");
document.body.classList.add("home-page");
document.body.innerHTML= home.getNav() + home.getContent();

});

document.body.addEventListener("click",function(event){

    if(event.target.closest(".homePage")){
        event.preventDefault();

        const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");

        document.body.classList.add("home-page");
        document.body.innerHTML= home.getNav() + home.getContent();
    }


    if(event.target.closest("#aboutPage")){
        
        event.preventDefault();
        document.body.classList.remove("home-page");

        const about= new About ("About me","img/me.png","UX/UI Designer & Front-End Developer based in Denmark. I create digital experiences that combine thoughtful design, usability, and clean front-end development.", "From UX research and wireframes to responsive websites, I help transform ideas into products that are accessible, fast, and easy to use.");

         document.body.innerHTML= about.render();
}

      if(event.target.closest("#contactPage")){
        // console.log("iam her");
        event.preventDefault();
        document.body.classList.remove("home-page");

        const contact= new Contact("Contact me", "Pilevænget 13,st.tv Vejle,Denmark", "nada.zh92@gmail.com","+45 42500158","My Linkedin account");
         document.body.innerHTML= contact.render();
}

        if(event.target.closest("#workPage")){
         console.log("iam her");
        event.preventDefault();
        document.body.classList.remove("home-page");
        const work = new Page ("Real Life case Studies");
        
        const projects = [

            new ProjectCard("img/LB.png", 
                "Lady Balance Project",
                 "Lady Balance", 
                 "Read more about the case",
                 "#",
                 "Live Website", 
                 "http://nadazh.dk/LB/", 
                 "Source Code", 
                 "https://github.com/Nadazh92/LB"
                ),

            new ProjectCard("img/project2.png", 
                "Garn & Craft Project",
                 "Garn & Craft", 
                 "Read more about the case",
                 "#",
                 "Live Website", 
                 "http://nadazh.dk/LB/", 
                 "Source Code", 
                 "https://github.com/Nadazh92/GarnogCraft"
                ),

            new ProjectCard("img/Playbook.png", 
                "GLS PlayBook project",
                 "GLS AI PlayBook", 
                 "Read more about the case",
                 "#",
                 "Prototypen", 
                 "https://tinyurl.com/dwjt8pe9", 
                 "Download filen", 
                 "https://github.com/Nadazh92/GarnogCraft"
                ),

        ];
        

         const pro = new Projects ("Real case studies", projects);
         document.body.innerHTML = work.getNav() + ` <main id="project-content"></main>` + work.getFooter();

         const projectContent = document.querySelector("#project-content");
         projectContent.append(pro.render());
   
}
}
);










 





