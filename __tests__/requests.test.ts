jest.mock('node-fetch');

import fetch from 'node-fetch';
import { sendPostRequest } from '../src/requests';

beforeAll(() => {
  process.env.WEBHOOK_URL = 'https://fakeurl.com/posts';
});

test('sendPostRequest makes request with correct paramenters and returns expected reponse', async () => {
  fetch.mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 1,
          test: 'data',
        }),
    })
  );
  const response = await sendPostRequest({ real: 'data' });
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenLastCalledWith('https://fakeurl.com/posts', {
    body: '{"real":"data"}',
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
  });
  expect(response).toEqual({
    test: 'data',
    id: 1,
  });
});
