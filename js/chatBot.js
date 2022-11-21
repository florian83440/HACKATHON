$(function () {
    var INDEX = 0;
    var filtres = [];
    filtres.taille = [
        'changer', 'changé', 'changée',
        'taille', 'taile', 'tail', 'taill',
        'site', 'cite',
        'text', 'texte', 'textes',
        '%'
    ];
    filtres.text = [
        'lecture', 'lectur', 'lectures', 'lécture', 'léctur', 'léctures',
        'automatique', 'automatiques', 'otomatique', 'otomatiques',
        'text', 'texte', 'textes', 'texts'
    ];

    filtres.daltoniens = [
        'daltoniens', 'daltonien',
        'changer', 'changé', 'changée'
    ];

    $("#chat-submit").click(function (e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if (msg.trim() == '') {
            return false;
        }
        generate_message(msg, 'self');
        var buttons = [
            {
                name: 'Existing User',
                value: 'existing'
            },
            {
                name: 'New User',
                value: 'new'
            }
        ];

        msg = chatbotIA(msg);



        setTimeout(function () {
            generate_message(msg, 'user');
        }, 1000);

    });

    function chatbotIA(msg) {
        userMsg = msg.split(" ");
        var taille = 0; var text = 0; var daltoniens = 0;
        var msgIA = "";
        userMsg.forEach(word => {
            filtres.taille.forEach(filtre => {
                if (word.includes(filtre)) {
                    taille += 1;
                }
            });

            filtres.text.forEach(filtre => {
                if (word.includes(filtre)) {
                    text += 1;
                }
            });

            filtres.daltoniens.forEach(filtre => {
                if (word.includes(filtre)) {
                    daltoniens += 1;
                }
            });
        });

        if (taille > text && taille > daltoniens) {
            console.log("IA : Match pour l'action changer la taille de la page : " + taille);
            msgIA = "Souhaitez vous changer la taille du texte de la page à 'valeur de la taille'% ?"; // recup la réponse avec oui ou non
        } else if (text > taille && text > daltoniens) {
            console.log("IA : Match pour la lecture des textes automatique : " + text);
            msgIA = "La lecture des textes automatique à été prise en comptes.";
        } else if (daltoniens > text && daltoniens > taille) {
            console.log("IA : Match pour l'options pour les daltoniens : " + daltoniens);
            msgIA = "Souhaitez vous activer l'options pour les daltoniens se prénommant 'nom de l'option' ?";
        } else {
            msgIA = "Désolé, je ne suis pas capable de répondre à votre demande, veuillez vous référer au consigne d'uitlisation.";
        }
        /*console.log(filtres);
        console.log(userMsg);*/

        return msgIA;
    }


    function generate_message(msg, type) {
        INDEX++;
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }

    function generate_button_message(msg, buttons) {
        /* Buttons should be object array 
          [
            {
              name: 'Existing User',
              value: 'existing'
            },
            {
              name: 'New User',
              value: 'new'
            }
          ]
        */
        INDEX++;
        var btn_obj = buttons.map(function (button) {
            return "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\"" + button.value + "\">" + button.name + "<\/a><\/li>";
        }).join('');
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg user\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "          <div class=\"cm-msg-button\">";
        str += "            <ul>";
        str += btn_obj;
        str += "            <\/ul>";
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
        $("#chat-input").attr("disabled", true);
    }

    $(document).delegate(".chat-btn", "click", function () {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })

    $("#chat-circle").click(function () {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

    $(".chat-box-toggle").click(function () {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

})