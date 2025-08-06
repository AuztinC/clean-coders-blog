// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.setupc');
var description__8450__auto___13903 = speclj.components.new_description.call(null,"game setup",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__13789_13904 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13790_13905 = description__8450__auto___13903;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13790_13905);

try{var seq__13791_13906 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__13849 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__13850 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__13850);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__13849);
}});})(_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));
});})(_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"select-difficulty correct count and switch to game",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__13851_13910 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13852_13911 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13852_13911);

try{var seq__13853_13912 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"single difficulty 1 time",((function (_STAR_parent_description_STAR__orig_val__13851_13910,_STAR_parent_description_STAR__temp_val__13852_13911,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
var out = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___13917 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___13916,actual__8593__auto___13917)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13916;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13917;
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
});})(_STAR_parent_description_STAR__orig_val__13851_13910,_STAR_parent_description_STAR__temp_val__13852_13911,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
,false),speclj.components.new_characteristic.call(null,"two difficulty ",((function (_STAR_parent_description_STAR__orig_val__13851_13910,_STAR_parent_description_STAR__temp_val__13852_13911,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null));

var out1 = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
var out2 = tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"hard","hard",2068420191));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null);
var actual__8593__auto___13919 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8592__auto___13918,actual__8593__auto___13919)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13918;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13919;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13920 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___13921 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out1);
if(cljs.core._EQ_.call(null,expected__8592__auto___13920,actual__8593__auto___13921)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13920;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13921;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"hard","hard",2068420191)], null);
var actual__8593__auto___13923 = new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(out2);
if(cljs.core._EQ_.call(null,expected__8592__auto___13922,actual__8593__auto___13923)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13922;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13923;
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
});})(_STAR_parent_description_STAR__orig_val__13851_13910,_STAR_parent_description_STAR__temp_val__13852_13911,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
,false)],null)));
var chunk__13854_13913 = null;
var count__13855_13914 = (0);
var i__13856_13915 = (0);
while(true){
if((i__13856_13915 < count__13855_13914)){
var component__8451__auto___13924 = cljs.core._nth.call(null,chunk__13854_13913,i__13856_13915);
speclj.components.install.call(null,component__8451__auto___13924,description__8450__auto____$1);


var G__13925 = seq__13853_13912;
var G__13926 = chunk__13854_13913;
var G__13927 = count__13855_13914;
var G__13928 = (i__13856_13915 + (1));
seq__13853_13912 = G__13925;
chunk__13854_13913 = G__13926;
count__13855_13914 = G__13927;
i__13856_13915 = G__13928;
continue;
} else {
var temp__5825__auto___13929 = cljs.core.seq.call(null,seq__13853_13912);
if(temp__5825__auto___13929){
var seq__13853_13930__$1 = temp__5825__auto___13929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13853_13930__$1)){
var c__5548__auto___13931 = cljs.core.chunk_first.call(null,seq__13853_13930__$1);
var G__13932 = cljs.core.chunk_rest.call(null,seq__13853_13930__$1);
var G__13933 = c__5548__auto___13931;
var G__13934 = cljs.core.count.call(null,c__5548__auto___13931);
var G__13935 = (0);
seq__13853_13912 = G__13932;
chunk__13854_13913 = G__13933;
count__13855_13914 = G__13934;
i__13856_13915 = G__13935;
continue;
} else {
var component__8451__auto___13936 = cljs.core.first.call(null,seq__13853_13930__$1);
speclj.components.install.call(null,component__8451__auto___13936,description__8450__auto____$1);


var G__13937 = cljs.core.next.call(null,seq__13853_13930__$1);
var G__13938 = null;
var G__13939 = (0);
var G__13940 = (0);
seq__13853_13912 = G__13937;
chunk__13854_13913 = G__13938;
count__13855_13914 = G__13939;
i__13856_13915 = G__13940;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13851_13910);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"auto advance",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__13857_13941 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13858_13942 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13858_13942);

try{var seq__13859_13943 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"does not advance if it's not the AI's turn",((function (_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
var next_state_orig_val__13883 = tic_tac_toe.game.next_state;
var next_state_temp_val__13884 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__13884);

try{var initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,initial_state);

tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,initial_state,initial_state);

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___13947 = initial_state;
var actual__8593__auto___13948 = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__8592__auto___13947,actual__8593__auto___13948)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___13947;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___13948;
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
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__13883);
}});})(_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
,false),speclj.components.new_characteristic.call(null,"returns new state if ai turn",((function (_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
var next_state_orig_val__13885 = tic_tac_toe.game.next_state;
var sleep_orig_val__13886 = tic_tac_toe.setup.sleep;
var next_state_temp_val__13887 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null)], null));
var sleep_temp_val__13888 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.game.next_state = next_state_temp_val__13887);

