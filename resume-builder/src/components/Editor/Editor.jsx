import React, { useEffect, useState } from 'react'
import styles from './Editor.module.css'
import { X } from 'lucide-react';
import InputControl from '../InputControl/InputControl';

function Editor(props) {
    const sections = props.sections;
    const information = props.information;


    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);
    const [activeInformation, setActiveInformation] = useState(information[sections[Object.keys(sections)[0]]]);
    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    })

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values }
        tempValues.points[index] = value
        setValues(tempValues)
    }

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    placeholder="Enter your name eg. Mohsin Ali"
                    defaultValue={values.name}
                    onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                />
                <InputControl
                    label="Title"
                    placeholder="Enter your title eg.Frontend Developer"
                    defaultValue={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Linkedin Link"
                    placeholder="Enter your linkedin profile link"
                    defaultValue={values.linkedin}
                    onChange={(event) => setValues((prev) => ({ ...prev, linkedin: event.target.value }))}
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter your github profile link"
                    defaultValue={values.github}
                    onChange={(event) => setValues((prev) => ({ ...prev, gihub: event.target.value }))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    placeholder="Enter your email"
                    defaultValue={values.email}
                    onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                />
                <InputControl
                    label="Enter phone number"
                    placeholder="Enter your phone number"
                    defaultValue={values.phone}
                    onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                />
            </div>
        </div>
    );

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg .Frontend developer"
                    defaultValue={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.title.value }))}
                />
                <InputControl
                    label="Company name"
                    placeholder="Enter company name eg. amazon"
                    defaultValue={values.companyName}
                    onChange={(event) => setValues((prev) => ({ ...prev, companyName: event.target.value }))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certificate link"
                    placeholder="Enter Certificate link"
                    defaultValue={values.certificationLink}
                    onChange={(event) => setValues((prev) => ({ ...prev, certificationLink: event.target.value }))}
                />
                <InputControl
                    label="Enter location"
                    placeholder="Enter location eg. Remote"
                    defaultValue={values.location}
                    onChange={(event) => setValues((prev) => ({ ...prev, location: event.target.value }))}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    defaultValue={values.startDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, startDate: event.target.value }))}
                />
                <InputControl
                    label="End date"
                    type="date"
                    placeholder="Enter end date of work"
                    defaultValue={values.endDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, endDate: event.target.value }))}
                />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl
                    placeholder="Line 1"
                    defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg.chat app"
                    defaultValue={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />

            </div>
            <InputControl
                label="Overwiew"
                placeholder="Enter basic overview of project"
                defaultValue={values.overview}
                onChange={(event) => setValues((prev) => ({ ...prev, overview: event.target.value }))}
            />
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    placeholder="Enter deployed link of project"
                    defaultValue={values.link}
                    onChange={(event) => setValues((prev) => ({ ...prev, link: event.target.value }))}
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter github link project"
                    defaultValue={values.github}
                    onChange={(event) => setValues((prev) => ({ ...prev, github: event.target.value }))}
                />
            </div>

            <div className={styles.column}>
                <label>Enter project descroption</label>
                <InputControl placeholder="Line 1"
                    defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl placeholder="Line 2"
                    defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl placeholder="Line 3"
                    defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl placeholder="Line 4"
                    defaultValue={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter your title eg,BS.CD/BS.IT"
                    defaultValue={values.title}
                    onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))}
                />
            </div>
            <InputControl
                label="College/School Name"
                placeholder="Enter name of your college/student"
                defaultValue={values.college}
                onChange={(event) => setValues((prev) => ({ ...prev, college: event.target.value }))}
            />
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    defaultValue={values.startDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, startDate: event.target.value }))}
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    defaultValue={values.endDate}
                    onChange={(event) => setValues((prev) => ({ ...prev, endDate: event.target.value }))}
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1"
                    defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.value.target, 0)}
                />
                <InputControl placeholder="Line 2"
                    defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.value.target, 1)}
                />
                <InputControl placeholder="Line 3"
                    defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.value.target, 2)}
                />
                <InputControl placeholder="Line 4"
                    defaultValue={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.value.target, 3)}
                />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                placeholder="Enter your objective/summary"
                defaultValue={values.summary}
                onChange={(event) => setValues((prev) => ({ ...prev, summary: event.target.value }))}
            />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                placeholder="Enter something"
                defaultValue={values.other}
                onChange={(event) => setValues((prev) => ({ ...prev, other: event.target.value }))}
            />
        </div>
    );

    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default: return null;
        }
    };

    const handleSubmission = () => {
        switch (sections[activeSectionKey]) {

            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone
                };
                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }))
                break;
            }

            case sections.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.companyName,
                    points: values.points
                };

                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle,
                    }
                }))
                break;
            }

            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points
                };

                const tempDetails = [...information[sections.project]?.details]
                tempDetails[activeDetailIndex] = tempDetail

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...[sections.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }))
                break;
            }

            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };
                const tempDetails = [...information[sections.information]?.details]
                tempDetails[activeDetailIndex] = tempDetail

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...[sections.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }))
                break;
            }

            case sections.achievement: {
                const tempPoints = values.points;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.achievement]: {
                        ...[sections.achievement],
                        points: tempPoints,
                        sectionTitle,
                    },
                }))
                break;
            }

            case sections.summmary: {
                const tempDetail = values.summary;

                props.setResumeInformation((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...[sections.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }))
                break;
            }

            case sections.other:{
                const tempDetail=values.other;
                break;
            }

               
        }
    }

    useEffect(() => {
        const activeInfo = information[sections[activeSectionKey]];
        setActiveInformation(activeInfo);
        setSectionTitle(sections[activeSectionKey]);
        setActiveDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details ? activeInfo?.details[0]?.overview || "" : "",
            link: activeInfo?.details ? activeInfo?.details[0]?.link || "" : "",
            certificationLink: activeInfo?.details ? activeInfo?.details[0]?.certificationLink || "" : "",
            companyName: activeInfo?.details ? activeInfo?.details[0]?.companyName || "" : "",
            location: activeInfo?.details ? activeInfo?.details[0]?.location || "" : "",
            startDate: activeInfo?.details ? activeInfo?.details[0]?.startDate || "" : "",
            endDate: activeInfo?.details ? activeInfo?.details[0]?.endDate || "" : "",
            points: activeInfo?.details ? activeInfo.details[0]?.points ? [...activeInfo.details[0].points] : "" : activeInfo?.points ? [...activeInfo.points] : "",
            title: activeInfo?.details ? activeInfo?.details[0]?.title || "" : activeInfo?.detail?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details ? activeInfo?.details[0]?.github || "" : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            summary:activeInfo?.detail?.summary||"",
            other:activeInfo?.detail?.other||"",
        })

    }, [activeSectionKey, information, sections])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {
                    Object.keys(sections)?.map((key) => (
                        <div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`} key={key}
                            onClick={() => setActiveSectionKey(key)}
                        >
                            {sections[key]}
                        </div>
                    ))
                }
            </div>
            <div className={styles.body}>
                <InputControl
                    label="Title"
                    placeholder="Enter section Title"
                    value={sectionTitle}
                    onChange={(event) => setSectionTitle(event.target.value)}
                />

                <div className={styles.chips}>

                    {
                        activeInformation?.details ? activeInformation?.details?.map((item, index) => (
                            <div className={`${styles.chip} ${activeDetailIndex === index ? styles.active : ""}`}
                                key={item.title + index}
                                onClick={() => setActiveDetailIndex(index)}
                            >
                                <p> {sections[activeSectionKey]} {index + 1}</p>
                                <X />
                            </div>
                        )) : ""
                    }


                </div>

                {generateBody()}

                <button onClick={handleSubmission}>Save</button>
            </div>
        </div>
    )
}

export default Editor
