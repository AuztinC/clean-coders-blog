// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.js');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.apron.time');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('goog.History');
goog.require('goog.object');
goog.scope(function(){
c3kit.wire.js.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * DEPRECATED: Use 'e-code' instead.
 */
c3kit.wire.js.e_key_code = (function c3kit$wire$js$e_key_code(e){
return e.keyCode;
});
c3kit.wire.js.e_code = (function c3kit$wire$js$e_code(e){
return e.code;
});
/**
 * On macOS, this is the ⌥ Option key.
 */
c3kit.wire.js.alt_key_QMARK_ = (function c3kit$wire$js$alt_key_QMARK_(e){
return e.altKey;
});
/**
 * On macOS, this is the ⌘ Command key.
 */
c3kit.wire.js.meta_key_QMARK_ = (function c3kit$wire$js$meta_key_QMARK_(e){
return e.metaKey;
});
c3kit.wire.js.ctrl_key_QMARK_ = (function c3kit$wire$js$ctrl_key_QMARK_(e){
return e.ctrlKey;
});
c3kit.wire.js.shift_key_QMARK_ = (function c3kit$wire$js$shift_key_QMARK_(e){
return e.shiftKey;
});
c3kit.wire.js.BACKSPACE = "Backspace";
c3kit.wire.js.TAB = "Tab";
c3kit.wire.js.ENTER = "Enter";
c3kit.wire.js.SHIFTLEFT = "ShiftLeft";
c3kit.wire.js.SHIFTRIGHT = "ShiftRight";
c3kit.wire.js.ESC = "Escape";
c3kit.wire.js.SPACE = "Space";
c3kit.wire.js.LEFT = "ArrowLeft";
c3kit.wire.js.UP = "ArrowUp";
c3kit.wire.js.RIGHT = "ArrowRight";
c3kit.wire.js.DOWN = "ArrowDown";
c3kit.wire.js.DELETE = "Delete";
c3kit.wire.js.DIGIT0 = "Digit0";
c3kit.wire.js.DIGIT1 = "Digit1";
c3kit.wire.js.DIGIT2 = "Digit2";
c3kit.wire.js.DIGIT3 = "Digit3";
c3kit.wire.js.DIGIT4 = "Digit4";
c3kit.wire.js.DIGIT5 = "Digit5";
c3kit.wire.js.DIGIT6 = "Digit6";
c3kit.wire.js.DIGIT7 = "Digit7";
c3kit.wire.js.DIGIT8 = "Digit8";
c3kit.wire.js.DIGIT9 = "Digit9";
c3kit.wire.js.NUMPAD_PLUS_ = "NumpadAdd";
c3kit.wire.js.COMMA = "Comma";
c3kit.wire.js.e_code_QMARK_ = (function c3kit$wire$js$e_code_QMARK_(var_args){
var G__22442 = arguments.length;
switch (G__22442) {
case 1:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (code){
return (function (e){
return c3kit.wire.js.e_code_QMARK_.call(null,code,e);
});
}));

(c3kit.wire.js.e_code_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (code,e){
return cljs.core._EQ_.call(null,c3kit.wire.js.e_code.call(null,e),code);
}));

(c3kit.wire.js.e_code_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.BACKSPACE_QMARK_ = (function c3kit$wire$js$BACKSPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.BACKSPACE,e);
});
c3kit.wire.js.TAB_QMARK_ = (function c3kit$wire$js$TAB_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.TAB,e);
});
c3kit.wire.js.ENTER_QMARK_ = (function c3kit$wire$js$ENTER_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.ENTER,e);
});
c3kit.wire.js.SHIFT_QMARK_ = (function c3kit$wire$js$SHIFT_QMARK_(e){
return ((c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.SHIFTLEFT,e)) || (c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.SHIFTRIGHT,e)));
});
c3kit.wire.js.ESC_QMARK_ = (function c3kit$wire$js$ESC_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.ESC,e);
});
c3kit.wire.js.SPACE_QMARK_ = (function c3kit$wire$js$SPACE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.SPACE,e);
});
c3kit.wire.js.LEFT_QMARK_ = (function c3kit$wire$js$LEFT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.LEFT,e);
});
c3kit.wire.js.UP_QMARK_ = (function c3kit$wire$js$UP_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.UP,e);
});
c3kit.wire.js.RIGHT_QMARK_ = (function c3kit$wire$js$RIGHT_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.RIGHT,e);
});
c3kit.wire.js.DOWN_QMARK_ = (function c3kit$wire$js$DOWN_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.DOWN,e);
});
c3kit.wire.js.DELETE_QMARK_ = (function c3kit$wire$js$DELETE_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.DELETE,e);
});
c3kit.wire.js.NUMPAD_PLUS__QMARK_ = (function c3kit$wire$js$NUMPAD_PLUS__QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.NUMPAD_PLUS_,e);
});
c3kit.wire.js.COMMA_QMARK_ = (function c3kit$wire$js$COMMA_QMARK_(e){
return c3kit.wire.js.e_code_QMARK_.call(null,c3kit.wire.js.COMMA,e);
});
c3kit.wire.js.key_modifier_QMARK_ = (function c3kit$wire$js$key_modifier_QMARK_(e,modifier){
try{return e.getModifierState(modifier);
}catch (e22445){var e__$1 = e22445;
return false;
}});
c3kit.wire.js.shift_modifier_QMARK_ = (function c3kit$wire$js$shift_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_.call(null,e,"Shift");
});
c3kit.wire.js.ctl_modifier_QMARK_ = (function c3kit$wire$js$ctl_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_.call(null,e,"Control");
});
c3kit.wire.js.alt_modifier_QMARK_ = (function c3kit$wire$js$alt_modifier_QMARK_(e){
return c3kit.wire.js.key_modifier_QMARK_.call(null,e,"Alt");
});
c3kit.wire.js.o_get = (function c3kit$wire$js$o_get(var_args){
var G__22450 = arguments.length;
switch (G__22450) {
case 2:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,key){
return c3kit.wire.js.goog$module$goog$object.get.call(null,js_obj,key,null);
}));

(c3kit.wire.js.o_get.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,key,default$){
return c3kit.wire.js.goog$module$goog$object.get.call(null,js_obj,key,default$);
}));

