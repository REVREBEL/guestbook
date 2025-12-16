"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function TimelineForm(
    {
        as: _Component = _Builtin.Block,
        timelineDetailFieldFormInputId = "timeline_detail",
        timelineDetailFieldFormInputVisibility = true,
        timelineDetailFieldFormInputRuntimeProps = {},
        timelineNameLine1FormInputId = "timeline_name_line_1",
        tImelineNameLine2FormInputId = "timeline_name_line_2",
        locationFieldFormInputId = "timeline_location",
        locationFieldFormInputVisibility = true,
        locationFieldIconVisibility = true,
        locationFieldFormInputRuntimeProps = {},
        locationFieldFormSectionSlot,
        timelineDateFieldFormInputId = "timeline_date",
        timelineDateFieldFormInputVisibility = true,
        timelineDateFieldIconVisibility = true,
        timelineDateFieldFormSectionRuntimeProps = {},
        timelineDateFieldFormInputRuntimeProps = {},
        timelineDateFieldFormSectionSlot,
        addContentHeadlineText = "A Story in Images",
        addContentParagraphText = "Help others immerse themselves in each event and key moment in time. Upload up to 2 photos for each milestone on her timeline.",
        timelineNameLine1FormInputVisibility = true,
        tImelineNameLine2FormInputRuntimeProps = {},
        tImelineNameLine2FormInputVisibility = true,
        photo1UploadFIeldIconVisibility = true,
        photo1UploadFIeldImageUploadRuntimeProps = {},
        photo1UploadFIeldImageUploadSlot,
        photo2UploadFIeldIconVisibility = true,
        photo2UploadFIeldImageUploadRuntimeProps = {},
        photo2UploadFIeldImageUploadSlot,
        fullNameFieldFormInputId = "full_name",
        fullNameFieldFormInputVisibility = true,
        fullNameFieldFormInputLabel = "full_name",
        emailFieldFormInputId = "email",
        emailFieldFormInputVisibility = true,
        emailFieldIconVisibility = true,
        emailFieldFormInputDisclaimer = "",
        emailFieldFormInputRuntimeProps = {},
        emailFieldFormSectionRuntimeProps = {},
        emailFieldFormSectionSlot,
        collectionIdFieldFormInputId = "collection_id",
        collectionIdFieldCollectionIdVariable = "{{timeline-collection-id}}",
        collectionIdFieldFormSectionRuntimeProps = {},
        fullNameFieldFormInputRuntimeProps = {},
        submitButtonSubmitButtonId = "submit-button",
        submitButtonSubmitButtonVisibility = true,
        submitButtonSubmitButtonColorVariant = null,
        submitButtonSubmitButtonText = "Share Your Story",
        submitButtonUserLoadingText = "Writing your narrative now....",
        submitButtonSubmitButtonInnerRuntimeProps = {},
        submitButtonSubmitButtonOuterRuntimeProps = {},
        submitButtonSubmitButtonSlot,
        timelineNameLine1FormInputRuntimeProps = {}
    }
) {
    return (
        <_Component className="component_section-timeline_form" tag="section"><_Builtin.Block className="timeline_form-padding" tag="div"><_Builtin.Block className="timeline_form_inner-form" tag="div"><_Builtin.Block className="timeline_form_component" tag="div"><_Builtin.Block
                            className="timeline_form-card"
                            id="w-node-df77b4d3-339b-ce01-8ef0-7023c33009ae-c33009aa"
                            tag="div"><_Builtin.Block className="form-headline_wrapper" tag="div"><_Builtin.HtmlEmbed
                                    className="icon-close on-click_close-wrapper"
                                    value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2234px%22%20height%3D%2234px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%23currentColor%22%3E%3Cpath%20d%3D%22M9.87871%2014.1213L12%2012M14.1213%209.87868L12%2012M12%2012L9.87871%209.87868M12%2012L14.1213%2014.1213%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block><_Builtin.FormWrapper className="timeline_form_componentt"><_Builtin.FormForm
                                    className="timeline_form-wrapper"
                                    name="wf-form-Add-a-Milestone"
                                    data-name="Add a Milestone"
                                    action="/guestbook-form/api/timeline/submit"
                                    method="post"
                                    id="wf-form-Add-a-Milestone"><_Builtin.Block className="timeline_form_column-group max-width_800px" tag="div"><_Builtin.Block className="timeline_form-column" tag="div"><_Builtin.Heading className="timeline_form-card-heading" tag="h1">{"add a "}<_Builtin.Span className="italic">{"m"}</_Builtin.Span>{"ilestone"}<br /><_Builtin.Span className="text-size_2rem is-right">{"to her story +timeline"}</_Builtin.Span></_Builtin.Heading>{timelineDateFieldFormInputVisibility ? <_Builtin.Block className="form_field-wrapper margin-top_20pct" tag="div">{timelineDetailFieldFormInputVisibility ? <_Builtin.Block className="text-area_component margin-top_none" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Main Headline Description"}</_Builtin.FormBlockLabel><_Builtin.FormTextarea
                                                        className="timeline-form_message-input is-message-box"
                                                        name="timeline_detail"
                                                        maxLength={5000}
                                                        data-name="timeline_detail"
                                                        placeholder="Share details about the event, its location, and what made it unique."
                                                        required={true}
                                                        autoFocus={false}
                                                        data-auto-expand="true"
                                                        id={timelineDetailFieldFormInputId}
                                                        {...timelineDetailFieldFormInputRuntimeProps} /><_Builtin.HtmlEmbed
                                                        className="hide"
                                                        data-auto-expand="true"
                                                        value="%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E" /></_Builtin.Block> : null}</_Builtin.Block> : null}</_Builtin.Block><_Builtin.Block
                                            className="timeline_form-columns"
                                            id="w-node-df77b4d3-339b-ce01-8ef0-7023c33009cb-c33009aa"
                                            tag="div"><_Builtin.Block className="form-inputs_field-groups" tag="div">{timelineNameLine1FormInputVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Sub-Headline Description"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field"
                                                            name="timeline_name_line_1"
                                                            maxLength={256}
                                                            data-name="timeline_name_line_1"
                                                            placeholder="Summertime"
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false}
                                                            id={timelineNameLine1FormInputId}
                                                            {...timelineNameLine1FormInputRuntimeProps} /></_Builtin.Block></_Builtin.Block> : null}{tImelineNameLine2FormInputVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Main Headline Description"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field"
                                                            name="timeline_name_line_2"
                                                            maxLength={256}
                                                            data-name="timeline_name_line_2"
                                                            placeholder="Family Camp Trips"
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false}
                                                            id={tImelineNameLine2FormInputId}
                                                            {...tImelineNameLine2FormInputRuntimeProps} /></_Builtin.Block></_Builtin.Block> : null}{locationFieldFormInputVisibility ? <_Builtin.Block
                                                    className="form_field-wrapper"
                                                    tag="div"
                                                    {...locationFieldFormInputRuntimeProps}>{locationFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Milestone Place or Location"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                                className="input_field is-icon"
                                                                name="timeline_location"
                                                                maxLength={256}
                                                                data-name="timeline_location"
                                                                placeholder="Boulder, CO"
                                                                disabled={false}
                                                                type="text"
                                                                required={false}
                                                                autoFocus={false}
                                                                id={locationFieldFormInputId}
                                                                {...locationFieldFormInputRuntimeProps} />{locationFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                                className="location-icon"
                                                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></>}</_Builtin.Block> : null}<_Builtin.Block
                                                    className="form_field-wrapper"
                                                    tag="div"
                                                    {...timelineDateFieldFormSectionRuntimeProps}>{timelineDateFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Milestone Month + Date "}<br /><_Builtin.Span className="text-span-24">{"(SUPPORTS a specific date ALSO) "}</_Builtin.Span></_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                                className="input_field is-icon"
                                                                name="timeline_date"
                                                                maxLength={256}
                                                                data-name="timeline_date"
                                                                placeholder="June 1990 or June 1, 1990"
                                                                disabled={false}
                                                                type="text"
                                                                required={false}
                                                                autoFocus={false}
                                                                id={timelineDateFieldFormInputId}
                                                                {...timelineDateFieldFormInputRuntimeProps} />{timelineDateFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                                className="calendar-icon"
                                                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M15%204V2M15%204V6M15%204H10.5M3%2010V19C3%2020.1046%203.89543%2021%205%2021H19C20.1046%2021%2021%2020.1046%2021%2019V10H3Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2010V6C3%204.89543%203.89543%204%205%204H7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%202V6%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%2010V6C21%204.89543%2020.1046%204%2019%204H18.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></>}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className="form-inputs_field-groups flex_horizontal max-width_800px margin-block_xs"
                                        tag="div"><_Builtin.Block className="div-block-68" tag="div"><_Builtin.Block className="form_field-wrapper" tag="div" id="Content-Link-ID"><_Builtin.Heading className="timeline-form_content-heading-copy" tag="h1">{addContentHeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="timeline-form_content-paragraph">{addContentParagraphText}</_Builtin.Paragraph></_Builtin.Block></_Builtin.Block><_Builtin.Block className="div-block-66" tag="div"><_Builtin.Block className="form_input-background is-timeline" tag="div"><_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.HtmlEmbed
                                                        className="code-embed_upload"
                                                        value="%3Cdiv%20data-timeline-image-upload%3D%22photo1%22%20%0A%20%20%20%20%20data-upload-label%3D%22Photo%201%22%0A%20%20%20%20%20data-max-size-mb%3D%2210%22%3E%0A%3C%2Fdiv%3E" /></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                                className="form_input-background is-timeline"
                                                tag="div"
                                                {...photo2UploadFIeldImageUploadRuntimeProps}>{photo2UploadFIeldImageUploadSlot ?? <_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.HtmlEmbed
                                                        className="code-embed_upload"
                                                        value="%3Cdiv%20data-timeline-image-upload%3D%22photo2%22%20%0A%20%20%20%20%20data-upload-label%3D%22Photo%202%22%0A%20%20%20%20%20data-max-size-mb%3D%2210%22%3E%0A%3C%2Fdiv%3E" /></_Builtin.Block>}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className="memory-form_input-group"
                                        id="w-node-df77b4d3-339b-ce01-8ef0-7023c33009cc-c33009aa"
                                        tag="div"><_Builtin.Block className="timeline-form_name-group margin-top_xxsmall" tag="div">{fullNameFieldFormInputVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label is-height_25px" htmlFor="Phone">{fullNameFieldFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.HtmlEmbed
                                                        className="form-field_icon icon-person"
                                                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /><_Builtin.FormTextInput
                                                        className="input_field is-icon"
                                                        name="full_name"
                                                        maxLength={256}
                                                        data-name="full_name"
                                                        placeholder="Enter your full name"
                                                        disabled={false}
                                                        type="text"
                                                        required={true}
                                                        autoFocus={false}
                                                        collection-id={collectionIdFieldCollectionIdVariable}
                                                        id={fullNameFieldFormInputId}
                                                        {...fullNameFieldFormInputRuntimeProps} /></_Builtin.Block></_Builtin.Block> : null}{emailFieldFormInputVisibility ? <_Builtin.Block
                                                className="form_field-wrapper is-half"
                                                tag="div"
                                                {...emailFieldFormSectionRuntimeProps}>{emailFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel
                                                        className="form_label input_label margin-bottom_none is-height_25px"
                                                        htmlFor="Phone">{"Email *"}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div">{emailFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="form-field_icon icon-email"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%209L12%2012.5L17%209%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M2%2017V7C2%205.89543%202.89543%205%204%205H20C21.1046%205%2022%205.89543%2022%207V17C22%2018.1046%2021.1046%2019%2020%2019H4C2.89543%2019%202%2018.1046%202%2017Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="email"
                                                            maxLength={256}
                                                            data-name="email"
                                                            placeholder="Enter your best e-mail..."
                                                            disabled={false}
                                                            type="email"
                                                            required={true}
                                                            autoFocus={false}
                                                            id={emailFieldFormInputId}
                                                            {...emailFieldFormInputRuntimeProps} /></_Builtin.Block><_Builtin.FormBlockLabel className="form_label input_label is-disclaimer" htmlFor="Phone">{emailFieldFormInputDisclaimer}</_Builtin.FormBlockLabel></>}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="button-wrapper max-width_800px" tag="div">{submitButtonSubmitButtonVisibility ? <_Builtin.Block
                                            className="button is-accent-tertiary hero_button"
                                            tag="div"
                                            id={submitButtonSubmitButtonId}
                                            {...submitButtonSubmitButtonOuterRuntimeProps}>{submitButtonSubmitButtonSlot ?? <_Builtin.FormButton
                                                className="button_label"
                                                type="submit"
                                                value={submitButtonSubmitButtonText}
                                                data-wait={submitButtonUserLoadingText}
                                                {...submitButtonSubmitButtonInnerRuntimeProps} />}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage className="form_message-success"><_Builtin.Block tag="div">{"Your shared memory of Patricia is a wonderful addition to our memory journal and wall. Thank you for helping us keep her memory alive by allowing everyone to relive that moment with you."}<br /></_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className="form_message-error"><_Builtin.Block className="text-block-16" tag="div">{"Oops! Something went wrong. Please try again or check your details and submit again."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component>
    );
}