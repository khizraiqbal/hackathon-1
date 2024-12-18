// Get form elements
const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;

const cvOutput = document.getElementById("cvOutput") as HTMLDivElement;

// Function to generate CV
function generateCV(): void {
  // Get user input
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const skills = skillsInput.value.split(",").map((skill) => skill.trim());
  const experience = experienceInput.value;

  // Generate CV Layout
  const cvHTML = `
    <div class="cv-header">
      <h2>${name}</h2>
      <p>Email: ${email} | Phone: ${phone}</p>
    </div>
    <div class="cv-section">
      <h3>Skills</h3>
      <ul>
        ${skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
    <div class="cv-section">
      <h3>Experience</h3>
      <p>${experience}</p>
    </div>
  `;

  // Inject into output div
  cvOutput.innerHTML = cvHTML;

  // Show the CV
  cvOutput.classList.remove("hidden");
}

// Event Listener
generateBtn.addEventListener("click", generateCV);
