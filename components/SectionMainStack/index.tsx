import React, { ReactNode } from "react";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import Container from "components/Container";
import Heading from "components/Heading";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const propTypes = {};

interface EachStackI {
  icon: ReactNode;
  label: string;
  colorIcon: string;
  link: string;
}

const EachStack: React.FC<EachStackI> = ({
  icon,
  label = "",
  colorIcon = "",
  link = "",
}) => {
  return (
    <Link href={link} passHref>
      <a>
        <div className="stack wow fadeIn">
          <div className="stack__icon" style={{ color: colorIcon }}>
            {icon}
          </div>
          <div className="stack__name">{label}</div>
        </div>
      </a>
    </Link>
  );
};

const SectionMainStack = () => {
  //! State

  //! Function

  //! Render
  return (
    <Container className="section-main-stack">
      <Heading as="h3" className="mb-heading font-weight-heading">
        <GrTechnology /> Công nghệ
      </Heading>

      <div className="stacks">
        <EachStack
          icon={<SiJavascript />}
          label="Javascript"
          colorIcon="#F3DE2B"
          link="/roadmap/js"
        />
        <EachStack
          icon={<SiTypescript />}
          label="Typescript"
          colorIcon="#2E78C8"
          link="/roadmap/ts"
        />
        <EachStack
          icon={<FaReact />}
          label="React"
          colorIcon="#60DBFB"
          link="/roadmap/react"
        />
        <EachStack
          icon={<FaReact />}
          label="React native"
          colorIcon="#60DBFB"
          link="/roadmap/react-native"
        />
      </div>
    </Container>
  );
};

SectionMainStack.propTypes = propTypes;
export default SectionMainStack;
