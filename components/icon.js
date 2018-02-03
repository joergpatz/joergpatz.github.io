import Twitter from "./icons/twitter";
import LinkedIn from "./icons/linkedin";
import Xing from "./icons/xing";
import GitHub from "./icons/github";
import NPM from "./icons/npm";
import Medium from "./icons/medium";
import Instagram from "./icons/instagram";
import Meetup from "./icons/meetup";
import Keybase from "./icons/keybase";
import Email from "./icons/email";

export default ({ name }) => {
  return (
    <i alt={name}>
      {(() => {
        switch (name.toLowerCase()) {
          case "email":
            return <Email />;
          case "github":
            return <GitHub />;
          case "instagram":
            return <Instagram />;
          case "linkedin":
            return <LinkedIn />;
          case "xing":
            return <Xing />;
          case "medium":
            return <Medium />;
          case "meetup":
            return <Meetup />;
          case "npm":
            return <NPM />;
          case "keybase":
            return <Keybase />;
          case "twitter":
            return <Twitter />;
        }
      })()}
    </i>
  );
};
