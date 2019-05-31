function setup() {
        createCanvas(windowWidth, windowHeight, WEBGL);
        frameRate(60);
}

function draw() {
        background(255);

        ambientLight(200);
        pointLight(255, 255, 255, -100, -100, 400);
        noStroke();
        ambientMaterial(255);

        rotateY(frameCount / 200);
        rotateX(frameCount / 210);
        rotateZ(frameCount / 220);

        let num = 255;

        for (let i = 0; i < num; i++) {
                push();
                let n = (i / num) * PI * 12;
                let x = tan(frameCount / 120 + n * 2) * height / 2;
                let y = sin(frameCount / 120 + n * 1.1) * height / 4;
                let z = sin(frameCount / 120 + n * 1.7) * height / 4;
                translate(x, y, z);
                ambientMaterial(i, num, i + 800);
                sphere(height / 50, 50);
                pop();
        }
}