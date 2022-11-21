$(function() {
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

    $("#chat-submit").click(function(e) {
      e.preventDefault();
      var msg = $("#chat-input").val(); 
      if(msg.trim() == ''){
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



      setTimeout(function() {      
        generate_message(msg, 'user');  
      }, 1000);
      
    });

    function matchMsg(action, msg) {
      var taille = 0; var text = 0; var daltoniens = 0; var pourcentage = ""; validAction = "";
      var answer = []; answer.error = ""; answer.action = ""; answer.data = ""; answer.validAction = ""; answer.isAction = 0;

      msg.forEach(word => {
        if(word.includes("%")) pourcentage = word;
        if(word == "oui") validAction = true;
        if(word == "non") validAction = false;

        filtres.taille.forEach(filtre => { if(word.includes(filtre)) { answer.isAction++; taille++; } });
        filtres.text.forEach(filtre => { if(word.includes(filtre)) { answer.isAction++; text++; } });
        filtres.daltoniens.forEach(filtre => { if(word.includes(filtre)) { answer.isAction++; daltoniens++; } });        
      });


      if(validAction == true && answer.isAction == 0) {
        answer.validAction = true;
      } else if (validAction == false && answer.isAction == 0) {
        answer.validAction = false;
      } else if (validAction == "" && answer.isAction > 0) {

        if(taille > text && taille > daltoniens) {
          pour = pourcentage.split("%");
          if(pourcentage == "" || pour < 2 || !parseInt(pour[0])) {
            answer.error = "badSize";
          } else {
            answer.action = "taille";
            answer.data = pourcentage;
          }
        } else if(text > taille && text > daltoniens) { 
          answer.action = "automaticRead";
        } else if(daltoniens > text && daltoniens > taille) { 
          answer.action = "daltoniens";
          answer.data = "data";
        } else {
          answer.error = "badIARequest";
        }
      }


      if(action == "action") {
        return answer;
      } else {
        return "";
      }

    }

    
    function chatbotIA(msg) {
      userMsg = msg.replace(" %", "%").split(" "); var msgIA = ""; 
      answer = matchMsg("action", userMsg);

      console.log(answer);
//je souhaiterais changer la taille du texte à 180%
      error = answer.error; action = answer.action; data = answer.data; validAction = answer.validAction; isAction = answer.isAction;
      getValidAction = ""; getValidData = "";
      $("div.chat-logs").find("div.user").each(function() {
        getValidAction = $(this).find("span.botConfirmAction").text();
        getValidData = $(this).find("span.botConfirmData").text();
      });


      if(validAction == true && isAction == 0 && getValidAction != "") {
        if(getValidAction == "taille") {
          $("body").css("font-size", getValidData.split("%")[0] / 100 + "em");
        } else if(getValidAction == "daltoniens") {

        } else if(getValidAction == "automaticRead") {
          
        }

        msgIA = "Action valider : " + getValidAction + " valeur : " + getValidData;
      } else if(validAction == false && isAction == 0) {
        msgIA = "COMMAND HELP - RECAP";
      } else if (validAction == "" && isAction > 0) {
        if(error == "") {
          if(action == "taille") {
            msgIA = "Poucentage : ";
          } else if (action == "daltoniens") {
            msgIA = "Mode Daltoniens";
          } else if (action == "automaticRead") {
            msgIA = "Mode Automatic read";
          }
          msgIA += "<span class='botConfirmAction'>" + action + "</span><span class='botConfirmData'>" + data + "</span>";
        } else {
          if(error == "badSize") {
            msgIA = "Error : missing percentage !";
          } else if (error == "badIARequest") {
            msgIA = "Error : bad usage of IA !";
          }
          
        }
      } else {
        msgIA = "COMMAND HELP - RECAP";
      }

/*
      if(validAction == true && whatIsAction == 0) {
        msgIA = "action prise en compte";
      } else if (validAction == false && whatIsAction == 0) {
        msgIA = "action abandoner";
      } else if (validAction == "" && whatIsAction > 0) {

        if(taille > text && taille > daltoniens) {
          pour = pourcentage.split("%");
          if(pourcentage == "" || pour < 2 || !parseInt(pour[0])) {
            msgIA = "Saisisez le pourcentage !";
          } else {
            console.log("IA : Match pour l'action changer la taille de la page : " + taille); 
            msgIA = "Souhaitez vous changer la taille du texte de la page à " + pourcentage + " ?"; // recup la réponse avec oui ou non
          }
        } else if(text > taille && text > daltoniens) { 
          console.log("IA : Match pour la lecture des textes automatique : " + text); 
          msgIA = "La lecture des textes automatique à été prise en comptes.";
        } else if(daltoniens > text && daltoniens > taille) { 
          console.log("IA : Match pour l'options pour les daltoniens : " + daltoniens); 
          msgIA = "Souhaitez vous activer l'options pour les daltoniens se prénommant 'nom de l'option' ?";
        } else {
          msgIA = "Désolé, je ne suis pas capable de répondre à votre demande, veuillez vous référer au consigne d'uitlisation.";
        }
      }*/

      return msgIA;
    }


    function generate_message(msg, type) {
      INDEX++;
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-"+INDEX).hide().fadeIn(300);
      if(type == 'self'){
       $("#chat-input").val(''); 
      }    
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
    }  
    
    function generate_button_message(msg, buttons){    
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
      var btn_obj = buttons.map(function(button) {
         return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
      }).join('');
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
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
      $("#cm-msg-"+INDEX).hide().fadeIn(300);   
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
      $("#chat-input").attr("disabled", true);
    }
    
    $(document).delegate(".chat-btn", "click", function() {
      var value = $(this).attr("chat-value");
      var name = $(this).html();
      $("#chat-input").attr("disabled", false);
      generate_message(name, 'self');
    })
    
    $("#chat-circle").click(function() {    
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
  })