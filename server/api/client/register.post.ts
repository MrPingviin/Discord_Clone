import UserModel from '../../models/user';
import { User } from '../../../types/types';
import CryptoJS from 'crypto-js';

export default defineEventHandler(async (event) => {
    const { email, display_name, username, password, birth_month, birth_day, birth_year } = await readBody(event);
    const query = getQuery(event)

    const newUser: User = {
        email: email,
        display_name: display_name,
        username: username,
        password: CryptoJS.SHA256(password).toString(),
        birthday: {
            day: birth_day,
            month: birth_month,
            year: birth_year,
            raw: new Date(`${birth_month}/${birth_day}/${birth_year}`).getTime()
        }
    }
    const user = new UserModel(newUser);
    try {
        await user.save();
        setResponseStatus(event, 200);
        return { message: "User created successfully." }
    } catch (err) {
        return { message: "User creation failed." }
    }
})

