import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  Col,
  Container,
  Row,
} from "reactstrap";

export const AboutPage: React.FunctionComponent = () => {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <Col lg="10" xl="8">
          <Card className="bg-dark opacity-75 shadow-lg border-0 pt-1 mt-4">
            <CardBody className="d-flex flex-column white align-items-center">
              <CardText>
                This weather app project is made for learning purposes.
              </CardText>
            </CardBody>
            <CardFooter className="d-flex justify-content-end white">
              <p className="mt-4" style={{ fontSize: "12px" }}>
                Weather by:{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://openweathermap.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link">OpenWeather</span>
                </a>
              </p>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
