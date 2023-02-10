
var introscreen = document.getElementById('sequencer')
var links = document.getElementById('links')
introscreen.style.display = 'none';
links.style.display = 'none';
function play()
{
  
    var introscreen = document.getElementById('sequencer')
    var links = document.getElementById('links')
    var preintro = document.getElementById('enter')
    links.style.display = 'block'
    introscreen.style.display = 'block';
    enter.remove();

    var priverA = new Rythm()

    //audio + animation
    priverA.setMusic('/assets/ost/bg.mp3')
    priverA.setGain(1.2);
    priverA.addRythm('pulsinator', 'pulse', 100, 500, {
        min: 1,
        max: 0.30
     })
     priverA.addRythm('pulsinator2', 'color', 0, 10, {
        from: [255,255,255],
        to:[255,0,255]
     })
    
    
    
     
    priverA.start()

   


}
    

    
    
