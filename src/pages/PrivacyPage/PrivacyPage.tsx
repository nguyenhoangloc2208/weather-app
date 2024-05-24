import { useTranslation } from "react-i18next";
import Paper from "../../components/Paper/Paper";

export default function PrivacyPage() {
    const { t } = useTranslation();

    const sectionTitleClass = "mt-2 font-medium text-black dark:text-dlight";
    const sectionContentClass = "p-2 font-light text-black dark:text-dlight";

    return(
        <Paper className="mx-auto w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 min-w-[300px] flex h-full flex-col">
            <h2 className={sectionTitleClass}>{t("privacy_policy_page.welcome_message")}</h2>
            <p className={sectionContentClass}>{t("privacy_policy_page.introduction")}</p>

            <h3 className={sectionTitleClass}>{t("privacy_policy_page.personal_information_collection")}</h3>
            <p className={sectionContentClass}>{t("privacy_policy_page.personal_information_collection_details")}</p>

            <h3 className={sectionTitleClass}>{t("privacy_policy_page.personal_information_usage")}</h3>
            <p className={sectionContentClass}>{t("privacy_policy_page.personal_information_usage_details")}</p>

            <h3 className={sectionTitleClass}>{t("privacy_policy_page.personal_information_protection")}</h3>
            <p className={sectionContentClass}>{t("privacy_policy_page.personal_information_protection_details")}</p>

            <h3 className={sectionTitleClass}>{t("privacy_policy_page.contact")}</h3>
            <p className={sectionContentClass}>{t("privacy_policy_page.contact_details")}</p>

            <h3 className={sectionTitleClass}>{t("privacy_policy_page.policy_changes")}</h3>
            <p className={sectionContentClass}>{t("privacy_policy_page.policy_changes_details")}</p>
        </Paper>
    );
}