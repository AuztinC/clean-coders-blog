// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setup');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.ai_turn');
goog.require('tic_tac_toe.setupc');
tic_tac_toe.setup.starting_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-game-mode","select-game-mode",-1136430370),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"turn","turn",75759344),"p1",new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null)], null);
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.setup !== 'undefined') && (typeof tic_tac_toe.setup.state !== 'undefined')){
} else {
tic_tac_toe.setup.state = reagent.core.atom.call(null,tic_tac_toe.setup.starting_state);
}
cljs.core._add_method.call(null,tic_tac_toe.setupc.select_difficulty_BANG_,new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),(function (state,choice){
var ai_count = cljs.core.count.call(null,cljs.core.filterv.call(null,(function (p1__16553_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),p1__16553_SHARP_);
}),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
var updated_difficulties = cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),choice);
if((cljs.core.count.call(null,updated_difficulties) < ai_count)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"difficulties","difficulties",179230342),updated_difficulties,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"difficulties","difficulties",179230342),updated_difficulties,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833));
}
}));
tic_tac_toe.setup.sleep = (function tic_tac_toe$setup$sleep(fn,t){
return setTimeout(fn,t);
});
tic_tac_toe.setup.game_over_QMARK_ = (function tic_tac_toe$setup$game_over_QMARK_(winner_QMARK_,new$){
if(cljs.core.truth_(winner_QMARK_)){
cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.game.next_state.call(null,new$));

return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc.call(null,tic_tac_toe.game.next_state.call(null,new$),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695)));
} else {
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.game.next_state.call(null,new$));
}
});
tic_tac_toe.setup.auto_advance = (function tic_tac_toe$setup$auto_advance(_key,_atom,_old,new$){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(new$))){
var next_player = tic_tac_toe.game.next_player_key.call(null,new$);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ai","ai",760454697),next_player)){
var after_move_state = tic_tac_toe.game.next_state.call(null,new$);
var winner_QMARK_ = tic_tac_toe.board.check_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(after_move_state));
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(new$))){
return tic_tac_toe.setup.sleep.call(null,(function (){
return tic_tac_toe.setup.game_over_QMARK_.call(null,winner_QMARK_,new$);
}),(500));
} else {
return tic_tac_toe.setup.game_over_QMARK_.call(null,winner_QMARK_,new$);
}
} else {
return null;
}
} else {
return null;
}
});
tic_tac_toe.setup.difficulty_text = (function tic_tac_toe$setup$difficulty_text(diff_count){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)))){
if(cljs.core._EQ_.call(null,(0),diff_count)){
return "Select 1st AI difficulty";
} else {
return "Select 2nd AI difficulty";
}
} else {
return "Select AI difficulty";

}
});
tic_tac_toe.setup.winner_text = (function tic_tac_toe$setup$winner_text(winner){
if(cljs.core._EQ_.call(null,"tie",winner)){
return [clojure.string.replace_first.call(null,winner,/t/,winner.charAt((0)).toUpperCase())," Game!"].join('');
} else {
return ["Winner is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner),"!"].join('');
}
});

//# sourceMappingURL=setup.js.map
