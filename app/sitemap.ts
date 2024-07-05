import { MetadataRoute } from "next";

const BASE_URL = "https://devquickui.live";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${BASE_URL}/`,
    },
    {
      url: `${BASE_URL}/section`,
    },
    {
      url: `${BASE_URL}/component`,
    },
    {
      url: `${BASE_URL}/clone`,
    },
  ];
}
