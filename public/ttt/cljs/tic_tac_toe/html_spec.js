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
goog.require('tic_tac_toe.setupc');
tic_tac_toe.html_spec.cssfn = (function tic_tac_toe$html_spec$cssfn(target,key){
return c3kit.wire.spec_helper.style.call(null,target).getPropertyValue(key);
});
tic_tac_toe.html_spec.cell_count = (function tic_tac_toe$html_spec$cell_count(size){
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,size)], null);
var out = tic_tac_toe.html.render_board.call(null,state);
var vec__10854 = out;
var seq__10855 = cljs.core.seq.call(null,vec__10854);
var first__10856 = cljs.core.first.call(null,seq__10855);
var seq__10855__$1 = cljs.core.next.call(null,seq__10855);
var _tag = first__10856;
var first__10856__$1 = cljs.core.first.call(null,seq__10855__$1);
var seq__10855__$2 = cljs.core.next.call(null,seq__10855__$1);
var _attrs = first__10856__$1;
var rows = seq__10855__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__8450__auto___11065 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10859_11066 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10860_11067 = description__8450__auto___11065;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10860_11067);

try{var seq__10861_11068 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (it__8824__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__10977 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__10978 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__10978);

try{return it__8824__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__10977);
}});})(_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (it__8517__auto__){
var auto_advance_orig_val__10979 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__10980 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__10980);

try{return it__8517__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__10979);
}});})(_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__10981_11072 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10982_11073 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10982_11073);

try{var seq__10983_11074 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"reset btn",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11005_11078 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11006_11079 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11006_11079);

try{var seq__11007_11080 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11005_11078,_STAR_parent_description_STAR__temp_val__11006_11079,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11005_11078,_STAR_parent_description_STAR__temp_val__11006_11079,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_characteristic.call(null,"displays btn when :players exist",((function (_STAR_parent_description_STAR__orig_val__11005_11078,_STAR_parent_description_STAR__temp_val__11006_11079,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
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
});})(_STAR_parent_description_STAR__orig_val__11005_11078,_STAR_parent_description_STAR__temp_val__11006_11079,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"resets state when click",((function (_STAR_parent_description_STAR__orig_val__11005_11078,_STAR_parent_description_STAR__temp_val__11006_11079,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
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
});})(_STAR_parent_description_STAR__orig_val__11005_11078,_STAR_parent_description_STAR__temp_val__11006_11079,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false)],null)));
var chunk__11008_11081 = null;
var count__11009_11082 = (0);
var i__11010_11083 = (0);
while(true){
if((i__11010_11083 < count__11009_11082)){
var component__8451__auto___11084 = cljs.core._nth.call(null,chunk__11008_11081,i__11010_11083);
speclj.components.install.call(null,component__8451__auto___11084,description__8450__auto____$2);


var G__11085 = seq__11007_11080;
var G__11086 = chunk__11008_11081;
var G__11087 = count__11009_11082;
var G__11088 = (i__11010_11083 + (1));
seq__11007_11080 = G__11085;
chunk__11008_11081 = G__11086;
count__11009_11082 = G__11087;
i__11010_11083 = G__11088;
continue;
} else {
var temp__5825__auto___11089 = cljs.core.seq.call(null,seq__11007_11080);
if(temp__5825__auto___11089){
var seq__11007_11090__$1 = temp__5825__auto___11089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11007_11090__$1)){
var c__5548__auto___11091 = cljs.core.chunk_first.call(null,seq__11007_11090__$1);
var G__11092 = cljs.core.chunk_rest.call(null,seq__11007_11090__$1);
var G__11093 = c__5548__auto___11091;
var G__11094 = cljs.core.count.call(null,c__5548__auto___11091);
var G__11095 = (0);
seq__11007_11080 = G__11092;
chunk__11008_11081 = G__11093;
count__11009_11082 = G__11094;
i__11010_11083 = G__11095;
continue;
} else {
var component__8451__auto___11096 = cljs.core.first.call(null,seq__11007_11090__$1);
speclj.components.install.call(null,component__8451__auto___11096,description__8450__auto____$2);


var G__11097 = cljs.core.next.call(null,seq__11007_11090__$1);
var G__11098 = null;
var G__11099 = (0);
var G__11100 = (0);
seq__11007_11080 = G__11097;
chunk__11008_11081 = G__11098;
count__11009_11082 = G__11099;
i__11010_11083 = G__11100;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11005_11078);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})(),(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11011_11101 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11012_11102 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11012_11102);

