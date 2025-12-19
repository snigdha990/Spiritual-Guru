
import HomePageClient from "./HomePageClient";

export default async function Page({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const guru = params.guru || "Sai Baba";

  return <HomePageClient  guru={guru} />;
}
