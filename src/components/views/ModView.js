import { Outlet, Route, Routes } from "react-router-dom";
import { DriverDetails } from "../Drivers/DriverDetails.js";
import { TeamDetails } from "../Teams/TeamDetails.js";
import { ScheduleDetails } from "../Schedule/ScheduleDetails.js";
import "./ApplicationViews.css"
import { EditDriver } from "../Edit/EditDriver/EditDriver.js";
import { EditRace } from "../Edit/EditRace/EditRace.js";
import { MyDrivers } from "../MyDrivers/MyDrivers.js";


export const ModViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1>Pole Position</h1>
                        <div className="sub-heading">Your Driver Awaits</div>

                        <Outlet />
                    </>
                }
            >
                <Route path="drivers" element={<DriverDetails />} />

                <Route path="teams" element={<TeamDetails />} />

                <Route path="schedule" element={<ScheduleDetails />} />

                <Route path="myDrivers" element={<MyDrivers />} />

                <Route path="drivers/:driverId" element={<EditDriver />} />
                <Route path="schedule/:raceId" element={<EditRace />} />



            </Route>
        </Routes>
    );
};



