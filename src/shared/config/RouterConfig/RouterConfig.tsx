import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum RoutesNames {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutesPathObject: Record<RoutesNames, string> = {
  [RoutesNames.MAIN]: "/",
  [RoutesNames.ABOUT]: "/about",
};

export const RoutesConfigObject: Record<RoutesNames, RouteProps> = {
  [RoutesNames.MAIN]: {
    path: RoutesPathObject.main,
    element: <MainPageLazy></MainPageLazy>,
  },
  [RoutesNames.ABOUT]: {
    path: RoutesPathObject.about,
    element: <AboutPageLazy></AboutPageLazy>,
  },
};
