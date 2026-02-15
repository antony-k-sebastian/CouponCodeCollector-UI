const Base_URL = import.meta.env.VITE_API_BASE_URL;

import {getAuthHeaders} from "../utils/authUtil";

export async function addCoupon(payload:{
    code: string, 
    description: string, 
    company: string, 
    expiryDate: string, 
    visibility: string, 
    usability: string, 
    usageLimit: number,
}){
    const response = await fetch(`${Base_URL}/api/coupons`, {
        method: "POST", 
        headers: getAuthHeaders(), 
        body: JSON.stringify(payload), 
    });

    if (!response.ok){
        const errorData = await response.text();
        throw new Error(errorData || "Coupon Creation Failed");
    }

    return response.json();
}