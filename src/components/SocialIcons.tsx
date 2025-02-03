import { faBluesky } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "react-bootstrap";
import {
  Linkedin,
  Github,
  TwitterX,
  Mastodon,
  BoxArrowUpRight,
} from "react-bootstrap-icons";

interface SocialIconsProps {
  WebsiteURL?: string;
  LinkedInProfileID?: string;
  GitHubUsername?: string;
  MastodonUsername?: string;
  BlueskyUsername?: string;
  TwitterXUsername?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  WebsiteURL,
  LinkedInProfileID,
  GitHubUsername,
  MastodonUsername,
  BlueskyUsername,
  TwitterXUsername,
}) => {
  return (
    <Stack direction="horizontal" gap={1}>
      {WebsiteURL && (
        <div>
          <a href={WebsiteURL}>
            <BoxArrowUpRight />
          </a>
        </div>
      )}
      {LinkedInProfileID && (
        <div>
          <a href={`https://www.linkedin.com/in/${LinkedInProfileID}`}>
            <Linkedin />
          </a>
        </div>
      )}
      {GitHubUsername && (
        <div>
          <a href={`https://github.com/${GitHubUsername}`}>
            <Github />
          </a>
        </div>
      )}
      {MastodonUsername && (
        <div>
          <a href={`https://mastodon.social/@${MastodonUsername}`}>
            <Mastodon />
          </a>
        </div>
      )}
      {BlueskyUsername && (
        <div>
          <a href={`https://bsky.app/profile/${BlueskyUsername}`}>
          <FontAwesomeIcon icon={faBluesky} />
          </a>
        </div>
      )}
      {TwitterXUsername && (
        <div>
          <a href={`https://twitter.com/${TwitterXUsername}`}>
            <TwitterX />
          </a>
        </div>
      )}
    </Stack>
  );
};

export default SocialIcons;
