import fs from 'fs';
import handleFile from '../service/handleFile';

const getFileDetails = (file, path) => {
  const newFile = {};
  newFile.filePath = path;
  newFile.size = handleFile.getFileSize(path);
  newFile.min = file.split('_')[1];
  newFile.max = file.split('_')[2];
  return newFile;
}

export default getFileDetails;
