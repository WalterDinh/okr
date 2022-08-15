import type { NextPage } from "next";
import { Fragment } from "react";
import SectionPresentation from "components/SectionPresentation";
import SectionBlog from "components/SectionBlog";
import SectionMainStack from "components/SectionMainStack";
import SectionTypist from "components/SectionTypist";
import SectionAboutUs from "components/SectionAboutUs";
import FormInputSelect from "components/FormInputSelect";

const Home: NextPage = () => {
  return (
    <Fragment>
      {/* <SectionPresentation /> */}
      <SectionTypist />
      <FormInputSelect/>
      <SectionBlog />
      <SectionAboutUs />
      <SectionMainStack />
    </Fragment>
  );
};

export default Home;
