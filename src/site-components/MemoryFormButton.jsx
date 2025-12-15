"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MemoryFormButton(
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
        "Warm Sandston": "w-variant-b898c172-11d0-fe98-a201-093af39069db",
        "Warm Sandston Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069dc",
        "Slate Navy": "",
        "Slate Navy Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069dd",
        "Ocean Teal": "w-variant-b898c172-11d0-fe98-a201-093af39069de",
        "Ocean Teal Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069df",
        "Rustwood Red": "w-variant-b898c172-11d0-fe98-a201-093af39069e0",
        "Rustwood Outline": "w-variant-b898c172-11d0-fe98-a201-093af39069e1"
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