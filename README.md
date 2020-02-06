# file_manager

Sort your downloaded files to different subdirectories 

## Prequalities

install PM2
```
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

## Usage

```
const directoryPath = 'specify/your/download/path';
```
and create manually subdirectories where you want to put downloaded files

then change source code to suit path of created subdirectories
e.g.

```
 fs.rename(
         `${directoryPath}${file}`,
         `${directoryPath}Pictures/${file}`,
          err => {
                  if (err) return console.error(err)
                  });
```
## Start a script

from console:

```
pm2 start main.js
```
