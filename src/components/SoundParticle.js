
export default function SoundParticle(x, y, p5, video, vScale, samples){
    this.x = x;
    this.y = y;
    this.p5 = p5
    this.video = video
    this.vScale = vScale

    this.update = function(){
        this.x += this.p5.random(-10, 10);
        this.y += this.p5.random(-10, 10);
    }

    this.show = function(){
        this.p5.noStroke();
        let px = p5.floor(this.x / vScale)
        let py = p5.floor(this.y / vScale)
        let col = video.get(px, py)
        this.p5.fill(col[0], col[1], col[2])
        this.p5.ellipse(this.x, this.y, 24, 24);
    }
}