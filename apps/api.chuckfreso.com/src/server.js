const http = require("http");

const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || "0.0.0.0";
const axieApiUrl = "https://api-gateway.skymavis.com/graphql/axie-marketplace";
const defaultDelegator = "0x673e3fac7aae4f9f8e53cdcfddcee63616b4aa0e";
const pageSize = 100;
const getSkyMavisApiKey = () => (
  process.env.SKY_MAVIS_API_KEY ||
  process.env.X_API_KEY ||
  process.env.X_CODE_API ||
  process.env.REACT_APP_SKY_MAVIS_API_KEY ||
  ""
);

const axieQuery = `
  query GetAxieBriefList(
    $auctionType: AuctionType,
    $criteria: AxieSearchCriteria,
    $criterias: [AxieSearchCriteria!] = [],
    $from: Int,
    $sort: SortBy,
    $size: Int,
    $owner: String,
    $delegationFilters: [TokenDelegationFilter!],
    $includeAxpStatDay: Boolean = false
  ) {
    axies(
      auctionType: $auctionType
      criteria: $criteria
      criterias: $criterias
      from: $from
      sort: $sort
      size: $size
      owner: $owner
      delegationFilters: $delegationFilters
    ) {
      total
      results {
        id
        image
        name
        owner
        bodyShape
        class
        title
        breedCount
        hasMysticSuit
        pureness
        purity
        axpInfo {
          level
          shouldAscend
          xp
          xpToLevelUp
          xpToAscend
          __typename
        }
        battleInfo {
          level
          banned
          __typename
        }
        parts {
          id
          name
          class
          type
          specialGenes
          stage
          __typename
        }
        fortuneSlips {
          total
          __typename
        }
        rep15TokenContexts {
          ctxName
          locked
          userAddress
          __typename
        }
        axpStatDay @include(if: $includeAxpStatDay) {
          totalGainedAxpDay
          axpAxieCapDay
          maxLevel
          __typename
        }
        ownerProfile {
          name
          __typename
        }
        delegationState {
          delegatedAt
          delegatee
          delegateeProfile {
            name
            __typename
          }
          expiryTimestamp
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(`${JSON.stringify(payload)}\n`);
};

const getAxieCriteria = ({ readyToEvolveOnly = false } = {}) => ({
  bodyShapes: null,
  breedCount: null,
  classes: null,
  numJapan: null,
  numMystic: null,
  numShiny: null,
  numSummer: null,
  numXmas: null,
  numNightmare: null,
  parts: null,
  ppAquatic: null,
  ppBeast: null,
  ppBird: null,
  ppBug: null,
  ppDawn: null,
  ppDusk: null,
  ppMech: null,
  ppPlant: null,
  ppReptile: null,
  pureness: null,
  purity: null,
  stages: null,
  title: null,
  primaryColor: null,
  level: null,
  numStage2Parts: null,
  hp: null,
  speed: null,
  skill: null,
  morale: null,
  statuses: readyToEvolveOnly ? ["ReadyToEvolve"] : null
});

const getAxieVariables = (from, options = {}) => {
  const delegator = process.env.AXIE_DELEGATOR_ADDRESS || defaultDelegator;

  return {
    criterias: [],
    includeAxpStatDay: true,
    from,
    sort: "LevelDesc",
    size: pageSize,
    owner: null,
    delegationFilters: [
      {
        delegationStatus: "Delegated",
        delegationAssignee: delegator
      },
      {
        delegator,
        delegationStatus: "Delegated"
      },
      {
        delegationStatus: "Expired",
        delegator
      },
      {
        delegator,
        delegationStatus: "NotDelegated"
      }
    ],
    auctionType: "All",
    criteria: getAxieCriteria(options)
  };
};

const fetchAxiePage = async (from, options = {}) => {
  const response = await fetch(axieApiUrl, {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
      origin: "https://app.axieinfinity.com",
      referer: "https://app.axieinfinity.com/",
      "x-api-key": getSkyMavisApiKey()
    },
    body: JSON.stringify({
      operationName: "GetAxieBriefList",
      variables: getAxieVariables(from, options),
      query: axieQuery
    })
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(`Sky Mavis API returned ${response.status}`);
  }

  if (payload.errors && payload.errors.length) {
    throw new Error(payload.errors[0].message || "Sky Mavis API returned an error.");
  }

  return payload.data && payload.data.axies ? payload.data.axies : { total: 0, results: [] };
};

const fetchAxieCollection = async (options = {}) => {
  if (!getSkyMavisApiKey()) {
    const error = new Error("Missing SKY_MAVIS_API_KEY, X_API_KEY, or X_CODE_API.");
    error.statusCode = 500;
    throw error;
  }

  const allResults = [];
  let nextFrom = 0;
  let expectedTotal = 0;

  do {
    const axiePage = await fetchAxiePage(nextFrom, options);
    const results = axiePage.results || [];
    expectedTotal = axiePage.total || results.length;
    allResults.push(...results);
    nextFrom += pageSize;
  } while (allResults.length < expectedTotal && nextFrom < expectedTotal);

  return {
    total: expectedTotal,
    results: allResults,
    syncedAt: new Date().toISOString()
  };
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": process.env.CORS_ORIGIN || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end();
    return;
  }

  if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/health" || url.pathname === "/api/health")) {
    sendJson(res, 200, {
      ok: true,
      service: "api.chuckfreso.com",
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/axie/collection") {
    try {
      const collection = await fetchAxieCollection({
        readyToEvolveOnly: url.searchParams.get("status") === "ReadyToEvolve"
      });
      sendJson(res, 200, {
        ok: true,
        data: {
          axies: collection
        }
      });
    } catch (error) {
      sendJson(res, error.statusCode || 502, {
        ok: false,
        error: error.message || "Unable to load Axie collection."
      });
    }
    return;
  }

  sendJson(res, 404, {
    ok: false,
    error: "Not found"
  });
});

server.listen(port, host, () => {
  console.log(`API listening on http://${host}:${port}`);
});
