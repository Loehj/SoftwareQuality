import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vorlesung Softwarequalität INF19A / INF19B",
  themeConfig: {
    logo: "logo-dhbw.png",
    repo: "https://github.com/Loehj/SoftwareQuality",
    sidebar: [
      {
        text: "Softwaretest und CI/CD",
        children: [
          {
            text: "Einleitung",
            link: "/",
          },
          {
            text: "Risiken und Lösungen von Fachbereichen",
            link: "/risiken-und-loesungen",
          },
          {
            text: "Aufbau der Pipeline",
            link: "/aufbau",
          },
          {
            text: "Stages",
            link: "/stages",
          },
          {
            text: "Vor- und Nachteile",
            link: "/vor-und-nachteile",
          },
        ],
      },
    ],
  },
});
