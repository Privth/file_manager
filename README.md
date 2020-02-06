# file_manager

Sort your downloaded files to different subdirectories 

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
