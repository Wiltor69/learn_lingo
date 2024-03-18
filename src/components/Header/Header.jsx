import { Logo } from "../Logo/Logo";
import { HeaderWrapper } from "./Header.styled";
import { Container } from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { AuthNav } from "../AuthNav/AuthNav";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <AuthNav />
      </HeaderWrapper>
    </Container>
  );
};
