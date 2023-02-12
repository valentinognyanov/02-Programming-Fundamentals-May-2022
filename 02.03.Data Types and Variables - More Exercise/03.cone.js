function cone(radius, height) {
    let volume = (1 / 3) * height * Math.PI * (radius * radius);
    let slantSide = Math.sqrt((radius * radius) + (height * height));
    let area = Math.PI * radius * (radius + slantSide);
    console.log('volume = ' + volume.toFixed(4));
    console.log('area = ' + area.toFixed(4));
}
cone(3, 5);