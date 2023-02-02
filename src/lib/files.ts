import fs from 'fs';
import path from 'path';

const pagesDirectory = path.resolve(process.cwd(), 'content', 'pages');

// Get all filenames in posts directory as ['en/filename.md']
export function getAllFileNames(directoryPath: string, filesList = []) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
      filesList = getAllFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      filesList.push(path.join(path.basename(directoryPath), '/', file));
    }
  });

  const filteredList = filesList.filter((file) => file.includes('.md'));
  return filteredList;
}

export function getAllIds() {
  const dir = pagesDirectory
  const fileNames = getAllFileNames(dir);
  console.log('fileNames',fileNames);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.split('/')[1].replace(/\.md$/, ''),
      lang: fileName.split('/')[0],
    },
  }));
}


