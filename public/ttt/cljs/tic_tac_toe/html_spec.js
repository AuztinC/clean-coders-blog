// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.main');
goog.require('tic_tac_toe.setupc');
tic_tac_toe.html_spec.cssfn = (function tic_tac_toe$html_spec$cssfn(target,key){
return c3kit.wire.spec_helper.style.call(null,target).getPropertyValue(key);
});
tic_tac_toe.html_spec.cell_count = (function tic_tac_toe$html_spec$cell_count(size){
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,size)], null);
var out = tic_tac_toe.html.render_board.call(null,state);
var vec__13074 = out;
var seq__13075 = cljs.core.seq.call(null,vec__13074);
var first__13076 = cljs.core.first.call(null,seq__13075);
var seq__13075__$1 = cljs.core.next.call(null,seq__13075);
var _tag = first__13076;
var first__13076__$1 = cljs.core.first.call(null,seq__13075__$1);
var seq__13075__$2 = cljs.core.next.call(null,seq__13075__$1);
var _attrs = first__13076__$1;
var rows = seq__13075__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__8450__auto___13285 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13080_13286 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13081_13287 = description__8450__auto___13285;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13081_13287);

try{var seq__13084_13288 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__13197 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__13198 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__13198);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__13197);
}});})(_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (it__8517__auto__){
var auto_advance_orig_val__13199 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__13200 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__13200);

try{return it__8517__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__13199);
}});})(_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13201_13292 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13202_13293 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13202_13293);

try{var seq__13203_13294 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"reset btn",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13225_13298 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13226_13299 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13226_13299);

try{var seq__13227_13300 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13225_13298,_STAR_parent_description_STAR__temp_val__13226_13299,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13225_13298,_STAR_parent_description_STAR__temp_val__13226_13299,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_characteristic.call(null,"displays btn when :players exist",((function (_STAR_parent_description_STAR__orig_val__13225_13298,_STAR_parent_description_STAR__temp_val__13226_13299,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var value__8954__auto__ = "#reset-btn";
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
});})(_STAR_parent_description_STAR__orig_val__13225_13298,_STAR_parent_description_STAR__temp_val__13226_13299,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"resets state when click",((function (_STAR_parent_description_STAR__orig_val__13225_13298,_STAR_parent_description_STAR__temp_val__13226_13299,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#reset-btn");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = tic_tac_toe.setup.starting_state;
var actual__8593__auto__ = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13225_13298,_STAR_parent_description_STAR__temp_val__13226_13299,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false)],null)));
var chunk__13228_13301 = null;
var count__13229_13302 = (0);
var i__13230_13303 = (0);
while(true){
if((i__13230_13303 < count__13229_13302)){
var component__8451__auto___13304 = cljs.core._nth.call(null,chunk__13228_13301,i__13230_13303);
speclj.components.install.call(null,component__8451__auto___13304,description__8450__auto____$2);


var G__13305 = seq__13227_13300;
var G__13306 = chunk__13228_13301;
var G__13307 = count__13229_13302;
var G__13308 = (i__13230_13303 + (1));
seq__13227_13300 = G__13305;
chunk__13228_13301 = G__13306;
count__13229_13302 = G__13307;
i__13230_13303 = G__13308;
continue;
} else {
var temp__5825__auto___13309 = cljs.core.seq.call(null,seq__13227_13300);
if(temp__5825__auto___13309){
var seq__13227_13310__$1 = temp__5825__auto___13309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13227_13310__$1)){
var c__5548__auto___13311 = cljs.core.chunk_first.call(null,seq__13227_13310__$1);
var G__13312 = cljs.core.chunk_rest.call(null,seq__13227_13310__$1);
var G__13313 = c__5548__auto___13311;
var G__13314 = cljs.core.count.call(null,c__5548__auto___13311);
var G__13315 = (0);
seq__13227_13300 = G__13312;
chunk__13228_13301 = G__13313;
count__13229_13302 = G__13314;
i__13230_13303 = G__13315;
continue;
} else {
var component__8451__auto___13316 = cljs.core.first.call(null,seq__13227_13310__$1);
speclj.components.install.call(null,component__8451__auto___13316,description__8450__auto____$2);


var G__13317 = cljs.core.next.call(null,seq__13227_13310__$1);
var G__13318 = null;
var G__13319 = (0);
var G__13320 = (0);
seq__13227_13300 = G__13317;
chunk__13228_13301 = G__13318;
count__13229_13302 = G__13319;
i__13230_13303 = G__13320;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13225_13298);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})(),(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13231_13321 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13232_13322 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13232_13322);

