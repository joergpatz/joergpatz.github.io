import Layout from "../layout/main";
import * as colors from "../layout/colors.js";

export default (props) => (
  <Layout>
    <section id="about">
      <section id="bio" className="h-card">
        <article>
          <p className="p-note">
            I'm <strong className="p-name">Joerg Patzer</strong>,{" "}
            <span className="p-job-title"><em>Senior Software Developer</em></span> working for{" "}
            <strong className="p-org h-card">bitgrip GmbH</strong>{" "}
            in Berlin, Germany.
          </p>
        </article>
      </section>
    </section>

    { /*language=CSS*/ }
    <style jsx>{`
      section {
        margin: 0 auto;
        max-width: 800px;
      }
      p {
        margin: 0.5em;
      }
      #bio {
        margin: 0 auto;
        font-size: 2em;
        text-align: center;
      }
      #bio > p {
        margin: 0;
      }
      #social > ul {
        display: flex;
        list-style-type: none;
        padding-left: 0;
        font-size: 1.5em;
        justify-content: center;
        flex-wrap: wrap;
      }
      #social > ul > li > a {
        color: ${colors.black};
        text-decoration: none;
        margin: 0.5em;
        display: block;
      }
      #about {
        min-height: calc(100vh - 72px);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      @media (min-width: 720px) {
        #bio {
          font-size: 3em;
        }
      }
    `}</style>
  </Layout>
);
