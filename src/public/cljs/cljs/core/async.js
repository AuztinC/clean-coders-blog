// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15885 = arguments.length;
switch (G__15885) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15888 = (function (f,blockable,meta15889){
this.f = f;
this.blockable = blockable;
this.meta15889 = meta15889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15890,meta15889__$1){
var self__ = this;
var _15890__$1 = this;
return (new cljs.core.async.t_cljs$core$async15888(self__.f,self__.blockable,meta15889__$1));
}));

(cljs.core.async.t_cljs$core$async15888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15890){
var self__ = this;
var _15890__$1 = this;
return self__.meta15889;
}));

(cljs.core.async.t_cljs$core$async15888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15889","meta15889",892897892,null)], null);
}));

(cljs.core.async.t_cljs$core$async15888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15888");

(cljs.core.async.t_cljs$core$async15888.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async15888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15888.
 */
cljs.core.async.__GT_t_cljs$core$async15888 = (function cljs$core$async$__GT_t_cljs$core$async15888(f__$1,blockable__$1,meta15889){
return (new cljs.core.async.t_cljs$core$async15888(f__$1,blockable__$1,meta15889));
});

}

return (new cljs.core.async.t_cljs$core$async15888(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15915 = arguments.length;
switch (G__15915) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15920 = arguments.length;
switch (G__15920) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15924 = arguments.length;
switch (G__15924) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15930 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15930);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_15930);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15928 = arguments.length;
switch (G__15928) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___15945 = n;
var x_15946 = (0);
while(true){
if((x_15946 < n__5616__auto___15945)){
(a[x_15946] = x_15946);

var G__15947 = (x_15946 + (1));
x_15946 = G__15947;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15934 = (function (flag,meta15935){
this.flag = flag;
this.meta15935 = meta15935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15936,meta15935__$1){
var self__ = this;
var _15936__$1 = this;
return (new cljs.core.async.t_cljs$core$async15934(self__.flag,meta15935__$1));
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15936){
var self__ = this;
var _15936__$1 = this;
return self__.meta15935;
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15935","meta15935",2112799103,null)], null);
}));

(cljs.core.async.t_cljs$core$async15934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15934");

(cljs.core.async.t_cljs$core$async15934.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async15934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15934.
 */
cljs.core.async.__GT_t_cljs$core$async15934 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15934(flag__$1,meta15935){
return (new cljs.core.async.t_cljs$core$async15934(flag__$1,meta15935));
});

}

return (new cljs.core.async.t_cljs$core$async15934(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15942 = (function (flag,cb,meta15943){
this.flag = flag;
this.cb = cb;
this.meta15943 = meta15943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15944,meta15943__$1){
var self__ = this;
var _15944__$1 = this;
return (new cljs.core.async.t_cljs$core$async15942(self__.flag,self__.cb,meta15943__$1));
}));

(cljs.core.async.t_cljs$core$async15942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15944){
var self__ = this;
var _15944__$1 = this;
return self__.meta15943;
}));

(cljs.core.async.t_cljs$core$async15942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async15942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15943","meta15943",391103571,null)], null);
}));

(cljs.core.async.t_cljs$core$async15942.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15942");

(cljs.core.async.t_cljs$core$async15942.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async15942");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15942.
 */
cljs.core.async.__GT_t_cljs$core$async15942 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15942(flag__$1,cb__$1,meta15943){
return (new cljs.core.async.t_cljs$core$async15942(flag__$1,cb__$1,meta15943));
});

}

