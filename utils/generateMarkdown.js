

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // IBM Public License Version 1.0
  } else if (license === "GPLv3") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    // Mozilla Public License 2.0
  }      // Unlicense
   else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

 //generate markdown for README
function generateMarkdown(data) {
  return `#Title: ${data.title}
    
##Description: ${data.description}
    
##Installation: ${data.installation}
    
##Usage: ${data.usage}
    
##Contributing: ${data.contribute}
  
##Tests: ${data.test}
    
##License: ${data.license}
${renderLicenseSection(data.license)};
    
##Video:  <a href="${data.video}" target="_blank">View Demo Video  </a>  
  
##Questions:  ${data.email}
    
 
      

`;
}

module.exports = generateMarkdown;
