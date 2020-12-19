export const increment = (start: number, current: number,limit: number) : number => {
    if (current === limit)
        return start

    return current +1
}

