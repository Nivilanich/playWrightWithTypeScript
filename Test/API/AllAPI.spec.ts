import { test, expect } from '@playwright/test';
import { Response1 } from '../../APIUtility/ResponseJSON/Response1';
import { Postpayload1 } from '../../APIUtility/Payload/payload1';
import { RootResponse } from '../../APIUtility/ResponseJSON/NestedJson';
test.describe('JSONPlaceholder API Test Suite - Config Driven BaseURL & Full Logging', () => {

  test('GET /posts - fetch all posts', async ({ request, baseURL }) => {
    const endpoint = `${baseURL}/posts`;
    // Initial request to ensure logging captures it
    const response = await request.get(endpoint);

    
    
    const responseBody = await response.text();
    const headers1 = response.headers();
    const url1 = response.url();
    const jsont = await response.json();
    const details1 = response.headersArray();

    console.log('Response Headers:', headers1);
    
    await test.info().attach('GET Request - Endpoint', {
      body: endpoint,
      contentType: 'text/plain',
    });

    await test.info().attach('GET /posts - Response', {
      body: responseBody,
      contentType: 'application/json',
    });

    await test.step('Check response status is 200', async () => {
      expect(response.status()).toBe(200);
    });

    const posts = JSON.parse(responseBody);

    await test.step('Check posts length is greater than 0', async () => {
      expect(posts.length).toBeGreaterThan(0);
    });

    await test.step('Validate each post has required properties', async () => {
      posts.forEach((post: Response1) => {
        expect.soft(post).toHaveProperty('userId');
        expect.soft(post).toHaveProperty('id');
        expect.soft(post).toHaveProperty('title');
      });
    });
  }); 

  test('POST /posts - create a post', async ({ request, baseURL }) => {
    const endpoint = `${baseURL}/posts`;
    const createPayload = new Postpayload1('foo', 'bar', 1);

    await test.info().attach('POST Request - Endpoint', {
      body: endpoint,
      contentType: 'text/plain',
    });

    await test.info().attach('POST Payload', {
      body: JSON.stringify(createPayload, null, 2),
      contentType: 'application/json',
    });

    const response = await request.post('/posts', { data: createPayload });
    const responseBody = await response.text();

    await test.info().attach('POST /posts - Response', {
      body: responseBody,
      contentType: 'application/json',
    });

    expect(response.status()).toBe(201);
    const post = JSON.parse(responseBody);
    expect(post).toHaveProperty('id');
  });

  test('PUT /posts/1 - update a post', async ({ request, baseURL }) => {
    const endpoint = `${baseURL}/posts/1`;
    const updatedPost = {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1
    };

    await test.info().attach('PUT Request - Endpoint', {
      body: endpoint,
      contentType: 'text/plain',
    });

    await test.info().attach('PUT Payload', {
      body: JSON.stringify(updatedPost, null, 2),
      contentType: 'application/json',
    });

    const response = await request.put('/posts/1', { data: updatedPost });
    const responseBody = await response.text();

    await test.info().attach('PUT /posts/1 - Response', {
      body: responseBody,
      contentType: 'application/json',
    });

    expect(response.status()).toBe(200);
    const post = JSON.parse(responseBody);
    expect(post.title).toBe('updated title');
  });

  test('PATCH /posts/1 - partially update a post', async ({ request, baseURL }) => {
    const endpoint = `${baseURL}/posts/1`;
    const patchData = { title: 'patched title' };

    await test.info().attach('PATCH Request - Endpoint', {
      body: endpoint,
      contentType: 'text/plain',
    });

    await test.info().attach('PATCH Payload', {
      body: JSON.stringify(patchData, null, 2),
      contentType: 'application/json',
    });

    const response = await request.patch('/posts/1', { data: patchData });
    const responseBody = await response.text();

    await test.info().attach('PATCH /posts/1 - Response', {
      body: responseBody,
      contentType: 'application/json',
    });

    expect(response.status()).toBe(200);
    const post = JSON.parse(responseBody);
    expect(post.title).toBe('patched title');
  });

  test('DELETE /posts/1 - delete a post', async ({ request, baseURL }) => {
    const endpoint = `${baseURL}/posts/1`;
    const response = await request.delete('/posts/1');
    const responseBody = await response.text();

    await test.info().attach('DELETE Request - Endpoint', {
      body: endpoint,
      contentType: 'text/plain',
    });

    await test.info().attach('DELETE /posts/1 - Response', {
      body: responseBody,
      contentType: 'application/json',
    });

    expect(response.status()).toBe(200);
  });

  test('Verify nested JSON', async ({ request }) => {
  const response = await request.get('/api/user/101');
  expect(response.ok()).toBeTruthy();

  const body: RootResponse = await response.json();

  // Accessing nested fields
  console.log("User Name:", body.user.name);
  console.log("City:", body.user.address.city);

  // Assertion example
  expect(body.user.address.zip).toBe("600001");
});

});