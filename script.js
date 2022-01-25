scre = 0;
cross = true;
audiog=new Audio("over.wav");
aud=new Audio("game.mp3");
setTimeout(() => {
    aud.play();
}, 100);
document.onkeydown = function (e) {
    console.log("Key down is:", e.keyCode);
    if (e.keyCode == 38) {
        chr = document.querySelector('.char');
        chr.classList.add('animate');
        setTimeout(() => {
            chr.classList.remove("animate");
        }, 700);
    }
    if (e.keyCode == 39) {
        chr = document.querySelector('.char');
        chrx = parseInt(window.getComputedStyle(chr, null).getPropertyValue('left'));
        chr.style.left = chrx + 150 + "px";
    }
    if (e.keyCode == 37) {
        chr = document.querySelector('.char');
        chrx = parseInt(window.getComputedStyle(chr, null).getPropertyValue('left'));
        chr.style.left = (chrx - 110) + "px";
    }
}
setInterval(() => {
    chr = document.querySelector('.char');
    go = document.querySelector('.ovr');
    ob = document.querySelector('.obs');
    co = document.querySelector('.container');
    dx = parseInt(window.getComputedStyle(chr, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(ob, null).getPropertyValue('top'));
    dy = parseInt(window.getComputedStyle(chr, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(ob, null).getPropertyValue('left'));
    diffx = Math.abs(dx - ox);
    diffy = Math.abs(dy - oy);
    console.log(diffy, diffx)
    if (diffx < 60 && diffy < 52) {
        go.classList.add('over');
        co.classList.remove('container');
        ob.classList.remove('obs');
        chr.classList.remove('char');
        sc.classList.remove('score');
        sc.classList.add('over')
        aud.pause();
        audiog.play();
        setTimeout(() => {
            audiog.pause();
        }, 1000);
    }
    else if (cross && diffx < 100) {
        scre += 1;
        update(scre);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            obsv = parseFloat(window.getComputedStyle(ob, null).getPropertyValue('animation-duration'));
            obsv = obsv - 0.2;
            ob.style.animationDuration = obsv + 's';
        }, 500);
    }
}, 10);

function update(scre) {
    sc.innerHTML = "Your Score is: " + scre;
}
function myFunction() {
    location.reload();
}
