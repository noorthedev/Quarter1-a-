// Get references to the form and display area
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// // Handel form submission
// form.addEventListener('submit' ,(event: Event)=> {
//     event.preventDefault();


document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();


    // collect input values
    const profilepictureInput = (document.getElementById('{profilePicture') as HTMLInputElement);
    const nameElement = (document.getElementById('name') as HTMLInputElement);
    const emailElement  = (document.getElementById('email') as HTMLInputElement);
    const phoneElement  = (document.getElementById('phone') as HTMLInputElement);
    const educationElement  = (document.getElementById('education') as HTMLInputElement);
    const experienceElement = (document.getElementById('experience') as HTMLInputElement);
    const skillsElement  = (document.getElementById('skills') as HTMLInputElement);

     if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

          const profilepicture = profilepictureInput.value;
          const name = nameElement.value;
          const email = educationElement.value;
          const phone = phoneElement.value;
          const education = educationElement.value;
          const experience = experienceElement.value;
          const skills = skillsElement.value;

     
    

   // profile picture
    const profilePictureFile =  profilepictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>

    ${profilepictureInput? `<img src=${profilePictureURL} alt=profilePictureURLt='Profile Picture' class='profilePicture'>`: '' }
    <p><b><strong>Name:</strong></b>${nameElement }</p>
    <p><b><strong>email:</strong></b>${emailElement }</p>
    <p><b><strong>phone:</strong></b>${phoneElement }</p>
    
    <h3>Education</h3>
    <p>${educationElement }</p>
    
    <h3>Experience</h3>
    <p>${experienceElement }</p>
    
    <h3>Skills</p>
    <p>${skillsElement }</p>
    `;

    //Display the generated resume
    const resumeDisplayElement = document.getElementById('resume-display')
      if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML

      }else{
        console.error('the resume-display element are missing');
        
      }
}   else{
    console.error('one of the output elements are missing');
    
}    
});