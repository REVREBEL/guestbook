"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Button(
    {
        as: _Component = _Builtin.Block,
        variant = "Slate Navy",
        buttonButtonRuntimeProps = {},
        buttonButtonSlot,
        buttonButtonVisibility = true,
        buttonButtonId,

        buttonButtonLink = {
            href: "https://patricia-lanning.webflow.io#a28defe9-3b47-63a3-b037-f877e72a13b0"
        },

        buttonButtonText = "Explore Now",
        buttonButtonLinkRuntimeProps = {}
    }
) {
    const _styleVariantMap = {
        "Warm Sandston": "w-variant-7562c00a-ef15-81f4-91b7-90a0fbab46c7",
        "Warm Sandston Outline": "w-variant-fbee5f1c-a6fd-a583-6b28-036790acb6e1",
        "Slate Navy": "",
        "Slate Navy Outline": "w-variant-c189fcd3-5a4d-5795-6030-6819db69b481",
        "Ocean Teal": "w-variant-3ac05b22-f83a-436b-8411-820fcbd28f5a",
        "Ocean Teal Outline": "w-variant-41a6f2a1-f3ed-2454-f7b2-ac853f4e425b",
        "Rustwood Red": "w-variant-f869ac7b-f7d5-74ad-637d-c21d9e99da10",
        "Rustwood Outline": "w-variant-9258e10b-ad62-6a7c-340f-35176aa91519"
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return buttonButtonVisibility ? <_Component
        className={`button is-accent-tertiary hero_button ${_activeStyleVariant}`}
        tag="div"
        client:only="react"
        id={buttonButtonId}
        {...buttonButtonRuntimeProps}>{buttonButtonSlot ?? <_Builtin.Link
            className={`button_label is-secondary ${_activeStyleVariant}`}
            button={true}
            block=""
            options={buttonButtonLink}
            {...buttonButtonLinkRuntimeProps}>{buttonButtonText}</_Builtin.Link>}</_Component> : null;
}