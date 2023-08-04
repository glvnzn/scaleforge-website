import { useState } from "react";

const useSocialLogo = () => {
  const socialLogoData = [
    {
      name: "Facebook",
      imgUrl: "/fb-logo.svg",
      imgUrlLight: "/fb-logo-white.svg",
    },
    {
      name: "LinkedIn",
      imgUrl: "/li-logo.svg",
      imgUrlLight: "/li-logo-white.svg",
    },
    // Add more social media platform data here if needed
  ];

  const [socialLogos, setSocialLogos] = useState(socialLogoData);

  const getImgUrlLightByName = (name: string) => {
    const socialMedia = socialLogos.find((item) => item.name === name);
    return socialMedia ? socialMedia.imgUrlLight : null;
  };

  const getImgUrlByName = (name: string) => {
    const socialMedia = socialLogos.find((item) => item.name === name);
    return socialMedia ? socialMedia.imgUrl : null;
  };

  return { socialLogos, getImgUrlLightByName, getImgUrlByName };
};

export default useSocialLogo;
