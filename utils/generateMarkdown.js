// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// referenced https://github.com/Kay0s/Create-ReadMe-With-Inquirer-NPM
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    `Copyright (c) ${new Date().getFullYear()}

This project is licensed under ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license, data.username)}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
  ${data.description}
## Installation
  ${data.installation}
## Usage
  ${data.usage}

## License 
${renderLicenseSection(data.license)}
## Contributing
GitHub Profile of Contributors:${data.contributing} 
## Tests
  ${data.tests}
## Questions
If there are any questions then you can contact me via:\n
   Email: ${data.email}\n
   GitHub Profile: [${data.username}](https://github.com/${data.username}/)\n
   GitHub Repository: [${data.username}](https://github.com/${data.username}/)\n
`;
}

module.exports = generateMarkdown;
