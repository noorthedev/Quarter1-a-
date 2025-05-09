// Get references to the form and display area
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
var _a;
// // Handel form submission
// form.addEventListener('submit' ,(event: Event)=> {
//     event.preventDefault();
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // collect input values
    var profilepictureInput = document.getElementById('{profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var profilepicture = profilepictureInput.value;
        var name_1 = nameElement.value;
        var email = educationElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // profile picture
        var profilePictureFile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Generate the resume content dynamically
        var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n\n    ".concat(profilepictureInput ? "<img src=".concat(profilePictureURL, " alt=profilePictureURLt='Profile Picture' class='profilePicture'>") : '', "\n    <p><b><strong>Name:</strong></b>").concat(nameElement, "</p>\n    <p><b><strong>email:</strong></b>").concat(emailElement, "</p>\n    <p><b><strong>phone:</strong></b>").concat(phoneElement, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(educationElement, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experienceElement, "</p>\n    \n    <h3>Skills</p>\n    <p>").concat(skillsElement, "</p>\n    ");
        //Display the generated resume
        var resumeDisplayElement = document.getElementById('resume-display');
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('the resume-display element are missing');
        }
    }
    else {
        console.error('one of the output elements are missing');
    }
});
