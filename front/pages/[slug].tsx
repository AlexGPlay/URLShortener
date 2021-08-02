import * as React from "react";

import { useRouter } from "next/dist/client/router";
import { realUrl } from "../api/realUrl";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  const [loading, isLoading] = React.useState(false);

  React.useEffect(() => {
    if (!slug) return;

    realUrl(slug as string)
      .then((data) => {
        if (!data.error) {
          const hrefData = data.includes("http") ? data : `https://${data}`;
          window.location.href = hrefData;
        } else {
          router.push("/?error=true");
        }
      })
      .catch(() => router.push("/?error=true"));
  }, [slug]);

  if (loading) return null;
  return <h1>{slug}</h1>;
}
