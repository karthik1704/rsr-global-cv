/* eslint-disable jsx-a11y/alt-text */
"use client";
// import { PrivateField, additionalInfo, allSkills, personal } from "@content";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { HtmlProps } from "node_modules/react-pdf-html/dist/types/Html";
import React from "react";
import Html from "react-pdf-html";
import { htmlRenderers } from "./pdfhtml";
import resumeConfig from "../edit-me/resume-config";
import Theme from "../edit-me/resume-config";
import { contrastColor } from "../helpers/colorcontrast";
import { getAccentColor, getNeutralColor } from "../helpers/colors";
// import {
//   fullName,
//   sortedAchievements,
//   sortedProfessionalExperiences,
// } from "../helpers/utils";

import { BuildingColumns } from "./Icons/Buildingcolumns";
import { Calendar } from "./Icons/Calenders";
import { CircleBriefcase } from "./Icons/Circlebriefcase";
import { CircleCheck } from "./Icons/Circlecheck";
import { CircleGraduationCap } from "./Icons/Circlegraduationgap";
import { CircleIdCard } from "./Icons/Circlecard";
import { CirclePaintbrush } from "./Icons/Circlepaintbrush";
import { CircleUser } from "./Icons/Circleuser";
import { Star } from "./Icons/Star";
import PDFDownloadButton from "./pfddwld";

const theme = resumeConfig.pdfTheme;
const albertSrc = "https://fonts.gstatic.com/s/albertsans/v1";
const jetbrainsSrc = "https://fonts.gstatic.com/s/jetbrainsmono/v18";

Font.register({
  family: "Albert Sans",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: 400,
      src: `${albertSrc}/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHq5P_rI32TxAj1g.ttf`,
    },
    {
      fontStyle: "italic",
      fontWeight: 400,
      src: `${albertSrc}/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9AX74fybRUz1r5t.ttf`,
    },
    {
      fontStyle: "normal",
      fontWeight: 700,
      src: `${albertSrc}/i7dZIFdwYjGaAMFtZd_QA3xXSKZqhr-TenSHTJT_rI32TxAj1g.ttf`,
    },
    {
      fontStyle: "italic",
      fontWeight: 700,
      src: `${albertSrc}/i7dfIFdwYjGaAMFtZd_QA1Zeelmy79QJ1HOSY9Dw6IfybRUz1r5t.ttf`,
    },
  ],
});

Font.register({
  family: "JetBrains Mono",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: 500,
      src: `${jetbrainsSrc}/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.ttf`,
    },
  ],
});

const hyphenationCallback = (word: string) => {
  // don't hyphenate
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

const fontSizes = {
  xl: 20,
  l: 18,
  m: 14,
  s: 13,
  xs: 12,
  xxs: 10,
};

const spacers = {
  1: "6px",
  2: "8px",
  3: "10px",
  4: "12px",
  5: "14px",
  6: "16px",
};

const styles = StyleSheet.create({
  page: {
    alignItems: "stretch",
    backgroundColor: getNeutralColor(1, theme),
    color: getNeutralColor(12, theme),
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    fontFamily: "Albert Sans",
    fontSize: fontSizes.xxs,
    justifyContent: "flex-start",
    lineHeight: 1.3,
  },
  sidebar: {
    alignSelf: "stretch",
    backgroundColor: getNeutralColor(3, theme),
    display: "flex",
    color: getNeutralColor(12, theme),
    flexBasis: "30%",
    flexDirection: "column",
    flexGrow: 0,
    flexShrink: 1,
  },
  sidebarContent: { padding: spacers[4] },
  header: {
    backgroundColor:
      theme === Theme.Dark
        ? getNeutralColor(2, theme)
        : getAccentColor(9, theme),
    color: contrastColor,
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: "center",
  },
  headerTitle: { fontSize: fontSizes.xl, fontWeight: 700 },
  headerSubtitle: { fontSize: fontSizes.m, fontWeight: 700 },
  main: {
    alignSelf: "stretch",
    display: "flex",
    flexBasis: "70%",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    padding: spacers[4],
  },
  section: { marginBottom: spacers[4] },
  sectionHeading: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
  },
  sectionHeadingNonHTML: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  sectionHeadingIcon: {
    height: fontSizes.m,
    marginRight: spacers[1],
    width: fontSizes.m,
  },
  sectionHeadingStars: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  sectionParagraph: {
    fontWeight: 400,
    margin: 0,
  },
  itemHeading: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSizes.s,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
    marginTop: spacers[3],
  },
  itemSubheadingRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  itemSubheading: {
    fontSize: fontSizes.xxs,
    fontStyle: "italic",
  },
  professionalTitle: {
    backgroundColor: getNeutralColor(12, theme),
    borderRadius: "3px",
    color: getNeutralColor(1, theme),
    fontWeight: 700,
    paddingHorizontal: spacers[1],
  },
  bold: { fontWeight: 700 },
  flexColumn: { display: "flex", flexDirection: "column" },
  flexRow: { alignItems: "center", display: "flex", flexDirection: "row" },
  flexRowAlignStart: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
  },
  a: {
    color: getAccentColor(11, theme),
    textDecoration: "underline",
  },
  list: {
    marginTop: spacers[2],
  },
  code: {
    backgroundColor: getNeutralColor(4, theme),
    borderRadius: "3px",
    fontFamily: "JetBrains Mono",
    fontWeight: 500,
    paddingHorizontal: spacers[2],
  },
});

