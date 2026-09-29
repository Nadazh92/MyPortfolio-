
export class ProjectCard {
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