// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadpdfButton = document.getElementById('download-pdf');
// Handel form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    // const profilepictureInput = (document.getElementById('"profilePicture') as HTMLInputElement ).value;
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStrong with the username as the key//
    var resumeData = {
        // profilepictureInput,
        name: name,
        email: email,
        phone: phone,
        address: address,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally
    // profile picture
    // const profilepictureFile =  profilepictureInput.files?.[0]
    // const profilePictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    \n\n    <p><b>Name:</b><span contentededitable=\"true\">".concat(name, "</span></p>\n    <p><b>email:</b>><span contentededitable=\"true\">").concat(email, "</span></p>\n    <p><b>phone:</b>><span contentededitable=\"true\">").concat(phone, "</span></p>\n    <p><b>address:</b>><span contentededitable=\"true\">").concat(address, "</span></p>\n    \n    <h3>Education</h3>\n    <p contentededitable=\"true\">").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p contentededitable=\"true\">").concat(experience, "</p>\n    \n    <h3>Skills</p>\n    <p contentededitable=\"true\">").concat(skills, "</p>\n    ");
    //Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle pdf download
downloadpdfButton.addEventListener('click', function () {
    window.print();
});
// prefill the form based on the username in the URl
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //Autofill form if data is found in localStrong
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            // (document.getElementById('profilePicture') as HTMLInputElement).value = 
            //  resumeData.profilepicture;
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('address').value =
                resumeData.address;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value =
                resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
