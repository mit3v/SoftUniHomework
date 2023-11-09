function projectsCreation(input) {
    let name = input[0];
    let numProjects = Number(input[1]);
    let hours = numProjects * 3;
 console.log(`The architect ${name} will need ${hours} hours to complete ${numProjects} project/s.`);


}

projectsCreation(["George","4"])