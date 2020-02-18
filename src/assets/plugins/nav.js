$(function() {
	//瀵艰埅
	alert(66)
	
});
//function addListener(element, type, callback) {
//		if (element.addEventListener) {
//			element.addEventListener(type, callback);
//		} else if (element.attachEvent) {
//			element.attachEvent('on' + type, callback);
//		}
//	}
//
//	addListener(document, 'DOMContentLoaded', function () {
//		
//		var mq = window.matchMedia("(max-width: 800px)");
//		if (mq.matches) {
//			document.getElementById("menu_list").classList.add("hidden");
//		}
//
//		addListener(document.getElementById("menu_button"), 'click', function () {
//			document.getElementById("menu_list").classList.toggle("hidden");
//			document.getElementById("menu_button").classList.toggle("is-active");
//		});
//		
//		addListener(window, 'resize', function () {
//			var width = window.innerWidth ||
//						document.documentElement.clientWidth ||
//						document.body.clientWidth;
//			
//			if (width > 800) {
//				document.getElementById("menu_list").classList.remove("hidden");
//			} else {
//				document.getElementById("menu_list").classList.add("hidden");
//			}
//		});
//		
//	});