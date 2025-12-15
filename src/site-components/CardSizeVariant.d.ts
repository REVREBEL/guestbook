import * as React from "react";
import * as Types from "./types";

declare function CardSizeVariant(
    props: {
        as?: React.ElementType;
        variant?: "1x1" | "2x3" | "3x2";
        imageVisibility?: Types.Visibility.VisibilityConditions;
        imageImage?: Types.Asset.Image;
        imageAltText?: Types.Basic.AltText;
        detailMemoryDetail?: React.ReactNode;
        /** Month Year*/
        metaMemoryData?: React.ReactNode;
        metaLikeIconVisibility?: Types.Visibility.VisibilityConditions;
        memoryHeadlineTag?: Types.Basic.HeadingTag;
        memoryCard1X1PreviewMemoryHeadline?: React.ReactNode;
        metaPostedByName?: React.ReactNode;
    }
): React.JSX.Element