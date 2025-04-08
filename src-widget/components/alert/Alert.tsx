import AlertView from "../../../shared/components/AlertView";
import usePlayAlert from "../../hooks/usePlayAlert";

const Alert = () => {
	const { currentAlert, currentMessage } = usePlayAlert();
	return (
		currentMessage &&
		currentAlert && (
			<AlertView
				alert={currentAlert}
				message={currentMessage}
				width={window.innerWidth}
				height={window.innerHeight}
				imageSrc={`static/${currentAlert.image}`}
			/>
		)
	);
};

export default Alert;
