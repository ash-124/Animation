gsap.to('#box',{
    x:700,
    borderRadius:'50%',
    rotate:360,
    delay:1,
    backgroundColor:'red',
    duration:2.5,
    repeat:-1,
    yoyo:true,    
})
gsap.from('#text h2', {
    opacity:0,
    x:-100,
    // y:30,
    duration:1,
    delay:0.5,
    stagger:0.5,
})