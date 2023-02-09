
var introscreen = document.getElementById('sequencer')
var formula = document.getElementById('dolam')
introscreen.style.display = 'none';
formula.style.display = 'none';
function play()
{
    var priverA = new Rythm()

      priverA.setMusic('/assets/ost/bg.mp3')


      priverA.setGain(1.0);
      priverA.start()
    var introscreen = document.getElementById('sequencer')
    var links = document.getElementById('links')
    var preintro = document.getElementById('enter')
    links.style.display = 'block'
    introscreen.style.display = 'block';
    enter.remove();
    
}
    

    
    