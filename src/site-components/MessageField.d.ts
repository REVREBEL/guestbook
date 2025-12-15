import * as React from "react";
import * as Types from "./types";

declare function MessageField(
    props: {
        as?: React.ElementType;
        shareAMemoryFormInputVisibility?: Types.Visibility.VisibilityConditions;
        shareAMemoryFormInputId?: Types.Basic.IdTextInput;
        shareAMemoryFormInputCharactersSlot?: Types.Devlink.Slot;
        shareAMemoryFormInputLabel?: React.ReactNode;
        shareAMemoryFormInputRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element