const htmlProps: Omit<HtmlProps, "children"> = {
  renderers: htmlRenderers,
  style: { fontSize: fontSizes.xxs },
  stylesheet: {
    a: styles.a,
    p: styles.sectionParagraph,
    ul: styles.list,
    ol: styles.list,
    code: styles.code,
  },
};

interface PDFProps {
  // privateInformation?: PrivateField[];
}

const fullName = "Catherin";
const personal = {
  givenName: "Stacy",
  familyName: "Fakename",
  title: "Official Job Title",
  location: "Austin, TX",
  twitterUsername: "stacy_fakename\r",
  body: {
    raw: "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra [justo nec ultrices](#). Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.\r\n",
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra <a href="#">justo nec ultrices</a>. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.</p>',
  },
  type: "Personal",
};
const allSkills = [
  {
    title: "Proficient\r",
    body: {
      raw: "\r\nSFTP, Drafting Agreements, HSPA, International Business, Honeywell DCS, Speech Writing, TPMS, XML Schema, Swedish, HNI\r\n",
      html: "<p>SFTP, Drafting Agreements, HSPA, International Business, Honeywell DCS, Speech Writing, TPMS, XML Schema, Swedish, HNI</p>",
    },
    type: "Skill",
  },
];

const privateInformation = [
  {
    label: "WARNING\r",
    body: {
      raw: "\r\n**Please be aware** of the security concerns of commiting private information to Git, whether it is a public or a private repo. See the README for more information on using the private feature, and note that we are not responsible if your data is exposed.\r\n",
      html: "<p><strong>Please be aware</strong> of the security concerns of commiting private information to Git, whether it is a public or a private repo. See the README for more information on using the private feature, and note that we are not responsible if your data is exposed.</p>",
    },

    type: "PrivateField",
  },
];

const additionalInfo = {
  title: "Hobbies & Interests\r",
  body: {
    raw: "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.\r\n\r\nAll Markdown files will be rendered as rich text, so you can include features such as \r\n",
    html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.</p>\n<p>All Markdown files will be rendered as rich text, so you can include features such as .</p>",
  },

  type: "AdditionalInfo",
};

const sortedAchievements: [] = [];
const sortedProfessionalExperiences = [
  {
    title: "Official Job Title",
    organization: "Some Company",
    startDate: "August 2019\r",
    endDate: "August 2019\r",
    body: {
      raw: "\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis `nisl rhoncus mattis` rhoncus urna neque viverra. Tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Volutpat consequat mauris nunc congue nisi vitae suscipit. Venenatis lectus magna fringilla urna porttitor rhoncus. Id porta nibh venenatis cras. Felis bibendum ut tristique et egestas quis ipsum suspendisse.\r\n",
      html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Neque viverra justo nec ultrices. Urna nunc id cursus metus aliquam eleifend mi in nulla. Proin sagittis <code>nisl rhoncus mattis</code> rhoncus urna neque viverra. Tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Volutpat consequat mauris nunc congue nisi vitae suscipit. Venenatis lectus magna fringilla urna porttitor rhoncus. Id porta nibh venenatis cras. Felis bibendum ut tristique et egestas quis ipsum suspendisse.</p>",
    },
    type: "ProfessionalExperience",
  },
];

