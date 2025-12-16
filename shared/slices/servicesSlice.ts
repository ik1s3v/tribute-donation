import { createSlice } from "@reduxjs/toolkit";
import { ServiceType } from "../enums";

interface ServicesState {
	services: Record<
		ServiceType,
		{
			active: boolean;
			color: string;
			authPath: string;
			settingsPath: string;
		}
	>;
}

const initialState: ServicesState = {
	services: {
		[ServiceType.Streamelements]: {
			active: false,
			color: "#2701fb",
			authPath: "/streamelements/token",
			settingsPath: "/streamelements/token",
		},
		[ServiceType.TributeBot]: {
			active: false,
			color: "#2693ff",
			authPath: "/telegram-authorization/request-code",
			settingsPath: "/telegram-authorization/request-code",
		},
		[ServiceType.Twitch]: {
			active: false,
			color: "#9147ff",
			authPath: "/twitch/device-code",
			settingsPath: "/services-settings/twitch",
		},
	},
};

export const servicesSlice = createSlice({
	name: "services",
	initialState,
	reducers: {
		setServiceActive: (
			state,
			action: {
				payload: {
					service: ServiceType;
					active: boolean;
				};
			},
		) => {
			state.services[action.payload.service].active = action.payload.active;
		},
	},
});

export const { setServiceActive } = servicesSlice.actions;
