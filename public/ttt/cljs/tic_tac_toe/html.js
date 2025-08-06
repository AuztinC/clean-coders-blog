// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.html');
goog.require('cljs.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.human_turn');
goog.require('tic_tac_toe.setup');
goog.require('tic_tac_toe.setupc');
tic_tac_toe.html.reset_btn_QMARK_ = (function tic_tac_toe$html$reset_btn_QMARK_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"reset-btn",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.setup.starting_state);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)))))], null),"Reset Game?"], null);
} else {
return null;
}
});
tic_tac_toe.html.select_game_mode = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Select a game mode"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"human-vs-ai",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"Human vs AI"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ai-vs-human",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"AI vs Human"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"human-vs-human",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"Human vs Human"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ai-vs-ai",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"select-board","select-board",-279755643));
})], null),"AI vs AI"], null)], null)], null);
tic_tac_toe.html.select_board = (function tic_tac_toe$html$select_board(){
var next_screen = ((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state))))?new cljs.core.Keyword(null,"game","game",-441523833):new cljs.core.Keyword(null,"select-difficulty","select-difficulty",-1410650984));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Select a board"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-3x3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),next_screen,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)));
})], null),"3x3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-4x4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),next_screen,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)));
})], null),"4x4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-3x3x3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),next_screen,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.get_board.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)));
})], null),"3x3x3"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),tic_tac_toe.html.reset_btn_QMARK_.call(null)], null);
});
tic_tac_toe.html.select_difficulty = (function tic_tac_toe$html$select_difficulty(){
var diff_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"difficulties","difficulties",179230342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)));
var text = tic_tac_toe.setup.difficulty_text.call(null,diff_count);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),text], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"easy",new cljs.core.Keyword(null,"class","class",-2030961996),"diff",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"easy","easy",315769928));
})], null),"Easy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"medium",new cljs.core.Keyword(null,"class","class",-2030961996),"diff",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"medium","medium",-1864319384));
})], null),"Medium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"hard",new cljs.core.Keyword(null,"class","class",-2030961996),"diff",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.setupc.select_difficulty_BANG_.call(null,tic_tac_toe.setup.state,new cljs.core.Keyword(null,"hard","hard",2068420191));
})], null),"Hard"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),tic_tac_toe.html.reset_btn_QMARK_.call(null)], null);
});
tic_tac_toe.html.ignore_user_input_QMARK_ = (function tic_tac_toe$html$ignore_user_input_QMARK_(){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)))) || (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ai","ai",760454697)], null),new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)))));
});
tic_tac_toe.html.handle_click = (function tic_tac_toe$html$handle_click(idx){
if(tic_tac_toe.html.ignore_user_input_QMARK_.call(null)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,tic_tac_toe.setup.state,tic_tac_toe.human_turn.apply_human_move,parseInt(idx));
}
});
tic_tac_toe.html.cell_cursor = (function tic_tac_toe$html$cell_cursor(value){
if(((typeof value === 'string') || (tic_tac_toe.html.ignore_user_input_QMARK_.call(null)))){
return "default";
} else {
return "pointer";
}
});
tic_tac_toe.html.cell_text_color = (function tic_tac_toe$html$cell_text_color(value){
var G__12833 = value;
switch (G__12833) {
case "X":
return "orange";

break;
case "O":
return "rgb(85, 189, 237)";

break;
default:
return "white";

}
});
tic_tac_toe.html.render_cell = (function tic_tac_toe$html$render_cell(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"grey",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),tic_tac_toe.html.cell_text_color.call(null,value),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"cursor","cursor",1011937484),tic_tac_toe.html.cell_cursor.call(null,value)], null),new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"cell",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.html.handle_click.call(null,value);
})], null),value], null);
});
tic_tac_toe.html.render_board = (function tic_tac_toe$html$render_board(p__12835){
var map__12836 = p__12835;
var map__12836__$1 = cljs.core.__destructure_map.call(null,map__12836);
var _state = map__12836__$1;
var board_size = cljs.core.get.call(null,map__12836__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var board = cljs.core.get.call(null,map__12836__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var indexed = cljs.core.map_indexed.call(null,(function (idx,_cell){
return tic_tac_toe.html.render_cell.call(null,((cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cljs.core.nth.call(null,board,idx))))?idx:cljs.core.first.call(null,cljs.core.nth.call(null,board,idx))));
}),board);
var size = (function (){var G__12837 = board_size;
var G__12837__$1 = (((G__12837 instanceof cljs.core.Keyword))?G__12837.fqn:null);
switch (G__12837__$1) {
case "3x3":
return (3);

break;
case "4x4":
return (4);

break;
case "3x3x3":
return (9);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12837__$1)].join('')));

}
})();
var part_board = cljs.core.partition.call(null,size,indexed);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["game-board-",cljs.core.name.call(null,board_size)].join('')], null)], null),cljs.core.map_indexed.call(null,(function (i,row){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], null),row);
}),part_board));
});
tic_tac_toe.html.game = (function tic_tac_toe$html$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),tic_tac_toe.html.render_board.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),tic_tac_toe.html.reset_btn_QMARK_.call(null)], null);
});
tic_tac_toe.html.game_over = (function tic_tac_toe$html$game_over(){
var winner = tic_tac_toe.board.check_winner.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.setup.state)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),tic_tac_toe.html.render_board.call(null,cljs.core.deref.call(null,tic_tac_toe.setup.state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Game Over!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"winner"], null),tic_tac_toe.setup.winner_text.call(null,winner)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),tic_tac_toe.html.reset_btn_QMARK_.call(null)], null);
});

//# sourceMappingURL=html.js.map
