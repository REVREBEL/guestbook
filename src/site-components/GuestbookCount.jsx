"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookCount(
    {
        as: _Component = _Builtin.Block,
        guestbookCountText = "0",
        visibility = true,
        description = "Family, friends, and loved ones have already signed the guestbook. Join them by adding your own message.",
        countSlot,
        countRuntimeProps = {}
    }
) {
    return (
        <_Component className="guestbook_count-container" tag="div" {...countRuntimeProps}>{countSlot ?? <><_Builtin.HtmlEmbed
                    className="code-embed-hidden"
                    value="%3Cscript%20src%3D%22%2Fguestbook-form%2Fguestbook-count-embed.js%22%3E%3C%2Fscript%3E" /><_Builtin.Block
                    className="guestbook_count-wrapper"
                    id="w-node-d5060127-3298-5396-645e-d9e062c4df12-728a209f"
                    tag="div"
                    {...countRuntimeProps}>{countSlot ?? <>{visibility ? <_Builtin.Block
                            className="number-accent guestbook_count w-node-d3e658c3-2779-15e0-efb0-7233728a20a0-728a209f"
                            id="guestbook-count"
                            tag="div"
                            data-count-target=""
                            {...countRuntimeProps}>{countSlot ?? guestbookCountText}</_Builtin.Block> : null}<_Builtin.Block
                            className="paragraph"
                            id="w-node-d3e658c3-2779-15e0-efb0-7233728a20a2-728a209f"
                            tag="div">{description}</_Builtin.Block></>}</_Builtin.Block></>}</_Component>
    );
}