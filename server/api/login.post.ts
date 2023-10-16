export default defineEventHandler( async (event) => {
    // ! Just some code to test the Nuxt's api features.
    const { username, password } = await readBody(event);
    const query = getQuery(event)


    return `Hello ${username}! Your password is ${password}! \n helloParam: ${query.hello}`;
})