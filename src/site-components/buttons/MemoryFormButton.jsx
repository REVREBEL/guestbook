"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";

export function MemoryFormButton({
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
    "Warm Sandston": "w-variant-b898c172-11d0-fe98-a201-093af39069db",
    "Warm Sandston Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069dc",
    "Slate Navy": "",
    "Slate Navy Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069dd",
    "Ocean Teal": "w-variant-b898c172-11d0-fe98-a201-093af39069de",
    "Ocean Teal Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069df",
    "Rustwood Red": "w-variant-b898c172-11d0-fe98-a201-093af39069e0",
    "Rustwood Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069e1",
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
