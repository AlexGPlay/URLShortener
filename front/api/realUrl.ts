import { SERVER_URL } from "./../util/server.const";

export async function realUrl(slug: string) {
  try {
    const response = await fetch(`${SERVER_URL}/shortener/${slug}`);
    const jsonData = await response.json();

    if (jsonData.error) throw new Error();
    return jsonData.data;
  } catch (e) {
    return { error: true };
  }
}
