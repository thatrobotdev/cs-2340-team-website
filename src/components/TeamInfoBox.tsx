import { Image } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import { StaticImageData } from "next/image";

interface TeamInfoProps {
  name?: string;
  imageSrc?: StaticImageData | string;
  websiteUrl?: string;
  linkedInProfileId?: string;
  githubUsername?: string;
  mastodonUsername?: string;
  blueskyUsername?: string;
  twitterXUsername?: string;
}

const TeamInfo: React.FC<TeamInfoProps> = ({
  name,
  imageSrc,
  websiteUrl,
  linkedInProfileId,
  githubUsername,
  mastodonUsername,
  blueskyUsername,
  twitterXUsername,
}) => {
  return (
    <>
      <Image src={typeof imageSrc === 'string' ? imageSrc : imageSrc?.src} alt={`${name} profile picture`} rounded style={{ height: "100px", width: "100px" }}/>
      <p>{name}</p>
      <SocialIcons
        WebsiteURL={websiteUrl}
        LinkedInProfileID={linkedInProfileId}
        GitHubUsername={githubUsername}
        MastodonUsername={mastodonUsername}
        BlueskyUsername={blueskyUsername}
        TwitterXUsername={twitterXUsername}
      />
    </>
  );
};

export default TeamInfo;
