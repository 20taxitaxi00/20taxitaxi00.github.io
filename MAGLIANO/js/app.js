$(function(){

	// ハンバーガーメニュー
	$('#hambtn').on('click',function(){
		let isActive = $(this).hasClass('on');
		toggleDrower(isActive);
	});

	// ドロワー関数
	function toggleDrower(isActive) {
		$('js-hamburger')
		if(isActive){
			$('#drower-bg').fadeOut(600);
		} else {
			$('#drower-bg').fadeIn(600);
		}
		$('.js-hamburger').toggleClass('on');
		$('.js-drower').toggleClass('on');
	}


});