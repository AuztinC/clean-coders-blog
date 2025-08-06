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
var vec__16794 = out;
var seq__16795 = cljs.core.seq.call(null,vec__16794);
var first__16796 = cljs.core.first.call(null,seq__16795);
var seq__16795__$1 = cljs.core.next.call(null,seq__16795);
var _tag = first__16796;
var first__16796__$1 = cljs.core.first.call(null,seq__16795__$1);
var seq__16795__$2 = cljs.core.next.call(null,seq__16795__$1);
var _attrs = first__16796__$1;
var rows = seq__16795__$2;
var row_count = cljs.core.count.call(null,rows);
var column_count = cljs.core.count.call(null,cljs.core.drop.call(null,(2),cljs.core.first.call(null,rows)));
var cell_count = (row_count * column_count);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count,new cljs.core.Keyword(null,"cell-count","cell-count",-441457582),cell_count], null);
});
var description__8468__auto___17008 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16809_17009 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16810_17010 = description__8468__auto___17008;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16810_17010);

try{var seq__16811_17011 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (it__8842__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__16920 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__16921 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__16921);

try{return it__8842__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__16920);
}});})(_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (it__8535__auto__){
var auto_advance_orig_val__16922 = tic_tac_toe.setup.auto_advance;
var auto_advance_temp_val__16923 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"auto-advance","auto-advance",930772766),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setup.auto_advance = auto_advance_temp_val__16923);

try{return it__8535__auto__.call(null);
}finally {(tic_tac_toe.setup.auto_advance = auto_advance_orig_val__16922);
}});})(_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),(function (){var description__8468__auto____$1 = speclj.components.new_description.call(null,"updated state atom with screen on click",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16924_17015 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16925_17016 = description__8468__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16925_17016);

try{var seq__16926_17017 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__8468__auto____$2 = speclj.components.new_description.call(null,"reset btn",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16948_17021 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16949_17022 = description__8468__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16949_17022);

try{var seq__16950_17023 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16948_17021,_STAR_parent_description_STAR__temp_val__16949_17022,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__16948_17021,_STAR_parent_description_STAR__temp_val__16949_17022,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_characteristic.call(null,"displays btn when :players exist",((function (_STAR_parent_description_STAR__orig_val__16948_17021,_STAR_parent_description_STAR__temp_val__16949_17022,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var value__8972__auto__ = "#reset-btn";
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
});})(_STAR_parent_description_STAR__orig_val__16948_17021,_STAR_parent_description_STAR__temp_val__16949_17022,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"resets state when click",((function (_STAR_parent_description_STAR__orig_val__16948_17021,_STAR_parent_description_STAR__temp_val__16949_17022,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#reset-btn");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = tic_tac_toe.setup.starting_state;
var actual__8611__auto__ = cljs.core.deref.call(null,tic_tac_toe.setup.state);
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16948_17021,_STAR_parent_description_STAR__temp_val__16949_17022,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false)],null)));
var chunk__16951_17024 = null;
var count__16952_17025 = (0);
var i__16953_17026 = (0);
while(true){
if((i__16953_17026 < count__16952_17025)){
var component__8469__auto___17027 = cljs.core._nth.call(null,chunk__16951_17024,i__16953_17026);
speclj.components.install.call(null,component__8469__auto___17027,description__8468__auto____$2);


var G__17028 = seq__16950_17023;
var G__17029 = chunk__16951_17024;
var G__17030 = count__16952_17025;
var G__17031 = (i__16953_17026 + (1));
seq__16950_17023 = G__17028;
chunk__16951_17024 = G__17029;
count__16952_17025 = G__17030;
i__16953_17026 = G__17031;
continue;
} else {
var temp__5825__auto___17032 = cljs.core.seq.call(null,seq__16950_17023);
if(temp__5825__auto___17032){
var seq__16950_17033__$1 = temp__5825__auto___17032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16950_17033__$1)){
var c__5548__auto___17034 = cljs.core.chunk_first.call(null,seq__16950_17033__$1);
var G__17035 = cljs.core.chunk_rest.call(null,seq__16950_17033__$1);
var G__17036 = c__5548__auto___17034;
var G__17037 = cljs.core.count.call(null,c__5548__auto___17034);
var G__17038 = (0);
seq__16950_17023 = G__17035;
chunk__16951_17024 = G__17036;
count__16952_17025 = G__17037;
i__16953_17026 = G__17038;
continue;
} else {
var component__8469__auto___17039 = cljs.core.first.call(null,seq__16950_17033__$1);
speclj.components.install.call(null,component__8469__auto___17039,description__8468__auto____$2);


var G__17040 = cljs.core.next.call(null,seq__16950_17033__$1);
var G__17041 = null;
var G__17042 = (0);
var G__17043 = (0);
seq__16950_17023 = G__17040;
chunk__16951_17024 = G__17041;
count__16952_17025 = G__17042;
i__16953_17026 = G__17043;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16948_17021);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$2);
}

return description__8468__auto____$2;
})(),(function (){var description__8468__auto____$2 = speclj.components.new_description.call(null,"select-game-mode",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16954_17044 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16955_17045 = description__8468__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16955_17045);

try{var seq__16956_17046 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"clicking Human vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17050 = "Human vs AI";
var actual__8611__auto___17051 = c3kit.wire.spec_helper.text.call(null,"#human-vs-ai");
if(cljs.core._EQ_.call(null,expected__8610__auto___17050,actual__8611__auto___17051)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17050;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17051;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17052 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8611__auto___17053 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17052,actual__8611__auto___17053)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17052;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17053;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__8611__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17054 = "AI vs Human";
var actual__8611__auto___17055 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-human");
if(cljs.core._EQ_.call(null,expected__8610__auto___17054,actual__8611__auto___17055)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17054;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17055;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17056 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8611__auto___17057 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17056,actual__8611__auto___17057)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17056;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17057;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__8611__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"clicking Human vs Human sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17058 = "Human vs Human";
var actual__8611__auto___17059 = c3kit.wire.spec_helper.text.call(null,"#human-vs-human");
if(cljs.core._EQ_.call(null,expected__8610__auto___17058,actual__8611__auto___17059)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17058;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17059;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#human-vs-human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17060 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8611__auto___17061 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17060,actual__8611__auto___17061)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17060;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17061;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__8611__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"clicking AI vs AI sets screen to :select-board",((function (_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17062 = "AI vs AI";
var actual__8611__auto___17063 = c3kit.wire.spec_helper.text.call(null,"#ai-vs-ai");
if(cljs.core._EQ_.call(null,expected__8610__auto___17062,actual__8611__auto___17063)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17062;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17063;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#ai-vs-ai");

var out = cljs.core.deref.call(null,tic_tac_toe.setup.state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17064 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__8611__auto___17065 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17064,actual__8611__auto___17065)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17064;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17065;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null);
var actual__8611__auto__ = new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16954_17044,_STAR_parent_description_STAR__temp_val__16955_17045,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false)],null)));
var chunk__16957_17047 = null;
var count__16958_17048 = (0);
var i__16959_17049 = (0);
while(true){
if((i__16959_17049 < count__16958_17048)){
var component__8469__auto___17066 = cljs.core._nth.call(null,chunk__16957_17047,i__16959_17049);
speclj.components.install.call(null,component__8469__auto___17066,description__8468__auto____$2);


var G__17067 = seq__16956_17046;
var G__17068 = chunk__16957_17047;
var G__17069 = count__16958_17048;
var G__17070 = (i__16959_17049 + (1));
seq__16956_17046 = G__17067;
chunk__16957_17047 = G__17068;
count__16958_17048 = G__17069;
i__16959_17049 = G__17070;
continue;
} else {
var temp__5825__auto___17071 = cljs.core.seq.call(null,seq__16956_17046);
if(temp__5825__auto___17071){
var seq__16956_17072__$1 = temp__5825__auto___17071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16956_17072__$1)){
var c__5548__auto___17073 = cljs.core.chunk_first.call(null,seq__16956_17072__$1);
var G__17074 = cljs.core.chunk_rest.call(null,seq__16956_17072__$1);
var G__17075 = c__5548__auto___17073;
var G__17076 = cljs.core.count.call(null,c__5548__auto___17073);
var G__17077 = (0);
seq__16956_17046 = G__17074;
chunk__16957_17047 = G__17075;
count__16958_17048 = G__17076;
i__16959_17049 = G__17077;
continue;
} else {
var component__8469__auto___17078 = cljs.core.first.call(null,seq__16956_17072__$1);
speclj.components.install.call(null,component__8469__auto___17078,description__8468__auto____$2);


var G__17079 = cljs.core.next.call(null,seq__16956_17072__$1);
var G__17080 = null;
var G__17081 = (0);
var G__17082 = (0);
seq__16956_17046 = G__17079;
chunk__16957_17047 = G__17080;
count__16958_17048 = G__17081;
i__16959_17049 = G__17082;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16954_17044);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$2);
}

