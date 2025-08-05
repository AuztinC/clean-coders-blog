// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.main');
tic_tac_toe.html_spec.cssfn = (function tic_tac_toe$html_spec$cssfn(target,key){
return c3kit.wire.spec_helper.style.call(null,target).getPropertyValue(key);
});
tic_tac_toe.html_spec.cell_count = (function tic_tac_toe$html_spec$cell_count(size){
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,size)], null);
var out = tic_tac_toe.html.render_board.call(null,state);
var vec__28148 = out;
var seq__28149 = cljs.core.seq.call(null,vec__28148);
var first__28150 = cljs.core.first.call(null,seq__28149);
var seq__28149__$1 = cljs.core.next.call(null,seq__28149);
var _tag = first__28150;
var first__28150__$1 = cljs.core.first.call(null,seq__28149__$1);
var seq__28149__$2 = cljs.core.next.call(null,seq__28149__$1);
var _attrs = first__28150__$1;
var rows = seq__28149__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__25530__auto___28351 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28153_28352 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28154_28353 = description__25530__auto___28351;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28154_28353);

try{var seq__28155_28354 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (it__25904__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__28267 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__28268 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__28268);

try{return it__25904__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__28267);
}});})(_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (it__25597__auto__){
var auto_advance_orig_val__28269 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__28270 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__28270);

try{return it__25597__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__28269);
}});})(_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),(function (){var description__25530__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28271_28358 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28272_28359 = description__25530__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28272_28359);

try{var seq__28273_28360 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__25530__auto____$2 = speclj.components.new_description.call(null,"reset btn",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28295_28364 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28296_28365 = description__25530__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28296_28365);

try{var seq__28297_28366 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28295_28364,_STAR_parent_description_STAR__temp_val__28296_28365,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28295_28364,_STAR_parent_description_STAR__temp_val__28296_28365,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),speclj.components.new_characteristic.call(null,"displays btn when :players exist",((function (_STAR_parent_description_STAR__orig_val__28295_28364,_STAR_parent_description_STAR__temp_val__28296_28365,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var value__26034__auto__ = "#reset-btn";
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
});})(_STAR_parent_description_STAR__orig_val__28295_28364,_STAR_parent_description_STAR__temp_val__28296_28365,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"resets state when click",((function (_STAR_parent_description_STAR__orig_val__28295_28364,_STAR_parent_description_STAR__temp_val__28296_28365,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#reset-btn");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = tic_tac_toe.setup.starting_state;
var actual__25673__auto__ = cljs.core.deref.call(null,tic_tac_toe.setup.state);
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
});})(_STAR_parent_description_STAR__orig_val__28295_28364,_STAR_parent_description_STAR__temp_val__28296_28365,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false)],null)));
var chunk__28298_28367 = null;
var count__28299_28368 = (0);
var i__28300_28369 = (0);
while(true){
if((i__28300_28369 < count__28299_28368)){
var component__25531__auto___28370 = cljs.core._nth.call(null,chunk__28298_28367,i__28300_28369);
speclj.components.install.call(null,component__25531__auto___28370,description__25530__auto____$2);


var G__28371 = seq__28297_28366;
var G__28372 = chunk__28298_28367;
var G__28373 = count__28299_28368;
var G__28374 = (i__28300_28369 + (1));
seq__28297_28366 = G__28371;
chunk__28298_28367 = G__28372;
count__28299_28368 = G__28373;
i__28300_28369 = G__28374;
continue;
} else {
var temp__5825__auto___28375 = cljs.core.seq.call(null,seq__28297_28366);
if(temp__5825__auto___28375){
var seq__28297_28376__$1 = temp__5825__auto___28375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28297_28376__$1)){
var c__5548__auto___28377 = cljs.core.chunk_first.call(null,seq__28297_28376__$1);
var G__28378 = cljs.core.chunk_rest.call(null,seq__28297_28376__$1);
var G__28379 = c__5548__auto___28377;
var G__28380 = cljs.core.count.call(null,c__5548__auto___28377);
var G__28381 = (0);
seq__28297_28366 = G__28378;
chunk__28298_28367 = G__28379;
count__28299_28368 = G__28380;
i__28300_28369 = G__28381;
continue;
} else {
var component__25531__auto___28382 = cljs.core.first.call(null,seq__28297_28376__$1);
speclj.components.install.call(null,component__25531__auto___28382,description__25530__auto____$2);


var G__28383 = cljs.core.next.call(null,seq__28297_28376__$1);
var G__28384 = null;
var G__28385 = (0);
var G__28386 = (0);
seq__28297_28366 = G__28383;
chunk__28298_28367 = G__28384;
count__28299_28368 = G__28385;
i__28300_28369 = G__28386;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28295_28364);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$2);
}

