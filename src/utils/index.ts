export const fetchJson = async (url: string) => {
  try {
    const json = await fetch(url, { method: 'GET' }).then(res => res.json());

    return json;

  } catch (error) {
    console.log(error);
  }
}

export const getTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secnds = Math.floor(seconds - minutes * 60);

  const minuteValue = (minutes < 10) ? `0${minutes}` : minutes;
  const secondValue = (seconds < 10) ? `0${secnds}` : seconds;

  return `${minuteValue} : ${secondValue}`;
}