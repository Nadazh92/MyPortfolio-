export class Cases {
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