import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ComponentSizeVariant(props: {
  backgroundCardImageDevLinkImageVisibility?: Types.Visibility.VisibilityConditions;
  /** Webflow Native Image connected to the devlink component slot*/
  backgroundCardImageMemoryCardImage?: Types.Asset.Image;
  backgroundCardImageMemoryCardImageAltText?: Types.Basic.AltText;
  backgroundCardImageMemoryCardImageRuntimeProps?: Types.Devlink.RuntimeProps;
  /** This is a div connected to the devlink component slot*/
  backgroundCardImageMemoryCardImageSlot?: Types.Devlink.Slot;
  backgroundCardImageWebflowImageVisibility?: Types.Visibility.VisibilityConditions;
  backgroundColorCardBackgroundColorCardRuntimeProps?: Types.Devlink.RuntimeProps;
  backgroundColorCardBackgroundColorCardSlot?: Types.Devlink.Slot;
  /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
  bottomCardBottomCardRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
  bottomCardBottomCardSlot?: Types.Devlink.Slot;
  /** 375pxx375px
        375px562.5px
        562.5pxx375px*/
  componentComponentSizeVariant?: "1x1" | "2x3" | "3x2";
  /** Like Icon Displayed on Bottom Card*/
  likeIconLikeIconRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Like Icon Displayed on Bottom Card*/
  likeIconLikeIconVisibility?: Types.Visibility.VisibilityConditions;
  /** Month Year Displayed on Bottom Card*/
  memoryDateBottomCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Month Year Displayed on Bottom Card*/
  memoryDateBottomCardMemoryDateSlot?: Types.Devlink.Slot;
  memoryDateTopCardMemoryCardImageId?: string;
  /** Month Year Displayed on Top & Bottom Cards*/
  memoryDateTopCardMemoryDateMmmYyyy?: React.ReactNode;
  memoryDateTopCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
  memoryDateTopCardMemoryDateSlot?: Types.Devlink.Slot;
  /** {{X Days|Weeks|Years Ago}}*/
  memoryDateTopCardTimeIndicator?: React.ReactNode;
  /** Paragraph Displayed on Bottom Card*/
  memoryDetailMemoryDetailParagraph?: React.ReactNode;
  /** Paragraph Displayed on Bottom Card*/
  memoryDetailMemoryDetailRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Paragraph Displayed on Bottom Card*/
  memoryDetailMemoryDetailSlot?: Types.Devlink.Slot;
  metaLocationLocationText?: React.ReactNode;
  metaLocationMetaLocationIconVisibility?: Types.Visibility.VisibilityConditions;
  metaLocationMetaLocationRuntimeProps?: Types.Devlink.RuntimeProps;
  metaLocationMetaLocationSlot?: Types.Devlink.Slot;
  readMoreButtonReadMoreButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  readMoreButtonReadMoreButtonSlot?: Types.Devlink.Slot;
  readMoreButtonReadMoreButtonText?: React.ReactNode;
  sharedBySharedByRuntimeProps?: Types.Devlink.RuntimeProps;
  sharedBySharedBySlot?: Types.Devlink.Slot;
  /** Shared by: {{NAME}}*/
  sharedBySharedByText?: React.ReactNode;
  topCardMemoryHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  topCardMemoryHeadlineText?: React.ReactNode;
  topCardMetaCountTimeRuntimeProps?: Types.Devlink.RuntimeProps;
  topCardMetaCountTimeSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