try{var seq__11013_11103 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11107 = "Human vs AI";
var actual__8593__auto___11108 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__8592__auto___11107,actual__8593__auto___11108)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11107;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11108;
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

var expected__8592__auto___11109 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___11110 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11109,actual__8593__auto___11110)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11109;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11110;
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
});})(_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11111 = "AI vs Human";
var actual__8593__auto___11112 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__8592__auto___11111,actual__8593__auto___11112)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11111;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11112;
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

var expected__8592__auto___11113 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___11114 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11113,actual__8593__auto___11114)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11113;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11114;
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
});})(_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11115 = "Human vs Human";
var actual__8593__auto___11116 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__8592__auto___11115,actual__8593__auto___11116)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11115;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11116;
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

var expected__8592__auto___11117 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___11118 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11117,actual__8593__auto___11118)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11117;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11118;
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
});})(_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11119 = "AI vs AI";
var actual__8593__auto___11120 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__8592__auto___11119,actual__8593__auto___11120)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11120;
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

var expected__8592__auto___11121 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8593__auto___11122 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11121,actual__8593__auto___11122)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11121;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11122;
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
});})(_STAR_parent_description_STAR__orig_val__11011_11101,_STAR_parent_description_STAR__temp_val__11012_11102,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false)],null)));
var chunk__11014_11104 = null;
var count__11015_11105 = (0);
var i__11016_11106 = (0);
while(true){
if((i__11016_11106 < count__11015_11105)){
var component__8451__auto___11123 = cljs.core._nth.call(null,chunk__11014_11104,i__11016_11106);
speclj.components.install.call(null,component__8451__auto___11123,description__8450__auto____$2);


var G__11124 = seq__11013_11103;
var G__11125 = chunk__11014_11104;
var G__11126 = count__11015_11105;
var G__11127 = (i__11016_11106 + (1));
seq__11013_11103 = G__11124;
chunk__11014_11104 = G__11125;
count__11015_11105 = G__11126;
i__11016_11106 = G__11127;
continue;
} else {
var temp__5825__auto___11128 = cljs.core.seq.call(null,seq__11013_11103);
if(temp__5825__auto___11128){
var seq__11013_11129__$1 = temp__5825__auto___11128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11013_11129__$1)){
var c__5548__auto___11130 = cljs.core.chunk_first.call(null,seq__11013_11129__$1);
var G__11131 = cljs.core.chunk_rest.call(null,seq__11013_11129__$1);
var G__11132 = c__5548__auto___11130;
var G__11133 = cljs.core.count.call(null,c__5548__auto___11130);
var G__11134 = (0);
seq__11013_11103 = G__11131;
chunk__11014_11104 = G__11132;
count__11015_11105 = G__11133;
i__11016_11106 = G__11134;
continue;
} else {
var component__8451__auto___11135 = cljs.core.first.call(null,seq__11013_11129__$1);
speclj.components.install.call(null,component__8451__auto___11135,description__8450__auto____$2);


var G__11136 = cljs.core.next.call(null,seq__11013_11129__$1);
var G__11137 = null;
var G__11138 = (0);
var G__11139 = (0);
seq__11013_11103 = G__11136;
chunk__11014_11104 = G__11137;
count__11015_11105 = G__11138;
i__11016_11106 = G__11139;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11011_11101);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})(),(function (){var description__8450__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11017_11140 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11018_11141 = description__8450__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11018_11141);

try{var seq__11019_11142 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var value__8954__auto___11146 = "#board-3x3";
var node__8955__auto___11147 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11146);
if(cljs.core.truth_(node__8955__auto___11147)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11146;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11148 = "3x3";
var actual__8593__auto___11149 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__8592__auto___11148,actual__8593__auto___11149)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11148;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11149;
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

var expected__8592__auto___11150 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___11151 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11150,actual__8593__auto___11151)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11150;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11151;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11152 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__8593__auto___11153 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11152,actual__8593__auto___11153)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11152;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11153;
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
});})(_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var value__8954__auto___11154 = "#board-4x4";
var node__8955__auto___11155 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11154);
if(cljs.core.truth_(node__8955__auto___11155)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11154;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11156 = "4x4";
var actual__8593__auto___11157 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__8592__auto___11156,actual__8593__auto___11157)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11156;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11157;
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