(tic_tac_toe.setup.sleep = sleep_temp_val__13888);

try{var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p2",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null);
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,state);

return tic_tac_toe.setup.auto_advance.call(null,new cljs.core.Keyword(null,"test-key","test-key",-1385375189),tic_tac_toe.setup.state,state,state);
}finally {(tic_tac_toe.setup.sleep = sleep_orig_val__13886);

(tic_tac_toe.game.next_state = next_state_orig_val__13885);
}});})(_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
,false),(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"game-over?",false,"tic-tac-toe.setup-spec");
var _STAR_parent_description_STAR__orig_val__13889_13949 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13890_13950 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13890_13950);

try{var seq__13891_13951 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13889_13949,_STAR_parent_description_STAR__temp_val__13890_13950,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null));
});})(_STAR_parent_description_STAR__orig_val__13889_13949,_STAR_parent_description_STAR__temp_val__13890_13950,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
),speclj.components.new_characteristic.call(null,"resets state with game-over screen when winner? is true",((function (_STAR_parent_description_STAR__orig_val__13889_13949,_STAR_parent_description_STAR__temp_val__13890_13950,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
var next_state_orig_val__13899 = tic_tac_toe.game.next_state;
var next_state_temp_val__13900 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),"updated",new cljs.core.Keyword(null,"something","something",295416317),"else",new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__13900);

try{tic_tac_toe.setup.game_over_QMARK_.call(null,true,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695)], null);
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
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__13899);
}});})(_STAR_parent_description_STAR__orig_val__13889_13949,_STAR_parent_description_STAR__temp_val__13890_13950,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
,false),speclj.components.new_characteristic.call(null,"resets state normally when winner? is false",((function (_STAR_parent_description_STAR__orig_val__13889_13949,_STAR_parent_description_STAR__temp_val__13890_13950,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903){
return (function (){
var next_state_orig_val__13901 = tic_tac_toe.game.next_state;
var next_state_temp_val__13902 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),"next",new cljs.core.Keyword(null,"something","something",295416317),"else",new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null)], null));
(tic_tac_toe.game.next_state = next_state_temp_val__13902);

try{tic_tac_toe.setup.game_over_QMARK_.call(null,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null));

var state = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dummy","dummy",2059765854),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null);
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
}finally {(tic_tac_toe.game.next_state = next_state_orig_val__13901);
}});})(_STAR_parent_description_STAR__orig_val__13889_13949,_STAR_parent_description_STAR__temp_val__13890_13950,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__13857_13941,_STAR_parent_description_STAR__temp_val__13858_13942,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__13789_13904,_STAR_parent_description_STAR__temp_val__13790_13905,description__8450__auto___13903))
,false)],null)));
var chunk__13892_13952 = null;
var count__13893_13953 = (0);
var i__13894_13954 = (0);
while(true){
if((i__13894_13954 < count__13893_13953)){
var component__8451__auto___13955 = cljs.core._nth.call(null,chunk__13892_13952,i__13894_13954);
speclj.components.install.call(null,component__8451__auto___13955,description__8450__auto____$2);


var G__13956 = seq__13891_13951;
var G__13957 = chunk__13892_13952;
var G__13958 = count__13893_13953;
var G__13959 = (i__13894_13954 + (1));
seq__13891_13951 = G__13956;
chunk__13892_13952 = G__13957;
count__13893_13953 = G__13958;
i__13894_13954 = G__13959;
continue;
} else {
var temp__5825__auto___13960 = cljs.core.seq.call(null,seq__13891_13951);
if(temp__5825__auto___13960){
var seq__13891_13961__$1 = temp__5825__auto___13960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13891_13961__$1)){
var c__5548__auto___13962 = cljs.core.chunk_first.call(null,seq__13891_13961__$1);
var G__13963 = cljs.core.chunk_rest.call(null,seq__13891_13961__$1);
var G__13964 = c__5548__auto___13962;
var G__13965 = cljs.core.count.call(null,c__5548__auto___13962);
var G__13966 = (0);
seq__13891_13951 = G__13963;
chunk__13892_13952 = G__13964;
count__13893_13953 = G__13965;
i__13894_13954 = G__13966;
continue;
} else {
var component__8451__auto___13967 = cljs.core.first.call(null,seq__13891_13961__$1);
speclj.components.install.call(null,component__8451__auto___13967,description__8450__auto____$2);


var G__13968 = cljs.core.next.call(null,seq__13891_13961__$1);
var G__13969 = null;
var G__13970 = (0);
var G__13971 = (0);
seq__13891_13951 = G__13968;
chunk__13892_13952 = G__13969;
count__13893_13953 = G__13970;
i__13894_13954 = G__13971;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13889_13949);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})()],null)));
var chunk__13860_13944 = null;
var count__13861_13945 = (0);
var i__13862_13946 = (0);
while(true){
if((i__13862_13946 < count__13861_13945)){
var component__8451__auto___13972 = cljs.core._nth.call(null,chunk__13860_13944,i__13862_13946);
speclj.components.install.call(null,component__8451__auto___13972,description__8450__auto____$1);


var G__13973 = seq__13859_13943;
var G__13974 = chunk__13860_13944;
var G__13975 = count__13861_13945;
var G__13976 = (i__13862_13946 + (1));
seq__13859_13943 = G__13973;
chunk__13860_13944 = G__13974;
count__13861_13945 = G__13975;
i__13862_13946 = G__13976;
continue;
} else {
var temp__5825__auto___13977 = cljs.core.seq.call(null,seq__13859_13943);
if(temp__5825__auto___13977){
var seq__13859_13978__$1 = temp__5825__auto___13977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13859_13978__$1)){
var c__5548__auto___13979 = cljs.core.chunk_first.call(null,seq__13859_13978__$1);
var G__13980 = cljs.core.chunk_rest.call(null,seq__13859_13978__$1);
var G__13981 = c__5548__auto___13979;
var G__13982 = cljs.core.count.call(null,c__5548__auto___13979);
var G__13983 = (0);
seq__13859_13943 = G__13980;
chunk__13860_13944 = G__13981;
count__13861_13945 = G__13982;
i__13862_13946 = G__13983;
continue;
} else {
var component__8451__auto___13984 = cljs.core.first.call(null,seq__13859_13978__$1);
speclj.components.install.call(null,component__8451__auto___13984,description__8450__auto____$1);


var G__13985 = cljs.core.next.call(null,seq__13859_13978__$1);
var G__13986 = null;
var G__13987 = (0);
var G__13988 = (0);
seq__13859_13943 = G__13985;
chunk__13860_13944 = G__13986;
count__13861_13945 = G__13987;
i__13862_13946 = G__13988;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13857_13941);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})()],null)));
var chunk__13792_13907 = null;
var count__13793_13908 = (0);
var i__13794_13909 = (0);
while(true){
if((i__13794_13909 < count__13793_13908)){
var component__8451__auto___13989 = cljs.core._nth.call(null,chunk__13792_13907,i__13794_13909);
speclj.components.install.call(null,component__8451__auto___13989,description__8450__auto___13903);


var G__13990 = seq__13791_13906;
var G__13991 = chunk__13792_13907;
var G__13992 = count__13793_13908;
var G__13993 = (i__13794_13909 + (1));
seq__13791_13906 = G__13990;
chunk__13792_13907 = G__13991;
count__13793_13908 = G__13992;
i__13794_13909 = G__13993;
continue;
} else {
var temp__5825__auto___13994 = cljs.core.seq.call(null,seq__13791_13906);
if(temp__5825__auto___13994){
var seq__13791_13995__$1 = temp__5825__auto___13994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13791_13995__$1)){
var c__5548__auto___13996 = cljs.core.chunk_first.call(null,seq__13791_13995__$1);
var G__13997 = cljs.core.chunk_rest.call(null,seq__13791_13995__$1);
var G__13998 = c__5548__auto___13996;
var G__13999 = cljs.core.count.call(null,c__5548__auto___13996);
var G__14000 = (0);
seq__13791_13906 = G__13997;
chunk__13792_13907 = G__13998;
count__13793_13908 = G__13999;
i__13794_13909 = G__14000;
continue;
} else {
var component__8451__auto___14001 = cljs.core.first.call(null,seq__13791_13995__$1);
speclj.components.install.call(null,component__8451__auto___14001,description__8450__auto___13903);


var G__14002 = cljs.core.next.call(null,seq__13791_13995__$1);
var G__14003 = null;
var G__14004 = (0);
var G__14005 = (0);
seq__13791_13906 = G__14002;
chunk__13792_13907 = G__14003;
count__13793_13908 = G__14004;
i__13794_13909 = G__14005;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13789_13904);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___13903);
}


//# sourceMappingURL=setup_spec.js.map
