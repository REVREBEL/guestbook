"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FilterPreviousNextSlots(
    {
        as: _Component = _Builtin.Block,
        viewMoreSlotVisibility = true,
        viewMoreViewMoreSlot,
        viewMoreRuntimeProps = {},
        nextSlotVisibility = true,
        nextNextSlot,
        nextRuntimeProps = {},
        previousSlotVisibility = true,
        previousPreviousSlot,
        previousRuntimeProps = {}
    }
) {
    return (
        <_Component className="component_filter-tags" tag="div"><_Builtin.Block
                className="flex_horizontal width_100percent flex-align_center gap-xsmall padding-inline_mediumn"
                tag="div">{viewMoreSlotVisibility ? <_Builtin.Block tag="div" {...viewMoreRuntimeProps}>{viewMoreViewMoreSlot}</_Builtin.Block> : null}{previousSlotVisibility ? <_Builtin.Block tag="div" {...previousRuntimeProps}>{previousPreviousSlot}</_Builtin.Block> : null}{nextSlotVisibility ? <_Builtin.Block tag="div" {...nextRuntimeProps}>{nextNextSlot}</_Builtin.Block> : null}</_Builtin.Block></_Component>
    );
}