var expected__8592__auto___11158 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___11159 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11158,actual__8593__auto___11159)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11158;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11159;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11160 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__8593__auto___11161 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11160,actual__8593__auto___11161)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11160;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11161;
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
});})(_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var value__8954__auto___11162 = "#board-3x3x3";
var node__8955__auto___11163 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11162);
if(cljs.core.truth_(node__8955__auto___11163)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11162;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11164 = "3x3x3";
var actual__8593__auto___11165 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__8592__auto___11164,actual__8593__auto___11165)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11165;
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

var expected__8592__auto___11166 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8593__auto___11167 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11166,actual__8593__auto___11167)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11168 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__8593__auto___11169 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8592__auto___11168,actual__8593__auto___11169)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11168;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11169;
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
});})(_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"skips difficulty if HvH",((function (_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__8954__auto___11170 = "#board-3x3";
var node__8955__auto___11171 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11170);
if(cljs.core.truth_(node__8955__auto___11171)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11170;
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
});})(_STAR_parent_description_STAR__orig_val__11017_11140,_STAR_parent_description_STAR__temp_val__11018_11141,description__8450__auto____$2,_STAR_parent_description_STAR__orig_val__10981_11072,_STAR_parent_description_STAR__temp_val__10982_11073,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false)],null)));
var chunk__11020_11143 = null;
var count__11021_11144 = (0);
var i__11022_11145 = (0);
while(true){
if((i__11022_11145 < count__11021_11144)){
var component__8451__auto___11172 = cljs.core._nth.call(null,chunk__11020_11143,i__11022_11145);
speclj.components.install.call(null,component__8451__auto___11172,description__8450__auto____$2);


var G__11173 = seq__11019_11142;
var G__11174 = chunk__11020_11143;
var G__11175 = count__11021_11144;
var G__11176 = (i__11022_11145 + (1));
seq__11019_11142 = G__11173;
chunk__11020_11143 = G__11174;
count__11021_11144 = G__11175;
i__11022_11145 = G__11176;
continue;
} else {
var temp__5825__auto___11177 = cljs.core.seq.call(null,seq__11019_11142);
if(temp__5825__auto___11177){
var seq__11019_11178__$1 = temp__5825__auto___11177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11019_11178__$1)){
var c__5548__auto___11179 = cljs.core.chunk_first.call(null,seq__11019_11178__$1);
var G__11180 = cljs.core.chunk_rest.call(null,seq__11019_11178__$1);
var G__11181 = c__5548__auto___11179;
var G__11182 = cljs.core.count.call(null,c__5548__auto___11179);
var G__11183 = (0);
seq__11019_11142 = G__11180;
chunk__11020_11143 = G__11181;
count__11021_11144 = G__11182;
i__11022_11145 = G__11183;
continue;
} else {
var component__8451__auto___11184 = cljs.core.first.call(null,seq__11019_11178__$1);
speclj.components.install.call(null,component__8451__auto___11184,description__8450__auto____$2);


var G__11185 = cljs.core.next.call(null,seq__11019_11178__$1);
var G__11186 = null;
var G__11187 = (0);
var G__11188 = (0);
seq__11019_11142 = G__11185;
chunk__11020_11143 = G__11186;
count__11021_11144 = G__11187;
i__11022_11145 = G__11188;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11017_11140);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$2);
}

