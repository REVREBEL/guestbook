"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookFormButton(
    {
        as: _Component = _Builtin.Block,
        buttonVisibility = true,
        buttonId,
        buttonButtonIconVisibility = true,
        buttonLabelText = "Sign the Guestbook",
        buttonLoadingMessage = "Signing the Guestbook.....",
        buttonRuntimeProps = {},
        buttonSlot
    }
) {
    return buttonVisibility ? <_Component
        className="button is-accent-tertiary flex-align-right"
        tag="div"
        id={buttonId}
        {...buttonRuntimeProps}>{buttonSlot ?? <_Builtin.Block className="tag" tag="div">{buttonButtonIconVisibility ? <_Builtin.HtmlEmbed
                className="button_icon is-secondary"
                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2247px%22%20height%3D%2247px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M12%2021V7C12%205.89543%2012.8954%205%2014%205H21.4C21.7314%205%2022%205.26863%2022%205.6V18.7143%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2021V7C12%205.89543%2011.1046%205%2010%205H2.6C2.26863%205%202%205.26863%202%205.6V18.7143%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M14%2019L22%2019%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M10%2019L2%2019%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2021C12%2019.8954%2012.8954%2019%2014%2019%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2021C12%2019.8954%2011.1046%2019%2010%2019%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.FormButton
                className="button_label is-secondary is-icon"
                type="submit"
                value={buttonLabelText}
                data-wait={buttonLoadingMessage} /></_Builtin.Block>}</_Component> : null;
}