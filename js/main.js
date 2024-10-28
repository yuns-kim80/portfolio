// main.js

const header = $("header .inner");

$(window).scroll(function() {
  const scrollTop = $(this).scrollTop();

  // scrollTop 값에 따라 header_text 색상 변경
  if (scrollTop < 2150) {
    header.css("color", "#FCFEE6"); // 기본 색상
  } else if (scrollTop >= 2150 && scrollTop < 3100) {
    header.css("color", "#E16559"); // 특정 구간 색상
  } else if (scrollTop >= 3100 && scrollTop < 4000) {
    header.css("color", "#C6D7F3"); // 특정 구간 색상
  } else {
    header.css("color", "#84B9BF"); // 다른 색상
  }
  // console.log(scrollTop);
});

gsap.registerPlugin(ScrollTrigger);

// 텍스트 애니메이션
const mainVisual = gsap.timeline();
mainVisual.to('.m_v_text', {scale: 2})
  .to('.m_v_text', {autoAlpha: 0});

ScrollTrigger.create({
  animation: mainVisual,
  trigger: '.main_visual',
  start: 'top top',
  end: '+=1200',
  pin: true,
  scrub: true,
  // markers: true,
});

const skillCards = gsap.utils.toArray('.card_box');

skillCards.forEach(card => {
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');

  // 카드 호버 시 애니메이션 추가
  card.addEventListener('mouseenter', () => {
    gsap.to(front, { rotationY: 180, duration: 0.3, ease: 'power2.out' });
    gsap.to(back, { rotationY: 0, duration: 0.3, ease: 'power2.out' });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(front, { rotationY: 0, duration: 0.3, ease: 'power2.out' });
    gsap.to(back, { rotationY: 180, duration: 0.3, ease: 'power2.out' });
  });
});

skillCards.forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 100, // 아래에서 위로
    duration: 0.5,
    delay: index * 0.3, // 카드가 하나씩 나타나도록 지연 추가
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // 카드가 뷰포트의 80% 위치에 도달했을 때 시작
      toggleActions: "play none none reset", // 나타났다 사라지는 동작
      // markers: true,
    },
  });
});

// 가로 스크롤 애니메이션
let sections = gsap.utils.toArray('.main_projactList');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".main_portfolio",
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      duration: 0.1,
      delay: 0.1,
      ease: "power1.inOut"
    },
    // snap: 1 / sections.length,
    end: '+=5000',
    markers: true,
  },
});

// gotop button
$(window).scroll(function() {
  // top button controll
  if ($(this).scrollTop() > 1000) {
    $('.gotop_btn').fadeIn();
  } else {
    $('.gotop_btn').fadeOut();
  }
});

$(".gotop_btn").click(function() {
  $('html, body').animate({scrollTop:0}, '500');
});
