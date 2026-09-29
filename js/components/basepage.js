
export class Page{
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

            <button id="btn-music" aria-label="play background music"><i class="fa-solid fa-music"></i></button>
            
        
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
