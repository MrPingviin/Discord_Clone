import client_session from "../../models/client_session";
import { API_Response } from "../../../types/types";

export default defineEventHandler(async (event): Promise<API_Response | void> => {
    const path = event._path;
    const method = event.node.req.method;
    const token = getHeader(event, "token");

    try {
        console.log("Token => ", token)
        const response = await client_session.find({ token: token });

        if (Array.isArray(response) && response.length > 0) {
            setResponseStatus(event, 200);
            return {
                message: "The session token is valid."
            }
        } else {
            setResponseStatus(event, 401);
            return {
                error: "Unauthorized",
                message: "The session token is invalid."
            }
        }
    } catch (err) {
        setResponseStatus(event, 500);
        return {
            error: "Server Error",
            message: "The backend (database) is down."
        }
    }

})  
