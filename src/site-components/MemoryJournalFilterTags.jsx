"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MemoryJournalFilterTags(
    {
        as: _Component = _Builtin.Block,
        tagTagText = "Tag Label",
        tagTagRuntimeProps = {},
        tagTagSlot,
        tagTagVisibility = true,
        tagTagId,
        filterVariant = "Clear"
    }
) {
    const _styleVariantMap = {
        "Clear": "",
        "All": "w-variant-3074d042-2074-ef0a-075a-519801904e81",
        "Newest": "w-variant-3074d042-2074-ef0a-075a-519801904e80",
        "User Tag 1": "w-variant-3074d042-2074-ef0a-075a-519801904e82",
        "User Tag 2": "w-variant-3074d042-2074-ef0a-075a-519801904e83",
        "User Tag 3": "w-variant-3074d042-2074-ef0a-075a-519801904e84",
        "User Tag 4": "w-variant-3074d042-2074-ef0a-075a-519801904e85",
        "User Tag 5": "w-variant-3074d042-2074-ef0a-075a-519801904e86"
    };

    const _activeStyleVariant = _styleVariantMap[filterVariant];

    return tagTagVisibility ? <_Component
        className={`tag ${_activeStyleVariant}`}
        tag="div"
        id={tagTagId}
        {...tagTagRuntimeProps}>{tagTagSlot ?? tagTagText}</_Component> : null;
}