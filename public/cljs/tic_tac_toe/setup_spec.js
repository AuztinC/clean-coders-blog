// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.setupc');
var description__8439__auto___9546 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9432_9547 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9433_9548 = description__8439__auto___9546;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9433_9548);

try{var seq__9434_9549 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (it__8813__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9492 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9493 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9493);

try{return it__8813__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9492);
}});})(_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});})(_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
),(function (){var description__8439__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9494_9553 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9495_9554 = description__8439__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9495_9554);

try{var seq__9496_9555 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__9494_9553,_STAR_parent_description_STAR__temp_val__9495_9554,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
var out = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8582__auto___9560 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8581__auto___9559,actual__8582__auto___9560)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9559;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9560;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8582__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8581__auto__,actual__8582__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9494_9553,_STAR_parent_description_STAR__temp_val__9495_9554,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__9494_9553,_STAR_parent_description_STAR__temp_val__9495_9554,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8582__auto___9562 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8581__auto___9561,actual__8582__auto___9562)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9561;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9562;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9563 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8582__auto___9564 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8581__auto___9563,actual__8582__auto___9564)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9563;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9564;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__8582__auto___9566 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8581__auto___9565,actual__8582__auto___9566)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9565;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9566;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8582__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8581__auto__,actual__8582__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__9494_9553,_STAR_parent_description_STAR__temp_val__9495_9554,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
,false)],null)));
var chunk__9497_9556 = null;
var count__9498_9557 = (0);
var i__9499_9558 = (0);
while(true){
if((i__9499_9558 < count__9498_9557)){
var component__8440__auto___9567 = cljs.core._nth.call(null,chunk__9497_9556,i__9499_9558);
speclj.components.install.call(null,component__8440__auto___9567,description__8439__auto____$1);


var G__9568 = seq__9496_9555;
var G__9569 = chunk__9497_9556;
var G__9570 = count__9498_9557;
var G__9571 = (i__9499_9558 + (1));
seq__9496_9555 = G__9568;
chunk__9497_9556 = G__9569;
count__9498_9557 = G__9570;
i__9499_9558 = G__9571;
continue;
} else {
var temp__5825__auto___9572 = cljs.core.seq.call(null,seq__9496_9555);
if(temp__5825__auto___9572){
var seq__9496_9573__$1 = temp__5825__auto___9572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9496_9573__$1)){
var c__5548__auto___9574 = cljs.core.chunk_first.call(null,seq__9496_9573__$1);
var G__9575 = cljs.core.chunk_rest.call(null,seq__9496_9573__$1);
var G__9576 = c__5548__auto___9574;
var G__9577 = cljs.core.count.call(null,c__5548__auto___9574);
var G__9578 = (0);
seq__9496_9555 = G__9575;
chunk__9497_9556 = G__9576;
count__9498_9557 = G__9577;
i__9499_9558 = G__9578;
continue;
} else {
var component__8440__auto___9579 = cljs.core.first.call(null,seq__9496_9573__$1);
speclj.components.install.call(null,component__8440__auto___9579,description__8439__auto____$1);


var G__9580 = cljs.core.next.call(null,seq__9496_9573__$1);
var G__9581 = null;
var G__9582 = (0);
var G__9583 = (0);
seq__9496_9555 = G__9580;
chunk__9497_9556 = G__9581;
count__9498_9557 = G__9582;
i__9499_9558 = G__9583;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9494_9553);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto____$1);
}

return description__8439__auto____$1;
})(),(function (){var description__8439__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9500_9584 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9501_9585 = description__8439__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9501_9585);

try{var seq__9502_9586 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"does not advance if it's not the AI's turn",((function (_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
var next_state_orig_val__9526 = tic_tac_toe.game.next_state;
var next_state_temp_val__9527 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__9527);

try{var initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,initial_state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,initial_state,initial_state);

speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto___9590 = initial_state;
var actual__8582__auto___9591 = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__8581__auto___9590,actual__8582__auto___9591)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto___9590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto___9591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__8848__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
var options__8849__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8850__auto__ = speclj.stub.invocations_of.call(null,name__8848__auto__);
var times__8851__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8849__auto__);
var times_QMARK___8852__auto__ = typeof times__8851__auto__ === 'number';
var check_params_QMARK___8853__auto__ = cljs.core.contains_QMARK_.call(null,options__8849__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8854__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8849__auto__);
var with__8854__auto____$1 = (((with__8854__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8854__auto__);
var add_s__8855__auto__ = (function (p1__8845__8856__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8845__8856__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___8852__auto__) && (check_params_QMARK___8853__auto__))){
var matching_invocations__8857__auto__ = cljs.core.filter.call(null,(function (p1__8846__8858__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8854__auto____$1,p1__8846__8858__auto__);
}),invocations__8850__auto__);
var matching_count__8859__auto__ = cljs.core.count.call(null,matching_invocations__8857__auto__);
if(cljs.core._EQ_.call(null,times__8851__auto__,matching_count__8859__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8851__auto__)," time",add_s__8855__auto__.call(null,matching_count__8859__auto__)," with ",cljs.core.pr_str.call(null,with__8854__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8859__auto__)," invocation",add_s__8855__auto__.call(null,matching_count__8859__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___8852__auto__){
if(cljs.core._EQ_.call(null,times__8851__auto__,cljs.core.count.call(null,invocations__8850__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8851__auto__)," time",add_s__8855__auto__.call(null,times__8851__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8851__auto__)," invocation",add_s__8855__auto__.call(null,times__8851__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___8853__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8847__8860__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8854__auto____$1,p1__8847__8860__auto__);
}),invocations__8850__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__8854__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8850__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__8850__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8848__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8850__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9526);
}});})(_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
var next_state_orig_val__9528 = tic_tac_toe.game.next_state;
var sleep_orig_val__9529 = tic_tac_toe.setup.sleep;
var next_state_temp_val__9530 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
var sleep_temp_val__9531 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__9530);