return description__8468__auto____$2;
})(),(function (){var description__8468__auto____$2 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16960_17083 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16961_17084 = description__8468__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16961_17084);

try{var seq__16962_17085 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var value__8972__auto___17089 = "#board-3x3";
var node__8973__auto___17090 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17089);
if(cljs.core.truth_(node__8973__auto___17090)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17089;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17091 = "3x3";
var actual__8611__auto___17092 = c3kit.wire.spec_helper.text.call(null,"#board-3x3");
if(cljs.core._EQ_.call(null,expected__8610__auto___17091,actual__8611__auto___17092)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17091;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17092;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17093 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8611__auto___17094 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17093,actual__8611__auto___17094)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17093;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17094;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17095 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__8611__auto___17096 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17095,actual__8611__auto___17096)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17095;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17096;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__8611__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"4x4",((function (_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var value__8972__auto___17097 = "#board-4x4";
var node__8973__auto___17098 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17097);
if(cljs.core.truth_(node__8973__auto___17098)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17097;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17099 = "4x4";
var actual__8611__auto___17100 = c3kit.wire.spec_helper.text.call(null,"#board-4x4");
if(cljs.core._EQ_.call(null,expected__8610__auto___17099,actual__8611__auto___17100)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17099;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17100;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17101 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8611__auto___17102 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17101,actual__8611__auto___17102)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17101;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17102;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17103 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__8611__auto___17104 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17103,actual__8611__auto___17104)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17103;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17104;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__8611__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"3x3x3",((function (_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var value__8972__auto___17105 = "#board-3x3x3";
var node__8973__auto___17106 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17105);
if(cljs.core.truth_(node__8973__auto___17106)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17105;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17107 = "3x3x3";
var actual__8611__auto___17108 = c3kit.wire.spec_helper.text.call(null,"#board-3x3x3");
if(cljs.core._EQ_.call(null,expected__8610__auto___17107,actual__8611__auto___17108)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17107;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17108;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17109 = new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984);
var actual__8611__auto___17110 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17109,actual__8611__auto___17110)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17109;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17110;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17111 = new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540);
var actual__8611__auto___17112 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto___17111,actual__8611__auto___17112)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17111;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17112;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
var actual__8611__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"skips difficulty if HvH",((function (_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__8972__auto___17113 = "#board-3x3";
var node__8973__auto___17114 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17113);
if(cljs.core.truth_(node__8973__auto___17114)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17113;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = new cljs.core.Keyword(null,"game","game",-441523833);
var actual__8611__auto__ = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16960_17083,_STAR_parent_description_STAR__temp_val__16961_17084,description__8468__auto____$2,_STAR_parent_description_STAR__orig_val__16924_17015,_STAR_parent_description_STAR__temp_val__16925_17016,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false)],null)));
var chunk__16963_17086 = null;
var count__16964_17087 = (0);
var i__16965_17088 = (0);
while(true){
if((i__16965_17088 < count__16964_17087)){
var component__8469__auto___17115 = cljs.core._nth.call(null,chunk__16963_17086,i__16965_17088);
speclj.components.install.call(null,component__8469__auto___17115,description__8468__auto____$2);


var G__17116 = seq__16962_17085;
var G__17117 = chunk__16963_17086;
var G__17118 = count__16964_17087;
var G__17119 = (i__16965_17088 + (1));
seq__16962_17085 = G__17116;
chunk__16963_17086 = G__17117;
count__16964_17087 = G__17118;
i__16965_17088 = G__17119;
continue;
} else {
var temp__5825__auto___17120 = cljs.core.seq.call(null,seq__16962_17085);
if(temp__5825__auto___17120){
var seq__16962_17121__$1 = temp__5825__auto___17120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16962_17121__$1)){
var c__5548__auto___17122 = cljs.core.chunk_first.call(null,seq__16962_17121__$1);
var G__17123 = cljs.core.chunk_rest.call(null,seq__16962_17121__$1);
var G__17124 = c__5548__auto___17122;
var G__17125 = cljs.core.count.call(null,c__5548__auto___17122);
var G__17126 = (0);
seq__16962_17085 = G__17123;
chunk__16963_17086 = G__17124;
count__16964_17087 = G__17125;
i__16965_17088 = G__17126;
continue;
} else {
var component__8469__auto___17127 = cljs.core.first.call(null,seq__16962_17121__$1);
speclj.components.install.call(null,component__8469__auto___17127,description__8468__auto____$2);


var G__17128 = cljs.core.next.call(null,seq__16962_17121__$1);
var G__17129 = null;
var G__17130 = (0);
var G__17131 = (0);
seq__16962_17085 = G__17128;
chunk__16963_17086 = G__17129;
count__16964_17087 = G__17130;
i__16965_17088 = G__17131;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16960_17083);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$2);
}

