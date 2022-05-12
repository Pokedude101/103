//https://teachablemachine.withgoogle.com/models/5mCoNKXBR/
//set is a pre-defined function of Webcam which sets properties of webcam
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach('camera');

   
function takephoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img src=' + data_uri + ' id="captured_image">';
    })
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mCoNKXBR/model.json", modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function identify() {
    img = document.getElementById("captured_image");

    classifier.classify(img, getResults);
}

function getResults(error,results) {
    if (error) {
        console.log(error);

    }
    else {
        console.log(results);
        document.getElementById("result_of_object").innerHTML = results[0].label;
        document.getElementById("result_of_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}