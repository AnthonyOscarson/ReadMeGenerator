// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* {License}{#license}\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.command}
  
  ## Usage
  ${data.usage}
  ## License
  renderLicenseLink
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.moreInfo}
  ## Tests
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions

  * Email - ${data.email}
  * Github - [${data.username}](https://github.com/${data.username}/)

  ${data.moreInfo}
  
  ---
  `;
}

module.exports = generateMarkdown;
