// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.printer');
goog.require('cljs.core');
tic_tac_toe.printer.__GT_index_board = (function tic_tac_toe$printer$__GT_index_board(board){
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,board))){
var iter__5503__auto__ = (function tic_tac_toe$printer$__GT_index_board_$_iter__7218(s__7219){
return (new cljs.core.LazySeq(null,(function (){
var s__7219__$1 = s__7219;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__7219__$1);
if(temp__5825__auto__){
var s__7219__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7219__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__7219__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__7221 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__7220 = (0);
while(true){
if((i__7220 < size__5502__auto__)){
var board__$1 = cljs.core._nth.call(null,c__5501__auto__,i__7220);
cljs.core.chunk_append.call(null,b__7221,cljs.core.map_indexed.call(null,((function (i__7220,board__$1,c__5501__auto__,size__5502__auto__,b__7221,s__7219__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(i__7220,board__$1,c__5501__auto__,size__5502__auto__,b__7221,s__7219__$2,temp__5825__auto__))
,board__$1));

var G__7229 = (i__7220 + (1));
i__7220 = G__7229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7221),tic_tac_toe$printer$__GT_index_board_$_iter__7218.call(null,cljs.core.chunk_rest.call(null,s__7219__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7221),null);
}
} else {
var board__$1 = cljs.core.first.call(null,s__7219__$2);
return cljs.core.cons.call(null,cljs.core.map_indexed.call(null,((function (board__$1,s__7219__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(board__$1,s__7219__$2,temp__5825__auto__))
,board__$1),tic_tac_toe$printer$__GT_index_board_$_iter__7218.call(null,cljs.core.rest.call(null,s__7219__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,board);
} else {
return cljs.core.map_indexed.call(null,(function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
}),board);
}
});
tic_tac_toe.printer.print_rows = (function tic_tac_toe$printer$print_rows(row,size){
return cljs.core.println.call(null,["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(0)))," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(1)))," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(2))),((cljs.core._EQ_.call(null,(4),size))?[" | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,(3)))].join(''):"")].join(''));
});
tic_tac_toe.printer.print_rows_3d = (function tic_tac_toe$printer$print_rows_3d(row,size){
var seq__7225 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__7226 = null;
var count__7227 = (0);
var i__7228 = (0);
while(true){
if((i__7228 < count__7227)){
var row_idx = cljs.core._nth.call(null,chunk__7226,i__7228);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7244 = seq__7225;
var G__7245 = chunk__7226;
var G__7246 = count__7227;
var G__7247 = (i__7228 + (1));
seq__7225 = G__7244;
chunk__7226 = G__7245;
count__7227 = G__7246;
i__7228 = G__7247;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7225);
if(temp__5825__auto__){
var seq__7225__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7225__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7225__$1);
var G__7251 = cljs.core.chunk_rest.call(null,seq__7225__$1);
var G__7252 = c__5548__auto__;
var G__7253 = cljs.core.count.call(null,c__5548__auto__);
var G__7254 = (0);
seq__7225 = G__7251;
chunk__7226 = G__7252;
count__7227 = G__7253;
i__7228 = G__7254;
continue;
} else {
var row_idx = cljs.core.first.call(null,seq__7225__$1);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7258 = cljs.core.next.call(null,seq__7225__$1);
var G__7259 = null;
var G__7260 = (0);
var G__7261 = (0);
seq__7225 = G__7258;
chunk__7226 = G__7259;
count__7227 = G__7260;
i__7228 = G__7261;
continue;
}
} else {
return null;
}
}
break;
}
});
tic_tac_toe.printer.print_breaks = (function tic_tac_toe$printer$print_breaks(idx,rows){
if((idx < (cljs.core.count.call(null,rows) - (1)))){
return cljs.core.println.call(null,"  -----------");
} else {
return null;
}
});
tic_tac_toe.printer.__GT_format = (function tic_tac_toe$printer$__GT_format(board,size){
var indexed_board = tic_tac_toe.printer.__GT_index_board.call(null,board);
var rows = cljs.core.partition.call(null,size,indexed_board);
var seq__7232_7275 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7233_7276 = null;
var count__7234_7277 = (0);
var i__7235_7278 = (0);
while(true){
if((i__7235_7278 < count__7234_7277)){
var vec__7255_7281 = cljs.core._nth.call(null,chunk__7233_7276,i__7235_7278);
var idx_7282 = cljs.core.nth.call(null,vec__7255_7281,(0),null);
var row_7283 = cljs.core.nth.call(null,vec__7255_7281,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7283,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7282,rows);


var G__7287 = seq__7232_7275;
var G__7288 = chunk__7233_7276;
var G__7289 = count__7234_7277;
var G__7290 = (i__7235_7278 + (1));
seq__7232_7275 = G__7287;
chunk__7233_7276 = G__7288;
count__7234_7277 = G__7289;
i__7235_7278 = G__7290;
continue;
} else {
var temp__5825__auto___7291 = cljs.core.seq.call(null,seq__7232_7275);
if(temp__5825__auto___7291){
var seq__7232_7292__$1 = temp__5825__auto___7291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7232_7292__$1)){
var c__5548__auto___7293 = cljs.core.chunk_first.call(null,seq__7232_7292__$1);
var G__7294 = cljs.core.chunk_rest.call(null,seq__7232_7292__$1);
var G__7295 = c__5548__auto___7293;
var G__7296 = cljs.core.count.call(null,c__5548__auto___7293);
var G__7297 = (0);
seq__7232_7275 = G__7294;
chunk__7233_7276 = G__7295;
count__7234_7277 = G__7296;
i__7235_7278 = G__7297;
continue;
} else {
var vec__7262_7298 = cljs.core.first.call(null,seq__7232_7292__$1);
var idx_7299 = cljs.core.nth.call(null,vec__7262_7298,(0),null);
var row_7300 = cljs.core.nth.call(null,vec__7262_7298,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7300,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7299,rows);


var G__7301 = cljs.core.next.call(null,seq__7232_7292__$1);
var G__7302 = null;
var G__7303 = (0);
var G__7304 = (0);
seq__7232_7275 = G__7301;
chunk__7233_7276 = G__7302;
count__7234_7277 = G__7303;
i__7235_7278 = G__7304;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"----------------");
});
tic_tac_toe.printer.setup_3d = (function tic_tac_toe$printer$setup_3d(board){
var size = (27);
var indexed_board = tic_tac_toe.printer.__GT_index_board.call(null,board);
var rows = cljs.core.partition.call(null,size,indexed_board);
var seq__7268_7325 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7269_7326 = null;
var count__7270_7327 = (0);
var i__7271_7328 = (0);
while(true){
if((i__7271_7328 < count__7270_7327)){
var vec__7313_7329 = cljs.core._nth.call(null,chunk__7269_7326,i__7271_7328);
var idx_7330 = cljs.core.nth.call(null,vec__7313_7329,(0),null);
var row_7331 = cljs.core.nth.call(null,vec__7313_7329,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7331,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7330,rows);


var G__7332 = seq__7268_7325;
var G__7333 = chunk__7269_7326;
var G__7334 = count__7270_7327;
var G__7335 = (i__7271_7328 + (1));
seq__7268_7325 = G__7332;
chunk__7269_7326 = G__7333;
count__7270_7327 = G__7334;
i__7271_7328 = G__7335;
continue;
} else {
var temp__5825__auto___7336 = cljs.core.seq.call(null,seq__7268_7325);
if(temp__5825__auto___7336){
var seq__7268_7337__$1 = temp__5825__auto___7336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7268_7337__$1)){
var c__5548__auto___7338 = cljs.core.chunk_first.call(null,seq__7268_7337__$1);
var G__7339 = cljs.core.chunk_rest.call(null,seq__7268_7337__$1);
var G__7340 = c__5548__auto___7338;
var G__7341 = cljs.core.count.call(null,c__5548__auto___7338);
var G__7342 = (0);
seq__7268_7325 = G__7339;
chunk__7269_7326 = G__7340;
count__7270_7327 = G__7341;
i__7271_7328 = G__7342;
continue;
} else {
var vec__7319_7343 = cljs.core.first.call(null,seq__7268_7337__$1);
var idx_7344 = cljs.core.nth.call(null,vec__7319_7343,(0),null);
var row_7345 = cljs.core.nth.call(null,vec__7319_7343,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7345,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7344,rows);


var G__7351 = cljs.core.next.call(null,seq__7268_7337__$1);
var G__7352 = null;
var G__7353 = (0);
var G__7354 = (0);
seq__7268_7325 = G__7351;
chunk__7269_7326 = G__7352;
count__7270_7327 = G__7353;
i__7271_7328 = G__7354;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null,"\n-------------------------------------------");
});
tic_tac_toe.printer.print_board_selection = (function tic_tac_toe$printer$print_board_selection(){
return cljs.core.println.call(null,"Choose your board\n  1: 3x3\n  2: 4x4\n  3: 3x3x3");
});
tic_tac_toe.printer.display_board = (function tic_tac_toe$printer$display_board(board){
if(cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,board))){
return tic_tac_toe.printer.__GT_format.call(null,board,(3));
} else {
if(cljs.core._EQ_.call(null,(16),cljs.core.count.call(null,board))){
return tic_tac_toe.printer.__GT_format.call(null,board,(4));
} else {
if(cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,board))){
return tic_tac_toe.printer.setup_3d.call(null,board);
} else {
return null;
}
}
}
});
tic_tac_toe.printer.print_game_options = (function tic_tac_toe$printer$print_game_options(){
return cljs.core.println.call(null,"Choose your game\n  1: Human vs Computer\n  2: Computer vs Human\n  3: Human vs Human\n  4: Computer vs Computer");
});
tic_tac_toe.printer.print_difficulty_iteration = (function tic_tac_toe$printer$print_difficulty_iteration(current_ai){
var current_ai__$1 = (current_ai + (1));
return cljs.core.println.call(null,((cljs.core._EQ_.call(null,(1),current_ai__$1))?["Choose ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ai__$1),"st AI difficulty"].join(''):((cljs.core._EQ_.call(null,(2),current_ai__$1))?["Choose ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ai__$1),"nd AI difficulty"].join(''):null)));
});
tic_tac_toe.printer.print_difficulty = (function tic_tac_toe$printer$print_difficulty(){
return cljs.core.println.call(null,"Choose AI difficulties\n  1: Easy\n  2: Medium\n  3: Hard");
});
tic_tac_toe.printer.output_result = (function tic_tac_toe$printer$output_result(result){
if(cljs.core._EQ_.call(null,"tie",result)){
return cljs.core.println.call(null,"tie game");
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)," wins!"].join(''));
}
});
tic_tac_toe.printer.print_bad_move = (function tic_tac_toe$printer$print_bad_move(){
return cljs.core.println.call(null,"oops bad move, try again");
});
tic_tac_toe.printer.print_player_prompt = (function tic_tac_toe$printer$print_player_prompt(marker){
return cljs.core.println.call(null,["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker),", enter your move:"].join(''));
});
tic_tac_toe.printer.game_id = (function tic_tac_toe$printer$game_id(id){
return cljs.core.println.call(null,["Game ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
});

//# sourceMappingURL=printer.js.map
