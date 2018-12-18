class Triangle {
    constructor(a, b, c) {
        this.sides = [a, b, c];
        this.sides.sort((x, y) => x - y);
    }
    kind() {
        let [a, b, c] = this.sides;
        if (a <= 0 || c > a + b) {
            throw new Error();
        }
        var score = (a == b ? 1 : 0) + (b == c ? 1 : 0);
        return score == 2 ? 'equilateral' :
            score == 1 ? 'isosceles' :
            'scalene';
    }
}

export default Triangle;