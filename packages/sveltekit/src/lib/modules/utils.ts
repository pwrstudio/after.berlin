export function arrayToString(input: string[] | string | undefined): string {
    if (typeof input === "undefined") {
        return "";
    }

    if (typeof input === "string") {
        return input;
    }

    return input.filter((str): str is string => str !== undefined).join(", ");
}