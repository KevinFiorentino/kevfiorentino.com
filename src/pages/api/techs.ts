import type { APIRoute } from 'astro';
import { techWrapper } from '@utils/tech-wrapper';

// Allows SSG route
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const y = url.searchParams.get('year') ?? 'current';
  console.log(url)
  console.log(y)

  return new Response(
    JSON.stringify({
      statusCode: 200,
      data: techWrapper,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
