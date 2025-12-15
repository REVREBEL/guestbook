"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookFilterTag(
    {
        as: _Component = _Builtin.Block,
        visibility = true,
        id,
        filterVariant = "Clear",
        text = "Tag Label",
        tagSlot,
        runtimeProps = {}
    }
) {
    const _styleVariantMap = {
        "Clear": "",
        "Newest Tag": "w-variant-52187c72-1048-778e-1544-aa09b68c1120",
        "Family": "w-variant-f3baf07a-9b17-7c1c-8615-2addb2ee2e5e",
        "Relatives": "w-variant-52187c72-1048-778e-1544-aa09b68c111b",
        "Friends": "w-variant-52187c72-1048-778e-1544-aa09b68c111c",
        "Co-Workers": "w-variant-52187c72-1048-778e-1544-aa09b68c111d",
        "Business Partners": "w-variant-52187c72-1048-778e-1544-aa09b68c111e",
        "Secondary Outline": "w-variant-52187c72-1048-778e-1544-aa09b68c111f"
    };

    const _activeStyleVariant = _styleVariantMap[filterVariant];

    return visibility ? <_Component
        className={`tag ${_activeStyleVariant}`}
        tag="div"
        id={id}
        {...runtimeProps}>{tagSlot ?? text}</_Component> : null;
}