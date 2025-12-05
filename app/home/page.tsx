
import HomePageClient from "./HomePageClient";

export default async function Page({ searchParams }: { searchParams: any }) {
  const params = await searchParams;

  const lang = params.lang === "Hindi" ? "Hindi" : "English";
  const guru = params.guru || "Sai Baba";

  return <HomePageClient lang={lang} guru={guru} />;
}
