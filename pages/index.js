import Icon from "../components/icon";
import Layout from "../layout/main";

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

      <section id="social">
        <ul>
          <li>
            <a href="https://twitter.com/joergpatz" rel="me" title="Twitter" className="u-url">
              <Icon name="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joergpatzer" rel="me" title="LinkedIn" className="u-url">
              <Icon name="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="http://www.xing.com/profile/Joerg_Patzer2" rel="me" title="Xing" className="u-url">
              <Icon name="Xing" />
            </a>
          </li>
          <li>
            <a href="https://github.com/joergpatz" rel="me" title="GitHub" className="u-url">
              <Icon name="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/~joergpatz" rel="me" title="npm" className="u-url">
              <Icon name="npm" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@joergpatz" rel="me" title="Medium" className="u-url">
              <Icon name="Medium" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/joergpatz" rel="me" title="Instagram" className="u-url">
              <Icon name="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.meetup.com/members/184183468" rel="me" title="Meetup" className="u-url">
              <Icon name="Meetup" />
            </a>
          </li>
          <li>
            <a href="https://keybase.io/joergpatz" rel="me" title="Keybase" className="u-url">
              <Icon name="Keybase" />
            </a>
          </li>
          <li>
            <a href="mailto:hello@joergpatz.com" rel="me" title="Email" className="u-email">
              <Icon name="Email" />
            </a>
          </li>
        </ul>
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
