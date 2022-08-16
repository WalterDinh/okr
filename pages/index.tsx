import type { NextPage } from "next";
import { Fragment, useEffect } from "react";
import SectionPresentation from "components/SectionPresentation";
import SectionBlog from "components/SectionBlog";
import SectionMainStack from "components/SectionMainStack";
import SectionTypist from "components/SectionTypist";
import SectionAboutUs from "components/SectionAboutUs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  return (
    <Fragment>
      {/* <SectionPresentation /> */}
      <SectionTypist />
      <SectionBlog />
      <SectionAboutUs />
      <SectionMainStack /> */}
    </Fragment>
  );
};

export async function getServerSideProps({ params, locale }: any) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common", "header"])),
    },
  };
}

export default Home;
