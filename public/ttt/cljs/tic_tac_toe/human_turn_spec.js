// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.human_turn_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.game');
goog.require('tic_tac_toe.printer');
speclj.core.describe.call(null,"human-turn",speclj.core.with_stubs.call(null),speclj.core.it.call(null,"oops bad move",speclj.core.should_EQ_.call(null,"oops bad move, try again\n",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23714_23756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23715_23757 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23716_23758 = true;
var _STAR_print_fn_STAR__temp_val__23717_23759 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23716_23758);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23717_23759);

try{tic_tac_toe.printer.print_bad_move.call(null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23715_23757);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23714_23756);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})())),speclj.core.it.call(null,"print player prompt",(function (){var marker = "X";
return speclj.core.should_EQ_.call(null,["Player ",marker,", enter your move:\n"].join(''),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23718_23761 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23719_23762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23720_23763 = true;
var _STAR_print_fn_STAR__temp_val__23721_23764 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23720_23763);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23721_23764);

try{tic_tac_toe.printer.print_player_prompt.call(null,marker);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23719_23762);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23718_23761);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
})()),speclj.core.context.call(null,"cli",speclj.core.it.call(null,"invoke 'bad-move' for bad input",(function (){var bad_move_orig_val__23722 = tic_tac_toe.human_turn.bad_move;
var bad_move_temp_val__23723 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
(tic_tac_toe.human_turn.bad_move = bad_move_temp_val__23723);

try{var sb__5670__auto___23765 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23724_23766 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23725_23767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23726_23768 = true;
var _STAR_print_fn_STAR__temp_val__23727_23769 = (function (x__5671__auto__){
return sb__5670__auto___23765.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23726_23768);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23727_23769);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"f\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23725_23767);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23724_23766);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___23765);

var sb__5670__auto___23770 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23728_23771 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23729_23772 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23730_23773 = true;
var _STAR_print_fn_STAR__temp_val__23731_23774 = (function (x__5671__auto__){
return sb__5670__auto___23770.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23730_23773);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23731_23774);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23729_23772);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23728_23771);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___23770);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"bad-move","bad-move",1605601357));
}finally {(tic_tac_toe.human_turn.bad_move = bad_move_orig_val__23722);
}})()),speclj.core.it.call(null,"prints message to retry",(function (){var print_bad_move_orig_val__23732 = tic_tac_toe.printer.print_bad_move;
var print_bad_move_temp_val__23733 = (function() { 
var G__23775__delegate = function (_){
return cljs.core.println.call(null,"oops");
};
var G__23775 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__23777__i = 0, G__23777__a = new Array(arguments.length -  0);
while (G__23777__i < G__23777__a.length) {G__23777__a[G__23777__i] = arguments[G__23777__i + 0]; ++G__23777__i;}
  _ = new cljs.core.IndexedSeq(G__23777__a,0,null);
} 
return G__23775__delegate.call(this,_);};
G__23775.cljs$lang$maxFixedArity = 0;
G__23775.cljs$lang$applyTo = (function (arglist__23779){
var _ = cljs.core.seq(arglist__23779);
return G__23775__delegate(_);
});
G__23775.cljs$core$IFn$_invoke$arity$variadic = G__23775__delegate;
return G__23775;
})()
;
(tic_tac_toe.printer.print_bad_move = print_bad_move_temp_val__23733);

try{return speclj.core.should_contain.call(null,"oops",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23734_23781 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23735_23782 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23736_23783 = true;
var _STAR_print_fn_STAR__temp_val__23737_23784 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23736_23783);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23737_23784);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23735_23782);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23734_23781);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.print_bad_move = print_bad_move_orig_val__23732);
}})()),speclj.core.it.call(null,"prints board to retry",(function (){var display_board_orig_val__23738 = tic_tac_toe.printer.display_board;
var display_board_temp_val__23739 = (function() { 
var G__23785__delegate = function (_){
return cljs.core.println.call(null,"board");
};
var G__23785 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__23786__i = 0, G__23786__a = new Array(arguments.length -  0);
while (G__23786__i < G__23786__a.length) {G__23786__a[G__23786__i] = arguments[G__23786__i + 0]; ++G__23786__i;}
  _ = new cljs.core.IndexedSeq(G__23786__a,0,null);
} 
return G__23785__delegate.call(this,_);};
G__23785.cljs$lang$maxFixedArity = 0;
G__23785.cljs$lang$applyTo = (function (arglist__23787){
var _ = cljs.core.seq(arglist__23787);
return G__23785__delegate(_);
});
G__23785.cljs$core$IFn$_invoke$arity$variadic = G__23785__delegate;
return G__23785;
})()
;
(tic_tac_toe.printer.display_board = display_board_temp_val__23739);

try{return speclj.core.should_contain.call(null,"board",(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23740_23788 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23741_23789 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23742_23790 = true;
var _STAR_print_fn_STAR__temp_val__23743_23791 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23742_23790);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23743_23791);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9\n2",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23741_23789);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23740_23788);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})());
}finally {(tic_tac_toe.printer.display_board = display_board_orig_val__23738);
}})()),speclj.core.it.call(null,"invokes human-turn again",(function (){var human_turn_orig_val__23744 = tic_tac_toe.human_turn.human_turn;
var human_turn_temp_val__23745 = speclj.core.stub.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
(tic_tac_toe.human_turn.human_turn = human_turn_temp_val__23745);

try{var sb__5670__auto___23793 = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23746_23794 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23747_23795 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23748_23796 = true;
var _STAR_print_fn_STAR__temp_val__23749_23797 = (function (x__5671__auto__){
return sb__5670__auto___23793.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23748_23796);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23749_23797);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"9",tic_tac_toe.human_turn.human_turn.call(null,tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),"O"));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23747_23795);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23746_23794);
}
cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto___23793);

return speclj.core.should_have_invoked.call(null,new cljs.core.Keyword(null,"human-turn","human-turn",979790362));
}finally {(tic_tac_toe.human_turn.human_turn = human_turn_orig_val__23744);
}})())),speclj.core.context.call(null,"next position",speclj.core.redefs_around.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.human_turn_spec.read_line,(function (){
return "1";
})], null)),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23750_23798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23751_23799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23752_23800 = true;
var _STAR_print_fn_STAR__temp_val__23753_23801 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23752_23800);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23753_23801);

try{tic_tac_toe.human_turn_spec.with_in_str.call(null,"1",speclj.core.it.call(null,"invokes next position cli",speclj.core.should_EQ_.call(null,(1),tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"cli","cli",-207918086),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null)))));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23751_23799);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23750_23798);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),speclj.core.it.call(null,"invokes apply-next-move gui",(function (){var out = tic_tac_toe.game.next_position.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"web-cljs","web-cljs",186043180),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"choice","choice",-1375170727),(0),new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null),new cljs.core.Keyword(null,"turn","turn",75759344),"p1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191)], null));
speclj.core.should_EQ_.call(null,"p2",new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(out));

return speclj.core.should_EQ_.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)], null),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(out));
})())));

//# sourceMappingURL=human_turn_spec.js.map
