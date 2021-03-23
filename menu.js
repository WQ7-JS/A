var controlit = $("svg");  
var menuToggle = new TimelineMax({paused:true, reversed:true});
menuToggle  
  .set('', {className:"-=closemenu"})
  .set('', {className:"+=openmenu"})
  .to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
  .to(' .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
  .to(' .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
  .add('rotate')
  .to(' .top', .2, {y:'5'}, 'rotate')
  .to(' .bot', .2, {y:'-5'}, 'rotate')
  .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
  .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')
 // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug
 
controlit.click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
});

 
    
