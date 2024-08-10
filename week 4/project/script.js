$('#addbtn').click(function () {
    var mn = document.getElementById('movname').value;
    var dr = document.getElementById('dir').value;
    var pd = document.getElementById('pro').value;
    var st = document.getElementById('story').value;
    var ct = document.getElementById('cast').value;
    var rd = document.getElementById('rlsdt').value;
    var md = document.getElementById('musdir').value;
    if (mn == '' || dr == '' || pd == '' || st == '' || ct == '' || rd == '' || md == '') {
      $('.checktoast').fadeIn(1000);
      setTimeout(function () {
        $('.checktoast').fadeOut(1000);
      }, 2000);
    } else {
      var form = $('#frm')[0];
      var data = new FormData(form);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: 'addmovie.php',
        dataType: "json",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (result) {
          document.getElementById("frm").reset();
          $('.addtoast').fadeIn(1000);
          setTimeout(function () {
            $('.addtoast').fadeOut(1000);
            $.mobile.changePage("#addmovie", {
              transition: "slide",
              changeHash: false
            });
          }, 2000);
        },
        error: function (request, error) {
          alert('Network error has occurred please try again!');
        }
      });
    }
  });
  // Add New Song 
  $('#sngadbtn').click(function () {
    var sn = document.getElementById('songname').value;
    var mvvn = document.getElementById('mvname').value;
    var ast = document.getElementById('ars').value;
    var lrc = document.getElementById('lrc').value;
    if (sn == '' || mvvn == '' || ast == '' || lrc == '') {
      $('.checktoast').fadeIn(1000);
      setTimeout(function () {
        $('.checktoast').fadeOut(1000);
      }, 2000);
    } else {
      var form = $('#songfrm')[0];
      var data = new FormData(form);
      $.ajax({
        type: "POST",
        url: 'addsong.php',
        data: data,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (result) {
          document.getElementById("songfrm").reset();
          $('.addtoast').fadeIn(1000);
          setTimeout(function () {
            $('.addtoast').fadeOut(1000);
            $.mobile.changePage("#addsong", {
              transition: "slide",
              changeHash: false
            });
          }, 2000);
        },
        error: function (request, error) {
          alert('Network error has occurred please try again!');
        }
      });
    }
  });

  // Regular Expression
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // List view  of Movie on first #pageone 
  $.getJSON("json.php", function (data) {
    $.each(data, function (key, val) {
      $("#dt").append("<li><a href='#page2?mvn=" + val.Movie_name + "&dr=" + val.Director +
        "&prd=" + val.Producer + "&str=" + val.Story_by + "&cst=" + val.Starring + "&rldt=" + val.Release_date +
        "&mudr=" + val.Music_director + "&ig=" + val.Bgimg +
        "' data-transition='slide'><img src='images/" + val.Bgimg +
        "' style='border-radius: 50%; width:200px'>" + val.Movie_name +
        "</a></li>");
    });
    $('#dt').listview('refresh');
  });

  // Details of movie in #Page2
  $(document).on("pagecontainerbeforetransition", function (e, data) {
    if ($.type(data.toPage) !== "undefined" && $.type(data.absUrl) !== "undefined" && data.toPage[0].id ==
      "page2") {
      var mvn = getParameterByName('mvn', data.absUrl);
      var dr = getParameterByName('dr', data.absUrl);
      var prd = getParameterByName('prd', data.absUrl);
      var str = getParameterByName('str', data.absUrl);
      var cst = getParameterByName('cst', data.absUrl);
      var rldt = getParameterByName('rldt', data.absUrl);
      var mudr = getParameterByName('mudr', data.absUrl);
      var ig = getParameterByName('ig', data.absUrl);
      document.getElementById("mvn").innerHTML = mvn;
      document.getElementById("dr").innerHTML = dr;
      document.getElementById("prd").innerHTML = prd;
      document.getElementById("str").innerHTML = str;
      document.getElementById("cst").innerHTML = cst;
      document.getElementById("rldt").innerHTML = rldt;
      document.getElementById("mudr").innerHTML = mudr;
      document.getElementById('ig').src = "images/".concat(ig);

      // List view  of Song in  #page2 of the particular movie
      $.getJSON("jsong.php?mvn=" + mvn, function (data) {
        $.each(data, function (key, val) {
          $("#sngg").append("<li><a href='#page3?sng=" + val.Song_name + "&mvnn=" + val.Movie_name +
            "&arts=" + val.Artists + "&aud=" + val.Audio + "&lrcs=" + val.Lyrics +
            "' data-transition='slide'>" +
            val.Song_name + "</a></li>");
        });
        $('#sngg').listview('refresh');
      });
    }
  });

  // Details of Song in #Page3
  $(document).on("pagecontainerbeforetransition", function (e, data) {
    if ($.type(data.toPage) !== "undefined" && $.type(data.absUrl) !== "undefined" && data.toPage[0].id ==
      "page3") {
      var sng = getParameterByName('sng', data.absUrl);
      var mvnn = getParameterByName('mvnn', data.absUrl);
      var arts = getParameterByName('arts', data.absUrl);
      var lrcs = getParameterByName('lrcs', data.absUrl);
      var aud = getParameterByName('aud', data.absUrl);
      document.getElementById("sng").innerHTML = sng;
      document.getElementById("mvnn").innerHTML = mvnn;
      document.getElementById("arts").innerHTML = arts;
      document.getElementById("lrcs").innerHTML = lrcs;
      document.getElementById("aud").src = "songs/".concat(aud);
    }
  });