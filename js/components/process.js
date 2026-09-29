export class Process {

    constructor(title){
        this.title=title;
    }

    render(){
        return `
            <section class="process-container">
            <h1>${this.title}</h1>

                <div class="design-process-container" >
                    <div>
                            <h2 class="scroll-animation">1. Discovery & Strategy </h2>
                            <p>Understanding your business, target audience, and project goals is my first step. I gather insights through research and align on a clear strategy that ensures we're set up for success.</p>
                    </div>
                        <img src="img/DP-1.png" alt="Discovery & Strategy" class="scroll-animation">
                </div>

                <div class="design-process-container" >
                        <div>
                            <h2 class="scroll-animation">2. Ideation & Wireframing </h2>
                            <p>Before diving into detailed design, I create wireframes and prototypes to map out the structure and flow, making sure that the user journey is smooth and intuitive.</p>
                    </div>
                        <img src="img/DP-2.png" alt="Ideation & Wireframing" class="scroll-animation">
                </div>

                <div class="design-process-container">
                        <div>
                            <h2 class="scroll-animation">3. Design & Development </h2>
                            <p>With the foundation in place, I bring ideas to life through high-fidelity design and front-end development, creating digital experiences that are both visually refined and functional</p>
                    </div>
                        <img src="img/DP-3.png" alt="Design & Development" class="scroll-animation">
                </div>

                <div class="design-process-container" class="scroll-animation">
                        <div>
                            <h2 class="scroll-animation">4. Testing & Iteration </h2>
                            <p>I value feedback and use testing insights to refine the design, ensuring that the final product is not only aesthetically pleasing but also highly effective and user-centered.</p>
                    </div>
                        <img src="img/DP-4.png" alt="Testing & Iteration" class="scroll-animation">
                </div>
                </section>
        `
    }
}