function saveAs(obj, fileName) {//当然可以自定义简单的下载文件实现方式
  var tmpa = document.createElement("a");
  tmpa.download = fileName || "下载";
  tmpa.href = URL.createObjectURL(obj); //绑定a标签
  tmpa.click(); //模拟点击实现下载
  setTimeout(function () { //延时释放
    URL.revokeObjectURL(obj); //用URL.revokeObjectURL()来释放这个object URL
  }, 100);
}
const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };//这里的数据是用来定义导出的格式类型
// const wopts = { bookType: 'csv', bookSST: false, type: 'binary' };//ods格式
// const wopts = { bookType: 'ods', bookSST: false, type: 'binary' };//ods格式
// const wopts = { bookType: 'xlsb', bookSST: false, type: 'binary' };//xlsb格式
// const wopts = { bookType: 'fods', bookSST: false, type: 'binary' };//fods格式
// const wopts = { bookType: 'biff2', bookSST: false, type: 'binary' };//xls格式

function downloadExl(data, type) {
  const wb = { SheetNames: ['Sheet1'], Sheets: {}, Props: {} };
  wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(data);//通过json_to_sheet转成单页(Sheet)数据
  saveAs(new Blob([s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" }), "冻结释放错误数据" + '.' + (wopts.bookType=="biff2"?"xls":wopts.bookType));
}
function s2ab(s) {
  if (typeof ArrayBuffer !== 'undefined') {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  } else {
    var buf = new Array(s.length);
    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
}
export default {
  downloadExl
}
