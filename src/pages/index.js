import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello guys</h1>
    <p>I am Amory Delcampe and welcome in here.</p>
    <p>This website is my Curriculum Vitae.</p>
    <p>I hope you'll enjoy it as much as I enjoyed making it.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    
  </Layout>
)

export default IndexPage
