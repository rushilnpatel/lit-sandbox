export const flatten = (passedValue: any[]): any[] => {
    if (!Array.isArray(passedValue)) return [];

    return passedValue.reduce((prev: any[], curr: any) => {
        if (Array.isArray(curr)) {
            return [...prev, ...flatten(curr)];
        } else {
            return [...prev, curr];
        }
    }, []);
}

// flatten([1, [2, [3, 4]]]);
