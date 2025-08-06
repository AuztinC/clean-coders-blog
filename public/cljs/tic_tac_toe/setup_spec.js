// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
var description__25530__auto___26465 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__26086_26467 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26087_26468 = description__25530__auto___26465;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26087_26468);

try{var seq__26089_26469 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465){
return (function (it__25904__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__26283 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__26284 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__26284);

try{return it__25904__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__26283);
}});})(_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});})(_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465))
),(function (){var description__25530__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__26285_26473 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26286_26474 = description__25530__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26286_26474);

try{var seq__26287_26475 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__26285_26473,_STAR_parent_description_STAR__temp_val__26286_26474,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___26479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__25673__auto___26480 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___26479,actual__25673__auto___26480)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___26479;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___26480;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__25673__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto__,actual__25673__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__26285_26473,_STAR_parent_description_STAR__temp_val__26286_26474,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__26285_26473,_STAR_parent_description_STAR__temp_val__26286_26474,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setup.select_difficulty_BANG_.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___26483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__25673__auto___26484 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__25672__auto___26483,actual__25673__auto___26484)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___26483;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___26484;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___26485 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__25673__auto___26486 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__25672__auto___26485,actual__25673__auto___26486)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___26485;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___26486;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___26487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__25673__auto___26488 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__25672__auto___26487,actual__25673__auto___26488)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___26487;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___26488;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__25673__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__25672__auto__,actual__25673__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__26285_26473,_STAR_parent_description_STAR__temp_val__26286_26474,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465))
,false)],null)));
var chunk__26288_26476 = null;
var count__26289_26477 = (0);
var i__26290_26478 = (0);
while(true){
if((i__26290_26478 < count__26289_26477)){
var component__25531__auto___26495 = cljs.core._nth.call(null,chunk__26288_26476,i__26290_26478);
speclj.components.install.call(null,component__25531__auto___26495,description__25530__auto____$1);


var G__26496 = seq__26287_26475;
var G__26497 = chunk__26288_26476;
var G__26498 = count__26289_26477;
var G__26499 = (i__26290_26478 + (1));
seq__26287_26475 = G__26496;
chunk__26288_26476 = G__26497;
count__26289_26477 = G__26498;
i__26290_26478 = G__26499;
continue;
} else {
var temp__5825__auto___26500 = cljs.core.seq.call(null,seq__26287_26475);
if(temp__5825__auto___26500){
var seq__26287_26501__$1 = temp__5825__auto___26500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26287_26501__$1)){
var c__5548__auto___26502 = cljs.core.chunk_first.call(null,seq__26287_26501__$1);
var G__26503 = cljs.core.chunk_rest.call(null,seq__26287_26501__$1);
var G__26504 = c__5548__auto___26502;
var G__26505 = cljs.core.count.call(null,c__5548__auto___26502);
var G__26506 = (0);
seq__26287_26475 = G__26503;
chunk__26288_26476 = G__26504;
count__26289_26477 = G__26505;
i__26290_26478 = G__26506;
continue;
} else {
var component__25531__auto___26507 = cljs.core.first.call(null,seq__26287_26501__$1);
speclj.components.install.call(null,component__25531__auto___26507,description__25530__auto____$1);


var G__26508 = cljs.core.next.call(null,seq__26287_26501__$1);
var G__26509 = null;
var G__26510 = (0);
var G__26511 = (0);
seq__26287_26475 = G__26508;
chunk__26288_26476 = G__26509;
count__26289_26477 = G__26510;
i__26290_26478 = G__26511;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26285_26473);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$1);
}

