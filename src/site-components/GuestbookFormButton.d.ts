import * as React from "react";
import * as Types from "./types";

declare function GuestbookFormButton(
    props: {
        as?: React.ElementType;
        buttonVisibility?: Types.Visibility.VisibilityConditions;
        buttonId?: Types.Basic.IdTextInput;
        buttonButtonIconVisibility?: Types.Visibility.VisibilityConditions;
        buttonLabelText?: Types.Builtin.Text;
        buttonLoadingMessage?: Types.Builtin.Text;
        buttonRuntimeProps?: Types.Devlink.RuntimeProps;
        buttonSlot?: Types.Devlink.Slot;
    }
): React.JSX.Element