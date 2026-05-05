import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CardSizeVariant(props: {
  detailMemoryDetail?: React.ReactNode;
  imageAltText?: Types.Basic.AltText;
  imageImage?: Types.Asset.Image;
  imageVisibility?: Types.Visibility.VisibilityConditions;
  memoryCard1X1PreviewMemoryHeadline?: React.ReactNode;
  memoryHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  metaLikeIconVisibility?: Types.Visibility.VisibilityConditions;
  /** Month Year*/
  metaMemoryData?: React.ReactNode;
  metaPostedByName?: React.ReactNode;
  variant?: "1x1" | "2x3" | "3x2";
}): React.JSX.Element;
