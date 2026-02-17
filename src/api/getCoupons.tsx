const Base_URL = import.meta.env.VITE_API_BASE_URL;
import {getAuthHeaders} from "../utils/authUtil";

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

export async function getPrivateCoupons() {
  const response = await fetch(`${Base_URL}/api/coupons/me`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  if (!response.ok){
    throw new Error("Failed to fetch your coupons");
  }

  return response.json();
}
