// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "ISC Licence") {
    return `![badge](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license === "GNU GPLv3") {
    return `![badge](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return ` https://choosealicense.com/licenses/mit/`;
  } else if (license === "Apache") {
    return `https://www.apache.org/licenses/`;
  } else if (license === "ISC Licence") {
    return `https://www.isc.org/licenses/`;
  } else if (license === "GNU GPLv3") {
    return `https://www.gnu.org/licenses/`;
  } else return "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  if (license === "MIT") {
    return `MIT License

Copyright (c) ${new Date().getFullYear()} ${username}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

${renderLicenseLink(license)}`;
  } else if (license === "Apache") {
    return `Copyright ${new Date().getFullYear()} ${username}
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    
${renderLicenseLink(license)}
    
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
  } else if (license === "ISC Licence") {
    return `ISC License

Copyright (c) ${new Date().getFullYear()} ${username}
    
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
    
${renderLicenseLink(license)}

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.`;
  } else if (license === "GNU GPLv3") {
    return `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

${renderLicenseLink(license)}
  `;
  } else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license, data.username)}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
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
${renderLicenseSection(data.license, data.username)}
## Contributing
GitHub Profile of Contributors:[${data.contributing}] (https://github.com/${
    data.contributing
  }/)
## Tests
  ${data.tests}
## Questions
 ${data.questions}
   Email: ${data.email}\n
   GitHub Profile: [${data.username}](https://github.com/${data.username}/)\n
   GitHub Repository: [${data.username}](https://github.com/${data.username}/)\n
`;
}

module.exports = generateMarkdown;
