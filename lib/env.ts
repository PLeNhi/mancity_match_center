const requiredEnv = {
  NEXT_PUBLIC_API_FOOTBALL_KEY: process.env.NEXT_PUBLIC_API_FOOTBALL_KEY,
};

Object.entries(requiredEnv).forEach(([key, value]) => {
  if (!value) {
    console.warn(`⚠️ Missing environment variable: ${key}`);
  }
});