(c3kit.wire.js.o_get.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_get_in = (function c3kit$wire$js$o_get_in(var_args){
var G__22452 = arguments.length;
switch (G__22452) {
case 2:
return c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,ks){
return cljs.core.reduce.call(null,c3kit.wire.js.o_get,js_obj,ks);
}));

(c3kit.wire.js.o_get_in.cljs$core$IFn$_invoke$arity$3 = (function (js_obj,ks,default$){
var or__5025__auto__ = c3kit.wire.js.o_get_in.call(null,js_obj,ks);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(c3kit.wire.js.o_get_in.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.o_set = (function c3kit$wire$js$o_set(js_obj,key,value){
return c3kit.wire.js.goog$module$goog$object.set.call(null,js_obj,key,value);
});
/**
 * Update a JavaScript object key according to a function, f,
 * applied to the current value followed by args.
 */
c3kit.wire.js.o_update_BANG_ = (function c3kit$wire$js$o_update_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22496 = arguments.length;
var i__5750__auto___22497 = (0);
while(true){
if((i__5750__auto___22497 < len__5749__auto___22496)){
args__5755__auto__.push((arguments[i__5750__auto___22497]));

var G__22498 = (i__5750__auto___22497 + (1));
i__5750__auto___22497 = G__22498;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.o_update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.js.o_update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
return c3kit.wire.js.o_set.call(null,obj,k,cljs.core.apply.call(null,f,c3kit.wire.js.o_get.call(null,obj,k),args));
}));

(c3kit.wire.js.o_update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.o_update_BANG_.cljs$lang$applyTo = (function (seq22487){
var G__22491 = cljs.core.first.call(null,seq22487);
var seq22487__$1 = cljs.core.next.call(null,seq22487);
var G__22492 = cljs.core.first.call(null,seq22487__$1);
var seq22487__$2 = cljs.core.next.call(null,seq22487__$1);
var G__22493 = cljs.core.first.call(null,seq22487__$2);
var seq22487__$3 = cljs.core.next.call(null,seq22487__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22491,G__22492,G__22493,seq22487__$3);
}));

/**
 * Dissoc a key in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_dissoc_BANG_ = (function c3kit$wire$js$o_dissoc_BANG_(obj,key){
delete obj[key];

return obj;
});
/**
 * Returns the first object with the subsequent objects merged onto it
 */
c3kit.wire.js.o_merge_BANG_ = (function c3kit$wire$js$o_merge_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22549 = arguments.length;
var i__5750__auto___22550 = (0);
while(true){
if((i__5750__auto___22550 < len__5749__auto___22549)){
args__5755__auto__.push((arguments[i__5750__auto___22550]));

var G__22554 = (i__5750__auto___22550 + (1));
i__5750__auto___22550 = G__22554;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return c3kit.wire.js.o_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(c3kit.wire.js.o_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,other,others){
if(cljs.core.map_QMARK_.call(null,other)){
var seq__22506_22558 = cljs.core.seq.call(null,cljs.core.seq.call(null,other));
var chunk__22507_22559 = null;
var count__22508_22560 = (0);
var i__22509_22561 = (0);
while(true){
if((i__22509_22561 < count__22508_22560)){
var vec__22516_22565 = cljs.core._nth.call(null,chunk__22507_22559,i__22509_22561);
var k_22566 = cljs.core.nth.call(null,vec__22516_22565,(0),null);
var v_22571 = cljs.core.nth.call(null,vec__22516_22565,(1),null);
c3kit.wire.js.o_set.call(null,obj,k_22566,v_22571);


var G__22574 = seq__22506_22558;
var G__22575 = chunk__22507_22559;
var G__22576 = count__22508_22560;
var G__22577 = (i__22509_22561 + (1));
seq__22506_22558 = G__22574;
chunk__22507_22559 = G__22575;
count__22508_22560 = G__22576;
i__22509_22561 = G__22577;
continue;
} else {
var temp__5825__auto___22582 = cljs.core.seq.call(null,seq__22506_22558);
if(temp__5825__auto___22582){
var seq__22506_22583__$1 = temp__5825__auto___22582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22506_22583__$1)){
var c__5548__auto___22584 = cljs.core.chunk_first.call(null,seq__22506_22583__$1);
var G__22585 = cljs.core.chunk_rest.call(null,seq__22506_22583__$1);
var G__22586 = c__5548__auto___22584;
var G__22587 = cljs.core.count.call(null,c__5548__auto___22584);
var G__22588 = (0);
seq__22506_22558 = G__22585;
chunk__22507_22559 = G__22586;
count__22508_22560 = G__22587;
i__22509_22561 = G__22588;
continue;
} else {
var vec__22522_22592 = cljs.core.first.call(null,seq__22506_22583__$1);
var k_22593 = cljs.core.nth.call(null,vec__22522_22592,(0),null);
var v_22594 = cljs.core.nth.call(null,vec__22522_22592,(1),null);
c3kit.wire.js.o_set.call(null,obj,k_22593,v_22594);


var G__22595 = cljs.core.next.call(null,seq__22506_22583__$1);
var G__22596 = null;
var G__22597 = (0);
var G__22598 = (0);
seq__22506_22558 = G__22595;
chunk__22507_22559 = G__22596;
count__22508_22560 = G__22597;
i__22509_22561 = G__22598;
continue;
}
} else {
}
}
break;
}
} else {
if((other instanceof Object)){
var seq__22525_22599 = cljs.core.seq.call(null,Object.keys(other));
var chunk__22526_22600 = null;
var count__22527_22601 = (0);
var i__22528_22602 = (0);
while(true){
if((i__22528_22602 < count__22527_22601)){
var k_22608 = cljs.core._nth.call(null,chunk__22526_22600,i__22528_22602);
c3kit.wire.js.o_set.call(null,obj,k_22608,c3kit.wire.js.o_get.call(null,other,k_22608));


var G__22618 = seq__22525_22599;
var G__22619 = chunk__22526_22600;
var G__22620 = count__22527_22601;
var G__22621 = (i__22528_22602 + (1));
seq__22525_22599 = G__22618;
chunk__22526_22600 = G__22619;
count__22527_22601 = G__22620;
i__22528_22602 = G__22621;
continue;
} else {
var temp__5825__auto___22625 = cljs.core.seq.call(null,seq__22525_22599);
if(temp__5825__auto___22625){
var seq__22525_22626__$1 = temp__5825__auto___22625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22525_22626__$1)){
var c__5548__auto___22627 = cljs.core.chunk_first.call(null,seq__22525_22626__$1);
var G__22631 = cljs.core.chunk_rest.call(null,seq__22525_22626__$1);
var G__22632 = c__5548__auto___22627;
var G__22633 = cljs.core.count.call(null,c__5548__auto___22627);
var G__22634 = (0);
seq__22525_22599 = G__22631;
chunk__22526_22600 = G__22632;
count__22527_22601 = G__22633;
i__22528_22602 = G__22634;
continue;
} else {
var k_22638 = cljs.core.first.call(null,seq__22525_22626__$1);
c3kit.wire.js.o_set.call(null,obj,k_22638,c3kit.wire.js.o_get.call(null,other,k_22638));


var G__22642 = cljs.core.next.call(null,seq__22525_22626__$1);
var G__22643 = null;
var G__22644 = (0);
var G__22645 = (0);
seq__22525_22599 = G__22642;
chunk__22526_22600 = G__22643;
count__22527_22601 = G__22644;
i__22528_22602 = G__22645;
continue;
}
} else {
}
}
break;
}
} else {
}
}

if(cljs.core.seq.call(null,others)){
return cljs.core.apply.call(null,c3kit.wire.js.o_merge_BANG_,obj,others);
} else {
return obj;
}
}));

(c3kit.wire.js.o_merge_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c3kit.wire.js.o_merge_BANG_.cljs$lang$applyTo = (function (seq22499){
var G__22500 = cljs.core.first.call(null,seq22499);
var seq22499__$1 = cljs.core.next.call(null,seq22499);
var G__22501 = cljs.core.first.call(null,seq22499__$1);
var seq22499__$2 = cljs.core.next.call(null,seq22499__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22500,G__22501,seq22499__$2);
}));

c3kit.wire.js.get_or_create_node = (function c3kit$wire$js$get_or_create_node(obj,k){
var or__5025__auto__ = c3kit.wire.js.o_get.call(null,obj,k);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var node = (new Object());
c3kit.wire.js.o_set.call(null,obj,k,node);

return node;
}
});
/**
 * Assoc a nested value in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_assoc_in_BANG_ = (function c3kit$wire$js$o_assoc_in_BANG_(obj,ks,v){
var key_path = cljs.core.butlast.call(null,ks);
var node = cljs.core.reduce.call(null,c3kit.wire.js.get_or_create_node,obj,key_path);
var key = cljs.core.last.call(null,ks);
return c3kit.wire.js.o_set.call(null,node,key,v);
});
/**
 * Dissoc a nested value in a JavaScript object according to a path of keys.
 */
c3kit.wire.js.o_dissoc_in_BANG_ = (function c3kit$wire$js$o_dissoc_in_BANG_(obj,ks){
var G__22555_22652 = c3kit.wire.js.o_get_in.call(null,obj,cljs.core.butlast.call(null,ks));
if((G__22555_22652 == null)){
} else {
delete G__22555_22652[cljs.core.last.call(null,ks)];
}

return obj;
});
c3kit.wire.js.user_agent = (function c3kit$wire$js$user_agent(var_args){
var G__22557 = arguments.length;
switch (G__22557) {
case 0:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.js.user_agent.call(null,navigator);
}));

(c3kit.wire.js.user_agent.cljs$core$IFn$_invoke$arity$1 = (function (navigator){
return navigator.userAgent;
}));

(c3kit.wire.js.user_agent.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.user_agent_match_QMARK_ = (function c3kit$wire$js$user_agent_match_QMARK_(var_args){
var G__22573 = arguments.length;
switch (G__22573) {
case 1:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (re){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,re,c3kit.wire.js.user_agent.call(null));
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (re,user_agent){
return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,re,user_agent));
}));

(c3kit.wire.js.user_agent_match_QMARK_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.mac_os_QMARK_ = (function c3kit$wire$js$mac_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\((Macintosh|MacIntel|MacPPC|Mac68K)/);
});
c3kit.wire.js.win_os_QMARK_ = (function c3kit$wire$js$win_os_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\((Windows|Win32|Win64|WinCE)/);
});
c3kit.wire.js.linux_QMARK_ = (function c3kit$wire$js$linux_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\(Linux/);
});
c3kit.wire.js.ios_QMARK_ = (function c3kit$wire$js$ios_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\((iPhone|iPad|iPod)/);
});
c3kit.wire.js.android_QMARK_ = (function c3kit$wire$js$android_QMARK_(){
return c3kit.wire.js.user_agent_match_QMARK_.call(null,/\(Android/);
});
c3kit.wire.js.clear_interval = (function c3kit$wire$js$clear_interval(interval){
return clearInterval(interval);
});
c3kit.wire.js.clear_timeout = (function c3kit$wire$js$clear_timeout(timeout){
return clearTimeout(timeout);
});
c3kit.wire.js.context_2d = (function c3kit$wire$js$context_2d(canvas){
return canvas.getContext("2d");
});
c3kit.wire.js.active_element = (function c3kit$wire$js$active_element(){
return document.activeElement;
});
c3kit.wire.js.doc_body = (function c3kit$wire$js$doc_body(var_args){
var G__22617 = arguments.length;
switch (G__22617) {
case 0:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$0 = (function (){
return document.body;
}));

(c3kit.wire.js.doc_body.cljs$core$IFn$_invoke$arity$1 = (function (doc){
return doc.body;
}));

(c3kit.wire.js.doc_body.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.doc_cookie = (function c3kit$wire$js$doc_cookie(){
return document.cookie;
});
c3kit.wire.js.doc_ready_state = (function c3kit$wire$js$doc_ready_state(){
return document.readyState;
});
c3kit.wire.js.doc_ready_QMARK_ = (function c3kit$wire$js$doc_ready_QMARK_(){
return cljs.core._EQ_.call(null,"complete",c3kit.wire.js.doc_ready_state.call(null));
});
c3kit.wire.js.document = (function c3kit$wire$js$document(var_args){
var G__22636 = arguments.length;
switch (G__22636) {
case 0:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$0 = (function (){
return document;
}));

(c3kit.wire.js.document.cljs$core$IFn$_invoke$arity$1 = (function (node){
return node.ownerDocument;
}));

(c3kit.wire.js.document.cljs$lang$maxFixedArity = 1);

c3kit.wire.js.e_checked_QMARK_ = (function c3kit$wire$js$e_checked_QMARK_(e){
return e.target.checked;
});
c3kit.wire.js.e_delta_y = (function c3kit$wire$js$e_delta_y(e){
return e.deltaY;
});
c3kit.wire.js.e_client_x = (function c3kit$wire$js$e_client_x(e){
return e.clientX;
});
c3kit.wire.js.e_client_y = (function c3kit$wire$js$e_client_y(e){
return e.clientY;
});
c3kit.wire.js.e_coordinates = (function c3kit$wire$js$e_coordinates(e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
c3kit.wire.js.e_related_target = (function c3kit$wire$js$e_related_target(e){
return e.relatedTarget;
});
c3kit.wire.js.e_left_click_QMARK_ = (function c3kit$wire$js$e_left_click_QMARK_(e){
return cljs.core._EQ_.call(null,(0),c3kit.wire.js.o_get.call(null,e,"button"));
});
c3kit.wire.js.e_wheel_click_QMARK_ = (function c3kit$wire$js$e_wheel_click_QMARK_(e){
return cljs.core._EQ_.call(null,(1),c3kit.wire.js.o_get.call(null,e,"button"));
});
c3kit.wire.js.e_right_click_QMARK_ = (function c3kit$wire$js$e_right_click_QMARK_(e){
return cljs.core._EQ_.call(null,(2),c3kit.wire.js.o_get.call(null,e,"button"));
});
c3kit.wire.js.e_target = (function c3kit$wire$js$e_target(e){
return e.target;
});
c3kit.wire.js.e_text = (function c3kit$wire$js$e_text(e){
return e.target.value;
});
c3kit.wire.js.e_type = (function c3kit$wire$js$e_type(e){
return e.type;
});
c3kit.wire.js.file__GT_clj = (function c3kit$wire$js$file__GT_clj(file){
return c3kit.apron.corec.remove_nils.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"type","type",1174270348),file.type,new cljs.core.Keyword(null,"size","size",1098693007),file.size,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),file.lastModified,new cljs.core.Keyword(null,"last-modified-date","last-modified-date",-2034854883),file.lastModifiedDate,new cljs.core.Keyword(null,"webkit-relative-path","webkit-relative-path",-2126577342),file.webkitRelativePath,new cljs.core.Keyword(null,"file","file",-1269645878),file], null));
});
c3kit.wire.js.e_files = (function c3kit$wire$js$e_files(e){
return cljs.core.map.call(null,c3kit.wire.js.file__GT_clj,(function (){var or__5025__auto__ = (function (){var G__22683 = e;
var G__22683__$1 = (((G__22683 == null))?null:G__22683.dataTransfer);
if((G__22683__$1 == null)){
return null;
} else {
return G__22683__$1.files;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var G__22688 = e;
var G__22688__$1 = (((G__22688 == null))?null:G__22688.target);
if((G__22688__$1 == null)){
return null;
} else {
return G__22688__$1.files;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
})());
});
c3kit.wire.js.element_by_id = (function c3kit$wire$js$element_by_id(id){
return document.getElementById(id);
});
c3kit.wire.js.frame_window = (function c3kit$wire$js$frame_window(iframe){
return iframe.contentWindow;
});
c3kit.wire.js.interval = (function c3kit$wire$js$interval(millis,f){
return setInterval(f,millis);
});
c3kit.wire.js.node_add_class = (function c3kit$wire$js$node_add_class(node,class$){
return node.classList.add(class$);
});
c3kit.wire.js.node_append_child = (function c3kit$wire$js$node_append_child(node,child){
return node.appendChild(child);
});
c3kit.wire.js.node_children = (function c3kit$wire$js$node_children(node){
return cljs.core.array_seq.call(null,node.childNodes);
});
c3kit.wire.js.node_classes = (function c3kit$wire$js$node_classes(node){
return node.className;
});
c3kit.wire.js.node_clone = (function c3kit$wire$js$node_clone(node,deep_QMARK_){
return node.cloneNode(deep_QMARK_);
});
c3kit.wire.js.node_files = (function c3kit$wire$js$node_files(node){
return node.files;
});
c3kit.wire.js.node_height = (function c3kit$wire$js$node_height(node){
return node.clientHeight;
});
c3kit.wire.js.node_id = (function c3kit$wire$js$node_id(node){
return c3kit.wire.js.o_get.call(null,node,"id");
});
c3kit.wire.js.node_id_EQ_ = (function c3kit$wire$js$node_id_EQ_(node,id){
return c3kit.wire.js.o_set.call(null,node,"id",id);
});
c3kit.wire.js.node_text = (function c3kit$wire$js$node_text(node){
return node.innerText;
});
c3kit.wire.js.node_parent = (function c3kit$wire$js$node_parent(node){
return node.parentNode;
});
c3kit.wire.js.node_placeholder = (function c3kit$wire$js$node_placeholder(node){
return node.placeholder;
});
c3kit.wire.js.node_remove_child = (function c3kit$wire$js$node_remove_child(node,child){
return node.removeChild(child);
});
c3kit.wire.js.node_remove_class = (function c3kit$wire$js$node_remove_class(node,class$){
return node.classList.remove(class$);
});
c3kit.wire.js.node_scroll_left = (function c3kit$wire$js$node_scroll_left(node){
return node.scrollLeft;
});
c3kit.wire.js.node_scroll_top = (function c3kit$wire$js$node_scroll_top(node){
return node.scrollTop;
});
c3kit.wire.js.node_size = (function c3kit$wire$js$node_size(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.clientWidth,node.clientHeight], null);
});
c3kit.wire.js.node_style = (function c3kit$wire$js$node_style(node){
return node.style;
});
c3kit.wire.js.node_value = (function c3kit$wire$js$node_value(node){
return node.value;
});
c3kit.wire.js.node_width = (function c3kit$wire$js$node_width(node){
return node.clientWidth;
});
c3kit.wire.js.page_href = (function c3kit$wire$js$page_href(){
return window.location.href;
});
c3kit.wire.js.page_hash = (function c3kit$wire$js$page_hash(){
return window.location.hash;
});
c3kit.wire.js.page_pathname = (function c3kit$wire$js$page_pathname(){
return window.location.pathname;
});
c3kit.wire.js.page_reload_BANG_ = (function c3kit$wire$js$page_reload_BANG_(){
return window.location.reload();
});
c3kit.wire.js.page_title = (function c3kit$wire$js$page_title(){
return document.title;
});
c3kit.wire.js.page_title_EQ_ = (function c3kit$wire$js$page_title_EQ_(title){
return (document.title = title);
});
c3kit.wire.js.post_message = (function c3kit$wire$js$post_message(window,message,target_domain){
return window.postMessage(cljs.core.clj__GT_js.call(null,message),target_domain);
});
c3kit.wire.js.print_page = (function c3kit$wire$js$print_page(){
return window.print();
});
c3kit.wire.js.query_selector = (function c3kit$wire$js$query_selector(selector){
return document.querySelector(selector);
});
c3kit.wire.js.query_selector_all = (function c3kit$wire$js$query_selector_all(selector){
return document.querySelectorAll(selector);
});
c3kit.wire.js.register_post_message_handler = (function c3kit$wire$js$register_post_message_handler(handler){
return window.addEventListener("message",handler);
});
c3kit.wire.js.register_storage_handler = (function c3kit$wire$js$register_storage_handler(handler){
return window.addEventListener("storage",handler);
});
c3kit.wire.js.remove_local_storage = (function c3kit$wire$js$remove_local_storage(key){
return localStorage.removeItem(key);
});
c3kit.wire.js.screen_size = (function c3kit$wire$js$screen_size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen.width,screen.height], null);
});
c3kit.wire.js.set_local_storage = (function c3kit$wire$js$set_local_storage(key,value){
return localStorage.setItem(key,value);
});
c3kit.wire.js.timeout = (function c3kit$wire$js$timeout(millis,f){
return setTimeout(f,millis);
});
c3kit.wire.js.uri_encode = (function c3kit$wire$js$uri_encode(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22709 = arguments.length;
var i__5750__auto___22710 = (0);
while(true){
if((i__5750__auto___22710 < len__5749__auto___22709)){
args__5755__auto__.push((arguments[i__5750__auto___22710]));

var G__22711 = (i__5750__auto___22710 + (1));
i__5750__auto___22710 = G__22711;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.wire.js.uri_encode.cljs$core$IFn$_invoke$arity$variadic = (function (stuff){
return encodeURIComponent(cljs.core.apply.call(null,cljs.core.str,stuff));
}));

(c3kit.wire.js.uri_encode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.js.uri_encode.cljs$lang$applyTo = (function (seq22708){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22708));
}));

c3kit.wire.js.window_close_BANG_ = (function c3kit$wire$js$window_close_BANG_(){
return window.close();
});
c3kit.wire.js.window_open = (function c3kit$wire$js$window_open(url,window_name,options_string){
return window.open(url,window_name,options_string);
});
c3kit.wire.js.node_bounds = (function c3kit$wire$js$node_bounds(node){
var rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.x,rect.y,rect.width,rect.height], null);
});
/**
 * Return a hashmap of cookie names and their values.
 */
c3kit.wire.js.cookies = (function c3kit$wire$js$cookies(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.remove.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,(function (p1__22712_SHARP_){
return clojure.string.split.call(null,p1__22712_SHARP_,"=");
}))),clojure.string.split.call(null,c3kit.wire.js.doc_cookie.call(null),"; "));
});
/**
 * Resolves a value into a DOM node.
 *   Possible values:
 *  - string id       - id of the node
 *  - string selector - CSS selector to find the node
 *  - node            - anything else is assumed to be the node
 */