return description__8468__auto____$2;
})()],null)));
var chunk__16927_17018 = null;
var count__16928_17019 = (0);
var i__16929_17020 = (0);
while(true){
if((i__16929_17020 < count__16928_17019)){
var component__8469__auto___17132 = cljs.core._nth.call(null,chunk__16927_17018,i__16929_17020);
speclj.components.install.call(null,component__8469__auto___17132,description__8468__auto____$1);


var G__17133 = seq__16926_17017;
var G__17134 = chunk__16927_17018;
var G__17135 = count__16928_17019;
var G__17136 = (i__16929_17020 + (1));
seq__16926_17017 = G__17133;
chunk__16927_17018 = G__17134;
count__16928_17019 = G__17135;
i__16929_17020 = G__17136;
continue;
} else {
var temp__5825__auto___17137 = cljs.core.seq.call(null,seq__16926_17017);
if(temp__5825__auto___17137){
var seq__16926_17138__$1 = temp__5825__auto___17137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16926_17138__$1)){
var c__5548__auto___17139 = cljs.core.chunk_first.call(null,seq__16926_17138__$1);
var G__17140 = cljs.core.chunk_rest.call(null,seq__16926_17138__$1);
var G__17141 = c__5548__auto___17139;
var G__17142 = cljs.core.count.call(null,c__5548__auto___17139);
var G__17143 = (0);
seq__16926_17017 = G__17140;
chunk__16927_17018 = G__17141;
count__16928_17019 = G__17142;
i__16929_17020 = G__17143;
continue;
} else {
var component__8469__auto___17144 = cljs.core.first.call(null,seq__16926_17138__$1);
speclj.components.install.call(null,component__8469__auto___17144,description__8468__auto____$1);


var G__17145 = cljs.core.next.call(null,seq__16926_17138__$1);
var G__17146 = null;
var G__17147 = (0);
var G__17148 = (0);
seq__16926_17017 = G__17145;
chunk__16927_17018 = G__17146;
count__16928_17019 = G__17147;
i__16929_17020 = G__17148;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16924_17015);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$1);
}

