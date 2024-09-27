// cls - сам класс
// mods - объект с ключем string и полями string | boolean
// additional - массив string

type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mods, additional: string[]) => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([effectName, value]) => value)
      .map(([effectName, value]) => effectName),
    ...additional,
  ].join(" ");
};
