import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function GuestbookCard(props: {
  cardDetailsButtonButtonText?: React.ReactNode;
  cardDetailsButtonCardDetailButtonSlot?: Types.Devlink.Slot;
  cardDetailsButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  guestbookDateDateLabel?: React.ReactNode;
  guestbookDateId?: string;
  guestbookDateRuntimeProps?: Types.Devlink.RuntimeProps;
  guestbookDateVisibility?: Types.Visibility.VisibilityConditions;
  howWeMetHeadingText?: React.ReactNode;
  howWeMetHowWeMetSlot?: Types.Devlink.Slot;
  howWeMetHowWeMetText?: React.ReactNode;
  howWeMetRuntimeProps?: Types.Devlink.RuntimeProps;
  howWeMetVisibility?: Types.Visibility.VisibilityConditions;
  locationIconVisibility?: Types.Visibility.VisibilityConditions;
  locationId?: string;
  locationLocationText?: React.ReactNode;
  locationRuntimeProps?: Types.Devlink.RuntimeProps;
  locationVisibility?: Types.Visibility.VisibilityConditions;
  mainComponentColorVariant?:
    | "Warm Sandston"
    | "Slate Blue"
    | "Slate Navy"
    | "Ocean Teal"
    | "Rustwood Red"
    | "Rose Clay";
  mainComponentId?: string;
  mainComponentVisibility?: Types.Visibility.VisibilityConditions;
  messageCardMessageCardSlot?: Types.Devlink.Slot;
  messageCardRuntimeProps?: Types.Devlink.RuntimeProps;
  messageHeadingText?: React.ReactNode;
  messageMessageSlot?: Types.Devlink.Slot;
  messageMessageText?: React.ReactNode;
  messageRuntimeProps?: Types.Devlink.RuntimeProps;
  messageVisibility?: Types.Visibility.VisibilityConditions;
  nameFullName?: React.ReactNode;
  tag2Id?: string;
  tag2RuntimeProps?: Types.Devlink.RuntimeProps;
  tag2Tag2Slot?: Types.Devlink.Slot;
  tag2Text?: React.ReactNode;
  tag2Visibility?: Types.Visibility.VisibilityConditions;
  viewMessageButtonArrowIconVisibility?: Types.Visibility.VisibilityConditions;
  viewMessageButtonButtonText?: React.ReactNode;
  viewMessageButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  viewMessageButtonSlot?: Types.Devlink.Slot;
  viewMessageButtonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