return description__25530__auto____$2;
})(),(function (){var description__25530__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28301_28387 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28302_28388 = description__25530__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28302_28388);

try{var seq__28303_28389 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28393 = "Human vs AI";
var actual__25673__auto___28394 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__25672__auto___28393,actual__25673__auto___28394)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28393;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28394;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28395 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__25673__auto___28396 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28395,actual__25673__auto___28396)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28395;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28396;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__25673__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28397 = "AI vs Human";
var actual__25673__auto___28398 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__25672__auto___28397,actual__25673__auto___28398)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28397;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28398;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28399 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__25673__auto___28400 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28399,actual__25673__auto___28400)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28399;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28400;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__25673__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28401 = "Human vs Human";
var actual__25673__auto___28402 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__25672__auto___28401,actual__25673__auto___28402)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28401;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28402;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28403 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__25673__auto___28404 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28403,actual__25673__auto___28404)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28403;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28404;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__25673__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28405 = "AI vs AI";
var actual__25673__auto___28406 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__25672__auto___28405,actual__25673__auto___28406)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28405;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28406;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28407 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__25673__auto___28408 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28407,actual__25673__auto___28408)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28407;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28408;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__25673__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__28301_28387,_STAR_parent_description_STAR__temp_val__28302_28388,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false)],null)));
var chunk__28304_28390 = null;
var count__28305_28391 = (0);
var i__28306_28392 = (0);
while(true){
if((i__28306_28392 < count__28305_28391)){
var component__25531__auto___28409 = cljs.core._nth.call(null,chunk__28304_28390,i__28306_28392);
speclj.components.install.call(null,component__25531__auto___28409,description__25530__auto____$2);


var G__28410 = seq__28303_28389;
var G__28411 = chunk__28304_28390;
var G__28412 = count__28305_28391;
var G__28413 = (i__28306_28392 + (1));
seq__28303_28389 = G__28410;
chunk__28304_28390 = G__28411;
count__28305_28391 = G__28412;
i__28306_28392 = G__28413;
continue;
} else {
var temp__5825__auto___28414 = cljs.core.seq.call(null,seq__28303_28389);
if(temp__5825__auto___28414){
var seq__28303_28415__$1 = temp__5825__auto___28414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28303_28415__$1)){
var c__5548__auto___28416 = cljs.core.chunk_first.call(null,seq__28303_28415__$1);
var G__28417 = cljs.core.chunk_rest.call(null,seq__28303_28415__$1);
var G__28418 = c__5548__auto___28416;
var G__28419 = cljs.core.count.call(null,c__5548__auto___28416);
var G__28420 = (0);
seq__28303_28389 = G__28417;
chunk__28304_28390 = G__28418;
count__28305_28391 = G__28419;
i__28306_28392 = G__28420;
continue;
} else {
var component__25531__auto___28421 = cljs.core.first.call(null,seq__28303_28415__$1);
speclj.components.install.call(null,component__25531__auto___28421,description__25530__auto____$2);


var G__28422 = cljs.core.next.call(null,seq__28303_28415__$1);
var G__28423 = null;
var G__28424 = (0);
var G__28425 = (0);
seq__28303_28389 = G__28422;
chunk__28304_28390 = G__28423;
count__28305_28391 = G__28424;
i__28306_28392 = G__28425;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28301_28387);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$2);
}

