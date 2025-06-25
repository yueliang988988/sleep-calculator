const { z } = require("zod");

const envSchema = z.object({
  // Specify your environment variables schema here
  // Temporarily commented out for development
  // X_RAPID_API_KEY: z.string().min(1)
});

module.exports.envSchema = envSchema;
