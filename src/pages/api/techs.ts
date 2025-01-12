import type { APIRoute } from 'astro';
import { techWrapper } from '@utils/tech-wrapper';
import type TechBox from '@utils/interfaces/tech-box.interface';
import type Tech from '@utils/interfaces/tech.interface';

// Allows SSG route
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const filter = url.searchParams.get('filter') ?? 'all';

  console.log('techWrapper', techWrapper)

  const yearRegex = /^(1[0-9]{3}|2[0-9]{3})$/;
  let result = null;

  if (filter == 'all') {
    result = techWrapper;
  } else if (filter == 'uni') {
    console.log('uni');
  } else if (filter == 'tier') {
    console.log('tier');
  } else if (yearRegex.test(filter)) {
    const r = filterByYear(parseInt(filter));
    result = r;
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

function filterByYear(year: number): TechBox[] {
  const result: TechBox[] = techWrapper.map((box: TechBox) => {
    const techsToShow = box.techs.filter((tech: Tech) => tech.years.includes(year));
    if (techsToShow.length > 0) {
      return { ...box, techs: techsToShow };
    }
    return null;
  }).filter(Boolean) as TechBox[];
  return result;
}
