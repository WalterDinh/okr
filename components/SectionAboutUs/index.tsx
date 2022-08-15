import React from "react";
import Container from "components/Container";
import Heading from "components/Heading";
import { FaUsers } from "react-icons/fa";
import User from "components/User";
import UserModel from "models/user.model";

const propTypes = {};

const mockUsers = [
  {
    id: 1,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 2,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 3,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 4,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 5,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 6,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 7,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 8,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 9,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
  {
    id: 10,
    name: "Phạm Phú Quý Đôn",
    role: "Junior web developer",
    avatar: "https://picsum.photos/1366/770",
  },
];

const SectionAboutUs = () => {
  //! State

  //! Function

  //! Render
  return (
    <Container className="section-about-us">
      <Heading as="h3" className="mb-heading font-weight-heading">
        <FaUsers /> Về chúng tôi
      </Heading>

      <div className="bosses">
        {mockUsers.slice(0, 2).map((el: UserModel) => (
          <User key={el.id} name={el.name} avatar={el.avatar} role={el.role} />
        ))}
      </div>

      <div className="users">
        {mockUsers.slice(2).map((el: UserModel) => (
          <User key={el.id} name={el.name} avatar={el.avatar} role={el.role} />
        ))}
      </div>
    </Container>
  );
};

SectionAboutUs.propTypes = propTypes;
export default SectionAboutUs;
