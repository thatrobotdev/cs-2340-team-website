/*
import Image from "next/image";
import SocialIcons from "./SocialIcons";

interface TeamInfoProps {
  name?: string;
  imageSrc?: string;
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
      {imageSrc && (
        <Image
          src={`${imageSrc}`}
          alt={`${name} profile picture`}
          height={100}
          width={100}
          className="rounded"
        />
      )}
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
*/