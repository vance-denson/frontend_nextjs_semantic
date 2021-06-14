import Head from "next/head";
import { Image, Segment } from "semantic-ui-react";
const heroPicture = "/computerDesk.jpg";

import React from "react";

function index() {
  return (
    <>
      <Head>
        <title>Vance's Website</title>
        <meta name="description" content="Welcome to a cool sandbox! Awaken!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={heroPicture}
        size="massive"
        fluid
        fixed
        centered
        dimmer="page"
      />
      <Segment>Hero</Segment>
      <Segment>Call to Action</Segment>
      <Segment>Projects</Segment>
    </>
  );
}

export default index;
