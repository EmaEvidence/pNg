import handleFile from '../service/handleFile';

const getFileDetails = (file, path) => {
  const newFile = {};
  newFile.filePath = path;
  newFile.size = handleFile.getFileSize(path);
  newFile.minNumber = file.split('_')[1];
  newFile.maxNumber = file.split('_')[2];
  newFile.name = `${file.split('_')[0]}${file.split('_')[3]}`;
  return newFile;
}

export default getFileDetails;
