// main.js
gsap.registerPlugin(ScrollTrigger);

// gsap.to('#box1', {
//   duration: 3, // => 움직이는 시간
//   // borderRadius: 100, // => %값
//   opacity: 0.5, // => 투명도
//   backgroundColor: '#dedede', // =>
//   skewX: 20, // =>
//   // scale: 1.5, // => 크기
//   // rotate: 180, // =>회전
//   // x: 300, y: 200, // => 위치값
//   scrollTrigger: {
//     trigger: '#box1',
//     start: 150,
//   }, // 스크롤을 내려서 #box1 뷰포트에 보이자마자 애니메이션을 동작하기 시작 -> 첫화면에 보이는 요소는 불필요
// })
const ani1 = gsap.timeline()

ani1.to('.m_v_text', {scale: 2, opacity: 0})

ScrollTrigger.create({
  animation: ani1,
  trigger: '.m_v_text',
  start: 'top top',
  end: '+=600',
  pin: true,
  scrub: true,
  markers: true,
})
$(document).ready(function() {
  let navMenu = ['main_profile', 'main_skill', 'main_portfolio', 'contact_txt']
  $('header nav a').click(function() {
    let n = $(this).index();
    $('html').animate({
      scrollTop: $(`.${navMenu[n]}`).offset().top
    })
  })
})
// 스크롤 페이지 이동연습 : 추후삭제
{/* <script>
  $(document).ready(function() { //정답은 아니지만 방법론을 찾아내는것이 중요!!
    let pos = ['main_visual', 'earth_wrap', 'course_wrap', 'faculty_wrap', 'news_wrap']
    $(window).scroll(function() {
      for(let i = 0; i<pos.length; i++) {
        if($(window).scrollTop() >= $(`.${pos[i]}`).offset().top - 120) {
          $('.main_nav a').removeClass('active')
          $('.main_nav a').eq(i).addClass('active')
        }
      }
    })
    $('.main_nav a').click(function() {
      $('.main_nav a').not(this).removeClass('active')
      $(this).addClass('active')
      let n = $(this).index();
      $('html').animate({
        scrollTop: $(`.${pos[n]}`).offset().top
      })
    })
  })
</script> */}
