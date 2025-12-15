"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function MemoryForm(
    {
        as: _Component = _Builtin.Block,
        formComponentFornVisibility = true,
        formComponentMemoryJournalComponentId,
        addContentHeadlineText = "Add content",
        addContentParagraphText = "Bring your memories and stories to life by including a photo or video from the event to help others picture that special moment. You can do this by sharing a link or uploading a photo or video below.",
        memoryNameFieldFormInputId = "memory_name",
        memoryNameFieldFormInputLabel = "Memory Name + Description",
        memoryNameFieldFormInputRuntimeProps = {},
        memoryDetailFieldFormInputId = "memory_detail",
        memoryDetailFieldFormSectionRuntimeProps = {},
        memoryDetailFieldFormInputRuntimeProps = {},
        firstNameFieldFormInputId = "first_name",
        firstNameFieldFormInputVisibility = true,
        firstNameFieldIconVisibility = true,
        firstNameFieldFormInputLabel = "First Name",
        firstNameFieldFormSectionRuntimeProps = {},
        firstNameFieldFormInputRuntimeProps = {},
        lastNameFieldFormInputId = "last_name",
        lastNameFieldFormInputVisibility = true,
        lastNameFieldFormInputLabel = "Last Name",
        lastNameFieldFormSectionRuntimeProps = {},
        lastNameFieldFormInputRuntimeProps = {},
        emailFormFieldFormInputId = "email",
        emailFormFieldFormInputVisibility = true,
        emailFormFieldIconVisibility = true,
        memoryLocationFieldFormInputId = "memory_location",
        memoryLocationFieldFormInputVisibility = true,
        memoryLocationFieldIconVisibility = true,
        memoryDateFieldFormInputId = "memory_date",
        memoryDateFieldFormInputVisibility = true,
        memoryDateFieldIconVisibility = true,
        memoryDateFieldFormInputLabel = "Month + Date of Memory",
        memoryDateFieldFormSectionRuntimeProps = {},
        firstNameFieldFormSectionSlot,
        contentLinkFieldFormInputId = "content_link",
        contentLinkFieldFormSectionVisibility = true,
        contentLinkFieldFormSectionProps = {},
        contentLinkFieldFormInputRuntimeProps = {},
        imageUploadFieldIconVisibility = true,
        imageUploadFieldImageUploadRuntimeProps = {},
        imageUploadFieldImageUploadSlot,
        videoUploadFieldIconVisibility = true,
        videoUploadFieldVideoUploadRuntimeProps = {},
        videoUploadFieldVideoUploadSlot,
        tagsGroupTagsGroupVisibility = true,
        tagsGroupFormInputLabel = "Optional HasHtag",
        tagsGroupFormSectionRuntimeProps = {},
        tagsGroupFormSectionSlot,
        memoryDateFieldFormInputRuntimeProps = {},
        memoryDateFieldFormSectionSlot,
        collectionIdFieldFormSectionRuntimeProps = {},
        lastNameFieldFormSectionSlot,
        emailFormFieldFormInputDisclaimer = "",
        emailFormFieldFormInputRuntimeProps = {},
        emailFormFieldFormSectionRuntimeProps = {},
        emailFormFieldFormSectionSlot,
        memoryLocationFieldFormInputLabel = "Place or Location",
        memoryLocationFieldFormSectionRuntimeProps = {},
        memoryLocationFieldFormInputRuntimeProps = {},
        memoryLocationFieldFormSectionSlot,
        tag1FieldFormInputId = "memory_tag_1",
        tag1FieldIconVisibility = true,
        tag2FieldFormInputId = "memory_tag_2",
        tag2FieldIconVisibility = true,
        tag3FieldFormInputId = "memory_tag_3",
        tag3FieldIconVisibility = true,
        tag1FieldFormInputRuntimeProps = {},
        tag3FieldFormInputRuntimeProps = {},
        submitButtonSubmitButtonId = "submit-button",
        submitButtonSubmitButtonVisibility = true,
        submitButtonSubmitButtonColorVariant = null,
        contentLinkFieldFormSectionSlot,
        submitButtonSubmitButtonText = "Share Your Story",
        submitButtonUserLoadingText = "Writing your narrative now....",
        submitButtonSubmitButtonInnerRuntimeProps = {},
        submitButtonSubmitButtonOuterRuntimeProps = {},
        submitButtonSubmitButtonSlot,
        tag2FieldFormInputRuntimeProps = {},
        collectionIdFieldCollectionIdVariable = "MEMORY_COLLECTION_ID",
        testFieldTestVariable = "TEST_ID"
    }
) {
    return formComponentFornVisibility ? <_Component
        className="component_section-memory-journal-form"
        tag="section"
        id={formComponentMemoryJournalComponentId}><_Builtin.Block className="memory-journal_form-padding" tag="div"><_Builtin.Block className="memory-journal_inner-form" tag="div"><_Builtin.Block className="memory-journal_component" tag="div"><_Builtin.Block
                        className="memory-jourrnal_form-card"
                        id="w-node-_8370e215-8f01-80b6-7142-22700c60bf62-0c60bf5e"
                        tag="div"><_Builtin.FormWrapper className="memory-journal_form_component"><_Builtin.FormForm
                                className="memory-journal_form-wrapper"
                                name="wf-form-Share-Your-Memory"
                                data-name="Share Your Memory"
                                action="/memory-form/api/memory"
                                method="post"
                                id="wf-form-Share-Your-Memory"><_Builtin.Block className="memory-journal_column-group max-width_800px" tag="div"><_Builtin.Block className="memory-form-columns" tag="div"><_Builtin.Heading className="memory-form-card-heading" tag="h1">{"share a story"}</_Builtin.Heading><_Builtin.Block className="form-inputs_field-groups" tag="div"><_Builtin.Block className="memory-form_memory-detail-group margin-top_20pct" tag="div"><_Builtin.Block
                                                    className="form_field-wrapper"
                                                    tag="div"
                                                    {...memoryLocationFieldFormSectionRuntimeProps}>{memoryLocationFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{memoryNameFieldFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                                className="input_field"
                                                                name="memory_name"
                                                                maxLength={256}
                                                                data-name="memory_name"
                                                                placeholder="Summers at Baseline Lake"
                                                                disabled={false}
                                                                type="text"
                                                                required={true}
                                                                autoFocus={false}
                                                                id={memoryNameFieldFormInputId}
                                                                {...memoryNameFieldFormInputRuntimeProps} /></_Builtin.Block></>}</_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.Block
                                                        className="text-area_component"
                                                        tag="div"
                                                        {...memoryDetailFieldFormSectionRuntimeProps}><_Builtin.HtmlEmbed
                                                            className="hide"
                                                            value="%3Cscript%3E%0A%20%20%2F%2F%20Function%20to%20auto-expand%20the%20textarea%0A%20%20function%20autoExpandTextarea(textarea)%20%7B%0A%20%20%20%20textarea.style.height%20%3D%20'auto'%3B%20%2F%2F%20Reset%20the%20height%0A%20%20%20%20textarea.style.height%20%3D%20textarea.scrollHeight%20%2B%20'px'%3B%20%2F%2F%20Set%20the%20height%20to%20match%20the%20content%0A%20%20%7D%0A%0A%20%20%2F%2F%20Find%20all%20textareas%20with%20the%20custom%20data%20attribute%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20function()%20%7B%0A%20%20%20%20const%20textareas%20%3D%20document.querySelectorAll('%5Bdata-auto-expand%3D%22true%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%20Loop%20through%20all%20matching%20textareas%20and%20add%20the%20event%20listener%0A%20%20%20%20textareas.forEach(textarea%20%3D%3E%20%7B%0A%20%20%20%20%20%20textarea.addEventListener('input'%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%2C%20trigger%20the%20function%20on%20page%20load%20to%20adjust%20height%20if%20there's%20pre-filled%20content%0A%20%20%20%20%20%20autoExpandTextarea(textarea)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E" /><_Builtin.FormTextarea
                                                            className="memory-form_memory-detail is-message-box"
                                                            name="memory_detail"
                                                            maxLength={5000}
                                                            data-name="memory_detail"
                                                            placeholder="Share your thoughts, memories, or well wishes"
                                                            required={true}
                                                            autoFocus={false}
                                                            data-auto-expand="true"
                                                            id={memoryDetailFieldFormInputId}
                                                            {...memoryDetailFieldFormInputRuntimeProps} /><_Builtin.FormBlockLabel className="message-input_characters_count" htmlFor="Phone"><_Builtin.Strong className="input_label margin-top_5pct">{"CHARACTERS0"}</_Builtin.Strong></_Builtin.FormBlockLabel></_Builtin.Block></_Builtin.Block></_Builtin.Block>{memoryLocationFieldFormInputVisibility ? <_Builtin.Block
                                                className="form_field-wrapper"
                                                tag="div"
                                                {...memoryLocationFieldFormSectionRuntimeProps}>{memoryLocationFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{memoryLocationFieldFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component-4" tag="div"><_Builtin.FormTextInput
                                                            className="memory-form_memory-detail is-icon"
                                                            name="memory_location"
                                                            maxLength={256}
                                                            data-name="memory_location"
                                                            placeholder="Boulder, CO"
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id={memoryLocationFieldFormInputId}
                                                            {...memoryLocationFieldFormInputRuntimeProps} />{memoryLocationFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="location-icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></>}</_Builtin.Block> : null}{memoryDateFieldFormInputVisibility ? <_Builtin.Block
                                                className="form_field-wrapper"
                                                tag="div"
                                                {...memoryDateFieldFormSectionRuntimeProps}>{memoryDateFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{memoryDateFieldFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="memory-form_memory-detail is-icon"
                                                            name="memory_date"
                                                            maxLength={256}
                                                            data-name="memory_date"
                                                            placeholder="June 1990"
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id={memoryDateFieldFormInputId}
                                                            {...memoryDateFieldFormInputRuntimeProps} />{memoryDateFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="calendar-icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M15%204V2M15%204V6M15%204H10.5M3%2010V19C3%2020.1046%203.89543%2021%205%2021H19C20.1046%2021%2021%2020.1046%2021%2019V10H3Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2010V6C3%204.89543%203.89543%204%205%204H7%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M7%202V6%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%2010V6C21%204.89543%2020.1046%204%2019%204H18.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></>}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                        className="memory-form-columns alignment-adjustment"
                                        id="w-node-_8370e215-8f01-80b6-7142-22700c60bf7d-0c60bf5e"
                                        tag="div"><_Builtin.Block
                                            className="memory-form_input-group"
                                            id="w-node-_8370e215-8f01-80b6-7142-22700c60bf7e-0c60bf5e"
                                            tag="div"><_Builtin.Block className="memory-form_name-group" tag="div">{firstNameFieldFormInputVisibility ? <_Builtin.Block
                                                    className="form_field-wrapper"
                                                    tag="div"
                                                    {...firstNameFieldFormSectionRuntimeProps}>{firstNameFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{firstNameFieldFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div">{firstNameFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                                className="form-field_icon icon-person"
                                                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.FormTextInput
                                                                className="input_field is-icon"
                                                                name="first_name"
                                                                maxLength={256}
                                                                data-name="first_name"
                                                                placeholder="Enter your first name"
                                                                disabled={false}
                                                                type="text"
                                                                required={true}
                                                                autoFocus={false}
                                                                collection-id="MEMORY_COLLECTION_ID"
                                                                id={firstNameFieldFormInputId}
                                                                {...firstNameFieldFormInputRuntimeProps} /></_Builtin.Block></>}</_Builtin.Block> : null}{lastNameFieldFormInputVisibility ? <_Builtin.Block
                                                    className="form_field-wrapper"
                                                    tag="div"
                                                    {...lastNameFieldFormSectionRuntimeProps}>{lastNameFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{lastNameFieldFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                                className="input_field is-icon"
                                                                name="last_name"
                                                                maxLength={256}
                                                                data-name="last_name"
                                                                placeholder="Enter your last name"
                                                                disabled={false}
                                                                type="text"
                                                                required={true}
                                                                autoFocus={false}
                                                                id={lastNameFieldFormInputId}
                                                                {...lastNameFieldFormInputRuntimeProps} /><_Builtin.HtmlEmbed
                                                                className="form-field_icon icon-person"
                                                                value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2225px%22%20height%3D%2225px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%2018V17C7%2014.2386%209.23858%2012%2012%2012V12C14.7614%2012%2017%2014.2386%2017%2017V18%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2012C13.6569%2012%2015%2010.6569%2015%209C15%207.34315%2013.6569%206%2012%206C10.3431%206%209%207.34315%209%209C9%2010.6569%2010.3431%2012%2012%2012Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21%203.6V20.4C21%2020.7314%2020.7314%2021%2020.4%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /></_Builtin.Block></>}</_Builtin.Block> : null}</_Builtin.Block>{emailFormFieldFormInputVisibility ? <_Builtin.Block
                                                className="form_field-wrapper"
                                                tag="div"
                                                {...emailFormFieldFormSectionRuntimeProps}>{emailFormFieldFormSectionSlot ?? <><_Builtin.FormBlockLabel className="form_label input_label margin-bottom_none" htmlFor="Phone">{"Email *"}</_Builtin.FormBlockLabel><_Builtin.FormBlockLabel className="form_label input_label is-disclaimer" htmlFor="Phone">{emailFormFieldFormInputDisclaimer}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div">{emailFormFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="form-field_icon icon-email"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22%20currentColor%22%3E%3Cpath%20d%3D%22M7%209L12%2012.5L17%209%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M2%2017V7C2%205.89543%202.89543%205%204%205H20C21.1046%205%2022%205.89543%2022%207V17C22%2018.1046%2021.1046%2019%2020%2019H4C2.89543%2019%202%2018.1046%202%2017Z%22%20stroke%3D%22%20currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="email"
                                                            maxLength={256}
                                                            data-name="email"
                                                            placeholder="Enter your best e-mail..."
                                                            disabled={false}
                                                            type="text"
                                                            required={true}
                                                            autoFocus={false}
                                                            id={emailFormFieldFormInputId}
                                                            {...emailFormFieldFormInputRuntimeProps} /></_Builtin.Block></>}</_Builtin.Block> : null}</_Builtin.Block>{tagsGroupTagsGroupVisibility ? <_Builtin.Block
                                            className="memory-journal_tags-wrapper"
                                            id="w-node-_8370e215-8f01-80b6-7142-22700c60bf94-0c60bf5e"
                                            tag="div"
                                            {...tagsGroupFormSectionRuntimeProps}>{tagsGroupFormSectionSlot ?? <><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{tagsGroupFormInputLabel}</_Builtin.FormBlockLabel><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="memory_tag_1"
                                                            maxLength={256}
                                                            data-name="memory_tag_1"
                                                            placeholder='Use a Hashtag Like "Summertime"'
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id={tag1FieldFormInputId}
                                                            {...tag1FieldFormInputRuntimeProps} />{tag1FieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div" id="Form-Input"><_Builtin.Block className="form-field_icon-component" tag="div">{tag2FieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="memory_tag_2"
                                                            maxLength={256}
                                                            data-name="memory_tag_2"
                                                            placeholder='Use a Hashtag Like "GoodAdvice"'
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id={tag2FieldFormInputId}
                                                            {...tag2FieldFormInputRuntimeProps} /></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_field-wrapper" tag="div"><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                            className="input_field is-icon"
                                                            name="memory_tag_3"
                                                            maxLength={256}
                                                            data-name="memory_tag_3"
                                                            placeholder='Use a Hashtag Like "CampTrips"'
                                                            disabled={false}
                                                            type="text"
                                                            required={false}
                                                            autoFocus={false}
                                                            id={tag3FieldFormInputId}
                                                            {...tag3FieldFormInputRuntimeProps} />{tag3FieldIconVisibility ? <_Builtin.HtmlEmbed
                                                            className="form-field_icon"
                                                            value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M10%203L6%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20.5%2016H2.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%207H4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18%203L14%2021%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block></>}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block
                                    className="form-inputs_field-groups flex_horizontal max-width_800px margin-inline_auto padding-inline_none"
                                    tag="div"><_Builtin.Block className="div-block-68" tag="div"><_Builtin.Heading className="memory-form_content-heading" tag="h1">{addContentHeadlineText}</_Builtin.Heading><_Builtin.Paragraph className="memory-form_content-paragraph">{addContentParagraphText}</_Builtin.Paragraph>{contentLinkFieldFormSectionVisibility ? <_Builtin.Block
                                            className="form_field-wrapper"
                                            tag="div"
                                            id="Content-Link-ID"
                                            {...contentLinkFieldFormSectionProps}>{contentLinkFieldFormSectionSlot ?? <><_Builtin.Block className="form-field_icon-component" tag="div"><_Builtin.FormTextInput
                                                        className="input_field is-content-link"
                                                        name="content_link"
                                                        maxLength={256}
                                                        data-name="content_link"
                                                        placeholder="https://image|video.link"
                                                        disabled={false}
                                                        type="url"
                                                        required={false}
                                                        autoFocus={false}
                                                        id={contentLinkFieldFormInputId}
                                                        {...contentLinkFieldFormInputRuntimeProps} /></_Builtin.Block><_Builtin.FormBlockLabel className="input_label" htmlFor="Phone">{"Content LinkS (Videos | Photos)"}</_Builtin.FormBlockLabel></>}</_Builtin.Block> : null}</_Builtin.Block><_Builtin.Block className="div-block-66" tag="div"><_Builtin.Block className="form_input-background" tag="div"><_Builtin.Block
                                                className="form_input-upload"
                                                tag="div"
                                                {...imageUploadFieldImageUploadRuntimeProps}>{imageUploadFieldImageUploadSlot}</_Builtin.Block><_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{"Photo Uploads"}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div">{imageUploadFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                        className="icon_75x75"
                                                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20%20id%3D%22photo-upload%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M13%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6V13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M3%2016L10%2013L15.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16%2010C14.8954%2010%2014%209.10457%2014%208C14%206.89543%2014.8954%206%2016%206C17.1046%206%2018%206.89543%2018%208C18%209.10457%2017.1046%2010%2016%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16%2019H19M22%2019H19M19%2019V16M19%2019V22%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="form_input-background" tag="div"><_Builtin.Block
                                                className="form_input-upload"
                                                tag="div"
                                                {...videoUploadFieldVideoUploadRuntimeProps}>{videoUploadFieldVideoUploadSlot}</_Builtin.Block><_Builtin.Block className="form-input_image-upload" tag="div"><_Builtin.FormBlockLabel className="input_label is-upload" htmlFor="Phone">{"Video Uploads"}</_Builtin.FormBlockLabel><_Builtin.Block className="upload_inner-border" tag="div">{videoUploadFieldIconVisibility ? <_Builtin.HtmlEmbed
                                                        className="icon_75x75"
                                                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20id%3D%22video-upload%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M13%2021H3.6C3.26863%2021%203%2020.7314%203%2020.4V3.6C3%203.26863%203.26863%203%203.6%203H20.4C20.7314%203%2021%203.26863%2021%203.6V13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16%2019H19M22%2019H19M19%2019V16M19%2019V22%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M9.89768%208.51296C9.49769%208.28439%209%208.57321%209%209.03391V14.9661C9%2015.4268%209.49769%2015.7156%209.89768%2015.487L15.0883%2012.5209C15.4914%2012.2906%2015.4914%2011.7094%2015.0883%2011.4791L9.89768%208.51296Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block className="button-wrapper max-width_800px" tag="div">{submitButtonSubmitButtonVisibility ? <_Builtin.Block
                                        className="button is-accent-tertiary hero_button"
                                        tag="div"
                                        id={submitButtonSubmitButtonId}
                                        {...submitButtonSubmitButtonOuterRuntimeProps}>{submitButtonSubmitButtonSlot ?? <_Builtin.FormButton
                                            className="button_label"
                                            type="submit"
                                            value={submitButtonSubmitButtonText}
                                            data-wait={submitButtonUserLoadingText}
                                            collectionId=""
                                            {...submitButtonSubmitButtonInnerRuntimeProps} />}</_Builtin.Block> : null}<_Builtin.FormTextInput
                                        className="input_field is-hidden"
                                        name="collection_id"
                                        maxLength={256}
                                        data-name="collection_id"
                                        placeholder="Memory CMS Collection ID"
                                        disabled={false}
                                        type="text"
                                        required={false}
                                        autoFocus={false}
                                        data-var-memory-collection-id={collectionIdFieldCollectionIdVariable}
                                        id="collection_id"
                                        {...collectionIdFieldFormSectionRuntimeProps} /></_Builtin.Block></_Builtin.FormForm><_Builtin.FormSuccessMessage className="form_message-success"><_Builtin.Block tag="div">{"Your shared memory of Patricia is a wonderful addition to our memory journal and wall. Thank you for helping us keep her memory alive by allowing everyone to relive that moment with you."}<br /></_Builtin.Block></_Builtin.FormSuccessMessage><_Builtin.FormErrorMessage className="form_message-error"><_Builtin.Block tag="div">{"Oops! Something went wrong. Please try again or check your details and submit again."}</_Builtin.Block></_Builtin.FormErrorMessage></_Builtin.FormWrapper></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}