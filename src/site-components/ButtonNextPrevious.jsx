"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonNextPrevious(
    {
        as: _Component = _Builtin.Block,
        buttonId,
        componentVisibility = true,
        buttonVariantType = "View More",
        buttonRuntimeProps = {},
        viewMoreButtonText = "View More",
        nextButtonText = "Next Page",
        previousPageButtonText = "Previous Page",
        viewMoreVisibility = true,
        nextVisibility = true,
        previousPageVisibility = true
    }
) {
    const _styleVariantMap = {
        "View More": "",
        "Previous": "w-variant-35fdfe12-a636-2f7f-c1e4-e4c9ad71f45b",
        "Next": "w-variant-35fdfe12-a636-2f7f-c1e4-e4c9ad71f45a"
    };

    const _activeStyleVariant = _styleVariantMap[buttonVariantType];

    return componentVisibility ? <_Component
        className={`component-button_previous-next ${_activeStyleVariant}`}
        tag="div"
        id={buttonId}
        {...buttonRuntimeProps}>{viewMoreVisibility ? <_Builtin.Block
            className={`button_next-previous view-more ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block className={`text-block-13 ${_activeStyleVariant}`} tag="div">{viewMoreButtonText}</_Builtin.Block></_Builtin.Block> : null}{nextVisibility ? <_Builtin.Block className={`button_next-previous next ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`button_next-previous-text ${_activeStyleVariant}`} tag="div">{nextButtonText}</_Builtin.Block><_Builtin.HtmlEmbed
                className={`code-embed_next-icon next ${_activeStyleVariant}`}
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M6.90588%204.53682C6.50592%204.2998%206%204.58808%206%205.05299V18.947C6%2019.4119%206.50592%2019.7002%206.90588%2019.4632L18.629%2012.5162C19.0211%2012.2838%2019.0211%2011.7162%2018.629%2011.4838L6.90588%204.53682Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block> : null}{previousPageVisibility ? <_Builtin.Block
            className={`button_next-previous previous ${_activeStyleVariant}`}
            tag="div"><_Builtin.HtmlEmbed
                className={`code-embed_previous-icon previous ${_activeStyleVariant}`}
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M6.90588%204.53682C6.50592%204.2998%206%204.58808%206%205.05299V18.947C6%2019.4119%206.50592%2019.7002%206.90588%2019.4632L18.629%2012.5162C19.0211%2012.2838%2019.0211%2011.7162%2018.629%2011.4838L6.90588%204.53682Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /><_Builtin.Block className={`button_next-previous-text ${_activeStyleVariant}`} tag="div">{previousPageButtonText}</_Builtin.Block></_Builtin.Block> : null}</_Component> : null;
}