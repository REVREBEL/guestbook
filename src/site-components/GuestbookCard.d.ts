import * as React from "react";
import * as Types from "./types";

declare function GuestbookCard(
    props: {
        as?: React.ElementType;
        mainComponentId?: Types.Basic.IdTextInput;
        mainComponentVisibility?: Types.Visibility.VisibilityConditions;
        mainComponentColorVariant?: "Warm Sandston" | "Slate Blue" | "Slate Navy" | "Ocean Teal" | "Rustwood Red" | "Rose Clay";
        guestbookDateId?: Types.Basic.IdTextInput;
        guestbookDateRuntimeProps?: Types.Devlink.RuntimeProps;
        guestbookDateDateLabel?: React.ReactNode;
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
        messageMessageText?: React.ReactNode;
        messageMessageSlot?: Types.Devlink.Slot;
        messageRuntimeProps?: Types.Devlink.RuntimeProps;
        cardDetailsButtonButtonText?: React.ReactNode;
        cardDetailsButtonCardDetailButtonSlot?: Types.Devlink.Slot;
        cardDetailsButtonRuntimeProps?: Types.Devlink.RuntimeProps;
        messageHeadingText?: React.ReactNode;
        howWeMetVisibility?: Types.Visibility.VisibilityConditions;
        howWeMetHeadingText?: React.ReactNode;
        guestbookDateVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element