import CryptoJS from 'crypto-js';
import { Client_Session_Token } from '../../../types/types';
import client_session from '~/server/models/client_session';

export default defineEventHandler(async (event): Promise<Client_Session_Token> => {
    const req = event.node.req;
    const userIP = req.headers['x-forwarded-for']!.toString();
    const sessionToken = generateToken(userIP);

    console.log("Date Now => ", Date.now());
    return sessionToken;
})

const generateToken = (userIP: string): Client_Session_Token => {
    const randomString = generateRandomString(32) + "/" + userIP + "/" + Date.now();
    const sessionTokenRaw = CryptoJS.HmacSHA256(randomString, `${userIP}`);

    const sessionToken = {
        token: sessionTokenRaw.toString(),
        validTill: Date.now() + 1000 * 60 * 60 * 24 * 1 // ! 1 day
    }

    const session = new client_session(sessionToken);
    session.save();

    return sessionToken;
}

const generateRandomString = (length: number): string => {
    let randomString = "";
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?:_-@#§$%&()[]{}";

    for (let i = 0; i < length; i++) {
        randomString += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return randomString;
}