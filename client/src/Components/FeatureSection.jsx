import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./Utils/calculateSpacing";
import FeatureCard from "./AdditionalComponents/FeatureCard";
import { FormattedMessage } from "react-intl";
import moduleStyles from "./style/FeatureSection.module.scss";

const iconSize = 30;

const features = [
  {
    color: "#d50000",
    headline: "JavaScript",
    text: (
      <FormattedMessage id="FeatureSection.JS" defaultMessage="JavaScript" />
    ),
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#00C853",
    headline: "NodeJS",
    text: <FormattedMessage id="FeatureSection.node" defaultMessage="Node" />,
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "React",
    text: <FormattedMessage id="FeatureSection.react" defaultMessage="React" />,
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "SAPUI5",
    text: (
      <FormattedMessage id="FeatureSection.sapui5" defaultMessage="sapui5" />
    ),
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#DD2C00",
    headline: "html5, CSS3, bootstrap",
    text: <FormattedMessage id="FeatureSection.html" defaultMessage="html" />,
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#64DD17",
    headline: "modular SASS or CSS",
    text: <FormattedMessage id="FeatureSection.scss" defaultMessage="scss" />,
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200",
  },
  {
    color: "#304FFE",
    headline: "Java",
    text: <FormattedMessage id="FeatureSection.java" defaultMessage="java" />,
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#C51162",
    headline: "Model",
    text: <FormattedMessage id="FeatureSection.model" defaultMessage="model" />,
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#00B8D4",
    headline: "Testing",
    text: (
      <FormattedMessage id="FeatureSection.testing" defaultMessage="testing" />
    ),
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#00B8D4",
    headline: "Postman",
    text: (
      <FormattedMessage id="FeatureSection.postman" defaultMessage="postman" />
    ),
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#00B8D4",
    headline: "Source control",
    text: (
      <FormattedMessage
        id="FeatureSection.control"
        defaultMessage="source control"
      />
    ),
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#00B8D4",
    headline: "Scrum/Agile",
    text: "At my current job, we use Scrum methodology and Jira.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div className={moduleStyles.containerFeature}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          <FormattedMessage
            id="FeatureSection.technologies"
            defaultMessage="technologies"
          />
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(FeatureSection);