c3kit.wire.js.resolve_node = (function c3kit$wire$js$resolve_node(thing){
if(typeof thing === 'string'){
var or__5025__auto__ = c3kit.wire.js.element_by_id.call(null,thing);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return c3kit.wire.js.query_selector.call(null,thing);
}
} else {
return thing;
}
});
c3kit.wire.js.ancestor_where = (function c3kit$wire$js$ancestor_where(pred,node){
while(true){
if((node == null)){
return null;
} else {
if(cljs.core.truth_(pred.call(null,node))){
return node;
} else {
var G__22732 = pred;
var G__22733 = node.parentElement;
pred = G__22732;
node = G__22733;
continue;

}
}
break;
}
});
c3kit.wire.js.ancestor_QMARK_ = (function c3kit$wire$js$ancestor_QMARK_(ancestor,node){
return cljs.core.boolean$.call(null,c3kit.wire.js.ancestor_where.call(null,(function (p1__22729_SHARP_){
return cljs.core._EQ_.call(null,ancestor,p1__22729_SHARP_);
}),node));
});
/**
 * Give an event the nod, as if saying: Good job, your work is done.
 */
c3kit.wire.js.nod = (function c3kit$wire$js$nod(e){
return e.preventDefault();
});
/**
 * Return function to suppress browser event with nod and call the supplied function with args.
 */
