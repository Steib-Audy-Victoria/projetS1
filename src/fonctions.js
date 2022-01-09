/*carrousel*/
function carrousel() {
    var images13 = document.querySelectorAll('.image13');
    let d = 2000;
    let delta = 1000;

    images13.forEach(function (img, indice) {
        img.style.zIndex = images13.length - indice;
    });

    let anim13 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim13.add({
        targets: images13,
        translateX: [{ value: '375', duration: d },
        {
            value: '-375', duration: 0, delay: function (img, ind) {
                if (ind == 0) return (2 * delta) + d;
                if (ind == 1) return delta;
                return 0;
            }
        },
        {
            value: '0', duration: function (img, ind) {
                if (ind == 2) return 0;
                return d;
            }
        }],
        easing: 'linear',
        delay: function (img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2 * delta) + d;
            return (3 * delta) + (2 * d);
        }
    });
}

/*légende*/

function monterLegende() {
    let txt_leg = document.querySelector(".txt_leg");
    txt_leg.style.display = 'block';
    return anime({
        targets: '.txt_leg',
        backgroundColor: '#FFF',
        translateY: '-4em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende() {
    return anime({
        targets: '.txt_leg',
        backgroundColor: 'rgba(238, 233, 243, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function monterLegende2() {
    let txt_leg2 = document.querySelector(".txt_leg2");
    txt_leg2.style.display = 'block';
    return anime({
        targets: '.txt_leg2',
        backgroundColor: '#FFF',
        translateY: '-3em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende2() {
    return anime({
        targets: '.txt_leg2',
        backgroundColor: 'rgba(238, 233, 243, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}


function monterLegende3() {
    let txt_leg3 = document.querySelector(".txt_leg3");
    txt_leg3.style.display = 'block';
    return anime({
        targets: '.txt_leg3',
        backgroundColor: '#FFF',
        translateY: '-3em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende3() {
    return anime({
        targets: '.txt_leg3',
        backgroundColor: 'rgba(238, 233, 243, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function monterLegende4() {
    let txt_leg4 = document.querySelector(".txt_leg4");
    txt_leg4.style.display = 'block';
    return anime({
        targets: '.txt_leg4',
        backgroundColor: '#FFF',
        translateY: '-3em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende4() {
    return anime({
        targets: '.txt_leg4',
        backgroundColor: 'rgba(238, 233, 243, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function monterLegende5() {
    let txt_leg5 = document.querySelector(".txt_leg5");
    txt_leg5.style.display = 'block';
    return anime({
        targets: '.txt_leg5',
        backgroundColor: '#FFF',
        translateY: '-3em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende5() {
    return anime({
        targets: '.txt_leg5',
        backgroundColor: 'rgba(238, 233, 243, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function monterLegende6() {
    let txt_leg6 = document.querySelector(".txt_leg6");
    txt_leg6.style.display = 'block';
    return anime({
        targets: '.txt_leg6',
        backgroundColor: '#FFF',
        translateY: '-3em',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}

function descendreLegende6() {
    return anime({
        targets: '.txt_leg6',
        backgroundColor: 'rgba(238, 233, 243, 1)',
        translateY: '0',
        autoplay: false,
        easing: 'linear',
        duration: 200
    }).play;
}
