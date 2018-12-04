var portUrl="https://grttest.dabmall.cn";//测试

var allPort={
  "active":{
    "qryInvestAccounts":portUrl+"/console/qryInvestAccounts.json",//查询激活账号信息
    "getMainChainInfo":portUrl+"/console/getMainChainInfo.json",//查询链
    "addInvestAccount":portUrl+"/console/addInvestAccount.json",//新增账户
    "updInvestAccount":portUrl+"/console/updInvestAccount.json",//修改账户
  }
}

export  default {
  allPort
}