(tic_tac_toe.setup.sleep = sleep_temp_val__9531);

try{var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,state);

return tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,state,state);
}finally {(tic_tac_toe.setup.sleep = sleep_orig_val__9529);

(tic_tac_toe.game.next_state = next_state_orig_val__9528);
}});})(_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
,false),(function (){var description__8439__auto____$2 = speclj.components.new_description.call(null,"game-over?",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9532_9592 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9533_9593 = description__8439__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9533_9593);

try{var seq__9534_9594 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__9532_9592,_STAR_parent_description_STAR__temp_val__9533_9593,description__8439__auto____$2,_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833)], null));
});})(_STAR_parent_description_STAR__orig_val__9532_9592,_STAR_parent_description_STAR__temp_val__9533_9593,description__8439__auto____$2,_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
),speclj.components.new_characteristic.call(null,"resets state with game-over screen when winner? is true",((function (_STAR_parent_description_STAR__orig_val__9532_9592,_STAR_parent_description_STAR__temp_val__9533_9593,description__8439__auto____$2,_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
var next_state_orig_val__9542 = tic_tac_toe.game.next_state;
var next_state_temp_val__9543 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),"updated",new cljs.core.Keyword(null,"something","something",295416317),"else"], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__9543);

try{tic_tac_toe.setup.game_over_QMARK_.call(null,true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),"updated",new cljs.core.Keyword(null,"something","something",295416317),"else",new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null);
var actual__8582__auto__ = state;
if(cljs.core._EQ_.call(null,expected__8581__auto__,actual__8582__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9542);
}});})(_STAR_parent_description_STAR__orig_val__9532_9592,_STAR_parent_description_STAR__temp_val__9533_9593,description__8439__auto____$2,_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
,false),speclj.components.new_characteristic.call(null,"resets state normally when winner? is false",((function (_STAR_parent_description_STAR__orig_val__9532_9592,_STAR_parent_description_STAR__temp_val__9533_9593,description__8439__auto____$2,_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546){
return (function (){
var next_state_orig_val__9544 = tic_tac_toe.game.next_state;
var next_state_temp_val__9545 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),"next",new cljs.core.Keyword(null,"something","something",295416317),"else"], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__9545);

try{tic_tac_toe.setup.game_over_QMARK_.call(null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8581__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),"next",new cljs.core.Keyword(null,"something","something",295416317),"else"], null);
var actual__8582__auto__ = state;
if(cljs.core._EQ_.call(null,expected__8581__auto__,actual__8582__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8581__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8582__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8549__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8549__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9544);
}});})(_STAR_parent_description_STAR__orig_val__9532_9592,_STAR_parent_description_STAR__temp_val__9533_9593,description__8439__auto____$2,_STAR_parent_description_STAR__orig_val__9500_9584,_STAR_parent_description_STAR__temp_val__9501_9585,description__8439__auto____$1,_STAR_parent_description_STAR__orig_val__9432_9547,_STAR_parent_description_STAR__temp_val__9433_9548,description__8439__auto___9546))
,false)],null)));
var chunk__9535_9595 = null;
var count__9536_9596 = (0);
var i__9537_9597 = (0);
while(true){
if((i__9537_9597 < count__9536_9596)){
var component__8440__auto___9598 = cljs.core._nth.call(null,chunk__9535_9595,i__9537_9597);
speclj.components.install.call(null,component__8440__auto___9598,description__8439__auto____$2);


var G__9599 = seq__9534_9594;
var G__9600 = chunk__9535_9595;
var G__9601 = count__9536_9596;
var G__9602 = (i__9537_9597 + (1));
seq__9534_9594 = G__9599;
chunk__9535_9595 = G__9600;
count__9536_9596 = G__9601;
i__9537_9597 = G__9602;
continue;
} else {
var temp__5825__auto___9603 = cljs.core.seq.call(null,seq__9534_9594);
if(temp__5825__auto___9603){
var seq__9534_9604__$1 = temp__5825__auto___9603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9534_9604__$1)){
var c__5548__auto___9605 = cljs.core.chunk_first.call(null,seq__9534_9604__$1);
var G__9606 = cljs.core.chunk_rest.call(null,seq__9534_9604__$1);
var G__9607 = c__5548__auto___9605;
var G__9608 = cljs.core.count.call(null,c__5548__auto___9605);
var G__9609 = (0);
seq__9534_9594 = G__9606;
chunk__9535_9595 = G__9607;
count__9536_9596 = G__9608;
i__9537_9597 = G__9609;
continue;
} else {
var component__8440__auto___9610 = cljs.core.first.call(null,seq__9534_9604__$1);
speclj.components.install.call(null,component__8440__auto___9610,description__8439__auto____$2);


var G__9611 = cljs.core.next.call(null,seq__9534_9604__$1);
var G__9612 = null;
var G__9613 = (0);
var G__9614 = (0);
seq__9534_9594 = G__9611;
chunk__9535_9595 = G__9612;
count__9536_9596 = G__9613;
i__9537_9597 = G__9614;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9532_9592);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto____$2);
}

