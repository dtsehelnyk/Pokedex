export const getData = async (url, amount = '') => {
  const data = await fetch(`${url}${amount}`);

  return data.json();
}
