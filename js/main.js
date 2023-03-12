const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const boardWidth = canvas.width;
const boardHeight = canvas.height;

window.onload = function () {

}

//////////////////////
//程序入口
////////////////////
function Start() {

}
//生成棋盘数据
function CreateChessData() {
    //1.创建棋盘
    let chessBox = new chessBoard();
    //2.生成一个随机数组
    let chessParts = [];
    let partIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for (let i = 0; i < 64; i++) {
        let partIdx2 = arrayHelper.GetRandQueue(partIdx);
        //let partIdx2 =[3,4];
        for (let j = 0; j < partIdx2.length; j++) {
            //3.获得一个part
            let part0 = partFactory.GetPart(partIdx2[j]);
            part0.id = chessParts.length;
            //4.指定位置填充
            let arrPos = chessBox.GetEmptyPosition();
            let chessPosX = arrPos[0];
            let chessPosY = arrPos[1];
            if (chessBox.insertPart(part0, chessPosX, chessPosY)) {
                //判断是否存在无效的空格
                if (chessBox.CheckInvalidCell()) {
                    chessBox.removePart(part0, chessPosX, chessPosY);
                } else {
                    part0.x0 = chessPosX;
                    part0.y0 = chessPosY;
                    chessParts.push(part0);
                    //只要能插入 就进入下一个
                    break;
                }

            }
        }
    }
    //检查是否还有空格
    if (chessBox.ExistEmptyPosition()) {
        return CreateChessData();
    }

    //console.log(chessBox);
    return chessBox;
}

//变量定义
var rowNumber = 8;
var colNumber = 8;
var m_LineStyleWidth = 0.3;
var m_CircleStyleWidth = 0.05;
var m_BlockCellWidth = 0.7;
var datas = {};
var m_numWord = 16;
var m_wordIndexs = [];
var m_category;

function CreateA4(category) {
    m_category = category;
    //二维码
    let loadImg0 = function () {
        DrawImage('./qr.png', () => {
            toastDlg.Close();
            ShowImageDlg();
        }, [50, 50, 180, 180]);
    }

    var toastDlg = new Toast({
        text: "生成中"
    });
    toastDlg.Show();
    //ctx.clearRect(0,0,boardWidth,boardHeight);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
    WriteText("成语消消乐", 11.0, 2.0, 1.4);

    if (datas[category]) {
        if (category == 1) {
            m_BlockCellWidth = 1.4;
            CreateOneBox(1.5, 6);
            CreateOneBox(16.5, 6);
        }
    } else {
        let urlData = "";
        if (category == 1) {
            urlData = "./data/xiaoxue.txt";
        }
        if (urlData) {
            LoadDictionary(urlData, (str1) => {
                datas[category] = str1.split(';');
                //console.log(datas[category]);
                if (category == 1) {
                    m_BlockCellWidth = 1.4;
                    CreateOneBox(1.5, 6);
                    CreateOneBox(16.5, 6);
                }
            });
        }

    }
    //贴图
    loadImg0();
}

function CreateOneBox(x, y) {
    //1.生成棋盘
    let chess1 = CreateChessData();
    //2.随机获得一组成语
    m_wordIndexs = arrayHelper.GetRandQueueInRange(m_numWord, 0, datas[m_category].length - 1);
    //3.绘制表格
    DrawBlocks(x, y, chess1);
}

//绘制方格
function DrawBlocks(x0, y0, chess1) {
    let x1 = x0;
    let y1 = y0;
    //记录文字的绘制顺序
    let wordSeq = {};
    for (let y = 0; y < chess1.numRow; y++) {
        for (let x = 0; x < chess1.numCol; x++) {
            //1.绘制方格
            DrawOneBlock(x1, y1);
            let str1 = "";
            //2.获得成语的序号
            let idx1 = chess1.boxs[y][x].id;
            let idx2 = m_wordIndexs[idx1];
            //3.获得四字成语
            str1 = datas[m_category][idx2];
            //4.获得成语的某个字
            let idx3 = chess1.boxs[y][x].id2;
            //5.随机绘制顺序
            if(wordSeq[idx1] == undefined){
                wordSeq[idx1] = arrayHelper.RandomInt(0,1);
            }
            if(wordSeq[idx1] == 1){
                //翻转一下顺序
                idx3 = 3 - idx3;
            }
            //6.提取成语的单个词
            str1 = str1[idx3];
            //7.绘制文字
            WriteText(str1, x1 + 0.2 * m_BlockCellWidth, y1 + 0.7 * m_BlockCellWidth, 0.7);
            x1 = x1 + m_BlockCellWidth;
        }
        y1 = y1 + m_BlockCellWidth;
        x1 = x0;
    }
}

//绘制单元格
function DrawOneBlock(x0, y0) {
    DrawLine(x0, y0, x0 + m_BlockCellWidth, y0);
    DrawLine(x0 + m_BlockCellWidth, y0, x0 + m_BlockCellWidth, y0 + m_BlockCellWidth);
    DrawLine(x0 + m_BlockCellWidth, y0 + m_BlockCellWidth, x0, y0 + m_BlockCellWidth);
    DrawLine(x0, y0 + m_BlockCellWidth, x0, y0);
}


//绘制文本
function WriteText(str1, x, y, hei, scale) {
    scale = scale || 60;
    hei = hei * scale;
    let fontHei = hei + "px";
    ctx.font = "normal " + fontHei + " Arial";
    ctx.fillStyle = "#000000";
    let lines = str1.split('\n');
    for (let j = 0; j < lines.length; j++) {
        ctx.fillText(lines[j], x * scale, y * scale + (j * hei));
    }

}

function DrawLine(x1, y1, x2, y2, wid, scale, strColor) {
    scale = scale || 60;
    wid = wid || 0.1;
    ctx.lineWidth = wid * scale;
    ctx.strokeStyle = strColor || "black";
    //开始一个新的绘制路径
    ctx.beginPath();
    ctx.moveTo(x1 * scale, y1 * scale);
    ctx.lineTo(x2 * scale, y2 * scale);
    ctx.lineCap = "square"
    ctx.stroke();
    //关闭当前的绘制路径
    ctx.closePath();
}

function DrawCircle(cx, cy, radius, wid, scale, strColor) {
    scale = scale || 60;
    wid = wid || 0.1;
    ctx.beginPath();
    ctx.arc(cx * scale, cy * scale, radius * scale, 0, 2 * Math.PI, false);
    //ctx.fillStyle = '#9fd9ef';
    //ctx.fill();
    ctx.lineWidth = wid * scale;
    ctx.strokeStyle = strColor || "black";
    ctx.stroke();
    //关闭当前的绘制路径
    ctx.closePath();
}

//显示生成的题目图片，长按保存
function ShowImageDlg() {
    let strImg = "<img ";
    strImg += "src=" + canvas.toDataURL('png', 1.0);
    strImg += " style='width:350px;height:280px;'></img>";
    let dlg1 = new Dialog({
        title: "长按图片，保存下载",
        text: strImg
    });

    dlg1.Show();
}

//绘制图片
function DrawImage(img0, cb, params) {
    let imgObj = new Image();
    imgObj.src = img0;
    imgObj.onload = function () {
        ctx.drawImage(imgObj, params[0], params[1], params[2], params[3]);
        if (typeof cb == "function") {
            cb();
        }
    }
}

//加载字典
function LoadDictionary(url, cb) {
    $.get(url, (e) => {
        if (e) {
            cb(e);
        }
    })
}