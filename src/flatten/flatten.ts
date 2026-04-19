export const flatten = (passedValue: number[]): number[] => {
    if (!Array.isArray(passedValue)) return [];

    return passedValue.reduce((prev: number[], curr: number) => {
        if (Array.isArray(curr)) {
            return [...prev, ...flatten(curr)];
        } else {
            return [...prev, curr];
        }
    }, []);
}

// flatten([1, [2, [3, 4]]]);
