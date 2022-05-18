import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Softwarequalität INF19B - Softwaretest und CI/CD",
  themeConfig: {
    logo: "logo-dhbw.png",
    sidebar: [
      {
        text: "Git ohne Pipeline",
        children: [
          {
            text: "Risiken und Lösungen von Fachbereichen",
            link: "/ohne-pipeline/risiken-und-loesungen",
          },
        ],
      },
      {
        text: "Git mit  CI/CD-Pipeline",
        children: [
          {
            text: "Aufbau der Pipeline",
            link: "/mit-pipeline/aufbau",
          },
          {
            text: "Stages",
            link: "/mit-pipeline/stages",
          },
          {
            text: "Vor- und Nachteile",
            link: "/mit-pipeline/vor-und-nachteile",
          },
        ],
      },
    ],
  },
});
