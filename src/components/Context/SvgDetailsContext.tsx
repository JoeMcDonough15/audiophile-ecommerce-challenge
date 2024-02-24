import { createContext, PropsWithChildren } from "react";
import svgDetails from "../svg-details.json";

export interface SvgDetails {
  stroke?: string;
  strokeWidth?: string;
  width: string;
  height: string;
  src: string;
  gElement?: boolean;
  d?: string;
  internalLink?: boolean;
  linkDestination?: string;
  fill?: string;
  opacity?: string;
  cx?: string;
  cy?: string;
  circleOneRadius?: string;
  circleTwoRadius?: string;
  circleThreeRadius?: string;
}

interface SvgCollection {
  logo: SvgDetails;
  twitter: SvgDetails;
  facebook: SvgDetails;
  instagram: SvgDetails;
  hamburgerMenu: SvgDetails;
  shoppingCart: SvgDetails;
  arrowIcon: SvgDetails;
  circlesPattern: SvgDetails;
}

export const AllSvgDetails = createContext<SvgCollection>(svgDetails);

export const SvgDetailsProvider = ({ children }: PropsWithChildren) => {
  return (
    <AllSvgDetails.Provider value={svgDetails}>
      {children}
    </AllSvgDetails.Provider>
  );
};
