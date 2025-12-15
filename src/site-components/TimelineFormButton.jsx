"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function TimelineFormButton(
    {
        as: _Component = _Builtin.Block,
        buttonButtonRuntimeProps = {},
        buttonButtonSlot,
        buttonButtonVisibility = true,
        buttonButtonId = "memory-form-button",

        buttonButtonLink = {
            href: "#"
        },

        buttonButtonText = "Post a Memory ",
        buttonButtonLinkRuntimeProps = {},
        variant = "Slate Navy"
    }
) {
    const _styleVariantMap = {
        "Warm Sandston": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856a",
        "Warm Sandston Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856b",
        "Slate Navy": "",
        "Slate Navy Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856c",
        "Ocean Teal": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856d",
        "Ocean Teal Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856e",
        "Rustwood Red": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae856f",
        "Rustwood Outline": "w-variant-9f70562c-fd16-2fcb-557f-d472a3ae8570"
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