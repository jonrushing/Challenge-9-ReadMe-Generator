const licenseOptions = {
  MIT: 
  {badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Link:"https://choosealicense.com/licenses/mit/"},
  
  "Mozilla Public License 2.0": 
  {badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  Link:"https://choosealicense.com/licenses/mpl-2.0/"},
  
  "Apache License 2.0": 
  {badge:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  Link:"https://choosealicense.com/licenses/apache-2.0/"},
                                  
  }



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badge = (data.license === !"None") ?
    licenseOptions[data.license].badge : ""


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = (data.license === !"None") ?
licenseOptions[data.license].Link : ""

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const sectionTOC = (data.license === !"None") ? 
`
- [License](#license)
` : ""

const section = (data.license === !"None") ?
`## License <a name="license"></a>

${licenseLink}` : ""

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${badge}

  ## Table-of-Contents
  - [Description](#description)
  - [Installation](#installation)${sectionTOC}
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description <a name="description"></a>
  ${data.description}

  ## Installation <a name="installation"></a>
  ${data.install}


  ${section}
  
  ## Usage <a name="usage"></a>
  
  ${data.use}
  
  ## Contributing <a name="contributing"></a>
  
 
  ## Tests <a name="tests"></a>
  
  ${data.test}

  ## Questions <a name="questions"></a>
  If you have any questions at all feel free to contact me here or by email:
  [GitHub](https://github.com/${data.gitUser})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
