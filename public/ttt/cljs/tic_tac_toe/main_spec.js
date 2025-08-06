// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__8450__auto___13079 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__13064_13082 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13065_13083 = description__8450__auto___13079;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13065_13083);

try{var seq__13066_13085 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13064_13082,_STAR_parent_description_STAR__temp_val__13065_13083,description__8450__auto___13079){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__13077 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__13078 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__13078);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__13077);
}});})(_STAR_parent_description_STAR__orig_val__13064_13082,_STAR_parent_description_STAR__temp_val__13065_13083,description__8450__auto___13079))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13064_13082,_STAR_parent_description_STAR__temp_val__13065_13083,description__8450__auto___13079){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13064_13082,_STAR_parent_description_STAR__temp_val__13065_13083,description__8450__auto___13079))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__13064_13082,_STAR_parent_description_STAR__temp_val__13065_13083,description__8450__auto___13079){
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
});})(_STAR_parent_description_STAR__orig_val__13064_13082,_STAR_parent_description_STAR__temp_val__13065_13083,description__8450__auto___13079))
,false)],null)));
var chunk__13067_13089 = null;
var count__13068_13090 = (0);
var i__13069_13091 = (0);
while(true){
if((i__13069_13091 < count__13068_13090)){
var component__8451__auto___13098 = cljs.core._nth.call(null,chunk__13067_13089,i__13069_13091);
speclj.components.install.call(null,component__8451__auto___13098,description__8450__auto___13079);


var G__13099 = seq__13066_13085;
var G__13100 = chunk__13067_13089;
var G__13101 = count__13068_13090;
var G__13102 = (i__13069_13091 + (1));
seq__13066_13085 = G__13099;
chunk__13067_13089 = G__13100;
count__13068_13090 = G__13101;
i__13069_13091 = G__13102;
continue;
} else {
var temp__5825__auto___13107 = cljs.core.seq.call(null,seq__13066_13085);
if(temp__5825__auto___13107){
var seq__13066_13108__$1 = temp__5825__auto___13107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13066_13108__$1)){
var c__5548__auto___13109 = cljs.core.chunk_first.call(null,seq__13066_13108__$1);
var G__13110 = cljs.core.chunk_rest.call(null,seq__13066_13108__$1);
var G__13111 = c__5548__auto___13109;
var G__13112 = cljs.core.count.call(null,c__5548__auto___13109);
var G__13113 = (0);
seq__13066_13085 = G__13110;
chunk__13067_13089 = G__13111;
count__13068_13090 = G__13112;
i__13069_13091 = G__13113;
continue;
} else {
var component__8451__auto___13116 = cljs.core.first.call(null,seq__13066_13108__$1);
speclj.components.install.call(null,component__8451__auto___13116,description__8450__auto___13079);


var G__13121 = cljs.core.next.call(null,seq__13066_13108__$1);
var G__13122 = null;
var G__13123 = (0);
var G__13124 = (0);
seq__13066_13085 = G__13121;
chunk__13067_13089 = G__13122;
count__13068_13090 = G__13123;
i__13069_13091 = G__13124;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13064_13082);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___13079);
}


//# sourceMappingURL=main_spec.js.map
