// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.game');
goog.require('cljs.core');
goog.require('tic_tac_toe.printer');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.persistence');
tic_tac_toe.game.sleep = (function tic_tac_toe$game$sleep(){
return Thread.sleep((500));
});
tic_tac_toe.game.position_dispatch = (function tic_tac_toe$game$position_dispatch(var_args){
var args__5755__auto__ = [];
var len__5749__auto___7510 = arguments.length;
var i__5750__auto___7511 = (0);
while(true){
if((i__5750__auto___7511 < len__5749__auto___7510)){
args__5755__auto__.push((arguments[i__5750__auto___7511]));

var G__7512 = (i__5750__auto___7511 + (1));
i__5750__auto___7511 = G__7512;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return tic_tac_toe.game.position_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(tic_tac_toe.game.position_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (p__7497,p__7498,_){
var map__7499 = p__7497;
var map__7499__$1 = cljs.core.__destructure_map.call(null,map__7499);
var _state = map__7499__$1;
var ui = cljs.core.get.call(null,map__7499__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var vec__7500 = p__7498;
var ___$1 = cljs.core.nth.call(null,vec__7500,(0),null);
var player_type = cljs.core.nth.call(null,vec__7500,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_type,ui], null);
}));

(tic_tac_toe.game.position_dispatch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tic_tac_toe.game.position_dispatch.cljs$lang$applyTo = (function (seq7487){
var G__7488 = cljs.core.first.call(null,seq7487);
var seq7487__$1 = cljs.core.next.call(null,seq7487);
var G__7489 = cljs.core.first.call(null,seq7487__$1);
var seq7487__$2 = cljs.core.next.call(null,seq7487__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7488,G__7489,seq7487__$2);
}));

if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.game !== 'undefined') && (typeof tic_tac_toe.game.next_position !== 'undefined')){
} else {
tic_tac_toe.game.next_position = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.game","next-position"),tic_tac_toe.game.position_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
tic_tac_toe.game.next_player = (function tic_tac_toe$game$next_player(turn){
if(cljs.core._EQ_.call(null,"p1",turn)){
return "p2";
} else {
return "p1";
}
});
tic_tac_toe.game.__GT_players = (function tic_tac_toe$game$__GT_players(p__7514){
var map__7515 = p__7514;
var map__7515__$1 = cljs.core.__destructure_map.call(null,map__7515);
var turn = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.call(null,map__7515__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var vec__7517 = players;
var p1_type = cljs.core.nth.call(null,vec__7517,(0),null);
var p2_type = cljs.core.nth.call(null,vec__7517,(1),null);
if(cljs.core._EQ_.call(null,"p1",turn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",p1_type], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O",p2_type], null);
}
});
tic_tac_toe.game.__GT_difficulties = (function tic_tac_toe$game$__GT_difficulties(turn,player_type,difficulties){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,difficulties))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),player_type)){
return cljs.core.first.call(null,difficulties);
} else {
return null;
}
} else {
if(((cljs.core._EQ_.call(null,"p1",turn)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),player_type)))){
return cljs.core.first.call(null,difficulties);
} else {
if(((cljs.core._EQ_.call(null,"p2",turn)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),player_type)))){
return cljs.core.second.call(null,difficulties);
} else {
return null;
}
}
}
});
tic_tac_toe.game.end_game_BANG_ = (function tic_tac_toe$game$end_game_BANG_(p__7535){
var map__7536 = p__7535;
var map__7536__$1 = cljs.core.__destructure_map.call(null,map__7536);
var state = map__7536__$1;
var id = cljs.core.get.call(null,map__7536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var board = cljs.core.get.call(null,map__7536__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
tic_tac_toe.printer.display_board.call(null,board);

tic_tac_toe.printer.output_result.call(null,tic_tac_toe.board.check_winner.call(null,board));

return tic_tac_toe.printer.game_id.call(null,id);
});
tic_tac_toe.game.next_state = (function tic_tac_toe$game$next_state(state){
if(cljs.core.truth_(tic_tac_toe.board.check_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
var map__7537 = state;
var map__7537__$1 = cljs.core.__destructure_map.call(null,map__7537);
var board = cljs.core.get.call(null,map__7537__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var difficulties = cljs.core.get.call(null,map__7537__$1,new cljs.core.Keyword(null,"difficulties","difficulties",179230342));
var turn = cljs.core.get.call(null,map__7537__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var vec__7539 = tic_tac_toe.game.__GT_players.call(null,state);
var marker = cljs.core.nth.call(null,vec__7539,(0),null);
var player_type = cljs.core.nth.call(null,vec__7539,(1),null);
var player = vec__7539;
var difficulty = tic_tac_toe.game.__GT_difficulties.call(null,turn,player_type,difficulties);
var move = tic_tac_toe.game.next_position.call(null,state,player,difficulty);
var next_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.assoc.call(null,board,move,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null)),new cljs.core.Keyword(null,"turn","turn",75759344),tic_tac_toe.game.next_player.call(null,turn));
tic_tac_toe.persistence.update_current_game_BANG_.call(null,next_state,move);

return next_state;
}
});
tic_tac_toe.game.game_loop = (function tic_tac_toe$game$game_loop(state){
var state__$1 = state;
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state__$1))){
return tic_tac_toe.game.end_game_BANG_.call(null,state__$1);
} else {
tic_tac_toe.printer.display_board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state__$1));

var G__7554 = tic_tac_toe.game.next_state.call(null,state__$1);
state__$1 = G__7554;
continue;
}
break;
}
});

//# sourceMappingURL=game.js.map
