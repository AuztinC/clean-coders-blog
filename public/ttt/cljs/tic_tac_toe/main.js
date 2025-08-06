// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('c3kit.wire.js');
goog.require('reagent.dom');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.html');
goog.require('tic_tac_toe.setup');
tic_tac_toe.main.app = (function tic_tac_toe$main$app(){
var screen__$1 = new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state));
var G__12881 = screen__$1;
var G__12881__$1 = (((G__12881 instanceof cljs.core.Keyword))?G__12881.fqn:null);
switch (G__12881__$1) {
case "select-game-mode":
return tic_tac_toe.html.select_game_mode;

break;
case "select-board":
return tic_tac_toe.html.select_board.call(null);

break;
case "select-difficulty":
return tic_tac_toe.html.select_difficulty.call(null);

break;
case "game":
return tic_tac_toe.html.game.call(null);

break;
case "game-over":
return tic_tac_toe.html.game_over.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12881__$1)].join('')));

}
});
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
cljs.core.add_watch.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"auto-turn","auto-turn",-1016045827),tic_tac_toe.setup.auto_advance);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null),c3kit.wire.js.element_by_id.call(null,"app"));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);

//# sourceMappingURL=main.js.map