c3kit.wire.js.nod_n_do = (function c3kit$wire$js$nod_n_do(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22736 = arguments.length;
var i__5750__auto___22737 = (0);
while(true){
if((i__5750__auto___22737 < len__5749__auto___22736)){
args__5755__auto__.push((arguments[i__5750__auto___22737]));

var G__22738 = (i__5750__auto___22737 + (1));
i__5750__auto___22737 = G__22738;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.nod_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nod.call(null,e);

return cljs.core.apply.call(null,a_fn,args);
});
}));

(c3kit.wire.js.nod_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nod_n_do.cljs$lang$applyTo = (function (seq22730){
var G__22731 = cljs.core.first.call(null,seq22730);
var seq22730__$1 = cljs.core.next.call(null,seq22730);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22731,seq22730__$1);
}));

/**
 * Nip the event in the bud, before it causes any trouble.
 */
c3kit.wire.js.nip = (function c3kit$wire$js$nip(e){
return e.stopPropagation();
});
/**
 * Return function to suppress browser event with nip and call the supplied function with args.
 */
c3kit.wire.js.nip_n_do = (function c3kit$wire$js$nip_n_do(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22739 = arguments.length;
var i__5750__auto___22740 = (0);
while(true){
if((i__5750__auto___22740 < len__5749__auto___22739)){
args__5755__auto__.push((arguments[i__5750__auto___22740]));

var G__22743 = (i__5750__auto___22740 + (1));
i__5750__auto___22740 = G__22743;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.nip_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nip.call(null,e);

return cljs.core.apply.call(null,a_fn,args);
});
}));

