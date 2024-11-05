/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";

import { dateFormatter } from "@/lib/utils";

import resumeConfig from "../../edit-me/resume-config";
import { ResumeType } from "./typings";
import { SERVER_IMAGE_URL } from "@/app/constants";


const theme = resumeConfig.pdfTheme;




Font.register({
  family: "Carlito",
  fonts: [
    { src: "/fonts/Carlito/Carlito-Regular.ttf" }, // font-style: normal, font-weight: normal
    { src: "/fonts/Carlito/Carlito-Bold.ttf", fontWeight: 700 }, // font-style: normal, font-weight: normal
    { src: "/fonts/Carlito/Carlito-Italic.ttf", fontStyle: "italic" },
    {
      src: "/fonts/Carlito/Carlito-BoldItalic.ttf",
      fontStyle: "italic",
      fontWeight: 700,
    },
  ],
});


const hyphenationCallback = (word: string) => {
  // don't hyphenate
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

const pageValue: number = 2;

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    fontWeight: "extrabold",
    fontFamily: 'Carlito',
    paddingTop: pageValue !==1 ? 35 :0,
    paddingBottom: 65,
  },

  photoContainer: {
    width: "18%",
    borderRadius: 50,
    paddingTop: 10,
    // paddingRight: 10,
    overflow:'hidden',
  },
  photoContainer1: {
    width: "22%",
    height: "100%",
  },

  sidebar: {
    display: "flex",
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    paddingLeft: '15px',
paddingright: '10px',
paddingBottom:'10px',
paddingTop:'10px',
  },

  log: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:'center',
  },

  heading: {
    // marginBottom: 1,
    fontWeight:'heavy',
    paddingLeft:15,
  },

  heading1: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft:15,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  line: {
    height: 2,
    backgroundColor: "grey",
    marginTop: 5,
  },
  text1: {
    fontSize: 12,
    fontWeight: 1000,
  },
  text2: {
    fontSize: 10,
    margin: 1,
    fontWeight:'normal',
    textTransform:'capitalize',
  },
  text3: {
    fontSize: 10,
    margin: 1,
    fontWeight:'normal',
  },
  text4: {
    fontSize: 10,
    margin: 1,
  },
  text5: {
    fontSize: 12,
    fontWeight: "extrabold",
    textTransform: "capitalize",
  },
  text6: {
    fontSize: 10,
    margin: 1,
    textTransform: "capitalize",
  },
  text7: {
    fontSize: 12,
    fontWeight: "extrabold",
    paddingLeft:15,
  },
  text8: {
    fontSize: 10,
    minWidth: 30,
    paddingLeft:15,
    fontWeight:'normal',
  },
  work: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  line1: {
    height: 2,
    backgroundColor: "grey",
    marginTop: 5,
  },
  work1: {
    fontSize: 12,
    fontWeight: "extrabold",
  },

  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  company: {
    fontSize: 12,
    marginBottom: 2,
  },

  dates: {
    fontSize: 10,
    marginTop: 10,
    color: "gray",
  },

  description: {
    fontSize: 10,
    marginBottom: 7,
    marginTop: 5,
    fontWeight:'normal',
  },
  subheading: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  responsibility: {
    fontSize: 10,
    marginBottom: 2,
  },
  jobappliedfor: {
    alignItems: "center",
    fontSize: 11,
    paddingLeft: 3,
    fontWeight:'normal',
    textTransform:'capitalize',
  },

  link: {
    fontSize: 10,
    color: "blue",
    textDecoration: "underline",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  listItemText: {
    fontSize: 10,
  },
  listItems: {
    marginBottom: 5,
    marginTop: 10,
  },
  listItemDate: {
    fontSize: 10,
    fontWeight: "normal",
  },
  listItemTitle: {
    fontSize: 10,
    // marginLeft: 10,
    fontWeight: "normal",
    textTransform:'capitalize',
  },
  headings: {
    fontSize: 12,
    fontWeight: 1000,
    marginBottom: 5,
    paddingTop: 10,
  },
  subheadings: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3,
    paddingTop: 5,
  },
  listsItems: {
    flexDirection: "row",
    // marginBottom: 2,
    paddingLeft: 10,
    paddingTop: 5,
  },
  bulletPoints: {
    width: 10,
    fontSize: 10,
  },
  date: {
    fontSize: 10,
  },
  
});

