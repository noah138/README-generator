// Generates a badge image with link to information about that license
function getBadge(value) {
  if (value === 'GNU AGPLv3') {
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-green.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (value === 'GNU GPLv3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (value === 'GNU LGPLv3') {
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-green.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (value === 'Mozilla 2.0') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-yellow.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (value === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (value === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
  } else if (value === 'Boost Software 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-brightgreen.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else {
      return '';
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${getBadge(data.license)}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Contact](#Contact)

  ## Description

  ${data.description}
  
  ## Installation

  ${data.installation}
    
  ## Usage

  ${data.usage}
  
  ## Contributing
  
  ${data.credits}

  ## Tests

  ${data.tests}
  
  ## License

  This repository is licensed under the ${data.license} license.
  Click on the badge at the top of the README to learn more about this license.
    
  ---
  
  ## Contact Information
  * Github username: github.com/${data.username}
  * Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
