import localFont from "next/font/local";

const sfMono = localFont({
    src: [
      {
        path: "./SFMonoBold.woff",
        weight: "700",
        style: "normal",
      },
      {
        path: "./SFMonoHeavy.woff",
        weight: "900",
        style: "normal",
      },
      {
        path: "./SFMonoLight.woff",
        weight: "300",
        style: "normal",
      },
      {
        path: "./SFMonoMedium.woff",
        weight: "500",
        style: "normal",
      },
      {
        path: "./SFMonoRegular.woff",
        weight: "400",
        style: "normal",
      },
      {
        path: "./SFMonoSemibold.woff",
        weight: "600",
        style: "normal",
      },
      // italic
      {
        path: "./SFMonoBoldItalic.woff",
        weight: "700",
        style: "italic",
      },
      {
        path: "./SFMonoHeavyItalic.woff",
        weight: "900",
        style: "italic",
      },
      {
        path: "./SFMonoLightItalic.woff",
        weight: "300",
        style: "italic",
      },
      {
        path: "./SFMonoMediumItalic.woff",
        weight: "500",
        style: "italic",
      },
      {
        path: "./SFMonoRegularItalic.woff",
        weight: "400",
        style: "italic",
      },
      {
        path: "./SFMonoSemiboldItalic.woff",
        weight: "600",
        style: "italic",
      },
    ],
    variable: "--font-sf-mono",
  });

export default sfMono