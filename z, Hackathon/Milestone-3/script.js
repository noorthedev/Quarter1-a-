// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handel form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    // const profilepictureInput = (document.getElementById('{profilePicture') as HTMLInputElement);
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // profile picture
    // const profilePictureFile =  profilepictureInput.files?.[0]
    // const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    <p><b>phone:</b>").concat(phone, "</p>\n    <p><b>address:</b>").concat(address, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Skills</p>\n    <p>").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
