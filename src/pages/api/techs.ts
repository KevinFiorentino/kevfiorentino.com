import type { APIRoute } from 'astro';
import { techWrapper } from '@utils/tech-wrapper';
import type { TechBox } from '@utils/interfaces/tech-box.interface';
import type { Tech } from '@utils/interfaces/tech.interface';
import type { TierResponse } from '@utils/interfaces/tier.interface';

// Allows SSG route
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const filter = url.searchParams.get('filter') ?? 'all';

  const yearRegex = /^(1[0-9]{3}|2[0-9]{3})$/;
  let result = null;

  if (filter == 'all') {
    result = techWrapper;
  } else if (filter == 'uni') {
    result = filterByUniversity();
  } else if (filter == 'tier') {
    result = prepareTierData();
  } else if (yearRegex.test(filter)) {
    result = filterByYear(parseInt(filter));
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

function filterByUniversity(): TechBox[] {
  const result: TechBox[] = techWrapper.map((box: TechBox) => {
    const techsToShow = box.techs.filter((tech: Tech) => tech.years.includes('uni'));
    if (techsToShow.length > 0) {
      return { ...box, techs: techsToShow };
    }
    return null;
  }).filter(Boolean) as TechBox[];
  return result;
}

function prepareTierData(): TierResponse {
  const t1: Tech[] = [];
  const t2: Tech[] = [];
  const t3: Tech[] = [];
  const t4: Tech[] = [];
  const t5: Tech[] = [];
  techWrapper.map((box: TechBox) => {
    box.techs.map((t: Tech) => {
      if (t.tier === 't1') {
        t1.push(t);
      } else if (t.tier === 't2') {
        t2.push(t);
      } else if (t.tier === 't3') {
        t3.push(t);
      } else if (t.tier === 't4') {
        t4.push(t);
      }else if (t.tier === 't5') {
        t5.push(t);
      }
    });
  });
  return {
    tiers: [
      {
        tier: 't1',
        techs: t1,
      },
      {
        tier: 't2',
        techs: t2,
      },
      {
        tier: 't3',
        techs: t3,
      },
      {
        tier: 't4',
        techs: t4,
      },
      {
        tier: 't5',
        techs: t5,
      }
    ]
  }
}
