import type { APIRoute } from 'astro';
import { techWrapper } from '@utils/tech-wrapper';

// Allows SSG route
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const filter = url.searchParams.get('filter') ?? 'all';
  console.log(filter)

  console.log(techWrapper)

  const yearRegex = /^(1[0-9]{3}|2[0-9]{3})$/;
  let result = null;

  if (filter == 'all') {
    result = techWrapper;
  } else if (filter == 'uni') {
    console.log('uni');
  } else if (filter == 'tier') {
    console.log('tier');
  } else if (yearRegex.test(filter)) {
    console.log('YEAR');
    result = techWrapper;
  } else {
    result = techWrapper;
  }

  return new Response(
    JSON.stringify({
      statusCode: 200,
      data: result,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