return description__25530__auto____$2;
})(),(function (){var description__25530__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28307_28426 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28308_28427 = description__25530__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28308_28427);

try{var seq__28309_28428 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var value__26034__auto___28432 = "#board-3x3";
var node__26035__auto___28433 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28432);
if(cljs.core.truth_(node__26035__auto___28433)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28432;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28434 = "3x3";
var actual__25673__auto___28435 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__25672__auto___28434,actual__25673__auto___28435)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28434;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28435;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28436 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__25673__auto___28437 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28436,actual__25673__auto___28437)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28436;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28437;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28438 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__25673__auto___28439 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28438,actual__25673__auto___28439)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28438;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28439;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__25673__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var value__26034__auto___28440 = "#board-4x4";
var node__26035__auto___28441 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28440);
if(cljs.core.truth_(node__26035__auto___28441)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28440;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28442 = "4x4";
var actual__25673__auto___28443 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__25672__auto___28442,actual__25673__auto___28443)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28442;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28443;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28444 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__25673__auto___28445 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28444,actual__25673__auto___28445)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28444;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28445;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28446 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__25673__auto___28447 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28446,actual__25673__auto___28447)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28446;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28447;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__25673__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var value__26034__auto___28448 = "#board-3x3x3";
var node__26035__auto___28449 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28448);
if(cljs.core.truth_(node__26035__auto___28449)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28448;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28450 = "3x3x3";
var actual__25673__auto___28451 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__25672__auto___28450,actual__25673__auto___28451)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28451;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28452 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__25673__auto___28453 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28452,actual__25673__auto___28453)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28452;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28453;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28454 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__25673__auto___28455 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__25672__auto___28454,actual__25673__auto___28455)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28454;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28455;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__25673__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"skips difficulty if HvH",((function (_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__26034__auto___28456 = "#board-3x3";
var node__26035__auto___28457 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28456);
if(cljs.core.truth_(node__26035__auto___28457)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28456;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__25673__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
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
});})(_STAR_parent_description_STAR__orig_val__28307_28426,_STAR_parent_description_STAR__temp_val__28308_28427,description__25530__auto____$2,_STAR_parent_description_STAR__orig_val__28271_28358,_STAR_parent_description_STAR__temp_val__28272_28359,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false)],null)));
var chunk__28310_28429 = null;
var count__28311_28430 = (0);
var i__28312_28431 = (0);
while(true){
if((i__28312_28431 < count__28311_28430)){
var component__25531__auto___28458 = cljs.core._nth.call(null,chunk__28310_28429,i__28312_28431);
speclj.components.install.call(null,component__25531__auto___28458,description__25530__auto____$2);


var G__28459 = seq__28309_28428;
var G__28460 = chunk__28310_28429;
var G__28461 = count__28311_28430;
var G__28462 = (i__28312_28431 + (1));
seq__28309_28428 = G__28459;
chunk__28310_28429 = G__28460;
count__28311_28430 = G__28461;
i__28312_28431 = G__28462;
continue;
} else {
var temp__5825__auto___28463 = cljs.core.seq.call(null,seq__28309_28428);
if(temp__5825__auto___28463){
var seq__28309_28464__$1 = temp__5825__auto___28463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28309_28464__$1)){
var c__5548__auto___28465 = cljs.core.chunk_first.call(null,seq__28309_28464__$1);
var G__28466 = cljs.core.chunk_rest.call(null,seq__28309_28464__$1);
var G__28467 = c__5548__auto___28465;
var G__28468 = cljs.core.count.call(null,c__5548__auto___28465);
var G__28469 = (0);
seq__28309_28428 = G__28466;
chunk__28310_28429 = G__28467;
count__28311_28430 = G__28468;
i__28312_28431 = G__28469;
continue;
} else {
var component__25531__auto___28470 = cljs.core.first.call(null,seq__28309_28464__$1);
speclj.components.install.call(null,component__25531__auto___28470,description__25530__auto____$2);


var G__28471 = cljs.core.next.call(null,seq__28309_28464__$1);
var G__28472 = null;
var G__28473 = (0);
var G__28474 = (0);
seq__28309_28428 = G__28471;
chunk__28310_28429 = G__28472;
count__28311_28430 = G__28473;
i__28312_28431 = G__28474;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28307_28426);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$2);
}

