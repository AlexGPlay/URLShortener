import { SERVER_URL } from "./../util/server.const";

export async function shortenUrl(text: string) {
  try {
    const response = await fetch(`${SERVER_URL}/shortener`, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (e) {
    return { error: "An error has occurred" };
  }
}
