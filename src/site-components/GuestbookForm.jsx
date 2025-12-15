"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GuestbookForm(
    {
        as: _Component = _Builtin.Block,
        fullNameFormInputId = "full_name",
        fullNameFormInputVisibility = true,
        fullNameFormIconVisibility = true,
        fullNameFormInputLabel = "Your Name *",
        locationFieldFormInputId = "guestbook_location",
        locationFieldFormInputVisibility = true,
        locationFieldFormIconVisibility = true,
        locationFieldFormInputLabel = "",
        locationFieldFormInputRuntimeProps = {},
        firstMetFieldFormFieldId = "guestbook_first_met",
        firstMetFieldFormFieldVisibility = true,
        firstMetFieldFormIconVisibility = true,
        firstMetFieldFormFieldLabel = "",
        firstMetFieldFormInputRuntimeProps = {},
        relationshipFieldFormInputId = "guestbook_relationship",
        relationshipFieldFormFieldVisibility = true,
        relationshipFieldFormFieldLabel = "",
        relationshipFieldPlaceholderText = "How do you know her?",

        relationshipFieldInputFieldLink = {
            href: "#",
            preload: "none"
        },

        relationshipFieldInputFieldRuntimeProps = {},
        relationshipFieldInputFieldSlot,
        relationshipFieldRuntimePropsList = {},
        relationshipFieldRuntimePropsListLink = {},
        relationshipFieldSelectInputDropdownRuntimeProps = {},
        messageFieldFormInputId = "guestbook_message",
        messageFieldFormFieldVisibility = true,
        messageFieldFormFieldLabel = "",
        messageFieldInputFieldRuntimeProps = {},
        messageFieldCharactersVisibility = true,
        messageFieldCharacterLabel = "",
        messageFieldCharactersRuntimeProps = {},
        messageFieldCharactersSlot,
        emailFieldFormInputId = "email",
        emailFieldFormFieldVisibility = true,
        emailFieldFormFieldLabel = "Email*",
        emailFieldBottomDisclaimerLabel = "",
        emailFieldDisclaimerVisibility = true,
        emailFieldFormIconVisibility = true,
        emailFieldFormInputRuntimeProps = {},
        buttonVisibility = true,
        buttonId,
        buttonButtonIconVisibility = true,
        buttonLabelText = "Sign the Guestbook",
        buttonLoadingMessage = "Signing the Guestbook.....",
        buttonRuntimeProps = {},
        buttonSlot,
        userMessagesSuccessMessageText = "Thank you for signing the Guestbook. It will be displayed shortly, and we appreciate you being part of her tribute.",
        userMessagesErrorMessageText = "Oops! Something went wrong. Please try again or check your details and submit again.",
        componentId,
        componentVisibility = true,
        formComponentRuntimeProps = {},
        buttonSubmitButtonVisibility = true,
        buttonSubmitButtonId = "submit-button",
        guestbookCollectionIdCollectionIdVariable = "{{GUESTBOOK_COLLECTION_ID}}",
        guestbookCollectionIdFormInputId = "collection_id",
        relationshipFieldRuntimeProps = {},
        relationshipFieldSelectDropdownSlot
    }
) {
    return componentVisibility ? <_Component
        className="component_section-guestbook-form"
        tag="section"
        id={componentId}><_Builtin.Block className="guestbook_form-padding" tag="div"><_Builtin.Block className="guestbook_inner-form-container" tag="div"><_Builtin.Block className="guestbook_component" tag="div"><_Builtin.Block
                        className="guestbook_form-card"
                        id="w-node-_3065a81f-17d8-4664-b498-e76322a00682-22a0067e"
                        tag="div"><_Builtin.Block className="form-headline_wrapper" tag="div"><_Builtin.Heading className="heading_h3" tag="h1">{"sign the guestbook"}</_Builtin.Heading><_Builtin.HtmlEmbed
                                className="icon-close on-click_close-wrapper"
                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2234px%22%20height%3D%2234px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%23currentColor%22%3E%3Cpath%20d%3D%22M9.87871%2014.1213L12%2012M14.1213%209.87868L12%2012M12%2012L9.87871%209.87868M12%2012L14.1213%2014.1213%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block><_Builtin.FormWrapper className="form_component" {...formComponentRuntimeProps}><_Builtin.FormForm
                                className="form_form"
                                name="wf-form-Guestbook-Form"
                                data-name="Guestbook Form"
                                redirect="/guestbook"
                                data-redirect="/guestbook"
                                action="/guestbook-form/api/guestbook/submit"
                                method="post"
                                id="wf-form-Guestbook-Form">{fullNameFormInputVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{fullNameFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                            className="input_field is-icon"
                                            name="full_name"
                                            maxLength={256}
                                            data-name="full_name"
                                            placeholder="Enter your full name..."
                                            disabled={false}
                                            type="text"
                                            required={true}
                                            autoFocus={false}
                                            id={fullNameFormInputId} />{fullNameFormIconVisibility ? <_Builtin.HtmlEmbed
                                            className="form-field_icon"
                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block className="guesbook_form-input-group" tag="div">{locationFieldFormInputVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone"><_Builtin.Strong className="input_label">{"Location *"}</_Builtin.Strong></_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                className="input_field is-icon"
                                                name="guestbook_location"
                                                maxLength={256}
                                                data-name="guestbook_location"
                                                placeholder="Boulder, CO"
                                                disabled={false}
                                                type="text"
                                                required={true}
                                                autoFocus={false}
                                                id={locationFieldFormInputId}
                                                {...locationFieldFormInputRuntimeProps} />{locationFieldFormIconVisibility ? <_Builtin.HtmlEmbed
                                                className="form-field_icon"
                                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22%20currentColor%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block> : null}{firstMetFieldFormFieldVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone"><_Builtin.Strong className="input_label">{"Where did you first meet? (optional)"}</_Builtin.Strong></_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                className="input_field is-icon"
                                                name="guestbook_first_met"
                                                maxLength={256}
                                                data-name="guestbook_first_met"
                                                placeholder="School, Work Event, Mutual Friend"
                                                disabled={false}
                                                type="text"
                                                required={false}
                                                autoFocus={false}
                                                id={firstMetFieldFormFieldId}
                                                {...firstMetFieldFormInputRuntimeProps} />{firstMetFieldFormIconVisibility ? <_Builtin.HtmlEmbed
                                                className="form-field_icon"
                                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%203%2022)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%208.5%207)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Crect%20width%3D%227%22%20height%3D%225%22%20rx%3D%220.6%22%20transform%3D%22matrix(1%200%200%20-1%2014%2022)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-width%3D%221.5%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M6.5%2017V13.5C6.5%2012.3954%207.39543%2011.5%208.5%2011.5H15.5C16.6046%2011.5%2017.5%2012.3954%2017.5%2013.5V17%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011.5V7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block><_Builtin.Block className="guesbook_form-input-group" tag="div">{emailFieldFormFieldVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div" id="email"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{emailFieldFormFieldLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div">{emailFieldFormIconVisibility ? <_Builtin.HtmlEmbed
                                                className="form-field_icon"
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
                                                {...emailFieldFormInputRuntimeProps} /></_Builtin.Block><_Builtin.Block className="input_label is-disclaimer" tag="div">{"Your email won't be displayed publicly"}</_Builtin.Block></_Builtin.Block> : null}{relationshipFieldFormFieldVisibility ? <_Builtin.Block
                                        className="form_field-wrapper"
                                        tag="div"
                                        id={relationshipFieldFormInputId}><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Your RElationship to her"}</_Builtin.FormBlockLabel><_Builtin.Block
                                            className="input_field"
                                            id="w-node-_5b25a104-6c9e-8529-2cbe-5cf0b93a5254-22a0067e"
                                            tag="div"><_Builtin.FormSelect
                                                className="select-input_field"
                                                name="Select-Field"
                                                data-name="Select Field"
                                                required={false}
                                                multiple={false}
                                                options={[{
                                                    t: "Select one...",
                                                    v: ""
                                                }, {
                                                    t: "Family",
                                                    v: "Family"
                                                }, {
                                                    t: "Relative",
                                                    v: "Relative"
                                                }, {
                                                    t: "Co-Worker",
                                                    v: "Co-Worker"
                                                }, {
                                                    t: "Church Friend",
                                                    v: "Church Friend"
                                                }, {
                                                    t: "Other",
                                                    v: "Fith"
                                                }, {
                                                    t: "Never Met",
                                                    v: "Never Met"
                                                }]} /></_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block>{messageFieldFormFieldVisibility ? <_Builtin.Block className="form_field-wrapper" tag="div" id="message"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{messageFieldFormFieldLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="text-area_component margin-top_none" tag="div"><_Builtin.HtmlEmbed
                                            className="hide"
                                            value="%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E" /><_Builtin.FormTextarea
                                            className="input_field"
                                            name="guestbook_message"
                                            maxLength={5000}
                                            data-name="guestbook_message"
                                            placeholder="Share your thoughts, memories, or well wishes"
                                            required={true}
                                            autoFocus={false}
                                            data-auto-expand="true"
                                            id={messageFieldFormInputId}
                                            {...messageFieldInputFieldRuntimeProps} />{messageFieldCharactersVisibility ? <_Builtin.FormBlockLabel
                                            className="input_label margin-top_5pct"
                                            htmlFor="Phone"
                                            id="guestbook_characters"
                                            {...messageFieldCharactersRuntimeProps}>{messageFieldCharactersSlot ?? messageFieldCharacterLabel}</_Builtin.FormBlockLabel> : null}</_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block className="button-wrapper max-width_800px" tag="div">{buttonSubmitButtonVisibility ? <_Builtin.Block
                                        className="button-13 is-accent-tertiary hero_button"
                                        tag="div"
                                        id={buttonSubmitButtonId}><_Builtin.FormButton
                                            className="button_label"
                                            type="submit"
                                            value="Sign the Guestbook"
                                            data-wait={buttonLoadingMessage} /></_Builtin.Block> : null}<_Builtin.FormTextInput
                                        className="input_field is-hidden"
                                        name="collection_id"
                                        maxLength={256}
                                        data-name="collection_id"
                                        placeholder="Guestbook CMS Collection ID"
                                        disabled={false}
                                        type="text"
                                        required={false}
                                        autoFocus={false}
                                        data-var-guestbook-collection-id={guestbookCollectionIdCollectionIdVariable}
                                        id={guestbookCollectionIdFormInputId} /></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage className="form_message-success"><_Builtin.Block tag="div">{userMessagesSuccessMessageText}</_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className="form_message-error"><_Builtin.Block tag="div">{userMessagesErrorMessageText}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}