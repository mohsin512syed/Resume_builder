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
    const [values, setValues] = useState({
        name: activeInformation?.detail?.name||"",
        title: activeInformation?.detail?.title||"",
        linkedin: activeInformation?.detail?.linkedin||"",
        github: activeInformation?.detail?.github||"",
        phone: activeInformation?.detail?.phone||"",
        email: activeInformation?.detail?.email||"",
    })

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Name"
                    placeholder="Enter your name eg. Mohsin Ali"
                />
                <InputControl
                    label="Title"
                    placeholder="Enter your title eg.Frontend Developer"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Linkedin Link"
                    placeholder="Enter your linkedin profile link"
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter your github profile link"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Email"
                    placeholder="Enter your email"
                />
                <InputControl
                    label="Enter phone number"
                    placeholder="Enter your phone number"
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
                />
                <InputControl
                    label="Company name"
                    placeholder="Enter company name eg. amazon"
                    defaultValue={values.companyName}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certificate link"
                    placeholder="Enter Certificate link"
                    defaultValue={values.certificationLink}
                />
                <InputControl
                    label="Enter location"
                    placeholder="Enter location eg. Remote"
                    defaultValue={values.location}
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    defaultValue={values.startDate}
                />
                <InputControl
                    label="End date"
                    type="date"
                    placeholder="Enter end date of work"
                    defaultValue={values.endDate}
                />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl 
                placeholder="Line 1"
                defaultValue={values.points? values.points[0]:""}
                />
                <InputControl
                placeholder="Line 2"
                defaultValue={values.points? values.points[1]:""}
                />
                <InputControl
                placeholder="Line 3"
                defaultValue={values.points? values.points[2]:""}
                />
            </div>
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg.chat app" />
            </div>
            <InputControl
                label="Overwiew"
                placeholder="Enter basic overview of project"
            />
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    placeholder="Enter deployed link of project"
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter github link project"
                />
            </div>

            <div className={styles.column}>
                <label>Enter project descroption</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter your title eg,BS.CD/BS.IT" />
            </div>
            <InputControl
                label="College/School Name"
                placeholder="Enter name of your college/student"
            />
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                />
            </div>
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List your achievements</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
                <InputControl placeholder="Line 4" />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
            <InputControl
                label="Summary"
                placeholder="Enter your objective/summary"
            />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
            <InputControl
                label="Other"
                placeholder="Enter something"
            />
        </div>
    );

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
        setSectionTitle(sections[activeSectionKey]);
    }, [activeSectionKey])

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
                            <div className={styles.chip} key={item.sectionTitle + index}>
                                <p> {sections[activeSectionKey]} {index + 1}</p>
                                <X />
                            </div>
                        )) : ""
                    }


                </div>

                {generateBody()}

                <button>Save</button>
            </div>
        </div>
    )
}

export default Editor
