"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import DropdownLink from "../webflow_modules/Dropdown/components/DropdownLink";
import DropdownList from "../webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "../webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "../webflow_modules/Dropdown/components/DropdownWrapper";
import FormSelect from "../webflow_modules/Form/components/FormSelect";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function FormDropDown({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"select-input_component"} tag={"div"}>
        <HtmlEmbed
          className={"hide"}
          content={""}
          value={
            "%3C!--%20%5BFinsweet%20Attributes%5D%20Select%20Custom%20--%3E%0A%3Cscript%3E(()%3D%3E%7Bvar%20t%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40finsweet%2Fattributes-selectcustom%401%2Fselectcustom.js%22%2Ce%3Ddocument.querySelector(%60script%5Bsrc%3D%22%24%7Bt%7D%22%5D%60)%3Be%7C%7C(e%3Ddocument.createElement(%22script%22)%2Ce.async%3D!0%2Ce.src%3Dt%2Cdocument.head.append(e))%3B%7D)()%3B%3C%2Fscript%3E"
          }
        />
        <DropdownWrapper
          className={"select-input_dropdown"}
          delay={0}
          fs-selectcustom-element={"dropdown"}
          fs-selectcustom-hideinitial={"true"}
          hover={false}
          tag={"div"}
        >
          <DropdownToggle
            aria-haspopup={"listbox"}
            className={"select-input_toggle is-neutral"}
            tag={"div"}
          >
            <Block tag={"div"}>{"Select your choice"}</Block>
            <HtmlEmbed
              className={"icon-1x1-xsmall"}
              content={""}
              value={
                "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M11.9999%2013.1714L16.9497%208.22168L18.3639%209.63589L11.9999%2015.9999L5.63599%209.63589L7.0502%208.22168L11.9999%2013.1714Z%22%2F%3E%3C%2Fsvg%3E"
              }
            />
          </DropdownToggle>
          <DropdownList
            className={"select-input_list"}
            role={"listbox"}
            tag={"nav"}
          >
            <FormSelect
              className={"select-input_field"}
              data-name={"Select Field"}
              multiple={false}
              name={"Select-Field"}
              options={[
                {
                  t: "Give feedback",
                  v: "First",
                },
                {
                  t: "Report an issue/bug",
                  v: "Second",
                },
                {
                  t: "Request a feature",
                  v: "Third",
                },
                {
                  t: "Ask for technical support",
                  v: "Fourth",
                },
                {
                  t: "Other",
                  v: "Fith",
                },
              ]}
              required={false}
            />
            <DropdownLink
              className={"select-input_link is-neutral is-soft"}
              options={{
                href: "#",
              }}
              role={"option"}
            >
              {"Select link"}
            </DropdownLink>
          </DropdownList>
        </DropdownWrapper>
        <Block className={"select-input_component"} tag={"div"}>
          <HtmlEmbed
            className={"hide"}
            content={""}
            value={
              "%3C!--%20%5BFinsweet%20Attributes%5D%20Select%20Custom%20--%3E%0A%3Cscript%3E(()%3D%3E%7Bvar%20t%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40finsweet%2Fattributes-selectcustom%401%2Fselectcustom.js%22%2Ce%3Ddocument.querySelector(%60script%5Bsrc%3D%22%24%7Bt%7D%22%5D%60)%3Be%7C%7C(e%3Ddocument.createElement(%22script%22)%2Ce.async%3D!0%2Ce.src%3Dt%2Cdocument.head.append(e))%3B%7D)()%3B%3C%2Fscript%3E"
            }
          />
          <DropdownWrapper
            className={"select-input_dropdown"}
            delay={0}
            fs-selectcustom-element={"dropdown"}
            fs-selectcustom-hideinitial={"true"}
            hover={false}
            tag={"div"}
          >
            <DropdownToggle
              aria-haspopup={"listbox"}
              className={"select-input_toggle is-neutral"}
              tag={"div"}
            >
              <Block tag={"div"}>{"Select your choice"}</Block>
              <HtmlEmbed
                className={"icon-1x1-xsmall"}
                content={""}
                value={
                  "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M11.9999%2013.1714L16.9497%208.22168L18.3639%209.63589L11.9999%2015.9999L5.63599%209.63589L7.0502%208.22168L11.9999%2013.1714Z%22%2F%3E%3C%2Fsvg%3E"
                }
              />
            </DropdownToggle>
            <DropdownList
              className={"select-input_list"}
              role={"listbox"}
              tag={"nav"}
            >
              <FormSelect
                className={"select-input_field"}
                data-name={"Select Field"}
                multiple={false}
                name={"Select-Field"}
                options={[
                  {
                    t: "Give feedback",
                    v: "First",
                  },
                  {
                    t: "Report an issue/bug",
                    v: "Second",
                  },
                  {
                    t: "Request a feature",
                    v: "Third",
                  },
                  {
                    t: "Ask for technical support",
                    v: "Fourth",
                  },
                  {
                    t: "Other",
                    v: "Fith",
                  },
                ]}
                required={false}
              />
              <DropdownLink
                className={"select-input_link is-neutral is-soft"}
                options={{
                  href: "#",
                }}
                role={"option"}
              >
                {"Select link"}
              </DropdownLink>
            </DropdownList>
          </DropdownWrapper>
        </Block>
        <DropdownWrapper
          className={"select-input_dropdown"}
          delay={0}
          fs-selectcustom-element={"dropdown"}
          fs-selectcustom-hideinitial={"true"}
          hover={false}
          tag={"div"}
        >
          <DropdownToggle
            aria-haspopup={"listbox"}
            className={"select-input_toggle is-neutral"}
            tag={"div"}
          >
            <Block tag={"div"}>{"Select your choice"}</Block>
            <HtmlEmbed
              className={"icon-1x1-xsmall"}
              content={""}
              value={
                "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M11.9999%2013.1714L16.9497%208.22168L18.3639%209.63589L11.9999%2015.9999L5.63599%209.63589L7.0502%208.22168L11.9999%2013.1714Z%22%2F%3E%3C%2Fsvg%3E"
              }
            />
          </DropdownToggle>
          <DropdownList
            className={"select-input_list"}
            role={"listbox"}
            tag={"nav"}
          >
            <FormSelect
              className={"select-input_field"}
              data-name={"Select Field"}
              multiple={false}
              name={"Select-Field"}
              options={[
                {
                  t: "Give feedback",
                  v: "First",
                },
                {
                  t: "Report an issue/bug",
                  v: "Second",
                },
                {
                  t: "Request a feature",
                  v: "Third",
                },
                {
                  t: "Ask for technical support",
                  v: "Fourth",
                },
                {
                  t: "Other",
                  v: "Fith",
                },
              ]}
              required={false}
            />
            <DropdownLink
              className={"select-input_link is-neutral is-soft"}
              options={{
                href: "#",
              }}
              role={"option"}
            >
              {"Select link"}
            </DropdownLink>
          </DropdownList>
        </DropdownWrapper>
      </Block>
    </div>
  );
}
