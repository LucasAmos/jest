import fetch, { Response } from 'node-fetch';

export async function sendPostRequest(body: object) {
  const { WEBHOOK_URL } = process.env;

  const response: Response = await fetch(WEBHOOK_URL, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
}