return description__8468__auto____$1;
})(),(function (){var description__8468__auto____$1 = speclj.components.new_description.call(null,"calls select-difficulty with correct key",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16966_17149 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16967_17150 = description__8468__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16967_17150);

try{var seq__16968_17151 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var select_difficulty_BANG__orig_val__16978 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__16979 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__16979);

try{var value__8972__auto___17155 = "#easy";
var node__8973__auto___17156 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17155);
if(cljs.core.truth_(node__8973__auto___17156)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17155;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17157 = "Easy";
var actual__8611__auto___17158 = c3kit.wire.spec_helper.text.call(null,"#easy");
if(cljs.core._EQ_.call(null,expected__8610__auto___17157,actual__8611__auto___17158)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17157;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17158;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#easy");

speclj.components.inc_assertions_BANG_.call(null);

var name__8856__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__8857__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null);
var invocations__8858__auto__ = speclj.stub.invocations_of.call(null,name__8856__auto__);
var times__8859__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var times_QMARK___8860__auto__ = typeof times__8859__auto__ === 'number';
var check_params_QMARK___8861__auto__ = cljs.core.contains_QMARK_.call(null,options__8857__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8862__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var with__8862__auto____$1 = (((with__8862__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8862__auto__);
var invocations_str__8863__auto__ = (function (p1__8853__8864__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8853__8864__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8860__auto__) && (check_params_QMARK___8861__auto__))){
var matching_invocations__8865__auto__ = cljs.core.filter.call(null,(function (p1__8854__8866__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8854__8866__auto__);
}),invocations__8858__auto__);
var matching_count__8867__auto__ = cljs.core.count.call(null,matching_invocations__8865__auto__);
if(cljs.core._EQ_.call(null,times__8859__auto__,matching_count__8867__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8867__auto__)," ",invocations_str__8863__auto__.call(null,matching_count__8867__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8861__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8855__8868__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8855__8868__auto__);
}),invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8858__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8860__auto__){
if(cljs.core._EQ_.call(null,times__8859__auto__,cljs.core.count.call(null,invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8858__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__16978);
}});})(_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var select_difficulty_BANG__orig_val__16980 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__16981 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__16981);

try{var value__8972__auto___17159 = "#medium";
var node__8973__auto___17160 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17159);
if(cljs.core.truth_(node__8973__auto___17160)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17159;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17161 = "Medium";
var actual__8611__auto___17162 = c3kit.wire.spec_helper.text.call(null,"#medium");
if(cljs.core._EQ_.call(null,expected__8610__auto___17161,actual__8611__auto___17162)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17161;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17162;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#medium");

speclj.components.inc_assertions_BANG_.call(null);

var name__8856__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__8857__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.setup.state,new cljs.core.Keyword(null,"medium","medium",-1864319384)], null)], null);
var invocations__8858__auto__ = speclj.stub.invocations_of.call(null,name__8856__auto__);
var times__8859__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var times_QMARK___8860__auto__ = typeof times__8859__auto__ === 'number';
var check_params_QMARK___8861__auto__ = cljs.core.contains_QMARK_.call(null,options__8857__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8862__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var with__8862__auto____$1 = (((with__8862__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8862__auto__);
var invocations_str__8863__auto__ = (function (p1__8853__8864__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8853__8864__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8860__auto__) && (check_params_QMARK___8861__auto__))){
var matching_invocations__8865__auto__ = cljs.core.filter.call(null,(function (p1__8854__8866__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8854__8866__auto__);
}),invocations__8858__auto__);
var matching_count__8867__auto__ = cljs.core.count.call(null,matching_invocations__8865__auto__);
if(cljs.core._EQ_.call(null,times__8859__auto__,matching_count__8867__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8867__auto__)," ",invocations_str__8863__auto__.call(null,matching_count__8867__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8861__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8855__8868__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8855__8868__auto__);
}),invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8858__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8860__auto__){
if(cljs.core._EQ_.call(null,times__8859__auto__,cljs.core.count.call(null,invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8858__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__16980);
}});})(_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var select_difficulty_BANG__orig_val__16982 = tic_tac_toe.setupc.select_difficulty_BANG_;
var select_difficulty_BANG__temp_val__16983 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997),cljs.core.PersistentArrayMap.EMPTY);
(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__temp_val__16983);

try{var value__8972__auto___17163 = "#hard";
var node__8973__auto___17164 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17163);
if(cljs.core.truth_(node__8973__auto___17164)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17163;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17165 = "Hard";
var actual__8611__auto___17166 = c3kit.wire.spec_helper.text.call(null,"#hard");
if(cljs.core._EQ_.call(null,expected__8610__auto___17165,actual__8611__auto___17166)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17165;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#hard");

speclj.components.inc_assertions_BANG_.call(null);

var name__8856__auto__ = new cljs.core.Keyword(null,"select-difficulty!","select-difficulty!",198330997);
var options__8857__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.setup.state,new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null);
var invocations__8858__auto__ = speclj.stub.invocations_of.call(null,name__8856__auto__);
var times__8859__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var times_QMARK___8860__auto__ = typeof times__8859__auto__ === 'number';
var check_params_QMARK___8861__auto__ = cljs.core.contains_QMARK_.call(null,options__8857__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8862__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var with__8862__auto____$1 = (((with__8862__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8862__auto__);
var invocations_str__8863__auto__ = (function (p1__8853__8864__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8853__8864__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8860__auto__) && (check_params_QMARK___8861__auto__))){
var matching_invocations__8865__auto__ = cljs.core.filter.call(null,(function (p1__8854__8866__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8854__8866__auto__);
}),invocations__8858__auto__);
var matching_count__8867__auto__ = cljs.core.count.call(null,matching_invocations__8865__auto__);
if(cljs.core._EQ_.call(null,times__8859__auto__,matching_count__8867__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8867__auto__)," ",invocations_str__8863__auto__.call(null,matching_count__8867__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8861__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8855__8868__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8855__8868__auto__);
}),invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8858__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8860__auto__){
if(cljs.core._EQ_.call(null,times__8859__auto__,cljs.core.count.call(null,invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8858__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.setupc.select_difficulty_BANG_ = select_difficulty_BANG__orig_val__16982);
}});})(_STAR_parent_description_STAR__orig_val__16966_17149,_STAR_parent_description_STAR__temp_val__16967_17150,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false)],null)));
var chunk__16969_17152 = null;
var count__16970_17153 = (0);
var i__16971_17154 = (0);
while(true){
if((i__16971_17154 < count__16970_17153)){
var component__8469__auto___17167 = cljs.core._nth.call(null,chunk__16969_17152,i__16971_17154);
speclj.components.install.call(null,component__8469__auto___17167,description__8468__auto____$1);


var G__17168 = seq__16968_17151;
var G__17169 = chunk__16969_17152;
var G__17170 = count__16970_17153;
var G__17171 = (i__16971_17154 + (1));
seq__16968_17151 = G__17168;
chunk__16969_17152 = G__17169;
count__16970_17153 = G__17170;
i__16971_17154 = G__17171;
continue;
} else {
var temp__5825__auto___17172 = cljs.core.seq.call(null,seq__16968_17151);
if(temp__5825__auto___17172){
var seq__16968_17173__$1 = temp__5825__auto___17172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16968_17173__$1)){
var c__5548__auto___17174 = cljs.core.chunk_first.call(null,seq__16968_17173__$1);
var G__17175 = cljs.core.chunk_rest.call(null,seq__16968_17173__$1);
var G__17176 = c__5548__auto___17174;
var G__17177 = cljs.core.count.call(null,c__5548__auto___17174);
var G__17178 = (0);
seq__16968_17151 = G__17175;
chunk__16969_17152 = G__17176;
count__16970_17153 = G__17177;
i__16971_17154 = G__17178;
continue;
} else {
var component__8469__auto___17179 = cljs.core.first.call(null,seq__16968_17173__$1);
speclj.components.install.call(null,component__8469__auto___17179,description__8468__auto____$1);


var G__17180 = cljs.core.next.call(null,seq__16968_17173__$1);
var G__17181 = null;
var G__17182 = (0);
var G__17183 = (0);
seq__16968_17151 = G__17180;
chunk__16969_17152 = G__17181;
count__16970_17153 = G__17182;
i__16971_17154 = G__17183;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16966_17149);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$1);
}

