function renderlicenseBadge(data){
  switch (licenseBadge) {
      case "MIT":
          return "![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case "Apache":
          return "![Apache 2.0 License Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      case "Mozilla":
          return "![Mozilla Public 2.0 License Badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      case "None":
          return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderlicenseURL(data) {
  switch (licenseURL) {
      case "MIT":
          return "[MIT](https://mit-license.org/)";
      case "Apache":
          return "[Apache 2.0 License Badge](https://www.apache.org/licenses/LICENSE-2.0.html)";
      case "None":
          return "No licensing.";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenseSection === "MIT");
  return `Copyright ${data.year} ${data.author}
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
}
  if (licenseSection === "Apache");
  return `Copyright ${data.year} ${data.author}
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`;
  if (license==="none");
  return `No Copyright Information`;


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${data.renderlicenseBadge}
  ## Description
  ${data.description}
  
  Click the link below to visit my deployed page.
  <!-- [URL](${data.site}) -->
  ## Table of Contents
  
  * [Goals](#goals)
  * [Usage](#usage) 
  * [Installation](#installation)  
  * [Test](#test)
  * [Problems](#problems)
  * [Visualization](#visualization)
  * [Acknowledgements](#acknowledgements)
  * [Contributions](#contributions)
  * [Resources](#resources)
  * [License](#license) 
  * [Contact](#contact) 
  
  ## Goals
  ${data.goals}
  ## Usage
  ${data.usage}
  ## Installation
  
  ${data.install}  
  ## Test
  ${data.test}
  ## Problems
  ${data.problems}
  ## Visualization
  placeholder to add images or other media
  ## Acknowledgements
  ${data.credits}
  ## Contributions
  ${data.contribution}
  ## Resources
 
  ${data.resources}
  ## License
  ${data.r}
  ${data.renderLicenseSection}
  ## Contact
  
  GitHub Username: ${data.github} 
 
  Link to Github account[${data.github}](https://github.com/${data.github})
  Email: ${data.contact}
`;
}
module.exports = generateMarkdown;