try{var seq__13233_13323 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13327 = "Human vs AI";
var actual__8593__auto___13328 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__8592__auto___13327,actual__8593__auto___13328)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13327;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13328;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13329 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___13330 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13329,actual__8593__auto___13330)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13329;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13330;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__8593__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13331 = "AI vs Human";
var actual__8593__auto___13332 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__8592__auto___13331,actual__8593__auto___13332)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13331;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13332;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13333 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___13334 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13333,actual__8593__auto___13334)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13333;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13334;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__8593__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13335 = "Human vs Human";
var actual__8593__auto___13336 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__8592__auto___13335,actual__8593__auto___13336)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13335;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13336;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13337 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___13338 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13337,actual__8593__auto___13338)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13337;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13338;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__8593__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13339 = "AI vs AI";
var actual__8593__auto___13340 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__8592__auto___13339,actual__8593__auto___13340)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13339;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13341 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___13342 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13341,actual__8593__auto___13342)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13341;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__8593__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13231_13321,_STAR_parent_description_STAR__temp_val__13232_13322,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false)],null)));
var chunk__13234_13324 = null;
var count__13235_13325 = (0);
var i__13236_13326 = (0);
while(true){
if((i__13236_13326 < count__13235_13325)){
var component__8451__auto___13343 = cljs.core._nth.call(null,chunk__13234_13324,i__13236_13326);
speclj.components.install.call(null,component__8451__auto___13343,description__8450__auto____$2);


var G__13344 = seq__13233_13323;
var G__13345 = chunk__13234_13324;
var G__13346 = count__13235_13325;
var G__13347 = (i__13236_13326 + (1));
seq__13233_13323 = G__13344;
chunk__13234_13324 = G__13345;
count__13235_13325 = G__13346;
i__13236_13326 = G__13347;
continue;
} else {
var temp__5825__auto___13348 = cljs.core.seq.call(null,seq__13233_13323);
if(temp__5825__auto___13348){
var seq__13233_13349__$1 = temp__5825__auto___13348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13233_13349__$1)){
var c__5548__auto___13350 = cljs.core.chunk_first.call(null,seq__13233_13349__$1);
var G__13351 = cljs.core.chunk_rest.call(null,seq__13233_13349__$1);
var G__13352 = c__5548__auto___13350;
var G__13353 = cljs.core.count.call(null,c__5548__auto___13350);
var G__13354 = (0);
seq__13233_13323 = G__13351;
chunk__13234_13324 = G__13352;
count__13235_13325 = G__13353;
i__13236_13326 = G__13354;
continue;
} else {
var component__8451__auto___13355 = cljs.core.first.call(null,seq__13233_13349__$1);
speclj.components.install.call(null,component__8451__auto___13355,description__8450__auto____$2);


var G__13356 = cljs.core.next.call(null,seq__13233_13349__$1);
var G__13357 = null;
var G__13358 = (0);
var G__13359 = (0);
seq__13233_13323 = G__13356;
chunk__13234_13324 = G__13357;
count__13235_13325 = G__13358;
i__13236_13326 = G__13359;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13231_13321);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})(),(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13237_13360 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13238_13361 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13238_13361);

