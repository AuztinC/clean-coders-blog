// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.setupc');
goog.require('cljs.core');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.setupc !== 'undefined') && (typeof tic_tac_toe.setupc.select_difficulty_BANG_ !== 'undefined')){
} else {
tic_tac_toe.setupc.select_difficulty_BANG_ = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.setupc","select-difficulty!"),(function (state,_choice){
var actual_state = (((((!((state == null))))?(((((state.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IDeref$))))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,state)))?cljs.core.deref.call(null,state):state);
return new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(actual_state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}

//# sourceMappingURL=setupc.js.map
