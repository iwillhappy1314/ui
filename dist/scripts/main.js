+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var o in e)if(void 0!==t.style[o])return{end:e[o]};return!1}t.fn.emulateTransitionEnd=function(e){var o=!1,i=this;t(this).one("bsTransitionEnd",function(){o=!0});var n=function(){o||t(i).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(t){"use strict";function e(e){var o,i=e.attr("data-target")||(o=e.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function o(e){return this.each(function(){var o=t(this),n=o.data("bs.collapse"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||o.data("bs.collapse",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(o.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[o](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(i.TRANSITION_DURATION):n.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(o,i){var n=t(i);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var o=t.hasClass("in");t.attr("aria-expanded",o),e.toggleClass("collapsed",!o).attr("aria-expanded",o)};var n=t.fn.collapse;t.fn.collapse=o,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var n=t(this);n.attr("data-target")||i.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();o.call(s,r)})}(jQuery),+function(t){"use strict";function e(e){var o=e.attr("data-target");o||(o=e.attr("href"),o=o&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i=o&&t(o);return i&&i.length?i:e.parent()}function o(o){o&&3===o.which||(t(n).remove(),t(s).each(function(){var i=t(this),n=e(i),s={relatedTarget:this};n.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&t.contains(n[0],o.target)||(n.trigger(o=t.Event("hide.bs.dropdown",s)),o.isDefaultPrevented()||(i.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function i(e){return this.each(function(){var o=t(this),i=o.data("bs.dropdown");i||o.data("bs.dropdown",i=new a(this)),"string"==typeof e&&i[e].call(o)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(i){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(o(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",o);var r={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",r)),i.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(o){if(/(38|40|27|32)/.test(o.which)&&!/input|textarea/i.test(o.target.tagName)){var i=t(this);if(o.preventDefault(),o.stopPropagation(),!i.is(".disabled, :disabled")){var n=e(i),a=n.hasClass("open");if(!a&&27!=o.which||a&&27==o.which)return 27==o.which&&n.find(s).trigger("focus"),i.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var d=l.index(o.target);38==o.which&&d>0&&d--,40==o.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||i.data("bs.tooltip",n=new o(this,s)),"string"==typeof e&&n[e]())})}var o=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},o.prototype.init=function(e,o,i){if(this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},o.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,i){o[t]!=i&&(e[t]=i)}),e},o.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusin"==e.type?"focus":"hover"]=!0),o.tip().hasClass("in")||"in"==o.hoverState?void(o.hoverState="in"):(clearTimeout(o.timeout),o.hoverState="in",o.options.delay&&o.options.delay.show?void(o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show)):o.show())},o.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},o.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusout"==e.type?"focus":"hover"]=!1),!o.isInStateTrue())return clearTimeout(o.timeout),o.hoverState="out",o.options.delay&&o.options.delay.hide?void(o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide)):o.hide()},o.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,d=l.test(r);d&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var p=this.getPosition(),h=s[0].offsetWidth,c=s[0].offsetHeight;if(d){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&p.bottom+c>u.bottom?"top":"top"==r&&p.top-c<u.top?"bottom":"right"==r&&p.right+h>u.width?"left":"left"==r&&p.left-h<u.left?"right":r,s.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,p,h,c);this.applyPlacement(m,r);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(o.TRANSITION_DURATION):g()}},o.prototype.applyPlacement=function(e,o){var i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,a=parseInt(i.css("margin-top"),10),r=parseInt(i.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,d=i[0].offsetHeight;"top"==o&&d!=s&&(e.top=e.top+s-d);var p=this.getViewportAdjustedDelta(o,e,l,d);p.left?e.left+=p.left:e.top+=p.top;var h=/top|bottom/.test(o),c=h?2*p.left-n+l:2*p.top-s+d,f=h?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(c,i[0][f],h)},o.prototype.replaceArrow=function(t,e,o){this.arrow().css(o?"left":"top",50*(1-t/e)+"%").css(o?"top":"left","")},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},o.prototype.hide=function(e){function i(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);if(this.$element.trigger(a),!a.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i(),this.hoverState=null,this},o.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},o.prototype.hasContent=function(){return this.getTitle()},o.prototype.getPosition=function(e){e=e||this.$element;var o=e[0],i="BODY"==o.tagName,n=o.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&o instanceof window.SVGElement,a=i?{top:0,left:0}:s?null:e.offset(),r={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,l,a)},o.prototype.getCalculatedOffset=function(t,e,o,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-o}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},o.prototype.getViewportAdjustedDelta=function(t,e,o,i){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+i;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var d=e.left-s,p=e.left+s+o;d<a.left?n.left=a.left-d:p>a.right&&(n.left=a.left+a.width-p)}return n},o.prototype.getTitle=function(){var t,e=this.$element,o=this.options;return t=e.attr("data-original-title")||("function"==typeof o.title?o.title.call(e[0]):o.title)},o.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},o.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},o.prototype.enable=function(){this.enabled=!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.toggleEnabled=function(){this.enabled=!this.enabled},o.prototype.toggle=function(e){var o=this;e&&(o=t(e.currentTarget).data("bs."+this.type),o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o))),e?(o.inState.click=!o.inState.click,o.isInStateTrue()?o.enter(o):o.leave(o)):o.tip().hasClass("in")?o.leave(o):o.enter(o)},o.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=o,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||i.data("bs.popover",n=new o(this,s)),"string"==typeof e&&n[e]())})}var o=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");o.VERSION="3.3.7",o.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),o.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),o.prototype.constructor=o,o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},o.prototype.hasContent=function(){return this.getTitle()||this.getContent()},o.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=o,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.tab");n||i.data("bs.tab",n=new o(this)),"string"==typeof e&&n[e]()})}var o=function(e){this.element=t(e)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.prototype.show=function(){var e=this.element,o=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=o.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(i);this.activate(e.closest("li"),o),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},o.prototype.activate=function(e,i,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var a=i.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!i.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(o.TRANSITION_DURATION):s(),a.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=o,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var n=function(o){o.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),function(t){var e=null;t.modal=function(o,i){t.modal.close();var n,s;if(this.$body=t("body"),this.options=t.extend({},t.modal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),o.is("a"))if(s=o.attr("href"),/^#/.test(s)){if(this.$elm=t(s),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=t("<div>"),this.$body.append(this.$elm),n=function(t,e){e.elm.remove()},this.showSpinner(),o.trigger(t.modal.AJAX_SEND),t.get(s).done(function(i){e&&(o.trigger(t.modal.AJAX_SUCCESS),e.$elm.empty().append(i).on(t.modal.CLOSE,n),e.hideSpinner(),e.open(),o.trigger(t.modal.AJAX_COMPLETE))}).fail(function(){o.trigger(t.modal.AJAX_FAIL),e.hideSpinner(),o.trigger(t.modal.AJAX_COMPLETE)});else this.$elm=o,this.$body.append(this.$elm),this.open()},t.modal.prototype={constructor:t.modal,open:function(){var e=this;this.options.doFade?(this.block(),setTimeout(function(){e.show()},this.options.fadeDuration*this.options.fadeDelay)):(this.block(),this.show()),this.options.escapeClose&&t(document).on("keydown.modal",function(e){27===e.which&&t.modal.close()}),this.options.clickClose&&this.blocker.click(function(e){e.target===this&&t.modal.close()})},close:function(){this.unblock(),this.hide(),t(document).off("keydown.modal")},block:function(){this.$elm.trigger(t.modal.BEFORE_BLOCK,[this._ctx()]),this.blocker=t('<div class="jquery-modal blocker"></div>'),this.$body.css("overflow","hidden"),this.$body.append(this.blocker),this.options.doFade&&this.blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(t.modal.BLOCK,[this._ctx()])},unblock:function(){if(this.options.doFade){var t=this;this.blocker.fadeOut(this.options.fadeDuration,function(){t.blocker.children().appendTo(t.$body),t.blocker.remove(),t.$body.css("overflow","")})}else this.blocker.children().appendTo(this.$body),this.blocker.remove(),this.$body.css("overflow","")},show:function(){this.$elm.trigger(t.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=t('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass+" current"),this.$elm.appendTo(this.blocker),this.options.doFade?this.$elm.css("opacity",0).animate({opacity:1},this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(t.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(t.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove(),this.$elm.removeClass("current");var e=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){e.$elm.trigger(t.modal.AFTER_CLOSE,[e._ctx()])}):this.$elm.hide(0,function(){e.$elm.trigger(t.modal.AFTER_CLOSE,[e._ctx()])}),this.$elm.trigger(t.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||t('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,blocker:this.blocker,options:this.options}}},t.modal.close=function(t){if(e){t&&t.preventDefault(),e.close();var o=e.$elm;return e=null,o}},t.modal.isActive=function(){return!!e},t.modal.defaults={escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},t.modal.BEFORE_BLOCK="modal:before-block",t.modal.BLOCK="modal:block",t.modal.BEFORE_OPEN="modal:before-open",t.modal.OPEN="modal:open",t.modal.BEFORE_CLOSE="modal:before-close",t.modal.CLOSE="modal:close",t.modal.AFTER_CLOSE="modal:after-close",t.modal.AJAX_SEND="modal:ajax:send",t.modal.AJAX_SUCCESS="modal:ajax:success",t.modal.AJAX_FAIL="modal:ajax:fail",t.modal.AJAX_COMPLETE="modal:ajax:complete",t.fn.modal=function(o){return 1===this.length&&(e=new t.modal(this,o)),this},t(document).on("click.modal",'a[rel="modal:close"]',t.modal.close),t(document).on("click.modal",'a[rel="modal:open"]',function(e){e.preventDefault(),t(this).modal()})}(jQuery),jQuery(document).ready(function(t){t(document).on("scroll",function(){t(document).scrollTop()>20?t(".site-header").addClass("small"):t(".site-header").removeClass("small")}),t("ul.sf-menu").superfish({popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:0,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast"}),t(".ui-hover li").each(function(){t(this).hover(function(){t(this).find(".hide").fadeIn("slow")},function(){t(this).find(".hide").fadeOut("fast")})}),t("#check-all").click(function(e){this.checked?t(".ck-item").prop("checked",!0):t(".ck-item").prop("checked",!1)});var e=t(".accordion > dd");e.hide(),t(".accordion > dt > a").click(function(){"#"===t(this).attr("href")&&t(this).click(function(){return!1});var o=t(this).parent().next();return o.is(":visible")?e.slideUp("fast"):(e.slideUp(),o.slideDown("fast")),!1});var o=t(".toggle > dd");o.hide(),t(".toggle > dt > a").click(function(){"#"===t(this).attr("href")&&t(this).click(function(){return!1});var e=t(this).parent().next();return e.is(":visible")?e.slideUp("fast"):e.slideDown("fast"),!1});var i=t(".scroll-to-top");"0"!==t(window).scrollTop()&&i.fadeIn(1200),t(window).scroll(function(){"0"===t(window).scrollTop()?i.fadeOut(350):i.fadeIn(1200)}),i.click(function(){t("html, body").animate({scrollTop:0},600)}),t("#add-row").on("click",function(){var e=t(".repeatable-fieldset:last").clone(!0);return e.addClass("new-row"),e.insertAfter(".repeatable-fieldset:last"),!1}),t(".remove-row").on("click",function(){return t(this).parents("tr.new-row").remove(),!1}),t(function(){t(function(){t(".cs-div").css({top:200+t(window).scrollTop(),right:"0"}),t(window).scroll(function(){var e=200+t(window).scrollTop()+"px";t(".cs-div").animate({top:e,right:"0"},{duration:500,queue:!1})}),t(window).resize(function(){var e=200+t(window).scrollTop()+"px";t(".cs-div").animate({top:e,right:"0"},{duration:500,queue:!1})}),t("#cs-close").click(function(){t(".cs-inner").toggle(),t(".cs-div").toggleClass("cs-bar")})})})});