import React from 'react'
import { MdHomeFilled } from 'react-icons/md';
import { MdEditCalendar } from 'react-icons/md';
import { MdSportsTennis } from 'react-icons/md';
import { IoIosStats } from 'react-icons/io';
import { BsBell } from 'react-icons/bs';



export function BottomMenu() {

    return (
        <>
            <div className="bottomMenu">
                <button className="bottomMenuButton"><MdHomeFilled /></button>
                <button className="bottomMenuButton"><MdEditCalendar /></button>
                <button className="bottomMenuButton"><MdSportsTennis /></button>
                <button className="bottomMenuButton"><IoIosStats /></button>
                <button className="bottomMenuButton"><BsBell /></button>
            </div>
        </>
    )
}
