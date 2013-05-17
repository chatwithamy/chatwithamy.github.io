$(document)
    .ready(function () {
    $("#chatmsg")
        .focus()
});
var response;
var textArray1 = ["meow",
				  "I AM NOT STUPID YOU ARE",
				  "God Bless Amy's Baking Company. God Bless America.",
				  "WE WILL NOT BEND TO THE WILL OF SINNERS AND HATERS",
				  "MY FOOD DOES NOT SUCK YOU SUCK",
				  "TO ALL THE YELPS AND REDDITS, BRING IT ON.",
				  "I AM TAKING DOWN YOUR IP ADDRESSES. THE FBI IS ON YOUR CASE. YOU ARE ALL JUST PUNKS",
				  "You people are shit. Yelps shit, Reddits shit. Every shit. Come here, I will fucking show you all.",
				  "We have God on our side.",
				  "You are all pussies",
				  "meow meow meow",
				  "Theres no point in me speaking.",
				  "Samy's going to hurt you haters and reddits.",
				  "CAN I SPEAK? NO ONE LETS ME SPEAK, NOBODY.",
				  "I'M JUST GETTING A WATER ARE YOU GOING TO ATTACK ME FOR GETTING A WATER OHMYGOD",
				  "I will stay strong through the oppression thats being thrown at us.",
				  "WE ARE NOT FREAKING OUT. WE DO NOT CARE ABOUT A 'WITCH HUNT' I AM NOT A WITCH. I AM GODS CHILD. PISS OFF ALL OF YOU. FUCK REDDITS, FUCK YELP AND FUCK ALL OF YOU. BRING IT. WE WILL FIGHT BACK.",
				  "Samy is keeping note of all names here. We will be pursuing action legaly, and against reddit and yelp, for this plot you have come together on. You are all just punks.",
				  "You are all little punks. Nothing. You are all nothing. We are laughing at you. All of you, just fools. We have God on our side, you just have your sites.",
				  "Samy will kick your ass."
				  ];
var textArray2 = ["YOU DON'T NEED TO QUESTION ME YOU REDDITS AND YELPERS.",
				  "YOUR A POISONOUS LITTLE VIPER AND I DON'T ALLOW THAT.",
				  "WHAT DO YOU KNOW WHO THE HELL ARE YOU?",
				  "DON'T LET THE DOOR HIT YOU ON THE WAY OUT."];
var textArray3 = ["I have never had a problem with that. It's good like that. People tell me it's the best that they have had in their life.",
				  "It's delicious like that did you even try it?",
				  "STOP RIDING MY ASS LIKE THERES NO WORSE FLAVOR PROFILE IN THE WORLD.",
				  "NO MORE RAVIOLIS AND NO MORE HAMBURGERS AND NO MORE SALMON BURGERS PEOPLE CAN ONLY HAVE CAKES",
				  "WHY DONT I JUST TAKE EVERYTHING OFF MY MENU AND CLOSE MY DOORS?"
				  ];
var textArray4 = ["IM NOT STUPID YOU ARE. YOU JUST DO NOT KNOW GOOD FOOD. IT IS NOT UNCOMMON TO RESELL THINGS. WALMART DOES NOT MAKE THEIR ELECTRONICS OR TOYS SO LAY OFF!!!!",
				  "I AM WONDER WOMAN, I AM A GREAT CHEF, A GREAT WIFE, AND A GREAT MOM TO MY KIDS. AND WE WILL BE PARENTS TO A HUMAN KID, ONE DAY TO. WE WILL SHOW ALL OF YOU.",
				  "YOU DON'T KNOW US! WE WILL THRIVE!! WE WILL OVERCOME!!! WE ARE STARTING OUR FAMILY AND WE WILL TEACH OUR KID EXACTLY WHAT >>GOD<< WANTS IN THEIR PATH. WE WILL TEACH THEM HOW TO FIGHT AGAINST OPPRESSORS LIKE YOU PEOPLE! WE WILL START A GENERATION OF TRUTHFULNESS AND WE WILL FIGHT TO BRING PLACES LIKE, YELP AND REDDIT, AND HORRIBLE PEOPLE LIKE GORDON TO THE LIGHT. "
				  ];
				  
var textArray5 = ["GO TO SLEEP YOU LITTLE KIDS! DREAM ABOUT BEING SUCCESSFUL BECAUSE WE HAVE A MULTI MILLION BUISNESS WITH SUPPORTERS! YOU CAN'T BRING US DOWN"];
var textArray6 = ["meow!"];
var txt = "";