return description__25530__auto____$2;
})()],null)));
var chunk__28274_28361 = null;
var count__28275_28362 = (0);
var i__28276_28363 = (0);
while(true){
if((i__28276_28363 < count__28275_28362)){
var component__25531__auto___28475 = cljs.core._nth.call(null,chunk__28274_28361,i__28276_28363);
speclj.components.install.call(null,component__25531__auto___28475,description__25530__auto____$1);


var G__28476 = seq__28273_28360;
var G__28477 = chunk__28274_28361;
var G__28478 = count__28275_28362;
var G__28479 = (i__28276_28363 + (1));
seq__28273_28360 = G__28476;
chunk__28274_28361 = G__28477;
count__28275_28362 = G__28478;
i__28276_28363 = G__28479;
continue;
} else {
var temp__5825__auto___28480 = cljs.core.seq.call(null,seq__28273_28360);
if(temp__5825__auto___28480){
var seq__28273_28481__$1 = temp__5825__auto___28480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28273_28481__$1)){
var c__5548__auto___28482 = cljs.core.chunk_first.call(null,seq__28273_28481__$1);
var G__28483 = cljs.core.chunk_rest.call(null,seq__28273_28481__$1);
var G__28484 = c__5548__auto___28482;
var G__28485 = cljs.core.count.call(null,c__5548__auto___28482);
var G__28486 = (0);
seq__28273_28360 = G__28483;
chunk__28274_28361 = G__28484;
count__28275_28362 = G__28485;
i__28276_28363 = G__28486;
continue;
} else {
var component__25531__auto___28487 = cljs.core.first.call(null,seq__28273_28481__$1);
speclj.components.install.call(null,component__25531__auto___28487,description__25530__auto____$1);


var G__28488 = cljs.core.next.call(null,seq__28273_28481__$1);
var G__28489 = null;
var G__28490 = (0);
var G__28491 = (0);
seq__28273_28360 = G__28488;
chunk__28274_28361 = G__28489;
count__28275_28362 = G__28490;
i__28276_28363 = G__28491;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28271_28358);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$1);
}

return description__25530__auto____$1;
})(),(function (){var description__25530__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28313_28492 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28314_28493 = description__25530__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28314_28493);

try{var seq__28315_28494 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var select_difficulty_BANG__orig_val__28325 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__28326 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__28326);

try{var value__26034__auto___28498 = "#easy";
var node__26035__auto___28499 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28498);
if(cljs.core.truth_(node__26035__auto___28499)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28498;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28500 = "Easy";
var actual__25673__auto___28501 = c3kit.wire.spec_helper.text.call(null,"#easy");
if(cljs.core._EQ_.call(null,expected__25672__auto___28500,actual__25673__auto___28501)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28500;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28501;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__25918__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__25919__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
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
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__28325);
}});})(_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var select_difficulty_BANG__orig_val__28327 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__28328 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__28328);

try{var value__26034__auto___28502 = "#medium";
var node__26035__auto___28503 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28502);
if(cljs.core.truth_(node__26035__auto___28503)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28502;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28504 = "Medium";
var actual__25673__auto___28505 = c3kit.wire.spec_helper.text.call(null,"#medium");
if(cljs.core._EQ_.call(null,expected__25672__auto___28504,actual__25673__auto___28505)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28504;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28505;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__25918__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__25919__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
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
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__28327);
}});})(_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var select_difficulty_BANG__orig_val__28329 = tic_tac_toe.setup.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__28330 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__28330);

