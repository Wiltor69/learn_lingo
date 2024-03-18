import { Text, Title, Wrapper } from "./ModalLogIn.styled";
import { LogInForm } from "../../LogInForm/LogInForm";

export const ModalLogIn = ({ handleModalToggle }) => {
  return (
    <Wrapper>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <LogInForm handleModalToggle={handleModalToggle} />
    </Wrapper>
  );
};
