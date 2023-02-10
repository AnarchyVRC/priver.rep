
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
    priverA.setGain(1.0);
    priverA.addRythm('pulsinator', 'pulse', 275, 355, {
        min: 10,
        max: 40
     })
     priverA.addRythm('pulsinator', 'tilt', 150 40,{
        min: 20,
        max: 25
     })
    
    
    
     
    priverA.start()

   


}
    

    
    