import { useEffect, useState } from "react";
import { Card, Container, Col, Row, CardFooter, CardBody } from "reactstrap";
import { getCookie } from "typescript-cookie";
import ReactTimeAgo from "react-time-ago";

import { ReactComponent as ArrowSvg } from "../../assets/images/arrow-down.svg";

import { capitalizeFirstLetter, parseDate, Weather } from "../../common";

import "./custom.css";

interface WeatherDetailsProps {
  data: Weather | null;
}

export const WeatherDetailsPanel: React.FunctionComponent<
  WeatherDetailsProps
> = ({ data }) => {
  const [weatherData, setWeatherData] = useState(data);

  useEffect(() => {
    if (data) {
      setWeatherData(data);
    } else {
      const weatherDataString = getCookie("weatherData");
      if (weatherDataString) {
        setWeatherData(JSON.parse(weatherDataString));
      }
    }
  }, [data]);

  return (
    <>
      {weatherData ? (
        <Container className="">
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <Card className="bg-dark opacity-75 shadow-lg border-0 pt-1 mt-4">
                <CardBody className="d-flex flex-column white align-items-center">
                  <h1 className="mt-1">
                    {weatherData.name}, {weatherData.sys.country}
                  </h1>
                  <h1 className="mt-1">
                    {Math.round(weatherData.main.temp)}°C
                  </h1>
                  <h3 className="mt-1">{weatherData.weather[0].main}</h3>
                  <h3 className="mt-1">
                    <span>{Math.round(weatherData.wind.speed)}m/s </span>
                    <ArrowSvg
                      style={{
                        transform: `rotate(${weatherData.wind.deg}deg)`,
                      }}
                    />
                  </h3>
                </CardBody>
                <CardBody className="mt-4 white">
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <h5>
                        Feels like: {Math.round(weatherData.main.feels_like)}
                        °C
                      </h5>
                    </Col>
                    <Col className="d-flex justify-content-center">
                      <h5>Humidity: {weatherData.main.humidity}%</h5>
                    </Col>
                    <Col className="d-flex justify-content-center">
                      <h5>Sunrise: {parseDate(weatherData.sys.sunrise)}</h5>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col className="d-flex justify-content-center">
                      <h5>
                        {capitalizeFirstLetter(
                          weatherData.weather[0].description
                        )}
                      </h5>
                    </Col>
                    <Col className="d-flex justify-content-center">
                      <h5>Pressure: {weatherData.main.pressure} hPa</h5>
                    </Col>
                    <Col className="d-flex justify-content-center">
                      <h5>Sunset: {parseDate(weatherData.sys.sunset)}</h5>
                    </Col>
                  </Row>
                </CardBody>

                <CardFooter className="d-flex justify-content-between white mt-4">
                  <p style={{ fontSize: "12px" }}>
                    Last updated:{" "}
                    <ReactTimeAgo
                      date={weatherData.sys.last_updated}
                      locale="en-US"
                      timeStyle="twitter"
                    />{" "}
                    ago
                  </p>
                  <p className="" style={{ fontSize: "12px" }}>
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
      ) : (
        <></>
      )}
    </>
  );
};
