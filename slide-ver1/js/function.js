//

const $indicator = $('.slides-pagination a');
const $container = $('.slides-container');

$indicator.on('click', function (evt) {
	evt.preventDefault();
	const nowIdx = $indicator.index(this);

	// 컨테이너 이동
	$container.animate({ left: -1120 * nowIdx });

	// 내가 안한부분
	//활성화 표시
	$indicator.eq(nowIdx).parent().addClass('on');
	$indicator.eq(nowIdx).parent().siblings().removeClass('on');
});
