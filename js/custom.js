$(document).ready(function() {
        $('#p1').hover(function() {
            $("#datavault").hide();
            $("#htm").show();
            $('#p1').css('fill', '#101d42');
            $('#pt1').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#htm").hide();
            $('#p1').css('fill', '#e5e8f1');
            $('#pt1').css('fill', '#101d42');
        });
        $('#pt1').hover(function() {
            $("#datavault").hide();
            $("#htm").show();
            $('#p1').css('fill', '#101d42');
            $('#pt1').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#htm").hide();
            $('#p1').css('fill', '#e5e8f1');
            $('#pt1').css('fill', '#101d42');
        });

        $('#p2').hover(function() {
            $("#datavault").hide();
            $("#shd").show();
            $('#p2').css('fill', '#101d42');
            $('#pt2').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#shd").hide();
            $('#p2').css('fill', '#e5e8f1');
            $('#pt2').css('fill', '#101d42');
        });
        $('#pt2').hover(function() {
            $("#datavault").hide();
            $("#shd").show();
            $('#p2').css('fill', '#101d42');
            $('#pt2').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#shd").hide();
            $('#p2').css('fill', '#e5e8f1');
            $('#pt2').css('fill', '#101d42');
        });

        $('#p3').hover(function() {
            $("#datavault").hide();
            $("#edc").show();
            $('#p3').css('fill', '#101d42');
            $('#pt3').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#edc").hide();
            $('#p3').css('fill', '#e5e8f1');
            $('#pt3').css('fill', '#101d42');
        });
        $('#pt3').hover(function() {
            $("#datavault").hide();
            $("#edc").show();
            $('#p3').css('fill', '#101d42');
            $('#pt3').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#edc").hide();
            $('#p3').css('fill', '#e5e8f1');
            $('#pt3').css('fill', '#101d42');
        });

        $('#p4').hover(function() {
            $("#datavault").hide();
            $("#pwm").show();
            $('#p4').css('fill', '#101d42');
            $('#pt4').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#pwm").hide();
            $('#p4').css('fill', '#e5e8f1');
            $('#pt4').css('fill', '#101d42');
        });
        $('#pt4').hover(function() {
            $("#datavault").hide();
            $("#pwm").show();
            $('#p4').css('fill', '#101d42');
            $('#pt4').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#pwm").hide();
            $('#p4').css('fill', '#e5e8f1');
            $('#pt4').css('fill', '#101d42');
        });

        $('#p5').hover(function() {
            $("#datavault").hide();
            $("#prep").show();
            $(".prep_parm").show();
            $('#p5').css('fill', '#101d42');
            $('#pt5').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#prep").hide();
            $(".prep_parm").hide();
            $('#p5').css('fill', '#e5e8f1');
            $('#pt5').css('fill', '#101d42');
        });
        $('#pt5').hover(function() {
            $("#datavault").hide();
            $("#prep").show();
            $(".prep_parm").show();
            $('#p5').css('fill', '#101d42');
            $('#pt5').css('fill', 'white');
        }, function() {
            $("#datavault").show();
            $("#prep").hide();
            $(".prep_parm").hide();
            $('#p5').css('fill', '#e5e8f1');
            $('#pt5').css('fill', '#101d42');
        });


        $('.carousel').carousel({
            interval: 5000
        });

        $("a.nav-item").click(function(event) {
              event.preventDefault();
              $("html, body").animate({
                  scrollTop: $($(this).attr("href")).offset().top
                }, 500);
        });

    });