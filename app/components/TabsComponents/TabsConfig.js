import TermsOfService from "./TabContents/TermsOfService";
import TermsOfUse from "./TabContents/TermsOfUse";
import UserAgreement from "./TabContents/UserAgreement";

export const tabs = [
  { name: 'Tab 1', component: <TermsOfService /> },
  { name: 'Tab 2', component: <TermsOfUse /> },
  { name: 'Tab 3', component: <UserAgreement /> },
];
