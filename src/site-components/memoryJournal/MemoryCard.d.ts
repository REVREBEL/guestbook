import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function MemoryCard(props: {
  backgroundColorCardBackgroundColorCardRuntimeProps?: Types.Devlink.RuntimeProps;
  backgroundColorCardBackgroundColorCardSlot?: Types.Devlink.Slot;
  backgroundImageDevLinkImageVisibility?: Types.Visibility.VisibilityConditions;
  /** Webflow Native Image connected to the devlink component slot*/
  backgroundImageMemoryCardImage?: Types.Asset.Image;
  backgroundImageMemoryCardImageAltText2?: Types.Basic.AltText;
  backgroundImageMemoryCardImageId?: string;
  backgroundImageMemoryCardImageRuntimeProps?: Types.Devlink.RuntimeProps;
  /** This is a div connected to the devlink component slot*/
  backgroundImageMemoryCardImageSlot?: Types.Devlink.Slot;
  backgroundImageMemoryCardVisibility?: Types.Visibility.VisibilityConditions;
  /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
  bottomCardBottomCardRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
  bottomCardBottomCardSlot?: Types.Devlink.Slot;
  componentComponentColorVariant?:
    | "Warm Sandston"
    | "Rustwood Red"
    | "Rose Clay"
    | "Tertiary"
    | "Ocean Teal";
  componentComponentId?: string;
  componentComponentSizeVariant?: "1x1" | "2x3" | "3x2";
  componentComponentVisibility?: Types.Visibility.VisibilityConditions;
  componentNumber?: number;
  componentVarCardSize?: React.ReactNode;
  componentVisibility?: Types.Visibility.VisibilityConditions;
  image?: Types.Asset.Image;
  /** Like Icon Displayed on Bottom Card*/
  likeIconLikeIconRuntimeProps?: Types.Devlink.RuntimeProps;
  likeIconLikeIconVisibility?: Types.Visibility.VisibilityConditions;
  /** MMMM YYYY
        Month Year Displayed on Bottom Card*/
  memoryDateBottomCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
  /** MMMM YYYY
        Month Year Displayed on Bottom Card*/
  memoryDateBottomCardMemoryDateSlot?: Types.Devlink.Slot;
  /** MMMM YYYY
        Month Year Displayed on Top & Bottom Cards*/
  memoryDateTopCardMemoryDateMmmmYyyy?: React.ReactNode;
  /** MMMM YYYY*/
  memoryDateTopCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
  /** MMMM YYYY*/
  memoryDateTopCardMemoryDateSlot?: Types.Devlink.Slot;
  /** {{X Days|Weeks|Months|Years Ago}}*/
  memoryDateTopCardMetaCountTimeRuntimeProps?: Types.Devlink.RuntimeProps;
  /** {{X Days|Weeks|Months|Years Ago}}*/
  memoryDateTopCardMetaCountTimeSlot?: Types.Devlink.Slot;
  /** {{X Days|Weeks|Months|Years Ago}}*/
  memoryDateTopCardMetaCountTimeText?: React.ReactNode;
  memoryDetailMemoryDetailParagraph?: React.ReactNode;
  /** Paragraph Displayed on Bottom Card*/
  memoryDetailMemoryDetailRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Paragraph Displayed on Bottom Card*/
  memoryDetailMemoryDetailSlot?: Types.Devlink.Slot;
  metaLcoationLocationText?: React.ReactNode;
  metaLcoationMetaLocationIconVisibility?: Types.Visibility.VisibilityConditions;
  metaLcoationMetaLocationRuntimeProps?: Types.Devlink.RuntimeProps;
  metaLcoationMetaLocationSlot?: Types.Devlink.Slot;
  readMoreButtonReadMoreButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  readMoreButtonReadMoreButtonSlot?: Types.Devlink.Slot;
  readMoreButtonReadMoreButtonText?: React.ReactNode;
  sharedBySharedByRuntimeProps?: Types.Devlink.RuntimeProps;
  sharedBySharedBySlot?: Types.Devlink.Slot;
  /** Shared by: {{NAME}}*/
  sharedBySharedByText?: React.ReactNode;
  topCardMemoryHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  topCardMemoryHeadlineText?: React.ReactNode;
}): React.JSX.Element;
