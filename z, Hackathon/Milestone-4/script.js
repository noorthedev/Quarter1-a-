// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handel form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var profilePicture = document.getElementById('profilePicture').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>profilePicture:</b><span contentededitable=\"true\">".concat(profilePicture, "</span></p>\n    <p><b>Name:</b><span contentededitable=\"true\">").concat(name, "</span></p>\n    <p><b>email:</b><span contentededitable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b><span contentededitable=\"true\">").concat(phone, "</span></p>\n    <p><b>address:</b><span contentededitable=\"true\">").concat(address, "</span></p>\n    \n    <h3>Education</h3>\n    <p <span contentededitable=\"true\">").concat(education, "</span></p>\n    \n    <h3>Experience</h3>\n    <p <span contentededitable=\"true\">").concat(experience, "</span></p>\n    \n    <h3>Skills</p>\n    <p <span contentededitable=\"true\">").concat(skills, "</span></p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
