var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	W = canvas.width,
	H = canvas.height,
	aqus = [],
	aw = 20; //海葵的粗细

ctx.fillStyle = "hsla(220,100%,60%,.9)";
class Aqu {
	constructor(i) {
		var x = Math.floor(Math.random() * aw + i * aw);
		var y = Math.floor(Math.random() * 60 + 100);
		this.x = x;
		this.angle = 0;
		this.waveLen = 60; //摇摆的幅度
		this.point1 = { x: 0, y: 0 };
		this.point2 = { x: 0, y: -y }; //控制点
		this.point3 = { x: 0, y: -y - 50 };
	}
	update() {
		//利用正余弦在某个值正负区间移动的特性
		this.angle += Math.PI / 180;
		this.point3.x = this.waveLen * Math.sin(this.angle);
	}
	draw(ctx) {
		ctx.save();
		// ctx.globalCompositeOperation = "source-over";
		ctx.strokeStyle = "hsla(310,100%,25%,.5)";
		ctx.lineWidth = aw;
		ctx.lineCap = "round";
		ctx.beginPath();
		ctx.translate(this.x, H);
		ctx.moveTo(this.point1.x, this.point1.y);
		ctx.quadraticCurveTo(
			this.point2.x,
			this.point2.y,
			this.point3.x,
			this.point3.y
		);
		ctx.stroke();
		ctx.restore();
	}
}
for (var i = 0, len = (W - aw / 2) / aw; i < len; i++) {
	aqus.push(new Aqu(i));
}

(function animate() {
	ctx.fillRect(0, 0, W, H);
	aqus.forEach(item => {
		item.update();
		item.draw(ctx);
	});
	requestAnimationFrame(animate);
})();
