export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608c16a4aa5c292beb66bcd6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1x2ihzr5",
                  apiId: "5c0fbfba-f329-4a8d-bb23-28a018ed828f",
                },
                {
                  buildHookId: "608c16a48f48b3264cfe3370",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uvzc745p",
                  apiId: "0e4e63a6-2746-475f-a08a-5df60f4954e9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/LukasSkerlik/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uvzc745p.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
