import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      การเล่นลูกนิ่งนั้นเป็นส่วนหนึ่งของฟุตบอล
      แต่ละจุดที่ได้มีความยากง่ายในการเล่นต่างกัน ตั้งแต่โยนยาว เล่นสั้น
      ยิงไกลข้ามกำแพง ยิงลอดใต้กำแพง
      ก่อนที่นักเตะแต่ละคนจะปล่อยบอลออกจากเท้าต้องคิดแล้วคิดอีก โดยเฉพาะท้ายเกม
      หากแต่มีนักเตะบางคนสามารถเปลี่ยนโอกาสอันน้อยนิดให้เป็นประตูได้
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
