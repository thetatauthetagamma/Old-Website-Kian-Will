import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import thtLogo from "../../pictures/tht logo.png";
import "../../css/jobs.scss";
import jobInformation from "./jobs.json";

export default function Jobs() {

    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: { duration: 750 },
    });

    const [jobName, setJobName] = useState("");
    const [searchList, changeSearchList] = useState({});
    const [jobResults, changeJobResults] = useState([]);
    const [changingCompany, setChangingCompany] = useState(false);
    const [intern, setIntern] = useState(true);

    let companyTypes = {};

    Object.keys(jobInformation).map(companyName => {
        if(companyTypes[jobInformation[companyName]["type"]] === undefined) {
            let listOfCompanies = [];
            listOfCompanies.push(companyName);

            companyTypes[jobInformation[companyName]["type"]] = listOfCompanies;
        }
        else {
            companyTypes[jobInformation[companyName]["type"]].push(companyName);
        }
    });

    function addToSearchList(companyName) {

        if(searchList[companyName] !== undefined) {
            let list = searchList;
            delete list[companyName];
            changeSearchList(list);
            setChangingCompany(!changingCompany);
            return
        }

        let list = searchList;
        list[companyName] = true;
        setChangingCompany(!changingCompany);
        changeSearchList(list);
    }

    function addJobTypesToList(jobType) {
        companyTypes[jobType].map(companyName => {
            addToSearchList(companyName);
        })
    }

    function buildCheckbox(jobType) {

        let temp = jobType;
        let capitalized = temp.charAt(0).toUpperCase();
        capitalized += temp.substring(1)

        return(
            <React.Fragment>
                <div className="industry-sliders">

                    <span className="industry-list-name">{capitalized}</span>
                    
                    <span>
                        <label class="switch">
                            <input type="checkbox" onClick={() => {
                                addJobTypesToList(jobType);
                            }}/>
                            <span class="slider round"></span>
                        </label>
                    </span>

                </div>
            </React.Fragment>
        )
    }

    // [meche, tech, etc.]
    let allTypes = Object.keys(companyTypes);

    // All the checkboxes and their corresponding categories
    let jobHTML = [];
    allTypes.map(jobType => {        
        jobHTML.push(buildCheckbox(jobType))
        jobHTML.push(<br />);
    })

    function buildJobLinks(jobName) {

        let list = [];

        Object.keys(searchList).sort().map(companyName => {
            let urlBuild = "";

            if(intern) {
                urlBuild = jobInformation[companyName]["intern"][0];
            }
            else {
                urlBuild = jobInformation[companyName]["fulltime"][0];
            } 

            // Software Engineer --> [Software, Engineer]
            let jobNameSplit = jobName.split(' ');
            let finalString = "";
            jobNameSplit.map(curr => {
                finalString += curr + "%20";
            })

            urlBuild += finalString;

            if(intern) {
                urlBuild += jobInformation[companyName]["intern"][1];
            }
            else {
                urlBuild += jobInformation[companyName]["fulltime"][1];
            }

            list.push(
                <a href={urlBuild} target="_blank">
                    <div className="job-card" >
                        {companyName}
                    </div>
                </a>                
            )
        })

        changeJobResults(list);
    }

    useEffect(() => {
        if(jobName !== ""){
            buildJobLinks(jobName);
        }
    }, [jobName, intern, changingCompany]);

    function searchCompanies(e) {
        e.preventDefault();
        setJobName(e.target[0].value);
    }

    return (
        <React.Fragment>
            <animated.div
                className="jobs-container container-fluid"
                style={fadeIn}
            >

                <div className="job-crawler-header">
                    <img src={thtLogo} height="100px" alt="Theta Tau"/>
                    <h1 className="job-header-text">Theta Tau Job Crawler</h1>
                    <img src={thtLogo} height="100px" alt="Theta Tau"/>
                </div>

                <div className="job-content">

                    <div className="columns col-1">

                        <div className="industries">
                            <p>Select which industries you&nbsp;are&nbsp;interested&nbsp;in</p>
                            {jobHTML}
                        </div>

                    </div>

                    <div className="columns col-2">

                        <form className="search-form" onSubmit={searchCompanies}>
                            <input className="search-bar" type="text" name="name" placeholder="Job Title"/>
                            <button className="search-button" type="submit">Go</button>
                        </form>
                        
                        <div className="intern-fulltime">
                            <span className="toggle-info">Currently looking for <b>{!intern ? "Full Time Jobs" : "Internships"}</b></span>

                            <span>
                                <label class="switch">
                                    <input type="checkbox" onClick={() => {setIntern(!intern)}}/>
                                    <span class="slider round"></span>
                                </label>
                            </span>
                        </div>

                        <div className="job-results">
                            { jobResults }
                        </div>

                    </div>

                </div>

            </animated.div>
            
        </React.Fragment>
    );
}

