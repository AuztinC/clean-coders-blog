// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__8468__auto___16802 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__16736_16803 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16737_16804 = description__8468__auto___16802;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16737_16804);

try{var seq__16738_16805 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__16736_16803,_STAR_parent_description_STAR__temp_val__16737_16804,description__8468__auto___16802){
return (function (it__8842__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__16785 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__16786 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__16786);

try{return it__8842__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__16785);
}});})(_STAR_parent_description_STAR__orig_val__16736_16803,_STAR_parent_description_STAR__temp_val__16737_16804,description__8468__auto___16802))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16736_16803,_STAR_parent_description_STAR__temp_val__16737_16804,description__8468__auto___16802){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__16736_16803,_STAR_parent_description_STAR__temp_val__16737_16804,description__8468__auto___16802))
),speclj.components.new_characteristic.call(null,"game container",((function (_STAR_parent_description_STAR__orig_val__16736_16803,_STAR_parent_description_STAR__temp_val__16737_16804,description__8468__auto___16802){
return (function (){
var value__8972__auto__ = "#main-container";
var node__8973__auto__ = c3kit.wire.spec_helper.select.call(null,value__8972__auto__);
if(cljs.core.truth_(node__8973__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16736_16803,_STAR_parent_description_STAR__temp_val__16737_16804,description__8468__auto___16802))
,false)],null)));
var chunk__16739_16806 = null;
var count__16740_16807 = (0);
var i__16741_16808 = (0);
while(true){
if((i__16741_16808 < count__16740_16807)){
var component__8469__auto___16817 = cljs.core._nth.call(null,chunk__16739_16806,i__16741_16808);
speclj.components.install.call(null,component__8469__auto___16817,description__8468__auto___16802);


var G__16820 = seq__16738_16805;
var G__16821 = chunk__16739_16806;
var G__16822 = count__16740_16807;
var G__16823 = (i__16741_16808 + (1));
seq__16738_16805 = G__16820;
chunk__16739_16806 = G__16821;
count__16740_16807 = G__16822;
i__16741_16808 = G__16823;
continue;
} else {
var temp__5825__auto___16824 = cljs.core.seq.call(null,seq__16738_16805);
if(temp__5825__auto___16824){
var seq__16738_16825__$1 = temp__5825__auto___16824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16738_16825__$1)){
var c__5548__auto___16826 = cljs.core.chunk_first.call(null,seq__16738_16825__$1);
var G__16827 = cljs.core.chunk_rest.call(null,seq__16738_16825__$1);
var G__16828 = c__5548__auto___16826;
var G__16829 = cljs.core.count.call(null,c__5548__auto___16826);
var G__16830 = (0);
seq__16738_16805 = G__16827;
chunk__16739_16806 = G__16828;
count__16740_16807 = G__16829;
i__16741_16808 = G__16830;
continue;
} else {
var component__8469__auto___16831 = cljs.core.first.call(null,seq__16738_16825__$1);
speclj.components.install.call(null,component__8469__auto___16831,description__8468__auto___16802);


var G__16832 = cljs.core.next.call(null,seq__16738_16825__$1);
var G__16833 = null;
var G__16834 = (0);
var G__16835 = (0);
seq__16738_16805 = G__16832;
chunk__16739_16806 = G__16833;
count__16740_16807 = G__16834;
i__16741_16808 = G__16835;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16736_16803);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto___16802);
}


//# sourceMappingURL=main_spec.js.map
