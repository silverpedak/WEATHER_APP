import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import { setCookie } from "typescript-cookie";

import { getWeatherByCity } from "../../api";

import { ReactComponent as SearchSvg } from "../../assets/images/search.svg";

import { WeatherDetailsPanel } from "./weatherDetails.panel";

type WeatherMain = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
};

type WeatherSys = {
  country: string;
  sunrise: number;
  sunset: number;
  last_updated: number;
};

type WeatherDesc = {
  main: string;
  description: string;
};

type WeatherWind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Weather = {
  main: WeatherMain;
  name: string;
  sys: WeatherSys;
  weather: WeatherDesc[];
  wind: WeatherWind;
};

export const WeatherPage: React.FunctionComponent = () => {
  const [locationUi, setLocationUi] = useState("");
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponseErrorStatus, setApiResponseErrorStatus] = useState(false);
  const [apiResponseError, setApiResponseError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (locationUi === "") return;
    try {
      setIsSubmitting(true);
      const res = await getWeatherByCity(locationUi);
      res.data.sys.last_updated = Date.now();
      setWeatherData(res.data);
      setIsSubmitting(false);
      setApiResponseErrorStatus(false);
      setApiResponseError("");
      setCookie("weatherData", JSON.stringify(res.data), {
        expires: 1,
        sameSite: "Lax",
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setApiResponseErrorStatus(true);
      switch (err.response.status) {
        case 429: {
          setApiResponseError("Too many requests");
          return;
        }
        case 404: {
          setApiResponseError("City not found");
          return;
        }
      }
      setApiResponseError("Something went wrong");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs="10" md="8" lg="6" xl="5">
            <Form onSubmit={onSubmit}>
              <Row>
                <Col xs="12">
                  <FormGroup className="d-flex">
                    <Input
                      id="location"
                      name="location"
                      placeholder="Location"
                      type="text"
                      value={locationUi}
                      onChange={(e) => setLocationUi(e.target.value)}
                      invalid={apiResponseErrorStatus}
                    />
                    <Button color="primary">
                      {isSubmitting ? (
                        <Spinner size="sm"></Spinner>
                      ) : (
                        <SearchSvg />
                      )}
                    </Button>
                  </FormGroup>
                  <FormFeedback></FormFeedback>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center">
                  <p className="apiResponseError">{apiResponseError}</p>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <WeatherDetailsPanel data={weatherData} />
    </>
  );
};