const PDF = ({ data }: {data:ResumeType}) => {
  const year = new Date().getFullYear();

  // console.log(data.experiences.length);
  console.log(data);
  // console.log(data.experiences[0].workfrom);
  // console.log(data.experiences[0].workfrom ? "-" : "");
  return (
    // @ts-ignore
    <Document
      author={`${data.first_name} ${data.last_name}`}
      title={`Résume: ${data.resume_title}, ${year}`}
    >
      {/* @ts-ignore */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.sidebar}>
        {!!data.resume_image && (
          <View style={styles.photoContainer}>
            {/* <Text>CHEF DE PARTIE</Text>
            <Text>QATAR AIRWAYS GROUP</Text> */}
            
              <Image
                src={`${SERVER_IMAGE_URL}${data.resume_image}`}
                
                style={{
                  borderRadius: "50",
                  width: "auto",
                  height: 'auto',
                  maxHeight: 100,
                }}
              />
          </View>
           )}

          <View style={{ width:'77%'
           }}>
            <View style={styles.heading}>
              <View style={styles.log}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: 1000,
                  textTransform: "capitalize",
                }}>
                  {data.first_name}{" "}
                  {data.last_name}
                </Text>
                <View style={styles.photoContainer1}>
                  <Image src="/images/rsr_logo-1.png" />
                </View>
              </View>

              <View style={styles.line} />
            </View>

            <View style={styles.heading1}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "10",
                 
                }}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}
                >
                  <Text
                    style={{ ...styles.text1,}}
                  >
                    Date of birth : </Text>
                  <Text style={styles.text2}>
                    {/* {new Date(data.dob).toLocaleDateString("en-GB")} | */}
                    {data.date_of_birth
                      ? new Date(
                          data.date_of_birth
                        ).toLocaleDateString("en-GB")
                      : null}{" "}
                    |
                  </Text>
                </View>
                {data.contact_number ? (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={styles.text1}>Contact Number : </Text>
                    <Text style={styles.text3}>
                      {data.contact_number} |
                    </Text>
                  </View>
                ) : null}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "10",
                  marginBottom: "5",
                  marginTop: "5",
                }}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}
                >
                  <Text
                    style={{ ...styles.text1, }}
                  >
                    Nationality : </Text>
                  <Text style={styles.text2}>
                    {/* {new Date(data.dob).toLocaleDateString("en-GB")} | */}
                    {data.nationality} |
                  </Text>
                </View>
                {data.email_address ? (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={styles.text1}>Email ID : </Text>
                    <Text style={styles.text3}>
                      {data.email_address} |
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={{ flexDirection: "row", gap: "4"}}>
                <Text style={styles.text1}>Address :</Text>
                <Text style={styles.text2}>
                  {data.address_line_1 &&
                  data.address_line_2 &&
                  data.city &&
                  data.country
                    ? `${data.address_line_1}, ${data.address_line_2} ${data.city}, ${data.postal_code} ${data.country}`
                    : null}
                  {/* F-72, Mangal Bazar, Subhash Chowk, Laxmi Nagar, 110092, Delhi,
                  India (Home) */}
                </Text>
              </View>
            </View>

            {data.responsibilities ? (
              <View style={{marginBottom:'5', marginTop:'5'}}>
                <Text style={styles.text7}>About me:</Text>
                <Text style={styles.text8}>
                  {data.responsibilities}
                </Text>
              </View>
            ) : null}
          </View>
        </View>

        <View style={styles.work}>
          {/* <Text style={styles.work1}>{exp.workfrom ? WORK EXPERIENCE: null}</Text> */}
          {/* <View style={styles.line1} /> */}

          {data.job_applied_for && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Text style={styles.work1}>Job applied for :</Text>
              <Text style={styles.jobappliedfor}>{data.job_applied_for}</Text>
            </View>
          )}
           <Text style={styles.work1}>WORK EXPERIENCE</Text>

          {data.experiences.length ? (
            <View>
              {data.experiences.map((exp, index) => (
                <View key={index}>
                  {/* <Text style={styles.work1}>WORK EXPERIENCE</Text> */}
                  <View style={styles.line1} />

                  <View style={styles.jobTitle}>
                    {/* <Text style={styles.dates}>05/08/2022 - CURRENT Doha, Qatar</Text> */}
                    <Text style={styles.dates}>
                      {dateFormatter(exp.from_date)} - {" "}
                      {exp.to_date
                        ? dateFormatter(exp.to_date)
                        : "Currently Working"}
                
                    </Text>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        gap: "5",
                        textTransform:'capitalize',
                      }}
                    >
                      <Text style={styles.jobTitle}>{exp.occupation}</Text>
                      {/* <Text style={styles.company}>{exp.employer}</Text> */}
                      {/* <Text style={styles.company}>QATAR AIRWAYS GROUP</Text> */}
                    </View>
                    <View style={styles.line1} />

                    <View>
                      {/* <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>
                Qatar Airways Group:
              </Text> */}
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 1000,
                          marginTop: 5,
                          textTransform: "capitalize",
                        }}
                      >
                        {exp.employer}
                      </Text>
                      <Text style={styles.description}>
                        {/* Qatar Airways is the national airline of the State of Qatar. The
                airline's headquarters is located in Doha, and it offers
                exceptional hospitality as well as a range of lounges and
                restaurants that offer utmost comfort and luxury. */}
                        {exp.about_company}
                      </Text>
                      <Text style={styles.description}>
                        {/* The number of chefs in the kitchen exceeds 150. Including
                commis, DCDP's and also stewards. In my role as CDP, I am
                responsible for looking over and making sure all the operation
                works smoothly for breakfast, lunch, and dinner for the entire
                operation on a daily basis. All in all, it is a very large
                cyclical operation. */}
                      </Text>
                    </View>
                    <Text style={styles.text1}>
                      Duties & Responsibilities :
                    </Text>
                    <Text style={styles.description}>
                      {/* Ensure the quality and quantity of food for lunch, afternoon tea,
              and dinner in the kitchen. Make food indents and maintain regular
              checks on the staff. Prepare the dishes and garnish and plate
              them. Ensure the kitchen is hygienic, food is safe, and the
              temperature of food is appropriate. Promoted to CDP on April 1st,
              2023. */}
                      {exp.responsibilities}
                    </Text>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 10,
                        fontWeight: "extrabold",
                      }}
                    >
                      Address : <Text style={styles.text2}>{exp.location}</Text>{" "}
                      | Website : <Text style={styles.link}>{exp.website}</Text>
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}

          
          {/* <View style={styles.job1}>
            <Text style={styles.dates}>07/2020 - 07/2022 Siliguri, India</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 4,
              }}
            >
              <Text style={styles.jobTitle}>COMMIS CHEF</Text>
              <Text style={styles.company}>BAKED FOR YOU (CAFE)</Text>
            </View>
            <View style={styles.line1} />
            <View>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>
                Baked For You:
              </Text>

              <Text style={styles.description}>
                Baked For You is an all-in-one Italian and global cafe,
                chocolatier, and patisserie located in West Bengal, India. The
                menu is brief and uncomplicated, offering traditional cuisines
                from all over the world. It is renowned throughout the area for
                its baked goods and sweets.
              </Text>
              <Text style={styles.subheading}>Duties & Responsibilities:</Text>
              <Text style={styles.responsibility}>
                Worked with the sous chef on creating new dishes, as well as
                creating healthy options for junk foods. Checked food quality
                and quantity. - Contributed to daily production. Collaborated
                closely with other chefs for daily operations.
              </Text>
              <Text style={styles.description}>
                Department: Culinary | Address: India
              </Text>
            </View>
          </View> */}
          {!!data.education.length && (
          <View>
          <Text
                style={{
                  fontSize: 12,
                  fontWeight: "extrabold",
                  paddingTop: 10,
                }}
              >
                EDUCATION AND TRAINING
              </Text>
          {data.education.map((educ, index) => (
            <View key={index}>
              {/* <Text
                style={{
                  fontSize: 12,
                  fontWeight: "extrabold",
                  paddingTop: 10,
                }}
              >
                EDUCATION AND TRAINING
              </Text> */}
              <View style={styles.line1} />
              <View style={styles.jobTitle}>
                <Text style={styles.dates}>
                  {dateFormatter(educ.from_date)} -{" "}
                  {dateFormatter(educ.to_date)} {educ.city},{" "}
                  {educ.country}
                </Text>

                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flexWrap:'wrap',
                    gap: "5",
                  }}
                >
                  <Text style={styles.jobTitle}>{educ.title_of_qualification} </Text>
                  <Text style={styles.jobTitle}>{educ.organization_name} </Text>
                  <Text style={styles.company}>
                    {/* Symbiosis International University */}
                  </Text>
                </View>
                <View
                  style={{ height: 1, backgroundColor: "grey", marginTop: 5 }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 10,
                    fontWeight: "extrabold",
                  }}
                >
                  Address :
                </Text>
                <Text style={{ fontSize: 10, marginTop: 10,fontWeight:'normal' }}>
                  {educ.city}, {educ.country}
                </Text>
              </View>
            </View>
          ))}
