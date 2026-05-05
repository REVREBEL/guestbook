"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";

export function TimelineFormButton({
  buttonButtonId = "memory-form-button",

  buttonButtonLink = {
    href: "#",
  },

  buttonButtonLinkRuntimeProps = {},
  buttonButtonRuntimeProps = {},
  buttonButtonSlot = "",
  buttonButtonText = "Post a Memory ",
  buttonButtonVisibility = true,
  variant = "Slate Navy",
}) {
  const _styleVariantMap = {
    "Warm Sandston": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856a",
    "Warm Sandston Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856b",
    "Slate Navy": "",
    "Slate Navy Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856c",
    "Ocean Teal": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856d",
    "Ocean Teal Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856e",
    "Rustwood Red": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856f",
    "Rustwood Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae8570",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {buttonButtonVisibility ? (
        <Block
          className={`button is-accent-tertiary hero_button ${_activeStyleVariant}`}
          client:only={"react"}
          id={buttonButtonId}
          tag={"div"}
          {...buttonButtonRuntimeProps}
        >
          {buttonButtonSlot ?? (
            <Link
              block={""}
              button={true}
              className={`button_label is-secondary ${_activeStyleVariant}`}
              options={buttonButtonLink}
              {...buttonButtonLinkRuntimeProps}
            >
              {buttonButtonText}
            </Link>
          )}
        </Block>
      ) : null}
    </div>
  );
}
