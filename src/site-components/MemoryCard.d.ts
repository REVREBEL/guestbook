import * as React from "react";
import * as Types from "./types";

declare function MemoryCard(
    props: {
        as?: React.ElementType;
        image?: Types.Asset.Image;
        componentComponentVisibility?: Types.Visibility.VisibilityConditions;
        componentComponentId?: Types.Basic.IdTextInput;
        componentComponentColorVariant?: "Warm Sandston" | "Rustwood Red" | "Rose Clay" | "Tertiary" | "Ocean Teal";
        componentComponentSizeVariant?: "1x1" | "2x3" | "3x2";
        componentVisibility?: Types.Visibility.VisibilityConditions;
        componentVarCardSize?: React.ReactNode;
        componentNumber?: number;
        topCardMemoryHeadlineTag?: Types.Basic.HeadingTag;
        topCardMemoryHeadlineText?: React.ReactNode;
        backgroundColorCardBackgroundColorCardSlot?: Types.Devlink.Slot;
        backgroundColorCardBackgroundColorCardRuntimeProps?: Types.Devlink.RuntimeProps;
        backgroundImageMemoryCardVisibility?: Types.Visibility.VisibilityConditions;
        backgroundImageMemoryCardImageId?: Types.Basic.IdTextInput;
        /** Webflow Native Image connected to the devlink component slot*/
        backgroundImageMemoryCardImage?: Types.Asset.Image;
        backgroundImageMemoryCardImageAltText2?: Types.Basic.AltText;
        /** This is a div connected to the devlink component slot*/
        backgroundImageMemoryCardImageSlot?: Types.Devlink.Slot;
        backgroundImageMemoryCardImageRuntimeProps?: Types.Devlink.RuntimeProps;
        /** MMMM YYYY
        Month Year Displayed on Top & Bottom Cards*/
        memoryDateTopCardMemoryDateMmmmYyyy?: React.ReactNode;
        /** MMMM YYYY*/
        memoryDateTopCardMemoryDateSlot?: Types.Devlink.Slot;
        /** MMMM YYYY*/
        memoryDateTopCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
        /** Shared by: {{NAME}}*/
        sharedBySharedByText?: React.ReactNode;
        sharedBySharedByRuntimeProps?: Types.Devlink.RuntimeProps;
        sharedBySharedBySlot?: Types.Devlink.Slot;
        metaLcoationMetaLocationIconVisibility?: Types.Visibility.VisibilityConditions;
        metaLcoationLocationText?: React.ReactNode;
        metaLcoationMetaLocationSlot?: Types.Devlink.Slot;
        metaLcoationMetaLocationRuntimeProps?: Types.Devlink.RuntimeProps;
        readMoreButtonReadMoreButtonRuntimeProps?: Types.Devlink.RuntimeProps;
        readMoreButtonReadMoreButtonSlot?: Types.Devlink.Slot;
        readMoreButtonReadMoreButtonText?: React.ReactNode;
        /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
        bottomCardBottomCardSlot?: Types.Devlink.Slot;
        /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
        bottomCardBottomCardRuntimeProps?: Types.Devlink.RuntimeProps;
        /** MMMM YYYY
        Month Year Displayed on Bottom Card*/
        memoryDateBottomCardMemoryDateSlot?: Types.Devlink.Slot;
        /** MMMM YYYY
        Month Year Displayed on Bottom Card*/
        memoryDateBottomCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDetailMemoryDetailParagraph?: React.ReactNode;
        /** Paragraph Displayed on Bottom Card*/
        memoryDetailMemoryDetailSlot?: Types.Devlink.Slot;
        /** Paragraph Displayed on Bottom Card*/
        memoryDetailMemoryDetailRuntimeProps?: Types.Devlink.RuntimeProps;
        likeIconLikeIconVisibility?: Types.Visibility.VisibilityConditions;
        /** Like Icon Displayed on Bottom Card*/
        likeIconLikeIconRuntimeProps?: Types.Devlink.RuntimeProps;
        /** {{X Days|Weeks|Months|Years Ago}}*/
        memoryDateTopCardMetaCountTimeText?: React.ReactNode;
        /** {{X Days|Weeks|Months|Years Ago}}*/
        memoryDateTopCardMetaCountTimeSlot?: Types.Devlink.Slot;
        /** {{X Days|Weeks|Months|Years Ago}}*/
        memoryDateTopCardMetaCountTimeRuntimeProps?: Types.Devlink.RuntimeProps;
        backgroundImageDevLinkImageVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element