try{var seq__13239_13362 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var value__8954__auto___13366 = "#board-3x3";
var node__8955__auto___13367 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13366);
if(cljs.core.truth_(node__8955__auto___13367)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13366;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13368 = "3x3";
var actual__8593__auto___13369 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__8592__auto___13368,actual__8593__auto___13369)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13368;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13369;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13370 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___13371 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13370,actual__8593__auto___13371)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13370;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13371;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13372 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__8593__auto___13373 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13372,actual__8593__auto___13373)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13372;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13373;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__8593__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var value__8954__auto___13374 = "#board-4x4";
var node__8955__auto___13375 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13374);
if(cljs.core.truth_(node__8955__auto___13375)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13374;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13376 = "4x4";
var actual__8593__auto___13377 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__8592__auto___13376,actual__8593__auto___13377)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13376;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13377;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13378 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___13379 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13378,actual__8593__auto___13379)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13378;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13379;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13380 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__8593__auto___13381 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13380,actual__8593__auto___13381)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13380;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13381;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__8593__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var value__8954__auto___13382 = "#board-3x3x3";
var node__8955__auto___13383 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13382);
if(cljs.core.truth_(node__8955__auto___13383)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13382;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13384 = "3x3x3";
var actual__8593__auto___13385 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__8592__auto___13384,actual__8593__auto___13385)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13384;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13385;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13386 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___13387 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13386,actual__8593__auto___13387)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13386;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13387;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13388 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__8593__auto___13389 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___13388,actual__8593__auto___13389)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13388;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13389;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__8593__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"skips difficulty if HvH",((function (_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__8954__auto___13390 = "#board-3x3";
var node__8955__auto___13391 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13390);
if(cljs.core.truth_(node__8955__auto___13391)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13390;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8593__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13237_13360,_STAR_parent_description_STAR__temp_val__13238_13361,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13201_13292,_STAR_parent_description_STAR__temp_val__13202_13293,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false)],null)));
var chunk__13240_13363 = null;
var count__13241_13364 = (0);
var i__13242_13365 = (0);
while(true){
if((i__13242_13365 < count__13241_13364)){
var component__8451__auto___13392 = cljs.core._nth.call(null,chunk__13240_13363,i__13242_13365);
speclj.components.install.call(null,component__8451__auto___13392,description__8450__auto____$2);


var G__13393 = seq__13239_13362;
var G__13394 = chunk__13240_13363;
var G__13395 = count__13241_13364;
var G__13396 = (i__13242_13365 + (1));
seq__13239_13362 = G__13393;
chunk__13240_13363 = G__13394;
count__13241_13364 = G__13395;
i__13242_13365 = G__13396;
continue;
} else {
var temp__5825__auto___13397 = cljs.core.seq.call(null,seq__13239_13362);
if(temp__5825__auto___13397){
var seq__13239_13398__$1 = temp__5825__auto___13397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13239_13398__$1)){
var c__5548__auto___13399 = cljs.core.chunk_first.call(null,seq__13239_13398__$1);
var G__13400 = cljs.core.chunk_rest.call(null,seq__13239_13398__$1);
var G__13401 = c__5548__auto___13399;
var G__13402 = cljs.core.count.call(null,c__5548__auto___13399);
var G__13403 = (0);
seq__13239_13362 = G__13400;
chunk__13240_13363 = G__13401;
count__13241_13364 = G__13402;
i__13242_13365 = G__13403;
continue;
} else {
var component__8451__auto___13404 = cljs.core.first.call(null,seq__13239_13398__$1);
speclj.components.install.call(null,component__8451__auto___13404,description__8450__auto____$2);


var G__13405 = cljs.core.next.call(null,seq__13239_13398__$1);
var G__13406 = null;
var G__13407 = (0);
var G__13408 = (0);
seq__13239_13362 = G__13405;
chunk__13240_13363 = G__13406;
count__13241_13364 = G__13407;
i__13242_13365 = G__13408;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13237_13360);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})()],null)));
var chunk__13204_13295 = null;
var count__13205_13296 = (0);
var i__13206_13297 = (0);
while(true){
if((i__13206_13297 < count__13205_13296)){
var component__8451__auto___13409 = cljs.core._nth.call(null,chunk__13204_13295,i__13206_13297);
speclj.components.install.call(null,component__8451__auto___13409,description__8450__auto____$1);


var G__13410 = seq__13203_13294;
var G__13411 = chunk__13204_13295;
var G__13412 = count__13205_13296;
var G__13413 = (i__13206_13297 + (1));
seq__13203_13294 = G__13410;
chunk__13204_13295 = G__13411;
count__13205_13296 = G__13412;
i__13206_13297 = G__13413;
continue;
} else {
var temp__5825__auto___13414 = cljs.core.seq.call(null,seq__13203_13294);
if(temp__5825__auto___13414){
var seq__13203_13415__$1 = temp__5825__auto___13414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13203_13415__$1)){
var c__5548__auto___13416 = cljs.core.chunk_first.call(null,seq__13203_13415__$1);
var G__13417 = cljs.core.chunk_rest.call(null,seq__13203_13415__$1);
var G__13418 = c__5548__auto___13416;
var G__13419 = cljs.core.count.call(null,c__5548__auto___13416);
var G__13420 = (0);
seq__13203_13294 = G__13417;
chunk__13204_13295 = G__13418;
count__13205_13296 = G__13419;
i__13206_13297 = G__13420;
continue;
} else {
var component__8451__auto___13421 = cljs.core.first.call(null,seq__13203_13415__$1);
speclj.components.install.call(null,component__8451__auto___13421,description__8450__auto____$1);


var G__13422 = cljs.core.next.call(null,seq__13203_13415__$1);
var G__13423 = null;
var G__13424 = (0);
var G__13425 = (0);
seq__13203_13294 = G__13422;
chunk__13204_13295 = G__13423;
count__13205_13296 = G__13424;
i__13206_13297 = G__13425;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13201_13292);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13243_13426 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13244_13427 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13244_13427);

try{var seq__13245_13428 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var select_difficulty_BANG__orig_val__13255 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__13256 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__13256);

