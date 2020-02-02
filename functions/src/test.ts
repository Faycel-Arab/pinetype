async function myFunction(): Promise<string> {
    try{
        const rank = await getRank();
        return `Yeet! ${rank}`
    }
    catch(err) {
        return err;
    }
}

function getRank(): Promise<number> {
    return Promise.resolve(1);
}