(c3kit.wire.js.nip_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nip_n_do.cljs$lang$applyTo = (function (seq22734){
var G__22735 = cljs.core.first.call(null,seq22734);
var seq22734__$1 = cljs.core.next.call(null,seq22734);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22735,seq22734__$1);
}));

/**
 * Nix an event: Stop what you're doing and get the hell out.
 */
c3kit.wire.js.nix = (function c3kit$wire$js$nix(e){
c3kit.wire.js.nip.call(null,e);

return c3kit.wire.js.nod.call(null,e);
});
/**
 * Return function to suppress browser event with nix and call the supplied function with args.
 */
c3kit.wire.js.nix_n_do = (function c3kit$wire$js$nix_n_do(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22751 = arguments.length;
var i__5750__auto___22752 = (0);
while(true){
if((i__5750__auto___22752 < len__5749__auto___22751)){
args__5755__auto__.push((arguments[i__5750__auto___22752]));

var G__22754 = (i__5750__auto___22752 + (1));
i__5750__auto___22752 = G__22754;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.nix_n_do.cljs$core$IFn$_invoke$arity$variadic = (function (a_fn,args){
return (function (e){
c3kit.wire.js.nix.call(null,e);

return cljs.core.apply.call(null,a_fn,args);
});
}));

(c3kit.wire.js.nix_n_do.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.nix_n_do.cljs$lang$applyTo = (function (seq22741){
var G__22742 = cljs.core.first.call(null,seq22741);
var seq22741__$1 = cljs.core.next.call(null,seq22741);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22742,seq22741__$1);
}));

/**
 * Tell the browser to load the given URL, with full HTTP request/response process.
 */
c3kit.wire.js.redirect_BANG_ = (function c3kit$wire$js$redirect_BANG_(url){
return (window.location = url);
});
/**
 * Resolved the node and focus.
 *   Options: {:preventScroll true ;; default is false
 *          :focusVisible true}  ;; default may be false 
 */
c3kit.wire.js.focus_BANG_ = (function c3kit$wire$js$focus_BANG_(var_args){
var G__22750 = arguments.length;
switch (G__22750) {
case 1:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__22753 = thing;
var G__22753__$1 = (((G__22753 == null))?null:c3kit.wire.js.resolve_node.call(null,G__22753));
if((G__22753__$1 == null)){
return null;
} else {
return G__22753__$1.focus();
}
}));

(c3kit.wire.js.focus_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__22755 = thing;
var G__22755__$1 = (((G__22755 == null))?null:c3kit.wire.js.resolve_node.call(null,G__22755));
if((G__22755__$1 == null)){
return null;
} else {
return G__22755__$1.focus(cljs.core.clj__GT_js.call(null,options));
}
}));

