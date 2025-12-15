import * as React from "react";
import * as Types from "./types";

declare function ShareAMemoryField(
    props: {
        as?: React.ElementType;
        messageVisibility?: Types.Visibility.VisibilityConditions;
        messageFormFieldId?: Types.Basic.IdTextInput;
        messageFormFieldLabel?: React.ReactNode;
        messageInputFieldId?: Types.Basic.IdTextInput;
        messageInputFieldRuntimeProps?: Types.Devlink.RuntimeProps;
        messageCharactersVisibility?: Types.Visibility.VisibilityConditions;
        messageCharacterLabel?: React.ReactNode;
        messageCharactersRuntimeProps?: Types.Devlink.RuntimeProps;
        messageCharactersSlot?: Types.Devlink.Slot;
    }
): React.JSX.Element