function input() {
    flag += 1;
    txt = document.getElementById("chatmsg")
        .value;
    txt = txt.replace(/^\s+|\s+$/g, "");
    var escaped = escapeHtml(txt);
    document.getElementById("chatmsg")
        .value = "";
    var new_div = document.createElement("div");
    new_div.className = "logitem";
    new_div.innerHTML = '<p class="youmsg"><strong class="msgsource">You:</strong> <span>' + escaped + "</span></p>";
    if (document.getElementById("typing")) {
        document.getElementById("box")
            .insertBefore(new_div, document.getElementById("typing"));
        $(".logbox")
            .scrollTop($(".logbox")[0].scrollHeight)
    } else {
        document.getElementById("box")
            .innerHTML +=
            '<div class="logitem"><p class="youmsg"><strong class="msgsource">You:</strong> <span>' + escaped + "</span></p></div>";
        $(".logbox")
            .scrollTop($(".logbox")[0].scrollHeight)
    }
}
function checkinput() {
    if (/are you sure/i.test(txt)) return 1;
    else if (/pizza|burger|salad|ravioli|food|restaurant|cake/i.test(txt)) return 0;
    else if (/stupid|idiot|moron|delusional|delusion|fuck|suck|worst/i.test(txt)) return 2;
    else if(/bye|goodnight|night/i.test(txt)) return 4;
    else if(/hi|hello|good morning/i.test(txt)) return 5;
    else return 3;
}

function typing() {
    if (!document.getElementById("typing")) {
        document.getElementById("box")
            .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
        $(".logbox")
            .scrollTop($(".logbox")[0].scrollHeight)
    }
}
var flag = 0;

function amytype() {
    flag -= 1;
    if (response == 0) {
        randomNumber = Math.floor(Math.random() * textArray3.length);
        if (flag == 0) {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray3[randomNumber] +
                "</span></p></div>";
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        } else {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray3[randomNumber] + "</span></p></div>";
            document.getElementById("box")
                .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        }
    } else if (response == 1) {
        randomNumber =
            Math.floor(Math.random() * textArray2.length);
        if (flag == 0) {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray2[randomNumber] + "</span></p></div>";
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        } else {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray2[randomNumber] +
                "</span></p></div>";
            document.getElementById("box")
                .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        }
    } else if (response == 2) {
        randomNumber = Math.floor(Math.random() * textArray4.length);
        if (flag == 0) {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray4[randomNumber] + "</span></p></div>";
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        } else {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray4[randomNumber] + "</span></p></div>";
            document.getElementById("box")
                .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        }
    } else if (response == 3) {
        randomNumber = Math.floor(Math.random() *
            textArray1.length);
        if (flag == 0) {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray1[randomNumber] + "</span></p></div>";
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        } else {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray1[randomNumber] + "</span></p></div>";
            document.getElementById("box")
                .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        }
    } else if (response == 4) {
        randomNumber =
            Math.floor(Math.random() * textArray5.length);
        if (flag == 0) {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray5[randomNumber] + "</span></p></div>";
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        } else {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray5[randomNumber] +
                "</span></p></div>";
            document.getElementById("box")
                .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        }
    }
else if (response == 5) {
        randomNumber =
            Math.floor(Math.random() * textArray6.length);
        if (flag == 0) {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray6[randomNumber] + "</span></p></div>";
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        } else {
            $("#typing")
                .remove();
            document.getElementById("box")
                .innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Amy:</strong> <span>' + textArray6[randomNumber] +
                "</span></p></div>";
            document.getElementById("box")
                .innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Amy is typing...</p></div>';
            $(".logbox")
                .scrollTop($(".logbox")[0].scrollHeight)
        }
    }
}
document.getElementById("sendbtn")
    .onclick = function () {
    $("#chatmsg")
        .focus();
    if ($("#chatmsg")
        .val()
        .match(/^\s*$/));
    else {
        input();
        setTimeout(typing, 4E3);
        response = checkinput();
        setTimeout(amytype, 7E3)
    }
};
$("#chatmsg")
    .keypress(function (e) {
    if ($(this)
        .val()
        .match(/^\s*$/) && e.keyCode == 13 && !e.shiftKey) e.preventDefault();
    else if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        input();
        document.getElementById("chatmsg")
            .value = "";
        setTimeout(typing, 4E3);
        response = checkinput();
        setTimeout(amytype, 7E3)
    }
});
var hex = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

function escapeHtml(originalText) {
    var preescape = "" + originalText;
    var escaped = "";
    var i = 0;
    for (i = 0; i < preescape.length; i++) {
        var p = preescape.charAt(i);
        p = "" + escapeCharOther(p);
        p = "" + escapeTags(p);
        p = "" + escapeBR(p);
        escaped = escaped + p
    }
    return escaped
}
function escapeHtmlTextArea(originalText) {
    var preescape = "" + originalText;
    var escaped = "";
    var i = 0;
    for (i = 0; i < preescape.length; i++) {
        var p = preescape.charAt(i);
        p = "" + escapeCharOther(p);
        p = "" + escapeTags(p);
        escaped = escaped + p
    }
    return escaped
}

