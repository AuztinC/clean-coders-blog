// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.printer');
goog.require('cljs.core');
tic_tac_toe.printer.__GT_index_board = (function tic_tac_toe$printer$__GT_index_board(board){
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,board))){
var iter__5503__auto__ = (function tic_tac_toe$printer$__GT_index_board_$_iter__7000(s__7001){
return (new cljs.core.LazySeq(null,(function (){
var s__7001__$1 = s__7001;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__7001__$1);
if(temp__5825__auto__){
var s__7001__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7001__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__7001__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__7004 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__7003 = (0);
while(true){
if((i__7003 < size__5502__auto__)){
var board__$1 = cljs.core._nth.call(null,c__5501__auto__,i__7003);
cljs.core.chunk_append.call(null,b__7004,cljs.core.map_indexed.call(null,((function (i__7003,board__$1,c__5501__auto__,size__5502__auto__,b__7004,s__7001__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(i__7003,board__$1,c__5501__auto__,size__5502__auto__,b__7004,s__7001__$2,temp__5825__auto__))
,board__$1));

var G__7054 = (i__7003 + (1));
i__7003 = G__7054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7004),tic_tac_toe$printer$__GT_index_board_$_iter__7000.call(null,cljs.core.chunk_rest.call(null,s__7001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7004),null);
}
} else {
var board__$1 = cljs.core.first.call(null,s__7001__$2);
return cljs.core.cons.call(null,cljs.core.map_indexed.call(null,((function (board__$1,s__7001__$2,temp__5825__auto__){
return (function (idx,cell){
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cell))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx);
} else {
return cljs.core.first.call(null,cell);
}
});})(board__$1,s__7001__$2,temp__5825__auto__))
,board__$1),tic_tac_toe$printer$__GT_index_board_$_iter__7000.call(null,cljs.core.rest.call(null,s__7001__$2)));
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
var seq__7026 = cljs.core.seq.call(null,cljs.core.range.call(null,size));
var chunk__7027 = null;
var count__7028 = (0);
var i__7029 = (0);
while(true){
if((i__7029 < count__7028)){
var row_idx = cljs.core._nth.call(null,chunk__7027,i__7029);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7072 = seq__7026;
var G__7073 = chunk__7027;
var G__7074 = count__7028;
var G__7075 = (i__7029 + (1));
seq__7026 = G__7072;
chunk__7027 = G__7073;
count__7028 = G__7074;
i__7029 = G__7075;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7026);
if(temp__5825__auto__){
var seq__7026__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7026__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7026__$1);
var G__7076 = cljs.core.chunk_rest.call(null,seq__7026__$1);
var G__7077 = c__5548__auto__;
var G__7078 = cljs.core.count.call(null,c__5548__auto__);
var G__7079 = (0);
seq__7026 = G__7076;
chunk__7027 = G__7077;
count__7028 = G__7078;
i__7029 = G__7079;
continue;
} else {
var row_idx = cljs.core.first.call(null,seq__7026__$1);
cljs.core.print.call(null,["",((((10) > row_idx))?" ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,row,row_idx)),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(20),null,(17),null,(2),null,(23),null,(11),null,(5),null,(14),null,(26),null,(8),null], null), null),row_idx))?"   ":" | "),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(17),null,(8),null], null), null),row_idx))?"\n -----------    -----------    -----------\n":"")].join(''));


var G__7083 = cljs.core.next.call(null,seq__7026__$1);
var G__7084 = null;
var G__7085 = (0);
var G__7086 = (0);
seq__7026 = G__7083;
chunk__7027 = G__7084;
count__7028 = G__7085;
i__7029 = G__7086;
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
var seq__7034_7131 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7035_7132 = null;
var count__7036_7133 = (0);
var i__7037_7134 = (0);
while(true){
if((i__7037_7134 < count__7036_7133)){
var vec__7048_7135 = cljs.core._nth.call(null,chunk__7035_7132,i__7037_7134);
var idx_7136 = cljs.core.nth.call(null,vec__7048_7135,(0),null);
var row_7137 = cljs.core.nth.call(null,vec__7048_7135,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7137,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7136,rows);


var G__7138 = seq__7034_7131;
var G__7139 = chunk__7035_7132;
var G__7140 = count__7036_7133;
var G__7141 = (i__7037_7134 + (1));
seq__7034_7131 = G__7138;
chunk__7035_7132 = G__7139;
count__7036_7133 = G__7140;
i__7037_7134 = G__7141;
continue;
} else {
var temp__5825__auto___7142 = cljs.core.seq.call(null,seq__7034_7131);
if(temp__5825__auto___7142){
var seq__7034_7143__$1 = temp__5825__auto___7142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7034_7143__$1)){
var c__5548__auto___7144 = cljs.core.chunk_first.call(null,seq__7034_7143__$1);
var G__7145 = cljs.core.chunk_rest.call(null,seq__7034_7143__$1);
var G__7146 = c__5548__auto___7144;
var G__7147 = cljs.core.count.call(null,c__5548__auto___7144);
var G__7148 = (0);
seq__7034_7131 = G__7145;
chunk__7035_7132 = G__7146;
count__7036_7133 = G__7147;
i__7037_7134 = G__7148;
continue;
} else {
var vec__7051_7150 = cljs.core.first.call(null,seq__7034_7143__$1);
var idx_7151 = cljs.core.nth.call(null,vec__7051_7150,(0),null);
var row_7152 = cljs.core.nth.call(null,vec__7051_7150,(1),null);
tic_tac_toe.printer.print_rows.call(null,row_7152,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7151,rows);


var G__7153 = cljs.core.next.call(null,seq__7034_7143__$1);
var G__7154 = null;
var G__7155 = (0);
var G__7156 = (0);
seq__7034_7131 = G__7153;
chunk__7035_7132 = G__7154;
count__7036_7133 = G__7155;
i__7037_7134 = G__7156;
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
var seq__7055_7157 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,rows));
var chunk__7056_7158 = null;
var count__7057_7159 = (0);
var i__7058_7160 = (0);
while(true){
if((i__7058_7160 < count__7057_7159)){
var vec__7090_7161 = cljs.core._nth.call(null,chunk__7056_7158,i__7058_7160);
var idx_7162 = cljs.core.nth.call(null,vec__7090_7161,(0),null);
var row_7163 = cljs.core.nth.call(null,vec__7090_7161,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7163,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7162,rows);


var G__7166 = seq__7055_7157;
var G__7167 = chunk__7056_7158;
var G__7168 = count__7057_7159;
var G__7169 = (i__7058_7160 + (1));
seq__7055_7157 = G__7166;
chunk__7056_7158 = G__7167;
count__7057_7159 = G__7168;
i__7058_7160 = G__7169;
continue;
} else {
var temp__5825__auto___7170 = cljs.core.seq.call(null,seq__7055_7157);
if(temp__5825__auto___7170){
var seq__7055_7171__$1 = temp__5825__auto___7170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7055_7171__$1)){
var c__5548__auto___7173 = cljs.core.chunk_first.call(null,seq__7055_7171__$1);
var G__7175 = cljs.core.chunk_rest.call(null,seq__7055_7171__$1);
var G__7176 = c__5548__auto___7173;
var G__7177 = cljs.core.count.call(null,c__5548__auto___7173);
var G__7178 = (0);
seq__7055_7157 = G__7175;
chunk__7056_7158 = G__7176;
count__7057_7159 = G__7177;
i__7058_7160 = G__7178;
continue;
} else {
var vec__7109_7179 = cljs.core.first.call(null,seq__7055_7171__$1);
var idx_7180 = cljs.core.nth.call(null,vec__7109_7179,(0),null);
var row_7181 = cljs.core.nth.call(null,vec__7109_7179,(1),null);
tic_tac_toe.printer.print_rows_3d.call(null,row_7181,size);

tic_tac_toe.printer.print_breaks.call(null,idx_7180,rows);


var G__7185 = cljs.core.next.call(null,seq__7055_7171__$1);
var G__7186 = null;
var G__7187 = (0);
var G__7188 = (0);
seq__7055_7157 = G__7185;
chunk__7056_7158 = G__7186;
count__7057_7159 = G__7187;
i__7058_7160 = G__7188;
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
