export class Process {

    constructor(title){
        this.title=title;
    }

    render(){
        return `
            <section class="process-container">
            <h1>${this.title}</h1>

        <div class="process-content">
            <img src="img/process-img.png" alt="Design process image">
            

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