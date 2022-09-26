export const enWithunderLine = (string) => {
    return /^[A-Za-z0-9_]+$/.test(string);
};

export const validateAccount = (string) => {
    return /^[A-Za-z0-9@._]+$/.test(string);
};

export const validatePassword = (string) => {
    return /^[A-Za-z0-9]+$/.test(string);
};
