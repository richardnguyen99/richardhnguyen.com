import DefaultFile from "@components/Icons/DefaultFile";
import FileTypeC from "@components/Icons/FileTypeC";
import FileTypeCpp from "@components/Icons/FileTypeCpp";
import FileTypeHtml from "@components/Icons/FileTypeHtml";
import FileTypeJs from "@components/Icons/FileTypeJs";
import FileTypePython from "@components/Icons/FileTypePython";

export const FileType = {
  c: FileTypeC,
  cpp: FileTypeCpp,
  py: FileTypePython,
  python: FileTypePython,
  js: FileTypeJs,
  html: FileTypeHtml,
};

const getFileType = (ext: string) => {
  if (ext in FileType) return FileType[ext];

  return DefaultFile;
};

export default getFileType;