const PDF = ({data}) => {
  const year = new Date().getFullYear();

  console.log(data)

  return (
    // @ts-ignore
    <Document author={fullName} title={`Résume for ${fullName}, ${year}`}>
      {/* @ts-ignore */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{data?.firstName} {data?.lastName}</Text>
            {/* <Text style={styles.headerSubtitle}>{data?.position}</Text> */}
          </View>
          <View style={styles.sidebarContent}>
            <View style={styles.section}> 
              <View style={styles.sectionHeadingNonHTML}>
                <CircleUser size={fontSizes.m} />
                <Text>About Me</Text>
              </View>
              {/* <Html {...htmlProps}>{data?.responsibilities}</Html> */}
              <Text>{data?.about}</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <CircleIdCard size={fontSizes.m} />
                <Text>Contact Information</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Location:{data.location}</Text>
                {/* <Text>&nbsp;{personal.location}</Text> */}
                {/* <Text>&nbsp;{data.city}</Text> */}
                {/* <Html {...htmlProps}>{data?.country}</Html> */}
              </View>
              {privateInformation?.map((privateField, idx) => (
                <View key={idx}>
                  <Text style={styles.bold}>{privateField.label}:&nbsp;</Text>
                  <Html {...htmlProps}>{privateField.body.html}</Html>
                </View>
              ))}
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <CircleCheck size={fontSizes.m} />
                <Text>Skills &amp; Expertise</Text>
              </View>
              {allSkills.map((skill, skillIndex) => (
                <View key={skillIndex}>
                  <View style={styles.itemHeading}>
                    <View style={styles.sectionHeadingStars}>
                      {Array.from(Array(allSkills.length - skillIndex)).map(
                        (star, starIndex) => (
                          <Star key={starIndex} size={fontSizes.xxs} />
                        )
                      )}
                    </View>
                    <Text style={styles.bold}>{skill.title}</Text>
                  </View>
                  <Html {...htmlProps}>{skill.body.html}</Html>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CircleBriefcase size={fontSizes.m} />
              <Text>Professional Experience</Text>
            </View>
            {sortedProfessionalExperiences.map(
              (professionalExperience, idx) => (
                <View key={idx}>
                  <View style={styles.itemHeading}>
                    <Text style={styles.professionalTitle}>
                      {professionalExperience.title}
                    </Text>
                    <Text>&nbsp;at {professionalExperience.organization}</Text>
                  </View>
                  <View style={styles.itemSubheadingRow}>
                    <Calendar size={fontSizes.xxs} />
                    <Text style={styles.itemSubheading}>
                      {professionalExperience.startDate}—
                      {professionalExperience.endDate
                        ? professionalExperience.endDate
                        : "Current"}
                    </Text>
                  </View>
                  <Html {...htmlProps}>{professionalExperience.body.html}</Html>
                </View>
              )
            )}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CircleGraduationCap size={fontSizes.m} />
              <Text>Achievements</Text>
            </View>
            {sortedAchievements.map((achievement, idx) => (
              <View key={idx}>
                <View style={styles.itemHeading}>
                  <Text style={styles.bold}>{achievement?.achievement}</Text>
                </View>
                <View style={styles.itemSubheadingRow}>
                  <BuildingColumns size={fontSizes.xxs} />
                  <Text style={styles.itemSubheading}>
                    {achievement?.organization}
                  </Text>
                </View>
                <Html {...htmlProps}>{achievement?.body?.html}</Html>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CirclePaintbrush size={fontSizes.m} />
              <Text>{additionalInfo.title}</Text>
            </View>
            <Html
              {...htmlProps}
              stylesheet={{
                ...htmlProps.stylesheet,
                p: { marginBottom: spacers[1] },
              }}
            >
              {additionalInfo.body.html}
            </Html>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
