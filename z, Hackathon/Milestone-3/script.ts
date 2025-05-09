// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handel form submission
form.addEventListener('submit' ,(event: Event)=> {
    event.preventDefault();

    // collect input values
    // const profilepictureInput = (document.getElementById('{profilePicture') as HTMLInputElement);
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education= (document.getElementById('education') as HTMLInputElement).value;
    const experience= (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
   


    
   

   // profile picture
    // const profilePictureFile =  profilepictureInput.files?.[0]
    // const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phone:</b>${phone}</p>
    <p><b>address:</b>${address}</p>
    
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</p>
    <p>${skills}</p>
    `;

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML =resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
    
});






