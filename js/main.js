$(function() {

    var scrollMagicController = new ScrollMagic;
    $(window).load(function() {

        // build scene
        var main = new ScrollScene({
                triggerElement: '#main',
            })
            .setTween(new TimelineMax().add([
                TweenLite.from(".main .line01", 1, { y: -70, opacity: 0 }),
                TweenLite.from(".main .line02", 1, { y: 80, opacity: 0 }).delay(1.3),
                TweenLite.from(".main .line03", 1, { y: 90, opacity: 0 }).delay(1.6),
                TweenMax.from(".main .line04", 1, { y: 100, opacity: 0 }).delay(1.9),
                TweenMax.from(".main .line05", 1, { y: 100, opacity: 0 }).delay(2.3),

            ]))
        main.addTo(scrollMagicController)
            //main.addIndicators();
    });
    var situation = new ScrollScene({
            triggerElement: '.situation',
            triggerHook: "0",
            duration: "2000"
        })
        .setTween(new TimelineMax().add([
            TweenMax.from("#heading", 8, { y: 500, }),
            TweenMax.from("#caption01", 8, { y: 1000, }).delay(1),
            TweenMax.from("#caption02", 8, { y: 1200, }).delay(2),
            TweenMax.from("#caption03", 8, { y: 1400, }).delay(3),
        ]))
        .setPin('.situation');

    situation.addTo(scrollMagicController)
        //situation.addIndicators();

    var box2 = new ScrollScene({
            triggerElement: '.main-section',
            triggerHook: "0.9",
        })
        .setTween(new TimelineMax().add([
            TweenLite.from(".box01", 1, { y: 150, opacity: 0 }),
            TweenLite.from(".box01 h2", 1, { x: -150, opacity: 0 }).delay(1),
            TweenLite.from(".box01 p", 1, { x: -250, opacity: 0 }).delay(1),
            TweenLite.from(".box01 .bg-black", 1, { y: 150, opacity: 0 }).delay(1),

            TweenLite.from(".box02", 1, { opacity: 0 }),
            TweenLite.from(".box02 h2", 1, { x: 150, opacity: 0 }).delay(1),
            TweenLite.from(".box02 p", 1, { x: 250, opacity: 0 }).delay(1),
            TweenLite.from(".box02 .bg-black", 1, { y: 150, opacity: 0 }).delay(1),

            TweenLite.from(".box03", 1, { y: 150, opacity: 0 }).delay(2),
            TweenLite.from(".box03 h2", 1, { x: -150, opacity: 0 }).delay(3),
            TweenLite.from(".box03 p", 1, { x: -250, opacity: 0 }).delay(3),
            TweenLite.from(".box03 .bg-black", 1, { y: 150, opacity: 0 }).delay(3),

            TweenLite.from(".box04", 1, { opacity: 0 }).delay(3),
            TweenLite.from(".box04 h2", 1, { x: 150, opacity: 0 }).delay(4),
            TweenLite.from(".box04 p", 1, { x: 250, opacity: 0 }).delay(4),
            TweenLite.from(".box04 .bg-black", 1, { y: 150, opacity: 0 }).delay(4),


            // TweenLite.from(".box02", 1, { y: 150, opacity: 0 }).delay(1),
            // TweenLite.from(".box03", 1, { y: 300, opacity: 0 }).delay(2),
            // TweenLite.from(".box04", 1, { y: 300, opacity: 0 }).delay(3),
        ]))
        .addTo(scrollMagicController)
        //partners.addIndicators();

});