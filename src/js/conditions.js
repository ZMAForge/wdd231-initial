import {setHeaderFooter} from "./setHeaderFooter.mjs";
import { getParkData, getAlertData, getVisitorCenterData, setAlerts, setVisitorCenters } from "./parkService.mjs";
import { getActivitiesData, setActivities } from "./parkService.mjs";
import { parkCode } from "./main";

async function init() {
    const data = await getParkData(parkCode);
    const alerts = await getAlertData(parkCode);
    const center = await getVisitorCenterData(parkCode);
    const actives = await getActivitiesData(parkCode);
    setHeaderFooter(data);
    setAlerts(alerts);
    setVisitorCenters(center);
    setActivities(actives);
}

init();