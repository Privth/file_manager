const fs = require('fs');
const path = require('path');

const directoryPath = '/home/wkrol/Downloads/';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error(err);
    }
    const extensions = {
        graphic: ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
        wordDocs: ['.docx', '.pdf', '.odt'],
        calcDocs: ['.xlsx']
    };

    files.forEach(file => {
            const extension = path.extname(file);
            if (extension === '') {
                return;
            }

            if (extensions['graphic'].includes(extension)) {
                fs.rename(
                    `${directoryPath}${file}`,
                    `${directoryPath}Pictures/${file}`,
                    err => {
                        if (err) return console.error(err)
                    });
            } else if (extensions['wordDocs'].includes(extension)) {
                fs.rename(
                    `${directoryPath}${file}`,
                    `${directoryPath}Documents/${file}`,
                    err => {
                        if (err) return console.error(err)
                    });
            } else if (extensions['calcDocs'].includes(extension)) {
                fs.rename(
                    `${directoryPath}${file}`,
                    `${directoryPath}Sheets/${file}`,
                    err => {
                        if (err) return console.error(err)
                    });
            } else {
                fs.rename(
                    `${directoryPath}${file}`,
                    `${directoryPath}Rest/${file}`,
                    err => {
                        if (err) return console.error(err)
                    });
            }
        }
    );
});



