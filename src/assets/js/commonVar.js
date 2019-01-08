import config from "./config.js"

// 配置接口
var allPort = {
  "active": {
    "qryInvestAccounts": config.domain + "/console/qryInvestAccounts.json",//查询激活账号信息
    "getMainChainInfo": config.domain + "/console/getMainChainInfo.json",//查询链
    "addInvestAccount": config.domain + "/console/addInvestAccount.json",//新增账户
    "updInvestAccount": config.domain + "/console/updInvestAccount.json",//修改账户
  }
}

export default {
  allPort
}
