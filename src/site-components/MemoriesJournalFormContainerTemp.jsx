"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";

export function MemoriesJournalFormContainerTemp(
    {
        as: _Component = _Builtin.Block
    }
) {
    return (
        <_Component
            className="component_section-guestbook-form component_section-memory-journal-form"
            tag="section"><_Builtin.Block className="memory-journal_form-padding" tag="div"><_Builtin.Block className="memory-journal_inner-form" tag="div"><_Builtin.Block className="memory-journal_component" tag="div"><_Builtin.Block
                            className="memory-jourrnal_form-card"
                            id="w-node-_811078ad-3b42-eac9-1869-3d4efd88ed59-fd88ed55"
                            tag="div"><_Builtin.FormWrapper className="memory-journal_form_component"><_Builtin.FormForm
                                    className="memory-journal_form-wrapper"
                                    name="wf-form-Contact-Form"
                                    data-name="Contact Form"
                                    method="get"
                                    id="wf-form-Contact-Form"><_Builtin.Block className="memory-journal_column-group max-width_800px" tag="div"><_Builtin.Block className="memory-form-columns" tag="div"><_Builtin.Heading className="memory-form-card-heading" tag="h1">{"share a story"}</_Builtin.Heading><_Builtin.Block className="form-inputs_field-groups" tag="div"><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.Block className="text-area_component" tag="div"><_Builtin.HtmlEmbed
                                                            className="hide"
                                                            value="%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E" /><_Builtin.FormTextarea
                                                            className="memory-form_memory-detail is-message-box"
                                                            name="Message"
                                                            maxLength={5000}
                                                            data-name="Message"
                                                            placeholder="Share your thoughts, memories, or well wishes"
                                                            required={false}
                                                            autoFocus={false}
                                                            data-auto-expand="true"
                                                            id="Message" /><_Builtin.FormBlockLabel className="form_label-4" htmlFor="Phone"><_Builtin.Strong className="input_label">{"CHARACTERS0"}</_Builtin.Strong></_Builtin.FormBlockLabel></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Place or Location"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component-4" tag="div"><_Builtin.FormTextInput
                                                            className="memory-form_memory-detail is-icon"
                                                            name="Location"
                                                            maxLength={256}
                                                            data-name="Location"
                                                            placeholder="Boulder, CO"
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false} /><_Builtin.HtmlEmbed
                                                            className="location-icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M15%204V2M15%204V6M15%204H10.5M3%2010V19C3%2020.1046%203.89543%2021%205%2021H19C20.1046%2021%2021%2020.1046%2021%2019V10H3Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2010V6C3%204.89543%203.89543%204%205%204H7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%202V6%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%2010V6C21%204.89543%2020.1046%204%2019%204H18.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"MOnth +Date of Memory"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component-4" tag="div"><_Builtin.FormTextInput
                                                            className="memory-form_memory-detail is-icon"
                                                            name="Location"
                                                            maxLength={256}
                                                            data-name="Location"
                                                            placeholder="June 1990"
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false} /><_Builtin.HtmlEmbed
                                                            className="location-icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                            className="memory-form-columns alignment-adjustment"
                                            id="w-node-_811078ad-3b42-eac9-1869-3d4efd88ed74-fd88ed55"
                                            tag="div"><_Builtin.Block
                                                className="memory-form_input-group"
                                                id="w-node-_811078ad-3b42-eac9-1869-3d4efd88ed75-fd88ed55"
                                                tag="div"><_Builtin.Block className="form_field-wrapper" tag="div" id="First-Name"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"FIrst Name"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.HtmlEmbed
                                                            className="form-field_icon icon-person"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="Name"
                                                            maxLength={256}
                                                            data-name="Name"
                                                            placeholder="Enter your first name"
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false}
                                                            id="Name" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Last Name"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="Name"
                                                            maxLength={256}
                                                            data-name="Name"
                                                            placeholder="Enter your last name"
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false}
                                                            id="Name" /><_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2225px%22%20height%3D%2225px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="form_label input_label" htmlFor="Phone">{"Email * "}<br /><_Builtin.Span className="text-span-23">{"emails will remain private and will not be shared publicly."}</_Builtin.Span></_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%209L12%2012.5L17%209%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M2%2017V7C2%205.89543%202.89543%205%204%205H20C21.1046%205%2022%205.89543%2022%207V17C22%2018.1046%2021.1046%2019%2020%2019H4C2.89543%2019%202%2018.1046%202%2017Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="Email"
                                                            maxLength={256}
                                                            data-name="Email"
                                                            placeholder="Enter your best e-mail..."
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false}
                                                            id="Email" /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                                className="memory-journal_tags-wrapper"
                                                id="w-node-_811078ad-3b42-eac9-1869-3d4efd88ed8b-fd88ed55"
                                                tag="div"><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Optional HasHtag"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="Tag-1"
                                                            maxLength={256}
                                                            data-name="Tag 1"
                                                            placeholder='Use a Hashtag Like "Summertime"'
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id="Tag-1" /><_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div" id="Form-Input"><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="Tag-3"
                                                            maxLength={256}
                                                            data-name="Tag 3"
                                                            placeholder='Use a Hashtag Like "GoodAdvice"'
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id="Tag-3" /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="Tag-1"
                                                            maxLength={256}
                                                            data-name="Tag 1"
                                                            placeholder='Use a Hashtag Like "CampTrips"'
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id="Tag-1" /><_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className="form-inputs_field-groups flex_horizontal max-width_800px margin-inline_auto"
                                        tag="div"><_Builtin.Block className="div-block-68" tag="div"><_Builtin.Heading className="memory-form_content-heading" tag="h1">{"Add content"}</_Builtin.Heading><_Builtin.Paragraph className="memory-form_content-paragraph">{"Bring your memories and stories to life by including a photo or video from the event to help others picture that special moment. You can do this by sharing a link or uploading a photo or video below."}</_Builtin.Paragraph><_Builtin.Block className="form_field-wrapper" tag="div" id="Content-Link-ID"><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                        className="input_field is-content-link"
                                                        name="Content-Link"
                                                        maxLength={256}
                                                        data-name="Content Link"
                                                        placeholder="https://image|video.link"
                                                        disabled={false}
                                                        type="url"
                                                        required={true}
                                                        autoFocus={false} /></_Builtin.Block><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Content LinkS (Videos | Photos)"}</_Builtin.FormBlockLabel></_Builtin.Block></_Builtin.Block><_Builtin.Block className="div-block-66" tag="div"><_Builtin.Block className="form_input-background" tag="div"><_Builtin.Block className="form-input is-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{" Video"}<br />{"Uploads"}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div"><_Builtin.HtmlEmbed
                                                            className="icon-video"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2265px%22%20height%3D%2265px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M9.89768%208.51296C9.49769%208.28439%209%208.57321%209%209.03391V14.9661C9%2015.4268%209.49769%2015.7156%209.89768%2015.487L15.0883%2012.5209C15.4914%2012.2906%2015.4914%2011.7094%2015.0883%2011.4791L9.89768%208.51296Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_input-background" tag="div"><_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{"Photo"}<br />{"Uploads"}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div"><_Builtin.HtmlEmbed
                                                            className="icon-pictures"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2265px%22%20height%3D%2265px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M21%207.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H7.6C7.26863%2021%207%2020.7314%207%2020.4V7.6C7%207.26863%207.26863%207%207.6%207H20.4C20.7314%207%2021%207.26863%2021%207.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%204H4.6C4.26863%204%204%204.26863%204%204.6V18%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%2016.8L12.4444%2015L21%2018%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16.5%2013C15.6716%2013%2015%2012.3284%2015%2011.5C15%2010.6716%2015.6716%2010%2016.5%2010C17.3284%2010%2018%2010.6716%2018%2011.5C18%2012.3284%2017.3284%2013%2016.5%2013Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="button-wrapper max-width_800px" tag="div"><Button buttonButtonText="Submit Your Story" /><_Builtin.Block className="div-block-69" tag="div" /></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage className="form_message-success"><_Builtin.Block tag="div">{"Your shared memory of Patricia is a wonderful addition to our memory journal and wall. Thank you for helping us keep her memory alive by allowing everyone to relive that moment with you."}<br /></_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className="form_message-error"><_Builtin.Block tag="div">{"Oops! Something went wrong. Please try again or check your details and submit again."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}