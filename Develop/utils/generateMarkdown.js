// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.getBadge}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Badges] (#Badges)
  - [Contact Information](#Contact Information)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${data.license}
    
  ---
  
  ## Contact Information
  * Github username: ${data.username}
  * Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
