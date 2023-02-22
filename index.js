$(document).ready(() => {
  
  let mainBtns = $(document).find('.header__btn')
  $(mainBtns).each((i, item) => {
    $(item).on('click', () => {
      $(item).addClass('active')
      checkActive(mainBtns, i)
    })
    
  })
  function checkActive(arr, lastIndex) {
    switch (lastIndex) {
      case 0:$(arr[1]).removeClass('active')
      break;
      case 1:$(arr[0]).removeClass('active')
      break;
    }
  }
  
})