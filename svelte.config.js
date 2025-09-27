import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter()
    // No base path needed for username.github.io repositories
  }
};

export default config;