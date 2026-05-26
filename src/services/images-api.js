import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
});

export async function fetchImages(query, page) {
  if (!ACCESS_KEY) {
    throw new Error(
      'Unsplash access key is missing. Add VITE_UNSPLASH_ACCESS_KEY to the environment.',
    );
  }

  const { data } = await unsplashApi.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      orientation: 'landscape',
      client_id: ACCESS_KEY,
    },
  });

  return {
    images: data.results,
    totalPages: data.total_pages,
  };
}