try{var value__26034__auto___28506 = "#hard";
var node__26035__auto___28507 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28506);
if(cljs.core.truth_(node__26035__auto___28507)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28506;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28508 = "Hard";
var actual__25673__auto___28509 = c3kit.wire.spec_helper.text.call(null,"#hard");
if(cljs.core._EQ_.call(null,expected__25672__auto___28508,actual__25673__auto___28509)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28508;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28509;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__25918__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__25919__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
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
}finally {(tic_tac_toe.setup.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__28329);
}});})(_STAR_parent_description_STAR__orig_val__28313_28492,_STAR_parent_description_STAR__temp_val__28314_28493,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false)],null)));
var chunk__28316_28495 = null;
var count__28317_28496 = (0);
var i__28318_28497 = (0);
while(true){
if((i__28318_28497 < count__28317_28496)){
var component__25531__auto___28510 = cljs.core._nth.call(null,chunk__28316_28495,i__28318_28497);
speclj.components.install.call(null,component__25531__auto___28510,description__25530__auto____$1);


var G__28511 = seq__28315_28494;
var G__28512 = chunk__28316_28495;
var G__28513 = count__28317_28496;
var G__28514 = (i__28318_28497 + (1));
seq__28315_28494 = G__28511;
chunk__28316_28495 = G__28512;
count__28317_28496 = G__28513;
i__28318_28497 = G__28514;
continue;
} else {
var temp__5825__auto___28515 = cljs.core.seq.call(null,seq__28315_28494);
if(temp__5825__auto___28515){
var seq__28315_28516__$1 = temp__5825__auto___28515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28315_28516__$1)){
var c__5548__auto___28517 = cljs.core.chunk_first.call(null,seq__28315_28516__$1);
var G__28518 = cljs.core.chunk_rest.call(null,seq__28315_28516__$1);
var G__28519 = c__5548__auto___28517;
var G__28520 = cljs.core.count.call(null,c__5548__auto___28517);
var G__28521 = (0);
seq__28315_28494 = G__28518;
chunk__28316_28495 = G__28519;
count__28317_28496 = G__28520;
i__28318_28497 = G__28521;
continue;
} else {
var component__25531__auto___28522 = cljs.core.first.call(null,seq__28315_28516__$1);
speclj.components.install.call(null,component__25531__auto___28522,description__25530__auto____$1);


var G__28523 = cljs.core.next.call(null,seq__28315_28516__$1);
var G__28524 = null;
var G__28525 = (0);
var G__28526 = (0);
seq__28315_28494 = G__28523;
chunk__28316_28495 = G__28524;
count__28317_28496 = G__28525;
i__28318_28497 = G__28526;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28313_28492);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$1);
}

