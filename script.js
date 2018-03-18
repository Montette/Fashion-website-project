$(window).on("scroll", przewijanie);

        function przewijanie() {

            if ($(window).scrollTop() > $(".collectionWrapper-1").offset().top - $(window).innerHeight()) {

                $(".photo-1").addClass("show");
            }

            if ($(window).scrollTop() > $(".collectionWrapper-2").offset().top - $(window).innerHeight()) {

                $(".photo-2").addClass("show");
            }

            if ($(window).scrollTop() > $(".collectionWrapper-3").offset().top - $(window).innerHeight()) {

                $(".photo-3").addClass("show");
            }

        };
        
        $(".burger").on("click", function(){
            $("nav>ul").toggleClass("activeNav");
            $(".burger").toggleClass("active");
            $(".social").toggleClass("socialMargin");
        })