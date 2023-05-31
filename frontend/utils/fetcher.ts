export async function fetcher(url: string, options = {}) {
  let response;

  console.log(url);

  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }

  const data = response.json();
  return data;
}