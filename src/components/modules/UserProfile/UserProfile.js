import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import style from "./UserProfile.module.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section/Section";
import BioBox from "./BioBox";
import CalendlyWidget from "./CalendlyWidget";

import { useUserDataContext } from "../../../context/UserDataContext.js";

export default function UserProfile() {
  const { userData } = useUserDataContext();
  return (
    <div>
      <PageBody>
        <BioBox />
        <div>Profile Image</div>
        <CalendlyWidget />
        <div>{userData.bio}</div>
      </PageBody>
    </div>
  );
}
