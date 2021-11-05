import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Page not found</h1>
    <p>Oops! The page you are looking for has been removed or relocated.</p>
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        กลับไปหน้าแรก
      </h3>
    </Link>
  </Layout>
)
