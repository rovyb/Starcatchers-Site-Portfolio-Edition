import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useWindowSize } from "react-use";
import { styled } from "@root/stitches.config";
import logo from "@assets/images/logo.png";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "@assets/icons/twitter.svg";
import { ReactComponent as OpenSeaIcon } from "@assets/icons/opensea.svg";

const Background = styled("div", {
  backgroundColor: "$navy",
  position: "sticky",
  top: 0,
  zIndex: 300,
});

const Container = styled("div", {
  padding: "$sm $md",
  maxWidth: "$container",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  "@bp4": {
    margin: "0 auto",
  },
});

const Links = styled("div", {
  marginLeft: "calc($md * -1)",
  width: "100%",
  textAlign: "center",
  position: "absolute",
  top: 76,
  backgroundColor: "$navy",
  fontSize: "$md",
  display: "flex",
  flexDirection: "column",
  "@bp4": {
    order: 2,
    width: "auto",
    background: "none",
    position: "static",
    flexDirection: "row",
    marginLeft: 0,
  },
});

const Link = styled("a", {
  fontFamily: "$starborn",
  textTransform: "uppercase",
  display: "block",
  width: "100%",
  paddingBottom: "$md",
  color: "$cream",
  "&:visited": {
    color: "$cream",
  },
  "&:hover": {
    color: "$creamDark",
  },
  "@bp4": {
    marginRight: "$lg",
    paddingBottom: 0,
    width: "auto",
    display: "inline-block",
    "&:last-child": {
      marginRight: 0,
    },
  },
});

const Logo = styled("div", {
  "& img": {
    height: 60,
  },
  "@bp4": {
    flexGrow: 1,
    flexBasis: 0,
  },
});

const Social = styled("div", {
  display: "flex",
  alignItems: "center",
  "@bp4": {
    flexGrow: 1,
    flexBasis: 0,
    order: 3,
    alignItems: "center",
    textAlign: "right",
    justifyContent: "end",
  },
});

const SocialLink = styled("a", {
  marginRight: "$md",
  color: "$cream",
  "&:visited": {
    color: "$cream",
  },
  "&:hover": {
    color: "$creamDark",
  },
  "@bp4": {
    "&:last-of-type": {
      marginRight: 0,
    },
  },
});

const HamburgerContainer = styled("div", {
  color: "$cream",
  "&:hover": {
    color: "$creamDark",
  },
});

const Gradient = styled("div", {
  position: "absolute",
  height: 230,
  width: "100%",
  background:
    "linear-gradient(180deg, rgba(23,28,48) 12%, rgba(23,28,48,0) 100%)",
});

export const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (showLink && width >= 1000) {
      setShowLink(false);
    }
  }, [width, showLink]);

  return (
    <>
      <Background>
        <Container>
          <Logo>
            <img src={logo} alt="StarcatchersNFT" />
          </Logo>
          <Social>
            <SocialLink
              href="https://opensea.io/collection/starcatchersnft"
              target="_blank"
              rel="noreferrer"
            >
              <OpenSeaIcon height="35px" fill="currentColor" />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/StarcatchersNFT"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon height="35px" fill="currentColor" />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/starcatchersnft"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon height="35px" fill="currentColor" />
            </SocialLink>
            {width < 1000 && (
              <HamburgerContainer>
                <Hamburger
                  color="currentColor"
                  rounded
                  toggled={showLink}
                  toggle={setShowLink}
                />
              </HamburgerContainer>
            )}
          </Social>
          {((showLink && width < 1000) || width >= 1000) && (
            <Links>
              <Link href="#home" onClick={() => setShowLink(false)}>
                Home
              </Link>
              <Link href="#about" onClick={() => setShowLink(false)}>
                About Us
              </Link>
              <Link href="#team" onClick={() => setShowLink(false)}>
                Our Team
              </Link>
            </Links>
          )}
        </Container>
      </Background>
      <Gradient />
    </>
  );
};