return description__8450__auto____$2;
})()],null)));
var chunk__10984_11075 = null;
var count__10985_11076 = (0);
var i__10986_11077 = (0);
while(true){
if((i__10986_11077 < count__10985_11076)){
var component__8451__auto___11189 = cljs.core._nth.call(null,chunk__10984_11075,i__10986_11077);
speclj.components.install.call(null,component__8451__auto___11189,description__8450__auto____$1);


var G__11190 = seq__10983_11074;
var G__11191 = chunk__10984_11075;
var G__11192 = count__10985_11076;
var G__11193 = (i__10986_11077 + (1));
seq__10983_11074 = G__11190;
chunk__10984_11075 = G__11191;
count__10985_11076 = G__11192;
i__10986_11077 = G__11193;
continue;
} else {
var temp__5825__auto___11194 = cljs.core.seq.call(null,seq__10983_11074);
if(temp__5825__auto___11194){
var seq__10983_11195__$1 = temp__5825__auto___11194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10983_11195__$1)){
var c__5548__auto___11196 = cljs.core.chunk_first.call(null,seq__10983_11195__$1);
var G__11197 = cljs.core.chunk_rest.call(null,seq__10983_11195__$1);
var G__11198 = c__5548__auto___11196;
var G__11199 = cljs.core.count.call(null,c__5548__auto___11196);
var G__11200 = (0);
seq__10983_11074 = G__11197;
chunk__10984_11075 = G__11198;
count__10985_11076 = G__11199;
i__10986_11077 = G__11200;
continue;
} else {
var component__8451__auto___11201 = cljs.core.first.call(null,seq__10983_11195__$1);
speclj.components.install.call(null,component__8451__auto___11201,description__8450__auto____$1);


var G__11202 = cljs.core.next.call(null,seq__10983_11195__$1);
var G__11203 = null;
var G__11204 = (0);
var G__11205 = (0);
seq__10983_11074 = G__11202;
chunk__10984_11075 = G__11203;
count__10985_11076 = G__11204;
i__10986_11077 = G__11205;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10981_11072);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11023_11206 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11024_11207 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11024_11207);

try{var seq__11025_11208 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var select_difficulty_BANG__orig_val__11035 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__11036 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__11036);

try{var value__8954__auto___11212 = "#easy";
var node__8955__auto___11213 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11212);
if(cljs.core.truth_(node__8955__auto___11213)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11212;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11214 = "Easy";
var actual__8593__auto___11215 = c3kit.wire.spec_helper.text.call(null,"#easy");
if(cljs.core._EQ_.call(null,expected__8592__auto___11214,actual__8593__auto___11215)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11214;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11215;
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
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__11035);
}});})(_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var select_difficulty_BANG__orig_val__11037 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__11038 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__11038);

try{var value__8954__auto___11216 = "#medium";
var node__8955__auto___11217 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11216);
if(cljs.core.truth_(node__8955__auto___11217)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11216;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11218 = "Medium";
var actual__8593__auto___11219 = c3kit.wire.spec_helper.text.call(null,"#medium");
if(cljs.core._EQ_.call(null,expected__8592__auto___11218,actual__8593__auto___11219)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11218;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11219;
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
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__11037);
}});})(_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var select_difficulty_BANG__orig_val__11039 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__11040 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__11040);

