"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Tag(
    {
        as: _Component = _Builtin.Block,
        visibility = true,
        id,
        colorVariant = "Clear",
        text = "Tag Label",
        runtimeProps = {}
    }
) {
    const _styleVariantMap = {
        "Clear": "",
        "Warm Sandston": "w-variant-0992d1c2-1e85-66c6-5fc4-41ffecbf5acb",
        "Rustwood Red": "w-variant-1c32fe8d-3ed1-8447-a7ac-af0c67c57ff2",
        "Rose Clay": "w-variant-3d7c014e-b599-1bed-e36f-b08944e2791a",
        "Slate Navy": "w-variant-bd0e2718-84b0-337a-1973-f03ea3d8af42",
        "Ocean Teal": "w-variant-293fd546-6b48-6b02-a945-8ba34dd29a32",
        "Warm Sandston Outline": "w-variant-c616048c-98d3-23b9-0c48-859fbbd595b8",
        "Rustwood Red Outline": "w-variant-c41e09ae-0036-41a5-e361-e15c35a98f43",
        "Rose Clay Outline": "w-variant-5a0229ea-6ac7-ada3-1053-85d92cc5888b",
        "Ocean Tea Outline": "w-variant-712f3142-cf3e-dce5-257a-d0b48447fd23",
        "Slate Navy Outline": "w-variant-27b181e2-8ffe-06c3-0497-dd1e9bffc8a7",
        "Ocean Teal Outline": "w-variant-72edd273-7891-7857-18cf-7aeb113f4abc"
    };

    const _activeStyleVariant = _styleVariantMap[colorVariant];

    return visibility ? <_Component
        className={`tag ${_activeStyleVariant}`}
        tag="div"
        id={id}
        {...runtimeProps}>{text}</_Component> : null;
}