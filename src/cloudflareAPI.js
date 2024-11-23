export async function runAI(model, input) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/e0c371248ae87e4e5b90c02c7fb9be9e/ai/run/${model}`,
    {
      headers: { Authorization: "Bearer HvYoOI2Uh_5Jww_XXAvcCaUIk6xDeG8TpRExMGzB" },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}
