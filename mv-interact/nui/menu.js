var Config = new Object();
Config.closeKeys = [27, 121];
var keepOpen = false;
var cancelEvent = null;
var sliderObjects = null;
var forceDisableNext = false;
var forceDisablePrev = true;
var menuTypeActive = null;
var enableKeySwitch = false;
var autoPreview = false;
var previewTriggerType = null;
var previewTrigger = null;
var anyData = null;
var itemInfo = null;
var swapKeyEnabled = false;
var preventClose = false;
var backbtn = false;
var taskHandsUp = false;
var resetCamera = null;
var colorTrigger = null;
var colorTriggerType = null;
var allowSkinMouseMove = false;
var menuOpen = false;
let ResourceName = GetParentResourceName();
var backbtn_action = null;
var backbtn_trigger = null;
var backbtn_value = null;
window.addEventListener("message", function (_0x592dd9) {
  if (_0x592dd9.data.action == "ChangeMenuTitle") {
    $("#menuTitle").html(_0x592dd9.data.title);
    return;
  }
  if (_0x592dd9.data.action != "resetMouseText") {
    $("body").css({
      top: "27%"
    });
  }
  if (_0x592dd9.data.action == "openMenu") {
    menuOpen = true;
    if (window.screen.width <= 1500) {
      $("body").css({
        right: "-20%"
      });
    } else if (window.screen.width <= 1700) {
      $("body").css({
        right: "-25%"
      });
    } else {
      $("body").css({
        right: "-35em"
      });
    }
    $("body").css({
      top: "27%"
    });
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#resetCamera").css({
      display: "none"
    });
    $("#formButtons").css({
      display: "block"
    });
    keepOpen = _0x592dd9.data.keepOpen;
    if (_0x592dd9.data.cancel !== undefined && _0x592dd9.data.cancel !== null) {
      cancelEvent = _0x592dd9.data.cancel;
    }
    populateMenu(_0x592dd9.data);
    $("#menuContainer").css({
      display: "block"
    });
    menuTypeActive = "normal";
  } else if (_0x592dd9.data.action == "openForm") {
    menuOpen = true;
    $("body").css({
      right: "30em"
    });
    if (window.screen.height <= 900) {
      $("body").css({
        top: "2%"
      });
    } else {
      $("body").css({
        top: "10%"
      });
    }
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#formButtons").css({
      display: "block"
    });
    keepOpen = _0x592dd9.data.keepOpen;
    if (_0x592dd9.data.cancel !== undefined && _0x592dd9.data.cancel !== null) {
      cancelEvent = _0x592dd9.data.cancel;
    }
    $("#formDiv").css({
      "max-width": "" + _0x592dd9.data.width + ""
    }).css({
      "min-width": "" + _0x592dd9.data.width + ""
    });
    if (_0x592dd9.data.center === true) {
      $("#formDiv").addClass("mx-auto");
    } else {
      $("#formDiv").removeClass("mx-auto");
    }
    populateForm(_0x592dd9.data);
    menuTypeActive = "form";
  } else if (_0x592dd9.data.action == "simulateClose") {
    $("[data-act=skinBack]").click();
    setTimeout(function () {
      if (menuOpen === true) {
        menuOpen = false;
        $("[data-act=closeMenu]").click();
      }
    }, 500);
  } else if (_0x592dd9.data.action == "updateMouseSkinMove") {
    $("#mouseMovementSkin").html(_0x592dd9.data.text);
  } else if (_0x592dd9.data.action == "openBlips") {
    menuOpen = true;
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "block"
    });
    $("#blipId").data("trigger", _0x592dd9.data.trigger);
    $("#blipId").data("triggertype", _0x592dd9.data.triggertype);
    if (_0x592dd9.data.cancel !== undefined && _0x592dd9.data.cancel !== null) {
      cancelEvent = _0x592dd9.data.cancel;
    }
  } else if (_0x592dd9.data.action == "openBlipColor") {
    colorTrigger = null;
    colorTriggerType = null;
    menuOpen = true;
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "block"
    });
    colorTrigger = _0x592dd9.data.trigger;
    colorTriggerType = _0x592dd9.data.triggertype;
    if (_0x592dd9.data.cancel !== undefined && _0x592dd9.data.cancel !== null) {
      cancelEvent = _0x592dd9.data.cancel;
    }
  } else if (_0x592dd9.data.action == "closeMenu") {
    menuOpen = false;
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#swapKey").css({
      display: "none"
    });
    $("#allowHandsUp").css({
      display: "none"
    });
    $("#resetCamera").css({
      display: "none"
    });
    cancelEvent = null;
    swapKeyEnabled = false;
    cancelMethod = null;
    forceDisableNext = false;
    forceDisablePrev = true;
    menuTypeActive = null;
    autoPreview = false;
    previewTriggerType = null;
    previewTrigger = null;
    anyData = null;
    preventClose = false;
    backbtn = false;
    taskHandsUp = false;
    resetCamera = null;
    colorTrigger = null;
    colorTriggerType = null;
  } else if (_0x592dd9.data.action == "openSlider") {
    menuOpen = true;
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#loading").css({
      display: "none"
    });
    if (_0x592dd9.data.cancel !== undefined && _0x592dd9.data.cancel !== null) {
      cancelEvent = _0x592dd9.data.cancel;
    }
    generateSlider(_0x592dd9.data);
    menuTypeActive = "slider";
  } else if (_0x592dd9.data.action == "skinSliders") {
    menuOpen = true;
    $("#menuContainer").css({
      display: "none"
    });
    $("#formContainer").css({
      display: "none"
    });
    $("#blipContainerColor").css({
      display: "none"
    });
    $("#blipContainer").css({
      display: "none"
    });
    $("#colorPickerContainer").css({
      display: "none"
    });
    $("#skinContainer").css({
      display: "none"
    });
    $("#selectorContainer").css({
      display: "none"
    });
    $("#loading").css({
      display: "none"
    });
    skinMenu(_0x592dd9.data);
    menuTypeActive = "skinMenu";
  } else if (_0x592dd9.data.action == "enableSlider") {
    menuOpen = true;
    if (!forceDisableNext) {
      $("#nxtBtn").html("<i class=\"fas fa-arrow-right\"></i>");
      $("#nxtBtn").removeClass("disabled");
    }
    if (!forceDisablePrev) {
      $("#preBtn").removeClass("disabled");
      $("#preBtn").html("<i class=\"fas fa-arrow-left\"></i>");
    }
    $("#loading").css({
      display: "none"
    });
  } else if (_0x592dd9.data.action == "resetMouseText") {
    $("[data-actionID=menuSwitcher]").css({
      display: "block"
    }).html("<small>PRESS <span class=\"text-dark\">Z</span> TO ACCESS IN-GAME MOUSE</small>");
  } else if (_0x592dd9.data.action == "colorPicker") {
    menuOpen = true;
    $("#colorDiv").css({
      "max-width": "" + _0x592dd9.data.width + ""
    }).css({
      "min-width": "" + _0x592dd9.data.width + ""
    });
    generateColorPicker(_0x592dd9.data);
  }
});
var colorPreview = $("#menuOptions");
var r = document.querySelector("#r");
var g = document.querySelector("#g");
var b = document.querySelector("#b");
function setColor() {
  $("#colorSave").data("r", r.value);
  $("#colorSave").data("g", g.value);
  $("#colorSave").data("b", b.value);
  $("#colorPreview").data("r", r.value);
  $("#colorPreview").data("g", g.value);
  $("#colorPreview").data("b", b.value);
  $("#selectedColor").css("background-color", "rgb(" + r.value + "," + g.value + "," + b.value + ")");
  if (autoPreview === true) {
    if (previewTrigger !== null && previewTriggerType !== null) {
      $.post("http://" + ResourceName + "/colorPreview", JSON.stringify({
        r: parseInt(r.value),
        g: parseInt(g.value),
        b: parseInt(b.value),
        action: previewTrigger,
        trigger: previewTriggerType,
        data: anyData
      }));
    }
  }
}
function generateColorPicker(_0x61d73a) {
  $("#menuContainer").css({
    display: "none"
  });
  $("#formContainer").css({
    display: "none"
  });
  $("#blipContainerColor").css({
    display: "none"
  });
  $("#blipContainer").css({
    display: "none"
  });
  $("#colorPickerContainer").css({
    display: "none"
  });
  $("#skinContainer").css({
    display: "none"
  });
  $("#selectorContainer").css({
    display: "none"
  });
  $("#colorSave").removeClass("disabled");
  $("#colorPreview").removeClass("disabled");
  $("#r").val("0");
  $("#g").val("0");
  $("#b").val("0");
  if (_0x61d73a.title !== null && _0x61d73a.title !== undefined) {
    $("#colorTitle").html(_0x61d73a.title);
  }
  if (_0x61d73a.options.menuSwitcher !== undefined && _0x61d73a.options.menuSwitcher !== null && _0x61d73a.options.menuSwitcher === true) {
    enableKeySwitch = true;
    $("[data-actionID=menuSwitcher]").css({
      display: "block"
    }).html("<small>PRESS <span class=\"text-dark\">Z</span> TO ACCESS IN-GAME MOUSE</small>");
  }
  if (_0x61d73a.options.autoPreview !== undefined && _0x61d73a.options.autoPreview !== null && _0x61d73a.options.autoPreview === true) {
    autoPreview = true;
    if (_0x61d73a.data !== undefined && _0x61d73a.data !== null) {
      anyData = _0x61d73a.data;
    }
  }
  if (_0x61d73a.cancel !== undefined && _0x61d73a.cancel !== null) {
    cancelEvent = _0x61d73a.cancel;
  }
  if (_0x61d73a.triggers.saveTrigger !== undefined && _0x61d73a.triggers.saveTrigger !== null) {
    $("#colorSave").data("trigger", _0x61d73a.triggers.saveTrigger.trigger);
    $("#colorSave").data("type", _0x61d73a.triggers.saveTrigger.type);
    if (_0x61d73a.data !== undefined && _0x61d73a.data !== null) {
      $("#colorSave").data("data", _0x61d73a.data);
    }
  } else {
    $("#colorSave").addClass("disabled");
  }
  if (_0x61d73a.triggers.previewTrigger !== undefined && _0x61d73a.triggers.previewTrigger !== null) {
    $("#colorPreview").data("trigger", _0x61d73a.triggers.previewTrigger.trigger);
    $("#colorPreview").data("type", _0x61d73a.triggers.previewTrigger.type);
    previewTrigger = _0x61d73a.triggers.previewTrigger.trigger;
    previewTriggerType = _0x61d73a.triggers.previewTrigger.type;
    if (_0x61d73a.data !== undefined && _0x61d73a.data !== null) {
      $("#colorPreview").data("data", _0x61d73a.data);
      anyData = _0x61d73a.data;
    }
  } else {
    $("#colorPreview").addClass("disabled");
  }
  setColor();
  $("#colorPickerContainer").css({
    display: "block"
  });
}
function populateMenu(_0x3a35d2) {
  cancelEvent = null;
  $("#menuContainer").css({
    display: "none"
  });
  $("#formContainer").css({
    display: "none"
  });
  $("#blipContainerColor").css({
    display: "none"
  });
  $("#blipContainer").css({
    display: "none"
  });
  $("#colorPickerContainer").css({
    display: "none"
  });
  $("#skinContainer").css({
    display: "none"
  });
  $("#selectorContainer").css({
    display: "none"
  });
  $("#menuOptions").html("");
  backbtn = false;
  backbtn_action = null;
  backbtn_trigger = null;
  backbtn_value = null;
  if (_0x3a35d2.menuTitle !== null && _0x3a35d2.menuTitle !== undefined) {
    $("#menuTitle").html(_0x3a35d2.menuTitle);
  }
  var _0x2ff893 = 0;
  $.each(_0x3a35d2.menuOptions, function (_0x1f47ce, _0x965eb2) {
    _0x2ff893 = _0x2ff893 + 1;
    if (_0x965eb2.subMenu !== null && _0x965eb2.subMenu !== undefined) {
      $("#menuOptions").append("<div class=\"btn-group\" role=\"group\"><button id=\"" + _0x1f47ce + "\" data-menuid=\"" + _0x1f47ce + "\" type=\"button\" class=\"btn btn-" + _0x965eb2.color + " dropdown-toggle " + (_0x965eb2.opt !== null && _0x965eb2.opt !== undefined && _0x965eb2.opt === "truncate" ? "text-truncate" : "") + "\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" + (_0x965eb2.opt !== undefined && _0x965eb2.opt !== null && _0x965eb2.opt === true ? "<marquee id=\"marquee-" + _0x1f47ce + "\" behavior=\"scroll\" direction=\"left\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\">" + _0x965eb2.label + "</marquee>" : _0x965eb2.label) + "</button><div class=\"dropdown-menu subMenuScroll\" aria-labelledby=\"" + _0x1f47ce + "\" style=\"max-height:300px; overflow-y:scroll;\" data-boundary=\"viewport\" id=\"drop-" + _0x1f47ce + "\"></div></div>");
      $.each(_0x965eb2.subMenu, function (_0x37a5a5, _0x340a12) {
        $("#drop-" + _0x1f47ce).append("<a class=\"dropdown-item\" href=\"#\" data-act=\"completeRequest\" data-subid=\"" + _0x1f47ce + "-" + _0x37a5a5 + "\" data-action=\"" + _0x340a12.action + "\" data-trigger=\"" + _0x340a12.triggertype + "\" style=\"z-index:9999;\">" + _0x340a12.label + "</a>");
        $("[data-subid=" + _0x1f47ce + "-" + _0x37a5a5 + "]").data("value", _0x340a12.value);
      });
    } else {
      $("#menuOptions").append("<button type=\"button\" id=\"" + _0x1f47ce + "\" class=\"btn btn-" + _0x965eb2.color + " " + (_0x965eb2.opt !== null && _0x965eb2.opt !== undefined && _0x965eb2.opt === "truncate" ? "text-truncate" : "") + "\" data-menuid=\"" + _0x1f47ce + "\" data-act=\"completeRequest\" data-action=\"" + _0x965eb2.action + "\" data-trigger=\"" + _0x965eb2.triggertype + "\">" + (_0x965eb2.opt !== undefined && _0x965eb2.opt !== null ? "<marquee behavior=\"scroll\" direction=\"left\"" + (_0x965eb2.opt === "reverse" ? "onmouseover=\"this.start();\" onmouseout=\"this.stop();\">" : "onmouseover=\"this.stop();\" onmouseout=\"this.start();\">") + _0x965eb2.label + "</marquee>" : _0x965eb2.label) + "</button>");
      if (_0x965eb2.opt !== null && _0x965eb2.opt !== undefined && _0x965eb2.opt === "reverse") {
        document.getElementById("marquee-" + _0x1f47ce).stop();
      }
      $("[data-menuid=" + _0x1f47ce + "]").data("value", _0x965eb2.value);
    }
  });
  if (_0x2ff893 >= 12) {
    document.body.style.top = "15%";
  } else {
    document.body.style.top = "27%";
  }
  enableKeySwitch = false;
  if (_0x3a35d2.options.enableKeySwitch !== undefined && _0x3a35d2.options.enableKeySwitch !== null) {
    enableKeySwitch = true;
  }
  $("#menuCloseButton2").css({
    display: "none"
  });
  if (_0x3a35d2.options.backbtn !== undefined && _0x3a35d2.options.backbtn !== null) {
    $("#menuCloseButton2").css({
      display: "block"
    });
    backbtn = true;
    backbtn_action = _0x3a35d2.options.backbtn.action;
    backbtn_trigger = _0x3a35d2.options.backbtn.trigger;
    backbtn_value = _0x3a35d2.options.backbtn.value;
  }
  $("#menuCloseButton").css({
    display: "block"
  });
  if (_0x3a35d2.options.preventClose !== undefined && _0x3a35d2.options.preventClose !== null && _0x3a35d2.options.preventClose === true) {
    $("#menuCloseButton").css({
      display: "none"
    });
    preventClose = true;
  }
  if (_0x3a35d2.cancel !== undefined) {
    cancelEvent = _0x3a35d2.cancel;
  }
  $("#menuContainer").css({
    display: "block"
  });
}
function populateForm(_0x4fdc86) {
  cancelEvent = null;
  $("#menuContainer").css({
    display: "none"
  });
  $("#formContainer").css({
    display: "none"
  });
  $("#blipContainerColor").css({
    display: "none"
  });
  $("#blipContainer").css({
    display: "none"
  });
  $("#colorPickerContainer").css({
    display: "none"
  });
  $("#skinContainer").css({
    display: "none"
  });
  $("#selectorContainer").css({
    display: "none"
  });
  $("#formOptions").html("");
  preventClose = false;
  backbtn = false;
  backbtn_action = null;
  backbtn_trigger = null;
  backbtn_value = null;
  if (_0x4fdc86.menuTitle !== null && _0x4fdc86.menuTitle !== undefined) {
    $("#formTitle").html(_0x4fdc86.menuTitle);
  }
  $("#formOptions").append("<input type=\"hidden\" name=\"submitAction\" id=\"submitAction\" value=\"" + _0x4fdc86.submitTrigger + "\"><input type=\"hidden\" name=\"submitMethod\" id=\"submitMethod\" value=\"" + _0x4fdc86.submitMethod + "\">");
  $.each(_0x4fdc86.formOptions, function (_0x14a471, _0x342d60) {
    if (_0x342d60.type == "wardrobe_outift") {
      if (_0x342d60.align !== undefined && _0x342d60.align !== null) {
        align = _0x342d60.align;
      } else {
        align = "left";
      }
      const _0x885e11 = _0x342d60.style != undefined && _0x342d60.style || "";
      const _0x2aa2fb = "<div class=\"col-12 p-2 text-" + align + "\">" + _0x342d60.image + "</div>";
      const _0x2371f9 = "<div class=\"col-12 p-2 text-center\">" + _0x342d60.outfit_label + "</div>";
      _0x342d60.Select_BtnColor = _0x342d60.Select_BtnColor != undefined && _0x342d60.Select_BtnColor || "info";
      _0x342d60.Image_BtnColor = _0x342d60.Select_BtnColor != undefined && _0x342d60.Select_BtnColor || "info";
      _0x342d60.Del_BtnColor = _0x342d60.Del_BtnColor != undefined && _0x342d60.Del_BtnColor || "danger";
      const _0x1a5552 = "<div style=\"display:inline-block\"><div class=\"col-12 p-0 text-center\"><button id=\"" + _0x342d60.Select_BtnId + "\" value=\"" + _0x342d60.Select_BtnValue + "\" class=\"btn btn-sm btn-" + _0x342d60.Select_BtnColor + " m-1\" data-act=\"submitFormCustomBtn\">" + _0x342d60.Select_BtnLabel + "</button></div></div>";
      const _0x446db1 = "<div style=\"display:inline-block\"><div class=\"col-12 p-0 text-center\"><button id=\"" + _0x342d60.Image_BtnId + "\" value=\"" + _0x342d60.Image_BtnValue + "\" class=\"btn btn-sm btn-" + _0x342d60.Image_BtnColor + " m-1\" data-act=\"submitFormCustomBtn\">" + _0x342d60.Image_BtnLabel + "</button></div></div>";
      const _0x263404 = "<div style=\"display:inline-block\"><div class=\"col-12 p-0 text-center\"><button id=\"" + _0x342d60.Del_BtnId + "\" value=\"" + _0x342d60.Del_BtnValue + "\" class=\"btn btn-sm btn-" + _0x342d60.Del_BtnColor + " m-1\" data-act=\"submitFormCustomBtn\">" + _0x342d60.Del_BtnLabel + "</button></div></div>";
      $("#formOptions").append("<div " + _0x885e11 + " class=\"row\">" + _0x2371f9 + _0x2aa2fb + _0x1a5552 + _0x446db1 + _0x263404 + "</div>");
    }
    if (_0x342d60.type == "writting") {
      if (_0x342d60.align !== undefined && _0x342d60.align !== null) {
        align = _0x342d60.align;
      } else {
        align = "left";
      }
      const _0x36dc7f = _0x342d60.style != undefined && _0x342d60.style || "";
      $("#formOptions").append("<div " + _0x36dc7f + " class=\"row\"><div class=\"col-12 p-2 text-" + align + "\">" + _0x342d60.value + "</div></div>");
    }
    if (_0x342d60.type == "hr") {
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-0\"><hr></div></div>");
    }
    if (_0x342d60.type == "number") {
      if (_0x342d60.placeholder !== undefined && _0x342d60.placeholder !== null) {
        placeholder = " placeholder=\"" + _0x342d60.placeholder + "\"";
      } else {
        placeholder = "";
      }
      if (_0x342d60.readonly !== undefined && _0x342d60.readonly === true) {
        readonly = " readonly=\"readonly\"";
      } else {
        readonly = "";
      }
      if (_0x342d60.value !== undefined && _0x342d60.value !== null) {
        value = " value=\"" + _0x342d60.value + "\"";
      } else {
        value = "";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label><input type=\"number\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\"" + placeholder + readonly + value + " class=\"form-control\"></div></div>");
    }
    if (_0x342d60.type == "text") {
      if (_0x342d60.placeholder !== undefined && _0x342d60.placeholder !== null) {
        placeholder = " placeholder=\"" + _0x342d60.placeholder + "\"";
      } else {
        placeholder = "";
      }
      if (_0x342d60.readonly !== undefined && _0x342d60.readonly === true) {
        readonly = " readonly=\"readonly\"";
      } else {
        readonly = "";
      }
      if (_0x342d60.value !== undefined && _0x342d60.value !== null) {
        value = " value=\"" + _0x342d60.value + "\"";
      } else {
        value = "";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label><input type=\"text\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\"" + placeholder + readonly + value + " class=\"form-control\"></div></div>");
    }
    if (_0x342d60.type == "date") {
      if (_0x342d60.placeholder !== undefined && _0x342d60.placeholder !== null) {
        placeholder = " placeholder=\"" + _0x342d60.placeholder + "\"";
      } else {
        placeholder = "";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label><input type=\"date\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\"" + placeholder + " class=\"form-control\"></div></div>");
    }
    if (_0x342d60.type == "range") {
      if (_0x342d60.step !== undefined && _0x342d60.step !== null) {
        var _0x3fb9ef = _0x342d60.step;
      } else {
        var _0x3fb9ef = 1;
      }
      if (_0x342d60.suffix !== undefined && _0x342d60.suffix !== null) {
        suffix = " " + _0x342d60.suffix;
      } else {
        suffix = "";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "<br>Ð˜Ð·Ð±Ñ€Ð°Ð½Ð° ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚: <strong><span id=\"" + _0x342d60.name + "-value\" class=\"text-info\">" + _0x342d60.default + "</span>" + suffix + "</strong></small></label><input type=\"range\" name=\"" + _0x342d60.name + "\" step=\"" + _0x3fb9ef + "\" id=\"" + _0x342d60.name + "\" min=\"" + _0x342d60.min + "\" max=\"" + _0x342d60.max + "\" value=\"" + _0x342d60.default + "\" class=\"form-control\"></div></div>");
      $("#" + _0x342d60.name).on("input", function () {
        $("#" + _0x342d60.name + "-value").html(this.value);
      });
    }
    if (_0x342d60.type == "password") {
      if (_0x342d60.placeholder !== undefined && _0x342d60.placeholder !== null) {
        placeholder = " placeholder=\"" + _0x342d60.placeholder + "\"";
      } else {
        placeholder = "";
      }
      if (_0x342d60.readonly !== undefined && _0x342d60.readonly === true) {
        readonly = " readonly=\"readonly\"";
      } else {
        readonly = "";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label><input type=\"password\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\"" + placeholder + readonly + " class=\"form-control\"></div></div>");
    }
    if (_0x342d60.type == "textbox") {
      if (_0x342d60.placeholder !== undefined && _0x342d60.placeholder !== null) {
        placeholder = " placeholder=\"" + _0x342d60.placeholder + "\"";
      } else {
        placeholder = "";
      }
      if (_0x342d60.readonly !== undefined && _0x342d60.readonly === true) {
        readonly = " readonly=\"readonly\"";
      } else {
        readonly = "";
      }
      let _0xdf023a = _0x342d60.AreaRows !== undefined && _0x342d60.AreaRows || "";
      let _0xa71c61 = _0x342d60.AreaCols !== undefined && _0x342d60.AreaCols || "";
      if (_0xdf023a != "") {
        _0xdf023a = "rows=\"" + _0xdf023a + "\"";
      }
      if (_0xa71c61 != "") {
        _0xa71c61 = "cols=\"" + _0xa71c61 + "\"";
      }
      let _0x1a16e1 = "";
      if (_0x342d60.value != "" && _0x342d60.value !== undefined && _0x342d60.value !== null) {
        _0x1a16e1 = _0x342d60.value;
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label><textarea textval name=\"" + _0x342d60.name + "\"" + _0xa71c61 + " " + _0xdf023a + " id=\"" + _0x342d60.name + "\"" + placeholder + readonly + " class=\"form-control\">" + _0x1a16e1 + "</textarea></div></div>");
    }
    if (_0x342d60.type == "hidden") {
      $("#formOptions").append("<input type=\"hidden\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\" class=\"form-control\" value=\"" + _0x342d60.value + "\">");
    }
    if (_0x342d60.type == "checkbox") {
      if (_0x342d60.ischecked !== undefined && _0x342d60.ischecked !== null) {
        $("#formOptions").append("<div class=\"row\"><div class=\"col-10 p-2 my-auto\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label></div><div class=\"col-2 text-center p-2\"><input type=\"checkbox\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\" value=\"" + _0x342d60.value + "\"checked class=\"form-control\"></textarea></div></div>");
      } else {
        $("#formOptions").append("<div class=\"row\"><div class=\"col-10 p-2 my-auto\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label></div><div class=\"col-2 text-center p-2\"><input type=\"checkbox\" name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\" value=\"" + _0x342d60.value + "\" class=\"form-control\"></textarea></div></div>");
      }
    }
    if (_0x342d60.type == "dropdown") {
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2\"><label for=\"" + _0x342d60.name + "\"><small>" + _0x342d60.label + "</small></label><select name=\"" + _0x342d60.name + "\" id=\"" + _0x342d60.name + "\" class=\"form-control\"></select></div></div>");
      $("#" + _0x342d60.name).html("");
      $.each(_0x342d60.options, function (_0xa125ea, _0x511089) {
        if (_0x511089.data !== undefined) {
          $("#" + _0x342d60.name).append("<option id=\"" + _0x342d60.name + "-" + _0xa125ea + "\" value=\"" + _0x511089.value + "\">" + _0x511089.label + "</option>");
          $("#" + _0x342d60.name + "-" + _0xa125ea).data("data", _0x511089.data);
        } else {
          $("#" + _0x342d60.name).append("<option value=\"" + _0x511089.value + "\">" + _0x511089.label + "</option>");
        }
      });
    }
    if (_0x342d60.type == "yesno") {
      if (_0x342d60.success !== undefined) {
        yesMsg = _0x342d60.success;
      } else {
        yesMsg = "Confirm";
      }
      if (_0x342d60.reject !== undefined) {
        rejMsg = _0x342d60.reject;
      } else {
        rejMsg = "Reject";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2 text-center\"><button class=\"btn btn-sm btn-success m-1\" data-act=\"submitForm\">" + yesMsg + "</button> <button class=\"btn btn-sm btn-danger\" data-act=\"closeMenu\">" + rejMsg + "</button></div></div>");
      $("#formButtons").css({
        display: "none"
      });
    }
    if (_0x342d60.type == "btn") {
      if (_0x342d60.color === undefined || _0x342d60.color == null) {
        _0x342d60.color = "info";
      }
      if (_0x342d60.align === undefined || _0x342d60.color == null) {
        _0x342d60.align = "center";
      }
      if (_0x342d60.value === undefined || _0x342d60.value == null) {
        _0x342d60.value = "";
      }
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2 text-" + _0x342d60.align + "\"><button id=\"" + _0x342d60.id + "\" value=\"" + _0x342d60.value + "\" class=\"btn btn-sm btn-" + _0x342d60.color + " m-1\" data-act=\"submitFormCustomBtn\">" + _0x342d60.label + "</button></div></div>");
    }
    if (_0x342d60.type == "disableyesno") {
      $("#formButtons").css({
        display: "none"
      });
    }
    if (_0x342d60.data !== undefined || _0x342d60.data !== null) {
      $("#" + _0x342d60.name).data("data", _0x342d60.data);
    }
  });
  if (_0x4fdc86.opt !== undefined) {
    if (_0x4fdc86.opt.allowCoords !== undefined && _0x4fdc86.opt.allowCoords === true) {
      $("#jsonCopy").html(_0x4fdc86.json);
      $("#stndCopy").html(parseFloat(_0x4fdc86.coords.x) + ", " + parseFloat(_0x4fdc86.coords.y) + ", " + parseFloat(_0x4fdc86.coords.z) + ", " + parseFloat(_0x4fdc86.coords.h));
      $("#tableCopy").html("table = { ['x'] = " + parseFloat(_0x4fdc86.coords.x) + ", ['y'] = " + parseFloat(_0x4fdc86.coords.y) + ", ['z'] = " + parseFloat(_0x4fdc86.coords.z) + ", ['h'] = " + parseFloat(_0x4fdc86.coords.h) + " }");
      $("#formOptions").append("<div class=\"row\"><div class=\"col-12 p-2 text-center\"><button class=\"btn btn-sm btn-info\" data-act=\"copyJson\" data-type=\"json\">Copy Json</button> <button class=\"btn btn-sm btn-info\" data-act=\"copyStd\" data-type=\"standard\">Copy Standard</button> <button class=\"btn btn-sm btn-info\" data-act=\"copyTbl\" data-type=\"table\">Copy Table</button></div></div>");
    }
  }
  if (_0x4fdc86.cancel !== undefined && _0x4fdc86.cancel !== null) {
    cancelEvent = _0x4fdc86.cancel;
  }
  $("#formContainer").css({
    display: "block"
  });
}
function skinMenu(_0x17b633) {
  cancelEvent = null;
  $("#menuContainer").css({
    display: "none"
  });
  $("#formContainer").css({
    display: "none"
  });
  $("#blipContainerColor").css({
    display: "none"
  });
  $("#blipContainer").css({
    display: "none"
  });
  $("#colorPickerContainer").css({
    display: "none"
  });
  $("#skinContainer").css({
    display: "none"
  });
  $("#selectorContainer").css({
    display: "none"
  });
  $("#skinMenuContents").html("");
  if (_0x17b633.options !== null && _0x17b633.options !== undefined) {
    if (_0x17b633.options.allowSwapKey !== undefined && _0x17b633.options.allowSwapKey !== null && _0x17b633.options.allowSwapKey === true) {
      $("#swapKey").css({
        display: "block"
      });
      swapKeyEnabled = true;
    } else {
      $("#swapKey").css({
        display: "none"
      });
      swapKeyEnabled = false;
    }
    if (_0x17b633.options.allowHandsUp !== undefined && _0x17b633.options.allowHandsUp !== null && _0x17b633.options.allowHandsUp === true) {
      $("#allowHandsUp").css({
        display: "block"
      });
      taskHandsUp = true;
    } else {
      $("#allowHandsUp").css({
        display: "none"
      });
      taskHandsUp = false;
    }
    if (_0x17b633.options.camera !== undefined && _0x17b633.options.camera !== null) {
      $("#resetCamera").css({
        display: "block"
      });
      resetCamera = _0x17b633.options.camera;
    } else {
      $("#resetCamera").css({
        display: "none"
      });
    }
    if (_0x17b633.options.moveMouse !== undefined && _0x17b633.options.moveMouse !== null && _0x17b633.options.moveMouse === true) {
      allowSkinMouseMove = true;
      $("#mouseMovementSkin").css({
        display: "block"
      });
    } else {
      allowSkinMouseMove = false;
      $("#mouseMovementSkin").css({
        display: "none"
      });
    }
  }
  if (_0x17b633.title !== null && _0x17b633.title !== undefined) {
    $("#sliderTitle2").html(_0x17b633.title);
  }
  $.each(_0x17b633.sliders, function (_0x3b57c5, _0x5f0833) {
    if (_0x5f0833.options !== null && _0x5f0833.options !== undefined) {
      $("#skinMenuContents").append("<div id=\"slider-" + _0x3b57c5 + "\"><div class=\"mt-3 row pl-2 align-items-center text-center mx-auto\"><button class=\"btn btn-dark m-1 btn-tab-prev\" id=\"preBtn-multi\" data-multi=\"" + _0x3b57c5 + "\"><i class=\"fas fa-arrow-left\"></i></button><ul class=\"nav nav-tabs multiSlider\" id=\"selection-" + _0x3b57c5 + "\" role=\"tablist\"></ul><button class=\"btn btn-dark m-1 btn-tab-next\" id=\"nxtBtn-multi\" data-multi=\"" + _0x3b57c5 + "\"><i class=\"fas fa-arrow-right\"></i></button></div></div>");
      $.each(_0x5f0833.options, function (_0x2e898a, _0x2bc716) {
        var _0x47f729;
        if (_0x2bc716.label !== null && _0x2bc716.label !== undefined) {
          _0x47f729 = _0x2bc716.label;
        } else {
          _0x47f729 = _0x5f0833.label;
        }
        if (_0x5f0833.default !== undefined && _0x5f0833.default !== null && _0x2bc716.data.option !== undefined && _0x2bc716.data.option !== null) {
          if (_0x2bc716.data.option == _0x5f0833.default) {
            $("#selection-" + _0x3b57c5).append("<li class=\"nav-item\"><a class=\"nav-link active btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x3b57c5 + "-" + _0x2e898a + "\" data-idx=\"" + _0x2e898a + "\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSliderSkin\"><small>" + _0x47f729 + "</small></a></li>");
          } else {
            $("#selection-" + _0x3b57c5).append("<li class=\"nav-item\"><a class=\"nav-link btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x3b57c5 + "-" + _0x2e898a + "\" data-idx=\"" + _0x2e898a + "\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSliderSkin\"><small>" + _0x47f729 + "</small></a></li>");
          }
        } else if (_0x2e898a == 0) {
          $("#selection-" + _0x3b57c5).append("<li class=\"nav-item\"><a class=\"nav-link active btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x3b57c5 + "-" + _0x2e898a + "\" data-idx=\"" + _0x2e898a + "\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSliderSkin\"><small>" + _0x47f729 + "</small></a></li>");
        } else {
          $("#selection-" + _0x3b57c5).append("<li class=\"nav-item\"><a class=\"nav-link btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x3b57c5 + "-" + _0x2e898a + "\" data-idx=\"" + _0x2e898a + "\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSliderSkin\"><small>" + _0x47f729 + "</small></a></li>");
        }
        $("#navID-" + _0x3b57c5 + "-" + _0x2e898a).data("data", _0x2bc716.data);
        $("#navID-" + _0x3b57c5 + "-" + _0x2e898a).data("trigger", _0x2bc716.trigger);
        $("#navID-" + _0x3b57c5 + "-" + _0x2e898a).data("triggertype", _0x2bc716.triggertype);
      });
    } else if (_0x5f0833.type == undefined || _0x5f0833.type == null) {
      $("#skinMenuContents").append("<div id=\"sliderHeader-" + _0x3b57c5 + "\" class=\"mt-3 row pl-2 align-items-center mx-auto\"><div class=\"col-12 text-center p-0\"><small><strong>" + _0x5f0833.label + "</strong></small></div></div>");
    } else if (_0x5f0833.type == "range") {
      var _0x19218a;
      if (_0x5f0833.default !== undefined && _0x5f0833.default !== null) {
        _0x19218a = _0x5f0833.default;
      } else {
        _0x19218a = 0;
      }
      $("#skinMenuContents").append("<div id=\"sliderHeader-" + _0x3b57c5 + "\"><div class=\"mt-3 row pl-2 align-items-center text-left mx-auto\"><label for=\"option-" + _0x3b57c5 + "\"><small>" + _0x5f0833.label + "</small></label><input type=\"range\" value=\"" + _0x19218a + "\" data-skin=\"true\" class=\"form-control\" max=\"" + _0x5f0833.max + "\" min=\"" + _0x5f0833.min + "\" name=\"option-" + _0x3b57c5 + "\" id=\"option-" + _0x3b57c5 + "\" step=\"1\"></div></div>");
      if (_0x5f0833.data !== undefined && _0x5f0833.data !== null) {
        $("#option-" + _0x3b57c5).data("data", _0x5f0833.data);
      }
    }
  });
  $("#skinContainer").css({
    display: "block"
  });
  if (_0x17b633.options !== null && _0x17b633.options !== undefined) {
    if (_0x17b633.options.return !== null && _0x17b633.options.return !== undefined) {
      $("[data-act=skinBack]").data("trigger", _0x17b633.options.return.trigger);
      $("[data-act=skinBack]").data("triggertype", _0x17b633.options.return.triggertype);
      if (_0x17b633.options.return.data !== undefined && _0x17b633.options.return.data !== null) {
        $("[data-act=skinBack]").data("data", _0x17b633.options.return.data);
      }
    }
  }
}
function generateSlider(_0x1ed60d) {
  cancelEvent = null;
  $("#menuContainer").css({
    display: "none"
  });
  $("#formContainer").css({
    display: "none"
  });
  $("#blipContainerColor").css({
    display: "none"
  });
  $("#blipContainer").css({
    display: "none"
  });
  $("#colorPickerContainer").css({
    display: "none"
  });
  $("#skinContainer").css({
    display: "none"
  });
  $("#selectorContainer").css({
    display: "none"
  });
  $("#selection").html("");
  if (_0x1ed60d.menuTitle !== null && _0x1ed60d.menuTitle !== undefined) {
    $("#sliderTitle").html(_0x1ed60d.menuTitle);
  }
  if (_0x1ed60d.description !== undefined && _0x1ed60d.description !== null) {
    $("#Sliderinformation").html(_0x1ed60d.description);
  }
  sliderObjects = _0x1ed60d.data;
  $.each(_0x1ed60d.data, function (_0x1ebef6, _0x133c44) {
    if (_0x1ebef6 == 0) {
      if (_0x133c44.infoHtml !== undefined && _0x133c44.infoHtml !== null) {
        if (_0x133c44.infoHtml.type == "tooltip") {
          $("#selection").append("<li class=\"nav-item\"><a class=\"nav-link active btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" title=\"" + _0x133c44.infoHtml.title + "\" id=\"navID-" + _0x1ebef6 + "\" data-idx=\"" + _0x1ebef6 + "\" data-tooltip=\"tooltip\" data-html=\"true\" data-toggle=\"tab\" data-trigger=\"hover\" data-placement=\"bottom\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSlider\"><small>" + _0x133c44.label + " <i class=\"fad fa-search\"></i></small></a></li>");
        } else {
          $("#selection").append("<li class=\"nav-item\"><a class=\"nav-link active btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" title=\"" + _0x133c44.infoHtml.title + "\" id=\"navID-" + _0x1ebef6 + "\" data-idx=\"" + _0x1ebef6 + "\" data-popover=\"popover\" data-html=\"true\" data-toggle=\"tab\" data-trigger=\"hover\" data-placement=\"bottom\" data-content=\"" + _0x133c44.infoHtml.content + "\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSlider\"><small>" + _0x133c44.label + " <i class=\"fad fa-search\"></i></small></a></li>");
        }
        $("[data-popover=\"popover\"]").popover();
        $("[data-tooltip=\"tooltip\"]").tooltip();
      } else {
        $("#selection").append("<li class=\"nav-item\"><a class=\"nav-link active btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x1ebef6 + "\" data-idx=\"" + _0x1ebef6 + "\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSlider\"><small>" + _0x133c44.label + " <i class=\"fad fa-search\"></i></small></a></li>");
      }
    } else if (_0x133c44.infoHtml !== undefined && _0x133c44.infoHtml !== null) {
      if (_0x133c44.infoHtml.type == "tooltip") {
        $("#selection").append("<li class=\"nav-item\"><a class=\"nav-link btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x1ebef6 + "\" title=\"" + _0x133c44.infoHtml.title + "\" data-idx=\"" + _0x1ebef6 + "\" data-toggle=\"tab\" data-tooltip=\"tooltip\" data-html=\"true\" data-trigger=\"hover\" data-placement=\"bottom\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSlider\"><small>" + _0x133c44.label + " <i class=\"fad fa-search\"></i></small></a></li>");
      } else {
        $("#selection").append("<li class=\"nav-item\"><a class=\"nav-link btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x1ebef6 + "\" title=\"" + _0x133c44.infoHtml.title + "\" data-idx=\"" + _0x1ebef6 + "\" data-toggle=\"tab\" data-popover=\"popover\" data-html=\"true\" data-trigger=\"hover\" data-placement=\"bottom\" data-content=\"" + _0x133c44.infoHtml.content + "\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSlider\"><small>" + _0x133c44.label + " <i class=\"fad fa-search\"></i></small></a></li>");
      }
      $("[data-popover=\"popover\"]").popover();
      $("[data-tooltip=\"tooltip\"]").tooltip();
    } else {
      $("#selection").append("<li class=\"nav-item\"><a class=\"nav-link btn btn-secondary\" style=\"min-width:195px; max-width:195px;\" id=\"navID-" + _0x1ebef6 + "\" data-idx=\"" + _0x1ebef6 + "\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\" data-act=\"selectActionSlider\"><small>" + _0x133c44.label + " <i class=\"fad fa-search\"></i></small></a></li>");
    }
    if (_0x133c44.data !== undefined && _0x133c44.data !== null) {
      $("#navID-" + _0x1ebef6).data("associate", _0x133c44.data);
    }
    $("#navID-" + _0x1ebef6).data("trigger", _0x133c44.data.trigger);
    $("#navID-" + _0x1ebef6).data("method", _0x133c44.data.triggerType);
  });
  if (_0x1ed60d.trigger !== undefined && _0x1ed60d.trigger !== null && _0x1ed60d.method !== undefined && _0x1ed60d.method !== null) {
    $("[data-act=saveSlider]").data("trigger", _0x1ed60d.trigger);
    $("[data-act=saveSlider]").data("method", _0x1ed60d.method);
    $("[data-act=saveSlider]").css({
      display: "block"
    });
  }
  $("#selectorContainer").css({
    display: "block"
  });
  if (_0x1ed60d.preloads.menuSwitcher !== undefined && _0x1ed60d.preloads.menuSwitcher !== null && _0x1ed60d.preloads.menuSwitcher === true) {
    enableKeySwitch = true;
    $("[data-actionID=menuSwitcher]").css({
      display: "block"
    }).html("<small>PRESS <span class=\"text-dark\">Z</span> TO ACCESS IN-GAME MOUSE</small>");
  }
  if (_0x1ed60d.preloads.vehicle !== undefined && _0x1ed60d.preloads.vehicle !== null && _0x1ed60d.preloads.vehicle === true) {
    $(".nav-item > .active").parent().find("a").trigger("click");
    $("#preBtn").addClass("disabled");
    $("#nxtBtn").addClass("disabled");
    $("#loading").css({
      display: "block"
    });
  }
  if (_0x1ed60d.cancel !== undefined) {
    cancelEvent = _0x1ed60d.cancel;
  }
  $("#selectorContainer").css({
    display: "block"
  });
}
function closeMenu() {
  $("#menuOptions").html("");
  menuOpen = false;
  enableKeySwitch = false;
  $.post("http://" + ResourceName + "/NUIFocusOff", JSON.stringify({}));
  $("#formButtons").css({
    display: "block"
  });
  $("[data-actionID=menuSwitcher]").css({
    display: "none"
  });
  menuTypeActive = null;
  $("#menuContainer").css({
    display: "none"
  });
  $("#formContainer").css({
    display: "none"
  });
  $("#blipContainerColor").css({
    display: "none"
  });
  $("#blipContainer").css({
    display: "none"
  });
  $("#colorPickerContainer").css({
    display: "none"
  });
  $("#skinContainer").css({
    display: "none"
  });
  $("#selectorContainer").css({
    display: "none"
  });
  cancelEvent = null;
  backbtn = false;
  backbtn_action = null;
  backbtn_trigger = null;
  backbtn_value = null;
}
function pad(_0x31801d) {
  if (_0x31801d.length < 2) {
    return "0" + _0x31801d;
  } else {
    return _0x31801d;
  }
}
$(function () {
  $(document).on("keydown", function (_0x7a0e39) {
    if (Config.closeKeys.includes(_0x7a0e39.which)) {
      if (preventClose === false) {
        if (cancelEvent !== undefined && cancelEvent !== null) {
          var _0x4da251 = {
            post: cancelEvent
          };
          $.post("http://" + ResourceName + "/doCancel", JSON.stringify(_0x4da251));
          cancelEvent = null;
        }
        cancelMethod = null;
        closeMenu();
      }
    }
    var _0x4afb62 = {
      keypressed: _0x7a0e39.which
    };
    $.post("http://" + ResourceName + "/keypressed", JSON.stringify(_0x4afb62));
    if (_0x7a0e39.which == 90 && enableKeySwitch == true) {
      $("[data-actionID=menuSwitcher]").css({
        display: "block"
      }).html("<small>PRESS <span class=\"text-dark\">Z</span> TO ACCESS MENU</small>");
      $.post("http://" + ResourceName + "/toggleNUI", JSON.stringify({}));
    }
    if (_0x7a0e39.which == 67 && swapKeyEnabled == true) {
      $.post("http://pw_core/rotateCharacter", JSON.stringify({}));
    }
    if (_0x7a0e39.which == 88 && taskHandsUp == true) {
      $.post("http://pw_core/handsUpCharacter", JSON.stringify({}));
    }
    if (_0x7a0e39.which == 90 && resetCamera !== null) {
      var _0x1ac3df = {
        cameraPos: resetCamera
      };
      $.post("http://pw_core/resetCamera", JSON.stringify(_0x1ac3df));
    }
    if (_0x7a0e39.which == 90 && allowSkinMouseMove === true) {
      $.post("http://" + ResourceName + "/turnOffNUI", JSON.stringify({}));
      $("#mouseMovementSkin").html("<small>PRESS [<span class=\"text-info\">Z</span>] CONTROL MENU</small>");
    }
  });
  $(document).on("change", "[data-skin=true]", function () {
    value = $(this).val();
    data = $(this).data("data");
    var _0x125cc0 = {
      data: data,
      value: value
    };
    $.post("http://pw_base/skinSlider", JSON.stringify(_0x125cc0));
  });
  r.addEventListener("change", function () {
    setColor();
  }, false);
  r.addEventListener("input", function () {
    setColor();
  }, false);
  g.addEventListener("change", function () {
    setColor();
  }, false);
  g.addEventListener("input", function () {
    setColor();
  }, false);
  b.addEventListener("change", function () {
    setColor();
  }, false);
  b.addEventListener("input", function () {
    setColor();
  }, false);
  $(document).on("click", "[data-action=predefinedColor]", function () {
    var _0x1d8aa2 = $(this).data("r");
    var _0x10f8db = $(this).data("g");
    var _0x215907 = $(this).data("b");
    $("#r").val(_0x1d8aa2);
    $("#g").val(_0x10f8db);
    $("#b").val(_0x215907);
    setColor();
  });
  $(document).on("show.bs.dropdown", function () {
    var _0x6a03dd = $(this).find(".dropdown-toggle");
    var _0x23bbd6 = $(this).find(".dropdown-menu");
    _0x23bbd6.css({
      top: _0x6a03dd.position().top + _0x6a03dd.outerHeight() + "px",
      left: _0x6a03dd.position().left + "px"
    });
  });
  $(document).on("show.bs.dropdown", function () {
    height = $("#menuContainerOne").height();
    if (height <= 300) {
      $("#menuContainerOne").css({
        "overflow-y": "visible"
      });
    }
  });
  $(document).on("hide.bs.dropdown", function () {
    $("#menuContainerOne").css({
      "overflow-y": "scroll"
    });
  });
  $(document).on("click", "[data-act=blipColorSelect]", function () {
    var _0x3de441 = $(this).data("ident");
    var _0x5ed828 = {
      color: _0x3de441,
      trigger: colorTrigger,
      triggertype: colorTriggerType
    };
    $.post("http://" + ResourceName + "/selectBlipColor", JSON.stringify(_0x5ed828));
  });
  $(document).on("click", "[data-act=submitForm]", function () {
    if (keepOpen === false) {
      closeMenu();
    }
    let _0x36e0ae = new Object();
    $(":input:not(button,submit,reset)").each(function (_0xade3f6) {
      var _0x2c6827 = this.getAttribute("id");
      var _0x4a9002 = this.getAttribute("type");
      var _0xafad41 = $(this).data("data");
      _0x36e0ae[_0x2c6827] = new Object();
      var _0xc4b03a = $(this).children("option:selected");
      if (_0xc4b03a !== undefined) {
        _0x36e0ae[_0x2c6827].data = _0xc4b03a.data("data");
      }
      if (_0x4a9002 == "checkbox") {
        if ($(this).is(":checked")) {
          _0x36e0ae[_0x2c6827].value = true;
        } else {
          _0x36e0ae[_0x2c6827].value = false;
        }
      } else {
        _0x36e0ae[_0x2c6827].value = $(this).val();
      }
      if (_0xafad41 !== undefined && _0xafad41 !== null) {
        _0x36e0ae[_0x2c6827].data = _0xafad41;
      }
    });
    var _0x5d7a5d = $("#submitAction").val();
    var _0x1fb72b = $("#submitMethod").val();
    var _0xdc0878 = {
      action: _0x5d7a5d,
      trigger: _0x1fb72b,
      response: _0x36e0ae
    };
    $.post("http://" + ResourceName + "/submitForm", JSON.stringify(_0xdc0878));
  });
  $(document).on("click", "[data-act=submitFormCustomBtn]", function () {
    let _0x1dd53b = new Object();
    var _0x4ef619 = this.getAttribute("id");
    _0x1dd53b.PressedBtn = new Object();
    _0x1dd53b.PressedBtn.value = $(this).val();
    $(":input:not(button,submit,reset)").each(function (_0x1bf3b6) {
      var _0x52af12 = this.getAttribute("id");
      var _0x4169f3 = this.getAttribute("type");
      var _0x2c8260 = $(this).data("data");
      _0x1dd53b[_0x52af12] = new Object();
      var _0x3123c1 = $(this).children("option:selected");
      if (_0x3123c1 !== undefined) {
        _0x1dd53b[_0x52af12].data = _0x3123c1.data("data");
      }
      if (_0x4169f3 == "checkbox") {
        if ($(this).is(":checked")) {
          _0x1dd53b[_0x52af12].value = true;
        } else {
          _0x1dd53b[_0x52af12].value = false;
        }
      } else {
        _0x1dd53b[_0x52af12].value = $(this).val();
      }
      if (_0x2c8260 !== undefined && _0x2c8260 !== null) {
        _0x1dd53b[_0x52af12].data = _0x2c8260;
      }
    });
    var _0x44db74 = $("#submitAction").val();
    var _0x10117c = $("#submitMethod").val();
    var _0x677db2 = {
      action: _0x44db74,
      trigger: _0x10117c,
      response: _0x1dd53b
    };
    $.post("http://" + ResourceName + "/submitForm", JSON.stringify(_0x677db2));
  });
  $(document).on("click", "[data-action=blipSelect]", function () {
    var _0x1e154c = $(this).data("ident");
    $("#blipId").val(_0x1e154c);
  });
  $(document).on("click", "[data-act=blipSelected]", function () {
    var _0x5305c7 = $("#blipId").val();
    if (_0x5305c7 == null || _0x5305c7 == "" || _0x5305c7 < 0 || _0x5305c7 == undefined) {
      $("#blipRequired").css({
        display: "block"
      });
      setTimeout(function () {
        $("#blipRequired").css({
          display: "none"
        });
      }, 5000);
    } else {
      var _0x1a20e2 = $("#blipId").data("trigger");
      var _0x362bc4 = $("#blipId").data("triggertype");
      var _0x57739a = {
        blip: _0x5305c7,
        trigger: _0x1a20e2,
        triggertype: _0x362bc4
      };
      $.post("http://" + ResourceName + "/selectBlip", JSON.stringify(_0x57739a));
    }
  });
  $(document).on("click", "#colorSave", function () {
    var _0x44ade5 = $(this).data("r");
    var _0x5a0324 = $(this).data("g");
    var _0x148a23 = $(this).data("b");
    var _0x208449 = $(this).data("type");
    var _0x2c207e = $(this).data("trigger");
    var _0x5baa90 = $(this).data("data");
    if (!$(this).hasClass("disabled")) {
      $.post("http://" + ResourceName + "/colorSave", JSON.stringify({
        r: parseInt(_0x44ade5),
        g: parseInt(_0x5a0324),
        b: parseInt(_0x148a23),
        action: _0x2c207e,
        trigger: _0x208449,
        data: _0x5baa90
      }));
      $("#colorPickerContainer").css({
        display: "none"
      });
    }
  });
  $(document).on("click", "#colorPreview", function () {
    var _0x2579e5 = $(this).data("r");
    var _0x31b43c = $(this).data("g");
    var _0x53503f = $(this).data("b");
    var _0x51087b = $(this).data("type");
    var _0x1beb26 = $(this).data("trigger");
    var _0x5c3f11 = $(this).data("data");
    if (!$(this).hasClass("disabled")) {
      $.post("http://" + ResourceName + "/colorPreview", JSON.stringify({
        r: parseInt(_0x2579e5),
        g: parseInt(_0x31b43c),
        b: parseInt(_0x53503f),
        action: _0x1beb26,
        trigger: _0x51087b,
        data: _0x5c3f11
      }));
    }
  });
  $(document).on("click", "[data-act=completeRequest]", function () {
    if (!$(this).hasClass("disabled")) {
      var _0x58c1e8 = $(this).attr("data-action");
      var _0x337dc9 = $(this).attr("data-trigger");
      var _0xdc8ce1 = $(this).data("value");
      if (_0x58c1e8 == "undefined" || _0x58c1e8 == "") {
        return;
      } else if (_0x58c1e8 !== undefined && _0x58c1e8 !== null && _0x337dc9 !== undefined && _0x337dc9 !== null) {
        if (keepOpen === false) {
          closeMenu();
        }
        var _0x171eb2 = {
          action: _0x58c1e8,
          trigger: _0x337dc9,
          value: _0xdc8ce1
        };
        $.post("http://" + ResourceName + "/requestAction", JSON.stringify(_0x171eb2));
      }
    }
    menuOpen = false;
  });
  $(document).on("click", "[data-act=closeMenu]", function () {
    menuOpen = false;
    var _0x1dc8f9 = new Object();
    var _0x553b04 = $("#submitAction").val();
    var _0x12c220 = $("#submitMethod").val();
    $(":input:not(button,submit,reset)").each(function (_0x59db5e) {
      var _0xf2cd2 = this.getAttribute("id");
      var _0xeae0ec = $(this).data("data");
      _0x1dc8f9[_0xf2cd2] = new Object();
      if (_0xeae0ec !== undefined && _0xeae0ec !== null) {
        _0x1dc8f9[_0xf2cd2].data = _0xeae0ec;
      }
    });
    if (cancelEvent !== null) {
      var _0x3e09a3 = {
        post: cancelEvent
      };
      $.post("http://" + ResourceName + "/doCancel", JSON.stringify(_0x3e09a3));
      cancelEvent = null;
    }
    var _0x253c38 = {
      action: _0x553b04,
      trigger: _0x12c220,
      response: _0x1dc8f9
    };
    $.post("http://" + ResourceName + "/cancelAction", JSON.stringify(_0x253c38));
    closeMenu();
  });
  $(document).on("click", "[data-act=closeMenu2]", function () {
    if (!$(this).hasClass("disabled")) {
      var _0x4c878c = backbtn_action;
      var _0xa8214a = backbtn_trigger;
      var _0x42f68b = backbtn_value;
      if (_0x4c878c == "undefined" || _0x4c878c == "") {
        return;
      } else if (_0x4c878c !== undefined && _0x4c878c !== null && _0xa8214a !== undefined && _0xa8214a !== null) {
        if (keepOpen === false) {
          closeMenu();
        }
        var _0x4f914e = {
          action: _0x4c878c,
          trigger: _0xa8214a,
          value: _0x42f68b
        };
        $.post("http://" + ResourceName + "/requestAction", JSON.stringify(_0x4f914e));
      }
    }
    menuOpen = false;
  });
  $(document).on("click", "[data-act=skinBack]", function () {
    menuOpen = false;
    var _0x1a465a = $(this).data("trigger");
    var _0x35e0ff = $(this).data("triggertype");
    var _0x1263a4 = $(this).data("data");
    var _0xae9d5b = {
      trigger: _0x1a465a,
      triggertype: _0x35e0ff,
      data: _0x1263a4
    };
    $.post("http://" + ResourceName + "/doSkinReturn", JSON.stringify(_0xae9d5b));
  });
  $(document).on("click", "[data-act=justClose]", function () {
    menuOpen = false;
    if (cancelEvent !== null) {
      var _0x5d05ab = {
        post: cancelEvent
      };
      $.post("http://" + ResourceName + "/doCancel", JSON.stringify(_0x5d05ab));
      cancelEvent = null;
    }
    sliderObjects = null;
    closeMenu();
  });
  $(document).on("click", "[data-act=selectActionSlider]", function () {
    var _0x46e47a = $(this).data("associate");
    var _0x2c689d = $(this).data("method");
    var _0x23c60f = $(this).data("trigger");
    var _0x57c7b8 = $(this).data("idx");
    var _0x29074d = sliderObjects.length - 1;
    var _0x248e6d = {
      action: _0x23c60f,
      trigger: _0x2c689d,
      response: _0x46e47a
    };
    $.post("http://" + ResourceName + "/sliderAction", JSON.stringify(_0x248e6d));
    if (_0x57c7b8 == _0x29074d) {
      forceDisableNext = true;
      $("#nxtBtn").addClass("disabled");
    } else {
      forceDisableNext = false;
      $("#nxtBtn").removeClass("disabled");
    }
    if (_0x57c7b8 == 0) {
      forceDisablePrev = true;
      $("#preBtn").addClass("disabled");
    } else {
      forceDisablePrev = false;
      $("#preBtn").removeClass("disabled");
    }
  });
  $(document).on("click", "[data-act=saveSlider]", function () {
    menuOpen = false;
    var _0x383df2 = $(".nav-link.active").data("associate");
    var _0x4187c4 = $("[data-act=saveSlider]").data("method");
    var _0x3d1634 = $("[data-act=saveSlider]").data("trigger");
    var _0x34259f = {
      action: _0x3d1634,
      trigger: _0x4187c4,
      response: _0x383df2
    };
    $.post("http://" + ResourceName + "/sliderAction", JSON.stringify(_0x34259f));
    sliderObjects = null;
  });
  $(document).on("click", "#preBtn", function () {
    'use strict';

    if (!$("#preBtn").hasClass("disabled")) {
      $("#selection .nav-item > .active").parent().prev("li").find("a").trigger("click");
      $(".btn-tab-prev").addClass("disabled");
      $("#preBtn").addClass("disabled");
      $("#loading").css({
        display: "block"
      });
    }
  });
  $(document).on("click", "#nxtBtn", function () {
    'use strict';

    var _0x2852c0 = $(this).data("idx");
    if (!$("#nxtBtn").hasClass("disabled")) {
      $("#selection .nav-item > .active").parent().next("li").find("a").trigger("click");
      $(".btn-tab-prev").addClass("disabled");
      $("#nxtBtn").addClass("disabled");
      $("#loading").css({
        display: "block"
      });
    }
  });
  $(document).on("click", "[data-act=selectActionSliderSkin]", function () {
    var _0x4b6db8 = $(this).data("trigger");
    var _0x40daa4 = $(this).data("triggertype");
    var _0x18eb3c = $(this).data("data");
    var _0x8af70b = {
      trigger: _0x4b6db8,
      triggertype: _0x40daa4,
      data: _0x18eb3c
    };
    $.post("http://" + ResourceName + "/sliderActionSkin", JSON.stringify(_0x8af70b));
  });
  $(document).on("click", "#preBtn-multi", function () {
    'use strict';

    var _0xfdf00a = $(this).data("idx");
    var _0x2811bd = $(this).data("multi");
    $("#selection-" + _0x2811bd + " .nav-item > .active").parent().prev("li").find("a").trigger("click");
    $("#loading").css({
      display: "block"
    });
  });
  $(document).on("click", "#nxtBtn-multi", function () {
    'use strict';

    var _0x3521b5 = $(this).data("idx");
    var _0x5cf154 = $(this).data("multi");
    $("#selection-" + _0x5cf154 + " .nav-item > .active").parent().next("li").find("a").trigger("click");
    $("#loading").css({
      display: "block"
    });
  });
  $(document).on("click", "[data-act=copyJson], [data-act=copyStd], [data-act=copyTbl]", function () {
    var _0x4c4a90 = $(this).data("type");
    if (_0x4c4a90 == "json") {
      _0x4c4a90 = "jsonCopy";
    } else if (_0x4c4a90 == "table") {
      _0x4c4a90 = "tableCopy";
    } else if (_0x4c4a90 == "standard") {
      _0x4c4a90 = "stndCopy";
    }
    copyToClipboard(_0x4c4a90);
  });
});
function copyToClipboard(_0x521fe1) {
  var _0x398067 = $("<input>");
  $("#copyRow").append(_0x398067);
  _0x398067.val($("#" + _0x521fe1).text()).select();
  document.execCommand("copy");
  _0x398067.remove();
  closeMenu();
}
$(function () {
  $("[data-toggle=\"popover\"]").popover();
});