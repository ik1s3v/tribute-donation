import usePlayAlert from "../hooks/usePlayAlert";
import AlertView from "../../shared/components/AlertView";

const Alert = () => {
	const { isVisible, currentAlert, currentMessage } = usePlayAlert();
	return (
		currentMessage &&
		currentAlert && (
			<AlertView
				isVisible={isVisible}
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
