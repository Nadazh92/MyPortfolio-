
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
                <li><a href="#" id="ProcessPage">Process</a></li>
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
               <li><a href="#" id="workPage">Projects</a></li>
                <li><a href="#" id="ProcessPage">Process</a></li>
                <li><a href="#" id="aboutPage">About</a></li>
               <li><a href="#" id="contactPage">Contact</a></li>
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
    <div class="about-container">
    <img src=${this.img} alt="my picture">
    <div>
    <span> Hey Iam Nada </span>
    <p>${this.para1} <br> ${this.para2}</p>
     <a href="#" id="about-contactme">Contact me</a>
    </div>
    </div>
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
            <div class="contact-container">
               <div class="getintouch"> 
                
                   <h2>Get In Touch</h2>

                    <div class="contact-info">
                    
                        <p> <i class="fa-solid fa-phone"></i> ${this.phone}</p> 
                         <p><i class="fa-solid fa-envelope"></i>  ${this.email} </p>
                         <address> <i class="fa-solid fa-location-dot"></i> ${this.adres}</address>
                    </div>

                     <div class="contact-sm">
                         <a href="https://www.linkedin.com/in/nada-zaher-167087384/"><i class="fa-brands fa-square-linkedin"></i></a>
                        <a href="https://github.com/Nadazh92"><i class="fa-brands fa-github"></i></a>
                    </div>

                </div>

                <div class="contact-form">
                    <h2>Let's work together</h2>
                    <form action="https://api.web3forms.com/submit" method="POST" id="contactform" novalidate>
                    <input type="hidden" name="access_key" value="36adfe9f-52ef-4532-9124-25a0be9f3f10">
                    

                     <div class="field">
                    <label for="name">Fullname</label>
                    <input type="text" name="name"  id="name"  placeholder=" Enter your name" autocomplete="name" required>
                    </div>

                    <div class="field">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder=" Enter your email"  autocomplete="email" required>
                     </div>


                    <div class="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message"  required></textarea>
                     </div>

                    <p id="feedback" role="status" aria-live="polite" aria-atomic="true"  class="feedback"  hidden ></p>

                    <button type="submit" id="submit-btn"><i class="fa-solid fa-paper-plane"></i> Send Message </button>

                    </form>

                   
                        
                 </div>
            </div>

        </div>
                </section>
                        `
    }      
        }



class ProjectCard {
    constructor(src, alt, title, link,lHref,lID, fBtn, fBtnhref, sBtn, sBtnhref){
        this.src =src;
        this.alt=alt;
        this.title=title;
        this.link=link;
        this.lHref= lHref;
        this.lID=lID;
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
        readMore.id=this.lID;

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

class Cases {
    constructor(img,client,year,duration,Deliverables,Challenges, Solutions, Results,Tools, flink,flinkName, slink,slinkName, image1,image2,image3,image4){
        this.img=img;
        this.client=client;
        this.year=year;
        this.duration=duration;
        this.Deliverables=Deliverables;
        this.Challenges=Challenges;
        this.Solutions=Solutions;
        this.Results=Results;
        this.Tools=Tools;
        this.flink=flink;
        this.flinkName=flinkName;
        this.slink=slink;
        this.slinkName=slinkName;
        this.image1=image1;
        this.image2=image2;
        this.image3=image3;
        this.image4=image4;
    }

    render(){
        return `
        <section class="case-study">
            <img src="${this.img}" alt="case image">
            <div class="case-info">
            <p>Client: ${this.client}</p>
            <p>Year: ${this.year}</p>
            <p>Duration: ${this.duration}</p>
            </div>
            <span>Deliverables</span><p> ${this.Deliverables}</p>
            <span>Challenges </span><p>${this.Challenges}</p>
            <span>Solutions</span><p> ${this.Solutions}</p>
            <span>Results</span><p>${this.Results}</p>
            <span>Tools & Technologies </span><p> ${this.Tools}</p>
            <div class="links-container">
            <a href=${this.flink}>${this.flinkName}</a>
            <a href=${this.slink}>${this.slinkName}</a>
            </div>
            <div class="img-gallery">
            <img src="${this.image1}" alt="case image 1">
            <img src=${this.image2} alt="case image 2">
            <img src="${this.image3}" alt="case image 3">
            <img src=${this.image4} alt="case image 3">
            </div>

        </section>
        `
        
    }


}


class Process {

    constructor(title){
        this.title=title;
    }

    render(){
        return `
            <section class="process-container">
            <h1>${this.title}</h1>

        <div class="process-content">
            <img src="img/DP-image.png" alt="Design process image">
            

               <div class="steps">
                <div>
                    <h2>1. <i class="fa-regular fa-eye"></i> Discover</h2>
                    <p>I start by learning about your brand, users, and objectives.</p>
                </div>
                <div>
                    <h2>2. <i class="fa-solid fa-magnifying-glass"></i> Research</h2>
                    <p>Explore competitors, and best practices to ensure the solution.</p>
                </div>
                <div>
                    <h2>3. <i class="fa-solid fa-bezier-curve"></i> Design</h2>
                    <p>I create wireframes and  UI concepts focused on usability.</p>
                </div>
                <div>
                    <h2>4. <i class="fa-solid fa-code"></i> Develop</h2>
                    <p>I transform designs into high-performance websites.</p>
                </div>

               </div>

        </div>
                </section>
        `
    }
}


// -----------------------------------

// contact form function 

function setupContactForm() {

    const form = document.querySelector("#contactform");
    const feedback = document.querySelector("#feedback");

    if (!form || !feedback) {
        return;
    }

    console.log("Contact form is ready");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const message = form.querySelector("#message");

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        feedback.hidden = false;
        feedback.className = "feedback";

        name.removeAttribute("aria-invalid");
        email.removeAttribute("aria-invalid");
        message.removeAttribute("aria-invalid");


        if (nameValue === "") {

            name.setAttribute("aria-invalid", "true");

            feedback.textContent = "Please enter your name.";
            feedback.classList.add("feedback--error");

            name.focus();

            return;

        }


        if (!emailPattern.test(emailValue)) {

            email.setAttribute("aria-invalid", "true");

            feedback.textContent = "Please enter a valid email address.";
            feedback.classList.add("feedback--error");

            email.focus();

            return;

        }


        if (messageValue === "") {

            message.setAttribute("aria-invalid", "true");

            feedback.textContent = "Please enter your message.";
            feedback.classList.add("feedback--error");

            message.focus();

            return;

        }


        feedback.textContent = "Your message is sucessfully sent.";
        feedback.classList.add("feedback--success");

        form.submit();


    });

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

      if(event.target.closest("#contactPage") || event.target.closest("#about-contactme")){
        // console.log("iam her");
        event.preventDefault();
        document.body.classList.remove("home-page");

        const contact= new Contact("Contact me", "Pilevænget 13,st.tv Vejle, Denmark", "nada.zh92@gmail.com","+45 42 50 01 58","My Linkedin account");
        document.body.innerHTML = contact.getNav() + contact.getContent();

        setupContactForm();

}

        if(event.target.closest("#workPage") || event.target.closest("#seemywork-button")) {
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
                 "read-more-lb",
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
                 "read-more-gg",
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
                 "read-more-gls",
                 "View Playbook", 
                 "https://tinyurl.com/dwjt8pe9", 
                 "Design Process", 
                 "https://tinyurl.com/mrxaasnc"
                ),

        ];
        

         const pro = new Projects ("Real case studies", projects);
         document.body.innerHTML = work.getNav() + ` <main id="project-content"></main>` ;

         const projectContent = document.querySelector("#project-content");
         projectContent.append(pro.render());

 
}


         if(event.target.closest("#read-more-lb")){
         console.log("iam her");
         event.preventDefault(); 
         document.body.classList.remove("home-page");
         const lbCase = new Page ("Lady Balance case study");

         const ladybalanceCase = new Cases("img/LB.png",
         "Lady Balance",
         "2026",
         " 4 weeks",
         "Landing page redesign, visual identity and logo redesign, design guide, campaign content, email automation flow, and SEO-focused content.",
         "Lady Balance's existing digital presence lacked visual consistency, clear communication, and a user-friendly structure that reflected the quality and credibility of its products.",
         "I used Design Thinking, UX research, and visual design principles to create a more coherent digital experience. The solution combined a redesigned visual identity, an accessible and responsive landing page, SEO-focused content, and a customer journey supported by campaign and email automation concepts",
         "A more professional, trustworthy, and user-friendly digital concept that strengthens brand recognition, improves the customer journey, and creates better opportunities for engagement and customer loyalty.",
         "Figma - HTML - CSS & SCSS - javaScript - SEO Tools -  Adobe Illustrator, Indesign, After Effect, Premiere Pro. ",
         "https://indd.adobe.com/view/642a4652-42c9-4cb2-bf50-a277dded91ff",
         "See Design Guide",
         "https://tinyurl.com/4m7nndbk",
         "See Prototype",
         "img/LB-image1.png",
         "img/LB-image2.png",
         "img/LB-image3.png",
         "img/LB-image4.png"
         );

          document.body.innerHTML = lbCase.getNav() +  ` <main id="case-content"></main>` + lbCase.getFooter();
          const caseContent = document.querySelector("#case-content");
          caseContent.innerHTML = ladybalanceCase.render();

        }


           if(event.target.closest("#read-more-gg")){
      
         event.preventDefault(); 
         document.body.classList.remove("home-page");
         const ggCase = new Page ("Garn and Craft case study");

         const garnandcraftCase = new Cases("img/project2.png",
         "Garn & Craft",
         "2025",
         " 4 weeks",
         "UX/UI prototype in Figma, responsive HTML/CSS website, user research, competitor analysis and visual design concept.",
         "Expanding Garn & Craft's target audience while creating a modern, inclusive and user-friendly digital experience.",
         "Applied Design Thinking, user research and usability testing to develop a responsive website with clear navigation, accessible design and a stronger focus on creativity and community.",
         "Created a modern website concept that improved visual clarity and usability, providing a foundation for a stronger digital presence and broader audience engagement.",
         "Figma - HTML - CSS - Adobe Photoshop ",
         "https://www.figma.com/proto/H1hYHBDrfDsKzYrPTx5X7A/Garn-og-Craft?node-id=2-127&t=DmzqRZsnb17oT9Kr-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A102",
         "See Prototype",
         "https://github.com/Nadazh92/GarnogCraft",
         "See Source Code",
         "img/gg1.png",
         "img/gg2.png",
         "img/gg3.png",
         "img/gg4.png"
         );

    


          document.body.innerHTML = ggCase.getNav() +  ` <main id="case-content"></main>` + ggCase.getFooter();
          const caseContent = document.querySelector("#case-content");
          caseContent.innerHTML = garnandcraftCase.render();

        }


             if(event.target.closest("#read-more-gls")){
      
                event.preventDefault(); 
                document.body.classList.remove("home-page");
                const ggCase = new Page ("Garn and Craft case study");

                const garnandcraftCase = new Cases("img/PlayBook.png",
                " GLS",
                " 2026",
                " 18 days",
                "AI Playbook for GLS, designed as a practical PDF guid. <br> Presentation explaining the design process, content structure, and design decisions. ",

                "Make AI easier to understand and apply in employees' everyday work. <br>  Address uncertainty about data security, responsible AI use, and quality assurance. <br> Create a solution that supports employees with different levels of AI knowledge and professional experience.",

                "Developed a clear and user-friendly AI Playbook using simple language and practical use cases. <br> Organized the content to make relevant information easy to find and understand. <br> Designed the Playbook to support employees across different professional backgrounds and AI skill levels. <br> Included guidance on data security, responsible AI use, and quality assurance.",

                "Created an accessible and practical AI resource for GLS employees. <br> Translated complex AI-related topics into clear and actionable information. <br> Delivered a structured Playbook that provides a foundation for more confident and responsible AI use in the workplace. ",

                "Figma - ChatGPT",
                "https://tinyurl.com/rf5ttftr",
                "See Playbook",
                " ",
                " ",
                "img/gls.png",
                "img/gls1.png",
                "img/gls2.png",
                "img/gls3.png"
                );

            


                document.body.innerHTML = ggCase.getNav() +  ` <main id="case-content"></main>` + ggCase.getFooter();
                const caseContent = document.querySelector("#case-content");
                caseContent.innerHTML = garnandcraftCase.render();

        }


                if(event.target.closest("#ProcessPage")){
                    event.preventDefault();
                    document.body.classList.remove("home-page");
                    
                    const DesignPro = new Page ("Real Life case Studies");
                    const process= new Process("Design Process");
                    document.body.innerHTML= DesignPro.getNav() + process.render() ;
}

});











 





