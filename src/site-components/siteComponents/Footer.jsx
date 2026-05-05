"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import Span from "../webflow_modules/Basic/components/Span";

export function Footer({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section className={"footer position_relative is-inverse"} tag={"footer"}>
        <Block className={"footer_top-section"} tag={"div"}>
          <Block className={"container footer"} tag={"div"}>
            <Block
              className={"footer-statment margin-block_medium"}
              tag={"div"}
            >
              <Heading className={"statement text-align_right"} tag={"h2"}>
                {"she will "}
                <Span className={"heading-accent"}>{"always "}</Span>
                {"be in our hearts"}
                <br />
              </Heading>
            </Block>
          </Block>
          <Block className={"footer_link-scroll-up"} tag={"div"}>
            <Link
              block={"inline"}
              button={false}
              className={"footer_link on-inverse"}
              options={{
                href: "#",
              }}
            >
              <Block className={"back-to-top"} tag={"div"}>
                {"Back to top"}
              </Block>
            </Link>
          </Block>
        </Block>
        <Block className={"footer_bottom-section"} tag={"div"}>
          <Block className={"footer_botom-container"} tag={"div"}>
            <Block className={"footer-logo-wrapper"} tag={"div"}>
              <Block className={"footer-content-block"} tag={"div"}>
                <Block className={"footer_hero-eyebrow"} tag={"div"}>
                  <Heading
                    className={
                      "hero_font-sub-text custom-placement text-color-green footer"
                    }
                    tag={"h1"}
                  >
                    {"in"}
                  </Heading>
                  <Heading
                    className={
                      "hero_heading is-custom-font text-color-green footer"
                    }
                    tag={"h1"}
                  >
                    <Span className={"hero_special-letter"}>{"l"}</Span>
                    {"oving"}
                  </Heading>
                  <Heading
                    className={"hero_font-sub-text text-color-green footer"}
                    tag={"h1"}
                  >
                    {"memoryof"}
                  </Heading>
                </Block>
                <Heading
                  className={"hero_heading text-color-green footer"}
                  tag={"h2"}
                >
                  {"Patricia Lanning"}
                </Heading>
              </Block>
              <Paragraph
                className={"hero_font-sub-text text-color-green footer date"}
              >
                {"1960-2025"}
              </Paragraph>
            </Block>
            <Block className={"footer_divider-line"} tag={"div"} />
            <Block className={"footer_bottm-wrapper"} tag={"div"}>
              <Block className={"footer_links-block"} tag={"div"}>
                <Link
                  block={""}
                  button={false}
                  className={"footer_link-block"}
                  options={{
                    href: "#",
                  }}
                >
                  {"Share a Memory"}
                </Link>
                <Link
                  block={""}
                  button={false}
                  className={"footer_link-block"}
                  options={{
                    href: "#",
                  }}
                >
                  {"Guestbook"}
                </Link>
                <Link
                  block={""}
                  button={false}
                  className={"footer_link-block"}
                  options={{
                    href: "#",
                  }}
                >
                  {"Life Events"}
                </Link>
                <Link
                  block={""}
                  button={false}
                  className={"footer_link-block"}
                  options={{
                    href: "#",
                  }}
                >
                  {"Recipes"}
                </Link>
                <Link
                  block={""}
                  button={false}
                  className={"footer_link-block"}
                  options={{
                    href: "#",
                  }}
                >
                  {"obituary"}
                </Link>
              </Block>
              <Block className={"footer_social-icon"} tag={"div"}>
                <Link
                  block={"inline"}
                  button={false}
                  className={"footer_social-link-wrapper"}
                  options={{
                    href: "https://www.facebook.com/patriciasuelanning",
                    target: "_blank",
                  }}
                >
                  <HtmlEmbed
                    className={"social-icon"}
                    content={""}
                    value={
                      "%3Csvg%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20height%3D%2235px%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M10.6645%2017.9087C14.8396%2017.1254%2018%2013.4482%2018%209.03137%2018%204.0432%2013.9708%208e-07%209%208e-07c-4.97084%200-9%204.0432-9%209.03137C0%2013.6554%203.46358%2017.4686%207.92947%2018V11.524h-2.286V8.86691h2.286V6.90662c0-2.274%201.38505-3.51273%203.40674-3.51273%20.968211%200%201.8.0722509%202.04347.104574v2.37668H11.9776c-1.09895%200-1.31305.525721-1.31305%201.29481v1.69695h2.62232L12.9458%2011.524H10.6645v6.3847Z%22%2F%3E%3C%2Fsvg%3E"
                    }
                  />
                </Link>
              </Block>
            </Block>
            <Block className={"footer_legal-wrapper"} tag={"div"}>
              <Block className={"footer_copyright"} tag={"div"}>
                {"© 2025 In Loving Memory of Patricia Sue Lanning"}
              </Block>
              <Block className={"footer-legal-block"} tag={"div"}>
                <Link
                  block={""}
                  button={false}
                  className={"footer_legal-link is-hidden"}
                  options={{
                    href: "#",
                  }}
                >
                  {"Terms Of Use"}
                </Link>
                <Link
                  block={""}
                  button={false}
                  className={"footer_legal-link is-hidden"}
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy Policy"}
                </Link>
              </Block>
            </Block>
          </Block>
        </Block>
      </Section>
    </div>
  );
}
