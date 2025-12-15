import * as React from "react";
import * as Types from "./types";

declare function GuestbookCard(
    props: {
        as?: React.ElementType;
        mainComponentId?: Types.Basic.IdTextInput;
        mainComponentVisibility?: Types.Visibility.VisibilityConditions;
        mainComponentColorVariant?: "Warm Sandston" | "Slate Navy" | "Slate Blue" | "Ocean Teal" | "Rustwood Red" | "Rose Clay";
        guestbookDateId?: Types.Basic.IdTextInput;
        guestbookDateRuntimeProps?: Types.Devlink.RuntimeProps;
        guestbookDateDateLabel?: React.ReactNode;
        /** MMMM / YYYY*/
        guestbookDateGuestbookDate?: React.ReactNode;
        nameFullName?: React.ReactNode;
        locationVisibility?: Types.Visibility.VisibilityConditions;
        locationIconVisibility?: Types.Visibility.VisibilityConditions;
        locationId?: Types.Basic.IdTextInput;
        locationRuntimeProps?: Types.Devlink.RuntimeProps;
        viewMessageButtonVisibility?: Types.Visibility.VisibilityConditions;
        viewMessageButtonArrowIconVisibility?: Types.Visibility.VisibilityConditions;
        viewMessageButtonButtonText?: React.ReactNode;
        viewMessageButtonSlot?: Types.Devlink.Slot;
        viewMessageButtonRuntimeProps?: Types.Devlink.RuntimeProps;
        tag1Visibility?: Types.Visibility.VisibilityConditions;
        tag1Id?: Types.Basic.IdTextInput;
        tag1Text?: React.ReactNode;
        tag2Visibility?: Types.Visibility.VisibilityConditions;
        tag2Id?: Types.Basic.IdTextInput;
        tag2Text?: React.ReactNode;
        tag2Tag2Slot?: Types.Devlink.Slot;
        tag2RuntimeProps?: Types.Devlink.RuntimeProps;
        locationLocationText?: React.ReactNode;
        messageCardRuntimeProps?: Types.Devlink.RuntimeProps;
        messageCardMessageCardSlot?: Types.Devlink.Slot;
        howWeMetHowWeMetText?: React.ReactNode;
        howWeMetHowWeMetSlot?: Types.Devlink.Slot;
        howWeMetRuntimeProps?: Types.Devlink.RuntimeProps;
        messageVisibility?: Types.Visibility.VisibilityConditions;
        messageMessageHeading?: React.ReactNode;
        messageMessageText?: React.ReactNode;
        messageMessageSlot?: Types.Devlink.Slot;
        messageRuntimeProps?: Types.Devlink.RuntimeProps;
        cardDetailsButtonButtonText?: React.ReactNode;
        cardDetailsButtonCardDetailButtonSlot?: Types.Devlink.Slot;
        cardDetailsButtonRuntimeProps?: Types.Devlink.RuntimeProps;
        messageHeadingText?: React.ReactNode;
        tag1Tag1Slot?: Types.Devlink.Slot;
        tag1RuntimeProps?: Types.Devlink.RuntimeProps;
        howWeMetVisibility?: Types.Visibility.VisibilityConditions;
        howWeMetHeadingText?: React.ReactNode;
    }
): React.JSX.Element