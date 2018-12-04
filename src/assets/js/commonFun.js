/*去除字符串空格*/
function Trim(val) {
  return val.replace(/(^\s*)|(\s*$)/g, "");
};
export default {
  Trim
}