(c3kit.wire.js.focus_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.blur_BANG_ = (function c3kit$wire$js$blur_BANG_(thing){
var G__22756 = thing;
var G__22756__$1 = (((G__22756 == null))?null:c3kit.wire.js.resolve_node.call(null,G__22756));
if((G__22756__$1 == null)){
return null;
} else {
return G__22756__$1.blur();
}
});
c3kit.wire.js.click_BANG_ = (function c3kit$wire$js$click_BANG_(thing){
var G__22757 = thing;
var G__22757__$1 = (((G__22757 == null))?null:c3kit.wire.js.resolve_node.call(null,G__22757));
if((G__22757__$1 == null)){
return null;
} else {
return G__22757__$1.click();
}
});
/**
 * True if the element is the document's activeElement.
 */
c3kit.wire.js.active_QMARK_ = (function c3kit$wire$js$active_QMARK_(thing){
return cljs.core._EQ_.call(null,c3kit.wire.js.active_element.call(null),c3kit.wire.js.resolve_node.call(null,thing));
});
/**
 * True if the element is not the document's activeElement.
 */
c3kit.wire.js.inactive_QMARK_ = (function c3kit$wire$js$inactive_QMARK_(thing){
return (!(c3kit.wire.js.active_QMARK_.call(null,thing)));
});
c3kit.wire.js.add_listener = (function c3kit$wire$js$add_listener(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22827 = arguments.length;
var i__5750__auto___22828 = (0);
while(true){
if((i__5750__auto___22828 < len__5749__auto___22827)){
args__5755__auto__.push((arguments[i__5750__auto___22828]));

var G__22829 = (i__5750__auto___22828 + (1));
i__5750__auto___22828 = G__22829;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.js.add_listener.cljs$core$IFn$_invoke$arity$variadic = (function (node,event,listener,p__22763){
var map__22764 = p__22763;
var map__22764__$1 = cljs.core.__destructure_map.call(null,map__22764);
var options = map__22764__$1;
if(cljs.core.truth_(node)){
return node.addEventListener(event,listener,(function (){var G__22765 = options;
if((G__22765 == null)){
return null;
} else {
return cljs.core.clj__GT_js.call(null,G__22765);
}
})());
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.js",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-listener to nil node"], null);
}),null)),null,(99),null);
}
}));

(c3kit.wire.js.add_listener.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.add_listener.cljs$lang$applyTo = (function (seq22758){
var G__22759 = cljs.core.first.call(null,seq22758);
var seq22758__$1 = cljs.core.next.call(null,seq22758);
var G__22760 = cljs.core.first.call(null,seq22758__$1);
var seq22758__$2 = cljs.core.next.call(null,seq22758__$1);
var G__22761 = cljs.core.first.call(null,seq22758__$2);
var seq22758__$3 = cljs.core.next.call(null,seq22758__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22759,G__22760,G__22761,seq22758__$3);
}));

c3kit.wire.js.remove_listener = (function c3kit$wire$js$remove_listener(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22830 = arguments.length;
var i__5750__auto___22831 = (0);
while(true){
if((i__5750__auto___22831 < len__5749__auto___22830)){
args__5755__auto__.push((arguments[i__5750__auto___22831]));

var G__22832 = (i__5750__auto___22831 + (1));
i__5750__auto___22831 = G__22832;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.js.remove_listener.cljs$core$IFn$_invoke$arity$variadic = (function (node,event,listener,p__22804){
var map__22805 = p__22804;
var map__22805__$1 = cljs.core.__destructure_map.call(null,map__22805);
var options = map__22805__$1;
if(cljs.core.truth_(node)){
return node.removeEventListener(event,listener,(function (){var G__22806 = options;
if((G__22806 == null)){
return null;
} else {
return cljs.core.clj__GT_js.call(null,G__22806);
}
})());
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.js",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remove-listener to nil node"], null);
}),null)),null,(100),null);
}
}));

(c3kit.wire.js.remove_listener.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.js.remove_listener.cljs$lang$applyTo = (function (seq22776){
var G__22777 = cljs.core.first.call(null,seq22776);
var seq22776__$1 = cljs.core.next.call(null,seq22776);
var G__22778 = cljs.core.first.call(null,seq22776__$1);
var seq22776__$2 = cljs.core.next.call(null,seq22776__$1);
var G__22779 = cljs.core.first.call(null,seq22776__$2);
var seq22776__$3 = cljs.core.next.call(null,seq22776__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22777,G__22778,G__22779,seq22776__$3);
}));