try{var value__8954__auto___13432 = "#easy";
var node__8955__auto___13433 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13432);
if(cljs.core.truth_(node__8955__auto___13433)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13432;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13434 = "Easy";
var actual__8593__auto___13435 = c3kit.wire.spec_helper.text.call(null,"#easy");
if(cljs.core._EQ_.call(null,expected__8592__auto___13434,actual__8593__auto___13435)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13434;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13435;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__8838__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__8839__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__8840__auto__ = speclj.stub.invocations_of.call(null,name__8838__auto__);
var times__8841__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var times_QMARK___8842__auto__ = typeof times__8841__auto__ === 'number';
var check_params_QMARK___8843__auto__ = cljs.core.contains_QMARK_.call(null,options__8839__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8844__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var with__8844__auto____$1 = (((with__8844__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8844__auto__);
var invocations_str__8845__auto__ = (function (p1__8835__8846__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8835__8846__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8842__auto__) && (check_params_QMARK___8843__auto__))){
var matching_invocations__8847__auto__ = cljs.core.filter.call(null,(function (p1__8836__8848__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8836__8848__auto__);
}),invocations__8840__auto__);
var matching_count__8849__auto__ = cljs.core.count.call(null,matching_invocations__8847__auto__);
if(cljs.core._EQ_.call(null,times__8841__auto__,matching_count__8849__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8849__auto__)," ",invocations_str__8845__auto__.call(null,matching_count__8849__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8843__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8837__8850__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8837__8850__auto__);
}),invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8840__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8842__auto__){
if(cljs.core._EQ_.call(null,times__8841__auto__,cljs.core.count.call(null,invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8840__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__13255);
}});})(_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var select_difficulty_BANG__orig_val__13257 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__13258 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__13258);

try{var value__8954__auto___13436 = "#medium";
var node__8955__auto___13437 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13436);
if(cljs.core.truth_(node__8955__auto___13437)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13436;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13438 = "Medium";
var actual__8593__auto___13439 = c3kit.wire.spec_helper.text.call(null,"#medium");
if(cljs.core._EQ_.call(null,expected__8592__auto___13438,actual__8593__auto___13439)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13438;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13439;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__8838__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__8839__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.setup.state,new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__8840__auto__ = speclj.stub.invocations_of.call(null,name__8838__auto__);
var times__8841__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var times_QMARK___8842__auto__ = typeof times__8841__auto__ === 'number';
var check_params_QMARK___8843__auto__ = cljs.core.contains_QMARK_.call(null,options__8839__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8844__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var with__8844__auto____$1 = (((with__8844__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8844__auto__);
var invocations_str__8845__auto__ = (function (p1__8835__8846__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8835__8846__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8842__auto__) && (check_params_QMARK___8843__auto__))){
var matching_invocations__8847__auto__ = cljs.core.filter.call(null,(function (p1__8836__8848__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8836__8848__auto__);
}),invocations__8840__auto__);
var matching_count__8849__auto__ = cljs.core.count.call(null,matching_invocations__8847__auto__);
if(cljs.core._EQ_.call(null,times__8841__auto__,matching_count__8849__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8849__auto__)," ",invocations_str__8845__auto__.call(null,matching_count__8849__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8843__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8837__8850__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8837__8850__auto__);
}),invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8840__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8842__auto__){
if(cljs.core._EQ_.call(null,times__8841__auto__,cljs.core.count.call(null,invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8840__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__13257);
}});})(_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var select_difficulty_BANG__orig_val__13259 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__13260 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__13260);

try{var value__8954__auto___13440 = "#hard";
var node__8955__auto___13441 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13440);
if(cljs.core.truth_(node__8955__auto___13441)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13440;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13442 = "Hard";
var actual__8593__auto___13443 = c3kit.wire.spec_helper.text.call(null,"#hard");
if(cljs.core._EQ_.call(null,expected__8592__auto___13442,actual__8593__auto___13443)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13442;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13443;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__8838__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__8839__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.setup.state,new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__8840__auto__ = speclj.stub.invocations_of.call(null,name__8838__auto__);
var times__8841__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var times_QMARK___8842__auto__ = typeof times__8841__auto__ === 'number';
var check_params_QMARK___8843__auto__ = cljs.core.contains_QMARK_.call(null,options__8839__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8844__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var with__8844__auto____$1 = (((with__8844__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8844__auto__);
var invocations_str__8845__auto__ = (function (p1__8835__8846__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8835__8846__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8842__auto__) && (check_params_QMARK___8843__auto__))){
var matching_invocations__8847__auto__ = cljs.core.filter.call(null,(function (p1__8836__8848__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8836__8848__auto__);
}),invocations__8840__auto__);
var matching_count__8849__auto__ = cljs.core.count.call(null,matching_invocations__8847__auto__);
if(cljs.core._EQ_.call(null,times__8841__auto__,matching_count__8849__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8849__auto__)," ",invocations_str__8845__auto__.call(null,matching_count__8849__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8843__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8837__8850__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8837__8850__auto__);
}),invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8840__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8842__auto__){
if(cljs.core._EQ_.call(null,times__8841__auto__,cljs.core.count.call(null,invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8840__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__13259);
}});})(_STAR_parent_description_STAR__orig_val__13243_13426,_STAR_parent_description_STAR__temp_val__13244_13427,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false)],null)));
var chunk__13246_13429 = null;
var count__13247_13430 = (0);
var i__13248_13431 = (0);
while(true){
if((i__13248_13431 < count__13247_13430)){
var component__8451__auto___13444 = cljs.core._nth.call(null,chunk__13246_13429,i__13248_13431);
speclj.components.install.call(null,component__8451__auto___13444,description__8450__auto____$1);


var G__13445 = seq__13245_13428;
var G__13446 = chunk__13246_13429;
var G__13447 = count__13247_13430;
var G__13448 = (i__13248_13431 + (1));
seq__13245_13428 = G__13445;
chunk__13246_13429 = G__13446;
count__13247_13430 = G__13447;
i__13248_13431 = G__13448;
continue;
} else {
var temp__5825__auto___13449 = cljs.core.seq.call(null,seq__13245_13428);
if(temp__5825__auto___13449){
var seq__13245_13450__$1 = temp__5825__auto___13449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13245_13450__$1)){
var c__5548__auto___13451 = cljs.core.chunk_first.call(null,seq__13245_13450__$1);
var G__13452 = cljs.core.chunk_rest.call(null,seq__13245_13450__$1);
var G__13453 = c__5548__auto___13451;
var G__13454 = cljs.core.count.call(null,c__5548__auto___13451);
var G__13455 = (0);
seq__13245_13428 = G__13452;
chunk__13246_13429 = G__13453;
count__13247_13430 = G__13454;
i__13248_13431 = G__13455;
continue;
} else {
var component__8451__auto___13456 = cljs.core.first.call(null,seq__13245_13450__$1);
speclj.components.install.call(null,component__8451__auto___13456,description__8450__auto____$1);


var G__13457 = cljs.core.next.call(null,seq__13245_13450__$1);
var G__13458 = null;
var G__13459 = (0);
var G__13460 = (0);
seq__13245_13428 = G__13457;
chunk__13246_13429 = G__13458;
count__13247_13430 = G__13459;
i__13248_13431 = G__13460;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13243_13426);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13261_13461 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13262_13462 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13262_13462);

