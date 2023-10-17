const userAuthenticator = async (userAuthSuccess: any) => {
    const userToken = localStorage.getItem("sessionToken") || "";

    const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": userToken
        }
    });

    if (!response.ok) {
        window.location.replace("/login");
    } 
}

export default userAuthenticator;