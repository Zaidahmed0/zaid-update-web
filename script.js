var crsr = document.querySelector("#cursol")
var blur = document.querySelector("#cursol-b")
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+"px"
  crsr.style.top=dets.y+"px"
  blur.style.left=dets.x - 100 +"px"
  blur.style.top=dets.y - 100 +"px"
  
})


gsap.to("#bar",{
  backgroundColor:"#668694",
  duration:0.5,
  height:"110px",
  scrolltrigger:{
    trigger:"#bar",
    scroller:"body",
    markers:true,
    start:"top -10%",
    end:"top -11",
    scrub:1
  }
})
gsap.to("#main",{
  backgroundColor:"#7C959F",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    markers:true,
    start:"top -30%",
    end:"top -80%",
    scrub:1
    
  }
})
