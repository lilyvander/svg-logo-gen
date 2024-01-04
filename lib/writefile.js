const fs = require('fs');

function writeSVGFile(fileName, svgLogo) {
    try {
        fs.writeFileSync(fileName, svgLogo);
        console.log(`File '${fileName}' successfully created.`);
    } catch (error) {
        console.error(`Error writing to file '${fileName}': ${error.message}`);
    }
}

module.exports = writeSVGFile;