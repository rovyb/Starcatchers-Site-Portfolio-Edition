import { styled } from "@root/stitches.config";
import { Anchor } from "@components/Anchor";
import { Title } from "@components/Typography/Title";
import { data } from "./data";

const Background = styled("div", {
  padding: "$lg $md",
  background: "$cream",
});

const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  color: "$navy",
});

const Profiles = styled("div", {
  paddingTop: "$xxl",
  "@bp2": {
    display: "flex",
    flexWrap: "wrap",
  },
});

const Profile = styled("div", {
  marginBottom: "$xxl",
  ":last-child": {
    marginBottom: 0,
  },
  "@bp2": {
    display: "flex",
  },
  "@bp4": {
    flexBasis: "50%",
  },
});

const TwitterLink = styled("a", {
  color: "$purple",
  fontSize: "$sm",
  fontFamily: "$rocko",
});

const ProfilePic = styled("div", {
  maxWidth: "65%",
  margin: "0 auto",
  padding: "0 $md $md 0",
  "& img": {
    borderRadius: "$img",
  },
  "@bp2": {
    maxWidth: "100%",
    flexBasis: "38%",
  },
  "@bp4": {
    padding: "0 $lg 0 0",
  },
});

const Details = styled("div", {
  textAlign: "center",
  "@bp2": {
    flexBasis: "62%",
    textAlign: "left",
  },
  "@bp4": {
    paddingRight: "$lg",
  },
});

const Name = styled("div", {
  fontSize: "$md",
  fontFamily: "$starborn",
});

const Role = styled("div", {
  fontSize: "$sm",
  fontFamily: "$rocko",
  textTransform: "uppercase",
  color: "$purple",
  paddingBottom: "$md",
});

const Description = styled("div", {
  fontSize: "$sm",
  paddingBottom: "$md",
  fontFamily: "$rocko",
});

export const Team = () => (
  <>
    <Anchor id="team" />
    <Background>
      <Container>
        <Title style={{ textAlign: "center" }}>our TeAm</Title>
        <Profiles>
          {data.map((member) => (
            <Profile key={member.name}>
              <ProfilePic>
                <img
                  src={member.pfp}
                  alt={`${member.name} Headshot`}
                  target="_blank"
                  rel="noreferrer"
                />
              </ProfilePic>
              <Details>
                <Name>{member.name}</Name>
                <Role>{member.role}</Role>
                <Description>{member.description}</Description>
                <TwitterLink
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {member.twitterHandle}
                </TwitterLink>
              </Details>
            </Profile>
          ))}
        </Profiles>
      </Container>
    </Background>
  </>
);