try{var seq__13263_13463 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (it__8517__auto__){
var check_winner_orig_val__13273 = tic_tac_toe.board.check_winner;
var check_winner_temp_val__13274 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"check-winner","check-winner",1536860418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),false], null));
(tic_tac_toe.board.check_winner = check_winner_temp_val__13274);

try{return it__8517__auto__.call(null);
}finally {(tic_tac_toe.board.check_winner = check_winner_orig_val__13273);
}});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___13467 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__8644__auto___13468 = out;
if((actual__8644__auto___13468 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___13467 === 'string') && (typeof actual__8644__auto___13468 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___13468,expected__8643__auto___13467) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13468;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___13467)) && (typeof actual__8644__auto___13468 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___13467,actual__8644__auto___13468))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___13468;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___13467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___13468)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___13468,expected__8643__auto___13467)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13468;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___13468)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___13467,p1__8642__8645__auto__);
}),actual__8644__auto___13468))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13468;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___13467;
var b__8572__auto__ = actual__8644__auto___13468;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto__ = "index";
var actual__8644__auto__ = out;
if((actual__8644__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto__ === 'string') && (typeof actual__8644__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto__,expected__8643__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto__)) && (typeof actual__8644__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto__,actual__8644__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto__,expected__8643__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto__,p1__8642__8645__auto__);
}),actual__8644__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto__;
var b__8572__auto__ = actual__8644__auto__;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___13469 = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__8644__auto___13470 = out;
if((actual__8644__auto___13470 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13469;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___13469 === 'string') && (typeof actual__8644__auto___13470 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___13470,expected__8643__auto___13469) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13469;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13470;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___13469)) && (typeof actual__8644__auto___13470 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___13469,actual__8644__auto___13470))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___13470;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___13469;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___13470)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___13470,expected__8643__auto___13469)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13469;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13470;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___13470)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___13469,p1__8642__8645__auto__);
}),actual__8644__auto___13470))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13469;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13470;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___13469;
var b__8572__auto__ = actual__8644__auto___13470;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}