try{var value__8954__auto___11220 = "#hard";
var node__8955__auto___11221 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11220);
if(cljs.core.truth_(node__8955__auto___11221)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11220;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11222 = "Hard";
var actual__8593__auto___11223 = c3kit.wire.spec_helper.text.call(null,"#hard");
if(cljs.core._EQ_.call(null,expected__8592__auto___11222,actual__8593__auto___11223)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11222;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11223;
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
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__11039);
}});})(_STAR_parent_description_STAR__orig_val__11023_11206,_STAR_parent_description_STAR__temp_val__11024_11207,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false)],null)));
var chunk__11026_11209 = null;
var count__11027_11210 = (0);
var i__11028_11211 = (0);
while(true){
if((i__11028_11211 < count__11027_11210)){
var component__8451__auto___11224 = cljs.core._nth.call(null,chunk__11026_11209,i__11028_11211);
speclj.components.install.call(null,component__8451__auto___11224,description__8450__auto____$1);


var G__11225 = seq__11025_11208;
var G__11226 = chunk__11026_11209;
var G__11227 = count__11027_11210;
var G__11228 = (i__11028_11211 + (1));
seq__11025_11208 = G__11225;
chunk__11026_11209 = G__11226;
count__11027_11210 = G__11227;
i__11028_11211 = G__11228;
continue;
} else {
var temp__5825__auto___11229 = cljs.core.seq.call(null,seq__11025_11208);
if(temp__5825__auto___11229){
var seq__11025_11230__$1 = temp__5825__auto___11229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11025_11230__$1)){
var c__5548__auto___11231 = cljs.core.chunk_first.call(null,seq__11025_11230__$1);
var G__11232 = cljs.core.chunk_rest.call(null,seq__11025_11230__$1);
var G__11233 = c__5548__auto___11231;
var G__11234 = cljs.core.count.call(null,c__5548__auto___11231);
var G__11235 = (0);
seq__11025_11208 = G__11232;
chunk__11026_11209 = G__11233;
count__11027_11210 = G__11234;
i__11028_11211 = G__11235;
continue;
} else {
var component__8451__auto___11236 = cljs.core.first.call(null,seq__11025_11230__$1);
speclj.components.install.call(null,component__8451__auto___11236,description__8450__auto____$1);


var G__11237 = cljs.core.next.call(null,seq__11025_11230__$1);
var G__11238 = null;
var G__11239 = (0);
var G__11240 = (0);
seq__11025_11208 = G__11237;
chunk__11026_11209 = G__11238;
count__11027_11210 = G__11239;
i__11028_11211 = G__11240;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11023_11206);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11041_11241 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11042_11242 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11042_11242);

try{var seq__11043_11243 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (it__8517__auto__){
var check_winner_orig_val__11053 = tic_tac_toe.board.check_winner;
var check_winner_temp_val__11054 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"check-winner","check-winner",1536860418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),false], null));
(tic_tac_toe.board.check_winner = check_winner_temp_val__11054);