return description__8439__auto____$2;
})()],null)));
var chunk__9503_9587 = null;
var count__9504_9588 = (0);
var i__9505_9589 = (0);
while(true){
if((i__9505_9589 < count__9504_9588)){
var component__8440__auto___9615 = cljs.core._nth.call(null,chunk__9503_9587,i__9505_9589);
speclj.components.install.call(null,component__8440__auto___9615,description__8439__auto____$1);


var G__9616 = seq__9502_9586;
var G__9617 = chunk__9503_9587;
var G__9618 = count__9504_9588;
var G__9619 = (i__9505_9589 + (1));
seq__9502_9586 = G__9616;
chunk__9503_9587 = G__9617;
count__9504_9588 = G__9618;
i__9505_9589 = G__9619;
continue;
} else {
var temp__5825__auto___9620 = cljs.core.seq.call(null,seq__9502_9586);
if(temp__5825__auto___9620){
var seq__9502_9621__$1 = temp__5825__auto___9620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9502_9621__$1)){
var c__5548__auto___9622 = cljs.core.chunk_first.call(null,seq__9502_9621__$1);
var G__9623 = cljs.core.chunk_rest.call(null,seq__9502_9621__$1);
var G__9624 = c__5548__auto___9622;
var G__9625 = cljs.core.count.call(null,c__5548__auto___9622);
var G__9626 = (0);
seq__9502_9586 = G__9623;
chunk__9503_9587 = G__9624;
count__9504_9588 = G__9625;
i__9505_9589 = G__9626;
continue;
} else {
var component__8440__auto___9627 = cljs.core.first.call(null,seq__9502_9621__$1);
speclj.components.install.call(null,component__8440__auto___9627,description__8439__auto____$1);


var G__9628 = cljs.core.next.call(null,seq__9502_9621__$1);
var G__9629 = null;
var G__9630 = (0);
var G__9631 = (0);
seq__9502_9586 = G__9628;
chunk__9503_9587 = G__9629;
count__9504_9588 = G__9630;
i__9505_9589 = G__9631;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9500_9584);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto____$1);
}

return description__8439__auto____$1;
})()],null)));
var chunk__9435_9550 = null;
var count__9436_9551 = (0);
var i__9437_9552 = (0);
while(true){
if((i__9437_9552 < count__9436_9551)){
var component__8440__auto___9632 = cljs.core._nth.call(null,chunk__9435_9550,i__9437_9552);
speclj.components.install.call(null,component__8440__auto___9632,description__8439__auto___9546);


var G__9633 = seq__9434_9549;
var G__9634 = chunk__9435_9550;
var G__9635 = count__9436_9551;
var G__9636 = (i__9437_9552 + (1));
seq__9434_9549 = G__9633;
chunk__9435_9550 = G__9634;
count__9436_9551 = G__9635;
i__9437_9552 = G__9636;
continue;
} else {
var temp__5825__auto___9637 = cljs.core.seq.call(null,seq__9434_9549);
if(temp__5825__auto___9637){
var seq__9434_9638__$1 = temp__5825__auto___9637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9434_9638__$1)){
var c__5548__auto___9639 = cljs.core.chunk_first.call(null,seq__9434_9638__$1);
var G__9640 = cljs.core.chunk_rest.call(null,seq__9434_9638__$1);
var G__9641 = c__5548__auto___9639;
var G__9642 = cljs.core.count.call(null,c__5548__auto___9639);
var G__9643 = (0);
seq__9434_9549 = G__9640;
chunk__9435_9550 = G__9641;
count__9436_9551 = G__9642;
i__9437_9552 = G__9643;
continue;
} else {
var component__8440__auto___9644 = cljs.core.first.call(null,seq__9434_9638__$1);
speclj.components.install.call(null,component__8440__auto___9644,description__8439__auto___9546);


var G__9645 = cljs.core.next.call(null,seq__9434_9638__$1);
var G__9646 = null;
var G__9647 = (0);
var G__9648 = (0);
seq__9434_9549 = G__9645;
chunk__9435_9550 = G__9646;
count__9436_9551 = G__9647;
i__9437_9552 = G__9648;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9432_9547);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8439__auto___9546);
}


//# sourceMappingURL=setup_spec.js.map
