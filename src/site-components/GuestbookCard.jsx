"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
    '{"events":{"e-211":{"id":"e-211","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-212"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764802385538},"e-212":{"id":"e-212","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-211"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"},"targets":[{"selector":".memory-wall_days-count","originalId":"6930921aaa3df371b6c0a733|5f0970dd-9635-c226-22e9-d11f7f95d4df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764802385538},"e-223":{"id":"e-223","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"72a65641-083c-d3d7-a5f1-54689110319e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"72a65641-083c-d3d7-a5f1-54689110319e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764956763749},"e-225":{"id":"e-225","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-226"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3689d08e-4566-5cce-acd7-70fe0543160f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3689d08e-4566-5cce-acd7-70fe0543160f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764985016597},"e-226":{"id":"e-226","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-225"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3689d08e-4566-5cce-acd7-70fe0543160f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3689d08e-4566-5cce-acd7-70fe0543160f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1764985016598}},"actionLists":{"a-53":{"id":"a-53","title":"Show Message [ON_CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-53-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guestbook_message-wrapper","selectorGuids":["cd68b341-d8d2-6f1f-a8dc-73b76df0959b"]},"value":0,"unit":""}},{"id":"a-53-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":1500,"target":{"useEventTarget":true,"id":"3689d08e-4566-5cce-acd7-70fe0543160f"},"value":0,"unit":""}},{"id":"a-53-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guesttbook_button-view-detail","selectorGuids":["6eb2702d-f4ab-1073-047b-4e42e6a6798c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-53-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"3689d08e-4566-5cce-acd7-70fe0543160f"},"value":1,"unit":""}},{"id":"a-53-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guestbook_message-wrapper","selectorGuids":["cd68b341-d8d2-6f1f-a8dc-73b76df0959b"]},"value":1,"unit":""}},{"id":"a-53-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":750,"easing":"","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".guesttbook_button-view-detail","selectorGuids":["6eb2702d-f4ab-1073-047b-4e42e6a6798c"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1764768046901},"a-54":{"id":"a-54","title":"Show Message [OFF CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-54-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3689d08e-4566-5cce-acd7-70fe0543160f"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764768046901},"a-37":{"id":"a-37","title":"Show Message [ON_CLICK]","actionItemGroups":[{"actionItems":[{"id":"a-37-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":1500,"target":{"selector":".memory-wall_heading-wrapper","selectorGuids":["a11dfe58-9e14-7a84-d511-8b6e5593c092"]},"value":0,"unit":""}},{"id":"a-37-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".memory-wall_bottom-paragraph","selectorGuids":["1881fdc8-69bb-9b99-b797-06a4260f0d8e"]},"value":1,"unit":""}},{"id":"a-37-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":1500,"target":{"useEventTarget":"CHILDREN","selector":".memory-wall_botom-content","selectorGuids":["f302f035-1b12-87ab-fa79-ab1aa4fa0949"]},"globalSwatchId":"--_apps---colors--background-dark","rValue":41,"bValue":141,"gValue":112,"aValue":1}},{"id":"a-37-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inQuad","duration":1000,"target":{"selector":".memory-wall_top-date.memory-wall_move-rotate","selectorGuids":["b68885af-7deb-a21b-266c-2480b1c4c597","bba5e08f-da7e-a2fc-9219-e553b3e3daf5"]},"xValue":35,"yValue":130,"zValue":null,"xUnit":"px","yUnit":"px","zUnit":"px"}}]},{"actionItems":[{"id":"a-37-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inQuad","duration":1500,"target":{"selector":".memory-wall_top-date.memory-wall_move-rotate","selectorGuids":["b68885af-7deb-a21b-266c-2480b1c4c597","bba5e08f-da7e-a2fc-9219-e553b3e3daf5"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1764768046901}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GuestbookCard(
    {
        as: _Component = _Builtin.Block,
        mainComponentId,
        mainComponentVisibility = true,
        mainComponentColorVariant = "Warm Sandston",
        guestbookDateId,
        guestbookDateRuntimeProps = {},
        guestbookDateDateLabel = "Added On",
        guestbookDateGuestbookDate = <br />,
        nameFullName = "first name last name",
        locationVisibility = true,
        locationIconVisibility = true,
        locationId,
        locationRuntimeProps = {},
        viewMessageButtonVisibility = true,
        viewMessageButtonArrowIconVisibility = true,
        viewMessageButtonButtonText = <>{"View Message"}<br /></>,
        viewMessageButtonSlot,
        viewMessageButtonRuntimeProps = {},
        tag1Visibility = true,
        tag1Id,
        tag1Text = "work event",
        tag2Visibility = true,
        tag2Id,
        tag2Text = "co-worker",
        tag2Tag2Slot,
        tag2RuntimeProps = {},
        locationLocationText = <>{"Boulder, CO"}<br /></>,
        messageCardRuntimeProps = {},
        messageCardMessageCardSlot,
        howWeMetHowWeMetText = "We met a Omni Financial",
        howWeMetHowWeMetSlot,
        howWeMetRuntimeProps = {},
        messageVisibility = true,
        messageMessageHeading = <>{"message"}<br /></>,
        messageMessageText = "You' be missed. I'll always remember your warm smile",
        messageMessageSlot,
        messageRuntimeProps = {},
        cardDetailsButtonButtonText = "view card details",
        cardDetailsButtonCardDetailButtonSlot,
        cardDetailsButtonRuntimeProps = {},
        messageHeadingText = "message",
        tag1Tag1Slot,
        tag1RuntimeProps = {},
        howWeMetVisibility = true,
        howWeMetHeadingText = <>{"how we met"}<br /></>
    }
) {
    _interactions.useInteractions(_interactionsData);

    const _styleVariantMap = {
        "Warm Sandston": "",
        "Slate Navy": "w-variant-db85ccea-8578-785e-3cac-50eea47c37cb",
        "Slate Blue": "w-variant-acd405c7-f8cf-c479-8d20-4182289c84fc",
        "Ocean Teal": "w-variant-3d29cd7f-708c-35e7-f839-44ba41e87c40",
        "Rustwood Red": "w-variant-1382dac3-79bd-15c9-48bb-2fad64084561",
        "Rose Clay": "w-variant-f870ba70-a76c-b3e4-5bee-5dfd8572c825"
    };

    const _activeStyleVariant = _styleVariantMap[mainComponentColorVariant];

    return mainComponentVisibility ? <_Component
        className={`component-guestbook-card component_guesbook-card ${_activeStyleVariant}`}
        id="w-node-_72a65641-083c-d3d7-a5f1-54689110319e-9110319e"
        data-w-id="72a65641-083c-d3d7-a5f1-54689110319e"
        tag="div"><_Builtin.Block className={`background_color-variant ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`guestbook_top-section ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`guestbook_card-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                        className={`guestbook_date_wrapper ${_activeStyleVariant}`}
                        tag="div"
                        id={guestbookDateId}><_Builtin.Block className={`guestbook_date-label ${_activeStyleVariant}`} tag="div">{guestbookDateDateLabel}</_Builtin.Block><_Builtin.Block
                            className={`guestbook_date ${_activeStyleVariant}`}
                            tag="div"
                            {...guestbookDateRuntimeProps}>{guestbookDateGuestbookDate}</_Builtin.Block></_Builtin.Block><_Builtin.Block className={`guestbook_name-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Heading className={`guestbook_name ${_activeStyleVariant}`} tag="h3">{nameFullName}</_Builtin.Heading><_Builtin.Block className={`guestbook_item-wrapper ${_activeStyleVariant}`} tag="div">{locationVisibility ? <_Builtin.Block
                                className={`guestbook_location ${_activeStyleVariant}`}
                                tag="div"
                                id={locationId}><_Builtin.Block className={`guestbook_location-item ${_activeStyleVariant}`} tag="div">{locationIconVisibility ? <_Builtin.HtmlEmbed
                                        className={`icon location-icon ${_activeStyleVariant}`}
                                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M20%2010C20%2014.4183%2012%2022%2012%2022C12%2022%204%2014.4183%204%2010C4%205.58172%207.58172%202%2012%202C16.4183%202%2020%205.58172%2020%2010Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2011C12.5523%2011%2013%2010.5523%2013%2010C13%209.44772%2012.5523%209%2012%209C11.4477%209%2011%209.44772%2011%2010C11%2010.5523%2011.4477%2011%2012%2011Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}<_Builtin.Block
                                        className={`guesbook_location component_color ${_activeStyleVariant}`}
                                        tag="div"
                                        {...locationRuntimeProps}>{locationLocationText}</_Builtin.Block></_Builtin.Block></_Builtin.Block> : null}{viewMessageButtonVisibility ? <_Builtin.Block className={`guestbook_view-message ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`guestbook_message-item ${_activeStyleVariant}`} tag="div"><_Builtin.Block
                                        className={`guesbook_view-message ${_activeStyleVariant}`}
                                        tag="div"
                                        {...viewMessageButtonRuntimeProps}>{viewMessageButtonSlot ?? viewMessageButtonButtonText}</_Builtin.Block>{viewMessageButtonArrowIconVisibility ? <_Builtin.HtmlEmbed
                                        className={`icon arrow-icon ${_activeStyleVariant}`}
                                        value="%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20color%3D%22currentColor%22%3E%3Cpath%20d%3D%22M8%2012H16M16%2012L12.5%208.5M16%2012L12.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2022C17.5228%2022%2022%2017.5228%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2017.5228%206.47715%2022%2012%2022Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E" /> : null}</_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block><_Builtin.Block className={`guestroom_tags-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`relationship-wrapper ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`guestbook_first-meeting ${_activeStyleVariant}`} tag="div">{"How You Knew Eachother"}</_Builtin.Block><_Builtin.Block
                                className={`guestbook_buton-group-wrapper ${_activeStyleVariant}`}
                                tag="div"><_Builtin.Block className={`bg-color-compoent ${_activeStyleVariant}`} tag="div">{tag1Tag1Slot ?? (tag1Visibility ? <_Builtin.Block
                                        className={`guestbook_relationship-tag ${_activeStyleVariant}`}
                                        tag="div"
                                        id={tag1Id}
                                        {...tag1RuntimeProps}>{tag1Text}</_Builtin.Block> : null)}</_Builtin.Block><_Builtin.Block className={`bg-color-compoent ${_activeStyleVariant}`} tag="div">{tag2Tag2Slot ?? (tag2Visibility ? <_Builtin.Block
                                        className={`guestbook_relationship-tag ${_activeStyleVariant}`}
                                        tag="div"
                                        id={tag2Id}
                                        {...tag2RuntimeProps}>{tag2Text}</_Builtin.Block> : null)}</_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Builtin.Block><_Builtin.Block
            className={`guestbook_message-card ${_activeStyleVariant}`}
            data-w-id="3689d08e-4566-5cce-acd7-70fe0543160f"
            tag="div"
            {...messageCardRuntimeProps}>{messageCardMessageCardSlot ?? <>{messageVisibility ? <_Builtin.Block
                    className={`guestbook_message-wrapper w-clearfix ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Paragraph className={`guestbook_message-headline ${_activeStyleVariant}`}>{howWeMetHeadingText}</_Builtin.Paragraph><_Builtin.Block
                        className={`guestbook_message-text ${_activeStyleVariant}`}
                        tag="div"
                        {...howWeMetRuntimeProps}>{howWeMetHowWeMetSlot ?? howWeMetHowWeMetText}</_Builtin.Block></_Builtin.Block> : null}{howWeMetVisibility ? <_Builtin.Block
                    className={`guestbook_message-wrapper w-clearfix ${_activeStyleVariant}`}
                    tag="div"><_Builtin.Paragraph className={`guestbook_message-headline ${_activeStyleVariant}`}>{messageHeadingText}</_Builtin.Paragraph><_Builtin.Block
                        className={`guestbook_message-text ${_activeStyleVariant}`}
                        tag="div"
                        {...messageRuntimeProps}>{messageMessageSlot ?? messageMessageText}</_Builtin.Block></_Builtin.Block> : null}<_Builtin.Block
                    className={`guesttbook_button-view-detail tag ${_activeStyleVariant}`}
                    tag="div"
                    {...cardDetailsButtonRuntimeProps}>{cardDetailsButtonCardDetailButtonSlot ?? cardDetailsButtonButtonText}</_Builtin.Block></>}</_Builtin.Block></_Component> : null;
}