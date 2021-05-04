import React from "react";
import { Parallax } from "react-parallax";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import stylesModule from "./style/Parallax.module.scss";
import bckDevelop from "../Assets/images/developer.jpg";
import denoImg from "../Assets/images/deno.svg";
import { FormattedMessage } from "react-intl";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={bckDevelop} strength={500}>
      <div className={stylesModule.parallaxContainer}>
        <div className={stylesModule.insideStyles}>
          <Card className={stylesModule.cardInsideStyles}>
            <img alt="Deno" src={denoImg} className={stylesModule.imageStyle} />
            <CardContent>
              <Typography
                className={"MuiTypography--heading"}
                variant={"subtitle1"}
                align="center"
                color="textSecondary"
              >
                <FormattedMessage
                  id="Parallax.tech"
                  defaultMessage="technology"
                />
              </Typography>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h5"}
                color="secondary"
                align="center"
              >
                Deno JS
              </Typography>
              <Divider light />
            </CardContent>
          </Card>
        </div>
      </div>
    </Parallax>
  );
};
export default ParallaxComponent;
