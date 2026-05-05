import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function RelationshipField(props: {
  relationshipFieldFormFieldId?: string;
  relationshipFieldFormFieldLabel?: React.ReactNode;
  relationshipFieldFormFieldVisibility?: Types.Visibility.VisibilityConditions;
  relationshipFieldInputFieldRuntimeProps?: Types.Devlink.RuntimeProps;
  relationshipFieldInputFieldSlot?: Types.Devlink.Slot;
  relationshipFieldPlaceholderText?: React.ReactNode;
  relationshipFieldSelectInputDropdownRuntimeProps?: Types.Devlink.RuntimeProps;
  relationshipFieldSelectInputFieldRuntimeProps?: Types.Devlink.RuntimeProps;
  relationshipFieldSelectInputLink?: Types.Basic.Link;
  relationshipFieldSelectInputLinkRuntimePropsd?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
