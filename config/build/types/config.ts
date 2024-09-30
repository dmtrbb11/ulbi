export type BuildMode = "production" | "development"; // тип для строки которая выставляеет какой mode у webpack

export interface BuildPaths {
  entry: string; // путь до энтри пойинт
  build: string; // путь до папки build с файлами которые минифицированы
  html: string; // путь до index.html файла
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
