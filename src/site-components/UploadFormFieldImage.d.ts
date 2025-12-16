import * as React from "react";
import * as Types from "./types";

declare function UploadFormFieldImage(
    props: {
        as?: React.ElementType;
        photo1UploadFIeldIconVisibility?: Types.Visibility.VisibilityConditions;
        photo1UploadFIeldImageUploadRuntimeProps?: Types.Devlink.RuntimeProps;
        photo1UploadFIeldImageUploadSlot?: Types.Devlink.Slot;
    }
): React.JSX.Element