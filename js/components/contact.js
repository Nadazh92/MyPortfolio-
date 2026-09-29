import { Page } from './basepage.js';

export class Contact extends Page {
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

        