var value__8954__auto__ = "#game-board-3x3";
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
});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13471 = (3);
var actual__8593__auto___13472 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13471,actual__8593__auto___13472)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13471;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13472;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13473 = (3);
var actual__8593__auto___13474 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13473,actual__8593__auto___13474)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13473;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13474;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = (9);
var actual__8593__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13475 = (4);
var actual__8593__auto___13476 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13475,actual__8593__auto___13476)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13475;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13476;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13477 = (4);
var actual__8593__auto___13478 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13477,actual__8593__auto___13478)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13477;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13478;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = (16);
var actual__8593__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13479 = (3);
var actual__8593__auto___13480 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13479,actual__8593__auto___13480)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13479;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13480;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13481 = (9);
var actual__8593__auto___13482 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13481,actual__8593__auto___13482)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13481;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13482;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = (27);
var actual__8593__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto__,actual__8593__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var apply_human_move_orig_val__13275 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__13276 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__13276);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__8954__auto___13483 = "#cell-1";
var node__8955__auto___13484 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13483);
if(cljs.core.truth_(node__8955__auto___13484)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13483;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13485 = "grey";
var actual__8593__auto___13486 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","background-color");
if(cljs.core._EQ_.call(null,expected__8592__auto___13485,actual__8593__auto___13486)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13485;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13486;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13487 = "60px";
var actual__8593__auto___13488 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","width");
if(cljs.core._EQ_.call(null,expected__8592__auto___13487,actual__8593__auto___13488)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13487;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13488;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13489 = "60px";
var actual__8593__auto___13490 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","height");
if(cljs.core._EQ_.call(null,expected__8592__auto___13489,actual__8593__auto___13490)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13489;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13490;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13491 = "pointer";
var actual__8593__auto___13492 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","cursor");
if(cljs.core._EQ_.call(null,expected__8592__auto___13491,actual__8593__auto___13492)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13491;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13492;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13493 = "1";
var actual__8593__auto___13494 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__8592__auto___13493,actual__8593__auto___13494)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13493;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13494;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__8838__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__8839__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8840__auto__ = speclj.stub.invocations_of.call(null,name__8838__auto__);
var times__8841__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var times_QMARK___8842__auto__ = typeof times__8841__auto__ === 'number';
var check_params_QMARK___8843__auto__ = cljs.core.contains_QMARK_.call(null,options__8839__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8844__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8839__auto__);
var with__8844__auto____$1 = (((with__8844__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8844__auto__);
var invocations_str__8845__auto__ = (function (p1__8835__8846__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8835__8846__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8842__auto__) && (check_params_QMARK___8843__auto__))){
var matching_invocations__8847__auto__ = cljs.core.filter.call(null,(function (p1__8836__8848__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8836__8848__auto__);
}),invocations__8840__auto__);
var matching_count__8849__auto__ = cljs.core.count.call(null,matching_invocations__8847__auto__);
if(cljs.core._EQ_.call(null,times__8841__auto__,matching_count__8849__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8849__auto__)," ",invocations_str__8845__auto__.call(null,matching_count__8849__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8843__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8837__8850__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8844__auto____$1,p1__8837__8850__auto__);
}),invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__)," with ",cljs.core.pr_str.call(null,with__8844__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8840__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8842__auto__){
if(cljs.core._EQ_.call(null,times__8841__auto__,cljs.core.count.call(null,invocations__8840__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8841__auto__)," ",invocations_str__8845__auto__.call(null,times__8841__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8840__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8838__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8840__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__13275);
}});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var apply_human_move_orig_val__13277 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__13278 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__13278);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__8954__auto___13495 = "#cell-1";
var node__8955__auto___13496 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13495);
if(cljs.core.truth_(node__8955__auto___13496)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13495;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13497 = "1";
var actual__8593__auto___13498 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__8592__auto___13497,actual__8593__auto___13498)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13497;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13498;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__8859__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__8860__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8861__auto__ = speclj.stub.invocations_of.call(null,name__8859__auto__);
var times__8862__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8860__auto__);
var times_QMARK___8863__auto__ = typeof times__8862__auto__ === 'number';
var check_params_QMARK___8864__auto__ = cljs.core.contains_QMARK_.call(null,options__8860__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8865__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8860__auto__);
var with__8865__auto____$1 = (((with__8865__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8865__auto__);
var add_s__8866__auto__ = (function (p1__8856__8867__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8856__8867__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___8863__auto__) && (check_params_QMARK___8864__auto__))){
var matching_invocations__8868__auto__ = cljs.core.filter.call(null,(function (p1__8857__8869__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8865__auto____$1,p1__8857__8869__auto__);
}),invocations__8861__auto__);
var matching_count__8870__auto__ = cljs.core.count.call(null,matching_invocations__8868__auto__);
if(cljs.core._EQ_.call(null,times__8862__auto__,matching_count__8870__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8862__auto__)," time",add_s__8866__auto__.call(null,matching_count__8870__auto__)," with ",cljs.core.pr_str.call(null,with__8865__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8870__auto__)," invocation",add_s__8866__auto__.call(null,matching_count__8870__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___8863__auto__){
if(cljs.core._EQ_.call(null,times__8862__auto__,cljs.core.count.call(null,invocations__8861__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8862__auto__)," time",add_s__8866__auto__.call(null,times__8862__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8862__auto__)," invocation",add_s__8866__auto__.call(null,times__8862__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___8864__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8858__8871__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8865__auto____$1,p1__8858__8871__auto__);
}),invocations__8861__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__8865__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8861__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__8861__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8859__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8861__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__13277);
}});})(_STAR_parent_description_STAR__orig_val__13261_13461,_STAR_parent_description_STAR__temp_val__13262_13462,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false)],null)));
var chunk__13264_13464 = null;
var count__13265_13465 = (0);
var i__13266_13466 = (0);
while(true){
if((i__13266_13466 < count__13265_13465)){
var component__8451__auto___13499 = cljs.core._nth.call(null,chunk__13264_13464,i__13266_13466);
speclj.components.install.call(null,component__8451__auto___13499,description__8450__auto____$1);


var G__13500 = seq__13263_13463;
var G__13501 = chunk__13264_13464;
var G__13502 = count__13265_13465;
var G__13503 = (i__13266_13466 + (1));
seq__13263_13463 = G__13500;
chunk__13264_13464 = G__13501;
count__13265_13465 = G__13502;
i__13266_13466 = G__13503;
continue;
} else {
var temp__5825__auto___13504 = cljs.core.seq.call(null,seq__13263_13463);
if(temp__5825__auto___13504){
var seq__13263_13505__$1 = temp__5825__auto___13504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13263_13505__$1)){
var c__5548__auto___13506 = cljs.core.chunk_first.call(null,seq__13263_13505__$1);
var G__13507 = cljs.core.chunk_rest.call(null,seq__13263_13505__$1);
var G__13508 = c__5548__auto___13506;
var G__13509 = cljs.core.count.call(null,c__5548__auto___13506);
var G__13510 = (0);
seq__13263_13463 = G__13507;
chunk__13264_13464 = G__13508;
count__13265_13465 = G__13509;
i__13266_13466 = G__13510;
continue;
} else {
var component__8451__auto___13511 = cljs.core.first.call(null,seq__13263_13505__$1);
speclj.components.install.call(null,component__8451__auto___13511,description__8450__auto____$1);


var G__13512 = cljs.core.next.call(null,seq__13263_13505__$1);
var G__13513 = null;
var G__13514 = (0);
var G__13515 = (0);
seq__13263_13463 = G__13512;
chunk__13264_13464 = G__13513;
count__13265_13465 = G__13514;
i__13266_13466 = G__13515;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13261_13461);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"game over",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__13279_13516 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13280_13517 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13280_13517);

