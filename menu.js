$( function () {
	// body...
	$("#nav").load(menu.html);
	function active_menu(){
		var pgurl=window.location.href.susbtr(window.location.href.lastIndexOf("/")+1);
		$("#nav ul li a").each(function(){
			 if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
      });
	}
	setTimeout(function(){
		active_menu();
	},100);
}
	);