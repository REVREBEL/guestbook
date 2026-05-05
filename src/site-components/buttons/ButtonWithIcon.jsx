"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";
import { ComponentIcon } from "../parts/ComponentIcon";

export function ButtonWithIcon({
  componentButtonId = "",
  componentColorVariant = "Slate Navy",
  componentIconVariant = "No Icon",
  componentRuntimeProps = {},
  componentSlot = "",
  componentVisibility = true,
  linkButtonIcon = "",

  linkButtonLink = {
    href: "https://patricia-lanning.webflow.io/timeline",
  },

  linkButtonText = "Discover heR Life events",
}) {
  const _styleVariantMap = {
    "Warm Sandston": "w-variant-ee45998d-5a43-c57c-c7d6-4808e7a72733",
    "Slate Navy": "",
    "Warm Sandston Outline": "w-variant-a5b066d0-eea5-807d-c902-fb41893ff2ea",
    "Slate Navy Outline": "w-variant-528938e1-f8f6-e1bb-79b8-a5a9da37d75a",
  };

  const _activeStyleVariant = _styleVariantMap[componentColorVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentVisibility ? (
        <Block
          className={`button is-accent-tertiary on-accent-tertiary ${_activeStyleVariant}`}
          id={componentButtonId}
          tag={"div"}
          {...componentRuntimeProps}
        >
          {componentSlot ?? (
            <Block
              className={`tag is-secondary ${_activeStyleVariant}`}
              tag={"div"}
            >
              <ComponentIcon iconVariant={componentIconVariant} />
              <Link
                block={""}
                button={true}
                className={`button_label is-secondary is-icon ${_activeStyleVariant}`}
                options={linkButtonLink}
              >
                {linkButtonText}
              </Link>
            </Block>
          )}
        </Block>
      ) : null}
    </div>
  );
}
