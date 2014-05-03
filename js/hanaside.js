/* 
 * This script is necessary to run HanA Sidebar
 */

jQuery(document).ready(function($) {
    $(".hanaside-left-toggle").click(function(){
        $(this).toggleClass("toggled");
        $(".hanaside-left").toggleClass("opened");
    });
    $(".hanaside-right-toggle").click(function(){
        $(this).toggleClass("toggled");
        $(".hanaside-right").toggleClass("opened");
    });
    $(".hanaside-top-toggle").click(function(){
        $(this).toggleClass("toggled");
        $(".hanaside-top").toggleClass("opened");
    });
    $(".hanaside-bottom-toggle").click(function(){
        $(this).toggleClass("toggled");
        $(".hanaside-bottom").toggleClass("opened");
    });
});