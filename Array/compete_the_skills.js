class Solution {
    constructor() {
        this.ca = 0;
        this.cb = 0;
    }
    scores(a, b) {
        for (let i = 0; i < 3; i++) {
            if (a[i] > b[i]) {
                this.ca += 1;
            } else if (a[i] < b[i]) {
                this.cb += 1;
            }
        }
    }
}