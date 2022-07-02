import React, { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { MdEditCalendar } from 'react-icons/md';
import { MdSportsTennis } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoIosStats } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

export function MainMenu() {

    let navigate = useNavigate();

    const routeChange = (e) => {
        setActiveId(prevactiveId => e)
        let path = e;
        navigate(path);
    }
    const [activeId, setActiveId] = useState();

    function shrink() {
        var e = document.getElementById("mm1");
        e.classList.toggle('mmCollapse');
    };

    return (
        <>
            <div className="mainMenu boxShadow" id="mm1">
                <div className="mainMenuCollapse" onClick={shrink}><MdMenu /></div>
                <ul>
                    <li onClick={() => routeChange("Home")}>
                        <div className={(activeId) === 'Home' ? "navLinkBox selected" : "navLinkBox"}  >
                            <div className="navLinkBoxHdr"><MdHomeFilled /></div>
                            <div className="navLinkBoxCnt">Home</div>
                        </div>
                    </li>
                    <li onClick={() => routeChange("Schedule")}>
                        <div className={(activeId) === 'Schedule' ? "navLinkBox selected" : "navLinkBox"}  >
                            <div className="navLinkBoxHdr"><MdEditCalendar /></div>
                            <div className="navLinkBoxCnt">Schedule</div>
                        </div>
                    </li>
                    <li onClick={() => routeChange("Scores")}>
                        <div className={(activeId) === 'Scores' ? "navLinkBox selected" : "navLinkBox"}  >
                            <div className="navLinkBoxHdr"><MdSportsTennis /></div>
                            <div className="navLinkBoxCnt">Scores</div>
                        </div>
                    </li>
                    <li onClick={() => routeChange("Stats")}>
                        <div className={(activeId) === 'Stats' ? "navLinkBox selected" : "navLinkBox"}  >
                            <div className="navLinkBoxHdr"><IoIosStats /></div>
                            <div className="navLinkBoxCnt">Stats</div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}