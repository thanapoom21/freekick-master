import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 600px;
      padding-top: ${rhythm(1.5)};
      @media (max-width: 640px) {
        margin: 0 2rem;
      }
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        ปั่นโค้งๆ
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
        color: #000;
      `}
    >
      About
    </Link>
    {children}
  </div>
)
