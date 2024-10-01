//top 
let lastScroll = 0;

$(window).scroll(function(){

    let curr = $(this).scrollTop();

    if(curr < lastScroll){
        $('#topBtn').addClass('on');
    } else {
        $('#topBtn').removeClass('on');
    }
    lastScroll = curr;
})

$('#topBtn a').click(function(e){
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


//lang
$('#header .lang').click(function(){
  $('#header .lang-list').toggleClass('on');
})


//section intro txt
const intro = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-intro",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
    toggleClass:{
      targets:"#topBtn", className:"hide"
  }
  }
})
intro.to('.sc-intro .dimmed',{ opacity:1 },'a')
intro.to('.sc-intro .desc:nth-child(1)',{ autoAlpha:1 },'a')
intro.to('.sc-intro .desc:nth-child(1)',{ autoAlpha:0,
  onStart:function(){
    $('#header').addClass('on') //시작될때
  },
  onReverseComplete:function(){
    $('#header').removeClass('on')//올라갈때(모션을 다시 백하고 싶을 때)
  }
})
intro.to('.sc-intro .desc:nth-child(2)',{ autoAlpha:1}) //opacity와 visibility 함께 쓴다. 
intro.to('.sc-intro .desc:nth-child(2)',{ autoAlpha:0})
intro.to('.sc-intro .desc:nth-child(3)',{ autoAlpha:1})
intro.to('.sc-intro .desc:nth-child(3)',{ autoAlpha:0})
intro.to('.sc-intro .desc:nth-child(4)',{ autoAlpha:1})


//section showcase txt
const showcase = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-showcase",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0
  }
})
showcase.to('.sc-showcase .dimmed',{ opacity:1 },'a')
showcase.to('.sc-showcase .txt1',{ autoAlpha:1 },'a')
showcase.to('.sc-showcase .txt1 .desc:nth-child(1)',{ xPercent:100 },'b')
showcase.to('.sc-showcase .txt1 .desc:nth-child(3)',{xPercent:-100 },'b')
showcase.to('.sc-showcase .dimmed',{ opacity:0 },'b')
showcase.to('.sc-showcase .txt1',{ autoAlpha:0 })
showcase.to('.sc-showcase .img-area .img:nth-child(3)',{height:0})
showcase.to('.sc-showcase .img-area .img:nth-child(2)',{height:0})
showcase.to('.sc-showcase .dimmed',{ opacity:1 },'c')
showcase.to('.sc-showcase .txt2',{ autoAlpha:1 },'c')


//section challenge
ScrollTrigger.create({
  trigger:".sc-challenge",
  start:"0% 5%",
  end:"100% 100%",
  onEnter:function(){
    $('#header').addClass('black')
  },
  onLeaveBack:function(){
    $('#header').removeClass('black')
  }
})


//section prove
const prove = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-prove",
    start:"0% 75%",
    end:"100% 100%",
    scrub:0
  }
})
prove.to('.sc-prove .bar',{ x:0 },'a')
prove.from('.sc-prove .headline span',{ x:0 },'a')


//다크모드 변경
ScrollTrigger.create({
  trigger:`[data-theme="dark"]`,
  start:"0% 50%",
  end:"100% 40%",
  toggleClass:{
    targets:"body",
    className:"dark"
  },
})


//section possibility
const possibility  = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-possibility",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
    invalidateOnRefresh: true
  }
})
possibility.to('.sc-possibility .slide-inner',{ 
  xPercent:-100,
  x:function(){
    return -100+window.innerWidth
  }
 },'a')


//section feature
const feature  = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-feature",
    start:"0% 95%",
    end:"100% 80%",
    scrub:0,
  }
})
feature.to('.sc-feature .color',{ xPercent:0,x:0 })

const feature2  = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-feature",
    start:"0% 40%",
    end:"100% 40%",
    scrub:0,
    onEnter:function(){
      $('.sc-feature').addClass('blur')
    },
    onLeaveBack:function(){
      $('.sc-feature').removeClass('blur')
    }
  }
})
feature2.to('.sc-feature .headline',{
  autoAlpha:1
})


