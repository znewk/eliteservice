const swiper = new Swiper('.slideContent', {
    slidesPerView: 5,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    fade: 'true',
    gragCursor: 'true',
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 5,
        },
    }
  });

let header = document.getElementsByClassName('bottomHeadernavBar')[0]
let headerStatus = false

function showHeader(){
  if (headerStatus) {
    header.style.display = 'none'
  } else {
    header.style.display = 'flex'
  }

  headerStatus = !headerStatus
}