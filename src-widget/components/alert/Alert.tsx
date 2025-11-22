import AlertView from "../../../shared/components/AlertView";
import usePlayAlert from "../../hooks/usePlayAlert";

const Alert = () => {
	const { currentAlert, currentDonation } = usePlayAlert();
	return (
		currentDonation &&
		currentAlert && (
			<AlertView
				alert={currentAlert}
				donation={currentDonation}
				width={window.innerWidth}
				height={window.innerHeight}
				imageSrc={`static/${currentAlert.image}`}
			/>
		)
	);
};

export default Alert;
