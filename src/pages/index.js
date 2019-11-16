import React from "react";
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Amory from "../components/atoms/Amory";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Amory/>
    <h1>Hi, I'm Amory.</h1>
    <p>Welcome in here.</p>
    <p>This website is my Curriculum Vitae.</p>
    <p>I hope you'll enjoy it as much as I enjoyed making it.</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    
  </Layout>
)

export default IndexPage
