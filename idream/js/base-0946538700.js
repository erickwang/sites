function getEnv(){var n=navigator.userAgent.toLowerCase();return/micromessenger(\/[\d\.]+)*/.test(n)?"weixin":/qq\/(\/[\d\.]+)*/.test(n)||/qzone\//.test(n)?"qq":"h5"}function showDialog(n,o,e){var i='<div class="dialog"><div class="dialog-text"><p>{txt}</p></div><div class="dialog-footer"><a href="javascript:;" class="confirm">{confirm}</a><a href="javascript:;" class="cancel">{cancel}</a></div></div>',t="string"==typeof n,c=t?n:n.txt,a=t?"确定":n.confirm,r=t?"取消":n.cancel,l=$(i.replace("{txt}",c).replace("{confirm}",a).replace("{cancel}",r));$("#overlay").show(),$(document.body).append(l),l.find(".confirm").on("click",function(){o&&o(),$("#overlay").hide(),l.remove()}),l.find(".cancel").on("click",function(){e&&e(),$("#overlay").hide(),l.remove()})}function setTextHeight(n){function o(){var n=$(this),o=n.scrollTop(),e=n.height();setTimeout(function(){o=n.scrollTop(),e=n.height(),n.height(e+o+"px")},100)}var e="oninput"in window?"input":"onpropertychange"in window?"propertychange":"keyup",i=$("#"+n),t=i.val();i.on(e,o),i.val(""),i.val(t),i.focus(),o.call(i)}function hideDialogs(){$(".down-tip").hide()}var changeEvent="oninput"in window?"input":"onpropertychange"in window?"propertychange":"keyup",env=getEnv();$(document.body).on("click",function(){hideDialogs()}),$("#scrollPos").on("click",function(n){n.stopPropagation(),$(".middle").scrollTop(0)}).on("dblclick",function(n){n.stopPropagation(),$(".middle").scrollTop($(document).height())});