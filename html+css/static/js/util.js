Array.prototype.shuffle = function () {
    for (let t, j, i = this.length; i;) {
        j = Math.floor(Math.random() * i); // 在前i项中随机取一项，与第i项交换
        t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
}
