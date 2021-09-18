const { getGraphQLRateLimiter } = require("graphql-rate-limit");
const depthLimitGQL = require("graphql-depth-limit");

const rateLimitGQL = getGraphQLRateLimiter({
  identifyContext: (ctx) => ctx.userData.IP.clientIP,
});

const rateLimiter = async (
  parent,
  args,
  context,
  info,
  reqPerMin = process.env.RATE_LIMIT
) => {
  if (reqPerMin != undefined) {
    const errorMessage = await rateLimitGQL(
      { parent, args, context, info },
      { max: reqPerMin, window: "1m" }
    );

    if (errorMessage) throw new Error(errorMessage);
  }
};

const depthLimiter = () => {
  if (process.env.DEPTH_LIMIT != undefined) {
    return depthLimitGQL(process.env.DEPTH_LIMIT);
  }
  return depthLimitGQL(Infinity);
};

module.exports = { rateLimiter, depthLimiter };
