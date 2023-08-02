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
      publicFolder: "public",
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
            switch (props.document._sys.relativePath) {
              case "home.md":
                return "/";
              case "about-us.md":
                return "/about-us";
            }
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
                    required: true,
                  },
                ],
              },
              {
                name: "contactCta",
                label: "Landing - Contact Us",
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
                    name: "subMessage",
                    type: "rich-text",
                    required: true,
                  },
                  {
                    type: "image",
                    label: "Featured Hero image",
                    name: "imgSrc",
                    required: true,
                  },
                ],
              },
              {
                name: "careersOverview",
                label: "Landing - Featured Jobs",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                    required: true,
                  },
                  {
                    name: "action",
                    label: "Action",
                    type: "string",
                    required: true,
                  },
                ],
              },
              // About Us Page configs
              {
                name: "aboutUsHero",
                label: "About Us - Hero",
                fields: [
                  {
                    name: "message",
                    label: "Message",
                    type: "rich-text",
                    required: true,
                  },
                ],
              },
              {
                name: "coreValues",
                label: "About Us - Core Values",
                fields: [
                  {
                    name: "title",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "values",
                    label: "Core Values",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label };
                      },
                    },
                    fields: [
                      {
                        name: "label",
                        type: "string",
                        required: true,
                      },
                      {
                        name: "description",
                        type: "string",
                        required: true,
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                name: "aboutUsTeam",
                label: "About Us - Our Team",
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "description",
                    label: "Description",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      // Jobs
      {
        name: "job",
        label: "Job",
        path: "content/jobs",
        format: "md",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
            },
          },
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
          },
          {
            name: "company",
            label: "Company Name",
            type: "string",
          },
          {
            name: "level",
            label: "Experience Level",
            type: "string",
            options: [
              "Entry",
              "Junior",
              "Mid-level",
              "Experienced",
              "Senior",
              "Executive",
            ],
          },
          {
            name: "location",
            label: "Location",
            type: "string",
          },
          {
            name: "type",
            label: "Employment Type",
            type: "string",
            options: [
              "Internship",
              "Part-time",
              "Full-time",
              "Contract",
              "Freelance",
            ],
          },
          {
            name: "description",
            label: "Description",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true,
          },
          {
            name: "author",
            label: "Author",
            type: "reference",
            collections: ["employee"],
          },
        ],
      },
      // Employees
      {
        name: "employee",
        label: "Employee",
        path: "content/employees",
        format: "md",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values?.name?.toLowerCase().replace(/ /g, "-")}`;
            },
          },
        },
        fields: [
          {
            name: "name",
            label: "Name",
            type: "string",
            required: true,
          },
          {
            name: "position",
            label: "Position",
            type: "string",
          },
          {
            name: "email",
            label: "Email",
            type: "string",
          },
          {
            name: "handles",
            label: "Handles",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item.name };
              },
            },
            fields: [
              {
                name: "name",
                label: "Handle Name",
                type: "string",
                options: ["Github", "LinkedIn", "X (formerly Twitter)"],
              },
              {
                name: "link",
                label: "Link",
                type: "string",
              },
            ],
          },
          {
            name: "image",
            label: "Image",
            type: "image",
          },
          {
            name: "status",
            label: "Status",
            type: "string",
            options: [
              "Full-Time",
              "Part-Time",
              "Temporary/Contract",
              "Permanent",
              "Probationary",
              "Intern/Trainee",
              "Consultant/Freelancer",
              "Seasonal",
              "On Leave",
              "Retired",
              "Terminated/Resigned",
            ],
            required: true,
          },
        ],
      },
    ],
  },
});
