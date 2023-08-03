const licenses = {
  mit: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]",
    link: "https://opensource.org/licenses/MIT",
  }
};


function renderLicenseBadge(license) {
  if (licenses[license]) {
    return licenses[license].badge;
  }
  return "";
}

function renderLicenseLink(license) {
  if (licenses[license]) {
    return licenses[license].link;
  }
  return "";
}

function renderLicenseSection(license) {
  if (licenses[license]) {
    return licenses[license].section;
  }
  return "";
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseSection}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${licenseBadge}

This project is licensed under the [${data.license}](${licenseLink}) license.

## Questions
If you have any questions about the project, feel free to reach out via the following channels:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}


module.exports = generateMarkdown;
