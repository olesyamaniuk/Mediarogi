$(function () {
  $(".u-l-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,

    cssEase: "linear",
    prevArrow: ".u-l-why-list-left",
    nextArrow: ".u-l-why-list-right",
  });
});
$(function () {
  $(".u-l-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,

    cssEase: "linear",
    prevArrow: ".u-l-gallery-list-left",
    nextArrow: ".u-l-gallery-list-right",
  });
});
$(function () {
  $(".u-l-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".u-l-reviews-list-left",
    nextArrow: ".u-l-reviews-list-right",
  });
});
