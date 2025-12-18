import { useTranslation } from "react-i18next";
import { useGetServicesQuery } from "../../../../api/servicesApi";
import ServiceCard from "./components/ServiceCard";

const Services = () => {
	const { t } = useTranslation();
	const { data: services } = useGetServicesQuery();

	return (
		<div>
			<h1>{t("services.title")}</h1>
			{services?.map((service) => (
				<ServiceCard key={service.id} service={service} />
			))}
		</div>
	);
};
export default Services;
