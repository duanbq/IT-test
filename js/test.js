$(function(){
	$("#panel h5").bind("click",function(){
		if ($(this).next().is(":visible")) {
			$(this).next().hide();
		} else{
			$(this).next().show();
		}
	})
})