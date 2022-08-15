import React from "react";
import Link from "next/link";
import Heading from "components/Heading";

interface NewI {
  author: string;
  title: string;
  image: string;
  link: string;
  excerpt?: string;
}

export const NewHighlight: React.FC<NewI> = ({
  author,
  title,
  image = "",
  link = "",
}) => {
  return (
    <div className="new-highlight">
      <Link href={link} passHref>
        <div className="image">
          <img src={image} alt="img-new-highlight" />
        </div>
      </Link>

      <div className="content">
        <span className="author">{author}</span>
        <h4 className="title">
          <Link href={link} passHref>
            {title}
          </Link>
        </h4>
      </div>
    </div>
  );
};

export const NewSecond: React.FC<NewI> = ({
  author,
  title,
  image = "",
  link = "",
  excerpt = "",
}) => {
  return (
    <div className="new-second">
      <Link href={link} passHref>
        <div className="image">
          <img src={image} alt="img-new-highlight" />
        </div>
      </Link>

      <div className="content">
        <span className="author">{author}</span>
        <h4 className="title">
          <Link href={link} passHref>
            {title}
          </Link>
        </h4>
        {excerpt && <span className="excerpt">{excerpt}</span>}
      </div>
    </div>
  );
};

export const New: React.FC<NewI> = ({
  author,
  title,
  image = "",
  link = "",
}) => {
  return (
    <div className="new">
      <Link href={link} passHref>
        <div className="image">
          <img src={image} alt="img-new-highlight" />
        </div>
      </Link>

      <div className="content">
        <span className="author">{author}</span>
        <h4 className="title">
          <Link href={link} passHref>
            {title}
          </Link>
        </h4>
      </div>
    </div>
  );
};

export const QuickNew: React.FC<NewI> = ({
  title,
  author,
  excerpt,
  image,
  link,
}) => {
  return (
    <div className="quick-new">
      <Link href={link} passHref>
        <div className="image">
          <img src={image} alt="quick-new" />
        </div>
      </Link>
      <div className="content">
        <Heading as="h4" className="title">
          <Link href={link} passHref>
            {title}
          </Link>
        </Heading>
        <span className="author">{author}</span>
        <span className="excerpt">{excerpt}</span>
      </div>
    </div>
  );
};