try{var seq__13281_13518 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13279_13516,_STAR_parent_description_STAR__temp_val__13280_13517,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__13279_13516,_STAR_parent_description_STAR__temp_val__13280_13517,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
),speclj.components.new_characteristic.call(null,"displays winning bard",((function (_STAR_parent_description_STAR__orig_val__13279_13516,_STAR_parent_description_STAR__temp_val__13280_13517,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
var value__8954__auto___13522 = "#main-container";
var node__8955__auto___13523 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13522);
if(cljs.core.truth_(node__8955__auto___13523)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13522;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__8954__auto___13524 = ".cell";
var node__8955__auto___13525 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13524);
if(cljs.core.truth_(node__8955__auto___13525)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13524;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___13526 = "Game Over!";
var actual__8644__auto___13527 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__8644__auto___13527 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13526;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___13526 === 'string') && (typeof actual__8644__auto___13527 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___13527,expected__8643__auto___13526) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13526;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13527;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___13526)) && (typeof actual__8644__auto___13527 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___13526,actual__8644__auto___13527))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___13527;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___13526;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___13527)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___13527,expected__8643__auto___13526)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13526;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13527;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___13527)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___13526,p1__8642__8645__auto__);
}),actual__8644__auto___13527))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13526;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13527;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___13526;
var b__8572__auto__ = actual__8644__auto___13527;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto__ = "Winner is X";
var actual__8644__auto__ = c3kit.wire.spec_helper.text.call(null,"#winner");
if((actual__8644__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto__ === 'string') && (typeof actual__8644__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto__,expected__8643__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto__)) && (typeof actual__8644__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto__,actual__8644__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto__,expected__8643__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto__,p1__8642__8645__auto__);
}),actual__8644__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto__;
var b__8572__auto__ = actual__8644__auto__;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__13279_13516,_STAR_parent_description_STAR__temp_val__13280_13517,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false),speclj.components.new_characteristic.call(null,"displays tie game",((function (_STAR_parent_description_STAR__orig_val__13279_13516,_STAR_parent_description_STAR__temp_val__13280_13517,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null)], null)));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__8954__auto___13528 = "#main-container";
var node__8955__auto___13529 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13528);
if(cljs.core.truth_(node__8955__auto___13529)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13528;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__8954__auto___13530 = ".cell";
var node__8955__auto___13531 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___13530);
if(cljs.core.truth_(node__8955__auto___13531)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___13530;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___13532 = "Game Over!";
var actual__8644__auto___13533 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__8644__auto___13533 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13532;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___13532 === 'string') && (typeof actual__8644__auto___13533 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___13533,expected__8643__auto___13532) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13532;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___13532)) && (typeof actual__8644__auto___13533 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___13532,actual__8644__auto___13533))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___13533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___13532;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___13533)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___13533,expected__8643__auto___13532)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13532;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___13533)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___13532,p1__8642__8645__auto__);
}),actual__8644__auto___13533))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___13532;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___13533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___13532;
var b__8572__auto__ = actual__8644__auto___13533;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto__ = "Tie Game!";
var actual__8644__auto__ = c3kit.wire.spec_helper.text.call(null,"#winner");
if((actual__8644__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto__ === 'string') && (typeof actual__8644__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto__,expected__8643__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto__)) && (typeof actual__8644__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto__,actual__8644__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8644__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto__,expected__8643__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto__,p1__8642__8645__auto__);
}),actual__8644__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto__;
var b__8572__auto__ = actual__8644__auto__;
var type_a__8573__auto__ = (((a__8571__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8571__auto__)));
var type_b__8574__auto__ = (((b__8572__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8572__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8573__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8574__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__13279_13516,_STAR_parent_description_STAR__temp_val__13280_13517,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13080_13286,_STAR_parent_description_STAR__temp_val__13081_13287,description__8450__auto___13285))
,false)],null)));
var chunk__13282_13519 = null;
var count__13283_13520 = (0);
var i__13284_13521 = (0);
while(true){
if((i__13284_13521 < count__13283_13520)){
var component__8451__auto___13534 = cljs.core._nth.call(null,chunk__13282_13519,i__13284_13521);
speclj.components.install.call(null,component__8451__auto___13534,description__8450__auto____$1);


var G__13535 = seq__13281_13518;
var G__13536 = chunk__13282_13519;
var G__13537 = count__13283_13520;
var G__13538 = (i__13284_13521 + (1));
seq__13281_13518 = G__13535;
chunk__13282_13519 = G__13536;
count__13283_13520 = G__13537;
i__13284_13521 = G__13538;
continue;
} else {
var temp__5825__auto___13539 = cljs.core.seq.call(null,seq__13281_13518);
if(temp__5825__auto___13539){
var seq__13281_13540__$1 = temp__5825__auto___13539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13281_13540__$1)){
var c__5548__auto___13541 = cljs.core.chunk_first.call(null,seq__13281_13540__$1);
var G__13542 = cljs.core.chunk_rest.call(null,seq__13281_13540__$1);
var G__13543 = c__5548__auto___13541;
var G__13544 = cljs.core.count.call(null,c__5548__auto___13541);
var G__13545 = (0);
seq__13281_13518 = G__13542;
chunk__13282_13519 = G__13543;
count__13283_13520 = G__13544;
i__13284_13521 = G__13545;
continue;
} else {
var component__8451__auto___13546 = cljs.core.first.call(null,seq__13281_13540__$1);
speclj.components.install.call(null,component__8451__auto___13546,description__8450__auto____$1);


var G__13547 = cljs.core.next.call(null,seq__13281_13540__$1);
var G__13548 = null;
var G__13549 = (0);
var G__13550 = (0);
seq__13281_13518 = G__13547;
chunk__13282_13519 = G__13548;
count__13283_13520 = G__13549;
i__13284_13521 = G__13550;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13279_13516);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})()],null)));
var chunk__13086_13289 = null;
var count__13087_13290 = (0);
var i__13088_13291 = (0);
while(true){
if((i__13088_13291 < count__13087_13290)){
var component__8451__auto___13551 = cljs.core._nth.call(null,chunk__13086_13289,i__13088_13291);
speclj.components.install.call(null,component__8451__auto___13551,description__8450__auto___13285);


var G__13552 = seq__13084_13288;
var G__13553 = chunk__13086_13289;
var G__13554 = count__13087_13290;
var G__13555 = (i__13088_13291 + (1));
seq__13084_13288 = G__13552;
chunk__13086_13289 = G__13553;
count__13087_13290 = G__13554;
i__13088_13291 = G__13555;
continue;
} else {
var temp__5825__auto___13556 = cljs.core.seq.call(null,seq__13084_13288);
if(temp__5825__auto___13556){
var seq__13084_13557__$1 = temp__5825__auto___13556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13084_13557__$1)){
var c__5548__auto___13558 = cljs.core.chunk_first.call(null,seq__13084_13557__$1);
var G__13559 = cljs.core.chunk_rest.call(null,seq__13084_13557__$1);
var G__13560 = c__5548__auto___13558;
var G__13561 = cljs.core.count.call(null,c__5548__auto___13558);
var G__13562 = (0);
seq__13084_13288 = G__13559;
chunk__13086_13289 = G__13560;
count__13087_13290 = G__13561;
i__13088_13291 = G__13562;
continue;
} else {
var component__8451__auto___13563 = cljs.core.first.call(null,seq__13084_13557__$1);
speclj.components.install.call(null,component__8451__auto___13563,description__8450__auto___13285);


var G__13564 = cljs.core.next.call(null,seq__13084_13557__$1);
var G__13565 = null;
var G__13566 = (0);
var G__13567 = (0);
seq__13084_13288 = G__13564;
chunk__13086_13289 = G__13565;
count__13087_13290 = G__13566;
i__13088_13291 = G__13567;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13080_13286);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___13285);
}


//# sourceMappingURL=html_spec.js.map