return description__25530__auto____$1;
})(),(function (){var description__25530__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28331_28527 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28332_28528 = description__25530__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28332_28528);

try{var seq__28333_28529 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto___28533 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__25724__auto___28534 = out;
if((actual__25724__auto___28534 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto___28533 === 'string') && (typeof actual__25724__auto___28534 === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto___28534,expected__25723__auto___28533) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28534;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto___28533)) && (typeof actual__25724__auto___28534 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto___28533,actual__25724__auto___28534))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto___28534;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto___28533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto___28534)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto___28534,expected__25723__auto___28533)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28534;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto___28534)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto___28533,p1__25722__25725__auto__);
}),actual__25724__auto___28534))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28533;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28534;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto___28533;
var b__25652__auto__ = actual__25724__auto___28534;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto__ = "index";
var actual__25724__auto__ = out;
if((actual__25724__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto__ === 'string') && (typeof actual__25724__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto__,expected__25723__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto__)) && (typeof actual__25724__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto__,actual__25724__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto__,expected__25723__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto__,p1__25722__25725__auto__);
}),actual__25724__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto__;
var b__25652__auto__ = actual__25724__auto__;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__25724__auto__ = out;
if((actual__25724__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto__ === 'string') && (typeof actual__25724__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto__,expected__25723__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto__)) && (typeof actual__25724__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto__,actual__25724__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto__,expected__25723__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto__,p1__25722__25725__auto__);
}),actual__25724__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto__;
var b__25652__auto__ = actual__25724__auto__;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28535 = (3);
var actual__25673__auto___28536 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28535,actual__25673__auto___28536)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28535;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28536;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28537 = (3);
var actual__25673__auto___28538 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28537,actual__25673__auto___28538)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28537;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28538;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = (9);
var actual__25673__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28539 = (4);
var actual__25673__auto___28540 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28539,actual__25673__auto___28540)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28539;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28540;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28541 = (4);
var actual__25673__auto___28542 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28541,actual__25673__auto___28542)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28541;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28542;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = (16);
var actual__25673__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28543 = (3);
var actual__25673__auto___28544 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28543,actual__25673__auto___28544)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28543;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28544;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28545 = (9);
var actual__25673__auto___28546 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__25672__auto___28545,actual__25673__auto___28546)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28545;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28546;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto__ = (27);
var actual__25673__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
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
});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var apply_human_move_orig_val__28341 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__28342 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__28342);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__26034__auto___28547 = "#cell-1";
var node__26035__auto___28548 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28547);
if(cljs.core.truth_(node__26035__auto___28548)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28547;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28549 = "grey";
var actual__25673__auto___28550 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","background-color");
if(cljs.core._EQ_.call(null,expected__25672__auto___28549,actual__25673__auto___28550)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28549;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28550;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28551 = "60px";
var actual__25673__auto___28552 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","width");
if(cljs.core._EQ_.call(null,expected__25672__auto___28551,actual__25673__auto___28552)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28551;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28552;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28553 = "60px";
var actual__25673__auto___28554 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","height");
if(cljs.core._EQ_.call(null,expected__25672__auto___28553,actual__25673__auto___28554)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28553;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28554;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28555 = "pointer";
var actual__25673__auto___28556 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","cursor");
if(cljs.core._EQ_.call(null,expected__25672__auto___28555,actual__25673__auto___28556)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28555;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28556;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28557 = "1";
var actual__25673__auto___28558 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__25672__auto___28557,actual__25673__auto___28558)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28557;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28558;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__25918__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
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
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__28341);
}});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var apply_human_move_orig_val__28343 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__28344 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__28344);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__26034__auto___28559 = "#cell-1";
var node__26035__auto___28560 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28559);
if(cljs.core.truth_(node__26035__auto___28560)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28559;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25672__auto___28561 = "1";
var actual__25673__auto___28562 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__25672__auto___28561,actual__25673__auto___28562)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25672__auto___28561;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__25673__auto___28562;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__25939__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
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
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__28343);
}});})(_STAR_parent_description_STAR__orig_val__28331_28527,_STAR_parent_description_STAR__temp_val__28332_28528,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false)],null)));
var chunk__28334_28530 = null;
var count__28335_28531 = (0);
var i__28336_28532 = (0);
while(true){
if((i__28336_28532 < count__28335_28531)){
var component__25531__auto___28563 = cljs.core._nth.call(null,chunk__28334_28530,i__28336_28532);
speclj.components.install.call(null,component__25531__auto___28563,description__25530__auto____$1);


var G__28564 = seq__28333_28529;
var G__28565 = chunk__28334_28530;
var G__28566 = count__28335_28531;
var G__28567 = (i__28336_28532 + (1));
seq__28333_28529 = G__28564;
chunk__28334_28530 = G__28565;
count__28335_28531 = G__28566;
i__28336_28532 = G__28567;
continue;
} else {
var temp__5825__auto___28568 = cljs.core.seq.call(null,seq__28333_28529);
if(temp__5825__auto___28568){
var seq__28333_28569__$1 = temp__5825__auto___28568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28333_28569__$1)){
var c__5548__auto___28570 = cljs.core.chunk_first.call(null,seq__28333_28569__$1);
var G__28571 = cljs.core.chunk_rest.call(null,seq__28333_28569__$1);
var G__28572 = c__5548__auto___28570;
var G__28573 = cljs.core.count.call(null,c__5548__auto___28570);
var G__28574 = (0);
seq__28333_28529 = G__28571;
chunk__28334_28530 = G__28572;
count__28335_28531 = G__28573;
i__28336_28532 = G__28574;
continue;
} else {
var component__25531__auto___28575 = cljs.core.first.call(null,seq__28333_28569__$1);
speclj.components.install.call(null,component__25531__auto___28575,description__25530__auto____$1);


var G__28576 = cljs.core.next.call(null,seq__28333_28569__$1);
var G__28577 = null;
var G__28578 = (0);
var G__28579 = (0);
seq__28333_28529 = G__28576;
chunk__28334_28530 = G__28577;
count__28335_28531 = G__28578;
i__28336_28532 = G__28579;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28331_28527);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$1);
}

