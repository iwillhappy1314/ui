+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.affix"),s="object"==typeof e&&e;n||i.data("bs.affix",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.options=t.extend({},o.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};o.VERSION="3.3.7",o.RESET="affix affix-top affix-bottom",o.DEFAULTS={offset:0,target:window},o.prototype.getState=function(t,e,o,i){var n=this.$target.scrollTop(),s=this.$element.offset(),r=this.$target.height();if(null!=o&&"top"==this.affixed)return n<o&&"top";if("bottom"==this.affixed)return null!=o?!(n+this.unpin<=s.top)&&"bottom":!(n+r<=t-i)&&"bottom";var a=null==this.affixed,l=a?n:s.top,d=a?r:e;return null!=o&&n<=o?"top":null!=i&&l+d>=t-i&&"bottom"},o.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(o.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},o.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},o.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,n=i.top,s=i.bottom,r=Math.max(t(document).height(),t(document.body).height());"object"!=typeof i&&(s=n=i),"function"==typeof n&&(n=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element));var a=this.getState(r,e,n,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),d=t.Event(l+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(o.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-e-s})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=o,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var o=t(this),i=o.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(o,i)})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.alert");n||o.data("bs.alert",n=new i(this)),"string"==typeof e&&n[e].call(o)})}var o='[data-dismiss="alert"]',i=function(e){t(e).on("click",o,this.close)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function o(){r.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var r=t("#"===s?[]:s);e&&e.preventDefault(),r.length||(r=n.closest(".alert")),r.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",o,i.prototype.close)}(jQuery),+function(t){"use strict";function e(e){var o,i=e.attr("data-target")||(o=e.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function o(e){return this.each(function(){var o=t(this),n=o.data("bs.collapse"),s=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||o.data("bs.collapse",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(o.call(n,"hide"),e||n.data("bs.collapse",null));var r=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[r](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",r].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var o=this.dimension();this.$element[o](this.$element[o]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[o](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(i.TRANSITION_DURATION):n.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(o,i){var n=t(i);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var o=t.hasClass("in");t.attr("aria-expanded",o),e.toggleClass("collapsed",!o).attr("aria-expanded",o)};var n=t.fn.collapse;t.fn.collapse=o,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var n=t(this);n.attr("data-target")||i.preventDefault();var s=e(n),r=s.data("bs.collapse"),a=r?"toggle":n.data();o.call(s,a)})}(jQuery),+function(t){"use strict";function e(e){var o=e.attr("data-target");o||(o=e.attr("href"),o=o&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i=o&&t(o);return i&&i.length?i:e.parent()}function o(o){o&&3===o.which||(t(n).remove(),t(s).each(function(){var i=t(this),n=e(i),s={relatedTarget:this};n.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&t.contains(n[0],o.target)||(n.trigger(o=t.Event("hide.bs.dropdown",s)),o.isDefaultPrevented()||(i.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function i(e){return this.each(function(){var o=t(this),i=o.data("bs.dropdown");i||o.data("bs.dropdown",i=new r(this)),"string"==typeof e&&i[e].call(o)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.7",r.prototype.toggle=function(i){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),r=s.hasClass("open");if(o(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",o);var a={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},r.prototype.keydown=function(o){if(/(38|40|27|32)/.test(o.which)&&!/input|textarea/i.test(o.target.tagName)){var i=t(this);if(o.preventDefault(),o.stopPropagation(),!i.is(".disabled, :disabled")){var n=e(i),r=n.hasClass("open");if(!r&&27!=o.which||r&&27==o.which)return 27==o.which&&n.find(s).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+a);if(l.length){var d=l.index(o.target);38==o.which&&d>0&&d--,40==o.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,i){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},o.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new o(this,r)),"string"==typeof e?s[e](i):r.show&&s.show(i)})}var o=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};o.VERSION="3.3.7",o.TRANSITION_DURATION=300,o.BACKDROP_TRANSITION_DURATION=150,o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},o.prototype.show=function(e){var i=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),n&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(o.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},o.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(o.TRANSITION_DURATION):this.hideModal())},o.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},o.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},o.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},o.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},o.prototype.backdrop=function(e){var i=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},o.prototype.handleUpdate=function(){this.adjustDialog()},o.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},o.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},o.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},o.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},o.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=o,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(o){var i=t(this),n=i.attr("href"),s=t(i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),r=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),i.data());i.is("a")&&o.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(s,r,this)})}(jQuery),+function(t){"use strict";function e(o,i){this.$body=t(document.body),this.$scrollElement=t(t(o).is(document.body)?window:o),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function o(o){return this.each(function(){var i=t(this),n=i.data("bs.scrollspy"),s="object"==typeof o&&o;n||i.data("bs.scrollspy",n=new e(this,s)),"string"==typeof o&&n[o]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,o="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(o="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),n=e.data("target")||e.attr("href"),s=/^#./.test(n)&&t(n);return s&&s.length&&s.is(":visible")&&[[s[o]().top+i,n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),i=this.options.offset+o-this.$scrollElement.height(),n=this.offsets,s=this.targets,r=this.activeTarget;if(this.scrollHeight!=o&&this.refresh(),e>=i)return r!=(t=s[s.length-1])&&this.activate(t);if(r&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)r!=s[t]&&e>=n[t]&&(void 0===n[t+1]||e<n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var o=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(o).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=o,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);o.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||i.data("bs.popover",n=new o(this,s)),"string"==typeof e&&n[e]())})}var o=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");o.VERSION="3.3.7",o.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),o.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),o.prototype.constructor=o,o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},o.prototype.hasContent=function(){return this.getTitle()||this.getContent()},o.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=o,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.tab");n||i.data("bs.tab",n=new o(this)),"string"==typeof e&&n[e]()})}var o=function(e){this.element=t(e)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.prototype.show=function(){var e=this.element,o=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=o.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(i);this.activate(e.closest("li"),o),this.activate(a,a.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},o.prototype.activate=function(e,i,n){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var r=i.find("> .active"),a=n&&t.support.transition&&(r.length&&r.hasClass("fade")||!!i.find("> .fade").length);r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(o.TRANSITION_DURATION):s(),r.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=o,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var n=function(o){o.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||i.data("bs.tooltip",n=new o(this,s)),"string"==typeof e&&n[e]())})}var o=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},o.prototype.init=function(e,o,i){if(this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},o.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,i){o[t]!=i&&(e[t]=i)}),e},o.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusin"==e.type?"focus":"hover"]=!0),o.tip().hasClass("in")||"in"==o.hoverState?void(o.hoverState="in"):(clearTimeout(o.timeout),o.hoverState="in",o.options.delay&&o.options.delay.show?void(o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show)):o.show())},o.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},o.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusout"==e.type?"focus":"hover"]=!1),!o.isInStateTrue())return clearTimeout(o.timeout),o.hoverState="out",o.options.delay&&o.options.delay.hide?void(o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide)):o.hide()},o.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,d=l.test(a);d&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(d){var f=a,u=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+c>u.bottom?"top":"top"==a&&h.top-c<u.top?"bottom":"right"==a&&h.right+p>u.width?"left":"left"==a&&h.left-p<u.left?"right":a,s.removeClass(f).addClass(a)}var g=this.getCalculatedOffset(a,h,p,c);this.applyPlacement(g,a);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(o.TRANSITION_DURATION):m()}},o.prototype.applyPlacement=function(e,o){var i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,d=i[0].offsetHeight;"top"==o&&d!=s&&(e.top=e.top+s-d);var h=this.getViewportAdjustedDelta(o,e,l,d);h.left?e.left+=h.left:e.top+=h.top;var p=/top|bottom/.test(o),c=p?2*h.left-n+l:2*h.top-s+d,f=p?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(c,i[0][f],p)},o.prototype.replaceArrow=function(t,e,o){this.arrow().css(o?"left":"top",50*(1-t/e)+"%").css(o?"top":"left","")},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},o.prototype.hide=function(e){function i(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);if(this.$element.trigger(r),!r.isDefaultPrevented())return s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i(),this.hoverState=null,this},o.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},o.prototype.hasContent=function(){return this.getTitle()},o.prototype.getPosition=function(e){e=e||this.$element;var o=e[0],i="BODY"==o.tagName,n=o.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&o instanceof window.SVGElement,r=i?{top:0,left:0}:s?null:e.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,r)},o.prototype.getCalculatedOffset=function(t,e,o,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-o}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},o.prototype.getViewportAdjustedDelta=function(t,e,o,i){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+i;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var d=e.left-s,h=e.left+s+o;d<r.left?n.left=r.left-d:h>r.right&&(n.left=r.left+r.width-h)}return n},o.prototype.getTitle=function(){var t,e=this.$element,o=this.options;return t=e.attr("data-original-title")||("function"==typeof o.title?o.title.call(e[0]):o.title)},o.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},o.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},o.prototype.enable=function(){this.enabled=!0},o.prototype.disable=function(){this.enabled=!1},o.prototype.toggleEnabled=function(){this.enabled=!this.enabled},o.prototype.toggle=function(e){var o=this;e&&(o=t(e.currentTarget).data("bs."+this.type),o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o))),e?(o.inState.click=!o.inState.click,o.isInStateTrue()?o.enter(o):o.leave(o)):o.tip().hasClass("in")?o.leave(o):o.enter(o)},o.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=o,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var o in e)if(void 0!==t.style[o])return{end:e[o]};return!1}t.fn.emulateTransitionEnd=function(e){var o=!1,i=this;t(this).one("bsTransitionEnd",function(){o=!0});var n=function(){o||t(i).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){t.fn.equalize=function(e){var o,i,n=this,s=!1,r=!1;return t.isPlainObject(e)?(o=e.equalize||"height",s=e.children||!1,r=e.reset||!1):o=e||"height",!!t.isFunction(t.fn[o])&&(i=o.indexOf("eight")>0?"height":"width",n.each(function(){var e=s?t(this).find(s):t(this).children(),n=0;e.each(function(){var e,s=t(this);r&&s.css(i,""),e=s[o](),e>n&&(n=e)}),e.css(i,n+"px")}))}}(jQuery),!function(t){t.fn.equalize=function(e){var o,i,n=!1,s=!1;return t.isPlainObject(e)?(o=e.equalize||"height",n=e.children||!1,s=e.reset||!1):o=e||"height",!!t.isFunction(t.fn[o])&&(i=0<o.indexOf("eight")?"height":"width",this.each(function(){var e=n?t(this).find(n):t(this).children(),r=0;e.each(function(){var e=t(this);s&&e.css(i,""),e=e[o](),e>r&&(r=e)}),e.css(i,r+"px")}))}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdownhover"),s=i.data();void 0!==i.data("animations")&&null!==i.data("animations")&&(s.animations=t.isArray(s.animations)?s.animations:s.animations.split(" "));var r=t.extend({},o.DEFAULTS,s,"object"==typeof e&&e);n||i.data("bs.dropdownhover",n=new o(this,r))})}var o=function(e,o){this.options=o,this.$element=t(e);var i=this;this.dropdowns=this.$element.hasClass("dropdown-toggle")?this.$element.parent().find(".dropdown-menu").parent(".dropdown"):this.$element.find(".dropdown"),this.dropdowns.each(function(){t(this).on("mouseenter.bs.dropdownhover",function(e){
i.show(t(this).children("a, button"))})}),this.dropdowns.each(function(){t(this).on("mouseleave.bs.dropdownhover",function(e){i.hide(t(this).children("a, button"))})})};o.TRANSITION_DURATION=300,o.DELAY=150,o.TIMEOUT,o.DEFAULTS={animations:["fadeInDown","fadeInRight","fadeInUp","fadeInLeft"]},o.prototype.show=function(e){var i=t(e);window.clearTimeout(o.TIMEOUT),t(".dropdown").not(i.parents()).each(function(){t(this).removeClass("open")});var n=this.options.animations[0];if(!i.is(".disabled, :disabled")){var s=i.parent(),r=s.hasClass("open");if(!r){var a=i.next(".dropdown-menu");s.addClass("open");var l=this.position(a);n="top"==l?this.options.animations[2]:"right"==l?this.options.animations[3]:"left"==l?this.options.animations[1]:this.options.animations[0],a.addClass("animated "+n);var d=t.support.transition&&a.hasClass("animated");d?a.one("bsTransitionEnd",function(){a.removeClass("animated "+n)}).emulateTransitionEnd(o.TRANSITION_DURATION):a.removeClass("animated "+n)}return!1}},o.prototype.hide=function(e){var i=t(e),n=i.parent();o.TIMEOUT=window.setTimeout(function(){n.removeClass("open")},o.DELAY)},o.prototype.position=function(e){var o=t(window);e.css({bottom:"",left:"",top:"",right:""}).removeClass("dropdownhover-top");var i={top:o.scrollTop(),left:o.scrollLeft()};i.right=i.left+o.width(),i.bottom=i.top+o.height();var n=e.offset();n.right=n.left+e.outerWidth(),n.bottom=n.top+e.outerHeight();var s=e.position();s.right=n.left+e.outerWidth(),s.bottom=n.top+e.outerHeight();var r="",a=e.parents(".dropdown-menu").length;if(a)s.left<0?(r="left",e.removeClass("dropdownhover-right").addClass("dropdownhover-left")):(r="right",e.addClass("dropdownhover-right").removeClass("dropdownhover-left")),n.left<i.left?(r="right",e.css({left:"100%",right:"auto"}).addClass("dropdownhover-right").removeClass("dropdownhover-left")):n.right>i.right&&(r="left",e.css({left:"auto",right:"100%"}).removeClass("dropdownhover-right").addClass("dropdownhover-left")),n.bottom>i.bottom?e.css({bottom:"auto",top:-(n.bottom-i.bottom)}):n.top<i.top&&e.css({bottom:-(i.top-n.top),top:"auto"});else{var l=e.parent(".dropdown"),d=l.offset();d.right=d.left+l.outerWidth(),d.bottom=d.top+l.outerHeight(),n.right>i.right&&e.css({left:-(n.right-i.right),right:"auto"}),n.bottom>i.bottom&&d.top-i.top>i.bottom-d.bottom||e.position().top<0?(r="top",e.css({bottom:"100%",top:"auto"}).addClass("dropdownhover-top").removeClass("dropdownhover-bottom")):(r="bottom",e.addClass("dropdownhover-bottom"))}return r};var i=t.fn.dropdownhover;t.fn.dropdownhover=e,t.fn.dropdownhover.Constructor=o,t.fn.dropdownhover.noConflict=function(){return t.fn.dropdownhover=i,this};var n;t(document).ready(function(){t(window).width()>=768&&t('[data-hover="dropdown"]').each(function(){var o=t(this);e.call(o,o.data())})}),t(window).on("resize",function(){clearTimeout(n),n=setTimeout(function(){t(window).width()>=768?t('[data-hover="dropdown"]').each(function(){var o=t(this);e.call(o,o.data())}):t('[data-hover="dropdown"]').each(function(){t(this).removeData("bs.dropdownhover"),t(this).hasClass("dropdown-toggle")?t(this).parent(".dropdown").find(".dropdown").andSelf().off("mouseenter.bs.dropdownhover mouseleave.bs.dropdownhover"):t(this).find(".dropdown").off("mouseenter.bs.dropdownhover mouseleave.bs.dropdownhover")})},200)})}(jQuery),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):jQuery&&!jQuery.fn.hoverIntent&&t(jQuery)}(function(t){"use strict";var e,o,i={interval:100,sensitivity:6,timeout:0},n=0,s=function(t){e=t.pageX,o=t.pageY},r=function(t,i,n,a){return Math.sqrt((n.pX-e)*(n.pX-e)+(n.pY-o)*(n.pY-o))<a.sensitivity?(i.off(n.event,s),delete n.timeoutId,n.isActive=!0,t.pageX=e,t.pageY=o,delete n.pX,delete n.pY,a.over.apply(i[0],[t])):(n.pX=e,n.pY=o,n.timeoutId=setTimeout(function(){r(t,i,n,a)},a.interval),void 0)},a=function(t,e,o,i){return delete e.data("hoverIntent")[o.id],i.apply(e[0],[t])};t.fn.hoverIntent=function(e,o,l){var d=n++,h=t.extend({},i);t.isPlainObject(e)?(h=t.extend(h,e),t.isFunction(h.out)||(h.out=h.over)):h=t.isFunction(o)?t.extend(h,{over:e,out:o,selector:l}):t.extend(h,{over:e,out:e,selector:o});var p=function(e){var o=t.extend({},e),i=t(this),n=i.data("hoverIntent");n||i.data("hoverIntent",n={});var l=n[d];l||(n[d]=l={id:d}),l.timeoutId&&(l.timeoutId=clearTimeout(l.timeoutId));var p=l.event="mousemove.hoverIntent.hoverIntent"+d;if("mouseenter"===e.type){if(l.isActive)return;l.pX=o.pageX,l.pY=o.pageY,i.off(p,s).on(p,s),l.timeoutId=setTimeout(function(){r(o,i,l,h)},h.interval)}else{if(!l.isActive)return;i.off(p,s),l.timeoutId=setTimeout(function(){a(o,i,l,h.out)},h.timeout)}};return this.on({"mouseenter.hoverIntent":p,"mouseleave.hoverIntent":p},h.selector)}}),jQuery(document).ready(function(t){t(document).on("scroll",function(){t(document).scrollTop()>20?t(".site-header").addClass("small"):t(".site-header").removeClass("small")}),t(".ui-hover li").each(function(){t(this).hover(function(){t(this).find(".hide").fadeIn("slow")},function(){t(this).find(".hide").fadeOut("fast")})});var e=t(".accordion > dd");e.hide(),t(".accordion > dt > a").click(function(){"#"===t(this).attr("href")&&t(this).click(function(){return!1});var o=t(this).parent().next();return o.is(":visible")?e.slideUp("fast"):(e.slideUp(),o.slideDown("fast")),!1});var o=t(".toggle > dd");o.hide(),t(".toggle > dt > a").click(function(){"#"===t(this).attr("href")&&t(this).click(function(){return!1});var e=t(this).parent().next();return e.is(":visible")?e.slideUp("fast"):e.slideDown("fast"),!1});var i=t(".scroll-to-top");"0"!==t(window).scrollTop()&&i.fadeIn(1200),t(window).scroll(function(){"0"===t(window).scrollTop()?i.fadeOut(350):i.fadeIn(1200)}),i.click(function(){t("html, body").animate({scrollTop:0},600)}),t("#add-row").on("click",function(){var e=t(".repeatable-fieldset:last").clone(!0);return e.addClass("new-row"),e.insertAfter(".repeatable-fieldset:last"),!1}),t(".remove-row").on("click",function(){return t(this).parents("tr.new-row").remove(),!1}),t(function(){t(function(){t(".cs-div").css({top:200+t(window).scrollTop(),right:"0"}),t(window).scroll(function(){var e=200+t(window).scrollTop()+"px";t(".cs-div").animate({top:e,right:"0"},{duration:500,queue:!1})}),t(window).resize(function(){var e=200+t(window).scrollTop()+"px";t(".cs-div").animate({top:e,right:"0"},{duration:500,queue:!1})}),t("#cs-close").click(function(){t(".cs-inner").toggle(),t(".cs-div").toggleClass("cs-bar")})})})});
//# sourceMappingURL=main.js.map
