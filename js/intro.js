
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
    var formula = document.getElementById('dolam')
    var preintro = document.getElementById('enter')
    formula.style.display = 'block';
    introscreen.style.display = 'block';
    
}
    

    
    