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
          case "twitter":
            return <Twitter />;
          case "linkedin":
            return <LinkedIn />;
          case "xing":
            return <Xing />;
          case "github":
            return <GitHub />;
          case "npm":
            return <NPM />;
          case "medium":
            return <Medium />;
          case "instagram":
            return <Instagram />;
          case "meetup":
            return <Meetup />;
          case "keybase":
            return <Keybase />;
          case "email":
            return <Email />;
        }
      })()}
    </i>
  );
};
