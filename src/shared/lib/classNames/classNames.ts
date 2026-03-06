type Mods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
) => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([effectName, _]) => effectName),
    ...additional.filter(Boolean),
  ].join(" ");
};
