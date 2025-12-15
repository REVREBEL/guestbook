import * as React from "react";
import * as Types from "./types";

declare function ComponentSizeVariant(
    props: {
        as?: React.ElementType;
        /** 375pxx375px
        375px562.5px
        562.5pxx375px*/
        componentComponentSizeVariant?: "1x1" | "2x3" | "3x2";
        backgroundCardImageWebflowImageVisibility?: Types.Visibility.VisibilityConditions;
        backgroundCardImageDevLinkImageVisibility?: Types.Visibility.VisibilityConditions;
        /** This is a div connected to the devlink component slot*/
        backgroundCardImageMemoryCardImageSlot?: Types.Devlink.Slot;
        /** Webflow Native Image connected to the devlink component slot*/
        backgroundCardImageMemoryCardImage?: Types.Asset.Image;
        backgroundCardImageMemoryCardImageAltText?: Types.Basic.AltText;
        backgroundCardImageMemoryCardImageRuntimeProps?: Types.Devlink.RuntimeProps;
        backgroundColorCardBackgroundColorCardRuntimeProps?: Types.Devlink.RuntimeProps;
        backgroundColorCardBackgroundColorCardSlot?: Types.Devlink.Slot;
        topCardMemoryHeadlineTag?: Types.Basic.HeadingTag;
        topCardMemoryHeadlineText?: React.ReactNode;
        topCardMetaCountTimeSlot?: Types.Devlink.Slot;
        topCardMetaCountTimeRuntimeProps?: Types.Devlink.RuntimeProps;
        memoryDateTopCardMemoryCardImageId?: Types.Basic.IdTextInput;
        /** Month Year Displayed on Top & Bottom Cards*/
        memoryDateTopCardMemoryDateMmmYyyy?: React.ReactNode;
        memoryDateTopCardMemoryDateSlot?: Types.Devlink.Slot;
        memoryDateTopCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
        /** Shared by: {{NAME}}*/
        sharedBySharedByText?: React.ReactNode;
        sharedBySharedByRuntimeProps?: Types.Devlink.RuntimeProps;
        sharedBySharedBySlot?: Types.Devlink.Slot;
        metaLocationMetaLocationIconVisibility?: Types.Visibility.VisibilityConditions;
        metaLocationLocationText?: React.ReactNode;
        metaLocationMetaLocationSlot?: Types.Devlink.Slot;
        metaLocationMetaLocationRuntimeProps?: Types.Devlink.RuntimeProps;
        readMoreButtonReadMoreButtonRuntimeProps?: Types.Devlink.RuntimeProps;
        readMoreButtonReadMoreButtonSlot?: Types.Devlink.Slot;
        readMoreButtonReadMoreButtonText?: React.ReactNode;
        /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
        bottomCardBottomCardRuntimeProps?: Types.Devlink.RuntimeProps;
        /** Hidden by default through Opacity Settings, and displays when card is clicked.*/
        bottomCardBottomCardSlot?: Types.Devlink.Slot;
        /** Month Year Displayed on Bottom Card*/
        memoryDateBottomCardMemoryDateRuntimeProps?: Types.Devlink.RuntimeProps;
        /** Month Year Displayed on Bottom Card*/
        memoryDateBottomCardMemoryDateSlot?: Types.Devlink.Slot;
        /** Paragraph Displayed on Bottom Card*/
        memoryDetailMemoryDetailRuntimeProps?: Types.Devlink.RuntimeProps;
        /** Paragraph Displayed on Bottom Card*/
        memoryDetailMemoryDetailSlot?: Types.Devlink.Slot;
        /** Paragraph Displayed on Bottom Card*/
        memoryDetailMemoryDetailParagraph?: React.ReactNode;
        /** Like Icon Displayed on Bottom Card*/
        likeIconLikeIconVisibility?: Types.Visibility.VisibilityConditions;
        /** {{X Days|Weeks|Years Ago}}*/
        memoryDateTopCardTimeIndicator?: React.ReactNode;
        /** Like Icon Displayed on Bottom Card*/
        likeIconLikeIconRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element