return description__8468__auto____$1;
})(),(function (){var description__8468__auto____$1 = speclj.components.new_description.call(null,"drawing board",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__16984_17184 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16985_17185 = description__8468__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16985_17185);

try{var seq__16986_17186 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,9,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (it__8535__auto__){
var check_winner_orig_val__16996 = tic_tac_toe.board.check_winner;
var check_winner_temp_val__16997 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"check-winner","check-winner",1536860418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),false], null));
(tic_tac_toe.board.check_winner = check_winner_temp_val__16997);

try{return it__8535__auto__.call(null);
}finally {(tic_tac_toe.board.check_winner = check_winner_orig_val__16996);
}});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_characteristic.call(null,"render-cell returns td with value",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var out = tic_tac_toe.html.render_cell.call(null,"index");
speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto___17190 = new cljs.core.Keyword(null,"td","td",1479933353);
var actual__8662__auto___17191 = out;
if((actual__8662__auto___17191 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17190;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto___17190 === 'string') && (typeof actual__8662__auto___17191 === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto___17191,expected__8661__auto___17190) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17190;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17191;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto___17190)) && (typeof actual__8662__auto___17191 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto___17190,actual__8662__auto___17191))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto___17191;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto___17190;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto___17191)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto___17191,expected__8661__auto___17190)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17190;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17191;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto___17191)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto___17190,p1__8660__8663__auto__);
}),actual__8662__auto___17191))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17190;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17191;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto___17190;
var b__8590__auto__ = actual__8662__auto___17191;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto__ = "index";
var actual__8662__auto__ = out;
if((actual__8662__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto__ === 'string') && (typeof actual__8662__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto__,expected__8661__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto__)) && (typeof actual__8662__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto__,actual__8662__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto__,expected__8661__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto__,p1__8660__8663__auto__);
}),actual__8662__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto__;
var b__8590__auto__ = actual__8662__auto__;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"render-board returns table with value",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var out = tic_tac_toe.html.render_board.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto__ = new cljs.core.Keyword(null,"tbody","tbody",-80678300);
var actual__8662__auto__ = out;
if((actual__8662__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto__ === 'string') && (typeof actual__8662__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto__,expected__8661__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto__)) && (typeof actual__8662__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto__,actual__8662__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto__,expected__8661__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto__,p1__8660__8663__auto__);
}),actual__8662__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto__;
var b__8590__auto__ = actual__8662__auto__;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"gives nine cells for 3x3",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17192 = (3);
var actual__8611__auto___17193 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17192,actual__8611__auto___17193)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17192;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17193;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17194 = (3);
var actual__8611__auto___17195 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17194,actual__8611__auto___17195)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17194;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17195;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = (9);
var actual__8611__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"gives 16 cells for 4x4",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17196 = (4);
var actual__8611__auto___17197 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17196,actual__8611__auto___17197)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17196;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17197;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17198 = (4);
var actual__8611__auto___17199 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17198,actual__8611__auto___17199)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17198;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17199;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = (16);
var actual__8611__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"gives 27 cells for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var out = tic_tac_toe.html_spec.cell_count.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17200 = (3);
var actual__8611__auto___17201 = new cljs.core.Keyword(null,"row-count","row-count",1060167988).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17200,actual__8611__auto___17201)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17200;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17201;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17202 = (9);
var actual__8611__auto___17203 = new cljs.core.Keyword(null,"column-count","column-count",1235131236).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto___17202,actual__8611__auto___17203)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17202;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17203;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto__ = (27);
var actual__8611__auto__ = new cljs.core.Keyword(null,"cell-count","cell-count",-441457582).cljs$core$IFn$_invoke$arity$1(out);
if(cljs.core._EQ_.call(null,expected__8610__auto__,actual__8611__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var apply_human_move_orig_val__16998 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__16999 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__16999);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__8972__auto___17204 = "#cell-1";
var node__8973__auto___17205 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17204);
if(cljs.core.truth_(node__8973__auto___17205)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17204;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17206 = "grey";
var actual__8611__auto___17207 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","background-color");
if(cljs.core._EQ_.call(null,expected__8610__auto___17206,actual__8611__auto___17207)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17206;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17207;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17208 = "60px";
var actual__8611__auto___17209 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","width");
if(cljs.core._EQ_.call(null,expected__8610__auto___17208,actual__8611__auto___17209)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17208;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17209;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17210 = "60px";
var actual__8611__auto___17211 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","height");
if(cljs.core._EQ_.call(null,expected__8610__auto___17210,actual__8611__auto___17211)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17210;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17211;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17212 = "pointer";
var actual__8611__auto___17213 = tic_tac_toe.html_spec.cssfn.call(null,"#cell-1","cursor");
if(cljs.core._EQ_.call(null,expected__8610__auto___17212,actual__8611__auto___17213)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17212;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17213;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17214 = "1";
var actual__8611__auto___17215 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__8610__auto___17214,actual__8611__auto___17215)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17214;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17215;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__8856__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__8857__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8858__auto__ = speclj.stub.invocations_of.call(null,name__8856__auto__);
var times__8859__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var times_QMARK___8860__auto__ = typeof times__8859__auto__ === 'number';
var check_params_QMARK___8861__auto__ = cljs.core.contains_QMARK_.call(null,options__8857__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8862__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8857__auto__);
var with__8862__auto____$1 = (((with__8862__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8862__auto__);
var invocations_str__8863__auto__ = (function (p1__8853__8864__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8853__8864__auto__)){
return "invocation";
} else {
return "invocations";
}
});
if(((times_QMARK___8860__auto__) && (check_params_QMARK___8861__auto__))){
var matching_invocations__8865__auto__ = cljs.core.filter.call(null,(function (p1__8854__8866__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8854__8866__auto__);
}),invocations__8858__auto__);
var matching_count__8867__auto__ = cljs.core.count.call(null,matching_invocations__8865__auto__);
if(cljs.core._EQ_.call(null,times__8859__auto__,matching_count__8867__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8867__auto__)," ",invocations_str__8863__auto__.call(null,matching_count__8867__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(check_params_QMARK___8861__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8855__8868__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8862__auto____$1,p1__8855__8868__auto__);
}),invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__)," with ",cljs.core.pr_str.call(null,with__8862__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8858__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(times_QMARK___8860__auto__){
if(cljs.core._EQ_.call(null,times__8859__auto__,cljs.core.count.call(null,invocations__8858__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8859__auto__)," ",invocations_str__8863__auto__.call(null,times__8859__auto__)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.seq.call(null,invocations__8858__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: an invocation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8856__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8858__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__16998);
}});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"click cell, css",((function (_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var apply_human_move_orig_val__17000 = tic_tac_toe.human_turn.apply_human_move;
var apply_human_move_temp_val__17001 = speclj.stub.stub.call(null,new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (state,_idx){
return state;
})], null));
(tic_tac_toe.human_turn.apply_human_move = apply_human_move_temp_val__17001);

try{cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544))], null));

