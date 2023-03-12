class arrayHelper {
    //生成随机值
    static RandomInt(min, max) {
        var span = max - min + 1;
        var result = Math.floor(Math.random() * span + min);
        return result;
    }
    //在范围内，生成一定数量不重复的随机数
    static GetRandQueueInRange(n, min, max) {
        let arr = [];
        // 在此处补全代码
        for (let i = 0; i < n; i++) {
            let number = arrayHelper.RandomInt(min, max);
            if (arr.indexOf(number) == -1) { //去除重复项
                arr.push(number);
            }
            else {
                i--;
            }
        }
        return arr;
        //return Array.from({ length: n }, v => arrayHelper.RandomInt(min, max));
    }
    //生成随机队列
    static GetRandQueue(array, size) {
        if (!array) {
            array = new Array();
            for (let i = 0; i < size; i++) {
                array[i] = i;
            }
        }
        let res = [], random;
        let array2 = [...array];
        while (array2.length > 0) {
            random = Math.floor(Math.random() * array2.length);
            res.push(array2[random]);
            array2.splice(random, 1);
        }
        return res;
    }
    //随机生成 同一个宫内的值
    static GetRandPosition(n, size) {
        if (n == undefined || n == null || n == -1) {
            return arrayHelper.RandomInt(0, size - 1);
        }
        else {
            //生成的随机数 不能与 n相同，而且必须在同一个宫中
            let boxn = Math.floor(n / size);
            for (let i = 0; i < 1000; i++) {
                let n2 = arrayHelper.RandomInt(0, size - 1);
                let boxn2 = Math.floor(n2 / size);
                if (n2 != n && boxn == boxn2) {
                    return n2;
                }
            }
        }
        return -1;
    }
}