return description__25530__auto____$1;
})(),(function (){var description__25530__auto____$1 = speclj.components.new_description.call(null,"game over",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__28345_28580 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28346_28581 = description__25530__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28346_28581);

try{var seq__28347_28582 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__28345_28580,_STAR_parent_description_STAR__temp_val__28346_28581,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__28345_28580,_STAR_parent_description_STAR__temp_val__28346_28581,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
),speclj.components.new_characteristic.call(null,"displays winning bard",((function (_STAR_parent_description_STAR__orig_val__28345_28580,_STAR_parent_description_STAR__temp_val__28346_28581,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
var value__26034__auto___28586 = "#main-container";
var node__26035__auto___28587 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28586);
if(cljs.core.truth_(node__26035__auto___28587)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28586;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__26034__auto___28588 = ".cell";
var node__26035__auto___28589 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28588);
if(cljs.core.truth_(node__26035__auto___28589)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28588;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto___28590 = "Game Over!";
var actual__25724__auto___28591 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__25724__auto___28591 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto___28590 === 'string') && (typeof actual__25724__auto___28591 === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto___28591,expected__25723__auto___28590) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto___28590)) && (typeof actual__25724__auto___28591 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto___28590,actual__25724__auto___28591))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto___28591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto___28590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto___28591)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto___28591,expected__25723__auto___28590)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto___28591)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto___28590,p1__25722__25725__auto__);
}),actual__25724__auto___28591))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28590;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto___28590;
var b__25652__auto__ = actual__25724__auto___28591;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto__ = "Winner is X";
var actual__25724__auto__ = c3kit.wire.spec_helper.text.call(null,"#winner");
if((actual__25724__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto__ === 'string') && (typeof actual__25724__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto__,expected__25723__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto__)) && (typeof actual__25724__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto__,actual__25724__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto__,expected__25723__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto__,p1__25722__25725__auto__);
}),actual__25724__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto__;
var b__25652__auto__ = actual__25724__auto__;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__28345_28580,_STAR_parent_description_STAR__temp_val__28346_28581,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false),speclj.components.new_characteristic.call(null,"displays tie game",((function (_STAR_parent_description_STAR__orig_val__28345_28580,_STAR_parent_description_STAR__temp_val__28346_28581,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null)], null)));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__26034__auto___28592 = "#main-container";
var node__26035__auto___28593 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28592);
if(cljs.core.truth_(node__26035__auto___28593)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__26034__auto___28594 = ".cell";
var node__26035__auto___28595 = c3kit.wire.spec_helper.select.call(null,value__26034__auto___28594);
if(cljs.core.truth_(node__26035__auto___28595)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__26034__auto___28594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto___28596 = "Game Over!";
var actual__25724__auto___28597 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__25724__auto___28597 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto___28596 === 'string') && (typeof actual__25724__auto___28597 === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto___28597,expected__25723__auto___28596) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto___28596)) && (typeof actual__25724__auto___28597 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto___28596,actual__25724__auto___28597))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto___28597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto___28596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto___28597)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto___28597,expected__25723__auto___28596)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto___28597)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto___28596,p1__25722__25725__auto__);
}),actual__25724__auto___28597))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto___28596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto___28597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto___28596;
var b__25652__auto__ = actual__25724__auto___28597;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__25723__auto__ = "Tie Game!";
var actual__25724__auto__ = c3kit.wire.spec_helper.text.call(null,"#winner");
if((actual__25724__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__25723__auto__ === 'string') && (typeof actual__25724__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__25724__auto__,expected__25723__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__25723__auto__)) && (typeof actual__25724__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__25723__auto__,actual__25724__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__25724__auto__,expected__25723__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__25724__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25722__25725__auto__){
return cljs.core._EQ_.call(null,expected__25723__auto__,p1__25722__25725__auto__);
}),actual__25724__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__25723__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__25724__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__25640__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__25640__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__25651__auto__ = expected__25723__auto__;
var b__25652__auto__ = actual__25724__auto__;
var type_a__25653__auto__ = (((a__25651__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__25651__auto__)));
var type_b__25654__auto__ = (((b__25652__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__25652__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__25653__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__25654__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__28345_28580,_STAR_parent_description_STAR__temp_val__28346_28581,description__25530__auto____$1,_STAR_parent_description_STAR__orig_val__28153_28352,_STAR_parent_description_STAR__temp_val__28154_28353,description__25530__auto___28351))
,false)],null)));
var chunk__28348_28583 = null;
var count__28349_28584 = (0);
var i__28350_28585 = (0);
while(true){
if((i__28350_28585 < count__28349_28584)){
var component__25531__auto___28598 = cljs.core._nth.call(null,chunk__28348_28583,i__28350_28585);
speclj.components.install.call(null,component__25531__auto___28598,description__25530__auto____$1);


var G__28599 = seq__28347_28582;
var G__28600 = chunk__28348_28583;
var G__28601 = count__28349_28584;
var G__28602 = (i__28350_28585 + (1));
seq__28347_28582 = G__28599;
chunk__28348_28583 = G__28600;
count__28349_28584 = G__28601;
i__28350_28585 = G__28602;
continue;
} else {
var temp__5825__auto___28603 = cljs.core.seq.call(null,seq__28347_28582);
if(temp__5825__auto___28603){
var seq__28347_28604__$1 = temp__5825__auto___28603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28347_28604__$1)){
var c__5548__auto___28605 = cljs.core.chunk_first.call(null,seq__28347_28604__$1);
var G__28606 = cljs.core.chunk_rest.call(null,seq__28347_28604__$1);
var G__28607 = c__5548__auto___28605;
var G__28608 = cljs.core.count.call(null,c__5548__auto___28605);
var G__28609 = (0);
seq__28347_28582 = G__28606;
chunk__28348_28583 = G__28607;
count__28349_28584 = G__28608;
i__28350_28585 = G__28609;
continue;
} else {
var component__25531__auto___28610 = cljs.core.first.call(null,seq__28347_28604__$1);
speclj.components.install.call(null,component__25531__auto___28610,description__25530__auto____$1);


var G__28611 = cljs.core.next.call(null,seq__28347_28604__$1);
var G__28612 = null;
var G__28613 = (0);
var G__28614 = (0);
seq__28347_28582 = G__28611;
chunk__28348_28583 = G__28612;
count__28349_28584 = G__28613;
i__28350_28585 = G__28614;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28345_28580);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto____$1);
}