try{return it__8517__auto__.call(null);
}finally {(tic_tac_toe.board.check_winner = check_winner_orig_val__11053);
}});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___11247 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__8644__auto___11248 = out;
if((actual__8644__auto___11248 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___11247 === 'string') && (typeof actual__8644__auto___11248 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___11248,expected__8643__auto___11247) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11248;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___11247)) && (typeof actual__8644__auto___11248 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___11247,actual__8644__auto___11248))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___11248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___11247;
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
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___11248)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___11248,expected__8643__auto___11247)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___11248)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___11247,p1__8642__8645__auto__);
}),actual__8644__auto___11248))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___11247;
var b__8572__auto__ = actual__8644__auto___11248;
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
});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
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
});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11249 = (3);
var actual__8593__auto___11250 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11249,actual__8593__auto___11250)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11249;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11250;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11251 = (3);
var actual__8593__auto___11252 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11251,actual__8593__auto___11252)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11251;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11252;
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
});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11253 = (4);
var actual__8593__auto___11254 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11253,actual__8593__auto___11254)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11254;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11255 = (4);
var actual__8593__auto___11256 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11255,actual__8593__auto___11256)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11255;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11256;
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
});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11257 = (3);
var actual__8593__auto___11258 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11257,actual__8593__auto___11258)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11257;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11258;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11259 = (9);
var actual__8593__auto___11260 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8592__auto___11259,actual__8593__auto___11260)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11259;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11260;
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
});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var apply_human_move_orig_val__11055 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__11056 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__11056);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__8954__auto___11261 = "#cell-1";
var node__8955__auto___11262 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11261);
if(cljs.core.truth_(node__8955__auto___11262)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11261;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11263 = "grey";
var actual__8593__auto___11264 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","background-color");
if(cljs.core._EQ_.call(null,expected__8592__auto___11263,actual__8593__auto___11264)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11263;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11264;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11265 = "60px";
var actual__8593__auto___11266 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","width");
if(cljs.core._EQ_.call(null,expected__8592__auto___11265,actual__8593__auto___11266)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11265;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11266;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11267 = "60px";
var actual__8593__auto___11268 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","height");
if(cljs.core._EQ_.call(null,expected__8592__auto___11267,actual__8593__auto___11268)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11267;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11268;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11269 = "pointer";
var actual__8593__auto___11270 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","cursor");
if(cljs.core._EQ_.call(null,expected__8592__auto___11269,actual__8593__auto___11270)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11269;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11270;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11271 = "1";
var actual__8593__auto___11272 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__8592__auto___11271,actual__8593__auto___11272)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11271;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11272;
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
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__11055);
}});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var apply_human_move_orig_val__11057 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__11058 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__11058);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__8954__auto___11273 = "#cell-1";
var node__8955__auto___11274 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11273);
if(cljs.core.truth_(node__8955__auto___11274)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11273;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8592__auto___11275 = "1";
var actual__8593__auto___11276 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__8592__auto___11275,actual__8593__auto___11276)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8592__auto___11275;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8593__auto___11276;
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
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__11057);
}});})(_STAR_parent_description_STAR__orig_val__11041_11241,_STAR_parent_description_STAR__temp_val__11042_11242,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false)],null)));
var chunk__11044_11244 = null;
var count__11045_11245 = (0);
var i__11046_11246 = (0);
while(true){
if((i__11046_11246 < count__11045_11245)){
var component__8451__auto___11277 = cljs.core._nth.call(null,chunk__11044_11244,i__11046_11246);
speclj.components.install.call(null,component__8451__auto___11277,description__8450__auto____$1);


var G__11278 = seq__11043_11243;
var G__11279 = chunk__11044_11244;
var G__11280 = count__11045_11245;
var G__11281 = (i__11046_11246 + (1));
seq__11043_11243 = G__11278;
chunk__11044_11244 = G__11279;
count__11045_11245 = G__11280;
i__11046_11246 = G__11281;
continue;
} else {
var temp__5825__auto___11282 = cljs.core.seq.call(null,seq__11043_11243);
if(temp__5825__auto___11282){
var seq__11043_11283__$1 = temp__5825__auto___11282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11043_11283__$1)){
var c__5548__auto___11284 = cljs.core.chunk_first.call(null,seq__11043_11283__$1);
var G__11285 = cljs.core.chunk_rest.call(null,seq__11043_11283__$1);
var G__11286 = c__5548__auto___11284;
var G__11287 = cljs.core.count.call(null,c__5548__auto___11284);
var G__11288 = (0);
seq__11043_11243 = G__11285;
chunk__11044_11244 = G__11286;
count__11045_11245 = G__11287;
i__11046_11246 = G__11288;
continue;
} else {
var component__8451__auto___11289 = cljs.core.first.call(null,seq__11043_11283__$1);
speclj.components.install.call(null,component__8451__auto___11289,description__8450__auto____$1);


var G__11290 = cljs.core.next.call(null,seq__11043_11283__$1);
var G__11291 = null;
var G__11292 = (0);
var G__11293 = (0);
seq__11043_11243 = G__11290;
chunk__11044_11244 = G__11291;
count__11045_11245 = G__11292;
i__11046_11246 = G__11293;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11041_11241);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})(),(function (){var description__8450__auto____$1 = speclj.components.new_description.call(null,"game over",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__11059_11294 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11060_11295 = description__8450__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11060_11295);

try{var seq__11061_11296 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11059_11294,_STAR_parent_description_STAR__temp_val__11060_11295,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11059_11294,_STAR_parent_description_STAR__temp_val__11060_11295,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
),speclj.components.new_characteristic.call(null,"displays winning bard",((function (_STAR_parent_description_STAR__orig_val__11059_11294,_STAR_parent_description_STAR__temp_val__11060_11295,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
var value__8954__auto___11300 = "#main-container";
var node__8955__auto___11301 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11300);
if(cljs.core.truth_(node__8955__auto___11301)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11300;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__8954__auto___11302 = ".cell";
var node__8955__auto___11303 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11302);
if(cljs.core.truth_(node__8955__auto___11303)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11302;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___11304 = "Game Over!";
var actual__8644__auto___11305 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__8644__auto___11305 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___11304 === 'string') && (typeof actual__8644__auto___11305 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___11305,expected__8643__auto___11304) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11305;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___11304)) && (typeof actual__8644__auto___11305 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___11304,actual__8644__auto___11305))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___11305;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___11304;
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
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___11305)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___11305,expected__8643__auto___11304)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11305;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___11305)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___11304,p1__8642__8645__auto__);
}),actual__8644__auto___11305))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11305;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___11304;
var b__8572__auto__ = actual__8644__auto___11305;
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
});})(_STAR_parent_description_STAR__orig_val__11059_11294,_STAR_parent_description_STAR__temp_val__11060_11295,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false),speclj.components.new_characteristic.call(null,"displays tie game",((function (_STAR_parent_description_STAR__orig_val__11059_11294,_STAR_parent_description_STAR__temp_val__11060_11295,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null)], null)));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__8954__auto___11306 = "#main-container";
var node__8955__auto___11307 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11306);
if(cljs.core.truth_(node__8955__auto___11307)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11306;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__8954__auto___11308 = ".cell";
var node__8955__auto___11309 = c3kit.wire.spec_helper.select.call(null,value__8954__auto___11308);
if(cljs.core.truth_(node__8955__auto___11309)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8954__auto___11308;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8643__auto___11310 = "Game Over!";
var actual__8644__auto___11311 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__8644__auto___11311 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11310;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8643__auto___11310 === 'string') && (typeof actual__8644__auto___11311 === 'string'))){
if((clojure.string.index_of.call(null,actual__8644__auto___11311,expected__8643__auto___11310) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11310;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11311;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8643__auto___11310)) && (typeof actual__8644__auto___11311 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8643__auto___11310,actual__8644__auto___11311))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8644__auto___11311;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8643__auto___11310;
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
if(cljs.core.map_QMARK_.call(null,actual__8644__auto___11311)){
if(cljs.core.contains_QMARK_.call(null,actual__8644__auto___11311,expected__8643__auto___11310)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11310;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11311;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8644__auto___11311)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8642__8645__auto__){
return cljs.core._EQ_.call(null,expected__8643__auto___11310,p1__8642__8645__auto__);
}),actual__8644__auto___11311))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8643__auto___11310;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8644__auto___11311;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8560__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8560__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8571__auto__ = expected__8643__auto___11310;
var b__8572__auto__ = actual__8644__auto___11311;
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
});})(_STAR_parent_description_STAR__orig_val__11059_11294,_STAR_parent_description_STAR__temp_val__11060_11295,description__8450__auto____$1,_STAR_parent_description_STAR__orig_val__10859_11066,_STAR_parent_description_STAR__temp_val__10860_11067,description__8450__auto___11065))
,false)],null)));
var chunk__11062_11297 = null;
var count__11063_11298 = (0);
var i__11064_11299 = (0);
while(true){
if((i__11064_11299 < count__11063_11298)){
var component__8451__auto___11312 = cljs.core._nth.call(null,chunk__11062_11297,i__11064_11299);
speclj.components.install.call(null,component__8451__auto___11312,description__8450__auto____$1);


var G__11313 = seq__11061_11296;
var G__11314 = chunk__11062_11297;
var G__11315 = count__11063_11298;
var G__11316 = (i__11064_11299 + (1));
seq__11061_11296 = G__11313;
chunk__11062_11297 = G__11314;
count__11063_11298 = G__11315;
i__11064_11299 = G__11316;
continue;
} else {
var temp__5825__auto___11317 = cljs.core.seq.call(null,seq__11061_11296);
if(temp__5825__auto___11317){
var seq__11061_11318__$1 = temp__5825__auto___11317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11061_11318__$1)){
var c__5548__auto___11319 = cljs.core.chunk_first.call(null,seq__11061_11318__$1);
var G__11320 = cljs.core.chunk_rest.call(null,seq__11061_11318__$1);
var G__11321 = c__5548__auto___11319;
var G__11322 = cljs.core.count.call(null,c__5548__auto___11319);
var G__11323 = (0);
seq__11061_11296 = G__11320;
chunk__11062_11297 = G__11321;
count__11063_11298 = G__11322;
i__11064_11299 = G__11323;
continue;
} else {
var component__8451__auto___11324 = cljs.core.first.call(null,seq__11061_11318__$1);
speclj.components.install.call(null,component__8451__auto___11324,description__8450__auto____$1);


var G__11325 = cljs.core.next.call(null,seq__11061_11318__$1);
var G__11326 = null;
var G__11327 = (0);
var G__11328 = (0);
seq__11061_11296 = G__11325;
chunk__11062_11297 = G__11326;
count__11063_11298 = G__11327;
i__11064_11299 = G__11328;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11059_11294);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto____$1);
}

