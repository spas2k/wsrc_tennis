import React, { useContext } from 'react'
import RouterContext from '../context/RouterContext';
import { MdHomeFilled } from 'react-icons/md';
import { MdEditCalendar } from 'react-icons/md';
import { MdSportsTennis } from 'react-icons/md';
import { IoIosStats } from 'react-icons/io';
import { BsBell } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

export function BottomMenu() {

    let navigate = useNavigate();
    const { activeId, setActiveId } = useContext(RouterContext);
    const routeChange = (e) => {
        let path = e;
        setActiveId(path)
        navigate(path);
    }

    return (
        <>
            <div className="bottomMenu">
                <button className={(activeId) === 'Home' ? "bottomMenuButton selected" : "bottomMenuButton"} onClick={() => routeChange("Home")}><MdHomeFilled /></button>
                <button className={(activeId) === 'Schedule' ? "bottomMenuButton selected" : "bottomMenuButton"} onClick={() => routeChange("Schedule")}><MdEditCalendar /></button>
                <button className={(activeId) === 'Scores' ? "bottomMenuButton selected" : "bottomMenuButton"} onClick={() => routeChange("Scores")}><MdSportsTennis /></button>
                <button className={(activeId) === 'Stats' ? "bottomMenuButton selected" : "bottomMenuButton"} onClick={() => routeChange("Stats")}><IoIosStats /></button>
                <button className={(activeId) === 'Alerts' ? "bottomMenuButton selected" : "bottomMenuButton"}><BsBell /></button>
            </div>
        </>
    )
}