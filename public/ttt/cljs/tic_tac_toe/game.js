// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.game');
goog.require('cljs.core');
goog.require('tic_tac_toe.printer');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.persistence');
tic_tac_toe.game.position_dispatch = (function tic_tac_toe$game$position_dispatch(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6587 = arguments.length;
var i__5750__auto___6588 = (0);
while(true){
if((i__5750__auto___6588 < len__5749__auto___6587)){
args__5755__auto__.push((arguments[i__5750__auto___6588]));

var G__6589 = (i__5750__auto___6588 + (1));
i__5750__auto___6588 = G__6589;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return tic_tac_toe.game.position_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(tic_tac_toe.game.position_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (p__6581,p__6582,_){
var map__6583 = p__6581;
var map__6583__$1 = cljs.core.__destructure_map.call(null,map__6583);
var _state = map__6583__$1;
var ui = cljs.core.get.call(null,map__6583__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var vec__6584 = p__6582;
var ___$1 = cljs.core.nth.call(null,vec__6584,(0),null);
var player_type = cljs.core.nth.call(null,vec__6584,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player_type,ui], null);
}));

(tic_tac_toe.game.position_dispatch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tic_tac_toe.game.position_dispatch.cljs$lang$applyTo = (function (seq6578){
var G__6579 = cljs.core.first.call(null,seq6578);
var seq6578__$1 = cljs.core.next.call(null,seq6578);
var G__6580 = cljs.core.first.call(null,seq6578__$1);
var seq6578__$2 = cljs.core.next.call(null,seq6578__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6579,G__6580,seq6578__$2);
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
tic_tac_toe.game.empty_space_QMARK_ = (function tic_tac_toe$game$empty_space_QMARK_(board,move){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.get.call(null,board,move));
});
tic_tac_toe.game.next_player = (function tic_tac_toe$game$next_player(turn){
if(cljs.core._EQ_.call(null,"p1",turn)){
return "p2";
} else {
return "p1";
}
});
tic_tac_toe.game.next_player_key = (function tic_tac_toe$game$next_player_key(p__6590){
var map__6591 = p__6590;
var map__6591__$1 = cljs.core.__destructure_map.call(null,map__6591);
var _state = map__6591__$1;
var turn = cljs.core.get.call(null,map__6591__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.call(null,map__6591__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var G__6592 = turn;
switch (G__6592) {
case "p1":
return cljs.core.first.call(null,players);

break;
case "p2":
return cljs.core.second.call(null,players);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6592)].join('')));

}
});
tic_tac_toe.game.__GT_players = (function tic_tac_toe$game$__GT_players(p__6593){
var map__6594 = p__6593;
var map__6594__$1 = cljs.core.__destructure_map.call(null,map__6594);
var turn = cljs.core.get.call(null,map__6594__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var players = cljs.core.get.call(null,map__6594__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var vec__6595 = players;
var p1_type = cljs.core.nth.call(null,vec__6595,(0),null);
var p2_type = cljs.core.nth.call(null,vec__6595,(1),null);
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
tic_tac_toe.game.end_game_BANG_ = (function tic_tac_toe$game$end_game_BANG_(p__6599){
var map__6600 = p__6599;
var map__6600__$1 = cljs.core.__destructure_map.call(null,map__6600);
var state = map__6600__$1;
var id = cljs.core.get.call(null,map__6600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var board = cljs.core.get.call(null,map__6600__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
tic_tac_toe.printer.display_board.call(null,board);

tic_tac_toe.printer.output_result.call(null,tic_tac_toe.board.check_winner.call(null,board));

return tic_tac_toe.printer.game_id.call(null,id);
});
tic_tac_toe.game.next_state = (function tic_tac_toe$game$next_state(state){
if(cljs.core.truth_(tic_tac_toe.board.check_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
var map__6601 = state;
var map__6601__$1 = cljs.core.__destructure_map.call(null,map__6601);
var board = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var difficulties = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"difficulties","difficulties",179230342));
var turn = cljs.core.get.call(null,map__6601__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var vec__6602 = tic_tac_toe.game.__GT_players.call(null,state);
var marker = cljs.core.nth.call(null,vec__6602,(0),null);
var player_type = cljs.core.nth.call(null,vec__6602,(1),null);
var player = vec__6602;
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

var G__6605 = tic_tac_toe.game.next_state.call(null,state__$1);
state__$1 = G__6605;
continue;
}
break;
}
});

//# sourceMappingURL=game.js.map
