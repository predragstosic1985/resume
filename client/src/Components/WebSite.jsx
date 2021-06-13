import React, { useState, useCallback } from "react";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ParallaxComponent from "./ParallaxComponent";
import CommentsSection from "./CommentsSection";
import CommentsModal from "./CommentsModal";
import CommentsButton from "./CommentButton";

const WebSite = () => {
  /* eslint-disable no-unused-vars */
  const [selectedTab, setSelectedTab] = useState(null);
  const [openModal, setOpenModal] = useState(false);
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

  const handleOpen = () => {
    setOpenModal(true);
  };

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
      <CommentsButton handleOpen={handleOpen} />
      <CommentsSection />
      <Footer />
      <CommentsModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default WebSite;
