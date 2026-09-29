
// const myname = document.querySelector("#myname");


// window.onload= function (){
    
//  myname.style.transform = "rotate(60deg)";
// }





// -------------------------------------

import { Page } from './components/basepage.js';
import { Home } from './components/home.js';
import { projects } from './data/projectsArray.js';
import { Projects } from './components/projects.js';
import { Cases } from './components/cases.js';
import { Process } from './components/process.js';
import { About } from './components/about.js';
import { Contact } from './components/contact.js';


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
const music = new Audio("audio/bensound-yesterday.mp3");

music.loop = true;
music.volume = 0.1;
music.play();

function setupMusic() {

    const musicBtn = document.querySelector("#btn-music");

    if (!musicBtn) return;

    const musicIcon = musicBtn.querySelector("i");

    musicBtn.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicIcon.classList.remove("fa-volume-xmark");
            musicIcon.classList.add("fa-music");

            musicBtn.setAttribute("aria-label", "Pause background music");

        } else {

            music.pause();

            musicIcon.classList.remove("fa-music");
            musicIcon.classList.add("fa-volume-xmark");

            musicBtn.setAttribute("aria-label", "Play background music");
        }

    });
}

// -----------------------------------




document.addEventListener("DOMContentLoaded",function(){

const page = new Page("Nada Zaher");
const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");
document.body.classList.add("home-page");
document.body.innerHTML= home.getNav() + home.getContent();
// ------------------------
setupMusic();

});




document.body.addEventListener("click",function(event){

    if(event.target.closest(".homePage")){
        event.preventDefault();

        const home = new Home ("Nada Zaher","UI/UX Designer","Front End Developer", "See My Work","Download CV");

        document.body.classList.add("home-page");
        document.body.innerHTML= home.getNav() + home.getContent();
        setupMusic();
    }


    if(event.target.closest("#aboutPage")){
        
        event.preventDefault();
        document.body.classList.remove("home-page");

        const about= new About ("About me","img/me.png","UX/UI Designer & Front-End Developer based in Denmark. I create digital experiences that combine thoughtful design, usability, and clean front-end development.", "From UX research and wireframes to responsive websites, I help transform ideas into products that are accessible, fast, and easy to use.");

         document.body.innerHTML= about.render();
         setupMusic();
}

      if(event.target.closest("#contactPage") || event.target.closest("#about-contactme")){
        // console.log("iam her");
        event.preventDefault();
        document.body.classList.remove("home-page");

        const contact= new Contact("Contact me", "abc", "abc","abc","My Linkedin account");
        document.body.innerHTML = contact.getNav() + contact.getContent();

        setupContactForm();
        setupMusic();

}

        if(event.target.closest("#workPage") || event.target.closest("#seemywork-button")) {
         console.log("iam her");
        event.preventDefault();
        document.body.classList.remove("home-page");
        const work = new Page ("Real Life case Studies");
        
         // her var projectArray
         
        

         const pro = new Projects ("Real case studies", projects);
         document.body.innerHTML = work.getNav() + ` <main id="project-content"></main>` ;

         const projectContent = document.querySelector("#project-content");
         projectContent.append(pro.render());
         setupMusic();

 
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
          setupMusic();

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
          setupMusic();

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
                setupMusic();

        }


                if(event.target.closest("#ProcessPage")){
                    event.preventDefault();
                    document.body.classList.remove("home-page");
                    
                    const DesignPro = new Page ("Real Life case Studies");
                    const process= new Process("Design Process");
                    document.body.innerHTML= DesignPro.getNav() + process.render() ;
                    setupMusic();
}

});











 





