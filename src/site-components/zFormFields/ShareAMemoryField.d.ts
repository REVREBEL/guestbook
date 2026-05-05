import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ShareAMemoryField(props: {
  messageCharacterLabel?: React.ReactNode;
  messageCharactersRuntimeProps?: Types.Devlink.RuntimeProps;
  messageCharactersSlot?: Types.Devlink.Slot;
  messageCharactersVisibility?: Types.Visibility.VisibilityConditions;
  messageFormFieldId?: string;
  messageFormFieldLabel?: React.ReactNode;
  messageInputFieldId?: string;
  messageInputFieldRuntimeProps?: Types.Devlink.RuntimeProps;
  messageVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
