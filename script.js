// Get form elements
var generateBtn = document.getElementById("generateBtn");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");
var cvOutput = document.getElementById("cvOutput");
// Function to generate CV
function generateCV() {
    // Get user input
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var skills = skillsInput.value.split(",").map(function (skill) { return skill.trim(); });
    var experience = experienceInput.value;
    // Generate CV Layout
    var cvHTML = "\n    <div class=\"cv-header\">\n      <h2>".concat(name, "</h2>\n      <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n    </div>\n    <div class=\"cv-section\">\n      <h3>Skills</h3>\n      <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n      </ul>\n    </div>\n    <div class=\"cv-section\">\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n    </div>\n  ");
    // Inject into output div
    cvOutput.innerHTML = cvHTML;
    // Show the CV
    cvOutput.classList.remove("hidden");
}
// Event Listener
generateBtn.addEventListener("click", generateCV);
