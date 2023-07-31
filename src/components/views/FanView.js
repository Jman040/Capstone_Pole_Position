import { Outlet, Route, Routes } from "react-router-dom";
import { DriverDetails } from "../Drivers/DriverDetails.js";
import { TeamDetails } from "../Teams/TeamDetails.js";
import { ScheduleDetails } from "../Schedule/ScheduleDetails.js";


export const FanViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1>Pole Position</h1>
                        <div>Your Driver Awaits</div>

                        <Outlet />
                    </>
                }
            >
                <Route path="drivers" element={<DriverDetails />} />

                <Route path="teams" element={<TeamDetails />} />

                <Route path="schedule" element={<ScheduleDetails />} />

                {/* <Route path="myDrivers" element={<MyDrivers />} />  */}


            </Route>
        </Routes>
    );
};