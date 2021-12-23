
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LhRpa-i3_/', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