return description__25530__auto____$1;
})(),(function (){var description__25530__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__26318_26512 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__26319_26513 = description__25530__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__26319_26513);

try{var seq__26320_26514 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"does not advance if it's not the AI's turn",((function (_STAR_parent_description_STAR__orig_val__26318_26512,_STAR_parent_description_STAR__temp_val__26319_26513,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465){
return (function (){
var next_state_orig_val__26404 = tic_tac_toe.game.next_state;
var next_state_temp_val__26405 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__26405);

try{var initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,initial_state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,initial_state,initial_state);

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___26518 = initial_state;
var actual__25673__auto___26519 = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__25672__auto___26518,actual__25673__auto___26519)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___26518;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___26519;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__25939__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
var options__25940__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__25941__auto__ = speclj.stub.invocations_of.call(null,name__25939__auto__);
var times__25942__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__25940__auto__);
var times_QMARK___25943__auto__ = typeof times__25942__auto__ === 'number';
var check_params_QMARK___25944__auto__ = cljs.core.contains_QMARK_.call(null,options__25940__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__25945__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__25940__auto__);
var with__25945__auto____$1 = (((with__25945__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__25945__auto__);
var add_s__25946__auto__ = (function (p1__25936__25947__auto__){
if(cljs.core._EQ_.call(null,(1),p1__25936__25947__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___25943__auto__) && (check_params_QMARK___25944__auto__))){
var matching_invocations__25948__auto__ = cljs.core.filter.call(null,(function (p1__25937__25949__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__25945__auto____$1,p1__25937__25949__auto__);
}),invocations__25941__auto__);
var matching_count__25950__auto__ = cljs.core.count.call(null,matching_invocations__25948__auto__);
if(cljs.core._EQ_.call(null,times__25942__auto__,matching_count__25950__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25939__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__25942__auto__)," time",add_s__25946__auto__.call(null,matching_count__25950__auto__)," with ",cljs.core.pr_str.call(null,with__25945__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__25950__auto__)," invocation",add_s__25946__auto__.call(null,matching_count__25950__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___25943__auto__){
if(cljs.core._EQ_.call(null,times__25942__auto__,cljs.core.count.call(null,invocations__25941__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25939__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__25942__auto__)," time",add_s__25946__auto__.call(null,times__25942__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__25942__auto__)," invocation",add_s__25946__auto__.call(null,times__25942__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___25944__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25938__25951__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__25945__auto____$1,p1__25938__25951__auto__);
}),invocations__25941__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25939__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__25945__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__25941__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__25941__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25939__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__25941__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__26404);
}});})(_STAR_parent_description_STAR__orig_val__26318_26512,_STAR_parent_description_STAR__temp_val__26319_26513,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__26318_26512,_STAR_parent_description_STAR__temp_val__26319_26513,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465){
return (function (){
var next_state_orig_val__26458 = tic_tac_toe.game.next_state;
var sleep_orig_val__26459 = tic_tac_toe.setup.sleep;
var next_state_temp_val__26460 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
var sleep_temp_val__26461 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__26460);

(tic_tac_toe.setup.sleep = sleep_temp_val__26461);

try{var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,state,state);

speclj.components.inc_assertions_BANG_.call(null);

var name__25918__auto__ = new cljs.core.Keyword(null,"sleep","sleep",-1932665860);
var options__25919__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__25920__auto__ = speclj.stub.invocations_of.call(null,name__25918__auto__);
var times__25921__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__25919__auto__);
var times_QMARK___25922__auto__ = typeof times__25921__auto__ === 'number';
var check_params_QMARK___25923__auto__ = cljs.core.contains_QMARK_.call(null,options__25919__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__25924__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__25919__auto__);
var with__25924__auto____$1 = (((with__25924__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__25924__auto__);
var invocations_str__25925__auto__ = (function (p1__25915__25926__auto__){
if(cljs.core._EQ_.call(null,(1),p1__25915__25926__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___25922__auto__) && (check_params_QMARK___25923__auto__))){
var matching_invocations__25927__auto__ = cljs.core.filter.call(null,(function (p1__25916__25928__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__25924__auto____$1,p1__25916__25928__auto__);
}),invocations__25920__auto__);
var matching_count__25929__auto__ = cljs.core.count.call(null,matching_invocations__25927__auto__);
if(cljs.core._EQ_.call(null,times__25921__auto__,matching_count__25929__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__25921__auto__)," ",invocations_str__25925__auto__.call(null,times__25921__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25918__auto__)," with ",cljs.core.pr_str.call(null,with__25924__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__25929__auto__)," ",invocations_str__25925__auto__.call(null,matching_count__25929__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___25923__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25917__25930__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__25924__auto____$1,p1__25917__25930__auto__);
}),invocations__25920__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25918__auto__)," with ",cljs.core.pr_str.call(null,with__25924__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__25920__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___25922__auto__){
if(cljs.core._EQ_.call(null,times__25921__auto__,cljs.core.count.call(null,invocations__25920__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__25921__auto__)," ",invocations_str__25925__auto__.call(null,times__25921__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25918__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__25920__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__25920__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__25918__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__25920__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setup.sleep = sleep_orig_val__26459);

(tic_tac_toe.game.next_state = next_state_orig_val__26458);
}});})(_STAR_parent_description_STAR__orig_val__26318_26512,_STAR_parent_description_STAR__temp_val__26319_26513,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__26086_26467,_STAR_parent_description_STAR__temp_val__26087_26468,description__25530__auto___26465))
,false)],null)));
var chunk__26321_26515 = null;
var count__26322_26516 = (0);
var i__26323_26517 = (0);
while(true){
if((i__26323_26517 < count__26322_26516)){
var component__25531__auto___26534 = cljs.core._nth.call(null,chunk__26321_26515,i__26323_26517);
speclj.components.install.call(null,component__25531__auto___26534,description__25530__auto____$1);


var G__26535 = seq__26320_26514;
var G__26536 = chunk__26321_26515;
var G__26537 = count__26322_26516;
var G__26538 = (i__26323_26517 + (1));
seq__26320_26514 = G__26535;
chunk__26321_26515 = G__26536;
count__26322_26516 = G__26537;
i__26323_26517 = G__26538;
continue;
} else {
var temp__5825__auto___26539 = cljs.core.seq.call(null,seq__26320_26514);
if(temp__5825__auto___26539){
var seq__26320_26540__$1 = temp__5825__auto___26539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26320_26540__$1)){
var c__5548__auto___26541 = cljs.core.chunk_first.call(null,seq__26320_26540__$1);
var G__26542 = cljs.core.chunk_rest.call(null,seq__26320_26540__$1);
var G__26543 = c__5548__auto___26541;
var G__26544 = cljs.core.count.call(null,c__5548__auto___26541);
var G__26545 = (0);
seq__26320_26514 = G__26542;
chunk__26321_26515 = G__26543;
count__26322_26516 = G__26544;
i__26323_26517 = G__26545;
continue;
} else {
var component__25531__auto___26546 = cljs.core.first.call(null,seq__26320_26540__$1);
speclj.components.install.call(null,component__25531__auto___26546,description__25530__auto____$1);


var G__26547 = cljs.core.next.call(null,seq__26320_26540__$1);
var G__26548 = null;
var G__26549 = (0);
var G__26550 = (0);
seq__26320_26514 = G__26547;
chunk__26321_26515 = G__26548;
count__26322_26516 = G__26549;
i__26323_26517 = G__26550;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26318_26512);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$1);
}

