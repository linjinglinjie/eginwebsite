<template>
	 <div class="xw">
        <div class="xw-con">
           <div class="yw-title"><a><em class="first"></em><span>新闻资讯</span><em class="last"></em></a></div>
           <div class="xw-left">
           		<div class="focusBox">			
           			<ul class="pic">					
           				<li>
           					<a href="" target="_blank"><img src="../assets/images/new1.png"></a>
           				</li>					
           				<li>
           				<a href="" target="_blank"><img src="../assets/images/new2.png"></a>
           				</li>					
           				<li>
           				<a href="" target="_blank"><img src="../assets/images/new3.png"></a>
           				</li>					
           				<li>
           				<a href="" target="_blank"><img src="../assets/images/new4.png"></a>
           				</li>			
           				</ul>			
           				<div class="txt-bg"></div>			
           				<div class="txt">				
           				<ul>					
           				<li style="bottom: 0px;"><a href="#">我公司召开场地环境调查项目专家论证评审会</a></li>					
           				<li style="bottom: -36px;"><a href="#">土壤污染防治行动计划</a></li>					
           				<li style="bottom: -36px;"><a href="#">污染地块土壤环境管理办法（试行）</a></li>					
           				<li style="bottom: -36px;"><a href="#">环保部发布4项土壤检测标准 涉GC-MS及微波消解</a></li>				
           				</ul>			
           				</div>			
           				<ul class="num">				
           				<li class="on"><a></a></li>				
           				<li class=""><a></a></li>				
           				<li class=""><a></a></li>				
           				<li class=""><a></a></li>			
           				</ul>	
           				</div>
           </div>
           <div class="xw-right">
           <div class="xw-li">
             <ul>
              <!--<li><p class="dateTime"><fmt:formatDate value="${bean.publishDate}" pattern="yyyy-MM-dd" type="date" dateStyle="long" /></p>
              <a title="${bean.title}" href="searchInfo/detailInfoAction.action?id=${bean.id}">
              <h2><span style="color: #5b5b5b;">
              		<c:if test="${fn:length(bean.title)>=20}">
				    	${fn:substring(bean.title,0,20)}...
				    </c:if>
				    <c:if test="${fn:length(bean.title)<20}">
				    	${bean.title}
				    </c:if>
				   </a>
			</span></h2>
			<p class="descript">
				${bean.ext3}...
			</p>
              </li>-->
             </ul>
           </div>
           <div class="xw-btn">
            <a href="<%=basePath%>pagehome/jumpAction.action?pagebean.fromPage=2" target="_self"><span>+</span><em>更多</em></a> 
           </div>
           </div>
           <div class="clearfix"></div>
        </div>
       </div>
</template>
<script>
//	import { baseUrl } from '@/assets/plugins/constanturl'
//	import { format } from '@/assets/plugins/format'
//	//请求后台数据之前转换入参
//	import { transformRequest } from '@/assets/plugins/transformRequest'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			
		},
		created() {
			
		},
		watch: {
			
		},
		mounted(){
		},
		computed: {
			
		},
		watch: {

		},
		methods: {
			
		}
		
	}
</script>
<style scoped>
	
</style>
