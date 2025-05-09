// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handel form submission
form.addEventListener('submit' ,(event: Event)=> {
    event.preventDefault();

    // collect input values
    const profilePicture= (document.getElementById('profilePicture') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
   
    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>profilePicture:</b><span contentededitable="true">${profilePicture}</span></p>
    <p><b>Name:</b><span contentededitable="true">${name}</span></p>
    <p><b>email:</b><span contentededitable="true">${email}</span></p>
    <p><b>phone:</b><span contentededitable="true">${phone}</span></p>
    <p><b>address:</b><span contentededitable="true">${address}</span></p>
    
    <h3>Education</h3>
    <p <span contentededitable="true">${education}</span></p>
    
    <h3>Experience</h3>
    <p <span contentededitable="true">${experience}</span></p>
    
    <h3>Skills</p>
    <p <span contentededitable="true">${skills}</span></p>
    `;

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML =resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
});