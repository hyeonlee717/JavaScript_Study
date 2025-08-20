// $('.tab-button').on('click', function () {
//     let idx = $(this).index();
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(idx).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(idx).addClass('show');
// }) 아직 안배운거

// for 반복문 : for (){}
// for (let i = 0; i < 3; i++) { // 콤마가 아니라 ; 써야함
//     $('.tab-button').eq(i).on('click', function () {
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }

// var이 아니라 let을 사용하는 이유는
// var는 이놈을 감싸는 function을 범위로하는데
// 따로 감싸고 있는게 없다면 script태그 전역이 범위가 됨
// 그래서 페이지가 최초 로딩될 때 for문이 동기적 작업으로 실행되는데
// 이때 그냥 script태그 전역에 i = 3이라는 것이 결과로 덩그러니 남음
// 그래서 페이지에서 버튼을 클릭해도 i = 0 or 1 or 2는 있어도 3은 없기 때문에
// 아무 실행도 되지 않음
// 참고로 동기적 작업이라는 건 페이지 로드될때 코드가 순서대로 다 실행되는 것임
// ~~를 누르면 이렇게 실행되게 하라는 작업까지도 다 예약이 순서대로 걸리는 것임
// 비동기적 작업이라는건 내가 클릭했을때 실행되는 그런 작업을 의미함
// 페이지 로드될 때 우선적, 시간순서적으로 실행되는 동기적 작업이 아닌 작업임
// 무튼 그래서 let을 사용하면 let은 범위가 { } 라서
// for 반복문의 {} 범위에서 실행되기 때문에
// 페이지가 최초 로드될 때, 버튼을 클릭하면 발생하는
// 이벤트클릭리스너 콜백함수의 비동기적 실행을 위해 클로저에 i값을 각각 밀봉해둠
// 쉽게 말해서 if문 3개가 있는데
// var을 쓰면 그 어떤 작업이든지 i = 3만을 가지고 실행하려고 접근하는 것이랑 같고
// let을 쓰면 각 버튼에 해당하는 i값을 가지고 실행하려고 접근하는 것임

// for (let i = 0; i < 3; i++) { // 콤마가 아니라 ; 써야함
//     $('.tab-button').eq(i).on('click', function () {
//         탭열기(i);
//     })
// }

// 이벤트버블링 때문에 어차피 tab-button을 클릭해도 list도 눌리니까
// $('.list').click(function (e) {
//     if (e.target == document.querySelectorAll('.tab-button')[0]) {
//         탭열기(0);
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[1]) {
//         탭열기(1);
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[2]) {
//         탭열기(2);
//     }
// })

// 해당 html요소에 data-이름=''을 몰래 숨겨놓는 방법(반복문 사용x)
$('.list').click(function (e) {
    let id = Number(e.target.dataset.id); // 문자열을 숫자(정수)로 변환
    탭열기(id);
})

function 탭열기(숫자) { // 함수로 축약해서 재사용 하고자 할 때는 파라미터 추가해야함
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}