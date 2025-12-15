"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ComponentIcon } from "./ComponentIcon";

export function ButtonWithIcon(
    {
        as: _Component = _Builtin.Block,
        componentVisibility = true,
        componentButtonId,
        componentColorVariant = "Slate Navy",
        componentIconVariant = null,
        componentRuntimeProps = {},
        componentSlot,

        linkButtonLink = {
            href: "https://patricia-lanning.webflow.io/timeline"
        },

        linkButtonIcon = "",
        linkButtonText = "Discover heR Life events"
    }
) {
    const _styleVariantMap = {
        "Warm Sandston": "w-variant-ee45998d-5a43-c57c-c7d6-4808e7a72733",
        "Slate Navy": "",
        "Warm Sandston Outline": "w-variant-a5b066d0-eea5-807d-c902-fb41893ff2ea",
        "Slate Navy Outline": "w-variant-528938e1-f8f6-e1bb-79b8-a5a9da37d75a"
    };

    const _activeStyleVariant = _styleVariantMap[componentColorVariant];

    return componentVisibility ? <_Component
        className={`button is-accent-tertiary on-accent-tertiary ${_activeStyleVariant}`}
        tag="div"
        id={componentButtonId}
        {...componentRuntimeProps}>{componentSlot ?? <_Builtin.Block className={`tag is-secondary ${_activeStyleVariant}`} tag="div"><ComponentIcon iconVariant={componentIconVariant} /><_Builtin.Link
                className={`button_label is-secondary is-icon ${_activeStyleVariant}`}
                button={true}
                block=""
                options={linkButtonLink}>{linkButtonText}</_Builtin.Link></_Builtin.Block>}</_Component> : null;
}