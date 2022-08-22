
function tetra(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bipcTIPKZ/')
}getElementById
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results){
if(error)
{
console.error(error);
}
else{
    console.log(results);
document.getElementById("aleni").innerHTML=results[0].label;
document.getElementById("hundi").innerHTML=results[0].confidence;
img1=document.getElementById("gugu");
img2=document.getElementById("guguli");
img3=document.getElementById("gug");
img4=document.getElementById("rah");
img5=document.getElementById("gu");
if(results[0].label=="clap")
{
img1.src='aliens-01.gif';
img2.src='aliens-02.png';
img3.src='aliens-03.png';
img4.src='andu.jpeg';
img5.src='p.png';
}
else if(results[0].label=="whacking")
{
img1.src='aliens-01.png';
img2.src='aliens-02.gif';
img3.src='aliens-03.png';
img4.src='andu.jpeg';
img5.src='p.png';
}
else if(results[0].label=="hand clicking")
{
img1.src='aliens-01.png';
img2.src='aliens-02.png';
img3.src='aliens-03.gif';
img4.src='andu.jpeg';
img5.src='p.png';
}
else if(results[0].label=="slapping")
{
img1.src='aliens-01.png';
img2.src='aliens-02.png';
img3.src='aliens-03.png';
img4.src='dancer.gif';
img5.src='p.gif.gif';
}
else if(results[0].label=="Background Noise")
{
img1.src='aliens-01.png';
img2.src='aliens-02.png';
img3.src='aliens-03.png';
img4.src='andu.jpeg';
img5.src='p.gif.gif';
}
}
}