return description__25530__auto____$1;
})()],null)));
var chunk__26090_26470 = null;
var count__26091_26471 = (0);
var i__26092_26472 = (0);
while(true){
if((i__26092_26472 < count__26091_26471)){
var component__25531__auto___26551 = cljs.core._nth.call(null,chunk__26090_26470,i__26092_26472);
speclj.components.install.call(null,component__25531__auto___26551,description__25530__auto___26465);


var G__26552 = seq__26089_26469;
var G__26553 = chunk__26090_26470;
var G__26554 = count__26091_26471;
var G__26555 = (i__26092_26472 + (1));
seq__26089_26469 = G__26552;
chunk__26090_26470 = G__26553;
count__26091_26471 = G__26554;
i__26092_26472 = G__26555;
continue;
} else {
var temp__5825__auto___26556 = cljs.core.seq.call(null,seq__26089_26469);
if(temp__5825__auto___26556){
var seq__26089_26557__$1 = temp__5825__auto___26556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26089_26557__$1)){
var c__5548__auto___26558 = cljs.core.chunk_first.call(null,seq__26089_26557__$1);
var G__26559 = cljs.core.chunk_rest.call(null,seq__26089_26557__$1);
var G__26560 = c__5548__auto___26558;
var G__26561 = cljs.core.count.call(null,c__5548__auto___26558);
var G__26562 = (0);
seq__26089_26469 = G__26559;
chunk__26090_26470 = G__26560;
count__26091_26471 = G__26561;
i__26092_26472 = G__26562;
continue;
} else {
var component__25531__auto___26563 = cljs.core.first.call(null,seq__26089_26557__$1);
speclj.components.install.call(null,component__25531__auto___26563,description__25530__auto___26465);


var G__26564 = cljs.core.next.call(null,seq__26089_26557__$1);
var G__26565 = null;
var G__26566 = (0);
var G__26567 = (0);
seq__26089_26469 = G__26564;
chunk__26090_26470 = G__26565;
count__26091_26471 = G__26566;
i__26092_26472 = G__26567;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__26086_26467);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto___26465);
}


//# sourceMappingURL=setup_spec.js.map
