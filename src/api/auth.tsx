const Base_URL = import.meta.env.VITE_API_BASE_URL;

export async function register(payload:{
username: string,
email: string,
password: string
}) {
    const response = await fetch(`${Base_URL}/api/users/register`, {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Registration Failed");
    }

    return response.json();
}

export async function login(payload: {
    email: string,
    password: string
}) {
    const response = await fetch(`${Base_URL}/api/users/login`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Login Failed");
    }

    return response.json();
}