return description__8450__auto____$1;
})()],null)));
var chunk__10862_11069 = null;
var count__10863_11070 = (0);
var i__10864_11071 = (0);
while(true){
if((i__10864_11071 < count__10863_11070)){
var component__8451__auto___11329 = cljs.core._nth.call(null,chunk__10862_11069,i__10864_11071);
speclj.components.install.call(null,component__8451__auto___11329,description__8450__auto___11065);


var G__11330 = seq__10861_11068;
var G__11331 = chunk__10862_11069;
var G__11332 = count__10863_11070;
var G__11333 = (i__10864_11071 + (1));
seq__10861_11068 = G__11330;
chunk__10862_11069 = G__11331;
count__10863_11070 = G__11332;
i__10864_11071 = G__11333;
continue;
} else {
var temp__5825__auto___11334 = cljs.core.seq.call(null,seq__10861_11068);
if(temp__5825__auto___11334){
var seq__10861_11335__$1 = temp__5825__auto___11334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10861_11335__$1)){
var c__5548__auto___11336 = cljs.core.chunk_first.call(null,seq__10861_11335__$1);
var G__11337 = cljs.core.chunk_rest.call(null,seq__10861_11335__$1);
var G__11338 = c__5548__auto___11336;
var G__11339 = cljs.core.count.call(null,c__5548__auto___11336);
var G__11340 = (0);
seq__10861_11068 = G__11337;
chunk__10862_11069 = G__11338;
count__10863_11070 = G__11339;
i__10864_11071 = G__11340;
continue;
} else {
var component__8451__auto___11341 = cljs.core.first.call(null,seq__10861_11335__$1);
speclj.components.install.call(null,component__8451__auto___11341,description__8450__auto___11065);


var G__11342 = cljs.core.next.call(null,seq__10861_11335__$1);
var G__11343 = null;
var G__11344 = (0);
var G__11345 = (0);
seq__10861_11068 = G__11342;
chunk__10862_11069 = G__11343;
count__10863_11070 = G__11344;
i__10864_11071 = G__11345;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10859_11066);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8450__auto___11065);
}


//# sourceMappingURL=html_spec.js.map