function escapeBR(original) {
    var thechar = original.charCodeAt(0);
    switch (thechar) {
    case 10:
        return "<br/>";
        break;
    case "\r":
        break
    }
    return original
}
function escapeNBSP(original) {
    var thechar = original.charCodeAt(0);
    switch (thechar) {
    case 32:
        return "&nbsp;";
        break
    }
    return original
}
function escapeTags(original) {
    var thechar = original.charCodeAt(0);
    switch (thechar) {
    case 60:
        return "&lt;";
        break;
    case 62:
        return "&gt;";
        break;
    case 34:
        return "&quot;";
        break
    }
    return original
}

function escapeCharOther(original) {
    var found = true;
    var thechar = original.charCodeAt(0);
    switch (thechar) {
    case 38:
        return "&amp;";
        break;
    case 198:
        return "&AElig;";
        break;
    case 193:
        return "&Aacute;";
        break;
    case 194:
        return "&Acirc;";
        break;
    case 192:
        return "&Agrave;";
        break;
    case 197:
        return "&Aring;";
        break;
    case 195:
        return "&Atilde;";
        break;
    case 196:
        return "&Auml;";
        break;
    case 199:
        return "&Ccedil;";
        break;
    case 208:
        return "&ETH;";
        break;
    case 201:
        return "&Eacute;";
        break;
    case 202:
        return "&Ecirc;";
        break;
    case 200:
        return "&Egrave;";
        break;
    case 203:
        return "&Euml;";
        break;
    case 205:
        return "&Iacute;";
        break;
    case 206:
        return "&Icirc;";
        break;
    case 204:
        return "&Igrave;";
        break;
    case 207:
        return "&Iuml;";
        break;
    case 209:
        return "&Ntilde;";
        break;
    case 211:
        return "&Oacute;";
        break;
    case 212:
        return "&Ocirc;";
        break;
    case 210:
        return "&Ograve;";
        break;
    case 216:
        return "&Oslash;";
        break;
    case 213:
        return "&Otilde;";
        break;
    case 214:
        return "&Ouml;";
        break;
    case 222:
        return "&THORN;";
        break;
    case 218:
        return "&Uacute;";
        break;
    case 219:
        return "&Ucirc;";
        break;
    case 217:
        return "&Ugrave;";
        break;
    case 220:
        return "&Uuml;";
        break;
    case 221:
        return "&Yacute;";
        break;
    case 225:
        return "&aacute;";
        break;
    case 226:
        return "&acirc;";
        break;
    case 230:
        return "&aelig;";
        break;
    case 224:
        return "&agrave;";
        break;
    case 229:
        return "&aring;";
        break;
    case 227:
        return "&atilde;";
        break;
    case 228:
        return "&auml;";
        break;
    case 231:
        return "&ccedil;";
        break;
    case 233:
        return "&eacute;";
        break;
    case 234:
        return "&ecirc;";
        break;
    case 232:
        return "&egrave;";
        break;
    case 240:
        return "&eth;";
        break;
    case 235:
        return "&euml;";
        break;
    case 237:
        return "&iacute;";
        break;
    case 238:
        return "&icirc;";
        break;
    case 236:
        return "&igrave;";
        break;
    case 239:
        return "&iuml;";
        break;
    case 241:
        return "&ntilde;";
        break;
    case 243:
        return "&oacute;";
        break;
    case 244:
        return "&ocirc;";
        break;
    case 242:
        return "&ograve;";
        break;
    case 248:
        return "&oslash;";
        break;
    case 245:
        return "&otilde;";
        break;
    case 246:
        return "&ouml;";
        break;
    case 223:
        return "&szlig;";
        break;
    case 254:
        return "&thorn;";
        break;
    case 250:
        return "&uacute;";
        break;
    case 251:
        return "&ucirc;";
        break;
    case 249:
        return "&ugrave;";
        break;
    case 252:
        return "&uuml;";
        break;
    case 253:
        return "&yacute;";
        break;
    case 255:
        return "&yuml;";
        break;
    case 162:
        return "&cent;";
        break;
    default:
        found = false;
        break
    }
    if (!found) if (thechar > 127) {
            var c = thechar;
            var a4 = c % 16;
            c = Math.floor(c / 16);
            var a3 = c % 16;
            c = Math.floor(c / 16);
            var a2 = c % 16;
            c = Math.floor(c / 16);
            var a1 = c % 16;
            return "&#x" + hex[a1] + hex[a2] + hex[a3] + hex[a4] + ";"
        } else return original
};
