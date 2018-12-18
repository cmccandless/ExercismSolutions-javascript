const nums = [...Array(8).keys()];

Array.prototype.equals = function(other) {
    return other &&
        this.length == other.length &&
        this.every((x, i) => x == other[i]);
}

class Queens {
    constructor(pos = {}) {
        this.white = pos.white || [0, 3];
        this.black = pos.black || [7, 3];
        if (this.white.equals(this.black))
            throw new Error('Queens cannot share the same space');
    }
    toString() {
        return nums.map(r =>
            nums.map(c => 
                this.white.equals([r, c]) ? 'W' :
                this.black.equals([r, c]) ? 'B' :
                '_'
            ).join(' ')
        ).join('\n') + '\n';
    }
    canAttack() {
        var d_r = this.white[0] - this.black[0];
        var d_c = this.white[1] - this.black[1];
        return d_r == 0 || d_c == 0 || Math.abs(d_r) == Math.abs(d_c);
    }
}


export default Queens;