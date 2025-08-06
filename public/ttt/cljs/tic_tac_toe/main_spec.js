// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__8450__auto___10875 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10843_10878 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10844_10879 = description__8450__auto___10875;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10844_10879);

try{var seq__10847_10884 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10843_10878,_STAR_parent_description_STAR__temp_val__10844_10879,description__8450__auto___10875){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__10857 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__10858 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__10858);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__10857);
}});})(_STAR_parent_description_STAR__orig_val__10843_10878,_STAR_parent_description_STAR__temp_val__10844_10879,description__8450__auto___10875))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10843_10878,_STAR_parent_description_STAR__temp_val__10844_10879,description__8450__auto___10875){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10843_10878,_STAR_parent_description_STAR__temp_val__10844_10879,description__8450__auto___10875))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__10843_10878,_STAR_parent_description_STAR__temp_val__10844_10879,description__8450__auto___10875){
return (function (){
var value__8954__auto__ = "#main-container";
var node__8955__auto__ = c3kit.wire.spec_helper.select.call(null,value__8954__auto__);
if(cljs.core.truth_(node__8955__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10843_10878,_STAR_parent_description_STAR__temp_val__10844_10879,description__8450__auto___10875))
,false)],null)));
var chunk__10848_10885 = null;
var count__10849_10886 = (0);
var i__10850_10887 = (0);
while(true){
if((i__10850_10887 < count__10849_10886)){
var component__8451__auto___10888 = cljs.core._nth.call(null,chunk__10848_10885,i__10850_10887);
speclj.components.install.call(null,component__8451__auto___10888,description__8450__auto___10875);


var G__10889 = seq__10847_10884;
var G__10890 = chunk__10848_10885;
var G__10891 = count__10849_10886;
var G__10892 = (i__10850_10887 + (1));
seq__10847_10884 = G__10889;
chunk__10848_10885 = G__10890;
count__10849_10886 = G__10891;
i__10850_10887 = G__10892;
continue;
} else {
var temp__5825__auto___10893 = cljs.core.seq.call(null,seq__10847_10884);
if(temp__5825__auto___10893){
var seq__10847_10894__$1 = temp__5825__auto___10893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10847_10894__$1)){
var c__5548__auto___10895 = cljs.core.chunk_first.call(null,seq__10847_10894__$1);
var G__10896 = cljs.core.chunk_rest.call(null,seq__10847_10894__$1);
var G__10897 = c__5548__auto___10895;
var G__10898 = cljs.core.count.call(null,c__5548__auto___10895);
var G__10899 = (0);
seq__10847_10884 = G__10896;
chunk__10848_10885 = G__10897;
count__10849_10886 = G__10898;
i__10850_10887 = G__10899;
continue;
} else {
var component__8451__auto___10900 = cljs.core.first.call(null,seq__10847_10894__$1);
speclj.components.install.call(null,component__8451__auto___10900,description__8450__auto___10875);


var G__10901 = cljs.core.next.call(null,seq__10847_10894__$1);
var G__10902 = null;
var G__10903 = (0);
var G__10904 = (0);
seq__10847_10884 = G__10901;
chunk__10848_10885 = G__10902;
count__10849_10886 = G__10903;
i__10850_10887 = G__10904;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10843_10878);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___10875);
}


//# sourceMappingURL=main_spec.js.map