c3kit.wire.js.add_doc_listener = (function c3kit$wire$js$add_doc_listener(event,handler){
return c3kit.wire.js.add_listener.call(null,document,event,handler);
});
c3kit.wire.js.remove_doc_listener = (function c3kit$wire$js$remove_doc_listener(event,handler){
return c3kit.wire.js.remove_listener.call(null,document,event,handler);
});
c3kit.wire.js.__GT_query_value = (function c3kit$wire$js$__GT_query_value(v){
if((v instanceof Date)){
return cljs.core.pr_str.call(null,v);
} else {
return v;
}
});
c3kit.wire.js.__GT_query_string = (function c3kit$wire$js$__GT_query_string(params){
return cljs_http.client.generate_query_string.call(null,cljs.core.update_vals.call(null,params,c3kit.wire.js.__GT_query_value));
});
c3kit.wire.js.encode_url = (function c3kit$wire$js$encode_url(root,params){
var G__22821 = root;
if(cljs.core.seq.call(null,params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22821),"?",c3kit.wire.js.__GT_query_string.call(null,params)].join('');
} else {
return G__22821;
}
});
c3kit.wire.js.download = (function c3kit$wire$js$download(var_args){
var G__22823 = arguments.length;
switch (G__22823) {
case 2:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$2 = (function (url,filename){
return c3kit.wire.js.download.call(null,url,filename,cljs.core.PersistentArrayMap.EMPTY);
}));

(c3kit.wire.js.download.cljs$core$IFn$_invoke$arity$3 = (function (url,filename,params){
var a = document.createElement("a");
var url__$1 = c3kit.wire.js.encode_url.call(null,url,params);
(a.href = url__$1);

(a.download = filename);

return a.click();
}));

(c3kit.wire.js.download.cljs$lang$maxFixedArity = 3);

c3kit.wire.js.download_data = (function c3kit$wire$js$download_data(data,content_type,filename){
var blob = (new Blob(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),content_type], null))));
var url = URL.createObjectURL(blob);
c3kit.wire.js.download.call(null,url,filename);

