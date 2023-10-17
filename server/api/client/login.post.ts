import CryptoJS from "crypto-js";
import user from "~/server/models/user";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);

    const response = await user.find({
        email: email,
        password: CryptoJS.SHA256(password).toString()
    })

    if (Array.isArray(response) && response.length > 0) {
        return { message: "Login successful." };
    } else {
        setResponseStatus(event, 401);
        return { message: "Login failed." };
    }
})