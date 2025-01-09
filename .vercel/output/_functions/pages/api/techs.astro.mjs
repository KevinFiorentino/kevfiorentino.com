export { renderers } from '../../renderers.mjs';

const frontend = {
  name: "Front-end",
  techs: [
    {
      tech: "Angular",
      image: "/tech/1-front-end/angular.webp",
      years: [2020, 2021],
      tier: 1
    }
  ]
};

const backend = {
  name: "Backend",
  techs: [
    {
      tech: "NodeJS",
      image: "/tech/2-backend/nodejs.webp",
      years: [2020, 2021],
      tier: 1
    },
    {
      tech: "Rust",
      image: "/tech/2-backend/rust.webp",
      years: [2020, 2021],
      tier: 2
    }
  ]
};

const blockchain = {
  name: "Blockchain",
  techs: [
    {
      tech: "Solana",
      image: "/tech/7-solana/solana.webp",
      years: [2020, 2021],
      tier: 1
    },
    {
      tech: "Ethereum",
      image: "/tech/7-solana/ethereum.webp",
      years: [2020, 2021],
      tier: 2
    }
  ]
};

const techWrapper = {
  frontend,
  backend,
  blockchain
};

const prerender = false;
const GET = async ({ url }) => {
  const y = url.searchParams.get("year") ?? "current";
  console.log(url);
  console.log(y);
  return new Response(
    JSON.stringify({
      statusCode: 200,
      data: techWrapper
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
