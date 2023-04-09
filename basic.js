<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script>
$(document).ready(function(){

$("a:contains(Undo)").css("background-color", "purple");
$("#test").text("Hello world!");
// $("p").css("background-color", "yellow");
// $(":contains='https://api.hyperchat.com/v1/avatars/johndoe@soi/SizedImage/150/100/johndoe1.jpeg']").attr("src", "https://soi-johndoe.hyperchat.com/johndoe1.jpeg");

// for the first image that is sized
// break up the URL:
// https://api.hyperchat.com/v1/avatars/johndoe@soi/SizedImage/150/100/johndoe1.jpeg
// #A1 = https://
// #A2 = api
// #A3 = .hyperchat.com/
// #A4 = v1/avatars
// #A5 = johndoe
// #A6 = @
// #A7 = soi
// #A8 = SizedImage/150/100
// #A9 = johndoe1.jpeg
// construct it to
// https://soi-johndoe.hyperchat.com/johndoe1.jpeg
// #B1 = #A1
// #B2 = #A7
// #B3 = -
// #B4 = #A5
// #B5 = #A3
// #B6 = #A9

var ABCD = $("[src*='SizedImage/150/100/']").first().attr("src");
// var A1 = ABCD.substring(0, 8);
// var A2 = ABCD.substring(8, 11);
// var A3 = ABCD.substring(11, 26);
// var A4 = ABCD.substring(26, 37);
// var countA4 = A4.length;
var totalchars = ABCD.length;
var charstoslash = totalchars - ABCD.lastIndexOf("/") - 1;

var A5 = ABCD.substring(
    ABCD.lastIndexOf("avatars/") + 8,
    ABCD.indexOf("@")
);

// var A6 =  "@";

var A7 = ABCD.substring(
    ABCD.indexOf("@") + 1,
    ABCD.indexOf("@") + 4,
);

// var A8 = ABCD.substring(
//    ABCD.lastIndexOf("/") + 1,
//    ABCD.indexOf("@") + 4
// );

var A9 = ABCD.substring(
    ABCD.lastIndexOf("/") +1,
    ABCD.lastIndexOf("/") + 1 + charstoslash,
);


$("#test3").text("Length: " + totalchars + " Chars to slash : " + charstoslash + " A5: " + A5 + " A7: " + A7 + " A9: " + A9);

$("#test4").text("https://" + A7 + "-" + A5 + ".hyperchat.com/" + A9);

// $("#test2").text($("[src*='SizedImage/150/100/']").first().attr("src"));
$("#test2").text(ABCD);
// $("#test3").text("A1: " + A1 + " A2: " + A2 + " A3: " + A3 + " A4: " + A4 + " A5: " + A5 + " A6: " + A6 + " A7: " + A7);

var allSized = $("[src*='SizedImage/150/100/']").attr("src");

$("#rap").text("blah: " + allSized);

// $("[src*='SizedImage/150/100/']").first().css("border", "1px solid red"); <-- worked

// var firstsrc = $("[src:first*='SizedImage/150/100/']").text();
// var firstsrc = '<p>alex</p>';
// var firstsrc = $("[src*='SizedImage/150/100/']");
// $("#test2").text(firstsrc);
// $("#test2").text("Text: " + $("#test").text());

});
</script>
