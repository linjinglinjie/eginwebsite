<template>
	<div>
		<div id="header">
			<div class="con">
				<div class="logo"></div>
				<!--导航-->
				<div class="navBar">
					<ul id="menu_list" class="navs clearfix">
						<li class="nLi on">
							<h3><a id="nav1">首页</a></h3>
						</li>
						<li class="nLi">
							<h3><router-link to="aboutus">关于我们</router-link><em></em></h3>
						</li>
						<li class="nLi">
							<h3><a id="nav3">新闻资讯</a><em></em></h3>
						</li>
						<li class="nLi">
							<h3><a id="nav2">企业文化</a><em></em></h3>
						</li>

						<li class="nLi ">
							<h3><a id="nav5">人才培养</a></h3>
						</li>
						<li class="nLi">
							<h3><a id="nav7">联系我们</a></h3>
						</li>
						<div class="clearfix"></div>
					</ul>
					<div class="responseicon hamburger--spin" id="menu_button">
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="search">
					<form name="search">
						<input class="in" type="text" name="content" autocomplete="off" />
						<input class="btn" type="submit" value="" />
					</form>
				</div>

			</div>
		</div>
		<div class="subNav">
			<ul>
				<li></li>
				<li>
					<a><i class="icon iconfont">&#xe6df;</i>公司简介</a>
					<a><i class="icon iconfont">&#xe629;</i>资质荣誉</a>
					<a><i class="icon iconfont">&#xe613;</i>企业文化</a>
				</li>
				<li>
					<a><i class="icon iconfont">&#xe641;</i>企业动态</a>
					<a><i class="icon iconfont">&#xe771;</i>行业资讯</a>
					<a><i class="icon iconfont">&#xe65a;</i>技术交流</a>
				</li>
				<li>
					<a><i class="icon iconfont">&#xe616;</i>生态环境保护</a>
					<a><i class="icon iconfont" style="font-size:.21rem;">&#xe620;</i>易景检测</a>
					<a><i class="icon iconfont" style="font-size:.23rem;">&#xe738;</i>自然资源管理</a>
					<a><i class="icon iconfont" style="font-size:.21rem;">&#xe67b;</i>规划事业</a>
					<a><i class="icon iconfont" style="font-size:.2rem;">&#xeb48;</i>测绘服务</a>
					<a><i class="icon iconfont">&#xe61e;</i>软件开发与信息化</a>
					<a><i class="icon iconfont">&#xe73d;</i>我们的客户</a>
				</li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div id="banner">
    	<div class="fullSlide">	
    		<div class="bd">			
	    		<ul>				
		    		<li>
		    			<div class="shadowbg"></div>
		    			<div class="text">
		    				<p class="top">生态环境保护</p>
		    				<p class="bottom">全链条综合服务，护航绿水青山</p>
		    			</div>
		    			<video width="100%" muted autoplay loop>
						    <source src="../../../static/images/flash.mp4" type="video/mp4">
						    	您的浏览器不支持 video 标签。
						</video>
		    		</li>
		    		<li style="background: url(../../../static/images/banner7.png) top center no-repeat; position: absolute;  left: 0px; top: 0px; display: none;background-size:100% auto;"></li>	
		    		<li style="background: url(../../../static/images/banner8.png) top center no-repeat; position: absolute;  left: 0px; top: 0px; display: none;background-size:100% auto;"></li>										
		    		<li style="background: url(../../../static/images/banner5.png) top center no-repeat; position: absolute;  left: 0px; top: 0px; display: none;background-size:100% auto;"></li>
		    		<li style="background: url(../../../static/images/banner6.png) top center no-repeat; position: absolute; left: 0px; top: 0px; display: none;background-size:100% auto;"></li>	
		    		<li style="background: url(../../../static/images/banner4.png) top center no-repeat; position: absolute;  left: 0px; top: 0px; display: none;background-size:100% auto;"></li>
	    		</ul>		
    		</div>		
    		<div class="hd">
    			<ul></ul>
    		</div>	
    	</div>
    </div>
	</div>
</template>
<script>
	import { baseUrl } from '@/assets/plugins/constanturl'
//	import $ from 'jquery'
	import '@/assets/plugins/jquery-1.8.3.min.js'
	import '@/assets/plugins/jquery.SuperSlide.2.1.1.js'
	import '@/assets/plugins/home.js'
	export default {

		data() {
			return {}
		},
		created() {},
		computed: {},
		watch: {},
		methods: {}
	}
