import React from "react";
import { useRouter } from "next/router";
import Container from "components/Container";
import { listRoadMap } from "constants/data";
import { GetStaticProps } from "next";

const propTypes = {};

const Roadmap = (props) => {
  console.log(props);
  //! State

  //! Function

  //! Render
  return <Container className="mt-3">Roadmap</Container>;
};

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = listRoadMap.map((el) => ({
    params: { roadmap: `${el.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  console.log(listRoadMap);
  const roadmap = listRoadMap.find(
    (el: any) => params?.roadmap?.toString() === el.id?.toString()
  );

  // Pass post data to the page via props
  return { props: { roadmap } };
};

Roadmap.propTypes = propTypes;
export default Roadmap;
