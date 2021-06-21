import React, { useState, useCallback } from "react";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ParallaxComponent from "./ParallaxComponent";
import CommentsSection from "./CommentsSection";
import ProjectsDescription from "./ProjectsDescription";

const WebSite = () => {
  /* eslint-disable no-unused-vars */
  const [selectedTab, setSelectedTab] = useState(null);

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(null);

  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  return (
    <>
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        openLoginDialog={openLoginDialog}
        openRegisterDialog={openRegisterDialog}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />

      <HeadSection />
      <FeatureSection />
      <ParallaxComponent />
      <ProjectsDescription />
      <CommentsSection />
      <Footer />
    </>
  );
};

export default WebSite;