</script>
<style scoped>
	#header {
		height: 70px;
		border-bottom: 1px solid rgba(13, 26, 71, .5);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99999;
	}
	
	.con {
		position: relative;
	}
	
	.logo {
		float: left;
		width: 200px;
		height: 70px;
		background: url(../../assets/images/logo.png) no-repeat left center;
		background-size: 85%;
	}
	
	.search {
		position: absolute;
		top: 20px;
		width: 240px;
		height: 30px;
		right: 0px;
		border: 2px solid #6c8fdb;
		border-radius: 4px;
	}
	
	.search .in {
		float: left;
		width: 190px;
		height: 30px;
		line-height: 30px;
		background: none;
		border: none;
		color: #fff;
		padding-left: 5px;
	}
	
	.search .in:focus {
		outline: none;
		border: none;
	}
	
	.search .btn {
		float: right;
		margin-top: 1px;
		background: url(../../assets/images/fdj.png) no-repeat center center;
		width: 35px;
		height: 28px;
		border: none;
	}
	
	.navBar {
		float: right;
		margin-right: 260px;
	}
	
	.navBar .navs a {
		color: #ddd;
	}
	
	.navBar .navs .nLi {
		float: left;
		position: relative;
	}
	
	.navBar .navs .nLi h3 {
		display: inline-block;
		position: relative;
	}
	
	.navBar .navs .nLi h3 a {
		/* transition: all .4s; */
		/* display: block; */
		font-size: 0.16rem;
		font-size: 16px\9;
		color: #ddd;
		font-weight: normal;
		height: 70px;
		line-height: 70px;
		margin: 0 .2rem;
		margin: 0 20px\9;
		cursor: pointer;
	}
	
	.subNav {
		position: absolute;
		top: 70px;
		left: 0;
		right: 0;
		z-index: 10;
		background: rgba(255, 255, 255, .3);
		background: #fff \9;
		height: 80px;
		line-height: 80px;
		overflow: hidden;
		padding: 0 10px;
		transition: all .3s;
		opacity: 0;
	}
	
	.subNav.active {
		opacity: 1;
	}
	
	.subNav li {
		overflow: hidden;
		zoom: 1;
		display: none;
		text-align: center;
	}
	
	.subNav li a {
		padding: 5px 15px;
		color: #fff;
		border-radius: 4px;
		margin: 0 10px;
		transition: all .3s;
		cursor: pointer;
	}
	
	.subNav li a .icon {
		font-size: .2rem;
		margin-right: 5px;
		vertical-align: middle;
	}
	
	.subNav li a:hover,
	.subNav li a.active {
		color: #333;
	}
	/* 
.navBar .navs .sub li {
	zoom: 1;
}

.navBar .navs .sub a {
	transition:all .3s;
	display: block;
	text-align: center;
	padding: 10px 0;
	color:#fff;
}

.navBar .navs .sub a:hover,.navBar .navs .sub a.active {
	background:#4578b4;
	color: #fff;
}
 */
	
	.navBar .navs .on h3 a {
		color: #fff;
	}
	
	.navBar .navs .nLi h3 a.active {
		font-weight: bold;
	}
	
	.navBar .navs h3 em {
		position: absolute;
		bottom: -1px;
		left: 50%;
		transform: translateX(-50%);
		transition: all.3s;
		display: inline-block;
		content: '';
		width: 0;
		height: 0;
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid rgba(255, 255, 255, .3);
		opacity: 0;
	}
	
	.navBar .navs .nLi.active h3 em {
		opacity: 1;
	}
	#banner {  
  overflow:hidden;
  z-index:1;
  height:450px;
  }

.fullSlide{ 
	width:100%;
	position:relative;  
	height:100%; 
}	
.fullSlide .bd{ 
	height:100%;
	margin:0 auto; 
	position:relative; 
	z-index:0; 
	overflow:hidden;  
}	
.fullSlide .bd ul{ 
	width:100% !important;  
	position: relative;
	 width: 1349px; 
	 height: 100%;
}	
.fullSlide .bd li{ 
	position:relative;
	width:100% !important;  
	height:450px; 
	overflow:hidden; 
	text-align:center; 
	background-size:100% 100%; 
}
.fullSlide .bd li .shadowbg {
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	z-index:1;
	/*background:url(../images/bannershadow.png) no-repeat center center;*/
	opacity:.5;
}
.fullSlide .bd li .text {
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	text-align:center;
	z-index:2;
}
.fullSlide .bd li .text p.top {
	letter-spacing: 5px;
	font-weight: bold;
}
.fullSlide .bd li .text p {
	color:#fff;
	font-size:45px;
	line-height:65px;
}
.fullSlide .bd li .text p.bottom {
	font-size:25px;
	position:relative;
}
.fullSlide .bd li .text p.bottom:before,
.fullSlide .bd li .text p.bottom:after {
	position:absolute;
	display:block;
	content:'';
	width:20%;
	height:1px;
	background:#fff;
	top:50%;
}
.fullSlide .bd li .text p.bottom:before {
	left:-25%;
}
.fullSlide .bd li .text p.bottom:after {
	right:-25%;
}
.fullSlide .bd li video {
	position:absolute;
	bottom:-130px;
	left:0;
	width:100%;
}
.fullSlide .bd li a{ 
	display:block; 
	height:450px; 
}	
.fullSlide .hd{ 
	width:100%;  
	position:absolute; 
	z-index:1; 
	bottom:0; 
	left:0; 
	height:30px; 
	line-height:30px; 
	text-align:center;
}	
.fullSlide .hd ul{ 
	text-align:center;  
	padding-top:5px;  
}	

</style>
<style>
	.fullSlide .hd ul li{ 
	cursor:pointer; 
	display:inline-block; 
	*display:inline; 
	zoom:1;
	 width:30px; 
	 height:5px; 
	 margin:5px; 
	 background:rgb(63,130,251); 
	 overflow:hidden; 		
	 line-height:9999px; 	
}	
.fullSlide .hd ul .on{ 
	background:#fff; 
}  
</style>