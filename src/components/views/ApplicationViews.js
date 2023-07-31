// import { FanView }

import { FanViews } from "./FanView.js";
import { ModViews } from "./ModView.js";



export const ApplicationViews = () => {
	const localPoleUser = localStorage.getItem("pole_user");
	const poleUserObject = JSON.parse(localPoleUser);

	if (poleUserObject.staff) {
		return <FanViews />;
	} else {
		return <ModViews />;
	}
};