//section service
const new1  = gsap.timeline({
  scrollTrigger:{
    trigger:".area1",
    start:"0% 0%",
    scrub:0,
    invalidateOnRefresh:true
  }
})
new1.to('.area1 .slide-inner',{
  x:function(){
    return -$('.area1 .headline').outerWidth()-100;
  }
})
new1.to('.area1 li:nth-child(1)',1,{
  x:100
},'a')
new1.to('.area1 li:nth-child(2)',1,{
  xPercent:-100,
  x:-40+100
},'a')
new1.to('.area1 li:nth-child(3)',1,{
  xPercent:-200,
  x:(-40*2)+100
},'a')
new1.to('.area1 li:nth-child(4)',1,{
  xPercent:-300,
  x:(-40*3)+100
},'a')
new1.to('.area1 .unlock',{
  opacity: 0
},'b-=1')
new1.to('.area1 .lock',{
  opacity: 1
},'b-=0.5')

const new2  = gsap.timeline({
  scrollTrigger:{
    trigger:".area2",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
    invalidateOnRefresh:true,
    onEnter:function(){
      gsap.set('.area1',{autoAlpha:0})
      gsap.set('.area2 .sticky',{autoAlpha:1})
    },
    onLeaveBack:function(){
      gsap.set('.area1',{autoAlpha:1})
      gsap.set('.area2 .sticky',{autoAlpha:0})
    }
  }
})

const new3  = gsap.timeline({
  scrollTrigger:{
    trigger:".area3",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
    invalidateOnRefresh:true,
    onEnter:function(){
      gsap.set('.area2 .sticky',{autoAlpha:0})
      gsap.set('.area3 .first',{autoAlpha:1})
    },
    onLeaveBack:function(){
      gsap.set('.area2 .sticky',{autoAlpha:1})
      gsap.set('.area3 .first',{autoAlpha:0})
    }
  }
})
new3.to('.area3 li:nth-child(2)',{
  xPercent:-100,
  x:-40
},'a')
new3.to('.area3 li:nth-child(3)',{
  xPercent:-200,
  x:(-40*2)
},'a')
new3.to('.area3 li:nth-child(4)',{
  xPercent:-300,
  x:(-40*3)
},'a')
new3.to('.area3 .last-text',{
  autoAlpha:1
})
$('.new3').click(function(){
  a.reverse();
})


//section network
const network = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-network",
    start:"0% 75%",
    end:"100% 100%",
    scrub:0
  }
})
network.to('.sc-network .bar',{ x:0 },'a')
network.from('.sc-network .headline span',{ x:0 },'a')


//section finance
const finance = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-finance",
    start:"0% 0%",
    end:"100% 100%",
    invalidateOnRefresh:true,
    toggleClass:"on",
    scrub:0,
    onUpdate:function(self){
      if(self.progress >= 0.5){
        $('.sc-finance .group-down .txt-area .down2').addClass('on').siblings().removeClass('on');
      }else{
        $('.sc-finance .group-down .txt-area .down1').addClass('on').siblings().removeClass('on');
      }
     }
  }
})
finance.to('.sc-finance .content',{
  xPercent:-100,
  x:function(){
    return window.innerWidth-100;
  }
})


//section creator
const new4 = gsap.timeline({
  scrollTrigger:{
    trigger:".area4",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0
  }
})
new4.to('.sc-creator .area4 .sticky-inner',{ autoAlpha:1})
new4.to('.sc-creator .area4 .sticky-inner',{ autoAlpha:0})

const new5 = gsap.timeline({
  scrollTrigger:{
    trigger:".area5",
    start:"0% 0%",
    end:"100% 100%",
    invalidateOnRefresh:true,
    scrub:0
  }
})
new5.to('.area5 .slide-inner',{
  xPercent:-100,
  x:function(){
    return window.innerWidth-100;
  }
})


//section join
const join = gsap.timeline({
  scrollTrigger:{
    trigger:"#footer",
    start:"100% 100%",
    end:"100% 100%",
    scrub:0,
  }
})
join.to('.sc-join',{ y:0, ease: 'power2.out', duration: 3 })


//footer - top button
ScrollTrigger.create({
  trigger: "#footer",
  start: "0% 100%",
  end: "110% 100%",
  scrub: true,
  markers: false,
  toggleClass:{
      targets:"#topBtn", className:"on2"
  },
  onEnter:function(){
      $('#topBtn a').addClass('fixed');
  },
  onLeaveBack:function(){
      $('#topBtn a').removeClass('fixed');
  }
});