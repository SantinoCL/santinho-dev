import { portfolioHtml } from "@/content/portfolio-html";

export function GET() {
  return new Response(portfolioHtml, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
