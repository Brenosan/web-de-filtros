noseX=0;
noseY=0;

function preload() {
clownNose = loadImage('https://i.postimg.cc/FsdpX6rq/mustache-png.webp')
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  }

  function modelLoaded(){
    console.log('PoseNet foi inicializado');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("nariz x =" + noseX);
      console.log("nariz y =" + noseX);
    }
  }

    function draw() {
image(video, 0, 0, 300, 300);
image(clownNose, noseX -20, noseY, 50, 50);
    }

    function takeSnapshot(){    
        save('myFilterImage.png');
      }