return description__25530__auto____$1;
})()],null)));
var chunk__28156_28355 = null;
var count__28157_28356 = (0);
var i__28158_28357 = (0);
while(true){
if((i__28158_28357 < count__28157_28356)){
var component__25531__auto___28615 = cljs.core._nth.call(null,chunk__28156_28355,i__28158_28357);
speclj.components.install.call(null,component__25531__auto___28615,description__25530__auto___28351);


var G__28616 = seq__28155_28354;
var G__28617 = chunk__28156_28355;
var G__28618 = count__28157_28356;
var G__28619 = (i__28158_28357 + (1));
seq__28155_28354 = G__28616;
chunk__28156_28355 = G__28617;
count__28157_28356 = G__28618;
i__28158_28357 = G__28619;
continue;
} else {
var temp__5825__auto___28620 = cljs.core.seq.call(null,seq__28155_28354);
if(temp__5825__auto___28620){
var seq__28155_28621__$1 = temp__5825__auto___28620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28155_28621__$1)){
var c__5548__auto___28622 = cljs.core.chunk_first.call(null,seq__28155_28621__$1);
var G__28623 = cljs.core.chunk_rest.call(null,seq__28155_28621__$1);
var G__28624 = c__5548__auto___28622;
var G__28625 = cljs.core.count.call(null,c__5548__auto___28622);
var G__28626 = (0);
seq__28155_28354 = G__28623;
chunk__28156_28355 = G__28624;
count__28157_28356 = G__28625;
i__28158_28357 = G__28626;
continue;
} else {
var component__25531__auto___28627 = cljs.core.first.call(null,seq__28155_28621__$1);
speclj.components.install.call(null,component__25531__auto___28627,description__25530__auto___28351);


var G__28628 = cljs.core.next.call(null,seq__28155_28621__$1);
var G__28629 = null;
var G__28630 = (0);
var G__28631 = (0);
seq__28155_28354 = G__28628;
chunk__28156_28355 = G__28629;
count__28157_28356 = G__28630;
i__28158_28357 = G__28631;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28153_28352);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__25530__auto___28351);
}


//# sourceMappingURL=html_spec.js.map
