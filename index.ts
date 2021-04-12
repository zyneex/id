const _chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const id = (length: number = 18, chars: string = _chars) => {
    let result = "";

    for (let i = 0; i < length; i++)
        result += chars[Math.floor(Math.random() * chars.length)];

    return result;
}

export default id;