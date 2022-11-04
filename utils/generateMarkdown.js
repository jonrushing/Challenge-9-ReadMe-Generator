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
const badge = (data) => {
  if(data !== 'None'){
    return licenseOptions[data].badge
} else {
  return ""
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = (data) => {
  if(data !== 'None'){
    return licenseOptions[data].Link 
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const sectionTOC = (data) =>{
  if(data !== 'None'){
    return `
  - [License](#license)`
} else {
      return ""
    }
}  

const section = (data) => {
  if(data !== 'None'){
    return `
  
  ## License <a name="license"></a>
  [For more information about the license click here](${licenseLink(data)})`
  } else {
    return ""
  }
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${badge(data.license)}
  ## Table-of-Contents
  - [Description](#description)
  - [Installation](#installation)${sectionTOC(data.license)}
  - [Usage](#usage)
  - [Contribution](#contributing)
  - [Testing](#tests)
  - [Questions](#questions)
  
  ## Description <a name="description"></a>
  ${data.description}

  ## Installation <a name="installation"></a>
  ${data.install}${section(data.license)}
  
  ## Usage <a name="usage"></a>
  ${data.use}

  ## Contribution <a name="contributing"></a>
  ${data.contribute}

  ## Testing <a name="tests"></a>
  ${data.test}

  ## Questions <a name="questions"></a>
  If you have any questions at all feel free to contact me here or by email:
  
  [GitHub](https://github.com/${data.gitUser})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;