var value__8972__auto___17216 = "#cell-1";
var node__8973__auto___17217 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17216);
if(cljs.core.truth_(node__8973__auto___17217)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17216;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8610__auto___17218 = "1";
var actual__8611__auto___17219 = c3kit.wire.spec_helper.text.call(null,"#cell-1");
if(cljs.core._EQ_.call(null,expected__8610__auto___17218,actual__8611__auto___17219)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8610__auto___17218;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8611__auto___17219;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-1");

speclj.components.inc_assertions_BANG_.call(null);

var name__8877__auto__ = new cljs.core.Keyword(null,"apply-human-move","apply-human-move",1906332819);
var options__8878__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var invocations__8879__auto__ = speclj.stub.invocations_of.call(null,name__8877__auto__);
var times__8880__auto__ = new cljs.core.Keyword(null,"times","times",1671571467).cljs$core$IFn$_invoke$arity$1(options__8878__auto__);
var times_QMARK___8881__auto__ = typeof times__8880__auto__ === 'number';
var check_params_QMARK___8882__auto__ = cljs.core.contains_QMARK_.call(null,options__8878__auto__,new cljs.core.Keyword(null,"with","with",-1536296876));
var with__8883__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(options__8878__auto__);
var with__8883__auto____$1 = (((with__8883__auto__ == null))?cljs.core.PersistentVector.EMPTY:with__8883__auto__);
var add_s__8884__auto__ = (function (p1__8874__8885__auto__){
if(cljs.core._EQ_.call(null,(1),p1__8874__8885__auto__)){
return "";
} else {
return "s";
}
});
if(((times_QMARK___8881__auto__) && (check_params_QMARK___8882__auto__))){
var matching_invocations__8886__auto__ = cljs.core.filter.call(null,(function (p1__8875__8887__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8883__auto____$1,p1__8875__8887__auto__);
}),invocations__8879__auto__);
var matching_count__8888__auto__ = cljs.core.count.call(null,matching_invocations__8886__auto__);
if(cljs.core._EQ_.call(null,times__8880__auto__,matching_count__8888__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8877__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8880__auto__)," time",add_s__8884__auto__.call(null,matching_count__8888__auto__)," with ",cljs.core.pr_str.call(null,with__8883__auto____$1),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matching_count__8888__auto__)," invocation",add_s__8884__auto__.call(null,matching_count__8888__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(times_QMARK___8881__auto__){
if(cljs.core._EQ_.call(null,times__8880__auto__,cljs.core.count.call(null,invocations__8879__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8877__auto__)," not to have been invoked ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8880__auto__)," time",add_s__8884__auto__.call(null,times__8880__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(times__8880__auto__)," invocation",add_s__8884__auto__.call(null,times__8880__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(check_params_QMARK___8882__auto__){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8876__8889__auto__){
return speclj.stub.params_match_QMARK_.call(null,with__8883__auto____$1,p1__8876__8889__auto__);
}),invocations__8879__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8877__auto__)," not to have been invoked with ",cljs.core.pr_str.call(null,with__8883__auto____$1),speclj.platform.endl,"     got: ",cljs.core.pr_str.call(null,invocations__8879__auto__)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.seq.call(null,invocations__8879__auto__)){
throw cljs.core.ex_info.call(null,["Expected: 0 invocations of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__8877__auto__),speclj.platform.endl,"     got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,invocations__8879__auto__))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}

}
}
}
}finally {(tic_tac_toe.human_turn.apply_human_move = apply_human_move_orig_val__17000);
}});})(_STAR_parent_description_STAR__orig_val__16984_17184,_STAR_parent_description_STAR__temp_val__16985_17185,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false)],null)));
var chunk__16987_17187 = null;
var count__16988_17188 = (0);
var i__16989_17189 = (0);
while(true){
if((i__16989_17189 < count__16988_17188)){
var component__8469__auto___17220 = cljs.core._nth.call(null,chunk__16987_17187,i__16989_17189);
speclj.components.install.call(null,component__8469__auto___17220,description__8468__auto____$1);


var G__17221 = seq__16986_17186;
var G__17222 = chunk__16987_17187;
var G__17223 = count__16988_17188;
var G__17224 = (i__16989_17189 + (1));
seq__16986_17186 = G__17221;
chunk__16987_17187 = G__17222;
count__16988_17188 = G__17223;
i__16989_17189 = G__17224;
continue;
} else {
var temp__5825__auto___17225 = cljs.core.seq.call(null,seq__16986_17186);
if(temp__5825__auto___17225){
var seq__16986_17226__$1 = temp__5825__auto___17225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16986_17226__$1)){
var c__5548__auto___17227 = cljs.core.chunk_first.call(null,seq__16986_17226__$1);
var G__17228 = cljs.core.chunk_rest.call(null,seq__16986_17226__$1);
var G__17229 = c__5548__auto___17227;
var G__17230 = cljs.core.count.call(null,c__5548__auto___17227);
var G__17231 = (0);
seq__16986_17186 = G__17228;
chunk__16987_17187 = G__17229;
count__16988_17188 = G__17230;
i__16989_17189 = G__17231;
continue;
} else {
var component__8469__auto___17232 = cljs.core.first.call(null,seq__16986_17226__$1);
speclj.components.install.call(null,component__8469__auto___17232,description__8468__auto____$1);


var G__17233 = cljs.core.next.call(null,seq__16986_17226__$1);
var G__17234 = null;
var G__17235 = (0);
var G__17236 = (0);
seq__16986_17186 = G__17233;
chunk__16987_17187 = G__17234;
count__16988_17188 = G__17235;
i__16989_17189 = G__17236;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16984_17184);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$1);
}

