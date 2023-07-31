import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CMS_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_CMS_READ_ONLY_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public/uploads",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: {
          router: (props) => {
            return "/";
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Landing - Welcome Hero",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                    required: true,
                  },
                  {
                    name: "action",
                    label: "Action",
                    type: "string",
                    required: true,
                  },
                  // {
                  //   name: "links",
                  //   label: "Links",
                  //   type: "object",
                  //   list: true,
                  //   fields: [
                  //     {
                  //       name: "link",
                  //       type: "string",
                  //     },
                  //     {
                  //       name: "label",
                  //       type: "string",
                  //     },
                  //     {
                  //       name: "style",
                  //       type: "string",
                  //       options: ["simple", "button"],
                  //     },
                  //   ],
                  // },
                ],
              },
              {
                name: "ourMission",
                label: "Landing - Our Mission",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                    required: true,
                  },
                  {
                    name: "action",
                    label: "Action",
                    type: "string",
                    required: true,
                  },
                  {
                    type: "image",
                    label: "Featured Hero image",
                    name: "imgSrc",
                  },
                ],
              },
            ],
          },
          // {
          //   type: "rich-text",
          //   name: "body",
          //   label: "Body",
          //   isBody: true,
          // },
        ],
        // ui: {
        //   // This is an DEMO router. You can remove this to fit your site
        //   router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        // },
      },
    ],
  },
});
