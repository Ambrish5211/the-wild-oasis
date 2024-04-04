import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">CheckIn & Out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("Check In")}
              >
                CheckIn
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("CheckOut")}
              >
                CheckOut
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Forms</Heading>
            <Input type="number" placeholder="Number of guests"></Input>
            <Input type="number" placeholder="Number of guests"></Input>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
