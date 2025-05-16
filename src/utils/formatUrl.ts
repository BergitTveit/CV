export const formatUrl = (
  url: string,
  type: "website" | "social" = "website"
): string => {
  if (!url) return "";

  let formatted = url.replace(/^https?:\/\//, "");

  if (type === "social") {
    formatted = formatted.replace(/\/+$/, "");

    if (formatted.includes("instagram.com/")) {
      formatted = formatted
        .split("instagram.com/")[1]
        .split("/")[0]
        .split("?")[0];
    } else if (formatted.includes("github.com/")) {
      formatted = formatted.split("github.com/")[1].split("/")[0].split("?")[0];
    } else if (formatted.includes("linkedin.com/in/")) {
      formatted = formatted
        .split("linkedin.com/in/")[1]
        .split("/")[0]
        .split("?")[0];
    } else if (formatted.includes("netlify.app")) {
      const match = formatted.match(/^([^.]+)\.netlify\.app/);
      if (match && match[1]) {
        formatted = match[1]; // 👈 this gives you "bergittveit-portfolio"
      } else {
        formatted = ""; // fallback if it doesn't match
      }
    }
  } else {
    formatted = formatted.replace(/^www\./, "");

    formatted = formatted.replace(/\/(index|home)?$/, "");
  }

  return formatted;
};
