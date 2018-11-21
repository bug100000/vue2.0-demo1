/**
 * Created by lihong on 2018/5/7.
 */
// var portUrl="http://10.1.1.116:9090";//靳志
// var portUrl="http://10.1.1.119:9090";//朱
// var portUrl="http://169.254.69.123:9090";//陈日云
var portUrl="https://grttest.dabmall.cn";//测试
// var portUrl="https://grttest.dabmall.cn"
// var portUrl="";
var portStr="console",lockStr="lockCoinRule";
var allPort={
  "active":{//激活管理
    "qryInvestAccounts":portUrl+"/console/qryInvestAccounts.json",//查询激活账号信息
    "getMainChainInfo":portUrl+"/console/getMainChainInfo.json",//查询链
    "addInvestAccount":portUrl+"/console/addInvestAccount.json",//新增账户
    "updInvestAccount":portUrl+"/console/updInvestAccount.json",//修改账户
  },

  "freezeRe":{//冻结释放
    "readExcel":portUrl+"/console/fz/createrule.json",//上传校验
    // "exportExcel":portUrl+"/console1/exportExcel",//导出错误数据
    // "frozenReleaseUserRules":portUrl+"/console1/frozenReleaseUserRules",//查询列表
    // "frozenReleaseRule":portUrl+"/console1/frozenReleaseRule"//上传成功 添加规则
    "rulesList":portUrl+"/console//fz/list.json",//上传成功 添加规则
    "get":portUrl+"/console/fz/get.json",//查询规则，
    "update":portUrl+"/console/fz/update.json",//修改规则
    "selectSource":portUrl+"/console/fz/selectSource.json",//修改规则
    "batchFinish":portUrl+"/console/fz/batchFinish.json",//终止
  },
  "login":portUrl+"/console/login.json",//登陆页面
  "logout":portUrl+"/console/logout.json",//退出登录
  "checkLgoin":portUrl+"/checkLgoin.json",
  "common":{
    "getAppType":portUrl+"/"+portStr+"/getAppType.json",//登陆页面
    "noticeTypeEnmus":portUrl+"/"+portStr+"/noticeTypeEnmus.json",
    "uploadImg":portUrl+"/"+portStr+"/upload.json",//上传图片
    // "uploadImg":portUrl+"/qiniu/test"
    "uploadNotice":portUrl+"/"+portStr+"/uploadNotice.json",
    "allLink":portUrl+"/"+portStr+"/allMainChain.json",//获取所有链
    "allCoin":portUrl+"/"+portStr+"/allSubChain.json",//获取所有的币种
  },
  "notice":{
    "noticeList":portUrl+"/"+portStr+"/noticeList.json",//获取公告列表
    "createNotice":portUrl+"/"+portStr+"/createNotice.json",
    "updateNotice":portUrl+"/"+portStr+"/updateNotice.json",
    "topNotice":portUrl+"/"+portStr+"/topNotice.json",
    "setOrderTop":portUrl+"/"+portStr+"/setOrderTop.json"
  },
  "dispense":{//批量分发
    "getBatchTransfers":portUrl+"/batchTransfer//getBatchTransfers.json",//获取批量分发列表
  },
  "APP":{
    "appContoollists":portUrl+"/"+portStr+"/appContoollists.json",
    "createappControl":portUrl+"/"+portStr+"/createappControl.json",
    "getAppVersion":portUrl+"/"+portStr+"/getAppVersion.json",
    "getAppControl":portUrl+"/"+portStr+"/getAppControl.json",
    "updateAappControl":portUrl+"/"+portStr+"/updateAappControl.json"
  },
  "Pandect":{//首页
    "pandec":portUrl+"/"+portStr+"/pandec.json"
  },
  "role":{
    "roleList":portUrl+"/"+portStr+"/roleList.json",
    "getMembers":portUrl+"/"+portStr+"/getMembers.json",
    "permissionList":portUrl+"/"+portStr+"/permissionList.json",
    "crestedrole":portUrl+"/"+portStr+"/crestedrole.json",
    "updateRole":portUrl+"/"+portStr+"/updateRole.json",
    "getAllRole":portUrl+"/"+portStr+"/getAllRole.json",
    "createMember":portUrl+"/"+portStr+"/createMember.json",
    "updateMember":portUrl+"/"+portStr+"/updateMember.json",
    "rePassWord":portUrl+"/"+portStr+"/rePassWord.json",
    "checkusername":portUrl+"/"+portStr+"/checkusername.json"
  },
  "user":{
    "getCustomers":portUrl+"/"+portStr+"/getCustomers.json",
    "customerPropertyList":portUrl+"/"+portStr+"/customerPropertyList.json",
    "customerProperty":portUrl+"/"+portStr+"/customerProperty.json",
    "customerTransactionList":portUrl+"/"+portStr+"/customerTransactionList.json",
    "customerInfo":portUrl+"/"+portStr+"/customerInfo.json",
    "customerUpd":portUrl+"/"+portStr+"/customerUpd.json",
    "getInviteList":portUrl+"/"+portStr+"/getInviteList.json",
    "customerFreeAmount":portUrl+"/"+portStr+"/customerFreeAmount.json",//获取冻结
  },
  "management":{
    "propertieList":portUrl+"/"+portStr+"/propertieList.json",
    "groupEnmus":portUrl+"/"+portStr+"/groupEnmus.json",
    "createPropertie":portUrl+"/"+portStr+"/createPropertie.json",
    "updaePropertie":portUrl+"/"+portStr+"/updaePropertie.json",
    "deletePropertie":portUrl+"/"+portStr+"/deletePropertie.json"
  },
  "helpManage":{
    "apphelps":portUrl+"/"+portStr+"/apphelps.json",
    "createApphelp":portUrl+"/"+portStr+"/createApphelp.json",
    "updateapphelp":portUrl+"/"+portStr+"/updateapphelp.json",
  },
  /*链配置*/
  "linkSet":{
    "getMainChains":portUrl+"/"+portStr+"/getMainChains.json",//查询链
    "gethandleNames":portUrl+"/"+portStr+"/gethandleNames.json",//链类名
    "checkChainName":portUrl+"/"+portStr+"/checkChainName.json",//校验名称是否重复
    "createMainChain":portUrl+"/"+portStr+"/createMainChain.json",//创建链
    "updateMainChain":portUrl+"/"+portStr+"/updateMainChain.json",//编辑链
    "updateMainChainState":portUrl+"/"+portStr+"/updateMainChainState.json",//设置状态
    "getMainChainMap":portUrl+"/"+portStr+"/getMainChainMap.json"//链下拉框查询
  },
  "moneySet":{
    "getSubChains":portUrl+"/"+portStr+"/getSubChains.json",//币列表
    "createSubChain":portUrl+"/"+portStr+"/createSubChain.json",//新增币
    "updateSubChain":portUrl+"/"+portStr+"/updateSubChain.json",//编辑币
    "updateSubChainState":portUrl+"/"+portStr+"/updateSubChainState.json",//修改币种状态
    "checkCurrency":portUrl+"/"+portStr+"/checkCurrency.json" //校验币种
  },
  "banner":{
    "getBannerList":portUrl+"/"+portStr+"/getBannerList.json",//banner列表
    "addBanner":portUrl+"/"+portStr+"/addBanner.json",//新增banner
    "getClickType":portUrl+"/"+portStr+"/getClickType.json",//获取跳转类型
    "getNotices":portUrl+"/"+portStr+"/getNotices.json",//获取有效公告列表
    "updBanner":portUrl+"/"+portStr+"/updBanner.json",//修改banner
  },
  "lock":{
    "getRulesList":portUrl+"/"+lockStr+"/getRulesList.json",//锁仓查询
    "getChainCoins":portUrl+"/"+portStr+"/getChainCoins.json",//根据链获取相应的币种
    "createRule":portUrl+"/"+lockStr+"/createRule.json",//创建锁仓
    "updateRuleState":portUrl+"/"+lockStr+"/updateRuleState.json",//修改状态
    "recordListByChainCoin":portUrl+"/lockCoinRecord/recordListByChainCoin.json",//获取规则信息
  },
  "pay":{
    "infos":portUrl+"/seller/infos",//查询商家
    "add":portUrl+"/ /add",//添加商家
    "update":portUrl+"/seller/update",//修改商家
    "coinInfo":portUrl+"/sellerCoinInfo/infos",//查询商家币种
    "addCoin":portUrl+"/sellerCoinInfo/add",//新增币种
    "updateCoin":portUrl+"/sellerCoinInfo/update",//编辑币种
    "deleteCoin":portUrl+"/sellerCoinInfo/delete",//删除币种
    "payInfo":portUrl+"/payInfo/infoList",//查询交易记录
    "updateState":portUrl+"/seller/updateState",//设置状态
  },
  "importfr":{
    "readfreeze": portUrl+"/console/fz/readfreeze.json",//导入excel
    "freedData": portUrl+"/console/free/freedData.json",//导入释放
    "freezeDataTemporaryExport":portUrl+"/console/free/freezeDataTemporaryExport.json",//导出excel
    "freezeDataCutPoint":portUrl+"/console/free/freezeDataCutPoint.json",//节点控制
  }
}

export  default {
  allPort,
}
