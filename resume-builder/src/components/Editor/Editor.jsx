import React, { useState } from 'react'
import styles from './Editor.module.css'
import InputControl from '../InputControl/InputControl';

function Editor(props) {
    const sections = props.sections;
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);
    const workExpBody = (
        <div className={styles.details}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter title eg .Frontend developer"
                />
                <InputControl
                    label="Company name"
                    placeholder="Enter company name eg. amazon"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Certificate link"
                    placeholder="Enter Certificate link"
                />
                <InputControl
                    label="Enter location"
                    placeholder="Enter location eg. Remote"
                />
            </div>
            <div className={styles.row}>
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                />
                <InputControl
                    label="End date"
                    type="date"
                    placeholder="Enter end date of work"
                />
            </div>

            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl placeholder="Line 1" />
                <InputControl placeholder="Line 2" />
                <InputControl placeholder="Line 3" />
            </div>
        </div>
    );

    const projectBody = (
        <div className={styles.details}>
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
                    placeholder="Enter eployed link of project"
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
    )
    const generateBody = () => { };
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
                <InputControl label="Title" placeholder="Enter section Title" />
            </div>
        </div>
    )
}

export default Editor