return c3kit.wire.js.timeout.call(null,(100),(function (){
return URL.revokeObjectURL(url);
}));
});
c3kit.wire.js.__GT_audio = (function c3kit$wire$js$__GT_audio(src){
var audio = cljs.core.js_invoke.call(null,document,"createElement","audio");
c3kit.wire.js.o_set.call(null,audio,"src",src);

return audio;
});
c3kit.wire.js.play_audio = (function c3kit$wire$js$play_audio(audio){
return cljs.core.js_invoke.call(null,audio,"play");
});
c3kit.wire.js.pause_audio = (function c3kit$wire$js$pause_audio(audio){
return cljs.core.js_invoke.call(null,audio,"pause");
});
c3kit.wire.js.copy_to_clipboard_fallback = (function c3kit$wire$js$copy_to_clipboard_fallback(text){
var textarea = document.createElement("textarea");
var body = document.body;
(textarea.textContent = text);

body.appendChild(textarea);

var selection = document.getSelection();
var range = document.createRange();
range.selectNode(textarea);

selection.removeAllRanges();

selection.addRange(range);

document.execCommand("copy");

selection.removeAllRanges();

return body.removeChild(textarea);
});
c3kit.wire.js.copy_to_clipboard = (function c3kit$wire$js$copy_to_clipboard(text){
var temp__5823__auto__ = navigator.clipboard;
if(cljs.core.truth_(temp__5823__auto__)){
var clipboard = temp__5823__auto__;
return clipboard.writeText(text);
} else {
return c3kit.wire.js.copy_to_clipboard_fallback.call(null,text);
}
});
c3kit.wire.js.begin_path_BANG_ = (function c3kit$wire$js$begin_path_BANG_(ctx){
return ctx.beginPath();
});
c3kit.wire.js.stroke_BANG_ = (function c3kit$wire$js$stroke_BANG_(ctx){
return ctx.stroke();
});
c3kit.wire.js.fill_BANG_ = (function c3kit$wire$js$fill_BANG_(ctx){
return ctx.fill();
});
c3kit.wire.js.line_width_EQ_ = (function c3kit$wire$js$line_width_EQ_(ctx,w){
return (ctx.lineWidth = w);
});
c3kit.wire.js.stroke_color_EQ_ = (function c3kit$wire$js$stroke_color_EQ_(ctx,color){
return (ctx.strokeStyle = color);
});
c3kit.wire.js.fill_color_EQ_ = (function c3kit$wire$js$fill_color_EQ_(ctx,color){
return (ctx.fillStyle = color);
});
c3kit.wire.js.font_EQ_ = (function c3kit$wire$js$font_EQ_(ctx,font){
return (ctx.font = font);
});
c3kit.wire.js.text_align_EQ_ = (function c3kit$wire$js$text_align_EQ_(ctx,align){
return (ctx.textAlign = align);
});
c3kit.wire.js.close_path_BANG_ = (function c3kit$wire$js$close_path_BANG_(ctx){
return ctx.closePath();
});
c3kit.wire.js.move_to_BANG_ = (function c3kit$wire$js$move_to_BANG_(ctx,p__22838){
var vec__22839 = p__22838;
var x = cljs.core.nth.call(null,vec__22839,(0),null);
var y = cljs.core.nth.call(null,vec__22839,(1),null);
return ctx.moveTo(x,y);
});
c3kit.wire.js.line_to_BANG_ = (function c3kit$wire$js$line_to_BANG_(ctx,p__22842){
var vec__22843 = p__22842;
var x = cljs.core.nth.call(null,vec__22843,(0),null);
var y = cljs.core.nth.call(null,vec__22843,(1),null);
return ctx.lineTo(x,y);
});
c3kit.wire.js.fill_rect_BANG_ = (function c3kit$wire$js$fill_rect_BANG_(ctx,p__22849,p__22850){
var vec__22851 = p__22849;
var x1 = cljs.core.nth.call(null,vec__22851,(0),null);
var y1 = cljs.core.nth.call(null,vec__22851,(1),null);
var vec__22854 = p__22850;
var x2 = cljs.core.nth.call(null,vec__22854,(0),null);
var y2 = cljs.core.nth.call(null,vec__22854,(1),null);
return ctx.fillRect(x1,y1,x2,y2);
});
c3kit.wire.js.stroke_rect_BANG_ = (function c3kit$wire$js$stroke_rect_BANG_(ctx,p__22863,p__22864){
var vec__22865 = p__22863;
var x1 = cljs.core.nth.call(null,vec__22865,(0),null);
var y1 = cljs.core.nth.call(null,vec__22865,(1),null);
var vec__22868 = p__22864;
var x2 = cljs.core.nth.call(null,vec__22868,(0),null);
var y2 = cljs.core.nth.call(null,vec__22868,(1),null);
return ctx.strokeRect(x1,y1,x2,y2);
});
c3kit.wire.js.fill_text_BANG_ = (function c3kit$wire$js$fill_text_BANG_(ctx,text,p__22871){
var vec__22872 = p__22871;
var x = cljs.core.nth.call(null,vec__22872,(0),null);
var y = cljs.core.nth.call(null,vec__22872,(1),null);
return ctx.fillText(text,x,y);
});
c3kit.wire.js.scroll_into_view = (function c3kit$wire$js$scroll_into_view(var_args){
var G__22876 = arguments.length;
switch (G__22876) {
case 1:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$1 = (function (thing){
return c3kit.wire.js.scroll_into_view.call(null,thing,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth"], null));
}));

(c3kit.wire.js.scroll_into_view.cljs$core$IFn$_invoke$arity$2 = (function (thing,options){
var G__22877 = c3kit.wire.js.resolve_node.call(null,thing);
if((G__22877 == null)){
return null;
} else {
return G__22877.scrollIntoView(cljs.core.clj__GT_js.call(null,options));
}
}));

(c3kit.wire.js.scroll_into_view.cljs$lang$maxFixedArity = 2);

c3kit.wire.js.scroll_to = (function c3kit$wire$js$scroll_to(thing,options){
var G__22878 = c3kit.wire.js.resolve_node.call(null,thing);
if((G__22878 == null)){
return null;
} else {
return G__22878.scrollTo(cljs.core.clj__GT_js.call(null,options));
}
});
c3kit.wire.js.scroll_to_top = (function c3kit$wire$js$scroll_to_top(){
return window.scrollTo(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth",new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)));
});
c3kit.wire.js.console_log = cljs.core.partial.call(null,console.log);
/**
 * Insert in threading macro to console log the value.
 */
c3kit.wire.js.__GT_inspect = (function c3kit$wire$js$__GT_inspect(v){
c3kit.wire.js.console_log.call(null,"->inspect:",v);

return v;
});
/**
 * Creates a JavaScript Event of a given type with optional added attributes
 */
c3kit.wire.js.__GT_event = (function c3kit$wire$js$__GT_event(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22903 = arguments.length;
var i__5750__auto___22907 = (0);
while(true){
if((i__5750__auto___22907 < len__5749__auto___22903)){
args__5755__auto__.push((arguments[i__5750__auto___22907]));

var G__22909 = (i__5750__auto___22907 + (1));
i__5750__auto___22907 = G__22909;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.js.__GT_event.cljs$core$IFn$_invoke$arity$variadic = (function (type,p__22882){
var map__22883 = p__22882;
var map__22883__$1 = cljs.core.__destructure_map.call(null,map__22883);
var kvs = map__22883__$1;
return c3kit.wire.js.o_merge_BANG_.call(null,(new Event(type)),kvs);
}));

(c3kit.wire.js.__GT_event.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.js.__GT_event.cljs$lang$applyTo = (function (seq22880){
var G__22881 = cljs.core.first.call(null,seq22880);
var seq22880__$1 = cljs.core.next.call(null,seq22880);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22881,seq22880__$1);
}));

/**
 * Dispatches the event to the node.
 * If given an event, kvs is merged onto it.
 * If given a string, creates a new event of that type with kvs.
 */
c3kit.wire.js.dispatch_event = (function c3kit$wire$js$dispatch_event(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22921 = arguments.length;
var i__5750__auto___22922 = (0);
while(true){
if((i__5750__auto___22922 < len__5749__auto___22921)){
args__5755__auto__.push((arguments[i__5750__auto___22922]));

var G__22923 = (i__5750__auto___22922 + (1));
i__5750__auto___22922 = G__22923;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return c3kit.wire.js.dispatch_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(c3kit.wire.js.dispatch_event.cljs$core$IFn$_invoke$arity$variadic = (function (node,e,p__22887){
var map__22888 = p__22887;
var map__22888__$1 = cljs.core.__destructure_map.call(null,map__22888);
var kvs = map__22888__$1;
var e__$1 = ((typeof e === 'string')?c3kit.wire.js.__GT_event.call(null,e,kvs):c3kit.wire.js.o_merge_BANG_.call(null,e,kvs));
return cljs.core.js_invoke.call(null,node,"dispatchEvent",e__$1);
}));

(c3kit.wire.js.dispatch_event.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(c3kit.wire.js.dispatch_event.cljs$lang$applyTo = (function (seq22884){
var G__22885 = cljs.core.first.call(null,seq22884);
var seq22884__$1 = cljs.core.next.call(null,seq22884);
var G__22886 = cljs.core.first.call(null,seq22884__$1);
var seq22884__$2 = cljs.core.next.call(null,seq22884__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22885,G__22886,seq22884__$2);
}));

c3kit.wire.js.__GT_replacer = (function c3kit$wire$js$__GT_replacer(replacer){
if(cljs.core.fn_QMARK_.call(null,replacer)){
return replacer;
} else {
if(cljs.core.map_QMARK_.call(null,replacer)){
return (function (k,v){
return cljs.core.get.call(null,replacer,k,v);
});
} else {
return cljs.core.clj__GT_js.call(null,replacer);

}
}
});
/**
 * Converts a value to a JSON string.
 *  - value:    The value to convert to JSON.
 *  - replacer: A 2-arity function of key and value
 *  - space:    A string or number that is used to insert white space.
 */
c3kit.wire.js.stringify_json = (function c3kit$wire$js$stringify_json(var_args){
var G__22900 = arguments.length;
switch (G__22900) {
case 1:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$1 = (function (value){
return c3kit.wire.js.stringify_json.call(null,value,null);
}));

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$2 = (function (value,replacer){
return c3kit.wire.js.stringify_json.call(null,value,replacer,(2));
}));

(c3kit.wire.js.stringify_json.cljs$core$IFn$_invoke$arity$3 = (function (value,replacer,space){
return JSON.stringify(cljs.core.clj__GT_js.call(null,value),c3kit.wire.js.__GT_replacer.call(null,replacer),space);
}));

(c3kit.wire.js.stringify_json.cljs$lang$maxFixedArity = 3);

/**
 * Constructs the Clojure value described by the string.
 *  - value:   The JSON string
 *  - reviver: A 2-arity function of key and value
 */
c3kit.wire.js.parse_json = (function c3kit$wire$js$parse_json(var_args){
var G__22908 = arguments.length;
switch (G__22908) {
case 1:
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$1 = (function (text){
return c3kit.wire.js.parse_json.call(null,text,null);
}));

(c3kit.wire.js.parse_json.cljs$core$IFn$_invoke$arity$2 = (function (text,reviver){
return cljs.core.js__GT_clj.call(null,JSON.parse(text,c3kit.wire.js.__GT_replacer.call(null,reviver)));
}));

(c3kit.wire.js.parse_json.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js.js.map
