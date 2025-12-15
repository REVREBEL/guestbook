import * as React from "react";
import * as Types from "./types";

declare function RelationshipField(
    props: {
        as?: React.ElementType;
        relationshipFieldFormFieldVisibility?: Types.Visibility.VisibilityConditions;
        relationshipFieldFormFieldId?: Types.Basic.IdTextInput;
        relationshipFieldFormFieldLabel?: React.ReactNode;
        relationshipFieldPlaceholderText?: React.ReactNode;
        relationshipFieldSelectInputLink?: Types.Basic.Link;
        relationshipFieldInputFieldRuntimeProps?: Types.Devlink.RuntimeProps;
        relationshipFieldInputFieldSlot?: Types.Devlink.Slot;
        relationshipFieldSelectInputFieldRuntimeProps?: Types.Devlink.RuntimeProps;
        relationshipFieldSelectInputLinkRuntimePropsd?: Types.Devlink.RuntimeProps;
        relationshipFieldSelectInputDropdownRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element