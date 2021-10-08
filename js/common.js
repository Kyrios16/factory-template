$(document).ready(function (){
  //sticky nav
  $(".sticky-sec").waypoint(function (direction) {
      if (direction == "down") {
        $(".header-bar").addClass("sticky");
      } else {
        $(".header-bar").removeClass("sticky");
      }
    },
    {
      offset: "50px",
    }
  );
  //navigation for smartphone 
  $('.menu-trigger').click(function(){
    $(this).toggleClass('active');

    if($(this).hasClass('active')) {
      $('.main-nav').addClass('active');
    } else {
      $('.main-nav').removeClass('active');
    }
  });
  //footer for smart phone 
  $('.tab-list').each(function(){                   
    let $this = $(this),                            
        $tab = $this.find('li.active'),             
        $link = $tab.find('a'),                     
        $panel = $($link.attr('href'));             
  
    $this.on('click', '.tab-control', function(e) { 
      e.preventDefault();                           
      let $link = $(this),                          
          id = this.hash;                          
  
      if (id && !$link.is('.active')) {             
        $panel.removeClass('active');               
        $tab.removeClass('active');                
 
        $panel = $(id).addClass('active');          
        $tab = $link.parent().addClass('active');   
      }
    });
  });

  //to top button
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('.totop-btn').addClass('show');
    } else {
      $('.totop-btn').removeClass('show');
    }
  });

  $('.totop-btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});