return description__8468__auto____$1;
})(),(function (){var description__8468__auto____$1 = speclj.components.new_description.call(null,"game over",false,"tic-tac-toe.html-spec");
var _STAR_parent_description_STAR__orig_val__17002_17237 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__17003_17238 = description__8468__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__17003_17238);

try{var seq__17004_17239 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__17002_17237,_STAR_parent_description_STAR__temp_val__17003_17238,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(9),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null))], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__17002_17237,_STAR_parent_description_STAR__temp_val__17003_17238,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
),speclj.components.new_characteristic.call(null,"displays winning bard",((function (_STAR_parent_description_STAR__orig_val__17002_17237,_STAR_parent_description_STAR__temp_val__17003_17238,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
var value__8972__auto___17243 = "#main-container";
var node__8973__auto___17244 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17243);
if(cljs.core.truth_(node__8973__auto___17244)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__8972__auto___17245 = ".cell";
var node__8973__auto___17246 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17245);
if(cljs.core.truth_(node__8973__auto___17246)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17245;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto___17247 = "Game Over!";
var actual__8662__auto___17248 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__8662__auto___17248 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto___17247 === 'string') && (typeof actual__8662__auto___17248 === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto___17248,expected__8661__auto___17247) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto___17247)) && (typeof actual__8662__auto___17248 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto___17247,actual__8662__auto___17248))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto___17248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto___17247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto___17248)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto___17248,expected__8661__auto___17247)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto___17248)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto___17247,p1__8660__8663__auto__);
}),actual__8662__auto___17248))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto___17247;
var b__8590__auto__ = actual__8662__auto___17248;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto__ = "Winner is X";
var actual__8662__auto__ = c3kit.wire.spec_helper.text.call(null,"#winner");
if((actual__8662__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto__ === 'string') && (typeof actual__8662__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto__,expected__8661__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto__)) && (typeof actual__8662__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto__,actual__8662__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto__,expected__8661__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto__,p1__8660__8663__auto__);
}),actual__8662__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto__;
var b__8590__auto__ = actual__8662__auto__;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__17002_17237,_STAR_parent_description_STAR__temp_val__17003_17238,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false),speclj.components.new_characteristic.call(null,"displays tie game",((function (_STAR_parent_description_STAR__orig_val__17002_17237,_STAR_parent_description_STAR__temp_val__17003_17238,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O"], null)], null)));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

var value__8972__auto___17249 = "#main-container";
var node__8973__auto___17250 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17249);
if(cljs.core.truth_(node__8973__auto___17250)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17249;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__8972__auto___17251 = ".cell";
var node__8973__auto___17252 = c3kit.wire.spec_helper.select.call(null,value__8972__auto___17251);
if(cljs.core.truth_(node__8973__auto___17252)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__8972__auto___17251;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto___17253 = "Game Over!";
var actual__8662__auto___17254 = c3kit.wire.spec_helper.text.call(null,"h1");
if((actual__8662__auto___17254 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto___17253 === 'string') && (typeof actual__8662__auto___17254 === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto___17254,expected__8661__auto___17253) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17254;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto___17253)) && (typeof actual__8662__auto___17254 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto___17253,actual__8662__auto___17254))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto___17254;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto___17253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto___17254)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto___17254,expected__8661__auto___17253)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17254;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto___17254)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto___17253,p1__8660__8663__auto__);
}),actual__8662__auto___17254))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto___17253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto___17254;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto___17253;
var b__8590__auto__ = actual__8662__auto___17254;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8661__auto__ = "Tie Game!";
var actual__8662__auto__ = c3kit.wire.spec_helper.text.call(null,"#winner");
if((actual__8662__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8661__auto__ === 'string') && (typeof actual__8662__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8662__auto__,expected__8661__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8661__auto__)) && (typeof actual__8662__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8661__auto__,actual__8662__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8662__auto__,expected__8661__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8662__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8660__8663__auto__){
return cljs.core._EQ_.call(null,expected__8661__auto__,p1__8660__8663__auto__);
}),actual__8662__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8661__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8662__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8578__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8578__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8589__auto__ = expected__8661__auto__;
var b__8590__auto__ = actual__8662__auto__;
var type_a__8591__auto__ = (((a__8589__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8589__auto__)));
var type_b__8592__auto__ = (((b__8590__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8590__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8591__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8592__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__17002_17237,_STAR_parent_description_STAR__temp_val__17003_17238,description__8468__auto____$1,_STAR_parent_description_STAR__orig_val__16809_17009,_STAR_parent_description_STAR__temp_val__16810_17010,description__8468__auto___17008))
,false)],null)));
var chunk__17005_17240 = null;
var count__17006_17241 = (0);
var i__17007_17242 = (0);
while(true){
if((i__17007_17242 < count__17006_17241)){
var component__8469__auto___17255 = cljs.core._nth.call(null,chunk__17005_17240,i__17007_17242);
speclj.components.install.call(null,component__8469__auto___17255,description__8468__auto____$1);


var G__17256 = seq__17004_17239;
var G__17257 = chunk__17005_17240;
var G__17258 = count__17006_17241;
var G__17259 = (i__17007_17242 + (1));
seq__17004_17239 = G__17256;
chunk__17005_17240 = G__17257;
count__17006_17241 = G__17258;
i__17007_17242 = G__17259;
continue;
} else {
var temp__5825__auto___17260 = cljs.core.seq.call(null,seq__17004_17239);
if(temp__5825__auto___17260){
var seq__17004_17261__$1 = temp__5825__auto___17260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17004_17261__$1)){
var c__5548__auto___17262 = cljs.core.chunk_first.call(null,seq__17004_17261__$1);
var G__17263 = cljs.core.chunk_rest.call(null,seq__17004_17261__$1);
var G__17264 = c__5548__auto___17262;
var G__17265 = cljs.core.count.call(null,c__5548__auto___17262);
var G__17266 = (0);
seq__17004_17239 = G__17263;
chunk__17005_17240 = G__17264;
count__17006_17241 = G__17265;
i__17007_17242 = G__17266;
continue;
} else {
var component__8469__auto___17267 = cljs.core.first.call(null,seq__17004_17261__$1);
speclj.components.install.call(null,component__8469__auto___17267,description__8468__auto____$1);


var G__17268 = cljs.core.next.call(null,seq__17004_17261__$1);
var G__17269 = null;
var G__17270 = (0);
var G__17271 = (0);
seq__17004_17239 = G__17268;
chunk__17005_17240 = G__17269;
count__17006_17241 = G__17270;
i__17007_17242 = G__17271;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__17002_17237);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto____$1);
}

