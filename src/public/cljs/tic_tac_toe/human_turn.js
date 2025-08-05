// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.human_turn');
goog.require('cljs.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.printer');
goog.require('tic_tac_toe.persistence');
goog.require('tic_tac_toe.game');
tic_tac_toe.human_turn.empty_space_QMARK_ = (function tic_tac_toe$human_turn$empty_space_QMARK_(board,move){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.get.call(null,board,move));
});
tic_tac_toe.human_turn.apply_human_move = (function tic_tac_toe$human_turn$apply_human_move(p__23571,idx){
var map__23572 = p__23571;
var map__23572__$1 = cljs.core.__destructure_map.call(null,map__23572);
var state = map__23572__$1;
var board = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var turn = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var markers = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"markers","markers",-246919693));
var marker = ((cljs.core._EQ_.call(null,turn,"p1"))?cljs.core.first.call(null,markers):cljs.core.second.call(null,markers));
if((((!((idx == null)))) && (tic_tac_toe.human_turn.empty_space_QMARK_.call(null,board,idx)))){
var updated_board = cljs.core.assoc.call(null,board,idx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker], null));
var winner_QMARK_ = tic_tac_toe.board.check_winner.call(null,updated_board);
var updated_state = (cljs.core.truth_(winner_QMARK_)?cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),updated_board,new cljs.core.Keyword(null,"turn","turn",75759344),tic_tac_toe.game.next_player.call(null,turn),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game-over","game-over",-607322695)):cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),updated_board,new cljs.core.Keyword(null,"turn","turn",75759344),tic_tac_toe.game.next_player.call(null,turn)));
tic_tac_toe.persistence.update_current_game_BANG_.call(null,updated_state,idx);

return updated_state;
} else {
return state;
}
});
tic_tac_toe.human_turn.bad_move = (function tic_tac_toe$human_turn$bad_move(board,marker){
tic_tac_toe.printer.print_bad_move.call(null);

tic_tac_toe.printer.display_board.call(null,board);

return tic_tac_toe.human_turn.human_turn.call(null,board,marker);
});
tic_tac_toe.human_turn.human_turn = (function tic_tac_toe$human_turn$human_turn(board,marker){
tic_tac_toe.printer.print_player_prompt.call(null,marker);

var input = tic_tac_toe.human_turn.read_line.call(null);
var move = (cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,input))?Integer.parseInt(input):null);
if(tic_tac_toe.human_turn.empty_space_QMARK_.call(null,board,move)){
return move;
} else {
return tic_tac_toe.human_turn.bad_move.call(null,board,marker);
}
});
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"cli","cli",-207918086)], null),(function (p__23646,p__23647,_){
var map__23648 = p__23646;
var map__23648__$1 = cljs.core.__destructure_map.call(null,map__23648);
var _state = map__23648__$1;
var board = cljs.core.get.call(null,map__23648__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var vec__23649 = p__23647;
var marker = cljs.core.nth.call(null,vec__23649,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23649,(1),null);
var move = tic_tac_toe.human_turn.human_turn.call(null,board,marker);
return move;
}));
cljs.core._add_method.call(null,tic_tac_toe.game.next_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180)], null),(function (p__23652,p__23653,_){
var map__23654 = p__23652;
var map__23654__$1 = cljs.core.__destructure_map.call(null,map__23654);
var state = map__23654__$1;
var choice = cljs.core.get.call(null,map__23654__$1,new cljs.core.Keyword(null,"choice","choice",-1375170727));
var vec__23655 = p__23653;
var marker = cljs.core.nth.call(null,vec__23655,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23655,(1),null);
return tic_tac_toe.human_turn.apply_human_move.call(null,state,choice);
}));

//# sourceMappingURL=human_turn.js.map
