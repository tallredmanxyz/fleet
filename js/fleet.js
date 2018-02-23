window.onload = function () {
    var that = this;
    var audioFiles = ["eng-0001d5d3.mp3",
        "eng-01404018.mp3",
        "eng-0279681e.mp3",
        "eng-062674ef.mp3",
        "eng-09151c47.mp3",
        "eng-09d05c29.mp3",
        "eng-0b88d1ca.mp3",
        "eng-0c358569.mp3",
        "eng-0c8881c7.mp3",
        "eng-0d4e6f81.mp3",
        "eng-0dbe40d1.mp3",
        "eng-10405626.mp3",
        "eng-13f5eff6.mp3",
        "eng-14cf8197.mp3",
        "eng-14fc472a.mp3",
        "eng-1505df84.mp3",
        "eng-16d0f226.mp3",
        "eng-178f97df.mp3",
        "eng-184bfd6f.mp3",
        "eng-1908a0fc.mp3",
        "eng-198ee0bb.mp3",
        "eng-19cd3efe.mp3",
        "eng-19e33d85.mp3",
        "eng-1acd582f.mp3",
        "eng-1ad27f1a.mp3",
        "eng-1dc5b178.mp3",
        "eng-1dcc6e7a.mp3",
        "eng-1e816dc4.mp3",
        "eng-1fa0e526.mp3",
        "eng-1fc0f36a.mp3",
        "eng-210b54fe.mp3",
        "eng-22b35429.mp3",
        "eng-23a08965.mp3",
        "eng-24a58bfc.mp3",
        "eng-256649c4.mp3",
        "eng-267b732c.mp3",
        "eng-2762428f.mp3",
        "eng-2b378a9f.mp3",
        "eng-2c14401a.mp3",
        "eng-2c6371d6.mp3",
        "eng-2c80050e.mp3",
        "eng-2d5b0234.mp3",
        "eng-3079b48c.mp3",
        "eng-3185f05a.mp3",
        "eng-325c16d4.mp3",
        "eng-32fb5056.mp3",
        "eng-34dcd176.mp3",
        "eng-3683a5b3.mp3",
        "eng-37a677a9.mp3",
        "eng-37cb61b3.mp3",
        "eng-37d3e62a.mp3",
        "eng-3b97a968.mp3",
        "eng-3c0918ea.mp3",
        "eng-3e2a99af.mp3",
        "eng-3e4ad1b3.mp3",
        "eng-3f2f38cd.mp3",
        "eng-3f5dd4e5.mp3",
        "eng-3f744433.mp3",
        "eng-41157574.mp3",
        "eng-41d5a82a.mp3",
        "eng-42cfcda4.mp3",
        "eng-43f80267.mp3",
        "eng-444f97dd.mp3",
        "eng-4619af35.mp3",
        "eng-47a91d51.mp3",
        "eng-4837d942.mp3",
        "eng-49629a97.mp3",
        "eng-497d309d.mp3",
        "eng-4b2576e0.mp3",
        "eng-4cb2acb6.mp3",
        "eng-4ce6c7a4.mp3",
        "eng-4cf1a892.mp3",
        "eng-4d2ec1c8.mp3",
        "eng-4d7e6854.mp3",
        "eng-4e1a6016.mp3",
        "eng-4e6c7faa.mp3",
        "eng-4f77bc6d.mp3",
        "eng-4fbf094f.mp3",
        "eng-51b4cef7.mp3",
        "eng-5373c966.mp3",
        "eng-538529b3.mp3",
        "eng-554aaa44.mp3",
        "eng-554e9f08.mp3",
        "eng-55c234de.mp3",
        "eng-55eeac61.mp3",
        "eng-560581fd.mp3",
        "eng-560c6468.mp3",
        "eng-5647a3be.mp3",
        "eng-5782501d.mp3",
        "eng-596b29be.mp3",
        "eng-5ba71b4a.mp3",
        "eng-5bc25c96.mp3",
        "eng-5cd75c73.mp3",
        "eng-60d2e42f.mp3",
        "eng-60ecc3e6.mp3",
        "eng-66b9eba0.mp3",
        "eng-675491c4.mp3",
        "eng-67d5399d.mp3",
        "eng-680edcdf.mp3",
        "eng-69a297d8.mp3",
        "eng-6ad321a4.mp3",
        "eng-6b1a5cf7.mp3",
        "eng-6b3e1469.mp3",
        "eng-6b63e1fc.mp3",
        "eng-6bac60c3.mp3",
        "eng-6bac85cb.mp3",
        "eng-6be34445.mp3",
        "eng-6c13ca71.mp3",
        "eng-6c844e92.mp3",
        "eng-6d199454.mp3",
        "eng-6d84a418.mp3",
        "eng-6f2a1f95.mp3",
        "eng-6fb3b871.mp3",
        "eng-727d1361.mp3",
        "eng-729f519b.mp3",
        "eng-7545ea13.mp3",
        "eng-75d0804f.mp3",
        "eng-764c1c11.mp3",
        "eng-76d9c429.mp3",
        "eng-77f47961.mp3",
        "eng-7876625d.mp3",
        "eng-790dd7e3.mp3",
        "eng-7a5bc505.mp3",
        "eng-7a67e768.mp3",
        "eng-7c1c6890.mp3",
        "eng-7dc47cbd.mp3",
        "eng-7e1a4366.mp3",
        "eng-80fc6cd3.mp3",
        "eng-812f29fc.mp3",
        "eng-822e6372.mp3",
        "eng-84dd077d.mp3",
        "eng-873c91e2.mp3",
        "eng-876c813e.mp3",
        "eng-87da6189.mp3",
        "eng-8826be9c.mp3",
        "eng-8832d1a2.mp3",
        "eng-8985ba28.mp3",
        "eng-89b4103b.mp3",
        "eng-89f10adb.mp3",
        "eng-8a0f4458.mp3",
        "eng-8a90aba9.mp3",
        "eng-8ab89d58.mp3",
        "eng-8ae5542d.mp3",
        "eng-8ba5ec10.mp3",
        "eng-8bc9c137.mp3",
        "eng-8be4f9dd.mp3",
        "eng-8d9a16ca.mp3",
        "eng-8dc71ed7.mp3",
        "eng-8e02ee0a.mp3",
        "eng-8e86d7b2.mp3",
        "eng-8ffbe0f7.mp3",
        "eng-90b81928.mp3",
        "eng-90cddd45.mp3",
        "eng-920bac49.mp3",
        "eng-94176ad9.mp3",
        "eng-97a0d882.mp3",
        "eng-97edbf6d.mp3",
        "eng-985e7e94.mp3",
        "eng-98a03db3.mp3",
        "eng-991043fe.mp3",
        "eng-99f75266.mp3",
        "eng-9a33ce1b.mp3",
        "eng-9a941a19.mp3",
        "eng-9cc34d4b.mp3",
        "eng-9cf76119.mp3",
        "eng-9da2093c.mp3",
        "eng-9e36cab4.mp3",
        "eng-9e780924.mp3",
        "eng-9ec55c97.mp3",
        "eng-9ed5ee60.mp3",
        "eng-9fb2bf62.mp3",
        "eng-9fd7372e.mp3",
        "eng-a00bd297.mp3",
        "eng-a270110b.mp3",
        "eng-a2860126.mp3",
        "eng-a298a7a6.mp3",
        "eng-a393d2fb.mp3",
        "eng-a4059a03.mp3",
        "eng-a5034485.mp3",
        "eng-a5e6215b.mp3",
        "eng-a71a3496.mp3",
        "eng-a7d7c1da.mp3",
        "eng-a7f3f69c.mp3",
        "eng-a85d53b4.mp3",
        "eng-a884c611.mp3",
        "eng-a90f6fea.mp3",
        "eng-a92ed050.mp3",
        "eng-a933a666.mp3",
        "eng-aada8702.mp3",
        "eng-abc4aaff.mp3",
        "eng-ace38ce2.mp3",
        "eng-ad193be4.mp3",
        "eng-b007c222.mp3",
        "eng-b0ac42c8.mp3",
        "eng-b0f6a6d5.mp3",
        "eng-b1d882a7.mp3",
        "eng-b2dc3033.mp3",
        "eng-b3d4a6c5.mp3",
        "eng-b4ca7514.mp3",
        "eng-b6a99ceb.mp3",
        "eng-b71eb376.mp3",
        "eng-b723af33.mp3",
        "eng-b73e5edc.mp3",
        "eng-b7528aad.mp3",
        "eng-b781f0fa.mp3",
        "eng-b940c182.mp3",
        "eng-b9ea3e36.mp3",
        "eng-ba44f6d3.mp3",
        "eng-bc269c16.mp3",
        "eng-bc60b8fb.mp3",
        "eng-beed83c9.mp3",
        "eng-c08d8005.mp3",
        "eng-c17b3d02.mp3",
        "eng-c22b9fc3.mp3",
        "eng-c3ab6d84.mp3",
        "eng-c3c87b3e.mp3",
        "eng-c3e24b19.mp3",
        "eng-c68a3cbd.mp3",
        "eng-c83687fc.mp3",
        "eng-c8cb8a06.mp3",
        "eng-c98f3993.mp3",
        "eng-c9db5a14.mp3",
        "eng-cacad1e2.mp3",
        "eng-cbe5a331.mp3",
        "eng-cbf2c4f7.mp3",
        "eng-cd52224a.mp3",
        "eng-ceda2313.mp3",
        "eng-cf2531b8.mp3",
        "eng-d004ec9f.mp3",
        "eng-d09aee21.mp3",
        "eng-d3fbe249.mp3",
        "eng-d43829f7.mp3",
        "eng-d47cea17.mp3",
        "eng-d48304b4.mp3",
        "eng-d4e818f8.mp3",
        "eng-d87e283f.mp3",
        "eng-d8d5ec45.mp3",
        "eng-db0a5ed2.mp3",
        "eng-db9894f7.mp3",
        "eng-dba80bb2.mp3",
        "eng-dc2a30c2.mp3",
        "eng-e01e7ae3.mp3",
        "eng-e07fd4a0.mp3",
        "eng-e16f61d4.mp3",
        "eng-e181fb59.mp3",
        "eng-e193fae2.mp3",
        "eng-e199342c.mp3",
        "eng-e2848fc2.mp3",
        "eng-e3ec47e8.mp3",
        "eng-e5342a36.mp3",
        "eng-e647fcff.mp3",
        "eng-e8a44dff.mp3",
        "eng-e91cd4e0.mp3",
        "eng-eaa3ce34.mp3",
        "eng-ec85ac8f.mp3",
        "eng-ed4b199f.mp3",
        "eng-edce51c3.mp3",
        "eng-f105e455.mp3",
        "eng-f159e806.mp3",
        "eng-f1813e78.mp3",
        "eng-f1b0ad49.mp3",
        "eng-f2e94d89.mp3",
        "eng-f5770815.mp3",
        "eng-f5e3672b.mp3",
        "eng-f5e4d0e7.mp3",
        "eng-f5fe3a57.mp3",
        "eng-f6298f46.mp3",
        "eng-f6a25ad6.mp3",
        "eng-f87474f3.mp3",
        "eng-f99edabb.mp3",
        "eng-f9bd8938.mp3",
        "eng-fa13015d.mp3",
        "eng-fa615f8f.mp3",
        "eng-fb3314da.mp3",
        "eng-fb361ef9.mp3",
        "eng-fc35d654.mp3",
        "eng-fc5f5cc7.mp3",
        "eng-fda99629.mp3",
        "eng-fe519c0d.mp3"];

    this.menuShow = false;
    this.animated = false;
    this.sound = true;

    // Menu Toggle
    $(".menu-toggle").click(function () {
        if (that.menuShow == false) {
            $(".background").addClass("menu-open");
            $(".top-nav").addClass("menu-open");
            that.menuShow = true;
        } else {
            $(".background").removeClass("menu-open");
            $(".top-nav").removeClass("menu-open");
            that.menuShow = false;
        }
    });


    // Sound Toggle
    $(".sound-toggle").click(function () {
        if (that.sound == false) {
            $('#path2_fill').addClass('sound-on');
            $('#path3_fill').addClass('sound-on');
            that.sound = true;
        } else {
            $('#path2_fill').removeClass('sound-on');
            $('#path3_fill').removeClass('sound-on');
            that.sound = false;
        }
    });

    // On Circle Click
    var circle = $("#circle");
    circle.click(function () {

        var circleListener = null;


        if (that.animated == false) {
            var randomFile = Math.floor(Math.random() * audioFiles.length);

            var audio = document.getElementById('audio');
            var source = document.getElementById('audioSource');

            source.src = 'audio/' + audioFiles[randomFile];

            audio.pause();
            audio.load(); //call this to just preload the audio without playing
            audio.play(); //call this to play the song right away

            //Get title of audio
            jsmediatags.read(source.src, {
                onSuccess: function (tag) {
                    $('.content').text(tag.tags.title);
                },
                onError: function (error) {
                    console.log(error);
                }
            });

            circle.addClass('animated');
            circleListener = circle.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', that,
                function (e) {
                    circle.removeClass("animated");
                    randomFile = Math.floor(Math.random() * audioFiles.length);

                    source.src = 'audio/' + audioFiles[randomFile];

                    //Get title of audio
                    jsmediatags.read(source.src, {
                        onSuccess: function (tag) {
                            $('.content').text(tag.tags.title);
                        },
                        onError: function (error) {
                            console.log(error);
                        }
                    });

                    if (e.data.sound) {
                        //audio selector
                        audio.pause();
                        audio.load(); //call this to just preload the audio without playing
                        audio.play(); //call this to play the song right away
                    }

                    //Hack to retrigger animation
                    setTimeout(function () {
                        circle.addClass("animated");
                    }, 1)
                });

            that.animated = true;
        } else {
            circle.removeClass("animated");
            circle.off('webkitAnimationEnd oanimationend msAnimationEnd animationend')
            that.animated = false;
        }
    });

    //On Slider change (click)
    var slider = $('.slider');
    slider.mouseup(function () {
        var speed = slider.val();
        $('.circle.animated').css({
            animationDuration: speed + 's',
            MozAnimationDuration: speed + 's',
            WebkitAnimationDuration: speed + 's'
        });
    });

    //On Slider change (touch)
    slider.on('touchend', function () {
        var speed = slider.val();
        $('.circle.animated').css({
            animationDuration: speed + 's',
            MozAnimationDuration: speed + 's',
            WebkitAnimationDuration: speed + 's'
        });
    });

    // Blob animation
    var randomness = 10;
    var threshold = 100;
    var anim_duration = 1000; //1000 = 1s

    animate = function () {

        $('.circle').animate({
            borderTopLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + '%'),
            borderTopRightRadius: String(Math.round((Math.random() * randomness + threshold)) + '%'),
            borderBottomLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + '%'),
            borderBottomRightRadius: String(Math.round((Math.random() * randomness + threshold)) + '%'),
        }, anim_duration, animate);
    }
    animate();
}



