

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var url  = renderLicenseURL(license);
  var badge;
  if (license === "MIT") {
    badge = "https://img.shields.io/badge/License-MIT-yellow.svg";

    // Apache 2.0 License
  } else if (license === "Apache 2.0") {
    badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";


    // IBM Public License Version 1.0
  } else if (license === "GPLv3") {
    badge = "https://img.shields.io/badge/License-GPLv3-blue.svg";

  }      // Unlicense
   else {
    badge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
  }
  return `[![License: ${license}](${badge})](${url})`;
}

function renderLicenseURL(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
    // Apache 2.0 License
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
    // IBM Public License Version 1.0
  } else if (license === "GPLv3") {
    return "https://opensource.org/licenses/IPL-1.0";
    // Mozilla Public License 2.0
  }      // Unlicense
   else {
    return "http://unlicense.org/";
  }
}

 //generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing 
${data.contribute}

## Tests 
${data.test}

## License 
This repository is licensed with [${data.license}](${renderLicenseURL(data.license)}).


## Video  
[View Demo](${data.video})

## Questions 
If you have any questions, contact me at [${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;
