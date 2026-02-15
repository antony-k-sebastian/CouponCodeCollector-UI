const Base_URL = import.meta.env.VITE_API_BASE_URL;

export async function getPublicCoupons() {
  const response = await fetch(`${Base_URL}/api/coupons`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch coupons");
  }

  return response.json();
}