return description__8468__auto____$1;
})()],null)));
var chunk__16812_17012 = null;
var count__16813_17013 = (0);
var i__16814_17014 = (0);
while(true){
if((i__16814_17014 < count__16813_17013)){
var component__8469__auto___17272 = cljs.core._nth.call(null,chunk__16812_17012,i__16814_17014);
speclj.components.install.call(null,component__8469__auto___17272,description__8468__auto___17008);


var G__17273 = seq__16811_17011;
var G__17274 = chunk__16812_17012;
var G__17275 = count__16813_17013;
var G__17276 = (i__16814_17014 + (1));
seq__16811_17011 = G__17273;
chunk__16812_17012 = G__17274;
count__16813_17013 = G__17275;
i__16814_17014 = G__17276;
continue;
} else {
var temp__5825__auto___17277 = cljs.core.seq.call(null,seq__16811_17011);
if(temp__5825__auto___17277){
var seq__16811_17278__$1 = temp__5825__auto___17277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16811_17278__$1)){
var c__5548__auto___17279 = cljs.core.chunk_first.call(null,seq__16811_17278__$1);
var G__17280 = cljs.core.chunk_rest.call(null,seq__16811_17278__$1);
var G__17281 = c__5548__auto___17279;
var G__17282 = cljs.core.count.call(null,c__5548__auto___17279);
var G__17283 = (0);
seq__16811_17011 = G__17280;
chunk__16812_17012 = G__17281;
count__16813_17013 = G__17282;
i__16814_17014 = G__17283;
continue;
} else {
var component__8469__auto___17284 = cljs.core.first.call(null,seq__16811_17278__$1);
speclj.components.install.call(null,component__8469__auto___17284,description__8468__auto___17008);


var G__17285 = cljs.core.next.call(null,seq__16811_17278__$1);
var G__17286 = null;
var G__17287 = (0);
var G__17288 = (0);
seq__16811_17011 = G__17285;
chunk__16812_17012 = G__17286;
count__16813_17013 = G__17287;
i__16814_17014 = G__17288;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16809_17009);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8468__auto___17008);
}


//# sourceMappingURL=html_spec.js.map
