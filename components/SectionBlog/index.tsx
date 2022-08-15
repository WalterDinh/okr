import React from "react";
import Container from "../Container";
import {
  New,
  NewHighlight,
  NewSecond,
  QuickNew,
} from "components/CommonNews/New";
import Heading from "components/Heading";
import { FaReadme } from "react-icons/fa";

const SectionBlog = () => {
  return (
    <Container className="section-blog">
      <Heading as="h3" className="mb-heading font-weight-heading">
        <FaReadme /> Kiến thức thú zị
      </Heading>

      <div className="blog-container">
        <div className="news">
          <NewHighlight
            author="Donezombie"
            title="Làm thế nào để code đỡ 💩 hơn trong 1 nốt nhạc?"
            image="https://picsum.photos/1366"
            link="https://google.com"
          />
          <NewSecond
            author="Donezombie"
            title="Code noob có xứng đáng ăn đập? Cách trị code noob?"
            image="https://picsum.photos/1366"
            link="https://google.com"
            excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <div className="news-list">
            <New
              author="Donezombie"
              title="Code noob có xứng đáng ăn đập? Cách trị code noob?"
              image="https://picsum.photos/1366/768"
              link="https://google.com"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <New
              author="Donezombie"
              title="Code noob có xứng đáng ăn đập? Cách trị code noob?"
              image="https://picsum.photos/1366/768"
              link="https://google.com"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <New
              author="Donezombie"
              title="Code noob có xứng đáng ăn đập? Cách trị code noob?"
              image="https://picsum.photos/1366/768"
              link="https://google.com"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
        </div>

        <div className="quick-news ">
          <Heading as="h4">Xem nhiều</Heading>
          <div className="quick-news-list">
            <QuickNew
              title="Code noob quá thì sao?"
              image="https://picsum.photos/1366/770"
              author="Donezombie"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              link="https://google.com"
            />
            <QuickNew
              title="Vãi l luôn đầu cắt moi"
              image="https://picsum.photos/1366/770"
              author="Donezombie"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              link="https://google.com"
            />
            <QuickNew
              title="Chơi đi, đừng code nữa"
              image="https://picsum.photos/1366/770"
              author="Donezombie"
              excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              link="https://google.com"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionBlog;
