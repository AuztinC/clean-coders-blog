// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.setupc');
var description__8450__auto___9156 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9005_9157 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9006_9158 = description__8450__auto___9156;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9006_9158);

try{var seq__9007_9159 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__9102 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__9103 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__9103);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__9102);
}});})(_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});})(_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9104_9163 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9105_9164 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9105_9164);

try{var seq__9106_9165 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__9104_9163,_STAR_parent_description_STAR__temp_val__9105_9164,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
var out = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___9169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___9170 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___9169,actual__8593__auto___9170)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___9169;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___9170;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8593__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__9104_9163,_STAR_parent_description_STAR__temp_val__9105_9164,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__9104_9163,_STAR_parent_description_STAR__temp_val__9105_9164,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___9171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___9172 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8592__auto___9171,actual__8593__auto___9172)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___9171;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___9172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___9173 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___9174 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8592__auto___9173,actual__8593__auto___9174)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___9173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___9174;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___9175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__8593__auto___9176 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8592__auto___9175,actual__8593__auto___9176)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___9175;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___9176;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8593__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out2);
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
});})(_STAR_parent_description_STAR__orig_val__9104_9163,_STAR_parent_description_STAR__temp_val__9105_9164,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
,false)],null)));
var chunk__9107_9166 = null;
var count__9108_9167 = (0);
var i__9109_9168 = (0);
while(true){
if((i__9109_9168 < count__9108_9167)){
var component__8451__auto___9177 = cljs.core._nth.call(null,chunk__9107_9166,i__9109_9168);
speclj.components.install.call(null,component__8451__auto___9177,description__8450__auto____$1);


var G__9178 = seq__9106_9165;
var G__9179 = chunk__9107_9166;
var G__9180 = count__9108_9167;
var G__9181 = (i__9109_9168 + (1));
seq__9106_9165 = G__9178;
chunk__9107_9166 = G__9179;
count__9108_9167 = G__9180;
i__9109_9168 = G__9181;
continue;
} else {
var temp__5825__auto___9182 = cljs.core.seq.call(null,seq__9106_9165);
if(temp__5825__auto___9182){
var seq__9106_9183__$1 = temp__5825__auto___9182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9106_9183__$1)){
var c__5548__auto___9184 = cljs.core.chunk_first.call(null,seq__9106_9183__$1);
var G__9185 = cljs.core.chunk_rest.call(null,seq__9106_9183__$1);
var G__9186 = c__5548__auto___9184;
var G__9187 = cljs.core.count.call(null,c__5548__auto___9184);
var G__9188 = (0);
seq__9106_9165 = G__9185;
chunk__9107_9166 = G__9186;
count__9108_9167 = G__9187;
i__9109_9168 = G__9188;
continue;
} else {
var component__8451__auto___9189 = cljs.core.first.call(null,seq__9106_9183__$1);
speclj.components.install.call(null,component__8451__auto___9189,description__8450__auto____$1);


var G__9190 = cljs.core.next.call(null,seq__9106_9183__$1);
var G__9191 = null;
var G__9192 = (0);
var G__9193 = (0);
seq__9106_9165 = G__9190;
chunk__9107_9166 = G__9191;
count__9108_9167 = G__9192;
i__9109_9168 = G__9193;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9104_9163);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9110_9194 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9111_9195 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9111_9195);

try{var seq__9112_9196 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"does not advance if it's not the AI's turn",((function (_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
var next_state_orig_val__9136 = tic_tac_toe.game.next_state;
var next_state_temp_val__9137 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__9137);

try{var initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,initial_state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,initial_state,initial_state);

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___9200 = initial_state;
var actual__8593__auto___9201 = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__8592__auto___9200,actual__8593__auto___9201)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___9200;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___9201;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var name__8859__auto__ = new cljs.core.Keyword(null,"next-state","next-state",-1428728252);
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
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9136);
}});})(_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
var next_state_orig_val__9138 = tic_tac_toe.game.next_state;
var sleep_orig_val__9139 = tic_tac_toe.setup.sleep;
var next_state_temp_val__9140 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
var sleep_temp_val__9141 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__9140);

(tic_tac_toe.setup.sleep = sleep_temp_val__9141);

try{var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,state);

return tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,state,state);
}finally {(tic_tac_toe.setup.sleep = sleep_orig_val__9139);

(tic_tac_toe.game.next_state = next_state_orig_val__9138);
}});})(_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
,false),(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"game-over?",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__9142_9202 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9143_9203 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9143_9203);

try{var seq__9144_9204 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__9142_9202,_STAR_parent_description_STAR__temp_val__9143_9203,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833)], null));
});})(_STAR_parent_description_STAR__orig_val__9142_9202,_STAR_parent_description_STAR__temp_val__9143_9203,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
),speclj.components.new_characteristic.call(null,"resets state with game-over screen when winner? is true",((function (_STAR_parent_description_STAR__orig_val__9142_9202,_STAR_parent_description_STAR__temp_val__9143_9203,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
var next_state_orig_val__9152 = tic_tac_toe.game.next_state;
var next_state_temp_val__9153 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),"updated",new cljs.core.Keyword(null,"something","something",295416317),"else"], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__9153);

try{tic_tac_toe.setup.game_over_QMARK_.call(null,true,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),"updated",new cljs.core.Keyword(null,"something","something",295416317),"else",new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null);
var actual__8593__auto__ = state;
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
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9152);
}});})(_STAR_parent_description_STAR__orig_val__9142_9202,_STAR_parent_description_STAR__temp_val__9143_9203,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
,false),speclj.components.new_characteristic.call(null,"resets state normally when winner? is false",((function (_STAR_parent_description_STAR__orig_val__9142_9202,_STAR_parent_description_STAR__temp_val__9143_9203,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156){
return (function (){
var next_state_orig_val__9154 = tic_tac_toe.game.next_state;
var next_state_temp_val__9155 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),"next",new cljs.core.Keyword(null,"something","something",295416317),"else"], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__9155);

try{tic_tac_toe.setup.game_over_QMARK_.call(null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),"next",new cljs.core.Keyword(null,"something","something",295416317),"else"], null);
var actual__8593__auto__ = state;
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
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__9154);
}});})(_STAR_parent_description_STAR__orig_val__9142_9202,_STAR_parent_description_STAR__temp_val__9143_9203,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__9110_9194,_STAR_parent_description_STAR__temp_val__9111_9195,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__9005_9157,_STAR_parent_description_STAR__temp_val__9006_9158,description__8450__auto___9156))
,false)],null)));
var chunk__9145_9205 = null;
var count__9146_9206 = (0);
var i__9147_9207 = (0);
while(true){
if((i__9147_9207 < count__9146_9206)){
var component__8451__auto___9208 = cljs.core._nth.call(null,chunk__9145_9205,i__9147_9207);
speclj.components.install.call(null,component__8451__auto___9208,description__8450__auto____$2);


var G__9209 = seq__9144_9204;
var G__9210 = chunk__9145_9205;
var G__9211 = count__9146_9206;
var G__9212 = (i__9147_9207 + (1));
seq__9144_9204 = G__9209;
chunk__9145_9205 = G__9210;
count__9146_9206 = G__9211;
i__9147_9207 = G__9212;
continue;
} else {
var temp__5825__auto___9213 = cljs.core.seq.call(null,seq__9144_9204);
if(temp__5825__auto___9213){
var seq__9144_9214__$1 = temp__5825__auto___9213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9144_9214__$1)){
var c__5548__auto___9215 = cljs.core.chunk_first.call(null,seq__9144_9214__$1);
var G__9216 = cljs.core.chunk_rest.call(null,seq__9144_9214__$1);
var G__9217 = c__5548__auto___9215;
var G__9218 = cljs.core.count.call(null,c__5548__auto___9215);
var G__9219 = (0);
seq__9144_9204 = G__9216;
chunk__9145_9205 = G__9217;
count__9146_9206 = G__9218;
i__9147_9207 = G__9219;
continue;
} else {
var component__8451__auto___9220 = cljs.core.first.call(null,seq__9144_9214__$1);
speclj.components.install.call(null,component__8451__auto___9220,description__8450__auto____$2);


var G__9221 = cljs.core.next.call(null,seq__9144_9214__$1);
var G__9222 = null;
var G__9223 = (0);
var G__9224 = (0);
seq__9144_9204 = G__9221;
chunk__9145_9205 = G__9222;
count__9146_9206 = G__9223;
i__9147_9207 = G__9224;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9142_9202);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})()],null)));
var chunk__9113_9197 = null;
var count__9114_9198 = (0);
var i__9115_9199 = (0);
while(true){
if((i__9115_9199 < count__9114_9198)){
var component__8451__auto___9225 = cljs.core._nth.call(null,chunk__9113_9197,i__9115_9199);
speclj.components.install.call(null,component__8451__auto___9225,description__8450__auto____$1);


var G__9226 = seq__9112_9196;
var G__9227 = chunk__9113_9197;
var G__9228 = count__9114_9198;
var G__9229 = (i__9115_9199 + (1));
seq__9112_9196 = G__9226;
chunk__9113_9197 = G__9227;
count__9114_9198 = G__9228;
i__9115_9199 = G__9229;
continue;
} else {
var temp__5825__auto___9230 = cljs.core.seq.call(null,seq__9112_9196);
if(temp__5825__auto___9230){
var seq__9112_9231__$1 = temp__5825__auto___9230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9112_9231__$1)){
var c__5548__auto___9232 = cljs.core.chunk_first.call(null,seq__9112_9231__$1);
var G__9233 = cljs.core.chunk_rest.call(null,seq__9112_9231__$1);
var G__9234 = c__5548__auto___9232;
var G__9235 = cljs.core.count.call(null,c__5548__auto___9232);
var G__9236 = (0);
seq__9112_9196 = G__9233;
chunk__9113_9197 = G__9234;
count__9114_9198 = G__9235;
i__9115_9199 = G__9236;
continue;
} else {
var component__8451__auto___9237 = cljs.core.first.call(null,seq__9112_9231__$1);
speclj.components.install.call(null,component__8451__auto___9237,description__8450__auto____$1);


var G__9238 = cljs.core.next.call(null,seq__9112_9231__$1);
var G__9239 = null;
var G__9240 = (0);
var G__9241 = (0);
seq__9112_9196 = G__9238;
chunk__9113_9197 = G__9239;
count__9114_9198 = G__9240;
i__9115_9199 = G__9241;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9110_9194);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})()],null)));
var chunk__9008_9160 = null;
var count__9009_9161 = (0);
var i__9010_9162 = (0);
while(true){
if((i__9010_9162 < count__9009_9161)){
var component__8451__auto___9242 = cljs.core._nth.call(null,chunk__9008_9160,i__9010_9162);
speclj.components.install.call(null,component__8451__auto___9242,description__8450__auto___9156);


var G__9243 = seq__9007_9159;
var G__9244 = chunk__9008_9160;
var G__9245 = count__9009_9161;
var G__9246 = (i__9010_9162 + (1));
seq__9007_9159 = G__9243;
chunk__9008_9160 = G__9244;
count__9009_9161 = G__9245;
i__9010_9162 = G__9246;
continue;
} else {
var temp__5825__auto___9247 = cljs.core.seq.call(null,seq__9007_9159);
if(temp__5825__auto___9247){
var seq__9007_9248__$1 = temp__5825__auto___9247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9007_9248__$1)){
var c__5548__auto___9249 = cljs.core.chunk_first.call(null,seq__9007_9248__$1);
var G__9250 = cljs.core.chunk_rest.call(null,seq__9007_9248__$1);
var G__9251 = c__5548__auto___9249;
var G__9252 = cljs.core.count.call(null,c__5548__auto___9249);
var G__9253 = (0);
seq__9007_9159 = G__9250;
chunk__9008_9160 = G__9251;
count__9009_9161 = G__9252;
i__9010_9162 = G__9253;
continue;
} else {
var component__8451__auto___9254 = cljs.core.first.call(null,seq__9007_9248__$1);
speclj.components.install.call(null,component__8451__auto___9254,description__8450__auto___9156);


var G__9255 = cljs.core.next.call(null,seq__9007_9248__$1);
var G__9256 = null;
var G__9257 = (0);
var G__9258 = (0);
seq__9007_9159 = G__9255;
chunk__9008_9160 = G__9256;
count__9009_9161 = G__9257;
i__9010_9162 = G__9258;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9005_9157);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___9156);
}


//# sourceMappingURL=setup_spec.js.map
