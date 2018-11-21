/**
 * Created by lihong on 2018/6/25.
 */
/*去除字符串空格*/
function Trim(val)
{
  return val.replace(/(^\s*)|(\s*$)/g, "");
};
/*冻结释放的比例小数位限制*/
function formData(val) {
  val=val.toString();
  var pointIndex=val.indexOf(".");
  var theVal;
  if(pointIndex==-1){//没有小数点 则直接返回数据
    theVal=val;
  }else{//小数
    if(val.length-1-pointIndex>4){//小数位大于4位
      theVal=val.slice(0,pointIndex+5)
    }else{
      theVal=val;
    }
  }
  return theVal;
}
export  default {
  Trim,
  formData
}
