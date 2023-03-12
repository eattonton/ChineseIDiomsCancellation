//单元
class cell {
    constructor() {
        this.id = -1;
        this.id2 = -1;
        this.x = 0;
        this.y = 0;
    }
}
//零件
class part {
    get Count() {
        return this.items.length;
    }
    constructor() {
        //记录单元
        this.items = new Array();
        this.x0 = 0;
        this.y0 = 0;
    }
    Add(x, y, id2) {
        this.items.push(new cell);
        this.items[this.items.length - 1].x = x;
        this.items[this.items.length - 1].y = y;
        this.items[this.items.length - 1].id = this.id;
        this.items[this.items.length - 1].id2 = id2; //写文字的序号
    }
    //根据坐标查找
    Find(x, y) {
        return null;
    }
    get minx() {
        let arr1 = this.items.map(item => { return item.x; });
        return Math.min.apply(null, arr1);
    }
    get miny() {
        let arr1 = this.items.map(item => { return item.y; });
        return Math.min.apply(null, arr1);
    }
    get maxx() {
        let arr1 = this.items.map(item => { return item.x; });
        return Math.max.apply(null, arr1);
    }
    get maxy() {
        let arr1 = this.items.map(item => { return item.y; });
        return Math.max.apply(null, arr1);
    }
}
//零件生成类
class partFactory {
    constructor() {
    }
    static GetPart(idx) {
        switch (idx) {
            case 0:
                return partFactory.part0();
            case 1:
                return partFactory.part1();
            case 2:
                return partFactory.part2();
            case 3:
                return partFactory.part3();
            case 4:
                return partFactory.part4();
            case 5:
                return partFactory.part5();
            case 6:
                return partFactory.part6();
            case 7:
                return partFactory.part7();
            case 8:
                return partFactory.part8();
            case 9:
                return partFactory.part9();
            case 10:
                return partFactory.part10();
            case 11:
                return partFactory.part11();
            case 12:
                return partFactory.part12();
            case 13:
                return partFactory.part13();
            case 14:
                return partFactory.part14();
        }
        return null;
    }
    //----
    static part0() {
        let p1 = new part();
        p1.id = 0;
        p1.Add(0, 0, 0);
        p1.Add(1, 0, 1);
        p1.Add(2, 0, 2);
        p1.Add(3, 0, 3);
        return p1;
    }
    //-
    //-
    //-
    //-
    static part1() {
        let p1 = new part();
        p1.id = 1;
        p1.Add(0, 0, 0);
        p1.Add(0, 1, 1);
        p1.Add(0, 2, 2);
        p1.Add(0, 3, 3);
        return p1;
    }
    //--
    //--
    static part2() {
        let p1 = new part();
        p1.id = 2;
        p1.Add(0, 0, 0);
        p1.Add(1, 0, 1);
        p1.Add(0, 1, 3);
        p1.Add(1, 1, 2);
        return p1;
    }
    //-
    //-
    //--
    static part3() {
        let p1 = new part();
        p1.id = 3;
        p1.Add(0, 0, 2);
        p1.Add(1, 0, 3);
        p1.Add(0, 1, 1);
        p1.Add(0, 2, 0);
        return p1;
    }
    // -
    // -
    //--
    static part4() {
        let p1 = new part();
        p1.id = 4;
        p1.Add(0, 0, 0);
        p1.Add(1, 0, 1);
        p1.Add(1, 1, 2);
        p1.Add(1, 2, 3);
        return p1;
    }
    //--
    //-
    //-
    static part5() {
        let p1 = new part();
        p1.id = 5;
        p1.Add(0, 0, 0);
        p1.Add(0, 1, 1);
        p1.Add(0, 2, 2);
        p1.Add(1, 2, 3);
        return p1;
    }
    //--
    // -
    // -
    static part6() {
        let p1 = new part();
        p1.id = 6;
        p1.Add(0, 0, 0);
        p1.Add(0, 1, 1);
        p1.Add(0, 2, 2);
        p1.Add(-1, 2, 3);
        return p1;
    }
    //-
    //---
    static part7() {
        let p1 = new part();
        p1.id = 7;
        p1.Add(0, 0, 1);
        p1.Add(1, 0, 2);
        p1.Add(2, 0, 3);
        p1.Add(0, 1, 0);
        return p1;
    }
    //  -
    //---
    static part8() {
        let p1 = new part();
        p1.id = 8;
        p1.Add(0, 0, 0);
        p1.Add(1, 0, 1);
        p1.Add(2, 0, 2);
        p1.Add(2, 1, 3);
        return p1;
    }
    //---
    //-
    static part9() {
        let p1 = new part();
        p1.id = 9;
        p1.Add(0, 0, 0);
        p1.Add(0, 1, 1);
        p1.Add(1, 1, 2);
        p1.Add(2, 1, 3);
        return p1;
    }
    //---
    //  -
    static part10() {
        let p1 = new part();
        p1.id = 10;
        p1.Add(-2, 1, 3);
        p1.Add(-1, 1, 2);
        p1.Add(0, 1, 1);
        p1.Add(0, 0, 0);
        return p1;
    }
    // --
    //--
    static part11() {
        let p1 = new part();
        p1.id = 10;
        p1.Add(0, 0, 0);
        p1.Add(1, 0, 1);
        p1.Add(1, 1, 2);
        p1.Add(2, 1, 3);
        return p1;
    }
    //--
    // --
    static part12() {
        let p1 = new part();
        p1.id = 10;
        p1.Add(0, 0, 1);
        p1.Add(1, 0, 0);
        p1.Add(0, 1, 2);
        p1.Add(-1, 1, 3);
        return p1;
    }
    //-
    //--
    // -
    static part13() {
        let p1 = new part();
        p1.id = 10;
        p1.Add(0, 0, 3);
        p1.Add(0, 1, 2);
        p1.Add(-1, 1, 1);
        p1.Add(-1, 2, 0);
        return p1;
    }
    // -
    //--
    //-
    static part14() {
        let p1 = new part();
        p1.id = 10;
        p1.Add(0, 0, 0);
        p1.Add(0, 1, 1);
        p1.Add(1, 1, 2);
        p1.Add(1, 2, 3);
        return p1;
    }
}
class chessBoard {
    constructor() {
        this.numRow = 8;
        this.numCol = 8;
        //二维数组
        this.boxs = new Array();
        for (let y = 0; y < this.numRow; y++) {
            this.boxs.push([]);
            for (let x = 0; x < this.numCol; x++) {
                this.boxs[y].push(new cell());
                this.boxs[y][x].x = x; //column
                this.boxs[y][x].y = y; //row
            }
        }
    }
    //row = y, column = x插入零件 
    insertPart(p1, c, r) {
        let x = c;
        let y = r;
        //1.判断是否能够插入
        for (let i = 0; i < p1.Count; i++) {
            let cell1 = p1.items[i];
            //填充到指定位置的格子
            let x2 = x + cell1.x;
            let y2 = y + cell1.y;
            if (x2 < 0 || x2 >= this.numCol)
                return false;
            if (y2 < 0 || y2 >= this.numRow)
                return false;
            if (this.boxs[y2][x2].id >= 0)
                return false;
        }
        //2.修改指定位置的id值
        for (let i = 0; i < p1.Count; i++) {
            let cell1 = p1.items[i];
            //填充到指定位置的格子
            let x2 = x + cell1.x;
            let y2 = y + cell1.y;
            this.boxs[y2][x2].id = p1.id;
            this.boxs[y2][x2].id2 = cell1.id2;
        }
        return true;
    }
    //去掉添加的零件
    removePart(p1, c, r) {
        let x = c;
        if (x == undefined)
            x = p1.x0;
        let y = r;
        if (y == undefined)
            y = p1.y0;
        for (let i = 0; i < p1.Count; i++) {
            let cell1 = p1.items[i];
            //填充到指定位置的格子
            let x2 = x + cell1.x;
            let y2 = y + cell1.y;
            this.boxs[y2][x2].id = -1;
        }
    }
    //获得可以插入的位置
    GetEmptyPosition() {
        for (let y = 0; y < this.numRow; y++) {
            for (let x = 0; x < this.numCol; x++) {
                if (this.boxs[y][x].id == -1) {
                    return [x, y];
                }
            }
        }
        return [0, 0];
    }
    //判断是否存在空格
    ExistEmptyPosition() {
        for (let y = 0; y < this.numRow; y++) {
            for (let x = 0; x < this.numCol; x++) {
                if (this.boxs[y][x].id == -1) {
                    return true;
                }
            }
        }
        return false;
    }
    //判断是否存在无效的空格
    CheckInvalidCell() {
        for (let y = 0; y < this.numRow; y++) {
            for (let x = 0; x < this.numCol; x++) {
                if (this.boxs[y][x].id == -1) {
                    let arr1 = this.GetNearEmptyCells(x, y);
                    if (arr1.length == 0) {
                        //存在无效的单个格子
                        return true;
                    }
                    else if (arr1.length == 1) {
                        let xy2 = this.GetRowColumn(arr1[0]);
                        let arr2 = this.GetNearEmptyCells(xy2[0], xy2[1]);
                        let pos1 = this.GetCellIndex(x, y);
                        if (arr2.length == 1 && arr2[0] == pos1) {
                            //连续连个格式封闭
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    GetNearEmptyCells(x, y) {
        let arr1 = [];
        //判断是否存在无效空格 四周不存在 -1
        let pt1 = this.GetPosUp(x, y);
        if (pt1.length >= 2 && this.boxs[pt1[1]][pt1[0]].id == -1) {
            arr1.push(this.GetCellIndex(pt1[0], pt1[1]));
        }
        pt1 = this.GetPosDown(x, y);
        if (pt1.length >= 2 && this.boxs[pt1[1]][pt1[0]].id == -1) {
            arr1.push(this.GetCellIndex(pt1[0], pt1[1]));
        }
        pt1 = this.GetPosRight(x, y);
        if (pt1.length >= 2 && this.boxs[pt1[1]][pt1[0]].id == -1) {
            arr1.push(this.GetCellIndex(pt1[0], pt1[1]));
        }
        pt1 = this.GetPosLeft(x, y);
        if (pt1.length >= 2 && this.boxs[pt1[1]][pt1[0]].id == -1) {
            arr1.push(this.GetCellIndex(pt1[0], pt1[1]));
        }
        return arr1;
    }
    GetPosUp(x, y) {
        if (y + 1 < this.numRow) {
            return [x, y + 1];
        }
        return [];
    }
    GetPosDown(x, y) {
        if (y - 1 >= 0) {
            return [x, y - 1];
        }
        return [];
    }
    GetPosRight(x, y) {
        if (x + 1 < this.numCol) {
            return [x + 1, y];
        }
        return [];
    }
    GetPosLeft(x, y) {
        if (x - 1 >= 0) {
            return [x - 1, y];
        }
        return [];
    }
    //根据序号获得坐标
    GetRowColumn(idx) {
        let res = [0, 0];
        res[0] = idx % this.numCol;
        res[1] = Math.floor(idx / this.numCol);
        return res;
    }
    //根据坐标获得序号
    GetCellIndex(x, y) {
        return this.numCol * y + x;
    }
}
