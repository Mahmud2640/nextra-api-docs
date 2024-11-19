import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ color: "blue", fontSize: "40px", fontWeight: "bold" }}>
      nztrip
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://wa.me/01792492640?text=Hello%20I%20need%20help%20with%20the%20API",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ height: "30px", width: "30px" }}
      />
    ),
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "NZTRIP API Docs",
  },
  banner: {
    key: "1.0-release",
    text: (
      <a href="https://api.mynztrip.com" target="_blank">
        🎉 nztrip 1.0 API is released. Read more →
      </a>
    ),
  },
  
};

export default config;
