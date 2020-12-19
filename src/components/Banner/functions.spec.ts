import { increment } from "./functions"

describe('Banner Tests', () => {
    it('Increment => Should return start index if current equal limit', () => {
        const start = 2
        const current = 5
        const limit = 5
        const result = increment(start, current, limit)

        expect(result).toBe(start)
    })

    it('Increment => Should return one more from current', () => {
        const start = 2
        const current = 5
        const limit = 10
        const result = increment(start, current, limit)

        expect(result).toBe(current + 1)
    })
})