</View>)}
          {data.language_skills?.language && (
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "extrabold",
                  paddingTop: 10,
                   flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
              >
                LANGUAGE SKILLS
              </Text>
              <View style={styles.line1} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  flexWrap:'wrap',
                  gap: "5",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 10 }}>Languages Known :</Text>
                <Text style={{ fontSize: 10, fontWeight: "normal",textTransform:'capitalize' }}>
                  {data.language_skills.language}
                </Text>
              </View>

              {/* <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "5",
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 10 }}>Other language :</Text>
                <Text style={{ fontSize: 10, fontWeight: "extrabold",textTransform:'capitalize' }}>
                  {data.language.otherlanguage}
                </Text>
              </View> */}
            </View>
          )}
          {/* <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "extrabold",
                marginTop: 25,
              }}
            >
              
              ADDITIONAL INFORMATION
            </Text>

            <View
              style={{ height: 2, backgroundColor: "grey", marginTop: 2 }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "extrabold",
                marginTop: 10,
              }}
            >
              HOBBIES AND INTERESTS
            </Text>
            <Text style={{ marginTop: 10, fontSize: 12 }}>
            {data.Hobbies}
            </Text>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Home Decor</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Paper Craft</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Traveling</Text>
            </View> */}
          {/* </View> */}
          {!!data.training_awards.length && (
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "extrabold",
                  marginTop: 25,
                }}
              >
                ADDITIONAL INFORMATION
              </Text>
              <View style={styles.line1} />

              <Text
                style={{ marginTop: 10, fontSize: 12, fontWeight: "extrabold" }}
              >
                HONORS AND AWARDS
              </Text>
              {data.training_awards.map((train, index) => (
                <View key={index}>
                  <View style={styles.listItems}>
                    <Text style={styles.listItemDate}>
                      {dateFormatter(train.from_date)} -{" "}
                      {dateFormatter(train.to_date)}
                    </Text>
                    <Text style={styles.listItemTitle}>
                      {train.title}, {train.awarding_institute}, {train.location}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* <Text
            style={{ marginTop: 10, fontSize: 12, fontWeight: "extrabold" }}
          >
           Others
          </Text> */}
          {data.others.length && (
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "extrabold",
                  marginTop: 5,
                }}
              >
                Others
              </Text>
              <View style={styles.line1} />
              {data.others.map((oth, index) => (
                <View key={index}>
                  <View style={styles.listItems}>
                    <Text
                      style={{
                        marginTop: 5,
                        fontSize: 12,
                        fontWeight: "extrabold",
                      }}
                    >
                      {oth.sectiontitle}
                      {/* <Text style={styles.listItemDate}>{oth.mainTitle}</Text> */}
                    </Text>
                    <Text style={styles.listItemDate}>{oth.title}</Text>
                    <Text style={styles.listItemTitle}>{oth.description}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {!!data.driving_license && data.driving_license.length > 0 && (
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "extrabold",
                  marginTop: 10,
                }}
              >
                LICENSE
              </Text>
              <View style={styles.line1} />
              {data.driving_license.map((li, index) => (
                <View key={index}>
                  <View style={styles.listItems}>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        fontWeight: "extrabold",
                      }}
                    >
                      {li.license_type}
                      {/* <Text style={styles.listItemDate}>{oth.mainTitle}</Text> */}
                    </Text>
                    <Text style={styles.listItemDate}>
                      {dateFormatter(li.license_issued_date)} - {dateFormatter(li.license_expiry_date)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
          {/* <View style={{ height: 1, backgroundColor: "grey" }} /> */}

          {/* <View>
            <View style={styles.listItems}>
              <Text style={styles.listItemDate}>01/2019</Text>
              <Text style={styles.listItemTitle}>
                Participated in Liquid Flavours at National Budding Chef’s
                Competition, Auro University
              </Text>
            </View>
            <View style={{ height: 1, backgroundColor: "grey" }} />

            <Text style={styles.headings}>SPECIALISATION</Text>
            <Text style={styles.subheadings}>Primary Skills</Text>
            <View
              style={{ height: 2, backgroundColor: "grey", marginTop: 2 }}
            />
            <View style={styles.listsItems}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>{data.trainingskills}</Text>
            </View>
            <View style={styles.listsItems}>
              <Text style={styles.bulletPoints}>•</Text>
              <Text style={styles.listItemText}>Sandwiches</Text>
            </View>
            <View style={styles.listsItems}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>Customer Interaction</Text>
            </View>

            <Text style={styles.headings}>FOOD SAFETY CERTIFICATION</Text>
            <Text style={styles.date}>2020</Text>
            <Text style={{ fontWeight: "bold", fontSize: 10 }}>Under BSI</Text>
            <View
              style={{ height: 1, backgroundColor: "grey", marginTop: 1 }}
            />

            <View style={styles.listsItems}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>
                HACCP Awareness Training Course
              </Text>
            </View>
            <View style={styles.listsItems}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>
                Contagious Disease Prevention & Control in Kitchens Training
                Course
              </Text>
            </View>
            <View style={styles.listsItems}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.listItemText}>
                Food Safety Management System (FSMS) Internal Auditor Training
                Course (ISO22000)
              </Text>
            </View>
          </View> */}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
