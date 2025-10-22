// Test script to verify the app works with Node.js
import app from './index.js';

// Simulate a Vercel request
const testRequest = {
  method: 'GET',
  url: '/',
  headers: {},
};

// Test the root endpoint
app
  .fetch(testRequest)
  .then((response) => {
    console.log('✅ Root endpoint test passed');
    console.log('Response status:', response.status);
    return response.text();
  })
  .then((text) => {
    console.log('Response body:', text);

    // Test the ping endpoint
    return app.fetch({ ...testRequest, url: '/ping' });
  })
  .then((response) => {
    console.log('✅ Ping endpoint test passed');
    console.log('Response status:', response.status);
    return response.text();
  })
  .then((text) => {
    console.log('Response body:', text);
    console.log('\n✅ All tests passed! The application is ready for Vercel deployment.');
  })
  .catch((error) => {
    console.error('❌ Test failed:', error);
  });
