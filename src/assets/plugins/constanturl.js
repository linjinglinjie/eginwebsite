//const PREFIX = 'http://192.168.10.59:8080/eginpms/'
   const PREFIX = '/api'
// const PREFIX = 'http://testing.envirogene.cn/egincheckoa/'
// const PREFIX = 'http://192.168.30.33:38080/egincheckoa/'
// const PREFIX = 'http://192.168.30.44:28080/egincheckoa/'

const baseUrl = {
	PERSONIMG_URL:PREFIX,//baseurl
	LOGIN_URL: PREFIX + '/main/LoginPhoneAction.action', //登录
	PERSONLIST_URL: PREFIX + '/personlist/personlist.action', //个人统计
	PROJECTLIST_URL: PREFIX + '/projectlist/list.action',//项目列表统计
	PROJECTFINDZC_URL: PREFIX + '/projectlist/findZC.action',//项目列表支出合同明细
	PROJECTFINDFY_URL: PREFIX + '/projectlist/findFY.action',//项目列表费用明细
	PROJECTFINDHT_URL: PREFIX + '/projectlist/findHt.action',//收入合同金额
	FINDPOSITION_URL: PREFIX + '/projectlist/findPosition.action',//首页权限
	ORGLIST_URL: PREFIX + '/orglist/orglist.action',//中心统计
	COMLIST_URL: PREFIX + '/comlist/findList.action',//公司统计
	FINDALLORG_URL : PREFIX + '/projectlist/findAllOrg.action',//人员查找带回	 
	FINDPROJECTMEMO_URL : PREFIX + '/projectlist/FindProjectMemo.action', // 项目备注
	FILEPREVIEW_URL : PREFIX + '/public/common/fileload/filePreview.action', //文件预览 接口
	ORGXMGDLIST_URL : PREFIX + '/orglist/orgxmgslist.action',//中心项目统计
	MARKETBONUSSRLIST_URL : PREFIX + '/orglist/marketbonussrlist.action',//查询市场奖金收入明细
	MARKETBONUSZCLIST_URL : PREFIX + '/orglist/marketbonuszclist.action',//查询市场奖金支出明细
}
export { baseUrl }
