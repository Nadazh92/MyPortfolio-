
export class Projects {
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