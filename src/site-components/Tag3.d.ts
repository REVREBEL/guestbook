import * as React from "react";
import * as Types from "./types";

declare function Tag3(
    props: {
        as?: React.ElementType;
        tagField1FormInputId?: Types.Basic.IdTextInput;
        tagField1FormInputVisibility?: Types.Visibility.VisibilityConditions;
        tag2FormInputId?: Types.Basic.IdTextInput;
        tag2TsgVisibility?: Types.Visibility.VisibilityConditions;
        tag2FromInputRuntimeProps?: Types.Devlink.RuntimeProps;
        tag2FormInputIconVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element