return (new cljs.core.async.t_cljs$core$async15942(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__15952_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15952_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__15953_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15953_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15977 = (i + (1));
i = G__15977;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15984 = arguments.length;
var i__5750__auto___15985 = (0);
while(true){
if((i__5750__auto___15985 < len__5749__auto___15984)){
args__5755__auto__.push((arguments[i__5750__auto___15985]));

var G__15986 = (i__5750__auto___15985 + (1));
i__5750__auto___15985 = G__15986;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15969){
var map__15971 = p__15969;
var map__15971__$1 = cljs.core.__destructure_map.call(null,map__15971);
var opts = map__15971__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15965){
var G__15966 = cljs.core.first.call(null,seq15965);
var seq15965__$1 = cljs.core.next.call(null,seq15965);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15966,seq15965__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15982 = arguments.length;
switch (G__15982) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12886__auto___16074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16015){
var state_val_16016 = (state_16015[(1)]);
if((state_val_16016 === (7))){
var inst_16007 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
var statearr_16020_16081 = state_16015__$1;
(statearr_16020_16081[(2)] = inst_16007);

(statearr_16020_16081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (1))){
var state_16015__$1 = state_16015;
var statearr_16021_16082 = state_16015__$1;
(statearr_16021_16082[(2)] = null);

(statearr_16021_16082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (4))){
var inst_15989 = (state_16015[(7)]);
var inst_15989__$1 = (state_16015[(2)]);
var inst_15990 = (inst_15989__$1 == null);
var state_16015__$1 = (function (){var statearr_16026 = state_16015;
(statearr_16026[(7)] = inst_15989__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15990)){
var statearr_16029_16083 = state_16015__$1;
(statearr_16029_16083[(1)] = (5));

} else {
var statearr_16030_16084 = state_16015__$1;
(statearr_16030_16084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (13))){
var state_16015__$1 = state_16015;
var statearr_16033_16086 = state_16015__$1;
(statearr_16033_16086[(2)] = null);

(statearr_16033_16086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (6))){
var inst_15989 = (state_16015[(7)]);
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16015__$1,(11),to,inst_15989);
} else {
if((state_val_16016 === (3))){
var inst_16009 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16015__$1,inst_16009);
} else {
if((state_val_16016 === (12))){
var state_16015__$1 = state_16015;
var statearr_16035_16091 = state_16015__$1;
(statearr_16035_16091[(2)] = null);

(statearr_16035_16091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (2))){
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16015__$1,(4),from);
} else {
if((state_val_16016 === (11))){
var inst_16000 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
if(cljs.core.truth_(inst_16000)){
var statearr_16039_16094 = state_16015__$1;
(statearr_16039_16094[(1)] = (12));

} else {
var statearr_16042_16095 = state_16015__$1;
(statearr_16042_16095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (9))){
var state_16015__$1 = state_16015;
var statearr_16043_16096 = state_16015__$1;
(statearr_16043_16096[(2)] = null);

(statearr_16043_16096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (5))){
var state_16015__$1 = state_16015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16046_16098 = state_16015__$1;
(statearr_16046_16098[(1)] = (8));

} else {
var statearr_16047_16099 = state_16015__$1;
(statearr_16047_16099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (14))){
var inst_16005 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
var statearr_16051_16100 = state_16015__$1;
(statearr_16051_16100[(2)] = inst_16005);

(statearr_16051_16100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (10))){
var inst_15997 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
var statearr_16054_16105 = state_16015__$1;
(statearr_16054_16105[(2)] = inst_15997);

(statearr_16054_16105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (8))){
var inst_15994 = cljs.core.async.close_BANG_.call(null,to);
var state_16015__$1 = state_16015;
var statearr_16055_16107 = state_16015__$1;
(statearr_16055_16107[(2)] = inst_15994);

(statearr_16055_16107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_16058 = [null,null,null,null,null,null,null,null];
(statearr_16058[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_16058[(1)] = (1));

return statearr_16058;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_16015){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16059){var ex__12182__auto__ = e16059;
var statearr_16060_16146 = state_16015;
(statearr_16060_16146[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16015[(4)]))){
var statearr_16063_16147 = state_16015;
(statearr_16063_16147[(1)] = cljs.core.first.call(null,(state_16015[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16149 = state_16015;
state_16015 = G__16149;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_16015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_16015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16068 = f__12887__auto__.call(null);
(statearr_16068[(6)] = c__12886__auto___16074);

return statearr_16068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__16070){
var vec__16071 = p__16070;
var v = cljs.core.nth.call(null,vec__16071,(0),null);
var p = cljs.core.nth.call(null,vec__16071,(1),null);
var job = vec__16071;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12886__auto___16312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16079){
var state_val_16080 = (state_16079[(1)]);
if((state_val_16080 === (1))){
var state_16079__$1 = state_16079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16079__$1,(2),res,v);
} else {
if((state_val_16080 === (2))){
var inst_16076 = (state_16079[(2)]);
var inst_16077 = cljs.core.async.close_BANG_.call(null,res);
var state_16079__$1 = (function (){var statearr_16085 = state_16079;
(statearr_16085[(7)] = inst_16076);

return statearr_16085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16079__$1,inst_16077);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0 = (function (){
var statearr_16087 = [null,null,null,null,null,null,null,null];
(statearr_16087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__);

(statearr_16087[(1)] = (1));

return statearr_16087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1 = (function (state_16079){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16089){var ex__12182__auto__ = e16089;
var statearr_16090_16324 = state_16079;
(statearr_16090_16324[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16079[(4)]))){
var statearr_16092_16325 = state_16079;
(statearr_16092_16325[(1)] = cljs.core.first.call(null,(state_16079[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16326 = state_16079;
state_16079 = G__16326;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = function(state_16079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1.call(this,state_16079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16097 = f__12887__auto__.call(null);
(statearr_16097[(6)] = c__12886__auto___16312);

return statearr_16097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__16101){
var vec__16102 = p__16101;
var v = cljs.core.nth.call(null,vec__16102,(0),null);
var p = cljs.core.nth.call(null,vec__16102,(1),null);
var job = vec__16102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5616__auto___16327 = n;
var __16328 = (0);
while(true){
if((__16328 < n__5616__auto___16327)){
var G__16108_16329 = type;
var G__16108_16330__$1 = (((G__16108_16329 instanceof cljs.core.Keyword))?G__16108_16329.fqn:null);
switch (G__16108_16330__$1) {
case "compute":
var c__12886__auto___16332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16328,c__12886__auto___16332,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async){
return (function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = ((function (__16328,c__12886__auto___16332,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async){
return (function (state_16125){
var state_val_16126 = (state_16125[(1)]);
if((state_val_16126 === (1))){
var state_16125__$1 = state_16125;
var statearr_16127_16334 = state_16125__$1;
(statearr_16127_16334[(2)] = null);

(statearr_16127_16334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (2))){
var state_16125__$1 = state_16125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16125__$1,(4),jobs);
} else {
if((state_val_16126 === (3))){
var inst_16123 = (state_16125[(2)]);
var state_16125__$1 = state_16125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16125__$1,inst_16123);
} else {
if((state_val_16126 === (4))){
var inst_16111 = (state_16125[(2)]);
var inst_16116 = process__$1.call(null,inst_16111);
var state_16125__$1 = state_16125;
if(cljs.core.truth_(inst_16116)){
var statearr_16133_16336 = state_16125__$1;
(statearr_16133_16336[(1)] = (5));

} else {
var statearr_16135_16338 = state_16125__$1;
(statearr_16135_16338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (5))){
var state_16125__$1 = state_16125;
var statearr_16138_16339 = state_16125__$1;
(statearr_16138_16339[(2)] = null);

(statearr_16138_16339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (6))){
var state_16125__$1 = state_16125;
var statearr_16143_16340 = state_16125__$1;
(statearr_16143_16340[(2)] = null);

(statearr_16143_16340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (7))){
var inst_16121 = (state_16125[(2)]);
var state_16125__$1 = state_16125;
var statearr_16145_16341 = state_16125__$1;
(statearr_16145_16341[(2)] = inst_16121);

(statearr_16145_16341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16328,c__12886__auto___16332,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async))
;
return ((function (__16328,switch__12178__auto__,c__12886__auto___16332,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0 = (function (){
var statearr_16148 = [null,null,null,null,null,null,null];
(statearr_16148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__);

(statearr_16148[(1)] = (1));

return statearr_16148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1 = (function (state_16125){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16150){var ex__12182__auto__ = e16150;
var statearr_16151_16343 = state_16125;
(statearr_16151_16343[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16125[(4)]))){
var statearr_16152_16344 = state_16125;
(statearr_16152_16344[(1)] = cljs.core.first.call(null,(state_16125[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16347 = state_16125;
state_16125 = G__16347;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = function(state_16125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1.call(this,state_16125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__;
})()
;})(__16328,switch__12178__auto__,c__12886__auto___16332,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async))
})();
var state__12888__auto__ = (function (){var statearr_16154 = f__12887__auto__.call(null);
(statearr_16154[(6)] = c__12886__auto___16332);

return statearr_16154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
});})(__16328,c__12886__auto___16332,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async))
);


break;
case "async":
var c__12886__auto___16351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16328,c__12886__auto___16351,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async){
return (function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = ((function (__16328,c__12886__auto___16351,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async){
return (function (state_16169){
var state_val_16170 = (state_16169[(1)]);
if((state_val_16170 === (1))){
var state_16169__$1 = state_16169;
var statearr_16171_16352 = state_16169__$1;
(statearr_16171_16352[(2)] = null);

(statearr_16171_16352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (2))){
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16169__$1,(4),jobs);
} else {
if((state_val_16170 === (3))){
var inst_16166 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16169__$1,inst_16166);
} else {
if((state_val_16170 === (4))){
var inst_16158 = (state_16169[(2)]);
var inst_16159 = async.call(null,inst_16158);
var state_16169__$1 = state_16169;
if(cljs.core.truth_(inst_16159)){
var statearr_16174_16354 = state_16169__$1;
(statearr_16174_16354[(1)] = (5));

} else {
var statearr_16175_16356 = state_16169__$1;
(statearr_16175_16356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (5))){
var state_16169__$1 = state_16169;
var statearr_16176_16358 = state_16169__$1;
(statearr_16176_16358[(2)] = null);

(statearr_16176_16358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (6))){
var state_16169__$1 = state_16169;
var statearr_16177_16359 = state_16169__$1;
(statearr_16177_16359[(2)] = null);

(statearr_16177_16359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16170 === (7))){
var inst_16164 = (state_16169[(2)]);
var state_16169__$1 = state_16169;
var statearr_16178_16360 = state_16169__$1;
(statearr_16178_16360[(2)] = inst_16164);

(statearr_16178_16360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16328,c__12886__auto___16351,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async))
;
return ((function (__16328,switch__12178__auto__,c__12886__auto___16351,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0 = (function (){
var statearr_16179 = [null,null,null,null,null,null,null];
(statearr_16179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__);

(statearr_16179[(1)] = (1));

return statearr_16179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1 = (function (state_16169){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16180){var ex__12182__auto__ = e16180;
var statearr_16181_16361 = state_16169;
(statearr_16181_16361[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16169[(4)]))){
var statearr_16182_16362 = state_16169;
(statearr_16182_16362[(1)] = cljs.core.first.call(null,(state_16169[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16363 = state_16169;
state_16169 = G__16363;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = function(state_16169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1.call(this,state_16169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__;
})()
;})(__16328,switch__12178__auto__,c__12886__auto___16351,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async))
})();
var state__12888__auto__ = (function (){var statearr_16183 = f__12887__auto__.call(null);
(statearr_16183[(6)] = c__12886__auto___16351);

return statearr_16183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
});})(__16328,c__12886__auto___16351,G__16108_16329,G__16108_16330__$1,n__5616__auto___16327,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16108_16330__$1)].join('')));

}

var G__16591 = (__16328 + (1));
__16328 = G__16591;
continue;
} else {
}
break;
}

var c__12886__auto___16594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16207){
var state_val_16208 = (state_16207[(1)]);
if((state_val_16208 === (7))){
var inst_16202 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16209_16607 = state_16207__$1;
(statearr_16209_16607[(2)] = inst_16202);

(statearr_16209_16607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (1))){
var state_16207__$1 = state_16207;
var statearr_16210_16608 = state_16207__$1;
(statearr_16210_16608[(2)] = null);

(statearr_16210_16608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (4))){
var inst_16186 = (state_16207[(7)]);
var inst_16186__$1 = (state_16207[(2)]);
var inst_16187 = (inst_16186__$1 == null);
var state_16207__$1 = (function (){var statearr_16211 = state_16207;
(statearr_16211[(7)] = inst_16186__$1);

return statearr_16211;
})();
if(cljs.core.truth_(inst_16187)){
var statearr_16213_16610 = state_16207__$1;
(statearr_16213_16610[(1)] = (5));

} else {
var statearr_16215_16611 = state_16207__$1;
(statearr_16215_16611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (6))){
var inst_16186 = (state_16207[(7)]);
var inst_16191 = (state_16207[(8)]);
var inst_16191__$1 = cljs.core.async.chan.call(null,(1));
var inst_16192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16193 = [inst_16186,inst_16191__$1];
var inst_16194 = (new cljs.core.PersistentVector(null,2,(5),inst_16192,inst_16193,null));
var state_16207__$1 = (function (){var statearr_16216 = state_16207;
(statearr_16216[(8)] = inst_16191__$1);

return statearr_16216;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16207__$1,(8),jobs,inst_16194);
} else {
if((state_val_16208 === (3))){
var inst_16204 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16207__$1,inst_16204);
} else {
if((state_val_16208 === (2))){
var state_16207__$1 = state_16207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16207__$1,(4),from);
} else {
if((state_val_16208 === (9))){
var inst_16199 = (state_16207[(2)]);
var state_16207__$1 = (function (){var statearr_16217 = state_16207;
(statearr_16217[(9)] = inst_16199);

return statearr_16217;
})();
var statearr_16218_16613 = state_16207__$1;
(statearr_16218_16613[(2)] = null);

(statearr_16218_16613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (5))){
var inst_16189 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16207__$1 = state_16207;
var statearr_16219_16617 = state_16207__$1;
(statearr_16219_16617[(2)] = inst_16189);

(statearr_16219_16617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (8))){
var inst_16191 = (state_16207[(8)]);
var inst_16196 = (state_16207[(2)]);
var state_16207__$1 = (function (){var statearr_16220 = state_16207;
(statearr_16220[(10)] = inst_16196);

return statearr_16220;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16207__$1,(9),results,inst_16191);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0 = (function (){
var statearr_16221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16221[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__);

(statearr_16221[(1)] = (1));

return statearr_16221;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1 = (function (state_16207){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16222){var ex__12182__auto__ = e16222;
var statearr_16223_16619 = state_16207;
(statearr_16223_16619[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16207[(4)]))){
var statearr_16224_16629 = state_16207;
(statearr_16224_16629[(1)] = cljs.core.first.call(null,(state_16207[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16630 = state_16207;
state_16207 = G__16630;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = function(state_16207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1.call(this,state_16207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16225 = f__12887__auto__.call(null);
(statearr_16225[(6)] = c__12886__auto___16594);

return statearr_16225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


var c__12886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16263){
var state_val_16264 = (state_16263[(1)]);
if((state_val_16264 === (7))){
var inst_16259 = (state_16263[(2)]);
var state_16263__$1 = state_16263;
var statearr_16267_16631 = state_16263__$1;
(statearr_16267_16631[(2)] = inst_16259);

(statearr_16267_16631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (20))){
var state_16263__$1 = state_16263;
var statearr_16269_16632 = state_16263__$1;
(statearr_16269_16632[(2)] = null);

(statearr_16269_16632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (1))){
var state_16263__$1 = state_16263;
var statearr_16271_16636 = state_16263__$1;
(statearr_16271_16636[(2)] = null);

(statearr_16271_16636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (4))){
var inst_16228 = (state_16263[(7)]);
var inst_16228__$1 = (state_16263[(2)]);
var inst_16229 = (inst_16228__$1 == null);
var state_16263__$1 = (function (){var statearr_16272 = state_16263;
(statearr_16272[(7)] = inst_16228__$1);

return statearr_16272;
})();
if(cljs.core.truth_(inst_16229)){
var statearr_16273_16637 = state_16263__$1;
(statearr_16273_16637[(1)] = (5));

} else {
var statearr_16274_16638 = state_16263__$1;
(statearr_16274_16638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (15))){
var inst_16241 = (state_16263[(8)]);
var state_16263__$1 = state_16263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16263__$1,(18),to,inst_16241);
} else {
if((state_val_16264 === (21))){
var inst_16254 = (state_16263[(2)]);
var state_16263__$1 = state_16263;
var statearr_16276_16640 = state_16263__$1;
(statearr_16276_16640[(2)] = inst_16254);

(statearr_16276_16640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (13))){
var inst_16256 = (state_16263[(2)]);
var state_16263__$1 = (function (){var statearr_16278 = state_16263;
(statearr_16278[(9)] = inst_16256);

return statearr_16278;
})();
var statearr_16279_16644 = state_16263__$1;
(statearr_16279_16644[(2)] = null);

(statearr_16279_16644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (6))){
var inst_16228 = (state_16263[(7)]);
var state_16263__$1 = state_16263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16263__$1,(11),inst_16228);
} else {
if((state_val_16264 === (17))){
var inst_16249 = (state_16263[(2)]);
var state_16263__$1 = state_16263;
if(cljs.core.truth_(inst_16249)){
var statearr_16281_16647 = state_16263__$1;
(statearr_16281_16647[(1)] = (19));

} else {
var statearr_16282_16648 = state_16263__$1;
(statearr_16282_16648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (3))){
var inst_16261 = (state_16263[(2)]);
var state_16263__$1 = state_16263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16263__$1,inst_16261);
} else {
if((state_val_16264 === (12))){
var inst_16238 = (state_16263[(10)]);
var state_16263__$1 = state_16263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16263__$1,(14),inst_16238);
} else {
if((state_val_16264 === (2))){
var state_16263__$1 = state_16263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16263__$1,(4),results);
} else {
if((state_val_16264 === (19))){
var state_16263__$1 = state_16263;
var statearr_16284_16679 = state_16263__$1;
(statearr_16284_16679[(2)] = null);

(statearr_16284_16679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (11))){
var inst_16238 = (state_16263[(2)]);
var state_16263__$1 = (function (){var statearr_16285 = state_16263;
(statearr_16285[(10)] = inst_16238);

return statearr_16285;
})();
var statearr_16286_16691 = state_16263__$1;
(statearr_16286_16691[(2)] = null);

(statearr_16286_16691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (9))){
var state_16263__$1 = state_16263;
var statearr_16287_16692 = state_16263__$1;
(statearr_16287_16692[(2)] = null);

(statearr_16287_16692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (5))){
var state_16263__$1 = state_16263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16288_16695 = state_16263__$1;
(statearr_16288_16695[(1)] = (8));

} else {
var statearr_16289_16696 = state_16263__$1;
(statearr_16289_16696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (14))){
var inst_16241 = (state_16263[(8)]);
var inst_16243 = (state_16263[(11)]);
var inst_16241__$1 = (state_16263[(2)]);
var inst_16242 = (inst_16241__$1 == null);
var inst_16243__$1 = cljs.core.not.call(null,inst_16242);
var state_16263__$1 = (function (){var statearr_16290 = state_16263;
(statearr_16290[(8)] = inst_16241__$1);

(statearr_16290[(11)] = inst_16243__$1);

return statearr_16290;
})();
if(inst_16243__$1){
var statearr_16291_16700 = state_16263__$1;
(statearr_16291_16700[(1)] = (15));

} else {
var statearr_16292_16704 = state_16263__$1;
(statearr_16292_16704[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (16))){
var inst_16243 = (state_16263[(11)]);
var state_16263__$1 = state_16263;
var statearr_16293_16706 = state_16263__$1;
(statearr_16293_16706[(2)] = inst_16243);

(statearr_16293_16706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (10))){
var inst_16235 = (state_16263[(2)]);
var state_16263__$1 = state_16263;
var statearr_16294_16707 = state_16263__$1;
(statearr_16294_16707[(2)] = inst_16235);

(statearr_16294_16707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (18))){
var inst_16246 = (state_16263[(2)]);
var state_16263__$1 = state_16263;
var statearr_16295_16753 = state_16263__$1;
(statearr_16295_16753[(2)] = inst_16246);

(statearr_16295_16753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16264 === (8))){
var inst_16232 = cljs.core.async.close_BANG_.call(null,to);
var state_16263__$1 = state_16263;
var statearr_16296_16760 = state_16263__$1;
(statearr_16296_16760[(2)] = inst_16232);

(statearr_16296_16760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0 = (function (){
var statearr_16301 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__);

(statearr_16301[(1)] = (1));

return statearr_16301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1 = (function (state_16263){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16302){var ex__12182__auto__ = e16302;
var statearr_16303_16786 = state_16263;
(statearr_16303_16786[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16263[(4)]))){
var statearr_16305_16792 = state_16263;
(statearr_16305_16792[(1)] = cljs.core.first.call(null,(state_16263[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16800 = state_16263;
state_16263 = G__16800;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__ = function(state_16263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1.call(this,state_16263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16307 = f__12887__auto__.call(null);
(statearr_16307[(6)] = c__12886__auto__);

return statearr_16307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));

return c__12886__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16310 = arguments.length;
switch (G__16310) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16353 = arguments.length;
switch (G__16353) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16371 = arguments.length;
switch (G__16371) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12886__auto___16846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16403){
var state_val_16404 = (state_16403[(1)]);
if((state_val_16404 === (7))){
var inst_16399 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16405_16848 = state_16403__$1;
(statearr_16405_16848[(2)] = inst_16399);

(statearr_16405_16848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (1))){
var state_16403__$1 = state_16403;
var statearr_16406_16849 = state_16403__$1;
(statearr_16406_16849[(2)] = null);

(statearr_16406_16849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (4))){
var inst_16380 = (state_16403[(7)]);
var inst_16380__$1 = (state_16403[(2)]);
var inst_16381 = (inst_16380__$1 == null);
var state_16403__$1 = (function (){var statearr_16408 = state_16403;
(statearr_16408[(7)] = inst_16380__$1);

return statearr_16408;
})();
if(cljs.core.truth_(inst_16381)){
var statearr_16409_16851 = state_16403__$1;
(statearr_16409_16851[(1)] = (5));

} else {
var statearr_16410_16852 = state_16403__$1;
(statearr_16410_16852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (13))){
var state_16403__$1 = state_16403;
var statearr_16411_16853 = state_16403__$1;
(statearr_16411_16853[(2)] = null);

(statearr_16411_16853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (6))){
var inst_16380 = (state_16403[(7)]);
var inst_16386 = p.call(null,inst_16380);
var state_16403__$1 = state_16403;
if(cljs.core.truth_(inst_16386)){
var statearr_16413_16855 = state_16403__$1;
(statearr_16413_16855[(1)] = (9));

} else {
var statearr_16414_16856 = state_16403__$1;
(statearr_16414_16856[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (3))){
var inst_16401 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16403__$1,inst_16401);
} else {
if((state_val_16404 === (12))){
var state_16403__$1 = state_16403;
var statearr_16416_16860 = state_16403__$1;
(statearr_16416_16860[(2)] = null);

(statearr_16416_16860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (2))){
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16403__$1,(4),ch);
} else {
if((state_val_16404 === (11))){
var inst_16380 = (state_16403[(7)]);
var inst_16390 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16403__$1,(8),inst_16390,inst_16380);
} else {
if((state_val_16404 === (9))){
var state_16403__$1 = state_16403;
var statearr_16419_16867 = state_16403__$1;
(statearr_16419_16867[(2)] = tc);

(statearr_16419_16867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (5))){
var inst_16383 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16384 = cljs.core.async.close_BANG_.call(null,fc);
var state_16403__$1 = (function (){var statearr_16425 = state_16403;
(statearr_16425[(8)] = inst_16383);

return statearr_16425;
})();
var statearr_16426_16875 = state_16403__$1;
(statearr_16426_16875[(2)] = inst_16384);

(statearr_16426_16875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (14))){
var inst_16397 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
var statearr_16427_16877 = state_16403__$1;
(statearr_16427_16877[(2)] = inst_16397);

(statearr_16427_16877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (10))){
var state_16403__$1 = state_16403;
var statearr_16429_16881 = state_16403__$1;
(statearr_16429_16881[(2)] = fc);

(statearr_16429_16881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16404 === (8))){
var inst_16392 = (state_16403[(2)]);
var state_16403__$1 = state_16403;
if(cljs.core.truth_(inst_16392)){
var statearr_16430_16883 = state_16403__$1;
(statearr_16430_16883[(1)] = (12));

} else {
var statearr_16431_16884 = state_16403__$1;
(statearr_16431_16884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_16432 = [null,null,null,null,null,null,null,null,null];
(statearr_16432[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_16432[(1)] = (1));

return statearr_16432;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_16403){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16433){var ex__12182__auto__ = e16433;
var statearr_16434_16894 = state_16403;
(statearr_16434_16894[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16403[(4)]))){
var statearr_16437_16896 = state_16403;
(statearr_16437_16896[(1)] = cljs.core.first.call(null,(state_16403[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16900 = state_16403;
state_16403 = G__16900;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_16403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_16403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16438 = f__12887__auto__.call(null);
(statearr_16438[(6)] = c__12886__auto___16846);

return statearr_16438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16467){
var state_val_16468 = (state_16467[(1)]);
if((state_val_16468 === (7))){
var inst_16463 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16472_16914 = state_16467__$1;
(statearr_16472_16914[(2)] = inst_16463);

(statearr_16472_16914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (1))){
var inst_16444 = init;
var inst_16445 = inst_16444;
var state_16467__$1 = (function (){var statearr_16474 = state_16467;
(statearr_16474[(7)] = inst_16445);

return statearr_16474;
})();
var statearr_16475_16918 = state_16467__$1;
(statearr_16475_16918[(2)] = null);

(statearr_16475_16918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (4))){
var inst_16448 = (state_16467[(8)]);
var inst_16448__$1 = (state_16467[(2)]);
var inst_16449 = (inst_16448__$1 == null);
var state_16467__$1 = (function (){var statearr_16478 = state_16467;
(statearr_16478[(8)] = inst_16448__$1);

return statearr_16478;
})();
if(cljs.core.truth_(inst_16449)){
var statearr_16479_16922 = state_16467__$1;
(statearr_16479_16922[(1)] = (5));

} else {
var statearr_16480_16923 = state_16467__$1;
(statearr_16480_16923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (6))){
var inst_16445 = (state_16467[(7)]);
var inst_16448 = (state_16467[(8)]);
var inst_16454 = (state_16467[(9)]);
var inst_16454__$1 = f.call(null,inst_16445,inst_16448);
var inst_16455 = cljs.core.reduced_QMARK_.call(null,inst_16454__$1);
var state_16467__$1 = (function (){var statearr_16481 = state_16467;
(statearr_16481[(9)] = inst_16454__$1);

return statearr_16481;
})();
if(inst_16455){
var statearr_16482_16930 = state_16467__$1;
(statearr_16482_16930[(1)] = (8));

} else {
var statearr_16483_16932 = state_16467__$1;
(statearr_16483_16932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (3))){
var inst_16465 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16467__$1,inst_16465);
} else {
if((state_val_16468 === (2))){
var state_16467__$1 = state_16467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16467__$1,(4),ch);
} else {
if((state_val_16468 === (9))){
var inst_16454 = (state_16467[(9)]);
var inst_16445 = inst_16454;
var state_16467__$1 = (function (){var statearr_16485 = state_16467;
(statearr_16485[(7)] = inst_16445);

return statearr_16485;
})();
var statearr_16486_16935 = state_16467__$1;
(statearr_16486_16935[(2)] = null);

(statearr_16486_16935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (5))){
var inst_16445 = (state_16467[(7)]);
var state_16467__$1 = state_16467;
var statearr_16487_16942 = state_16467__$1;
(statearr_16487_16942[(2)] = inst_16445);

(statearr_16487_16942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (10))){
var inst_16461 = (state_16467[(2)]);
var state_16467__$1 = state_16467;
var statearr_16488_16944 = state_16467__$1;
(statearr_16488_16944[(2)] = inst_16461);

(statearr_16488_16944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16468 === (8))){
var inst_16454 = (state_16467[(9)]);
var inst_16457 = cljs.core.deref.call(null,inst_16454);
var state_16467__$1 = state_16467;
var statearr_16489_16946 = state_16467__$1;
(statearr_16489_16946[(2)] = inst_16457);

(statearr_16489_16946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12179__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12179__auto____0 = (function (){
var statearr_16490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16490[(0)] = cljs$core$async$reduce_$_state_machine__12179__auto__);

(statearr_16490[(1)] = (1));

return statearr_16490;
});
var cljs$core$async$reduce_$_state_machine__12179__auto____1 = (function (state_16467){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16493){var ex__12182__auto__ = e16493;
var statearr_16495_16959 = state_16467;
(statearr_16495_16959[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16467[(4)]))){
var statearr_16499_16961 = state_16467;
(statearr_16499_16961[(1)] = cljs.core.first.call(null,(state_16467[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16963 = state_16467;
state_16467 = G__16963;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12179__auto__ = function(state_16467){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12179__auto____1.call(this,state_16467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12179__auto____0;
cljs$core$async$reduce_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12179__auto____1;
return cljs$core$async$reduce_$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16506 = f__12887__auto__.call(null);
(statearr_16506[(6)] = c__12886__auto__);

return statearr_16506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));

return c__12886__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16517){
var state_val_16518 = (state_16517[(1)]);
if((state_val_16518 === (1))){
var inst_16512 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16517__$1 = state_16517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16517__$1,(2),inst_16512);
} else {
if((state_val_16518 === (2))){
var inst_16514 = (state_16517[(2)]);
var inst_16515 = f__$1.call(null,inst_16514);
var state_16517__$1 = state_16517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16517__$1,inst_16515);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12179__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12179__auto____0 = (function (){
var statearr_16519 = [null,null,null,null,null,null,null];
(statearr_16519[(0)] = cljs$core$async$transduce_$_state_machine__12179__auto__);

(statearr_16519[(1)] = (1));

return statearr_16519;
});
var cljs$core$async$transduce_$_state_machine__12179__auto____1 = (function (state_16517){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16521){var ex__12182__auto__ = e16521;
var statearr_16522_16975 = state_16517;
(statearr_16522_16975[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16517[(4)]))){
var statearr_16523_16978 = state_16517;
(statearr_16523_16978[(1)] = cljs.core.first.call(null,(state_16517[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16979 = state_16517;
state_16517 = G__16979;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12179__auto__ = function(state_16517){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12179__auto____1.call(this,state_16517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12179__auto____0;
cljs$core$async$transduce_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12179__auto____1;
return cljs$core$async$transduce_$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16524 = f__12887__auto__.call(null);
(statearr_16524[(6)] = c__12886__auto__);

return statearr_16524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));

return c__12886__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16526 = arguments.length;
switch (G__16526) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16552){
var state_val_16553 = (state_16552[(1)]);
if((state_val_16553 === (7))){
var inst_16533 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16559_16997 = state_16552__$1;
(statearr_16559_16997[(2)] = inst_16533);

(statearr_16559_16997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (1))){
var inst_16527 = cljs.core.seq.call(null,coll);
var inst_16528 = inst_16527;
var state_16552__$1 = (function (){var statearr_16561 = state_16552;
(statearr_16561[(7)] = inst_16528);

return statearr_16561;
})();
var statearr_16562_17000 = state_16552__$1;
(statearr_16562_17000[(2)] = null);

(statearr_16562_17000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (4))){
var inst_16528 = (state_16552[(7)]);
var inst_16531 = cljs.core.first.call(null,inst_16528);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16552__$1,(7),ch,inst_16531);
} else {
if((state_val_16553 === (13))){
var inst_16545 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16563_17003 = state_16552__$1;
(statearr_16563_17003[(2)] = inst_16545);

(statearr_16563_17003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (6))){
var inst_16536 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16536)){
var statearr_16564_17004 = state_16552__$1;
(statearr_16564_17004[(1)] = (8));

} else {
var statearr_16565_17005 = state_16552__$1;
(statearr_16565_17005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (3))){
var inst_16550 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16552__$1,inst_16550);
} else {
if((state_val_16553 === (12))){
var state_16552__$1 = state_16552;
var statearr_16567_17007 = state_16552__$1;
(statearr_16567_17007[(2)] = null);

(statearr_16567_17007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (2))){
var inst_16528 = (state_16552[(7)]);
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16528)){
var statearr_16571_17009 = state_16552__$1;
(statearr_16571_17009[(1)] = (4));

} else {
var statearr_16572_17014 = state_16552__$1;
(statearr_16572_17014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (11))){
var inst_16542 = cljs.core.async.close_BANG_.call(null,ch);
var state_16552__$1 = state_16552;
var statearr_16573_17017 = state_16552__$1;
(statearr_16573_17017[(2)] = inst_16542);

(statearr_16573_17017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (9))){
var state_16552__$1 = state_16552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16574_17019 = state_16552__$1;
(statearr_16574_17019[(1)] = (11));

} else {
var statearr_16575_17020 = state_16552__$1;
(statearr_16575_17020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (5))){
var inst_16528 = (state_16552[(7)]);
var state_16552__$1 = state_16552;
var statearr_16577_17021 = state_16552__$1;
(statearr_16577_17021[(2)] = inst_16528);

(statearr_16577_17021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (10))){
var inst_16548 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16578_17023 = state_16552__$1;
(statearr_16578_17023[(2)] = inst_16548);

(statearr_16578_17023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (8))){
var inst_16528 = (state_16552[(7)]);
var inst_16538 = cljs.core.next.call(null,inst_16528);
var inst_16528__$1 = inst_16538;
var state_16552__$1 = (function (){var statearr_16579 = state_16552;
(statearr_16579[(7)] = inst_16528__$1);

return statearr_16579;
})();
var statearr_16580_17025 = state_16552__$1;
(statearr_16580_17025[(2)] = null);

(statearr_16580_17025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_16581 = [null,null,null,null,null,null,null,null];
(statearr_16581[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_16581[(1)] = (1));

return statearr_16581;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_16552){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e16582){var ex__12182__auto__ = e16582;
var statearr_16583_17029 = state_16552;
(statearr_16583_17029[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16552[(4)]))){
var statearr_16584_17031 = state_16552;
(statearr_16584_17031[(1)] = cljs.core.first.call(null,(state_16552[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17032 = state_16552;
state_16552 = G__17032;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_16592 = f__12887__auto__.call(null);
(statearr_16592[(6)] = c__12886__auto__);

return statearr_16592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));

return c__12886__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16598 = arguments.length;
switch (G__16598) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17052 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17052.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17066 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17066.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17070 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17070.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17074 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17074.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16633 = (function (ch,cs,meta16634){
this.ch = ch;
this.cs = cs;
this.meta16634 = meta16634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16635,meta16634__$1){
var self__ = this;
var _16635__$1 = this;
return (new cljs.core.async.t_cljs$core$async16633(self__.ch,self__.cs,meta16634__$1));
}));

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16635){
var self__ = this;
var _16635__$1 = this;
return self__.meta16634;
}));

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16633.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16634","meta16634",917784270,null)], null);
}));

(cljs.core.async.t_cljs$core$async16633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16633");

(cljs.core.async.t_cljs$core$async16633.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async16633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16633.
 */
cljs.core.async.__GT_t_cljs$core$async16633 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16633(ch__$1,cs__$1,meta16634){
return (new cljs.core.async.t_cljs$core$async16633(ch__$1,cs__$1,meta16634));
});

}

return (new cljs.core.async.t_cljs$core$async16633(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__12886__auto___17103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_16831){
var state_val_16832 = (state_16831[(1)]);
if((state_val_16832 === (7))){
var inst_16822 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_16836_17104 = state_16831__$1;
(statearr_16836_17104[(2)] = inst_16822);

(statearr_16836_17104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (20))){
var inst_16690 = (state_16831[(7)]);
var inst_16724 = cljs.core.first.call(null,inst_16690);
var inst_16725 = cljs.core.nth.call(null,inst_16724,(0),null);
var inst_16726 = cljs.core.nth.call(null,inst_16724,(1),null);
var state_16831__$1 = (function (){var statearr_16843 = state_16831;
(statearr_16843[(8)] = inst_16725);

return statearr_16843;
})();
if(cljs.core.truth_(inst_16726)){
var statearr_16844_17105 = state_16831__$1;
(statearr_16844_17105[(1)] = (22));

} else {
var statearr_16845_17106 = state_16831__$1;
(statearr_16845_17106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (27))){
var inst_16755 = (state_16831[(9)]);
var inst_16757 = (state_16831[(10)]);
var inst_16766 = (state_16831[(11)]);
var inst_16652 = (state_16831[(12)]);
var inst_16766__$1 = cljs.core._nth.call(null,inst_16755,inst_16757);
var inst_16768 = cljs.core.async.put_BANG_.call(null,inst_16766__$1,inst_16652,done);
var state_16831__$1 = (function (){var statearr_16850 = state_16831;
(statearr_16850[(11)] = inst_16766__$1);

return statearr_16850;
})();
if(cljs.core.truth_(inst_16768)){
var statearr_16868_17107 = state_16831__$1;
(statearr_16868_17107[(1)] = (30));

} else {
var statearr_16872_17108 = state_16831__$1;
(statearr_16872_17108[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (1))){
var state_16831__$1 = state_16831;
var statearr_16874_17109 = state_16831__$1;
(statearr_16874_17109[(2)] = null);

(statearr_16874_17109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (24))){
var inst_16690 = (state_16831[(7)]);
var inst_16731 = (state_16831[(2)]);
var inst_16732 = cljs.core.next.call(null,inst_16690);
var inst_16661 = inst_16732;
var inst_16662 = null;
var inst_16663 = (0);
var inst_16664 = (0);
var state_16831__$1 = (function (){var statearr_16880 = state_16831;
(statearr_16880[(13)] = inst_16731);

(statearr_16880[(14)] = inst_16661);

(statearr_16880[(15)] = inst_16662);

(statearr_16880[(16)] = inst_16663);

(statearr_16880[(17)] = inst_16664);

return statearr_16880;
})();
var statearr_16882_17110 = state_16831__$1;
(statearr_16882_17110[(2)] = null);

(statearr_16882_17110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (39))){
var state_16831__$1 = state_16831;
var statearr_16892_17111 = state_16831__$1;
(statearr_16892_17111[(2)] = null);

(statearr_16892_17111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (4))){
var inst_16652 = (state_16831[(12)]);
var inst_16652__$1 = (state_16831[(2)]);
var inst_16653 = (inst_16652__$1 == null);
var state_16831__$1 = (function (){var statearr_16893 = state_16831;
(statearr_16893[(12)] = inst_16652__$1);

return statearr_16893;
})();
if(cljs.core.truth_(inst_16653)){
var statearr_16895_17113 = state_16831__$1;
(statearr_16895_17113[(1)] = (5));

} else {
var statearr_16897_17116 = state_16831__$1;
(statearr_16897_17116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (15))){
var inst_16664 = (state_16831[(17)]);
var inst_16661 = (state_16831[(14)]);
var inst_16662 = (state_16831[(15)]);
var inst_16663 = (state_16831[(16)]);
var inst_16680 = (state_16831[(2)]);
var inst_16681 = (inst_16664 + (1));
var tmp16889 = inst_16661;
var tmp16890 = inst_16662;
var tmp16891 = inst_16663;
var inst_16661__$1 = tmp16889;
var inst_16662__$1 = tmp16890;
var inst_16663__$1 = tmp16891;
var inst_16664__$1 = inst_16681;
var state_16831__$1 = (function (){var statearr_16902 = state_16831;
(statearr_16902[(18)] = inst_16680);

(statearr_16902[(14)] = inst_16661__$1);

(statearr_16902[(15)] = inst_16662__$1);

(statearr_16902[(16)] = inst_16663__$1);

(statearr_16902[(17)] = inst_16664__$1);

return statearr_16902;
})();
var statearr_16905_17118 = state_16831__$1;
(statearr_16905_17118[(2)] = null);

(statearr_16905_17118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (21))){
var inst_16735 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_16917_17119 = state_16831__$1;
(statearr_16917_17119[(2)] = inst_16735);

(statearr_16917_17119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (31))){
var inst_16766 = (state_16831[(11)]);
var inst_16771 = cljs.core.async.untap_STAR_.call(null,m,inst_16766);
var state_16831__$1 = state_16831;
var statearr_16919_17120 = state_16831__$1;
(statearr_16919_17120[(2)] = inst_16771);

(statearr_16919_17120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (32))){
var inst_16757 = (state_16831[(10)]);
var inst_16754 = (state_16831[(19)]);
var inst_16755 = (state_16831[(9)]);
var inst_16756 = (state_16831[(20)]);
var inst_16773 = (state_16831[(2)]);
var inst_16774 = (inst_16757 + (1));
var tmp16911 = inst_16754;
var tmp16912 = inst_16756;
var tmp16913 = inst_16755;
var inst_16754__$1 = tmp16911;
var inst_16755__$1 = tmp16913;
var inst_16756__$1 = tmp16912;
var inst_16757__$1 = inst_16774;
var state_16831__$1 = (function (){var statearr_16926 = state_16831;
(statearr_16926[(21)] = inst_16773);

(statearr_16926[(19)] = inst_16754__$1);

(statearr_16926[(9)] = inst_16755__$1);

(statearr_16926[(20)] = inst_16756__$1);

(statearr_16926[(10)] = inst_16757__$1);

return statearr_16926;
})();
var statearr_16931_17121 = state_16831__$1;
(statearr_16931_17121[(2)] = null);

(statearr_16931_17121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (40))){
var inst_16793 = (state_16831[(22)]);
var inst_16798 = cljs.core.async.untap_STAR_.call(null,m,inst_16793);
var state_16831__$1 = state_16831;
var statearr_16934_17123 = state_16831__$1;
(statearr_16934_17123[(2)] = inst_16798);

(statearr_16934_17123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (33))){
var inst_16777 = (state_16831[(23)]);
var inst_16782 = cljs.core.chunked_seq_QMARK_.call(null,inst_16777);
var state_16831__$1 = state_16831;
if(inst_16782){
var statearr_16938_17131 = state_16831__$1;
(statearr_16938_17131[(1)] = (36));

} else {
var statearr_16940_17135 = state_16831__$1;
(statearr_16940_17135[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (13))){
var inst_16673 = (state_16831[(24)]);
var inst_16676 = cljs.core.async.close_BANG_.call(null,inst_16673);
var state_16831__$1 = state_16831;
var statearr_16945_17136 = state_16831__$1;
(statearr_16945_17136[(2)] = inst_16676);

(statearr_16945_17136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (22))){
var inst_16725 = (state_16831[(8)]);
var inst_16728 = cljs.core.async.close_BANG_.call(null,inst_16725);
var state_16831__$1 = state_16831;
var statearr_16947_17137 = state_16831__$1;
(statearr_16947_17137[(2)] = inst_16728);

(statearr_16947_17137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (36))){
var inst_16777 = (state_16831[(23)]);
var inst_16784 = cljs.core.chunk_first.call(null,inst_16777);
var inst_16785 = cljs.core.chunk_rest.call(null,inst_16777);
var inst_16787 = cljs.core.count.call(null,inst_16784);
var inst_16754 = inst_16785;
var inst_16755 = inst_16784;
var inst_16756 = inst_16787;
var inst_16757 = (0);
var state_16831__$1 = (function (){var statearr_16957 = state_16831;
(statearr_16957[(19)] = inst_16754);

(statearr_16957[(9)] = inst_16755);

(statearr_16957[(20)] = inst_16756);

(statearr_16957[(10)] = inst_16757);

return statearr_16957;
})();
var statearr_16960_17141 = state_16831__$1;
(statearr_16960_17141[(2)] = null);

(statearr_16960_17141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (41))){
var inst_16777 = (state_16831[(23)]);
var inst_16801 = (state_16831[(2)]);
var inst_16802 = cljs.core.next.call(null,inst_16777);
var inst_16754 = inst_16802;
var inst_16755 = null;
var inst_16756 = (0);
var inst_16757 = (0);
var state_16831__$1 = (function (){var statearr_16964 = state_16831;
(statearr_16964[(25)] = inst_16801);

(statearr_16964[(19)] = inst_16754);

(statearr_16964[(9)] = inst_16755);

(statearr_16964[(20)] = inst_16756);

(statearr_16964[(10)] = inst_16757);

return statearr_16964;
})();
var statearr_16968_17145 = state_16831__$1;
(statearr_16968_17145[(2)] = null);

(statearr_16968_17145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (43))){
var state_16831__$1 = state_16831;
var statearr_16971_17146 = state_16831__$1;
(statearr_16971_17146[(2)] = null);

(statearr_16971_17146[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (29))){
var inst_16810 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_16974_17150 = state_16831__$1;
(statearr_16974_17150[(2)] = inst_16810);

(statearr_16974_17150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (44))){
var inst_16819 = (state_16831[(2)]);
var state_16831__$1 = (function (){var statearr_16976 = state_16831;
(statearr_16976[(26)] = inst_16819);

return statearr_16976;
})();
var statearr_16977_17151 = state_16831__$1;
(statearr_16977_17151[(2)] = null);

(statearr_16977_17151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (6))){
var inst_16745 = (state_16831[(27)]);
var inst_16744 = cljs.core.deref.call(null,cs);
var inst_16745__$1 = cljs.core.keys.call(null,inst_16744);
var inst_16746 = cljs.core.count.call(null,inst_16745__$1);
var inst_16747 = cljs.core.reset_BANG_.call(null,dctr,inst_16746);
var inst_16752 = cljs.core.seq.call(null,inst_16745__$1);
var inst_16754 = inst_16752;
var inst_16755 = null;
var inst_16756 = (0);
var inst_16757 = (0);
var state_16831__$1 = (function (){var statearr_16983 = state_16831;
(statearr_16983[(27)] = inst_16745__$1);

(statearr_16983[(28)] = inst_16747);

(statearr_16983[(19)] = inst_16754);

(statearr_16983[(9)] = inst_16755);

(statearr_16983[(20)] = inst_16756);

(statearr_16983[(10)] = inst_16757);

return statearr_16983;
})();
var statearr_16988_17152 = state_16831__$1;
(statearr_16988_17152[(2)] = null);

(statearr_16988_17152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (28))){
var inst_16754 = (state_16831[(19)]);
var inst_16777 = (state_16831[(23)]);
var inst_16777__$1 = cljs.core.seq.call(null,inst_16754);
var state_16831__$1 = (function (){var statearr_16994 = state_16831;
(statearr_16994[(23)] = inst_16777__$1);

return statearr_16994;
})();
if(inst_16777__$1){
var statearr_16995_17156 = state_16831__$1;
(statearr_16995_17156[(1)] = (33));

} else {
var statearr_16996_17158 = state_16831__$1;
(statearr_16996_17158[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (25))){
var inst_16757 = (state_16831[(10)]);
var inst_16756 = (state_16831[(20)]);
var inst_16761 = (inst_16757 < inst_16756);
var inst_16763 = inst_16761;
var state_16831__$1 = state_16831;
if(cljs.core.truth_(inst_16763)){
var statearr_16998_17162 = state_16831__$1;
(statearr_16998_17162[(1)] = (27));

} else {
var statearr_16999_17163 = state_16831__$1;
(statearr_16999_17163[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (34))){
var state_16831__$1 = state_16831;
var statearr_17001_17164 = state_16831__$1;
(statearr_17001_17164[(2)] = null);

(statearr_17001_17164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (17))){
var state_16831__$1 = state_16831;
var statearr_17002_17168 = state_16831__$1;
(statearr_17002_17168[(2)] = null);

(statearr_17002_17168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (3))){
var inst_16824 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16831__$1,inst_16824);
} else {
if((state_val_16832 === (12))){
var inst_16740 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_17006_17170 = state_16831__$1;
(statearr_17006_17170[(2)] = inst_16740);

(statearr_17006_17170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (2))){
var state_16831__$1 = state_16831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16831__$1,(4),ch);
} else {
if((state_val_16832 === (23))){
var state_16831__$1 = state_16831;
var statearr_17015_17171 = state_16831__$1;
(statearr_17015_17171[(2)] = null);

(statearr_17015_17171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (35))){
var inst_16808 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_17018_17172 = state_16831__$1;
(statearr_17018_17172[(2)] = inst_16808);

(statearr_17018_17172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (19))){
var inst_16690 = (state_16831[(7)]);
var inst_16716 = cljs.core.chunk_first.call(null,inst_16690);
var inst_16717 = cljs.core.chunk_rest.call(null,inst_16690);
var inst_16718 = cljs.core.count.call(null,inst_16716);
var inst_16661 = inst_16717;
var inst_16662 = inst_16716;
var inst_16663 = inst_16718;
var inst_16664 = (0);
var state_16831__$1 = (function (){var statearr_17022 = state_16831;
(statearr_17022[(14)] = inst_16661);

(statearr_17022[(15)] = inst_16662);

(statearr_17022[(16)] = inst_16663);

(statearr_17022[(17)] = inst_16664);

return statearr_17022;
})();
var statearr_17024_17173 = state_16831__$1;
(statearr_17024_17173[(2)] = null);

(statearr_17024_17173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (11))){
var inst_16661 = (state_16831[(14)]);
var inst_16690 = (state_16831[(7)]);
var inst_16690__$1 = cljs.core.seq.call(null,inst_16661);
var state_16831__$1 = (function (){var statearr_17026 = state_16831;
(statearr_17026[(7)] = inst_16690__$1);

return statearr_17026;
})();
if(inst_16690__$1){
var statearr_17027_17177 = state_16831__$1;
(statearr_17027_17177[(1)] = (16));

} else {
var statearr_17028_17178 = state_16831__$1;
(statearr_17028_17178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (9))){
var inst_16742 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_17030_17179 = state_16831__$1;
(statearr_17030_17179[(2)] = inst_16742);

(statearr_17030_17179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (5))){
var inst_16659 = cljs.core.deref.call(null,cs);
var inst_16660 = cljs.core.seq.call(null,inst_16659);
var inst_16661 = inst_16660;
var inst_16662 = null;
var inst_16663 = (0);
var inst_16664 = (0);
var state_16831__$1 = (function (){var statearr_17033 = state_16831;
(statearr_17033[(14)] = inst_16661);

(statearr_17033[(15)] = inst_16662);

(statearr_17033[(16)] = inst_16663);

(statearr_17033[(17)] = inst_16664);

return statearr_17033;
})();
var statearr_17035_17180 = state_16831__$1;
(statearr_17035_17180[(2)] = null);

(statearr_17035_17180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (14))){
var state_16831__$1 = state_16831;
var statearr_17036_17181 = state_16831__$1;
(statearr_17036_17181[(2)] = null);

(statearr_17036_17181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (45))){
var inst_16816 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_17038_17182 = state_16831__$1;
(statearr_17038_17182[(2)] = inst_16816);

(statearr_17038_17182[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (26))){
var inst_16745 = (state_16831[(27)]);
var inst_16812 = (state_16831[(2)]);
var inst_16813 = cljs.core.seq.call(null,inst_16745);
var state_16831__$1 = (function (){var statearr_17050 = state_16831;
(statearr_17050[(29)] = inst_16812);

return statearr_17050;
})();
if(inst_16813){
var statearr_17051_17185 = state_16831__$1;
(statearr_17051_17185[(1)] = (42));

} else {
var statearr_17053_17186 = state_16831__$1;
(statearr_17053_17186[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (16))){
var inst_16690 = (state_16831[(7)]);
var inst_16714 = cljs.core.chunked_seq_QMARK_.call(null,inst_16690);
var state_16831__$1 = state_16831;
if(inst_16714){
var statearr_17059_17187 = state_16831__$1;
(statearr_17059_17187[(1)] = (19));

} else {
var statearr_17064_17188 = state_16831__$1;
(statearr_17064_17188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (38))){
var inst_16805 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_17067_17191 = state_16831__$1;
(statearr_17067_17191[(2)] = inst_16805);

(statearr_17067_17191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (30))){
var state_16831__$1 = state_16831;
var statearr_17068_17192 = state_16831__$1;
(statearr_17068_17192[(2)] = null);

(statearr_17068_17192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (10))){
var inst_16662 = (state_16831[(15)]);
var inst_16664 = (state_16831[(17)]);
var inst_16672 = cljs.core._nth.call(null,inst_16662,inst_16664);
var inst_16673 = cljs.core.nth.call(null,inst_16672,(0),null);
var inst_16674 = cljs.core.nth.call(null,inst_16672,(1),null);
var state_16831__$1 = (function (){var statearr_17069 = state_16831;
(statearr_17069[(24)] = inst_16673);

return statearr_17069;
})();
if(cljs.core.truth_(inst_16674)){
var statearr_17071_17193 = state_16831__$1;
(statearr_17071_17193[(1)] = (13));

} else {
var statearr_17072_17194 = state_16831__$1;
(statearr_17072_17194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (18))){
var inst_16738 = (state_16831[(2)]);
var state_16831__$1 = state_16831;
var statearr_17073_17195 = state_16831__$1;
(statearr_17073_17195[(2)] = inst_16738);

(statearr_17073_17195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (42))){
var state_16831__$1 = state_16831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16831__$1,(45),dchan);
} else {
if((state_val_16832 === (37))){
var inst_16777 = (state_16831[(23)]);
var inst_16793 = (state_16831[(22)]);
var inst_16652 = (state_16831[(12)]);
var inst_16793__$1 = cljs.core.first.call(null,inst_16777);
var inst_16794 = cljs.core.async.put_BANG_.call(null,inst_16793__$1,inst_16652,done);
var state_16831__$1 = (function (){var statearr_17075 = state_16831;
(statearr_17075[(22)] = inst_16793__$1);

return statearr_17075;
})();
if(cljs.core.truth_(inst_16794)){
var statearr_17076_17196 = state_16831__$1;
(statearr_17076_17196[(1)] = (39));

} else {
var statearr_17077_17197 = state_16831__$1;
(statearr_17077_17197[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16832 === (8))){
var inst_16664 = (state_16831[(17)]);
var inst_16663 = (state_16831[(16)]);
var inst_16666 = (inst_16664 < inst_16663);
var inst_16667 = inst_16666;
var state_16831__$1 = state_16831;
if(cljs.core.truth_(inst_16667)){
var statearr_17084_17198 = state_16831__$1;
(statearr_17084_17198[(1)] = (10));

} else {
var statearr_17085_17199 = state_16831__$1;
(statearr_17085_17199[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12179__auto__ = null;
var cljs$core$async$mult_$_state_machine__12179__auto____0 = (function (){
var statearr_17087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17087[(0)] = cljs$core$async$mult_$_state_machine__12179__auto__);

(statearr_17087[(1)] = (1));

return statearr_17087;
});
var cljs$core$async$mult_$_state_machine__12179__auto____1 = (function (state_16831){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_16831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17088){var ex__12182__auto__ = e17088;
var statearr_17089_17211 = state_16831;
(statearr_17089_17211[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_16831[(4)]))){
var statearr_17090_17217 = state_16831;
(statearr_17090_17217[(1)] = cljs.core.first.call(null,(state_16831[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17224 = state_16831;
state_16831 = G__17224;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12179__auto__ = function(state_16831){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12179__auto____1.call(this,state_16831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12179__auto____0;
cljs$core$async$mult_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12179__auto____1;
return cljs$core$async$mult_$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17091 = f__12887__auto__.call(null);
(statearr_17091[(6)] = c__12886__auto___17103);

return statearr_17091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17094 = arguments.length;
switch (G__17094) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17279 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17279.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17284 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17284.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17291 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17291.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17294 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,state_map);
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17294.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17301 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,mode);
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17301.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17314 = arguments.length;
var i__5750__auto___17315 = (0);
while(true){
if((i__5750__auto___17315 < len__5749__auto___17314)){
args__5755__auto__.push((arguments[i__5750__auto___17315]));

var G__17316 = (i__5750__auto___17315 + (1));
i__5750__auto___17315 = G__17316;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17138){
var map__17139 = p__17138;
var map__17139__$1 = cljs.core.__destructure_map.call(null,map__17139);
var opts = map__17139__$1;
var statearr_17140_17318 = state;
(statearr_17140_17318[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_17142_17319 = state;
(statearr_17142_17319[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_17143_17321 = state;
(statearr_17143_17321[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17127){
var G__17128 = cljs.core.first.call(null,seq17127);
var seq17127__$1 = cljs.core.next.call(null,seq17127);
var G__17129 = cljs.core.first.call(null,seq17127__$1);
var seq17127__$2 = cljs.core.next.call(null,seq17127__$1);
var G__17130 = cljs.core.first.call(null,seq17127__$2);
var seq17127__$3 = cljs.core.next.call(null,seq17127__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17128,G__17129,G__17130,seq17127__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17174 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17175){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17175 = meta17175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17176,meta17175__$1){
var self__ = this;
var _17176__$1 = this;
return (new cljs.core.async.t_cljs$core$async17174(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17175__$1));
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17176){
var self__ = this;
var _17176__$1 = this;
return self__.meta17175;
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17174.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17175","meta17175",356184650,null)], null);
}));

(cljs.core.async.t_cljs$core$async17174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17174");

(cljs.core.async.t_cljs$core$async17174.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17174.
 */
cljs.core.async.__GT_t_cljs$core$async17174 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17174(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17175){
return (new cljs.core.async.t_cljs$core$async17174(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17175));
});

}

return (new cljs.core.async.t_cljs$core$async17174(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12886__auto___17352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_17280){
var state_val_17281 = (state_17280[(1)]);
if((state_val_17281 === (7))){
var inst_17238 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
if(cljs.core.truth_(inst_17238)){
var statearr_17282_17354 = state_17280__$1;
(statearr_17282_17354[(1)] = (8));

} else {
var statearr_17283_17355 = state_17280__$1;
(statearr_17283_17355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (20))){
var inst_17231 = (state_17280[(7)]);
var state_17280__$1 = state_17280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17280__$1,(23),out,inst_17231);
} else {
if((state_val_17281 === (1))){
var inst_17208 = calc_state.call(null);
var inst_17210 = cljs.core.__destructure_map.call(null,inst_17208);
var inst_17212 = cljs.core.get.call(null,inst_17210,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17214 = cljs.core.get.call(null,inst_17210,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17215 = cljs.core.get.call(null,inst_17210,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17218 = inst_17208;
var state_17280__$1 = (function (){var statearr_17289 = state_17280;
(statearr_17289[(8)] = inst_17212);

(statearr_17289[(9)] = inst_17214);

(statearr_17289[(10)] = inst_17215);

(statearr_17289[(11)] = inst_17218);

return statearr_17289;
})();
var statearr_17290_17356 = state_17280__$1;
(statearr_17290_17356[(2)] = null);

(statearr_17290_17356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (24))){
var inst_17221 = (state_17280[(12)]);
var inst_17218 = inst_17221;
var state_17280__$1 = (function (){var statearr_17292 = state_17280;
(statearr_17292[(11)] = inst_17218);

return statearr_17292;
})();
var statearr_17293_17357 = state_17280__$1;
(statearr_17293_17357[(2)] = null);

(statearr_17293_17357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (4))){
var inst_17231 = (state_17280[(7)]);
var inst_17233 = (state_17280[(13)]);
var inst_17230 = (state_17280[(2)]);
var inst_17231__$1 = cljs.core.nth.call(null,inst_17230,(0),null);
var inst_17232 = cljs.core.nth.call(null,inst_17230,(1),null);
var inst_17233__$1 = (inst_17231__$1 == null);
var state_17280__$1 = (function (){var statearr_17295 = state_17280;
(statearr_17295[(7)] = inst_17231__$1);

(statearr_17295[(14)] = inst_17232);

(statearr_17295[(13)] = inst_17233__$1);

return statearr_17295;
})();
if(cljs.core.truth_(inst_17233__$1)){
var statearr_17296_17360 = state_17280__$1;
(statearr_17296_17360[(1)] = (5));

} else {
var statearr_17297_17361 = state_17280__$1;
(statearr_17297_17361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (15))){
var inst_17222 = (state_17280[(15)]);
var inst_17253 = (state_17280[(16)]);
var inst_17253__$1 = cljs.core.empty_QMARK_.call(null,inst_17222);
var state_17280__$1 = (function (){var statearr_17300 = state_17280;
(statearr_17300[(16)] = inst_17253__$1);

return statearr_17300;
})();
if(inst_17253__$1){
var statearr_17302_17363 = state_17280__$1;
(statearr_17302_17363[(1)] = (17));

} else {
var statearr_17303_17364 = state_17280__$1;
(statearr_17303_17364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (21))){
var inst_17221 = (state_17280[(12)]);
var inst_17218 = inst_17221;
var state_17280__$1 = (function (){var statearr_17304 = state_17280;
(statearr_17304[(11)] = inst_17218);

return statearr_17304;
})();
var statearr_17305_17366 = state_17280__$1;
(statearr_17305_17366[(2)] = null);

(statearr_17305_17366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (13))){
var inst_17246 = (state_17280[(2)]);
var inst_17247 = calc_state.call(null);
var inst_17218 = inst_17247;
var state_17280__$1 = (function (){var statearr_17306 = state_17280;
(statearr_17306[(17)] = inst_17246);

(statearr_17306[(11)] = inst_17218);

return statearr_17306;
})();
var statearr_17307_17367 = state_17280__$1;
(statearr_17307_17367[(2)] = null);

(statearr_17307_17367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (22))){
var inst_17273 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
var statearr_17308_17368 = state_17280__$1;
(statearr_17308_17368[(2)] = inst_17273);

(statearr_17308_17368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (6))){
var inst_17232 = (state_17280[(14)]);
var inst_17236 = cljs.core._EQ_.call(null,inst_17232,change);
var state_17280__$1 = state_17280;
var statearr_17310_17372 = state_17280__$1;
(statearr_17310_17372[(2)] = inst_17236);

(statearr_17310_17372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (25))){
var state_17280__$1 = state_17280;
var statearr_17312_17373 = state_17280__$1;
(statearr_17312_17373[(2)] = null);

(statearr_17312_17373[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (17))){
var inst_17223 = (state_17280[(18)]);
var inst_17232 = (state_17280[(14)]);
var inst_17255 = inst_17223.call(null,inst_17232);
var inst_17256 = cljs.core.not.call(null,inst_17255);
var state_17280__$1 = state_17280;
var statearr_17317_17374 = state_17280__$1;
(statearr_17317_17374[(2)] = inst_17256);

(statearr_17317_17374[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (3))){
var inst_17277 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17280__$1,inst_17277);
} else {
if((state_val_17281 === (12))){
var state_17280__$1 = state_17280;
var statearr_17320_17375 = state_17280__$1;
(statearr_17320_17375[(2)] = null);

(statearr_17320_17375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (2))){
var inst_17218 = (state_17280[(11)]);
var inst_17221 = (state_17280[(12)]);
var inst_17221__$1 = cljs.core.__destructure_map.call(null,inst_17218);
var inst_17222 = cljs.core.get.call(null,inst_17221__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17223 = cljs.core.get.call(null,inst_17221__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17225 = cljs.core.get.call(null,inst_17221__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17280__$1 = (function (){var statearr_17322 = state_17280;
(statearr_17322[(12)] = inst_17221__$1);

(statearr_17322[(15)] = inst_17222);

(statearr_17322[(18)] = inst_17223);

return statearr_17322;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17280__$1,(4),inst_17225);
} else {
if((state_val_17281 === (23))){
var inst_17264 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
if(cljs.core.truth_(inst_17264)){
var statearr_17323_17376 = state_17280__$1;
(statearr_17323_17376[(1)] = (24));

} else {
var statearr_17324_17377 = state_17280__$1;
(statearr_17324_17377[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (19))){
var inst_17259 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
var statearr_17325_17378 = state_17280__$1;
(statearr_17325_17378[(2)] = inst_17259);

(statearr_17325_17378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (11))){
var inst_17232 = (state_17280[(14)]);
var inst_17243 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17232);
var state_17280__$1 = state_17280;
var statearr_17326_17379 = state_17280__$1;
(statearr_17326_17379[(2)] = inst_17243);

(statearr_17326_17379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (9))){
var inst_17222 = (state_17280[(15)]);
var inst_17232 = (state_17280[(14)]);
var inst_17250 = (state_17280[(19)]);
var inst_17250__$1 = inst_17222.call(null,inst_17232);
var state_17280__$1 = (function (){var statearr_17327 = state_17280;
(statearr_17327[(19)] = inst_17250__$1);

return statearr_17327;
})();
if(cljs.core.truth_(inst_17250__$1)){
var statearr_17328_17380 = state_17280__$1;
(statearr_17328_17380[(1)] = (14));

} else {
var statearr_17329_17381 = state_17280__$1;
(statearr_17329_17381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (5))){
var inst_17233 = (state_17280[(13)]);
var state_17280__$1 = state_17280;
var statearr_17331_17382 = state_17280__$1;
(statearr_17331_17382[(2)] = inst_17233);

(statearr_17331_17382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (14))){
var inst_17250 = (state_17280[(19)]);
var state_17280__$1 = state_17280;
var statearr_17332_17383 = state_17280__$1;
(statearr_17332_17383[(2)] = inst_17250);

(statearr_17332_17383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (26))){
var inst_17269 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
var statearr_17334_17384 = state_17280__$1;
(statearr_17334_17384[(2)] = inst_17269);

(statearr_17334_17384[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (16))){
var inst_17261 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
if(cljs.core.truth_(inst_17261)){
var statearr_17335_17385 = state_17280__$1;
(statearr_17335_17385[(1)] = (20));

} else {
var statearr_17336_17386 = state_17280__$1;
(statearr_17336_17386[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (10))){
var inst_17275 = (state_17280[(2)]);
var state_17280__$1 = state_17280;
var statearr_17337_17389 = state_17280__$1;
(statearr_17337_17389[(2)] = inst_17275);

(statearr_17337_17389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (18))){
var inst_17253 = (state_17280[(16)]);
var state_17280__$1 = state_17280;
var statearr_17338_17397 = state_17280__$1;
(statearr_17338_17397[(2)] = inst_17253);

(statearr_17338_17397[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17281 === (8))){
var inst_17231 = (state_17280[(7)]);
var inst_17241 = (inst_17231 == null);
var state_17280__$1 = state_17280;
if(cljs.core.truth_(inst_17241)){
var statearr_17339_17409 = state_17280__$1;
(statearr_17339_17409[(1)] = (11));

} else {
var statearr_17340_17412 = state_17280__$1;
(statearr_17340_17412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12179__auto__ = null;
var cljs$core$async$mix_$_state_machine__12179__auto____0 = (function (){
var statearr_17341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17341[(0)] = cljs$core$async$mix_$_state_machine__12179__auto__);

(statearr_17341[(1)] = (1));

return statearr_17341;
});
var cljs$core$async$mix_$_state_machine__12179__auto____1 = (function (state_17280){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_17280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17342){var ex__12182__auto__ = e17342;
var statearr_17343_17438 = state_17280;
(statearr_17343_17438[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_17280[(4)]))){
var statearr_17344_17447 = state_17280;
(statearr_17344_17447[(1)] = cljs.core.first.call(null,(state_17280[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17462 = state_17280;
state_17280 = G__17462;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12179__auto__ = function(state_17280){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12179__auto____1.call(this,state_17280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12179__auto____0;
cljs$core$async$mix_$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12179__auto____1;
return cljs$core$async$mix_$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17347 = f__12887__auto__.call(null);
(statearr_17347[(6)] = c__12886__auto___17352);

return statearr_17347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17471 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17471.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17478 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17478.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17490 = (function() {
var G__17491 = null;
var G__17491__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__17491__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__17491 = function(p,v){
switch(arguments.length){
case 1:
return G__17491__1.call(this,p);
case 2:
return G__17491__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17491.cljs$core$IFn$_invoke$arity$1 = G__17491__1;
G__17491.cljs$core$IFn$_invoke$arity$2 = G__17491__2;
return G__17491;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17353 = arguments.length;
switch (G__17353) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17490.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17490.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17362 = arguments.length;
switch (G__17362) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__17358_SHARP_){
if(cljs.core.truth_(p1__17358_SHARP_.call(null,topic))){
return p1__17358_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17358_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17369 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17370){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17370 = meta17370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17371,meta17370__$1){
var self__ = this;
var _17371__$1 = this;
return (new cljs.core.async.t_cljs$core$async17369(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17370__$1));
}));

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17371){
var self__ = this;
var _17371__$1 = this;
return self__.meta17370;
}));

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17369.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17370","meta17370",-1866081832,null)], null);
}));

(cljs.core.async.t_cljs$core$async17369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17369");

(cljs.core.async.t_cljs$core$async17369.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17369.
 */
cljs.core.async.__GT_t_cljs$core$async17369 = (function cljs$core$async$__GT_t_cljs$core$async17369(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17370){
return (new cljs.core.async.t_cljs$core$async17369(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17370));
});

}

return (new cljs.core.async.t_cljs$core$async17369(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12886__auto___17576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_17468){
var state_val_17469 = (state_17468[(1)]);
if((state_val_17469 === (7))){
var inst_17464 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
var statearr_17470_17577 = state_17468__$1;
(statearr_17470_17577[(2)] = inst_17464);

(statearr_17470_17577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (20))){
var state_17468__$1 = state_17468;
var statearr_17472_17578 = state_17468__$1;
(statearr_17472_17578[(2)] = null);

(statearr_17472_17578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (1))){
var state_17468__$1 = state_17468;
var statearr_17473_17582 = state_17468__$1;
(statearr_17473_17582[(2)] = null);

(statearr_17473_17582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (24))){
var inst_17444 = (state_17468[(7)]);
var inst_17455 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17444);
var state_17468__$1 = state_17468;
var statearr_17474_17585 = state_17468__$1;
(statearr_17474_17585[(2)] = inst_17455);

(statearr_17474_17585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (4))){
var inst_17390 = (state_17468[(8)]);
var inst_17390__$1 = (state_17468[(2)]);
var inst_17391 = (inst_17390__$1 == null);
var state_17468__$1 = (function (){var statearr_17479 = state_17468;
(statearr_17479[(8)] = inst_17390__$1);

return statearr_17479;
})();
if(cljs.core.truth_(inst_17391)){
var statearr_17480_17586 = state_17468__$1;
(statearr_17480_17586[(1)] = (5));

} else {
var statearr_17481_17587 = state_17468__$1;
(statearr_17481_17587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (15))){
var inst_17437 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
var statearr_17488_17589 = state_17468__$1;
(statearr_17488_17589[(2)] = inst_17437);

(statearr_17488_17589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (21))){
var inst_17460 = (state_17468[(2)]);
var state_17468__$1 = (function (){var statearr_17492 = state_17468;
(statearr_17492[(9)] = inst_17460);

return statearr_17492;
})();
var statearr_17493_17629 = state_17468__$1;
(statearr_17493_17629[(2)] = null);

(statearr_17493_17629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (13))){
var inst_17419 = (state_17468[(10)]);
var inst_17421 = cljs.core.chunked_seq_QMARK_.call(null,inst_17419);
var state_17468__$1 = state_17468;
if(inst_17421){
var statearr_17494_17635 = state_17468__$1;
(statearr_17494_17635[(1)] = (16));

} else {
var statearr_17495_17637 = state_17468__$1;
(statearr_17495_17637[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (22))){
var inst_17451 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
if(cljs.core.truth_(inst_17451)){
var statearr_17496_17639 = state_17468__$1;
(statearr_17496_17639[(1)] = (23));

} else {
var statearr_17498_17641 = state_17468__$1;
(statearr_17498_17641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (6))){
var inst_17390 = (state_17468[(8)]);
var inst_17444 = (state_17468[(7)]);
var inst_17446 = (state_17468[(11)]);
var inst_17444__$1 = topic_fn.call(null,inst_17390);
var inst_17445 = cljs.core.deref.call(null,mults);
var inst_17446__$1 = cljs.core.get.call(null,inst_17445,inst_17444__$1);
var state_17468__$1 = (function (){var statearr_17499 = state_17468;
(statearr_17499[(7)] = inst_17444__$1);

(statearr_17499[(11)] = inst_17446__$1);

return statearr_17499;
})();
if(cljs.core.truth_(inst_17446__$1)){
var statearr_17500_17665 = state_17468__$1;
(statearr_17500_17665[(1)] = (19));

} else {
var statearr_17501_17669 = state_17468__$1;
(statearr_17501_17669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (25))){
var inst_17457 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
var statearr_17502_17675 = state_17468__$1;
(statearr_17502_17675[(2)] = inst_17457);

(statearr_17502_17675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (17))){
var inst_17419 = (state_17468[(10)]);
var inst_17428 = cljs.core.first.call(null,inst_17419);
var inst_17429 = cljs.core.async.muxch_STAR_.call(null,inst_17428);
var inst_17430 = cljs.core.async.close_BANG_.call(null,inst_17429);
var inst_17431 = cljs.core.next.call(null,inst_17419);
var inst_17401 = inst_17431;
var inst_17402 = null;
var inst_17403 = (0);
var inst_17404 = (0);
var state_17468__$1 = (function (){var statearr_17503 = state_17468;
(statearr_17503[(12)] = inst_17430);

(statearr_17503[(13)] = inst_17401);

(statearr_17503[(14)] = inst_17402);

(statearr_17503[(15)] = inst_17403);

(statearr_17503[(16)] = inst_17404);

return statearr_17503;
})();
var statearr_17504_17682 = state_17468__$1;
(statearr_17504_17682[(2)] = null);

(statearr_17504_17682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (3))){
var inst_17466 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17468__$1,inst_17466);
} else {
if((state_val_17469 === (12))){
var inst_17440 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
var statearr_17507_17686 = state_17468__$1;
(statearr_17507_17686[(2)] = inst_17440);

(statearr_17507_17686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (2))){
var state_17468__$1 = state_17468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17468__$1,(4),ch);
} else {
if((state_val_17469 === (23))){
var state_17468__$1 = state_17468;
var statearr_17514_17690 = state_17468__$1;
(statearr_17514_17690[(2)] = null);

(statearr_17514_17690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (19))){
var inst_17446 = (state_17468[(11)]);
var inst_17390 = (state_17468[(8)]);
var inst_17449 = cljs.core.async.muxch_STAR_.call(null,inst_17446);
var state_17468__$1 = state_17468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17468__$1,(22),inst_17449,inst_17390);
} else {
if((state_val_17469 === (11))){
var inst_17401 = (state_17468[(13)]);
var inst_17419 = (state_17468[(10)]);
var inst_17419__$1 = cljs.core.seq.call(null,inst_17401);
var state_17468__$1 = (function (){var statearr_17518 = state_17468;
(statearr_17518[(10)] = inst_17419__$1);

return statearr_17518;
})();
if(inst_17419__$1){
var statearr_17520_17694 = state_17468__$1;
(statearr_17520_17694[(1)] = (13));

} else {
var statearr_17521_17695 = state_17468__$1;
(statearr_17521_17695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (9))){
var inst_17442 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
var statearr_17522_17697 = state_17468__$1;
(statearr_17522_17697[(2)] = inst_17442);

(statearr_17522_17697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (5))){
var inst_17398 = cljs.core.deref.call(null,mults);
var inst_17399 = cljs.core.vals.call(null,inst_17398);
var inst_17400 = cljs.core.seq.call(null,inst_17399);
var inst_17401 = inst_17400;
var inst_17402 = null;
var inst_17403 = (0);
var inst_17404 = (0);
var state_17468__$1 = (function (){var statearr_17525 = state_17468;
(statearr_17525[(13)] = inst_17401);

(statearr_17525[(14)] = inst_17402);

(statearr_17525[(15)] = inst_17403);

(statearr_17525[(16)] = inst_17404);

return statearr_17525;
})();
var statearr_17530_17700 = state_17468__$1;
(statearr_17530_17700[(2)] = null);

(statearr_17530_17700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (14))){
var state_17468__$1 = state_17468;
var statearr_17535_17701 = state_17468__$1;
(statearr_17535_17701[(2)] = null);

(statearr_17535_17701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (16))){
var inst_17419 = (state_17468[(10)]);
var inst_17423 = cljs.core.chunk_first.call(null,inst_17419);
var inst_17424 = cljs.core.chunk_rest.call(null,inst_17419);
var inst_17425 = cljs.core.count.call(null,inst_17423);
var inst_17401 = inst_17424;
var inst_17402 = inst_17423;
var inst_17403 = inst_17425;
var inst_17404 = (0);
var state_17468__$1 = (function (){var statearr_17537 = state_17468;
(statearr_17537[(13)] = inst_17401);

(statearr_17537[(14)] = inst_17402);

(statearr_17537[(15)] = inst_17403);

(statearr_17537[(16)] = inst_17404);

return statearr_17537;
})();
var statearr_17538_17703 = state_17468__$1;
(statearr_17538_17703[(2)] = null);

(statearr_17538_17703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (10))){
var inst_17402 = (state_17468[(14)]);
var inst_17404 = (state_17468[(16)]);
var inst_17401 = (state_17468[(13)]);
var inst_17403 = (state_17468[(15)]);
var inst_17411 = cljs.core._nth.call(null,inst_17402,inst_17404);
var inst_17413 = cljs.core.async.muxch_STAR_.call(null,inst_17411);
var inst_17414 = cljs.core.async.close_BANG_.call(null,inst_17413);
var inst_17416 = (inst_17404 + (1));
var tmp17532 = inst_17402;
var tmp17533 = inst_17403;
var tmp17534 = inst_17401;
var inst_17401__$1 = tmp17534;
var inst_17402__$1 = tmp17532;
var inst_17403__$1 = tmp17533;
var inst_17404__$1 = inst_17416;
var state_17468__$1 = (function (){var statearr_17540 = state_17468;
(statearr_17540[(17)] = inst_17414);

(statearr_17540[(13)] = inst_17401__$1);

(statearr_17540[(14)] = inst_17402__$1);

(statearr_17540[(15)] = inst_17403__$1);

(statearr_17540[(16)] = inst_17404__$1);

return statearr_17540;
})();
var statearr_17541_17704 = state_17468__$1;
(statearr_17541_17704[(2)] = null);

(statearr_17541_17704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (18))){
var inst_17434 = (state_17468[(2)]);
var state_17468__$1 = state_17468;
var statearr_17542_17707 = state_17468__$1;
(statearr_17542_17707[(2)] = inst_17434);

(statearr_17542_17707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17469 === (8))){
var inst_17404 = (state_17468[(16)]);
var inst_17403 = (state_17468[(15)]);
var inst_17406 = (inst_17404 < inst_17403);
var inst_17407 = inst_17406;
var state_17468__$1 = state_17468;
if(cljs.core.truth_(inst_17407)){
var statearr_17543_17711 = state_17468__$1;
(statearr_17543_17711[(1)] = (10));

} else {
var statearr_17544_17712 = state_17468__$1;
(statearr_17544_17712[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_17550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17550[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_17550[(1)] = (1));

return statearr_17550;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_17468){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_17468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17552){var ex__12182__auto__ = e17552;
var statearr_17553_17720 = state_17468;
(statearr_17553_17720[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_17468[(4)]))){
var statearr_17555_17752 = state_17468;
(statearr_17555_17752[(1)] = cljs.core.first.call(null,(state_17468[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17756 = state_17468;
state_17468 = G__17756;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_17468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_17468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17556 = f__12887__auto__.call(null);
(statearr_17556[(6)] = c__12886__auto___17576);

return statearr_17556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17565 = arguments.length;
switch (G__17565) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17571 = arguments.length;
switch (G__17571) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17573 = arguments.length;
switch (G__17573) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__12886__auto___17784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_17630){
var state_val_17632 = (state_17630[(1)]);
if((state_val_17632 === (7))){
var state_17630__$1 = state_17630;
var statearr_17638_17785 = state_17630__$1;
(statearr_17638_17785[(2)] = null);

(statearr_17638_17785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (1))){
var state_17630__$1 = state_17630;
var statearr_17640_17787 = state_17630__$1;
(statearr_17640_17787[(2)] = null);

(statearr_17640_17787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (4))){
var inst_17583 = (state_17630[(7)]);
var inst_17581 = (state_17630[(8)]);
var inst_17590 = (inst_17583 < inst_17581);
var state_17630__$1 = state_17630;
if(cljs.core.truth_(inst_17590)){
var statearr_17646_17788 = state_17630__$1;
(statearr_17646_17788[(1)] = (6));

} else {
var statearr_17647_17790 = state_17630__$1;
(statearr_17647_17790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (15))){
var inst_17613 = (state_17630[(9)]);
var inst_17619 = cljs.core.apply.call(null,f,inst_17613);
var state_17630__$1 = state_17630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17630__$1,(17),out,inst_17619);
} else {
if((state_val_17632 === (13))){
var inst_17613 = (state_17630[(9)]);
var inst_17613__$1 = (state_17630[(2)]);
var inst_17614 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17613__$1);
var state_17630__$1 = (function (){var statearr_17648 = state_17630;
(statearr_17648[(9)] = inst_17613__$1);

return statearr_17648;
})();
if(cljs.core.truth_(inst_17614)){
var statearr_17649_17794 = state_17630__$1;
(statearr_17649_17794[(1)] = (14));

} else {
var statearr_17651_17795 = state_17630__$1;
(statearr_17651_17795[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (6))){
var state_17630__$1 = state_17630;
var statearr_17652_17796 = state_17630__$1;
(statearr_17652_17796[(2)] = null);

(statearr_17652_17796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (17))){
var inst_17621 = (state_17630[(2)]);
var state_17630__$1 = (function (){var statearr_17654 = state_17630;
(statearr_17654[(10)] = inst_17621);

return statearr_17654;
})();
var statearr_17656_17797 = state_17630__$1;
(statearr_17656_17797[(2)] = null);

(statearr_17656_17797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (3))){
var inst_17627 = (state_17630[(2)]);
var state_17630__$1 = state_17630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17630__$1,inst_17627);
} else {
if((state_val_17632 === (12))){
var _ = (function (){var statearr_17657 = state_17630;
(statearr_17657[(4)] = cljs.core.rest.call(null,(state_17630[(4)])));

return statearr_17657;
})();
var state_17630__$1 = state_17630;
var ex17653 = (state_17630__$1[(2)]);
var statearr_17658_17800 = state_17630__$1;
(statearr_17658_17800[(5)] = ex17653);


if((ex17653 instanceof Object)){
var statearr_17659_17802 = state_17630__$1;
(statearr_17659_17802[(1)] = (11));

(statearr_17659_17802[(5)] = null);

} else {
throw ex17653;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (2))){
var inst_17580 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17581 = cnt;
var inst_17583 = (0);
var state_17630__$1 = (function (){var statearr_17662 = state_17630;
(statearr_17662[(11)] = inst_17580);

(statearr_17662[(8)] = inst_17581);

(statearr_17662[(7)] = inst_17583);

return statearr_17662;
})();
var statearr_17663_17811 = state_17630__$1;
(statearr_17663_17811[(2)] = null);

(statearr_17663_17811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (11))){
var inst_17592 = (state_17630[(2)]);
var inst_17593 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17630__$1 = (function (){var statearr_17666 = state_17630;
(statearr_17666[(12)] = inst_17592);

return statearr_17666;
})();
var statearr_17667_17815 = state_17630__$1;
(statearr_17667_17815[(2)] = inst_17593);

(statearr_17667_17815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (9))){
var inst_17583 = (state_17630[(7)]);
var _ = (function (){var statearr_17668 = state_17630;
(statearr_17668[(4)] = cljs.core.cons.call(null,(12),(state_17630[(4)])));

return statearr_17668;
})();
var inst_17599 = chs__$1.call(null,inst_17583);
var inst_17600 = done.call(null,inst_17583);
var inst_17601 = cljs.core.async.take_BANG_.call(null,inst_17599,inst_17600);
var ___$1 = (function (){var statearr_17670 = state_17630;
(statearr_17670[(4)] = cljs.core.rest.call(null,(state_17630[(4)])));

return statearr_17670;
})();
var state_17630__$1 = state_17630;
var statearr_17673_17818 = state_17630__$1;
(statearr_17673_17818[(2)] = inst_17601);

(statearr_17673_17818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (5))){
var inst_17611 = (state_17630[(2)]);
var state_17630__$1 = (function (){var statearr_17674 = state_17630;
(statearr_17674[(13)] = inst_17611);

return statearr_17674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17630__$1,(13),dchan);
} else {
if((state_val_17632 === (14))){
var inst_17616 = cljs.core.async.close_BANG_.call(null,out);
var state_17630__$1 = state_17630;
var statearr_17677_17820 = state_17630__$1;
(statearr_17677_17820[(2)] = inst_17616);

(statearr_17677_17820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (16))){
var inst_17625 = (state_17630[(2)]);
var state_17630__$1 = state_17630;
var statearr_17678_17822 = state_17630__$1;
(statearr_17678_17822[(2)] = inst_17625);

(statearr_17678_17822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (10))){
var inst_17583 = (state_17630[(7)]);
var inst_17604 = (state_17630[(2)]);
var inst_17605 = (inst_17583 + (1));
var inst_17583__$1 = inst_17605;
var state_17630__$1 = (function (){var statearr_17683 = state_17630;
(statearr_17683[(14)] = inst_17604);

(statearr_17683[(7)] = inst_17583__$1);

return statearr_17683;
})();
var statearr_17684_17825 = state_17630__$1;
(statearr_17684_17825[(2)] = null);

(statearr_17684_17825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (8))){
var inst_17609 = (state_17630[(2)]);
var state_17630__$1 = state_17630;
var statearr_17689_17828 = state_17630__$1;
(statearr_17689_17828[(2)] = inst_17609);

(statearr_17689_17828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_17692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17692[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_17692[(1)] = (1));

return statearr_17692;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_17630){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_17630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17698){var ex__12182__auto__ = e17698;
var statearr_17699_17852 = state_17630;
(statearr_17699_17852[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_17630[(4)]))){
var statearr_17702_17855 = state_17630;
(statearr_17702_17855[(1)] = cljs.core.first.call(null,(state_17630[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17856 = state_17630;
state_17630 = G__17856;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_17630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_17630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17705 = f__12887__auto__.call(null);
(statearr_17705[(6)] = c__12886__auto___17784);

return statearr_17705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17719 = arguments.length;
switch (G__17719) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12886__auto___17866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_17753){
var state_val_17754 = (state_17753[(1)]);
if((state_val_17754 === (7))){
var inst_17731 = (state_17753[(7)]);
var inst_17732 = (state_17753[(8)]);
var inst_17731__$1 = (state_17753[(2)]);
var inst_17732__$1 = cljs.core.nth.call(null,inst_17731__$1,(0),null);
var inst_17733 = cljs.core.nth.call(null,inst_17731__$1,(1),null);
var inst_17734 = (inst_17732__$1 == null);
var state_17753__$1 = (function (){var statearr_17761 = state_17753;
(statearr_17761[(7)] = inst_17731__$1);

(statearr_17761[(8)] = inst_17732__$1);

(statearr_17761[(9)] = inst_17733);

return statearr_17761;
})();
if(cljs.core.truth_(inst_17734)){
var statearr_17762_17869 = state_17753__$1;
(statearr_17762_17869[(1)] = (8));

} else {
var statearr_17763_17870 = state_17753__$1;
(statearr_17763_17870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (1))){
var inst_17721 = cljs.core.vec.call(null,chs);
var inst_17722 = inst_17721;
var state_17753__$1 = (function (){var statearr_17764 = state_17753;
(statearr_17764[(10)] = inst_17722);

return statearr_17764;
})();
var statearr_17765_17873 = state_17753__$1;
(statearr_17765_17873[(2)] = null);

(statearr_17765_17873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (4))){
var inst_17722 = (state_17753[(10)]);
var state_17753__$1 = state_17753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17753__$1,(7),inst_17722);
} else {
if((state_val_17754 === (6))){
var inst_17748 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
var statearr_17773_17875 = state_17753__$1;
(statearr_17773_17875[(2)] = inst_17748);

(statearr_17773_17875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (3))){
var inst_17750 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17753__$1,inst_17750);
} else {
if((state_val_17754 === (2))){
var inst_17722 = (state_17753[(10)]);
var inst_17724 = cljs.core.count.call(null,inst_17722);
var inst_17725 = (inst_17724 > (0));
var state_17753__$1 = state_17753;
if(cljs.core.truth_(inst_17725)){
var statearr_17777_17878 = state_17753__$1;
(statearr_17777_17878[(1)] = (4));

} else {
var statearr_17779_17880 = state_17753__$1;
(statearr_17779_17880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (11))){
var inst_17722 = (state_17753[(10)]);
var inst_17741 = (state_17753[(2)]);
var tmp17774 = inst_17722;
var inst_17722__$1 = tmp17774;
var state_17753__$1 = (function (){var statearr_17781 = state_17753;
(statearr_17781[(11)] = inst_17741);

(statearr_17781[(10)] = inst_17722__$1);

return statearr_17781;
})();
var statearr_17782_17882 = state_17753__$1;
(statearr_17782_17882[(2)] = null);

(statearr_17782_17882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (9))){
var inst_17732 = (state_17753[(8)]);
var state_17753__$1 = state_17753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17753__$1,(11),out,inst_17732);
} else {
if((state_val_17754 === (5))){
var inst_17746 = cljs.core.async.close_BANG_.call(null,out);
var state_17753__$1 = state_17753;
var statearr_17791_17883 = state_17753__$1;
(statearr_17791_17883[(2)] = inst_17746);

(statearr_17791_17883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (10))){
var inst_17744 = (state_17753[(2)]);
var state_17753__$1 = state_17753;
var statearr_17792_17885 = state_17753__$1;
(statearr_17792_17885[(2)] = inst_17744);

(statearr_17792_17885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17754 === (8))){
var inst_17722 = (state_17753[(10)]);
var inst_17731 = (state_17753[(7)]);
var inst_17732 = (state_17753[(8)]);
var inst_17733 = (state_17753[(9)]);
var inst_17736 = (function (){var cs = inst_17722;
var vec__17727 = inst_17731;
var v = inst_17732;
var c = inst_17733;
return (function (p1__17714_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17714_SHARP_);
});
})();
var inst_17737 = cljs.core.filterv.call(null,inst_17736,inst_17722);
var inst_17722__$1 = inst_17737;
var state_17753__$1 = (function (){var statearr_17798 = state_17753;
(statearr_17798[(10)] = inst_17722__$1);

return statearr_17798;
})();
var statearr_17801_17889 = state_17753__$1;
(statearr_17801_17889[(2)] = null);

(statearr_17801_17889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_17806 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17806[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_17806[(1)] = (1));

return statearr_17806;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_17753){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_17753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17808){var ex__12182__auto__ = e17808;
var statearr_17809_17891 = state_17753;
(statearr_17809_17891[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_17753[(4)]))){
var statearr_17810_17893 = state_17753;
(statearr_17810_17893[(1)] = cljs.core.first.call(null,(state_17753[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17896 = state_17753;
state_17753 = G__17896;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_17753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_17753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17813 = f__12887__auto__.call(null);
(statearr_17813[(6)] = c__12886__auto___17866);

return statearr_17813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17819 = arguments.length;
switch (G__17819) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12886__auto___17903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (7))){
var inst_17832 = (state_17850[(7)]);
var inst_17832__$1 = (state_17850[(2)]);
var inst_17833 = (inst_17832__$1 == null);
var inst_17834 = cljs.core.not.call(null,inst_17833);
var state_17850__$1 = (function (){var statearr_17858 = state_17850;
(statearr_17858[(7)] = inst_17832__$1);

return statearr_17858;
})();
if(inst_17834){
var statearr_17860_17906 = state_17850__$1;
(statearr_17860_17906[(1)] = (8));

} else {
var statearr_17861_17907 = state_17850__$1;
(statearr_17861_17907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (1))){
var inst_17826 = (0);
var state_17850__$1 = (function (){var statearr_17863 = state_17850;
(statearr_17863[(8)] = inst_17826);

return statearr_17863;
})();
var statearr_17865_17909 = state_17850__$1;
(statearr_17865_17909[(2)] = null);

(statearr_17865_17909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (4))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17850__$1,(7),ch);
} else {
if((state_val_17851 === (6))){
var inst_17845 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17867_17910 = state_17850__$1;
(statearr_17867_17910[(2)] = inst_17845);

(statearr_17867_17910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (3))){
var inst_17847 = (state_17850[(2)]);
var inst_17848 = cljs.core.async.close_BANG_.call(null,out);
var state_17850__$1 = (function (){var statearr_17868 = state_17850;
(statearr_17868[(9)] = inst_17847);

return statearr_17868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17850__$1,inst_17848);
} else {
if((state_val_17851 === (2))){
var inst_17826 = (state_17850[(8)]);
var inst_17829 = (inst_17826 < n);
var state_17850__$1 = state_17850;
if(cljs.core.truth_(inst_17829)){
var statearr_17871_17914 = state_17850__$1;
(statearr_17871_17914[(1)] = (4));

} else {
var statearr_17872_17915 = state_17850__$1;
(statearr_17872_17915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (11))){
var inst_17826 = (state_17850[(8)]);
var inst_17837 = (state_17850[(2)]);
var inst_17838 = (inst_17826 + (1));
var inst_17826__$1 = inst_17838;
var state_17850__$1 = (function (){var statearr_17874 = state_17850;
(statearr_17874[(10)] = inst_17837);

(statearr_17874[(8)] = inst_17826__$1);

return statearr_17874;
})();
var statearr_17876_17916 = state_17850__$1;
(statearr_17876_17916[(2)] = null);

(statearr_17876_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (9))){
var state_17850__$1 = state_17850;
var statearr_17877_17917 = state_17850__$1;
(statearr_17877_17917[(2)] = null);

(statearr_17877_17917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (5))){
var state_17850__$1 = state_17850;
var statearr_17879_17918 = state_17850__$1;
(statearr_17879_17918[(2)] = null);

(statearr_17879_17918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (10))){
var inst_17842 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17881_17919 = state_17850__$1;
(statearr_17881_17919[(2)] = inst_17842);

(statearr_17881_17919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17851 === (8))){
var inst_17832 = (state_17850[(7)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17850__$1,(11),out,inst_17832);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_17884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17884[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_17884[(1)] = (1));

return statearr_17884;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_17850){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_17850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17886){var ex__12182__auto__ = e17886;
var statearr_17887_17920 = state_17850;
(statearr_17887_17920[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_17850[(4)]))){
var statearr_17888_17921 = state_17850;
(statearr_17888_17921[(1)] = cljs.core.first.call(null,(state_17850[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17922 = state_17850;
state_17850 = G__17922;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17890 = f__12887__auto__.call(null);
(statearr_17890[(6)] = c__12886__auto___17903);

return statearr_17890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17898 = (function (f,ch,meta17899){
this.f = f;
this.ch = ch;
this.meta17899 = meta17899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17900,meta17899__$1){
var self__ = this;
var _17900__$1 = this;
return (new cljs.core.async.t_cljs$core$async17898(self__.f,self__.ch,meta17899__$1));
}));

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17900){
var self__ = this;
var _17900__$1 = this;
return self__.meta17899;
}));

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17911 = (function (f,ch,meta17899,_,fn1,meta17912){
this.f = f;
this.ch = ch;
this.meta17899 = meta17899;
this._ = _;
this.fn1 = fn1;
this.meta17912 = meta17912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17913,meta17912__$1){
var self__ = this;
var _17913__$1 = this;
return (new cljs.core.async.t_cljs$core$async17911(self__.f,self__.ch,self__.meta17899,self__._,self__.fn1,meta17912__$1));
}));

(cljs.core.async.t_cljs$core$async17911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17913){
var self__ = this;
var _17913__$1 = this;
return self__.meta17912;
}));

(cljs.core.async.t_cljs$core$async17911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__17895_SHARP_){
return f1.call(null,(((p1__17895_SHARP_ == null))?null:self__.f.call(null,p1__17895_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async17911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17899","meta17899",2033016332,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17898","cljs.core.async/t_cljs$core$async17898",-2047054030,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17912","meta17912",-697086345,null)], null);
}));

(cljs.core.async.t_cljs$core$async17911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17911");

(cljs.core.async.t_cljs$core$async17911.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17911.
 */
cljs.core.async.__GT_t_cljs$core$async17911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17911(f__$1,ch__$1,meta17899__$1,___$2,fn1__$1,meta17912){
return (new cljs.core.async.t_cljs$core$async17911(f__$1,ch__$1,meta17899__$1,___$2,fn1__$1,meta17912));
});

}

return (new cljs.core.async.t_cljs$core$async17911(self__.f,self__.ch,self__.meta17899,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17899","meta17899",2033016332,null)], null);
}));

(cljs.core.async.t_cljs$core$async17898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17898");

(cljs.core.async.t_cljs$core$async17898.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17898.
 */
cljs.core.async.__GT_t_cljs$core$async17898 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17898(f__$1,ch__$1,meta17899){
return (new cljs.core.async.t_cljs$core$async17898(f__$1,ch__$1,meta17899));
});

}

return (new cljs.core.async.t_cljs$core$async17898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17926 = (function (f,ch,meta17927){
this.f = f;
this.ch = ch;
this.meta17927 = meta17927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17928,meta17927__$1){
var self__ = this;
var _17928__$1 = this;
return (new cljs.core.async.t_cljs$core$async17926(self__.f,self__.ch,meta17927__$1));
}));

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17928){
var self__ = this;
var _17928__$1 = this;
return self__.meta17927;
}));

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async17926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17927","meta17927",1334093924,null)], null);
}));

(cljs.core.async.t_cljs$core$async17926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17926");

(cljs.core.async.t_cljs$core$async17926.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17926.
 */
cljs.core.async.__GT_t_cljs$core$async17926 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17926(f__$1,ch__$1,meta17927){
return (new cljs.core.async.t_cljs$core$async17926(f__$1,ch__$1,meta17927));
});

}

return (new cljs.core.async.t_cljs$core$async17926(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17935 = (function (p,ch,meta17936){
this.p = p;
this.ch = ch;
this.meta17936 = meta17936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17937,meta17936__$1){
var self__ = this;
var _17937__$1 = this;
return (new cljs.core.async.t_cljs$core$async17935(self__.p,self__.ch,meta17936__$1));
}));

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17937){
var self__ = this;
var _17937__$1 = this;
return self__.meta17936;
}));

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17936","meta17936",-1488147852,null)], null);
}));

(cljs.core.async.t_cljs$core$async17935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17935");

(cljs.core.async.t_cljs$core$async17935.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17935.
 */
cljs.core.async.__GT_t_cljs$core$async17935 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17935(p__$1,ch__$1,meta17936){
return (new cljs.core.async.t_cljs$core$async17935(p__$1,ch__$1,meta17936));
});

}

return (new cljs.core.async.t_cljs$core$async17935(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17941 = arguments.length;
switch (G__17941) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12886__auto___18004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_17962){
var state_val_17963 = (state_17962[(1)]);
if((state_val_17963 === (7))){
var inst_17958 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_17964_18005 = state_17962__$1;
(statearr_17964_18005[(2)] = inst_17958);

(statearr_17964_18005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (1))){
var state_17962__$1 = state_17962;
var statearr_17965_18006 = state_17962__$1;
(statearr_17965_18006[(2)] = null);

(statearr_17965_18006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (4))){
var inst_17944 = (state_17962[(7)]);
var inst_17944__$1 = (state_17962[(2)]);
var inst_17945 = (inst_17944__$1 == null);
var state_17962__$1 = (function (){var statearr_17966 = state_17962;
(statearr_17966[(7)] = inst_17944__$1);

return statearr_17966;
})();
if(cljs.core.truth_(inst_17945)){
var statearr_17968_18013 = state_17962__$1;
(statearr_17968_18013[(1)] = (5));

} else {
var statearr_17970_18017 = state_17962__$1;
(statearr_17970_18017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (6))){
var inst_17944 = (state_17962[(7)]);
var inst_17949 = p.call(null,inst_17944);
var state_17962__$1 = state_17962;
if(cljs.core.truth_(inst_17949)){
var statearr_17971_18030 = state_17962__$1;
(statearr_17971_18030[(1)] = (8));

} else {
var statearr_17972_18034 = state_17962__$1;
(statearr_17972_18034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (3))){
var inst_17960 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17962__$1,inst_17960);
} else {
if((state_val_17963 === (2))){
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17962__$1,(4),ch);
} else {
if((state_val_17963 === (11))){
var inst_17952 = (state_17962[(2)]);
var state_17962__$1 = state_17962;
var statearr_17978_18045 = state_17962__$1;
(statearr_17978_18045[(2)] = inst_17952);

(statearr_17978_18045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (9))){
var state_17962__$1 = state_17962;
var statearr_17980_18051 = state_17962__$1;
(statearr_17980_18051[(2)] = null);

(statearr_17980_18051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (5))){
var inst_17947 = cljs.core.async.close_BANG_.call(null,out);
var state_17962__$1 = state_17962;
var statearr_17984_18066 = state_17962__$1;
(statearr_17984_18066[(2)] = inst_17947);

(statearr_17984_18066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (10))){
var inst_17955 = (state_17962[(2)]);
var state_17962__$1 = (function (){var statearr_17985 = state_17962;
(statearr_17985[(8)] = inst_17955);

return statearr_17985;
})();
var statearr_17986_18078 = state_17962__$1;
(statearr_17986_18078[(2)] = null);

(statearr_17986_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17963 === (8))){
var inst_17944 = (state_17962[(7)]);
var state_17962__$1 = state_17962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17962__$1,(11),out,inst_17944);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_17990 = [null,null,null,null,null,null,null,null,null];
(statearr_17990[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_17990[(1)] = (1));

return statearr_17990;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_17962){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_17962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e17991){var ex__12182__auto__ = e17991;
var statearr_17992_18083 = state_17962;
(statearr_17992_18083[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_17962[(4)]))){
var statearr_17994_18085 = state_17962;
(statearr_17994_18085[(1)] = cljs.core.first.call(null,(state_17962[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18087 = state_17962;
state_17962 = G__18087;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_17962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_17962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_17996 = f__12887__auto__.call(null);
(statearr_17996[(6)] = c__12886__auto___18004);

return statearr_17996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18001 = arguments.length;
switch (G__18001) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12886__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_18079){
var state_val_18080 = (state_18079[(1)]);
if((state_val_18080 === (7))){
var inst_18074 = (state_18079[(2)]);
var state_18079__$1 = state_18079;
var statearr_18084_18172 = state_18079__$1;
(statearr_18084_18172[(2)] = inst_18074);

(statearr_18084_18172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (20))){
var inst_18041 = (state_18079[(7)]);
var inst_18054 = (state_18079[(2)]);
var inst_18055 = cljs.core.next.call(null,inst_18041);
var inst_18025 = inst_18055;
var inst_18026 = null;
var inst_18027 = (0);
var inst_18028 = (0);
var state_18079__$1 = (function (){var statearr_18088 = state_18079;
(statearr_18088[(8)] = inst_18054);

(statearr_18088[(9)] = inst_18025);

(statearr_18088[(10)] = inst_18026);

(statearr_18088[(11)] = inst_18027);

(statearr_18088[(12)] = inst_18028);

return statearr_18088;
})();
var statearr_18089_18206 = state_18079__$1;
(statearr_18089_18206[(2)] = null);

(statearr_18089_18206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (1))){
var state_18079__$1 = state_18079;
var statearr_18091_18212 = state_18079__$1;
(statearr_18091_18212[(2)] = null);

(statearr_18091_18212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (4))){
var inst_18011 = (state_18079[(13)]);
var inst_18011__$1 = (state_18079[(2)]);
var inst_18012 = (inst_18011__$1 == null);
var state_18079__$1 = (function (){var statearr_18092 = state_18079;
(statearr_18092[(13)] = inst_18011__$1);

return statearr_18092;
})();
if(cljs.core.truth_(inst_18012)){
var statearr_18093_18219 = state_18079__$1;
(statearr_18093_18219[(1)] = (5));

} else {
var statearr_18094_18222 = state_18079__$1;
(statearr_18094_18222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (15))){
var state_18079__$1 = state_18079;
var statearr_18099_18225 = state_18079__$1;
(statearr_18099_18225[(2)] = null);

(statearr_18099_18225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (21))){
var state_18079__$1 = state_18079;
var statearr_18100_18230 = state_18079__$1;
(statearr_18100_18230[(2)] = null);

(statearr_18100_18230[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (13))){
var inst_18028 = (state_18079[(12)]);
var inst_18025 = (state_18079[(9)]);
var inst_18026 = (state_18079[(10)]);
var inst_18027 = (state_18079[(11)]);
var inst_18037 = (state_18079[(2)]);
var inst_18038 = (inst_18028 + (1));
var tmp18096 = inst_18026;
var tmp18097 = inst_18027;
var tmp18098 = inst_18025;
var inst_18025__$1 = tmp18098;
var inst_18026__$1 = tmp18096;
var inst_18027__$1 = tmp18097;
var inst_18028__$1 = inst_18038;
var state_18079__$1 = (function (){var statearr_18101 = state_18079;
(statearr_18101[(14)] = inst_18037);

(statearr_18101[(9)] = inst_18025__$1);

(statearr_18101[(10)] = inst_18026__$1);

(statearr_18101[(11)] = inst_18027__$1);

(statearr_18101[(12)] = inst_18028__$1);

return statearr_18101;
})();
var statearr_18102_18242 = state_18079__$1;
(statearr_18102_18242[(2)] = null);

(statearr_18102_18242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (22))){
var state_18079__$1 = state_18079;
var statearr_18104_18243 = state_18079__$1;
(statearr_18104_18243[(2)] = null);

(statearr_18104_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (6))){
var inst_18011 = (state_18079[(13)]);
var inst_18022 = f.call(null,inst_18011);
var inst_18023 = cljs.core.seq.call(null,inst_18022);
var inst_18025 = inst_18023;
var inst_18026 = null;
var inst_18027 = (0);
var inst_18028 = (0);
var state_18079__$1 = (function (){var statearr_18105 = state_18079;
(statearr_18105[(9)] = inst_18025);

(statearr_18105[(10)] = inst_18026);

(statearr_18105[(11)] = inst_18027);

(statearr_18105[(12)] = inst_18028);

return statearr_18105;
})();
var statearr_18106_18249 = state_18079__$1;
(statearr_18106_18249[(2)] = null);

(statearr_18106_18249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (17))){
var inst_18041 = (state_18079[(7)]);
var inst_18046 = cljs.core.chunk_first.call(null,inst_18041);
var inst_18047 = cljs.core.chunk_rest.call(null,inst_18041);
var inst_18048 = cljs.core.count.call(null,inst_18046);
var inst_18025 = inst_18047;
var inst_18026 = inst_18046;
var inst_18027 = inst_18048;
var inst_18028 = (0);
var state_18079__$1 = (function (){var statearr_18108 = state_18079;
(statearr_18108[(9)] = inst_18025);

(statearr_18108[(10)] = inst_18026);

(statearr_18108[(11)] = inst_18027);

(statearr_18108[(12)] = inst_18028);

return statearr_18108;
})();
var statearr_18109_18251 = state_18079__$1;
(statearr_18109_18251[(2)] = null);

(statearr_18109_18251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (3))){
var inst_18076 = (state_18079[(2)]);
var state_18079__$1 = state_18079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18079__$1,inst_18076);
} else {
if((state_val_18080 === (12))){
var inst_18063 = (state_18079[(2)]);
var state_18079__$1 = state_18079;
var statearr_18110_18253 = state_18079__$1;
(statearr_18110_18253[(2)] = inst_18063);

(statearr_18110_18253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (2))){
var state_18079__$1 = state_18079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18079__$1,(4),in$);
} else {
if((state_val_18080 === (23))){
var inst_18072 = (state_18079[(2)]);
var state_18079__$1 = state_18079;
var statearr_18112_18259 = state_18079__$1;
(statearr_18112_18259[(2)] = inst_18072);

(statearr_18112_18259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (19))){
var inst_18058 = (state_18079[(2)]);
var state_18079__$1 = state_18079;
var statearr_18114_18263 = state_18079__$1;
(statearr_18114_18263[(2)] = inst_18058);

(statearr_18114_18263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (11))){
var inst_18025 = (state_18079[(9)]);
var inst_18041 = (state_18079[(7)]);
var inst_18041__$1 = cljs.core.seq.call(null,inst_18025);
var state_18079__$1 = (function (){var statearr_18115 = state_18079;
(statearr_18115[(7)] = inst_18041__$1);

return statearr_18115;
})();
if(inst_18041__$1){
var statearr_18116_18265 = state_18079__$1;
(statearr_18116_18265[(1)] = (14));

} else {
var statearr_18117_18266 = state_18079__$1;
(statearr_18117_18266[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (9))){
var inst_18065 = (state_18079[(2)]);
var inst_18067 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18079__$1 = (function (){var statearr_18118 = state_18079;
(statearr_18118[(15)] = inst_18065);

return statearr_18118;
})();
if(cljs.core.truth_(inst_18067)){
var statearr_18120_18269 = state_18079__$1;
(statearr_18120_18269[(1)] = (21));

} else {
var statearr_18121_18270 = state_18079__$1;
(statearr_18121_18270[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (5))){
var inst_18015 = cljs.core.async.close_BANG_.call(null,out);
var state_18079__$1 = state_18079;
var statearr_18122_18271 = state_18079__$1;
(statearr_18122_18271[(2)] = inst_18015);

(statearr_18122_18271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (14))){
var inst_18041 = (state_18079[(7)]);
var inst_18043 = cljs.core.chunked_seq_QMARK_.call(null,inst_18041);
var state_18079__$1 = state_18079;
if(inst_18043){
var statearr_18124_18272 = state_18079__$1;
(statearr_18124_18272[(1)] = (17));

} else {
var statearr_18128_18273 = state_18079__$1;
(statearr_18128_18273[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (16))){
var inst_18061 = (state_18079[(2)]);
var state_18079__$1 = state_18079;
var statearr_18129_18275 = state_18079__$1;
(statearr_18129_18275[(2)] = inst_18061);

(statearr_18129_18275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18080 === (10))){
var inst_18026 = (state_18079[(10)]);
var inst_18028 = (state_18079[(12)]);
var inst_18035 = cljs.core._nth.call(null,inst_18026,inst_18028);
var state_18079__$1 = state_18079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18079__$1,(13),out,inst_18035);
} else {
if((state_val_18080 === (18))){
var inst_18041 = (state_18079[(7)]);
var inst_18052 = cljs.core.first.call(null,inst_18041);
var state_18079__$1 = state_18079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18079__$1,(20),out,inst_18052);
} else {
if((state_val_18080 === (8))){
var inst_18028 = (state_18079[(12)]);
var inst_18027 = (state_18079[(11)]);
var inst_18031 = (inst_18028 < inst_18027);
var inst_18032 = inst_18031;
var state_18079__$1 = state_18079;
if(cljs.core.truth_(inst_18032)){
var statearr_18132_18277 = state_18079__$1;
(statearr_18132_18277[(1)] = (10));

} else {
var statearr_18133_18278 = state_18079__$1;
(statearr_18133_18278[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12179__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12179__auto____0 = (function (){
var statearr_18138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18138[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12179__auto__);

(statearr_18138[(1)] = (1));

return statearr_18138;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12179__auto____1 = (function (state_18079){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_18079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e18139){var ex__12182__auto__ = e18139;
var statearr_18140_18281 = state_18079;
(statearr_18140_18281[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_18079[(4)]))){
var statearr_18141_18282 = state_18079;
(statearr_18141_18282[(1)] = cljs.core.first.call(null,(state_18079[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18284 = state_18079;
state_18079 = G__18284;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12179__auto__ = function(state_18079){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12179__auto____1.call(this,state_18079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12179__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12179__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_18142 = f__12887__auto__.call(null);
(statearr_18142[(6)] = c__12886__auto__);

return statearr_18142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));

return c__12886__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18155 = arguments.length;
switch (G__18155) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18162 = arguments.length;
switch (G__18162) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18174 = arguments.length;
switch (G__18174) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12886__auto___18293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_18203){
var state_val_18204 = (state_18203[(1)]);
if((state_val_18204 === (7))){
var inst_18197 = (state_18203[(2)]);
var state_18203__$1 = state_18203;
var statearr_18210_18294 = state_18203__$1;
(statearr_18210_18294[(2)] = inst_18197);

(statearr_18210_18294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (1))){
var inst_18176 = null;
var state_18203__$1 = (function (){var statearr_18213 = state_18203;
(statearr_18213[(7)] = inst_18176);

return statearr_18213;
})();
var statearr_18214_18299 = state_18203__$1;
(statearr_18214_18299[(2)] = null);

(statearr_18214_18299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (4))){
var inst_18179 = (state_18203[(8)]);
var inst_18179__$1 = (state_18203[(2)]);
var inst_18182 = (inst_18179__$1 == null);
var inst_18183 = cljs.core.not.call(null,inst_18182);
var state_18203__$1 = (function (){var statearr_18216 = state_18203;
(statearr_18216[(8)] = inst_18179__$1);

return statearr_18216;
})();
if(inst_18183){
var statearr_18217_18315 = state_18203__$1;
(statearr_18217_18315[(1)] = (5));

} else {
var statearr_18218_18322 = state_18203__$1;
(statearr_18218_18322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (6))){
var state_18203__$1 = state_18203;
var statearr_18220_18332 = state_18203__$1;
(statearr_18220_18332[(2)] = null);

(statearr_18220_18332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (3))){
var inst_18199 = (state_18203[(2)]);
var inst_18201 = cljs.core.async.close_BANG_.call(null,out);
var state_18203__$1 = (function (){var statearr_18224 = state_18203;
(statearr_18224[(9)] = inst_18199);

return statearr_18224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18203__$1,inst_18201);
} else {
if((state_val_18204 === (2))){
var state_18203__$1 = state_18203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18203__$1,(4),ch);
} else {
if((state_val_18204 === (11))){
var inst_18179 = (state_18203[(8)]);
var inst_18191 = (state_18203[(2)]);
var inst_18176 = inst_18179;
var state_18203__$1 = (function (){var statearr_18227 = state_18203;
(statearr_18227[(10)] = inst_18191);

(statearr_18227[(7)] = inst_18176);

return statearr_18227;
})();
var statearr_18229_18345 = state_18203__$1;
(statearr_18229_18345[(2)] = null);

(statearr_18229_18345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (9))){
var inst_18179 = (state_18203[(8)]);
var state_18203__$1 = state_18203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18203__$1,(11),out,inst_18179);
} else {
if((state_val_18204 === (5))){
var inst_18179 = (state_18203[(8)]);
var inst_18176 = (state_18203[(7)]);
var inst_18185 = cljs.core._EQ_.call(null,inst_18179,inst_18176);
var state_18203__$1 = state_18203;
if(inst_18185){
var statearr_18233_18346 = state_18203__$1;
(statearr_18233_18346[(1)] = (8));

} else {
var statearr_18235_18347 = state_18203__$1;
(statearr_18235_18347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (10))){
var inst_18194 = (state_18203[(2)]);
var state_18203__$1 = state_18203;
var statearr_18236_18349 = state_18203__$1;
(statearr_18236_18349[(2)] = inst_18194);

(statearr_18236_18349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18204 === (8))){
var inst_18176 = (state_18203[(7)]);
var tmp18232 = inst_18176;
var inst_18176__$1 = tmp18232;
var state_18203__$1 = (function (){var statearr_18239 = state_18203;
(statearr_18239[(7)] = inst_18176__$1);

return statearr_18239;
})();
var statearr_18241_18350 = state_18203__$1;
(statearr_18241_18350[(2)] = null);

(statearr_18241_18350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_18245 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18245[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_18245[(1)] = (1));

return statearr_18245;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_18203){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_18203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e18247){var ex__12182__auto__ = e18247;
var statearr_18248_18352 = state_18203;
(statearr_18248_18352[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_18203[(4)]))){
var statearr_18267_18353 = state_18203;
(statearr_18267_18353[(1)] = cljs.core.first.call(null,(state_18203[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18354 = state_18203;
state_18203 = G__18354;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_18203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_18203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_18286 = f__12887__auto__.call(null);
(statearr_18286[(6)] = c__12886__auto___18293);

return statearr_18286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18291 = arguments.length;
switch (G__18291) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12886__auto___18416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_18339){
var state_val_18341 = (state_18339[(1)]);
if((state_val_18341 === (7))){
var inst_18334 = (state_18339[(2)]);
var state_18339__$1 = state_18339;
var statearr_18363_18423 = state_18339__$1;
(statearr_18363_18423[(2)] = inst_18334);

(statearr_18363_18423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (1))){
var inst_18295 = (new Array(n));
var inst_18296 = inst_18295;
var inst_18297 = (0);
var state_18339__$1 = (function (){var statearr_18364 = state_18339;
(statearr_18364[(7)] = inst_18296);

(statearr_18364[(8)] = inst_18297);

return statearr_18364;
})();
var statearr_18366_18441 = state_18339__$1;
(statearr_18366_18441[(2)] = null);

(statearr_18366_18441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (4))){
var inst_18301 = (state_18339[(9)]);
var inst_18301__$1 = (state_18339[(2)]);
var inst_18302 = (inst_18301__$1 == null);
var inst_18303 = cljs.core.not.call(null,inst_18302);
var state_18339__$1 = (function (){var statearr_18367 = state_18339;
(statearr_18367[(9)] = inst_18301__$1);

return statearr_18367;
})();
if(inst_18303){
var statearr_18368_18463 = state_18339__$1;
(statearr_18368_18463[(1)] = (5));

} else {
var statearr_18369_18464 = state_18339__$1;
(statearr_18369_18464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (15))){
var inst_18327 = (state_18339[(2)]);
var state_18339__$1 = state_18339;
var statearr_18370_18467 = state_18339__$1;
(statearr_18370_18467[(2)] = inst_18327);

(statearr_18370_18467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (13))){
var state_18339__$1 = state_18339;
var statearr_18372_18469 = state_18339__$1;
(statearr_18372_18469[(2)] = null);

(statearr_18372_18469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (6))){
var inst_18297 = (state_18339[(8)]);
var inst_18323 = (inst_18297 > (0));
var state_18339__$1 = state_18339;
if(cljs.core.truth_(inst_18323)){
var statearr_18374_18472 = state_18339__$1;
(statearr_18374_18472[(1)] = (12));

} else {
var statearr_18375_18474 = state_18339__$1;
(statearr_18375_18474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (3))){
var inst_18336 = (state_18339[(2)]);
var state_18339__$1 = state_18339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18339__$1,inst_18336);
} else {
if((state_val_18341 === (12))){
var inst_18296 = (state_18339[(7)]);
var inst_18325 = cljs.core.vec.call(null,inst_18296);
var state_18339__$1 = state_18339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18339__$1,(15),out,inst_18325);
} else {
if((state_val_18341 === (2))){
var state_18339__$1 = state_18339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18339__$1,(4),ch);
} else {
if((state_val_18341 === (11))){
var inst_18314 = (state_18339[(2)]);
var inst_18317 = (new Array(n));
var inst_18296 = inst_18317;
var inst_18297 = (0);
var state_18339__$1 = (function (){var statearr_18378 = state_18339;
(statearr_18378[(10)] = inst_18314);

(statearr_18378[(7)] = inst_18296);

(statearr_18378[(8)] = inst_18297);

return statearr_18378;
})();
var statearr_18379_18476 = state_18339__$1;
(statearr_18379_18476[(2)] = null);

(statearr_18379_18476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (9))){
var inst_18296 = (state_18339[(7)]);
var inst_18312 = cljs.core.vec.call(null,inst_18296);
var state_18339__$1 = state_18339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18339__$1,(11),out,inst_18312);
} else {
if((state_val_18341 === (5))){
var inst_18296 = (state_18339[(7)]);
var inst_18297 = (state_18339[(8)]);
var inst_18301 = (state_18339[(9)]);
var inst_18306 = (state_18339[(11)]);
var inst_18305 = (inst_18296[inst_18297] = inst_18301);
var inst_18306__$1 = (inst_18297 + (1));
var inst_18308 = (inst_18306__$1 < n);
var state_18339__$1 = (function (){var statearr_18386 = state_18339;
(statearr_18386[(12)] = inst_18305);

(statearr_18386[(11)] = inst_18306__$1);

return statearr_18386;
})();
if(cljs.core.truth_(inst_18308)){
var statearr_18389_18477 = state_18339__$1;
(statearr_18389_18477[(1)] = (8));

} else {
var statearr_18391_18478 = state_18339__$1;
(statearr_18391_18478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (14))){
var inst_18330 = (state_18339[(2)]);
var inst_18331 = cljs.core.async.close_BANG_.call(null,out);
var state_18339__$1 = (function (){var statearr_18393 = state_18339;
(statearr_18393[(13)] = inst_18330);

return statearr_18393;
})();
var statearr_18394_18480 = state_18339__$1;
(statearr_18394_18480[(2)] = inst_18331);

(statearr_18394_18480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (10))){
var inst_18320 = (state_18339[(2)]);
var state_18339__$1 = state_18339;
var statearr_18395_18482 = state_18339__$1;
(statearr_18395_18482[(2)] = inst_18320);

(statearr_18395_18482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18341 === (8))){
var inst_18296 = (state_18339[(7)]);
var inst_18306 = (state_18339[(11)]);
var tmp18392 = inst_18296;
var inst_18296__$1 = tmp18392;
var inst_18297 = inst_18306;
var state_18339__$1 = (function (){var statearr_18397 = state_18339;
(statearr_18397[(7)] = inst_18296__$1);

(statearr_18397[(8)] = inst_18297);

return statearr_18397;
})();
var statearr_18398_18484 = state_18339__$1;
(statearr_18398_18484[(2)] = null);

(statearr_18398_18484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_18401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18401[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_18401[(1)] = (1));

return statearr_18401;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_18339){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_18339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e18402){var ex__12182__auto__ = e18402;
var statearr_18404_18486 = state_18339;
(statearr_18404_18486[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_18339[(4)]))){
var statearr_18405_18487 = state_18339;
(statearr_18405_18487[(1)] = cljs.core.first.call(null,(state_18339[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18489 = state_18339;
state_18339 = G__18489;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_18339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_18339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_18410 = f__12887__auto__.call(null);
(statearr_18410[(6)] = c__12886__auto___18416);

return statearr_18410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18413 = arguments.length;
switch (G__18413) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12886__auto___18535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12887__auto__ = (function (){var switch__12178__auto__ = (function (state_18465){
var state_val_18466 = (state_18465[(1)]);
if((state_val_18466 === (7))){
var inst_18459 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
var statearr_18473_18537 = state_18465__$1;
(statearr_18473_18537[(2)] = inst_18459);

(statearr_18473_18537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (1))){
var inst_18417 = [];
var inst_18418 = inst_18417;
var inst_18419 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18465__$1 = (function (){var statearr_18475 = state_18465;
(statearr_18475[(7)] = inst_18418);

(statearr_18475[(8)] = inst_18419);

return statearr_18475;
})();
var statearr_18485_18540 = state_18465__$1;
(statearr_18485_18540[(2)] = null);

(statearr_18485_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (4))){
var inst_18422 = (state_18465[(9)]);
var inst_18422__$1 = (state_18465[(2)]);
var inst_18424 = (inst_18422__$1 == null);
var inst_18425 = cljs.core.not.call(null,inst_18424);
var state_18465__$1 = (function (){var statearr_18488 = state_18465;
(statearr_18488[(9)] = inst_18422__$1);

return statearr_18488;
})();
if(inst_18425){
var statearr_18491_18541 = state_18465__$1;
(statearr_18491_18541[(1)] = (5));

} else {
var statearr_18492_18542 = state_18465__$1;
(statearr_18492_18542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (15))){
var inst_18418 = (state_18465[(7)]);
var inst_18451 = cljs.core.vec.call(null,inst_18418);
var state_18465__$1 = state_18465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18465__$1,(18),out,inst_18451);
} else {
if((state_val_18466 === (13))){
var inst_18446 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
var statearr_18494_18543 = state_18465__$1;
(statearr_18494_18543[(2)] = inst_18446);

(statearr_18494_18543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (6))){
var inst_18418 = (state_18465[(7)]);
var inst_18448 = inst_18418.length;
var inst_18449 = (inst_18448 > (0));
var state_18465__$1 = state_18465;
if(cljs.core.truth_(inst_18449)){
var statearr_18497_18544 = state_18465__$1;
(statearr_18497_18544[(1)] = (15));

} else {
var statearr_18498_18545 = state_18465__$1;
(statearr_18498_18545[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (17))){
var inst_18456 = (state_18465[(2)]);
var inst_18457 = cljs.core.async.close_BANG_.call(null,out);
var state_18465__$1 = (function (){var statearr_18499 = state_18465;
(statearr_18499[(10)] = inst_18456);

return statearr_18499;
})();
var statearr_18501_18547 = state_18465__$1;
(statearr_18501_18547[(2)] = inst_18457);

(statearr_18501_18547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (3))){
var inst_18461 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18465__$1,inst_18461);
} else {
if((state_val_18466 === (12))){
var inst_18418 = (state_18465[(7)]);
var inst_18438 = cljs.core.vec.call(null,inst_18418);
var state_18465__$1 = state_18465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18465__$1,(14),out,inst_18438);
} else {
if((state_val_18466 === (2))){
var state_18465__$1 = state_18465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18465__$1,(4),ch);
} else {
if((state_val_18466 === (11))){
var inst_18418 = (state_18465[(7)]);
var inst_18422 = (state_18465[(9)]);
var inst_18427 = (state_18465[(11)]);
var inst_18435 = inst_18418.push(inst_18422);
var tmp18502 = inst_18418;
var inst_18418__$1 = tmp18502;
var inst_18419 = inst_18427;
var state_18465__$1 = (function (){var statearr_18503 = state_18465;
(statearr_18503[(12)] = inst_18435);

(statearr_18503[(7)] = inst_18418__$1);

(statearr_18503[(8)] = inst_18419);

return statearr_18503;
})();
var statearr_18504_18552 = state_18465__$1;
(statearr_18504_18552[(2)] = null);

(statearr_18504_18552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (9))){
var inst_18419 = (state_18465[(8)]);
var inst_18431 = cljs.core.keyword_identical_QMARK_.call(null,inst_18419,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18465__$1 = state_18465;
var statearr_18505_18553 = state_18465__$1;
(statearr_18505_18553[(2)] = inst_18431);

(statearr_18505_18553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (5))){
var inst_18422 = (state_18465[(9)]);
var inst_18427 = (state_18465[(11)]);
var inst_18419 = (state_18465[(8)]);
var inst_18428 = (state_18465[(13)]);
var inst_18427__$1 = f.call(null,inst_18422);
var inst_18428__$1 = cljs.core._EQ_.call(null,inst_18427__$1,inst_18419);
var state_18465__$1 = (function (){var statearr_18508 = state_18465;
(statearr_18508[(11)] = inst_18427__$1);

(statearr_18508[(13)] = inst_18428__$1);

return statearr_18508;
})();
if(inst_18428__$1){
var statearr_18509_18555 = state_18465__$1;
(statearr_18509_18555[(1)] = (8));

} else {
var statearr_18510_18556 = state_18465__$1;
(statearr_18510_18556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (14))){
var inst_18422 = (state_18465[(9)]);
var inst_18427 = (state_18465[(11)]);
var inst_18440 = (state_18465[(2)]);
var inst_18442 = [];
var inst_18443 = inst_18442.push(inst_18422);
var inst_18418 = inst_18442;
var inst_18419 = inst_18427;
var state_18465__$1 = (function (){var statearr_18512 = state_18465;
(statearr_18512[(14)] = inst_18440);

(statearr_18512[(15)] = inst_18443);

(statearr_18512[(7)] = inst_18418);

(statearr_18512[(8)] = inst_18419);

return statearr_18512;
})();
var statearr_18513_18559 = state_18465__$1;
(statearr_18513_18559[(2)] = null);

(statearr_18513_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (16))){
var state_18465__$1 = state_18465;
var statearr_18514_18560 = state_18465__$1;
(statearr_18514_18560[(2)] = null);

(statearr_18514_18560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (10))){
var inst_18433 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
if(cljs.core.truth_(inst_18433)){
var statearr_18515_18561 = state_18465__$1;
(statearr_18515_18561[(1)] = (11));

} else {
var statearr_18516_18562 = state_18465__$1;
(statearr_18516_18562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (18))){
var inst_18453 = (state_18465[(2)]);
var state_18465__$1 = state_18465;
var statearr_18517_18563 = state_18465__$1;
(statearr_18517_18563[(2)] = inst_18453);

(statearr_18517_18563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18466 === (8))){
var inst_18428 = (state_18465[(13)]);
var state_18465__$1 = state_18465;
var statearr_18519_18564 = state_18465__$1;
(statearr_18519_18564[(2)] = inst_18428);

(statearr_18519_18564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12179__auto__ = null;
var cljs$core$async$state_machine__12179__auto____0 = (function (){
var statearr_18520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18520[(0)] = cljs$core$async$state_machine__12179__auto__);

(statearr_18520[(1)] = (1));

return statearr_18520;
});
var cljs$core$async$state_machine__12179__auto____1 = (function (state_18465){
while(true){
var ret_value__12180__auto__ = (function (){try{while(true){
var result__12181__auto__ = switch__12178__auto__.call(null,state_18465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12181__auto__;
}
break;
}
}catch (e18521){var ex__12182__auto__ = e18521;
var statearr_18522_18565 = state_18465;
(statearr_18522_18565[(2)] = ex__12182__auto__);


if(cljs.core.seq.call(null,(state_18465[(4)]))){
var statearr_18523_18566 = state_18465;
(statearr_18523_18566[(1)] = cljs.core.first.call(null,(state_18465[(4)])));

} else {
throw ex__12182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18567 = state_18465;
state_18465 = G__18567;
continue;
} else {
return ret_value__12180__auto__;
}
break;
}
});
cljs$core$async$state_machine__12179__auto__ = function(state_18465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12179__auto____1.call(this,state_18465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12179__auto____0;
cljs$core$async$state_machine__12179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12179__auto____1;
return cljs$core$async$state_machine__12179__auto__;
})()
})();
var state__12888__auto__ = (function (){var statearr_18526 = f__12887__auto__.call(null);
(statearr_18526[(6)] = c__12886__auto___18535);

return statearr_18526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12888__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
