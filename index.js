const tl = gsap.timeline();

gsap.to('#box',{
    x:700,
    borderRadius:'50%',
    rotate:360,
    delay:1,
    backgroundColor:'red',
    duration:2.5,
    repeat:-1,
    yoyo:true, 
    ease:'slow'   
})
gsap.from('#text h2', {
    opacity:0,
    x:-100,
    y:30,
    duration:2,
    delay:0.5,
    // repeatDelay:1,
    stagger:0.5,
    repeat:-1,
    yoyo:true,
})

tl.to('.box1',{
    x:500,
    delay:0.5,
    duration:2,
    repeat:-1,
    yoyo:true,
    rotate:360,
    marginTop:'20px'
})
tl.to('.box2',{
    x:600,
    delay:0.5,
    duration:2,
    repeat:-1,
    yoyo:true,
    rotate:360,
})
tl.to('.box3',{
    x:700,
    delay:0.5,
    duration:2,
    repeat:-1,
    yoyo:true,
    rotate:360,
})