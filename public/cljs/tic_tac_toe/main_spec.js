// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__25530__auto___28165 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__28138_28166 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28139_28167 = description__25530__auto___28165;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28139_28167);

try{var seq__28140_28172 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__28138_28166,_STAR_parent_description_STAR__temp_val__28139_28167,description__25530__auto___28165){
return (function (it__25904__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__28151 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__28152 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__28152);

try{return it__25904__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__28151);
}});})(_STAR_parent_description_STAR__orig_val__28138_28166,_STAR_parent_description_STAR__temp_val__28139_28167,description__25530__auto___28165))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28138_28166,_STAR_parent_description_STAR__temp_val__28139_28167,description__25530__auto___28165){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28138_28166,_STAR_parent_description_STAR__temp_val__28139_28167,description__25530__auto___28165))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__28138_28166,_STAR_parent_description_STAR__temp_val__28139_28167,description__25530__auto___28165){
return (function (){
var value__26034__auto__ = "#main-container";
var node__26035__auto__ = c3kit.wire.spec_helper.select.call(null,value__26034__auto__);
if(cljs.core.truth_(node__26035__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__28138_28166,_STAR_parent_description_STAR__temp_val__28139_28167,description__25530__auto___28165))
,false)],null)));
var chunk__28141_28173 = null;
var count__28142_28174 = (0);
var i__28143_28175 = (0);
while(true){
if((i__28143_28175 < count__28142_28174)){
var component__25531__auto___28182 = cljs.core._nth.call(null,chunk__28141_28173,i__28143_28175);
speclj.components.install.call(null,component__25531__auto___28182,description__25530__auto___28165);


var G__28183 = seq__28140_28172;
var G__28184 = chunk__28141_28173;
var G__28185 = count__28142_28174;
var G__28186 = (i__28143_28175 + (1));
seq__28140_28172 = G__28183;
chunk__28141_28173 = G__28184;
count__28142_28174 = G__28185;
i__28143_28175 = G__28186;
continue;
} else {
var temp__5825__auto___28187 = cljs.core.seq.call(null,seq__28140_28172);
if(temp__5825__auto___28187){
var seq__28140_28188__$1 = temp__5825__auto___28187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28140_28188__$1)){
var c__5548__auto___28189 = cljs.core.chunk_first.call(null,seq__28140_28188__$1);
var G__28190 = cljs.core.chunk_rest.call(null,seq__28140_28188__$1);
var G__28191 = c__5548__auto___28189;
var G__28192 = cljs.core.count.call(null,c__5548__auto___28189);
var G__28193 = (0);
seq__28140_28172 = G__28190;
chunk__28141_28173 = G__28191;
count__28142_28174 = G__28192;
i__28143_28175 = G__28193;
continue;
} else {
var component__25531__auto___28194 = cljs.core.first.call(null,seq__28140_28188__$1);
speclj.components.install.call(null,component__25531__auto___28194,description__25530__auto___28165);


var G__28195 = cljs.core.next.call(null,seq__28140_28188__$1);
var G__28196 = null;
var G__28197 = (0);
var G__28198 = (0);
seq__28140_28172 = G__28195;
chunk__28141_28173 = G__28196;
count__28142_28174 = G__28197;
i__28143_28175 = G__28198;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28138_28166);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto___28165);
}


//# sourceMappingURL=main_spec.js.map
