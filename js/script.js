/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
function sizeContent() {
  if (detectIE()) {
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (windowWidth < 1200) {
      var minWidth = parseInt($('.tax-container').css('min-width').replace('px', ''));
      var contentWidth = Math.max(windowWidth, minWidth) - $('.tax-content-overview').outerWidth(true) - 28;
      $('.tax-content-detail-header').css('max-width', contentWidth + 'px');
      $('.tax-content-detail-content').css('max-width', contentWidth + 'px');
    }
    else {
      $('.tax-content-detail-header').css('max-width', '');
      $('.tax-content-detail-content').css('max-width', '');
    }
  }
}
$(document).ready(function() {
  sizeContent();
});
$(window).resize(function () {
  sizeContent();
});
$(document).click(function(e) {
  if ($(e.target).hasClass('dropdown-menu') || $(e.target).parents().hasClass('dropdown-menu')) {
    clearMenus();
  }
});
$('#reject').click(function () {
  setTimeout(function() {
    $('#rejectRemark').focus();
  }, 0);
});
$('#annul').click(function () {
  setTimeout(function() {
    $('#annulRemark').focus();
  }, 0);
});
$('#followUp').click(function () {
  setTimeout(function() {
    $('#followUpRemark').focus();
  }, 0);
});
$('#inactivate').click(function () {
  setTimeout(function() {
    $('#inactivateRemark').focus();
  }, 0);
});
$('#block').click(function () {
  setTimeout(function() {
    $('#blockRemark').focus();
  }, 0);
});
$('#editNote').click(function () {
  setTimeout(function() {
    $('#note').focus();
  }, 0);
});
