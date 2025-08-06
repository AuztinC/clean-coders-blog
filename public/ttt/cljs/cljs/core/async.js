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
var G__11891 = arguments.length;
switch (G__11891) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11893 = (function (f,blockable,meta11894){
this.f = f;
this.blockable = blockable;
this.meta11894 = meta11894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11895,meta11894__$1){
var self__ = this;
var _11895__$1 = this;
return (new cljs.core.async.t_cljs$core$async11893(self__.f,self__.blockable,meta11894__$1));
}));

(cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11895){
var self__ = this;
var _11895__$1 = this;
return self__.meta11894;
}));

(cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11894","meta11894",-1011378705,null)], null);
}));

(cljs.core.async.t_cljs$core$async11893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11893");

(cljs.core.async.t_cljs$core$async11893.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11893.
 */
cljs.core.async.__GT_t_cljs$core$async11893 = (function cljs$core$async$__GT_t_cljs$core$async11893(f__$1,blockable__$1,meta11894){
return (new cljs.core.async.t_cljs$core$async11893(f__$1,blockable__$1,meta11894));
});

}

return (new cljs.core.async.t_cljs$core$async11893(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11899 = arguments.length;
switch (G__11899) {
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
var G__11902 = arguments.length;
switch (G__11902) {
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
var G__11905 = arguments.length;
switch (G__11905) {
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
var val_11907 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11907);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11907);
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
var G__11909 = arguments.length;
switch (G__11909) {
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
var n__5616__auto___11914 = n;
var x_11915 = (0);
while(true){
if((x_11915 < n__5616__auto___11914)){
(a[x_11915] = x_11915);

var G__11916 = (x_11915 + (1));
x_11915 = G__11916;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11911 = (function (flag,meta11912){
this.flag = flag;
this.meta11912 = meta11912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11913,meta11912__$1){
var self__ = this;
var _11913__$1 = this;
return (new cljs.core.async.t_cljs$core$async11911(self__.flag,meta11912__$1));
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11913){
var self__ = this;
var _11913__$1 = this;
return self__.meta11912;
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11912","meta11912",1916819678,null)], null);
}));

(cljs.core.async.t_cljs$core$async11911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11911");

(cljs.core.async.t_cljs$core$async11911.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11911.
 */
cljs.core.async.__GT_t_cljs$core$async11911 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11911(flag__$1,meta11912){
return (new cljs.core.async.t_cljs$core$async11911(flag__$1,meta11912));
});

}

return (new cljs.core.async.t_cljs$core$async11911(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11917 = (function (flag,cb,meta11918){
this.flag = flag;
this.cb = cb;
this.meta11918 = meta11918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11919,meta11918__$1){
var self__ = this;
var _11919__$1 = this;
return (new cljs.core.async.t_cljs$core$async11917(self__.flag,self__.cb,meta11918__$1));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11919){
var self__ = this;
var _11919__$1 = this;
return self__.meta11918;
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11918","meta11918",1781871490,null)], null);
}));

(cljs.core.async.t_cljs$core$async11917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11917");

(cljs.core.async.t_cljs$core$async11917.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11917.
 */
cljs.core.async.__GT_t_cljs$core$async11917 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11917(flag__$1,cb__$1,meta11918){
return (new cljs.core.async.t_cljs$core$async11917(flag__$1,cb__$1,meta11918));
});

}

return (new cljs.core.async.t_cljs$core$async11917(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11920_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11920_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11921_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11921_SHARP_,port], null));
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
var G__11926 = (i + (1));
i = G__11926;
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
var len__5749__auto___11927 = arguments.length;
var i__5750__auto___11928 = (0);
while(true){
if((i__5750__auto___11928 < len__5749__auto___11927)){
args__5755__auto__.push((arguments[i__5750__auto___11928]));

var G__11929 = (i__5750__auto___11928 + (1));
i__5750__auto___11928 = G__11929;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11924){
var map__11925 = p__11924;
var map__11925__$1 = cljs.core.__destructure_map.call(null,map__11925);
var opts = map__11925__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11922){
var G__11923 = cljs.core.first.call(null,seq11922);
var seq11922__$1 = cljs.core.next.call(null,seq11922);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11923,seq11922__$1);
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
var G__11931 = arguments.length;
switch (G__11931) {
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
var c__11832__auto___11978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_11955){
var state_val_11956 = (state_11955[(1)]);
if((state_val_11956 === (7))){
var inst_11951 = (state_11955[(2)]);
var state_11955__$1 = state_11955;
var statearr_11957_11979 = state_11955__$1;
(statearr_11957_11979[(2)] = inst_11951);

(statearr_11957_11979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (1))){
var state_11955__$1 = state_11955;
var statearr_11958_11984 = state_11955__$1;
(statearr_11958_11984[(2)] = null);

(statearr_11958_11984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (4))){
var inst_11934 = (state_11955[(7)]);
var inst_11934__$1 = (state_11955[(2)]);
var inst_11935 = (inst_11934__$1 == null);
var state_11955__$1 = (function (){var statearr_11959 = state_11955;
(statearr_11959[(7)] = inst_11934__$1);

return statearr_11959;
})();
if(cljs.core.truth_(inst_11935)){
var statearr_11960_11985 = state_11955__$1;
(statearr_11960_11985[(1)] = (5));

} else {
var statearr_11961_11987 = state_11955__$1;
(statearr_11961_11987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (13))){
var state_11955__$1 = state_11955;
var statearr_11962_11993 = state_11955__$1;
(statearr_11962_11993[(2)] = null);

(statearr_11962_11993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (6))){
var inst_11934 = (state_11955[(7)]);
var state_11955__$1 = state_11955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11955__$1,(11),to,inst_11934);
} else {
if((state_val_11956 === (3))){
var inst_11953 = (state_11955[(2)]);
var state_11955__$1 = state_11955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
} else {
if((state_val_11956 === (12))){
var state_11955__$1 = state_11955;
var statearr_11963_11994 = state_11955__$1;
(statearr_11963_11994[(2)] = null);

(statearr_11963_11994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (2))){
var state_11955__$1 = state_11955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,(4),from);
} else {
if((state_val_11956 === (11))){
var inst_11944 = (state_11955[(2)]);
var state_11955__$1 = state_11955;
if(cljs.core.truth_(inst_11944)){
var statearr_11964_11996 = state_11955__$1;
(statearr_11964_11996[(1)] = (12));

} else {
var statearr_11965_11997 = state_11955__$1;
(statearr_11965_11997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (9))){
var state_11955__$1 = state_11955;
var statearr_11966_11999 = state_11955__$1;
(statearr_11966_11999[(2)] = null);

(statearr_11966_11999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (5))){
var state_11955__$1 = state_11955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11967_12001 = state_11955__$1;
(statearr_11967_12001[(1)] = (8));

} else {
var statearr_11968_12003 = state_11955__$1;
(statearr_11968_12003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (14))){
var inst_11949 = (state_11955[(2)]);
var state_11955__$1 = state_11955;
var statearr_11969_12005 = state_11955__$1;
(statearr_11969_12005[(2)] = inst_11949);

(statearr_11969_12005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (10))){
var inst_11941 = (state_11955[(2)]);
var state_11955__$1 = state_11955;
var statearr_11970_12006 = state_11955__$1;
(statearr_11970_12006[(2)] = inst_11941);

(statearr_11970_12006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11956 === (8))){
var inst_11938 = cljs.core.async.close_BANG_.call(null,to);
var state_11955__$1 = state_11955;
var statearr_11971_12008 = state_11955__$1;
(statearr_11971_12008[(2)] = inst_11938);

(statearr_11971_12008[(1)] = (10));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_11972 = [null,null,null,null,null,null,null,null];
(statearr_11972[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_11972[(1)] = (1));

return statearr_11972;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_11955){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_11955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e11973){var ex__11731__auto__ = e11973;
var statearr_11974_12013 = state_11955;
(statearr_11974_12013[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_11955[(4)]))){
var statearr_11975_12015 = state_11955;
(statearr_11975_12015[(1)] = cljs.core.first.call(null,(state_11955[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12016 = state_11955;
state_11955 = G__12016;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_11976 = f__11833__auto__.call(null);
(statearr_11976[(6)] = c__11832__auto___11978);

return statearr_11976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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
var process__$1 = (function (p__11980){
var vec__11981 = p__11980;
var v = cljs.core.nth.call(null,vec__11981,(0),null);
var p = cljs.core.nth.call(null,vec__11981,(1),null);
var job = vec__11981;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11832__auto___12175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_11991){
var state_val_11992 = (state_11991[(1)]);
if((state_val_11992 === (1))){
var state_11991__$1 = state_11991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11991__$1,(2),res,v);
} else {
if((state_val_11992 === (2))){
var inst_11988 = (state_11991[(2)]);
var inst_11989 = cljs.core.async.close_BANG_.call(null,res);
var state_11991__$1 = (function (){var statearr_11995 = state_11991;
(statearr_11995[(7)] = inst_11988);

return statearr_11995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11991__$1,inst_11989);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0 = (function (){
var statearr_11998 = [null,null,null,null,null,null,null,null];
(statearr_11998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__);

(statearr_11998[(1)] = (1));

return statearr_11998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1 = (function (state_11991){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_11991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12000){var ex__11731__auto__ = e12000;
var statearr_12002_12176 = state_11991;
(statearr_12002_12176[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_11991[(4)]))){
var statearr_12004_12178 = state_11991;
(statearr_12004_12178[(1)] = cljs.core.first.call(null,(state_11991[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12180 = state_11991;
state_11991 = G__12180;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = function(state_11991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1.call(this,state_11991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12007 = f__11833__auto__.call(null);
(statearr_12007[(6)] = c__11832__auto___12175);

return statearr_12007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__12009){
var vec__12010 = p__12009;
var v = cljs.core.nth.call(null,vec__12010,(0),null);
var p = cljs.core.nth.call(null,vec__12010,(1),null);
var job = vec__12010;
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
var n__5616__auto___12181 = n;
var __12182 = (0);
while(true){
if((__12182 < n__5616__auto___12181)){
var G__12014_12183 = type;
var G__12014_12184__$1 = (((G__12014_12183 instanceof cljs.core.Keyword))?G__12014_12183.fqn:null);
switch (G__12014_12184__$1) {
case "compute":
var c__11832__auto___12186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12182,c__11832__auto___12186,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async){
return (function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = ((function (__12182,c__11832__auto___12186,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async){
return (function (state_12029){
var state_val_12030 = (state_12029[(1)]);
if((state_val_12030 === (1))){
var state_12029__$1 = state_12029;
var statearr_12031_12187 = state_12029__$1;
(statearr_12031_12187[(2)] = null);

(statearr_12031_12187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12030 === (2))){
var state_12029__$1 = state_12029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12029__$1,(4),jobs);
} else {
if((state_val_12030 === (3))){
var inst_12027 = (state_12029[(2)]);
var state_12029__$1 = state_12029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12029__$1,inst_12027);
} else {
if((state_val_12030 === (4))){
var inst_12019 = (state_12029[(2)]);
var inst_12020 = process__$1.call(null,inst_12019);
var state_12029__$1 = state_12029;
if(cljs.core.truth_(inst_12020)){
var statearr_12032_12190 = state_12029__$1;
(statearr_12032_12190[(1)] = (5));

} else {
var statearr_12033_12191 = state_12029__$1;
(statearr_12033_12191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12030 === (5))){
var state_12029__$1 = state_12029;
var statearr_12034_12192 = state_12029__$1;
(statearr_12034_12192[(2)] = null);

(statearr_12034_12192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12030 === (6))){
var state_12029__$1 = state_12029;
var statearr_12035_12193 = state_12029__$1;
(statearr_12035_12193[(2)] = null);

(statearr_12035_12193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12030 === (7))){
var inst_12025 = (state_12029[(2)]);
var state_12029__$1 = state_12029;
var statearr_12036_12194 = state_12029__$1;
(statearr_12036_12194[(2)] = inst_12025);

(statearr_12036_12194[(1)] = (3));


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
});})(__12182,c__11832__auto___12186,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async))
;
return ((function (__12182,switch__11727__auto__,c__11832__auto___12186,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0 = (function (){
var statearr_12037 = [null,null,null,null,null,null,null];
(statearr_12037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__);

(statearr_12037[(1)] = (1));

return statearr_12037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1 = (function (state_12029){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12038){var ex__11731__auto__ = e12038;
var statearr_12039_12215 = state_12029;
(statearr_12039_12215[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12029[(4)]))){
var statearr_12040_12221 = state_12029;
(statearr_12040_12221[(1)] = cljs.core.first.call(null,(state_12029[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12224 = state_12029;
state_12029 = G__12224;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = function(state_12029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1.call(this,state_12029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__;
})()
;})(__12182,switch__11727__auto__,c__11832__auto___12186,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async))
})();
var state__11834__auto__ = (function (){var statearr_12041 = f__11833__auto__.call(null);
(statearr_12041[(6)] = c__11832__auto___12186);

return statearr_12041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
});})(__12182,c__11832__auto___12186,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async))
);


break;
case "async":
var c__11832__auto___12225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12182,c__11832__auto___12225,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async){
return (function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = ((function (__12182,c__11832__auto___12225,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async){
return (function (state_12054){
var state_val_12055 = (state_12054[(1)]);
if((state_val_12055 === (1))){
var state_12054__$1 = state_12054;
var statearr_12056_12228 = state_12054__$1;
(statearr_12056_12228[(2)] = null);

(statearr_12056_12228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12055 === (2))){
var state_12054__$1 = state_12054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12054__$1,(4),jobs);
} else {
if((state_val_12055 === (3))){
var inst_12052 = (state_12054[(2)]);
var state_12054__$1 = state_12054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12054__$1,inst_12052);
} else {
if((state_val_12055 === (4))){
var inst_12044 = (state_12054[(2)]);
var inst_12045 = async.call(null,inst_12044);
var state_12054__$1 = state_12054;
if(cljs.core.truth_(inst_12045)){
var statearr_12057_12231 = state_12054__$1;
(statearr_12057_12231[(1)] = (5));

} else {
var statearr_12058_12233 = state_12054__$1;
(statearr_12058_12233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12055 === (5))){
var state_12054__$1 = state_12054;
var statearr_12059_12234 = state_12054__$1;
(statearr_12059_12234[(2)] = null);

(statearr_12059_12234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12055 === (6))){
var state_12054__$1 = state_12054;
var statearr_12060_12236 = state_12054__$1;
(statearr_12060_12236[(2)] = null);

(statearr_12060_12236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12055 === (7))){
var inst_12050 = (state_12054[(2)]);
var state_12054__$1 = state_12054;
var statearr_12061_12237 = state_12054__$1;
(statearr_12061_12237[(2)] = inst_12050);

(statearr_12061_12237[(1)] = (3));


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
});})(__12182,c__11832__auto___12225,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async))
;
return ((function (__12182,switch__11727__auto__,c__11832__auto___12225,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0 = (function (){
var statearr_12062 = [null,null,null,null,null,null,null];
(statearr_12062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__);

(statearr_12062[(1)] = (1));

return statearr_12062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1 = (function (state_12054){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12063){var ex__11731__auto__ = e12063;
var statearr_12064_12241 = state_12054;
(statearr_12064_12241[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12054[(4)]))){
var statearr_12065_12242 = state_12054;
(statearr_12065_12242[(1)] = cljs.core.first.call(null,(state_12054[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12243 = state_12054;
state_12054 = G__12243;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = function(state_12054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1.call(this,state_12054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__;
})()
;})(__12182,switch__11727__auto__,c__11832__auto___12225,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async))
})();
var state__11834__auto__ = (function (){var statearr_12066 = f__11833__auto__.call(null);
(statearr_12066[(6)] = c__11832__auto___12225);

return statearr_12066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
});})(__12182,c__11832__auto___12225,G__12014_12183,G__12014_12184__$1,n__5616__auto___12181,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12014_12184__$1)].join('')));

}

var G__12245 = (__12182 + (1));
__12182 = G__12245;
continue;
} else {
}
break;
}

var c__11832__auto___12246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12088){
var state_val_12089 = (state_12088[(1)]);
if((state_val_12089 === (7))){
var inst_12084 = (state_12088[(2)]);
var state_12088__$1 = state_12088;
var statearr_12090_12249 = state_12088__$1;
(statearr_12090_12249[(2)] = inst_12084);

(statearr_12090_12249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12089 === (1))){
var state_12088__$1 = state_12088;
var statearr_12091_12251 = state_12088__$1;
(statearr_12091_12251[(2)] = null);

(statearr_12091_12251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12089 === (4))){
var inst_12069 = (state_12088[(7)]);
var inst_12069__$1 = (state_12088[(2)]);
var inst_12070 = (inst_12069__$1 == null);
var state_12088__$1 = (function (){var statearr_12092 = state_12088;
(statearr_12092[(7)] = inst_12069__$1);

return statearr_12092;
})();
if(cljs.core.truth_(inst_12070)){
var statearr_12093_12254 = state_12088__$1;
(statearr_12093_12254[(1)] = (5));

} else {
var statearr_12094_12256 = state_12088__$1;
(statearr_12094_12256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12089 === (6))){
var inst_12069 = (state_12088[(7)]);
var inst_12074 = (state_12088[(8)]);
var inst_12074__$1 = cljs.core.async.chan.call(null,(1));
var inst_12075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12076 = [inst_12069,inst_12074__$1];
var inst_12077 = (new cljs.core.PersistentVector(null,2,(5),inst_12075,inst_12076,null));
var state_12088__$1 = (function (){var statearr_12095 = state_12088;
(statearr_12095[(8)] = inst_12074__$1);

return statearr_12095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12088__$1,(8),jobs,inst_12077);
} else {
if((state_val_12089 === (3))){
var inst_12086 = (state_12088[(2)]);
var state_12088__$1 = state_12088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12088__$1,inst_12086);
} else {
if((state_val_12089 === (2))){
var state_12088__$1 = state_12088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12088__$1,(4),from);
} else {
if((state_val_12089 === (9))){
var inst_12081 = (state_12088[(2)]);
var state_12088__$1 = (function (){var statearr_12096 = state_12088;
(statearr_12096[(9)] = inst_12081);

return statearr_12096;
})();
var statearr_12097_12261 = state_12088__$1;
(statearr_12097_12261[(2)] = null);

(statearr_12097_12261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12089 === (5))){
var inst_12072 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12088__$1 = state_12088;
var statearr_12098_12262 = state_12088__$1;
(statearr_12098_12262[(2)] = inst_12072);

(statearr_12098_12262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12089 === (8))){
var inst_12074 = (state_12088[(8)]);
var inst_12079 = (state_12088[(2)]);
var state_12088__$1 = (function (){var statearr_12099 = state_12088;
(statearr_12099[(10)] = inst_12079);

return statearr_12099;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12088__$1,(9),results,inst_12074);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0 = (function (){
var statearr_12100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__);

(statearr_12100[(1)] = (1));

return statearr_12100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1 = (function (state_12088){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12101){var ex__11731__auto__ = e12101;
var statearr_12102_12264 = state_12088;
(statearr_12102_12264[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12088[(4)]))){
var statearr_12103_12265 = state_12088;
(statearr_12103_12265[(1)] = cljs.core.first.call(null,(state_12088[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12266 = state_12088;
state_12088 = G__12266;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = function(state_12088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1.call(this,state_12088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12104 = f__11833__auto__.call(null);
(statearr_12104[(6)] = c__11832__auto___12246);

return statearr_12104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


var c__11832__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12142){
var state_val_12143 = (state_12142[(1)]);
if((state_val_12143 === (7))){
var inst_12138 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
var statearr_12144_12272 = state_12142__$1;
(statearr_12144_12272[(2)] = inst_12138);

(statearr_12144_12272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (20))){
var state_12142__$1 = state_12142;
var statearr_12145_12277 = state_12142__$1;
(statearr_12145_12277[(2)] = null);

(statearr_12145_12277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (1))){
var state_12142__$1 = state_12142;
var statearr_12146_12282 = state_12142__$1;
(statearr_12146_12282[(2)] = null);

(statearr_12146_12282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (4))){
var inst_12107 = (state_12142[(7)]);
var inst_12107__$1 = (state_12142[(2)]);
var inst_12108 = (inst_12107__$1 == null);
var state_12142__$1 = (function (){var statearr_12147 = state_12142;
(statearr_12147[(7)] = inst_12107__$1);

return statearr_12147;
})();
if(cljs.core.truth_(inst_12108)){
var statearr_12148_12293 = state_12142__$1;
(statearr_12148_12293[(1)] = (5));

} else {
var statearr_12149_12294 = state_12142__$1;
(statearr_12149_12294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (15))){
var inst_12120 = (state_12142[(8)]);
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12142__$1,(18),to,inst_12120);
} else {
if((state_val_12143 === (21))){
var inst_12133 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
var statearr_12150_12295 = state_12142__$1;
(statearr_12150_12295[(2)] = inst_12133);

(statearr_12150_12295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (13))){
var inst_12135 = (state_12142[(2)]);
var state_12142__$1 = (function (){var statearr_12151 = state_12142;
(statearr_12151[(9)] = inst_12135);

return statearr_12151;
})();
var statearr_12152_12297 = state_12142__$1;
(statearr_12152_12297[(2)] = null);

(statearr_12152_12297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (6))){
var inst_12107 = (state_12142[(7)]);
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12142__$1,(11),inst_12107);
} else {
if((state_val_12143 === (17))){
var inst_12128 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
if(cljs.core.truth_(inst_12128)){
var statearr_12153_12300 = state_12142__$1;
(statearr_12153_12300[(1)] = (19));

} else {
var statearr_12154_12301 = state_12142__$1;
(statearr_12154_12301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (3))){
var inst_12140 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12142__$1,inst_12140);
} else {
if((state_val_12143 === (12))){
var inst_12117 = (state_12142[(10)]);
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12142__$1,(14),inst_12117);
} else {
if((state_val_12143 === (2))){
var state_12142__$1 = state_12142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12142__$1,(4),results);
} else {
if((state_val_12143 === (19))){
var state_12142__$1 = state_12142;
var statearr_12155_12305 = state_12142__$1;
(statearr_12155_12305[(2)] = null);

(statearr_12155_12305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (11))){
var inst_12117 = (state_12142[(2)]);
var state_12142__$1 = (function (){var statearr_12156 = state_12142;
(statearr_12156[(10)] = inst_12117);

return statearr_12156;
})();
var statearr_12157_12307 = state_12142__$1;
(statearr_12157_12307[(2)] = null);

(statearr_12157_12307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (9))){
var state_12142__$1 = state_12142;
var statearr_12158_12310 = state_12142__$1;
(statearr_12158_12310[(2)] = null);

(statearr_12158_12310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (5))){
var state_12142__$1 = state_12142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12159_12311 = state_12142__$1;
(statearr_12159_12311[(1)] = (8));

} else {
var statearr_12160_12312 = state_12142__$1;
(statearr_12160_12312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (14))){
var inst_12120 = (state_12142[(8)]);
var inst_12122 = (state_12142[(11)]);
var inst_12120__$1 = (state_12142[(2)]);
var inst_12121 = (inst_12120__$1 == null);
var inst_12122__$1 = cljs.core.not.call(null,inst_12121);
var state_12142__$1 = (function (){var statearr_12161 = state_12142;
(statearr_12161[(8)] = inst_12120__$1);

(statearr_12161[(11)] = inst_12122__$1);

return statearr_12161;
})();
if(inst_12122__$1){
var statearr_12162_12315 = state_12142__$1;
(statearr_12162_12315[(1)] = (15));

} else {
var statearr_12163_12316 = state_12142__$1;
(statearr_12163_12316[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (16))){
var inst_12122 = (state_12142[(11)]);
var state_12142__$1 = state_12142;
var statearr_12164_12318 = state_12142__$1;
(statearr_12164_12318[(2)] = inst_12122);

(statearr_12164_12318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (10))){
var inst_12114 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
var statearr_12165_12320 = state_12142__$1;
(statearr_12165_12320[(2)] = inst_12114);

(statearr_12165_12320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (18))){
var inst_12125 = (state_12142[(2)]);
var state_12142__$1 = state_12142;
var statearr_12166_12322 = state_12142__$1;
(statearr_12166_12322[(2)] = inst_12125);

(statearr_12166_12322[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12143 === (8))){
var inst_12111 = cljs.core.async.close_BANG_.call(null,to);
var state_12142__$1 = state_12142;
var statearr_12167_12323 = state_12142__$1;
(statearr_12167_12323[(2)] = inst_12111);

(statearr_12167_12323[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0 = (function (){
var statearr_12168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__);

(statearr_12168[(1)] = (1));

return statearr_12168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1 = (function (state_12142){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12169){var ex__11731__auto__ = e12169;
var statearr_12170_12328 = state_12142;
(statearr_12170_12328[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12142[(4)]))){
var statearr_12171_12329 = state_12142;
(statearr_12171_12329[(1)] = cljs.core.first.call(null,(state_12142[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12331 = state_12142;
state_12142 = G__12331;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__ = function(state_12142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1.call(this,state_12142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11728__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12172 = f__11833__auto__.call(null);
(statearr_12172[(6)] = c__11832__auto__);

return statearr_12172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));

return c__11832__auto__;
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
var G__12174 = arguments.length;
switch (G__12174) {
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
var G__12179 = arguments.length;
switch (G__12179) {
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
var G__12189 = arguments.length;
switch (G__12189) {
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
var c__11832__auto___12347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12222){
var state_val_12223 = (state_12222[(1)]);
if((state_val_12223 === (7))){
var inst_12217 = (state_12222[(2)]);
var state_12222__$1 = state_12222;
var statearr_12226_12348 = state_12222__$1;
(statearr_12226_12348[(2)] = inst_12217);

(statearr_12226_12348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (1))){
var state_12222__$1 = state_12222;
var statearr_12227_12350 = state_12222__$1;
(statearr_12227_12350[(2)] = null);

(statearr_12227_12350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (4))){
var inst_12197 = (state_12222[(7)]);
var inst_12197__$1 = (state_12222[(2)]);
var inst_12198 = (inst_12197__$1 == null);
var state_12222__$1 = (function (){var statearr_12229 = state_12222;
(statearr_12229[(7)] = inst_12197__$1);

return statearr_12229;
})();
if(cljs.core.truth_(inst_12198)){
var statearr_12230_12352 = state_12222__$1;
(statearr_12230_12352[(1)] = (5));

} else {
var statearr_12232_12353 = state_12222__$1;
(statearr_12232_12353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (13))){
var state_12222__$1 = state_12222;
var statearr_12235_12354 = state_12222__$1;
(statearr_12235_12354[(2)] = null);

(statearr_12235_12354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (6))){
var inst_12197 = (state_12222[(7)]);
var inst_12203 = p.call(null,inst_12197);
var state_12222__$1 = state_12222;
if(cljs.core.truth_(inst_12203)){
var statearr_12238_12355 = state_12222__$1;
(statearr_12238_12355[(1)] = (9));

} else {
var statearr_12239_12358 = state_12222__$1;
(statearr_12239_12358[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (3))){
var inst_12219 = (state_12222[(2)]);
var state_12222__$1 = state_12222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12222__$1,inst_12219);
} else {
if((state_val_12223 === (12))){
var state_12222__$1 = state_12222;
var statearr_12240_12368 = state_12222__$1;
(statearr_12240_12368[(2)] = null);

(statearr_12240_12368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (2))){
var state_12222__$1 = state_12222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12222__$1,(4),ch);
} else {
if((state_val_12223 === (11))){
var inst_12197 = (state_12222[(7)]);
var inst_12207 = (state_12222[(2)]);
var state_12222__$1 = state_12222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12222__$1,(8),inst_12207,inst_12197);
} else {
if((state_val_12223 === (9))){
var state_12222__$1 = state_12222;
var statearr_12244_12384 = state_12222__$1;
(statearr_12244_12384[(2)] = tc);

(statearr_12244_12384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (5))){
var inst_12200 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12201 = cljs.core.async.close_BANG_.call(null,fc);
var state_12222__$1 = (function (){var statearr_12247 = state_12222;
(statearr_12247[(8)] = inst_12200);

return statearr_12247;
})();
var statearr_12248_12385 = state_12222__$1;
(statearr_12248_12385[(2)] = inst_12201);

(statearr_12248_12385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (14))){
var inst_12214 = (state_12222[(2)]);
var state_12222__$1 = state_12222;
var statearr_12250_12387 = state_12222__$1;
(statearr_12250_12387[(2)] = inst_12214);

(statearr_12250_12387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (10))){
var state_12222__$1 = state_12222;
var statearr_12252_12389 = state_12222__$1;
(statearr_12252_12389[(2)] = fc);

(statearr_12252_12389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12223 === (8))){
var inst_12209 = (state_12222[(2)]);
var state_12222__$1 = state_12222;
if(cljs.core.truth_(inst_12209)){
var statearr_12253_12391 = state_12222__$1;
(statearr_12253_12391[(1)] = (12));

} else {
var statearr_12255_12392 = state_12222__$1;
(statearr_12255_12392[(1)] = (13));

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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_12257 = [null,null,null,null,null,null,null,null,null];
(statearr_12257[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_12257[(1)] = (1));

return statearr_12257;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_12222){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12258){var ex__11731__auto__ = e12258;
var statearr_12259_12394 = state_12222;
(statearr_12259_12394[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12222[(4)]))){
var statearr_12260_12397 = state_12222;
(statearr_12260_12397[(1)] = cljs.core.first.call(null,(state_12222[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12398 = state_12222;
state_12222 = G__12398;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_12222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_12222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12263 = f__11833__auto__.call(null);
(statearr_12263[(6)] = c__11832__auto___12347);

return statearr_12263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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
var c__11832__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12291){
var state_val_12292 = (state_12291[(1)]);
if((state_val_12292 === (7))){
var inst_12287 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12296_12403 = state_12291__$1;
(statearr_12296_12403[(2)] = inst_12287);

(statearr_12296_12403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (1))){
var inst_12267 = init;
var inst_12268 = inst_12267;
var state_12291__$1 = (function (){var statearr_12298 = state_12291;
(statearr_12298[(7)] = inst_12268);

return statearr_12298;
})();
var statearr_12299_12405 = state_12291__$1;
(statearr_12299_12405[(2)] = null);

(statearr_12299_12405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (4))){
var inst_12271 = (state_12291[(8)]);
var inst_12271__$1 = (state_12291[(2)]);
var inst_12273 = (inst_12271__$1 == null);
var state_12291__$1 = (function (){var statearr_12302 = state_12291;
(statearr_12302[(8)] = inst_12271__$1);

return statearr_12302;
})();
if(cljs.core.truth_(inst_12273)){
var statearr_12303_12408 = state_12291__$1;
(statearr_12303_12408[(1)] = (5));

} else {
var statearr_12304_12409 = state_12291__$1;
(statearr_12304_12409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (6))){
var inst_12268 = (state_12291[(7)]);
var inst_12271 = (state_12291[(8)]);
var inst_12276 = (state_12291[(9)]);
var inst_12276__$1 = f.call(null,inst_12268,inst_12271);
var inst_12278 = cljs.core.reduced_QMARK_.call(null,inst_12276__$1);
var state_12291__$1 = (function (){var statearr_12306 = state_12291;
(statearr_12306[(9)] = inst_12276__$1);

return statearr_12306;
})();
if(inst_12278){
var statearr_12308_12413 = state_12291__$1;
(statearr_12308_12413[(1)] = (8));

} else {
var statearr_12309_12414 = state_12291__$1;
(statearr_12309_12414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (3))){
var inst_12289 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12291__$1,inst_12289);
} else {
if((state_val_12292 === (2))){
var state_12291__$1 = state_12291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12291__$1,(4),ch);
} else {
if((state_val_12292 === (9))){
var inst_12276 = (state_12291[(9)]);
var inst_12268 = inst_12276;
var state_12291__$1 = (function (){var statearr_12313 = state_12291;
(statearr_12313[(7)] = inst_12268);

return statearr_12313;
})();
var statearr_12314_12416 = state_12291__$1;
(statearr_12314_12416[(2)] = null);

(statearr_12314_12416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (5))){
var inst_12268 = (state_12291[(7)]);
var state_12291__$1 = state_12291;
var statearr_12317_12419 = state_12291__$1;
(statearr_12317_12419[(2)] = inst_12268);

(statearr_12317_12419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (10))){
var inst_12285 = (state_12291[(2)]);
var state_12291__$1 = state_12291;
var statearr_12319_12421 = state_12291__$1;
(statearr_12319_12421[(2)] = inst_12285);

(statearr_12319_12421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12292 === (8))){
var inst_12276 = (state_12291[(9)]);
var inst_12280 = cljs.core.deref.call(null,inst_12276);
var state_12291__$1 = state_12291;
var statearr_12321_12422 = state_12291__$1;
(statearr_12321_12422[(2)] = inst_12280);

(statearr_12321_12422[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11728__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11728__auto____0 = (function (){
var statearr_12324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12324[(0)] = cljs$core$async$reduce_$_state_machine__11728__auto__);

(statearr_12324[(1)] = (1));

return statearr_12324;
});
var cljs$core$async$reduce_$_state_machine__11728__auto____1 = (function (state_12291){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12325){var ex__11731__auto__ = e12325;
var statearr_12326_12424 = state_12291;
(statearr_12326_12424[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12291[(4)]))){
var statearr_12327_12425 = state_12291;
(statearr_12327_12425[(1)] = cljs.core.first.call(null,(state_12291[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12426 = state_12291;
state_12291 = G__12426;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11728__auto__ = function(state_12291){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11728__auto____1.call(this,state_12291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11728__auto____0;
cljs$core$async$reduce_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11728__auto____1;
return cljs$core$async$reduce_$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12330 = f__11833__auto__.call(null);
(statearr_12330[(6)] = c__11832__auto__);

return statearr_12330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));

return c__11832__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11832__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12338){
var state_val_12339 = (state_12338[(1)]);
if((state_val_12339 === (1))){
var inst_12333 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12338__$1 = state_12338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12338__$1,(2),inst_12333);
} else {
if((state_val_12339 === (2))){
var inst_12335 = (state_12338[(2)]);
var inst_12336 = f__$1.call(null,inst_12335);
var state_12338__$1 = state_12338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12338__$1,inst_12336);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11728__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11728__auto____0 = (function (){
var statearr_12341 = [null,null,null,null,null,null,null];
(statearr_12341[(0)] = cljs$core$async$transduce_$_state_machine__11728__auto__);

(statearr_12341[(1)] = (1));

return statearr_12341;
});
var cljs$core$async$transduce_$_state_machine__11728__auto____1 = (function (state_12338){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12342){var ex__11731__auto__ = e12342;
var statearr_12343_12429 = state_12338;
(statearr_12343_12429[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12338[(4)]))){
var statearr_12344_12430 = state_12338;
(statearr_12344_12430[(1)] = cljs.core.first.call(null,(state_12338[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12431 = state_12338;
state_12338 = G__12431;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11728__auto__ = function(state_12338){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11728__auto____1.call(this,state_12338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11728__auto____0;
cljs$core$async$transduce_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11728__auto____1;
return cljs$core$async$transduce_$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12346 = f__11833__auto__.call(null);
(statearr_12346[(6)] = c__11832__auto__);

return statearr_12346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));

return c__11832__auto__;
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
var G__12351 = arguments.length;
switch (G__12351) {
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
var c__11832__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12382){
var state_val_12383 = (state_12382[(1)]);
if((state_val_12383 === (7))){
var inst_12363 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12386_12433 = state_12382__$1;
(statearr_12386_12433[(2)] = inst_12363);

(statearr_12386_12433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (1))){
var inst_12356 = cljs.core.seq.call(null,coll);
var inst_12357 = inst_12356;
var state_12382__$1 = (function (){var statearr_12388 = state_12382;
(statearr_12388[(7)] = inst_12357);

return statearr_12388;
})();
var statearr_12390_12434 = state_12382__$1;
(statearr_12390_12434[(2)] = null);

(statearr_12390_12434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (4))){
var inst_12357 = (state_12382[(7)]);
var inst_12361 = cljs.core.first.call(null,inst_12357);
var state_12382__$1 = state_12382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12382__$1,(7),ch,inst_12361);
} else {
if((state_val_12383 === (13))){
var inst_12376 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12393_12435 = state_12382__$1;
(statearr_12393_12435[(2)] = inst_12376);

(statearr_12393_12435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (6))){
var inst_12366 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
if(cljs.core.truth_(inst_12366)){
var statearr_12395_12436 = state_12382__$1;
(statearr_12395_12436[(1)] = (8));

} else {
var statearr_12396_12437 = state_12382__$1;
(statearr_12396_12437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (3))){
var inst_12380 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12382__$1,inst_12380);
} else {
if((state_val_12383 === (12))){
var state_12382__$1 = state_12382;
var statearr_12399_12438 = state_12382__$1;
(statearr_12399_12438[(2)] = null);

(statearr_12399_12438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (2))){
var inst_12357 = (state_12382[(7)]);
var state_12382__$1 = state_12382;
if(cljs.core.truth_(inst_12357)){
var statearr_12400_12439 = state_12382__$1;
(statearr_12400_12439[(1)] = (4));

} else {
var statearr_12401_12440 = state_12382__$1;
(statearr_12401_12440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (11))){
var inst_12373 = cljs.core.async.close_BANG_.call(null,ch);
var state_12382__$1 = state_12382;
var statearr_12402_12441 = state_12382__$1;
(statearr_12402_12441[(2)] = inst_12373);

(statearr_12402_12441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (9))){
var state_12382__$1 = state_12382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12404_12442 = state_12382__$1;
(statearr_12404_12442[(1)] = (11));

} else {
var statearr_12406_12443 = state_12382__$1;
(statearr_12406_12443[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (5))){
var inst_12357 = (state_12382[(7)]);
var state_12382__$1 = state_12382;
var statearr_12407_12444 = state_12382__$1;
(statearr_12407_12444[(2)] = inst_12357);

(statearr_12407_12444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (10))){
var inst_12378 = (state_12382[(2)]);
var state_12382__$1 = state_12382;
var statearr_12410_12445 = state_12382__$1;
(statearr_12410_12445[(2)] = inst_12378);

(statearr_12410_12445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12383 === (8))){
var inst_12357 = (state_12382[(7)]);
var inst_12369 = cljs.core.next.call(null,inst_12357);
var inst_12357__$1 = inst_12369;
var state_12382__$1 = (function (){var statearr_12411 = state_12382;
(statearr_12411[(7)] = inst_12357__$1);

return statearr_12411;
})();
var statearr_12412_12446 = state_12382__$1;
(statearr_12412_12446[(2)] = null);

(statearr_12412_12446[(1)] = (2));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_12415 = [null,null,null,null,null,null,null,null];
(statearr_12415[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_12415[(1)] = (1));

return statearr_12415;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_12382){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12417){var ex__11731__auto__ = e12417;
var statearr_12418_12447 = state_12382;
(statearr_12418_12447[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12382[(4)]))){
var statearr_12420_12448 = state_12382;
(statearr_12420_12448[(1)] = cljs.core.first.call(null,(state_12382[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12449 = state_12382;
state_12382 = G__12449;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_12382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_12382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12423 = f__11833__auto__.call(null);
(statearr_12423[(6)] = c__11832__auto__);

return statearr_12423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));

return c__11832__auto__;
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
var G__12428 = arguments.length;
switch (G__12428) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_12454 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_12454.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_12455 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_12455.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_12456 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_12456.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_12457 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_12457.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12451 = (function (ch,cs,meta12452){
this.ch = ch;
this.cs = cs;
this.meta12452 = meta12452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12453,meta12452__$1){
var self__ = this;
var _12453__$1 = this;
return (new cljs.core.async.t_cljs$core$async12451(self__.ch,self__.cs,meta12452__$1));
}));

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12453){
var self__ = this;
var _12453__$1 = this;
return self__.meta12452;
}));

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async12451.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async12451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12452","meta12452",227625875,null)], null);
}));

(cljs.core.async.t_cljs$core$async12451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12451");

(cljs.core.async.t_cljs$core$async12451.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12451.
 */
cljs.core.async.__GT_t_cljs$core$async12451 = (function cljs$core$async$mult_$___GT_t_cljs$core$async12451(ch__$1,cs__$1,meta12452){
return (new cljs.core.async.t_cljs$core$async12451(ch__$1,cs__$1,meta12452));
});

}

return (new cljs.core.async.t_cljs$core$async12451(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11832__auto___12676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12590){
var state_val_12591 = (state_12590[(1)]);
if((state_val_12591 === (7))){
var inst_12586 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12592_12677 = state_12590__$1;
(statearr_12592_12677[(2)] = inst_12586);

(statearr_12592_12677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (20))){
var inst_12491 = (state_12590[(7)]);
var inst_12503 = cljs.core.first.call(null,inst_12491);
var inst_12504 = cljs.core.nth.call(null,inst_12503,(0),null);
var inst_12505 = cljs.core.nth.call(null,inst_12503,(1),null);
var state_12590__$1 = (function (){var statearr_12593 = state_12590;
(statearr_12593[(8)] = inst_12504);

return statearr_12593;
})();
if(cljs.core.truth_(inst_12505)){
var statearr_12594_12678 = state_12590__$1;
(statearr_12594_12678[(1)] = (22));

} else {
var statearr_12595_12679 = state_12590__$1;
(statearr_12595_12679[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (27))){
var inst_12533 = (state_12590[(9)]);
var inst_12535 = (state_12590[(10)]);
var inst_12540 = (state_12590[(11)]);
var inst_12460 = (state_12590[(12)]);
var inst_12540__$1 = cljs.core._nth.call(null,inst_12533,inst_12535);
var inst_12541 = cljs.core.async.put_BANG_.call(null,inst_12540__$1,inst_12460,done);
var state_12590__$1 = (function (){var statearr_12596 = state_12590;
(statearr_12596[(11)] = inst_12540__$1);

return statearr_12596;
})();
if(cljs.core.truth_(inst_12541)){
var statearr_12597_12680 = state_12590__$1;
(statearr_12597_12680[(1)] = (30));

} else {
var statearr_12598_12681 = state_12590__$1;
(statearr_12598_12681[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (1))){
var state_12590__$1 = state_12590;
var statearr_12599_12682 = state_12590__$1;
(statearr_12599_12682[(2)] = null);

(statearr_12599_12682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (24))){
var inst_12491 = (state_12590[(7)]);
var inst_12510 = (state_12590[(2)]);
var inst_12511 = cljs.core.next.call(null,inst_12491);
var inst_12469 = inst_12511;
var inst_12470 = null;
var inst_12471 = (0);
var inst_12472 = (0);
var state_12590__$1 = (function (){var statearr_12600 = state_12590;
(statearr_12600[(13)] = inst_12510);

(statearr_12600[(14)] = inst_12469);

(statearr_12600[(15)] = inst_12470);

(statearr_12600[(16)] = inst_12471);

(statearr_12600[(17)] = inst_12472);

return statearr_12600;
})();
var statearr_12601_12683 = state_12590__$1;
(statearr_12601_12683[(2)] = null);

(statearr_12601_12683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (39))){
var state_12590__$1 = state_12590;
var statearr_12605_12684 = state_12590__$1;
(statearr_12605_12684[(2)] = null);

(statearr_12605_12684[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (4))){
var inst_12460 = (state_12590[(12)]);
var inst_12460__$1 = (state_12590[(2)]);
var inst_12461 = (inst_12460__$1 == null);
var state_12590__$1 = (function (){var statearr_12606 = state_12590;
(statearr_12606[(12)] = inst_12460__$1);

return statearr_12606;
})();
if(cljs.core.truth_(inst_12461)){
var statearr_12607_12685 = state_12590__$1;
(statearr_12607_12685[(1)] = (5));

} else {
var statearr_12608_12686 = state_12590__$1;
(statearr_12608_12686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (15))){
var inst_12472 = (state_12590[(17)]);
var inst_12469 = (state_12590[(14)]);
var inst_12470 = (state_12590[(15)]);
var inst_12471 = (state_12590[(16)]);
var inst_12487 = (state_12590[(2)]);
var inst_12488 = (inst_12472 + (1));
var tmp12602 = inst_12471;
var tmp12603 = inst_12469;
var tmp12604 = inst_12470;
var inst_12469__$1 = tmp12603;
var inst_12470__$1 = tmp12604;
var inst_12471__$1 = tmp12602;
var inst_12472__$1 = inst_12488;
var state_12590__$1 = (function (){var statearr_12609 = state_12590;
(statearr_12609[(18)] = inst_12487);

(statearr_12609[(14)] = inst_12469__$1);

(statearr_12609[(15)] = inst_12470__$1);

(statearr_12609[(16)] = inst_12471__$1);

(statearr_12609[(17)] = inst_12472__$1);

return statearr_12609;
})();
var statearr_12610_12687 = state_12590__$1;
(statearr_12610_12687[(2)] = null);

(statearr_12610_12687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (21))){
var inst_12514 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12614_12688 = state_12590__$1;
(statearr_12614_12688[(2)] = inst_12514);

(statearr_12614_12688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (31))){
var inst_12540 = (state_12590[(11)]);
var inst_12544 = cljs.core.async.untap_STAR_.call(null,m,inst_12540);
var state_12590__$1 = state_12590;
var statearr_12615_12689 = state_12590__$1;
(statearr_12615_12689[(2)] = inst_12544);

(statearr_12615_12689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (32))){
var inst_12535 = (state_12590[(10)]);
var inst_12532 = (state_12590[(19)]);
var inst_12533 = (state_12590[(9)]);
var inst_12534 = (state_12590[(20)]);
var inst_12546 = (state_12590[(2)]);
var inst_12547 = (inst_12535 + (1));
var tmp12611 = inst_12532;
var tmp12612 = inst_12534;
var tmp12613 = inst_12533;
var inst_12532__$1 = tmp12611;
var inst_12533__$1 = tmp12613;
var inst_12534__$1 = tmp12612;
var inst_12535__$1 = inst_12547;
var state_12590__$1 = (function (){var statearr_12616 = state_12590;
(statearr_12616[(21)] = inst_12546);

(statearr_12616[(19)] = inst_12532__$1);

(statearr_12616[(9)] = inst_12533__$1);

(statearr_12616[(20)] = inst_12534__$1);

(statearr_12616[(10)] = inst_12535__$1);

return statearr_12616;
})();
var statearr_12617_12690 = state_12590__$1;
(statearr_12617_12690[(2)] = null);

(statearr_12617_12690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (40))){
var inst_12559 = (state_12590[(22)]);
var inst_12563 = cljs.core.async.untap_STAR_.call(null,m,inst_12559);
var state_12590__$1 = state_12590;
var statearr_12618_12691 = state_12590__$1;
(statearr_12618_12691[(2)] = inst_12563);

(statearr_12618_12691[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (33))){
var inst_12550 = (state_12590[(23)]);
var inst_12552 = cljs.core.chunked_seq_QMARK_.call(null,inst_12550);
var state_12590__$1 = state_12590;
if(inst_12552){
var statearr_12619_12692 = state_12590__$1;
(statearr_12619_12692[(1)] = (36));

} else {
var statearr_12620_12693 = state_12590__$1;
(statearr_12620_12693[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (13))){
var inst_12481 = (state_12590[(24)]);
var inst_12484 = cljs.core.async.close_BANG_.call(null,inst_12481);
var state_12590__$1 = state_12590;
var statearr_12621_12694 = state_12590__$1;
(statearr_12621_12694[(2)] = inst_12484);

(statearr_12621_12694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (22))){
var inst_12504 = (state_12590[(8)]);
var inst_12507 = cljs.core.async.close_BANG_.call(null,inst_12504);
var state_12590__$1 = state_12590;
var statearr_12622_12699 = state_12590__$1;
(statearr_12622_12699[(2)] = inst_12507);

(statearr_12622_12699[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (36))){
var inst_12550 = (state_12590[(23)]);
var inst_12554 = cljs.core.chunk_first.call(null,inst_12550);
var inst_12555 = cljs.core.chunk_rest.call(null,inst_12550);
var inst_12556 = cljs.core.count.call(null,inst_12554);
var inst_12532 = inst_12555;
var inst_12533 = inst_12554;
var inst_12534 = inst_12556;
var inst_12535 = (0);
var state_12590__$1 = (function (){var statearr_12623 = state_12590;
(statearr_12623[(19)] = inst_12532);

(statearr_12623[(9)] = inst_12533);

(statearr_12623[(20)] = inst_12534);

(statearr_12623[(10)] = inst_12535);

return statearr_12623;
})();
var statearr_12624_12700 = state_12590__$1;
(statearr_12624_12700[(2)] = null);

(statearr_12624_12700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (41))){
var inst_12550 = (state_12590[(23)]);
var inst_12565 = (state_12590[(2)]);
var inst_12566 = cljs.core.next.call(null,inst_12550);
var inst_12532 = inst_12566;
var inst_12533 = null;
var inst_12534 = (0);
var inst_12535 = (0);
var state_12590__$1 = (function (){var statearr_12625 = state_12590;
(statearr_12625[(25)] = inst_12565);

(statearr_12625[(19)] = inst_12532);

(statearr_12625[(9)] = inst_12533);

(statearr_12625[(20)] = inst_12534);

(statearr_12625[(10)] = inst_12535);

return statearr_12625;
})();
var statearr_12626_12704 = state_12590__$1;
(statearr_12626_12704[(2)] = null);

(statearr_12626_12704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (43))){
var state_12590__$1 = state_12590;
var statearr_12627_12706 = state_12590__$1;
(statearr_12627_12706[(2)] = null);

(statearr_12627_12706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (29))){
var inst_12574 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12628_12708 = state_12590__$1;
(statearr_12628_12708[(2)] = inst_12574);

(statearr_12628_12708[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (44))){
var inst_12583 = (state_12590[(2)]);
var state_12590__$1 = (function (){var statearr_12629 = state_12590;
(statearr_12629[(26)] = inst_12583);

return statearr_12629;
})();
var statearr_12630_12709 = state_12590__$1;
(statearr_12630_12709[(2)] = null);

(statearr_12630_12709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (6))){
var inst_12524 = (state_12590[(27)]);
var inst_12523 = cljs.core.deref.call(null,cs);
var inst_12524__$1 = cljs.core.keys.call(null,inst_12523);
var inst_12525 = cljs.core.count.call(null,inst_12524__$1);
var inst_12526 = cljs.core.reset_BANG_.call(null,dctr,inst_12525);
var inst_12531 = cljs.core.seq.call(null,inst_12524__$1);
var inst_12532 = inst_12531;
var inst_12533 = null;
var inst_12534 = (0);
var inst_12535 = (0);
var state_12590__$1 = (function (){var statearr_12631 = state_12590;
(statearr_12631[(27)] = inst_12524__$1);

(statearr_12631[(28)] = inst_12526);

(statearr_12631[(19)] = inst_12532);

(statearr_12631[(9)] = inst_12533);

(statearr_12631[(20)] = inst_12534);

(statearr_12631[(10)] = inst_12535);

return statearr_12631;
})();
var statearr_12632_12710 = state_12590__$1;
(statearr_12632_12710[(2)] = null);

(statearr_12632_12710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (28))){
var inst_12532 = (state_12590[(19)]);
var inst_12550 = (state_12590[(23)]);
var inst_12550__$1 = cljs.core.seq.call(null,inst_12532);
var state_12590__$1 = (function (){var statearr_12633 = state_12590;
(statearr_12633[(23)] = inst_12550__$1);

return statearr_12633;
})();
if(inst_12550__$1){
var statearr_12634_12711 = state_12590__$1;
(statearr_12634_12711[(1)] = (33));

} else {
var statearr_12635_12712 = state_12590__$1;
(statearr_12635_12712[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (25))){
var inst_12535 = (state_12590[(10)]);
var inst_12534 = (state_12590[(20)]);
var inst_12537 = (inst_12535 < inst_12534);
var inst_12538 = inst_12537;
var state_12590__$1 = state_12590;
if(cljs.core.truth_(inst_12538)){
var statearr_12636_12713 = state_12590__$1;
(statearr_12636_12713[(1)] = (27));

} else {
var statearr_12637_12714 = state_12590__$1;
(statearr_12637_12714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (34))){
var state_12590__$1 = state_12590;
var statearr_12638_12715 = state_12590__$1;
(statearr_12638_12715[(2)] = null);

(statearr_12638_12715[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (17))){
var state_12590__$1 = state_12590;
var statearr_12639_12716 = state_12590__$1;
(statearr_12639_12716[(2)] = null);

(statearr_12639_12716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (3))){
var inst_12588 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12590__$1,inst_12588);
} else {
if((state_val_12591 === (12))){
var inst_12519 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12640_12717 = state_12590__$1;
(statearr_12640_12717[(2)] = inst_12519);

(statearr_12640_12717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (2))){
var state_12590__$1 = state_12590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12590__$1,(4),ch);
} else {
if((state_val_12591 === (23))){
var state_12590__$1 = state_12590;
var statearr_12641_12721 = state_12590__$1;
(statearr_12641_12721[(2)] = null);

(statearr_12641_12721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (35))){
var inst_12572 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12642_12722 = state_12590__$1;
(statearr_12642_12722[(2)] = inst_12572);

(statearr_12642_12722[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (19))){
var inst_12491 = (state_12590[(7)]);
var inst_12495 = cljs.core.chunk_first.call(null,inst_12491);
var inst_12496 = cljs.core.chunk_rest.call(null,inst_12491);
var inst_12497 = cljs.core.count.call(null,inst_12495);
var inst_12469 = inst_12496;
var inst_12470 = inst_12495;
var inst_12471 = inst_12497;
var inst_12472 = (0);
var state_12590__$1 = (function (){var statearr_12643 = state_12590;
(statearr_12643[(14)] = inst_12469);

(statearr_12643[(15)] = inst_12470);

(statearr_12643[(16)] = inst_12471);

(statearr_12643[(17)] = inst_12472);

return statearr_12643;
})();
var statearr_12644_12723 = state_12590__$1;
(statearr_12644_12723[(2)] = null);

(statearr_12644_12723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (11))){
var inst_12469 = (state_12590[(14)]);
var inst_12491 = (state_12590[(7)]);
var inst_12491__$1 = cljs.core.seq.call(null,inst_12469);
var state_12590__$1 = (function (){var statearr_12645 = state_12590;
(statearr_12645[(7)] = inst_12491__$1);

return statearr_12645;
})();
if(inst_12491__$1){
var statearr_12646_12724 = state_12590__$1;
(statearr_12646_12724[(1)] = (16));

} else {
var statearr_12647_12725 = state_12590__$1;
(statearr_12647_12725[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (9))){
var inst_12521 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12648_12726 = state_12590__$1;
(statearr_12648_12726[(2)] = inst_12521);

(statearr_12648_12726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (5))){
var inst_12467 = cljs.core.deref.call(null,cs);
var inst_12468 = cljs.core.seq.call(null,inst_12467);
var inst_12469 = inst_12468;
var inst_12470 = null;
var inst_12471 = (0);
var inst_12472 = (0);
var state_12590__$1 = (function (){var statearr_12649 = state_12590;
(statearr_12649[(14)] = inst_12469);

(statearr_12649[(15)] = inst_12470);

(statearr_12649[(16)] = inst_12471);

(statearr_12649[(17)] = inst_12472);

return statearr_12649;
})();
var statearr_12650_12727 = state_12590__$1;
(statearr_12650_12727[(2)] = null);

(statearr_12650_12727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (14))){
var state_12590__$1 = state_12590;
var statearr_12651_12728 = state_12590__$1;
(statearr_12651_12728[(2)] = null);

(statearr_12651_12728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (45))){
var inst_12580 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12652_12729 = state_12590__$1;
(statearr_12652_12729[(2)] = inst_12580);

(statearr_12652_12729[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (26))){
var inst_12524 = (state_12590[(27)]);
var inst_12576 = (state_12590[(2)]);
var inst_12577 = cljs.core.seq.call(null,inst_12524);
var state_12590__$1 = (function (){var statearr_12653 = state_12590;
(statearr_12653[(29)] = inst_12576);

return statearr_12653;
})();
if(inst_12577){
var statearr_12654_12730 = state_12590__$1;
(statearr_12654_12730[(1)] = (42));

} else {
var statearr_12655_12731 = state_12590__$1;
(statearr_12655_12731[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (16))){
var inst_12491 = (state_12590[(7)]);
var inst_12493 = cljs.core.chunked_seq_QMARK_.call(null,inst_12491);
var state_12590__$1 = state_12590;
if(inst_12493){
var statearr_12656_12732 = state_12590__$1;
(statearr_12656_12732[(1)] = (19));

} else {
var statearr_12657_12733 = state_12590__$1;
(statearr_12657_12733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (38))){
var inst_12569 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12658_12734 = state_12590__$1;
(statearr_12658_12734[(2)] = inst_12569);

(statearr_12658_12734[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (30))){
var state_12590__$1 = state_12590;
var statearr_12659_12735 = state_12590__$1;
(statearr_12659_12735[(2)] = null);

(statearr_12659_12735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (10))){
var inst_12470 = (state_12590[(15)]);
var inst_12472 = (state_12590[(17)]);
var inst_12480 = cljs.core._nth.call(null,inst_12470,inst_12472);
var inst_12481 = cljs.core.nth.call(null,inst_12480,(0),null);
var inst_12482 = cljs.core.nth.call(null,inst_12480,(1),null);
var state_12590__$1 = (function (){var statearr_12660 = state_12590;
(statearr_12660[(24)] = inst_12481);

return statearr_12660;
})();
if(cljs.core.truth_(inst_12482)){
var statearr_12661_12739 = state_12590__$1;
(statearr_12661_12739[(1)] = (13));

} else {
var statearr_12662_12740 = state_12590__$1;
(statearr_12662_12740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (18))){
var inst_12517 = (state_12590[(2)]);
var state_12590__$1 = state_12590;
var statearr_12663_12744 = state_12590__$1;
(statearr_12663_12744[(2)] = inst_12517);

(statearr_12663_12744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (42))){
var state_12590__$1 = state_12590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12590__$1,(45),dchan);
} else {
if((state_val_12591 === (37))){
var inst_12550 = (state_12590[(23)]);
var inst_12559 = (state_12590[(22)]);
var inst_12460 = (state_12590[(12)]);
var inst_12559__$1 = cljs.core.first.call(null,inst_12550);
var inst_12560 = cljs.core.async.put_BANG_.call(null,inst_12559__$1,inst_12460,done);
var state_12590__$1 = (function (){var statearr_12664 = state_12590;
(statearr_12664[(22)] = inst_12559__$1);

return statearr_12664;
})();
if(cljs.core.truth_(inst_12560)){
var statearr_12665_12760 = state_12590__$1;
(statearr_12665_12760[(1)] = (39));

} else {
var statearr_12666_12762 = state_12590__$1;
(statearr_12666_12762[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12591 === (8))){
var inst_12472 = (state_12590[(17)]);
var inst_12471 = (state_12590[(16)]);
var inst_12474 = (inst_12472 < inst_12471);
var inst_12475 = inst_12474;
var state_12590__$1 = state_12590;
if(cljs.core.truth_(inst_12475)){
var statearr_12667_12771 = state_12590__$1;
(statearr_12667_12771[(1)] = (10));

} else {
var statearr_12668_12773 = state_12590__$1;
(statearr_12668_12773[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11728__auto__ = null;
var cljs$core$async$mult_$_state_machine__11728__auto____0 = (function (){
var statearr_12669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12669[(0)] = cljs$core$async$mult_$_state_machine__11728__auto__);

(statearr_12669[(1)] = (1));

return statearr_12669;
});
var cljs$core$async$mult_$_state_machine__11728__auto____1 = (function (state_12590){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12670){var ex__11731__auto__ = e12670;
var statearr_12671_12807 = state_12590;
(statearr_12671_12807[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12590[(4)]))){
var statearr_12672_12811 = state_12590;
(statearr_12672_12811[(1)] = cljs.core.first.call(null,(state_12590[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12812 = state_12590;
state_12590 = G__12812;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11728__auto__ = function(state_12590){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11728__auto____1.call(this,state_12590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11728__auto____0;
cljs$core$async$mult_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11728__auto____1;
return cljs$core$async$mult_$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12673 = f__11833__auto__.call(null);
(statearr_12673[(6)] = c__11832__auto___12676);

return statearr_12673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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
var G__12675 = arguments.length;
switch (G__12675) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_12818 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_12818.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12822 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_12822.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12825 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12825.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12831 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_12831.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12835 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12835.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12839 = arguments.length;
var i__5750__auto___12840 = (0);
while(true){
if((i__5750__auto___12840 < len__5749__auto___12839)){
args__5755__auto__.push((arguments[i__5750__auto___12840]));

var G__12842 = (i__5750__auto___12840 + (1));
i__5750__auto___12840 = G__12842;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12701){
var map__12702 = p__12701;
var map__12702__$1 = cljs.core.__destructure_map.call(null,map__12702);
var opts = map__12702__$1;
var statearr_12703_12844 = state;
(statearr_12703_12844[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12705_12845 = state;
(statearr_12705_12845[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12707_12847 = state;
(statearr_12707_12847[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12695){
var G__12696 = cljs.core.first.call(null,seq12695);
var seq12695__$1 = cljs.core.next.call(null,seq12695);
var G__12697 = cljs.core.first.call(null,seq12695__$1);
var seq12695__$2 = cljs.core.next.call(null,seq12695__$1);
var G__12698 = cljs.core.first.call(null,seq12695__$2);
var seq12695__$3 = cljs.core.next.call(null,seq12695__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12696,G__12697,G__12698,seq12695__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12718 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12719){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12719 = meta12719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12720,meta12719__$1){
var self__ = this;
var _12720__$1 = this;
return (new cljs.core.async.t_cljs$core$async12718(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12719__$1));
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12720){
var self__ = this;
var _12720__$1 = this;
return self__.meta12719;
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12718.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12719","meta12719",-848134156,null)], null);
}));

(cljs.core.async.t_cljs$core$async12718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12718");

(cljs.core.async.t_cljs$core$async12718.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12718.
 */
cljs.core.async.__GT_t_cljs$core$async12718 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12718(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12719){
return (new cljs.core.async.t_cljs$core$async12718(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12719));
});

}

return (new cljs.core.async.t_cljs$core$async12718(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11832__auto___12870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12813){
var state_val_12814 = (state_12813[(1)]);
if((state_val_12814 === (7))){
var inst_12768 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
if(cljs.core.truth_(inst_12768)){
var statearr_12816_12873 = state_12813__$1;
(statearr_12816_12873[(1)] = (8));

} else {
var statearr_12817_12874 = state_12813__$1;
(statearr_12817_12874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (20))){
var inst_12759 = (state_12813[(7)]);
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12813__$1,(23),out,inst_12759);
} else {
if((state_val_12814 === (1))){
var inst_12741 = calc_state.call(null);
var inst_12742 = cljs.core.__destructure_map.call(null,inst_12741);
var inst_12743 = cljs.core.get.call(null,inst_12742,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12745 = cljs.core.get.call(null,inst_12742,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12746 = cljs.core.get.call(null,inst_12742,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12747 = inst_12741;
var state_12813__$1 = (function (){var statearr_12819 = state_12813;
(statearr_12819[(8)] = inst_12743);

(statearr_12819[(9)] = inst_12745);

(statearr_12819[(10)] = inst_12746);

(statearr_12819[(11)] = inst_12747);

return statearr_12819;
})();
var statearr_12820_12875 = state_12813__$1;
(statearr_12820_12875[(2)] = null);

(statearr_12820_12875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (24))){
var inst_12750 = (state_12813[(12)]);
var inst_12747 = inst_12750;
var state_12813__$1 = (function (){var statearr_12821 = state_12813;
(statearr_12821[(11)] = inst_12747);

return statearr_12821;
})();
var statearr_12823_12876 = state_12813__$1;
(statearr_12823_12876[(2)] = null);

(statearr_12823_12876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (4))){
var inst_12759 = (state_12813[(7)]);
var inst_12763 = (state_12813[(13)]);
var inst_12758 = (state_12813[(2)]);
var inst_12759__$1 = cljs.core.nth.call(null,inst_12758,(0),null);
var inst_12761 = cljs.core.nth.call(null,inst_12758,(1),null);
var inst_12763__$1 = (inst_12759__$1 == null);
var state_12813__$1 = (function (){var statearr_12824 = state_12813;
(statearr_12824[(7)] = inst_12759__$1);

(statearr_12824[(14)] = inst_12761);

(statearr_12824[(13)] = inst_12763__$1);

return statearr_12824;
})();
if(cljs.core.truth_(inst_12763__$1)){
var statearr_12826_12878 = state_12813__$1;
(statearr_12826_12878[(1)] = (5));

} else {
var statearr_12827_12879 = state_12813__$1;
(statearr_12827_12879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (15))){
var inst_12751 = (state_12813[(15)]);
var inst_12784 = (state_12813[(16)]);
var inst_12784__$1 = cljs.core.empty_QMARK_.call(null,inst_12751);
var state_12813__$1 = (function (){var statearr_12828 = state_12813;
(statearr_12828[(16)] = inst_12784__$1);

return statearr_12828;
})();
if(inst_12784__$1){
var statearr_12829_12882 = state_12813__$1;
(statearr_12829_12882[(1)] = (17));

} else {
var statearr_12830_12883 = state_12813__$1;
(statearr_12830_12883[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (21))){
var inst_12750 = (state_12813[(12)]);
var inst_12747 = inst_12750;
var state_12813__$1 = (function (){var statearr_12832 = state_12813;
(statearr_12832[(11)] = inst_12747);

return statearr_12832;
})();
var statearr_12833_12884 = state_12813__$1;
(statearr_12833_12884[(2)] = null);

(statearr_12833_12884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (13))){
var inst_12777 = (state_12813[(2)]);
var inst_12778 = calc_state.call(null);
var inst_12747 = inst_12778;
var state_12813__$1 = (function (){var statearr_12834 = state_12813;
(statearr_12834[(17)] = inst_12777);

(statearr_12834[(11)] = inst_12747);

return statearr_12834;
})();
var statearr_12836_12885 = state_12813__$1;
(statearr_12836_12885[(2)] = null);

(statearr_12836_12885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (22))){
var inst_12804 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12837_12886 = state_12813__$1;
(statearr_12837_12886[(2)] = inst_12804);

(statearr_12837_12886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (6))){
var inst_12761 = (state_12813[(14)]);
var inst_12766 = cljs.core._EQ_.call(null,inst_12761,change);
var state_12813__$1 = state_12813;
var statearr_12838_12890 = state_12813__$1;
(statearr_12838_12890[(2)] = inst_12766);

(statearr_12838_12890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (25))){
var state_12813__$1 = state_12813;
var statearr_12841_12891 = state_12813__$1;
(statearr_12841_12891[(2)] = null);

(statearr_12841_12891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (17))){
var inst_12752 = (state_12813[(18)]);
var inst_12761 = (state_12813[(14)]);
var inst_12786 = inst_12752.call(null,inst_12761);
var inst_12787 = cljs.core.not.call(null,inst_12786);
var state_12813__$1 = state_12813;
var statearr_12843_12892 = state_12813__$1;
(statearr_12843_12892[(2)] = inst_12787);

(statearr_12843_12892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (3))){
var inst_12809 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12813__$1,inst_12809);
} else {
if((state_val_12814 === (12))){
var state_12813__$1 = state_12813;
var statearr_12846_12893 = state_12813__$1;
(statearr_12846_12893[(2)] = null);

(statearr_12846_12893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (2))){
var inst_12747 = (state_12813[(11)]);
var inst_12750 = (state_12813[(12)]);
var inst_12750__$1 = cljs.core.__destructure_map.call(null,inst_12747);
var inst_12751 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12752 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12753 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12813__$1 = (function (){var statearr_12848 = state_12813;
(statearr_12848[(12)] = inst_12750__$1);

(statearr_12848[(15)] = inst_12751);

(statearr_12848[(18)] = inst_12752);

return statearr_12848;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12813__$1,(4),inst_12753);
} else {
if((state_val_12814 === (23))){
var inst_12795 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
if(cljs.core.truth_(inst_12795)){
var statearr_12849_12894 = state_12813__$1;
(statearr_12849_12894[(1)] = (24));

} else {
var statearr_12850_12895 = state_12813__$1;
(statearr_12850_12895[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (19))){
var inst_12790 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12851_12896 = state_12813__$1;
(statearr_12851_12896[(2)] = inst_12790);

(statearr_12851_12896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (11))){
var inst_12761 = (state_12813[(14)]);
var inst_12774 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12761);
var state_12813__$1 = state_12813;
var statearr_12852_12897 = state_12813__$1;
(statearr_12852_12897[(2)] = inst_12774);

(statearr_12852_12897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (9))){
var inst_12751 = (state_12813[(15)]);
var inst_12761 = (state_12813[(14)]);
var inst_12781 = (state_12813[(19)]);
var inst_12781__$1 = inst_12751.call(null,inst_12761);
var state_12813__$1 = (function (){var statearr_12853 = state_12813;
(statearr_12853[(19)] = inst_12781__$1);

return statearr_12853;
})();
if(cljs.core.truth_(inst_12781__$1)){
var statearr_12854_12898 = state_12813__$1;
(statearr_12854_12898[(1)] = (14));

} else {
var statearr_12855_12899 = state_12813__$1;
(statearr_12855_12899[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (5))){
var inst_12763 = (state_12813[(13)]);
var state_12813__$1 = state_12813;
var statearr_12856_12900 = state_12813__$1;
(statearr_12856_12900[(2)] = inst_12763);

(statearr_12856_12900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (14))){
var inst_12781 = (state_12813[(19)]);
var state_12813__$1 = state_12813;
var statearr_12857_12901 = state_12813__$1;
(statearr_12857_12901[(2)] = inst_12781);

(statearr_12857_12901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (26))){
var inst_12800 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12858_12902 = state_12813__$1;
(statearr_12858_12902[(2)] = inst_12800);

(statearr_12858_12902[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (16))){
var inst_12792 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
if(cljs.core.truth_(inst_12792)){
var statearr_12859_12903 = state_12813__$1;
(statearr_12859_12903[(1)] = (20));

} else {
var statearr_12860_12905 = state_12813__$1;
(statearr_12860_12905[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (10))){
var inst_12806 = (state_12813[(2)]);
var state_12813__$1 = state_12813;
var statearr_12861_12914 = state_12813__$1;
(statearr_12861_12914[(2)] = inst_12806);

(statearr_12861_12914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (18))){
var inst_12784 = (state_12813[(16)]);
var state_12813__$1 = state_12813;
var statearr_12862_12922 = state_12813__$1;
(statearr_12862_12922[(2)] = inst_12784);

(statearr_12862_12922[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12814 === (8))){
var inst_12759 = (state_12813[(7)]);
var inst_12770 = (inst_12759 == null);
var state_12813__$1 = state_12813;
if(cljs.core.truth_(inst_12770)){
var statearr_12863_12928 = state_12813__$1;
(statearr_12863_12928[(1)] = (11));

} else {
var statearr_12864_12931 = state_12813__$1;
(statearr_12864_12931[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11728__auto__ = null;
var cljs$core$async$mix_$_state_machine__11728__auto____0 = (function (){
var statearr_12865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12865[(0)] = cljs$core$async$mix_$_state_machine__11728__auto__);

(statearr_12865[(1)] = (1));

return statearr_12865;
});
var cljs$core$async$mix_$_state_machine__11728__auto____1 = (function (state_12813){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e12866){var ex__11731__auto__ = e12866;
var statearr_12867_12945 = state_12813;
(statearr_12867_12945[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12813[(4)]))){
var statearr_12868_12954 = state_12813;
(statearr_12868_12954[(1)] = cljs.core.first.call(null,(state_12813[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12964 = state_12813;
state_12813 = G__12964;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11728__auto__ = function(state_12813){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11728__auto____1.call(this,state_12813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11728__auto____0;
cljs$core$async$mix_$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11728__auto____1;
return cljs$core$async$mix_$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_12869 = f__11833__auto__.call(null);
(statearr_12869[(6)] = c__11832__auto___12870);

return statearr_12869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12985 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12985.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12989 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12989.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12994 = (function() {
var G__12995 = null;
var G__12995__1 = (function (p){
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
var G__12995__2 = (function (p,v){
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
G__12995 = function(p,v){
switch(arguments.length){
case 1:
return G__12995__1.call(this,p);
case 2:
return G__12995__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12995.cljs$core$IFn$_invoke$arity$1 = G__12995__1;
G__12995.cljs$core$IFn$_invoke$arity$2 = G__12995__2;
return G__12995;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12872 = arguments.length;
switch (G__12872) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12994.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12994.call(null,p,v);
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
var G__12881 = arguments.length;
switch (G__12881) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12877_SHARP_){
if(cljs.core.truth_(p1__12877_SHARP_.call(null,topic))){
return p1__12877_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12877_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12888 = meta12888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12889,meta12888__$1){
var self__ = this;
var _12889__$1 = this;
return (new cljs.core.async.t_cljs$core$async12887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12888__$1));
}));

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12889){
var self__ = this;
var _12889__$1 = this;
return self__.meta12888;
}));

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12888","meta12888",-1123758775,null)], null);
}));

(cljs.core.async.t_cljs$core$async12887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12887");

(cljs.core.async.t_cljs$core$async12887.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12887.
 */
cljs.core.async.__GT_t_cljs$core$async12887 = (function cljs$core$async$__GT_t_cljs$core$async12887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12888){
return (new cljs.core.async.t_cljs$core$async12887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12888));
});

}

return (new cljs.core.async.t_cljs$core$async12887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11832__auto___13048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_12983){
var state_val_12984 = (state_12983[(1)]);
if((state_val_12984 === (7))){
var inst_12979 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
var statearr_12986_13049 = state_12983__$1;
(statearr_12986_13049[(2)] = inst_12979);

(statearr_12986_13049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (20))){
var state_12983__$1 = state_12983;
var statearr_12987_13050 = state_12983__$1;
(statearr_12987_13050[(2)] = null);

(statearr_12987_13050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (1))){
var state_12983__$1 = state_12983;
var statearr_12988_13051 = state_12983__$1;
(statearr_12988_13051[(2)] = null);

(statearr_12988_13051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (24))){
var inst_12961 = (state_12983[(7)]);
var inst_12971 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12961);
var state_12983__$1 = state_12983;
var statearr_12990_13053 = state_12983__$1;
(statearr_12990_13053[(2)] = inst_12971);

(statearr_12990_13053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (4))){
var inst_12907 = (state_12983[(8)]);
var inst_12907__$1 = (state_12983[(2)]);
var inst_12908 = (inst_12907__$1 == null);
var state_12983__$1 = (function (){var statearr_12991 = state_12983;
(statearr_12991[(8)] = inst_12907__$1);

return statearr_12991;
})();
if(cljs.core.truth_(inst_12908)){
var statearr_12992_13066 = state_12983__$1;
(statearr_12992_13066[(1)] = (5));

} else {
var statearr_12993_13072 = state_12983__$1;
(statearr_12993_13072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (15))){
var inst_12955 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
var statearr_12996_13081 = state_12983__$1;
(statearr_12996_13081[(2)] = inst_12955);

(statearr_12996_13081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (21))){
var inst_12976 = (state_12983[(2)]);
var state_12983__$1 = (function (){var statearr_12997 = state_12983;
(statearr_12997[(9)] = inst_12976);

return statearr_12997;
})();
var statearr_12998_13091 = state_12983__$1;
(statearr_12998_13091[(2)] = null);

(statearr_12998_13091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (13))){
var inst_12935 = (state_12983[(10)]);
var inst_12937 = cljs.core.chunked_seq_QMARK_.call(null,inst_12935);
var state_12983__$1 = state_12983;
if(inst_12937){
var statearr_12999_13094 = state_12983__$1;
(statearr_12999_13094[(1)] = (16));

} else {
var statearr_13000_13095 = state_12983__$1;
(statearr_13000_13095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (22))){
var inst_12968 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
if(cljs.core.truth_(inst_12968)){
var statearr_13001_13096 = state_12983__$1;
(statearr_13001_13096[(1)] = (23));

} else {
var statearr_13003_13097 = state_12983__$1;
(statearr_13003_13097[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (6))){
var inst_12907 = (state_12983[(8)]);
var inst_12961 = (state_12983[(7)]);
var inst_12963 = (state_12983[(11)]);
var inst_12961__$1 = topic_fn.call(null,inst_12907);
var inst_12962 = cljs.core.deref.call(null,mults);
var inst_12963__$1 = cljs.core.get.call(null,inst_12962,inst_12961__$1);
var state_12983__$1 = (function (){var statearr_13004 = state_12983;
(statearr_13004[(7)] = inst_12961__$1);

(statearr_13004[(11)] = inst_12963__$1);

return statearr_13004;
})();
if(cljs.core.truth_(inst_12963__$1)){
var statearr_13005_13100 = state_12983__$1;
(statearr_13005_13100[(1)] = (19));

} else {
var statearr_13006_13102 = state_12983__$1;
(statearr_13006_13102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (25))){
var inst_12973 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
var statearr_13007_13104 = state_12983__$1;
(statearr_13007_13104[(2)] = inst_12973);

(statearr_13007_13104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (17))){
var inst_12935 = (state_12983[(10)]);
var inst_12944 = cljs.core.first.call(null,inst_12935);
var inst_12946 = cljs.core.async.muxch_STAR_.call(null,inst_12944);
var inst_12947 = cljs.core.async.close_BANG_.call(null,inst_12946);
var inst_12948 = cljs.core.next.call(null,inst_12935);
var inst_12918 = inst_12948;
var inst_12919 = null;
var inst_12920 = (0);
var inst_12921 = (0);
var state_12983__$1 = (function (){var statearr_13008 = state_12983;
(statearr_13008[(12)] = inst_12947);

(statearr_13008[(13)] = inst_12918);

(statearr_13008[(14)] = inst_12919);

(statearr_13008[(15)] = inst_12920);

(statearr_13008[(16)] = inst_12921);

return statearr_13008;
})();
var statearr_13009_13108 = state_12983__$1;
(statearr_13009_13108[(2)] = null);

(statearr_13009_13108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (3))){
var inst_12981 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12983__$1,inst_12981);
} else {
if((state_val_12984 === (12))){
var inst_12957 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
var statearr_13010_13110 = state_12983__$1;
(statearr_13010_13110[(2)] = inst_12957);

(statearr_13010_13110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (2))){
var state_12983__$1 = state_12983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12983__$1,(4),ch);
} else {
if((state_val_12984 === (23))){
var state_12983__$1 = state_12983;
var statearr_13011_13111 = state_12983__$1;
(statearr_13011_13111[(2)] = null);

(statearr_13011_13111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (19))){
var inst_12963 = (state_12983[(11)]);
var inst_12907 = (state_12983[(8)]);
var inst_12966 = cljs.core.async.muxch_STAR_.call(null,inst_12963);
var state_12983__$1 = state_12983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12983__$1,(22),inst_12966,inst_12907);
} else {
if((state_val_12984 === (11))){
var inst_12918 = (state_12983[(13)]);
var inst_12935 = (state_12983[(10)]);
var inst_12935__$1 = cljs.core.seq.call(null,inst_12918);
var state_12983__$1 = (function (){var statearr_13012 = state_12983;
(statearr_13012[(10)] = inst_12935__$1);

return statearr_13012;
})();
if(inst_12935__$1){
var statearr_13013_13112 = state_12983__$1;
(statearr_13013_13112[(1)] = (13));

} else {
var statearr_13014_13113 = state_12983__$1;
(statearr_13014_13113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (9))){
var inst_12959 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
var statearr_13015_13114 = state_12983__$1;
(statearr_13015_13114[(2)] = inst_12959);

(statearr_13015_13114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (5))){
var inst_12915 = cljs.core.deref.call(null,mults);
var inst_12916 = cljs.core.vals.call(null,inst_12915);
var inst_12917 = cljs.core.seq.call(null,inst_12916);
var inst_12918 = inst_12917;
var inst_12919 = null;
var inst_12920 = (0);
var inst_12921 = (0);
var state_12983__$1 = (function (){var statearr_13016 = state_12983;
(statearr_13016[(13)] = inst_12918);

(statearr_13016[(14)] = inst_12919);

(statearr_13016[(15)] = inst_12920);

(statearr_13016[(16)] = inst_12921);

return statearr_13016;
})();
var statearr_13017_13116 = state_12983__$1;
(statearr_13017_13116[(2)] = null);

(statearr_13017_13116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (14))){
var state_12983__$1 = state_12983;
var statearr_13021_13117 = state_12983__$1;
(statearr_13021_13117[(2)] = null);

(statearr_13021_13117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (16))){
var inst_12935 = (state_12983[(10)]);
var inst_12939 = cljs.core.chunk_first.call(null,inst_12935);
var inst_12940 = cljs.core.chunk_rest.call(null,inst_12935);
var inst_12941 = cljs.core.count.call(null,inst_12939);
var inst_12918 = inst_12940;
var inst_12919 = inst_12939;
var inst_12920 = inst_12941;
var inst_12921 = (0);
var state_12983__$1 = (function (){var statearr_13022 = state_12983;
(statearr_13022[(13)] = inst_12918);

(statearr_13022[(14)] = inst_12919);

(statearr_13022[(15)] = inst_12920);

(statearr_13022[(16)] = inst_12921);

return statearr_13022;
})();
var statearr_13023_13121 = state_12983__$1;
(statearr_13023_13121[(2)] = null);

(statearr_13023_13121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (10))){
var inst_12919 = (state_12983[(14)]);
var inst_12921 = (state_12983[(16)]);
var inst_12918 = (state_12983[(13)]);
var inst_12920 = (state_12983[(15)]);
var inst_12927 = cljs.core._nth.call(null,inst_12919,inst_12921);
var inst_12929 = cljs.core.async.muxch_STAR_.call(null,inst_12927);
var inst_12930 = cljs.core.async.close_BANG_.call(null,inst_12929);
var inst_12932 = (inst_12921 + (1));
var tmp13018 = inst_12919;
var tmp13019 = inst_12918;
var tmp13020 = inst_12920;
var inst_12918__$1 = tmp13019;
var inst_12919__$1 = tmp13018;
var inst_12920__$1 = tmp13020;
var inst_12921__$1 = inst_12932;
var state_12983__$1 = (function (){var statearr_13024 = state_12983;
(statearr_13024[(17)] = inst_12930);

(statearr_13024[(13)] = inst_12918__$1);

(statearr_13024[(14)] = inst_12919__$1);

(statearr_13024[(15)] = inst_12920__$1);

(statearr_13024[(16)] = inst_12921__$1);

return statearr_13024;
})();
var statearr_13025_13124 = state_12983__$1;
(statearr_13025_13124[(2)] = null);

(statearr_13025_13124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (18))){
var inst_12951 = (state_12983[(2)]);
var state_12983__$1 = state_12983;
var statearr_13026_13125 = state_12983__$1;
(statearr_13026_13125[(2)] = inst_12951);

(statearr_13026_13125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12984 === (8))){
var inst_12921 = (state_12983[(16)]);
var inst_12920 = (state_12983[(15)]);
var inst_12924 = (inst_12921 < inst_12920);
var inst_12925 = inst_12924;
var state_12983__$1 = state_12983;
if(cljs.core.truth_(inst_12925)){
var statearr_13027_13126 = state_12983__$1;
(statearr_13027_13126[(1)] = (10));

} else {
var statearr_13028_13127 = state_12983__$1;
(statearr_13028_13127[(1)] = (11));

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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13029[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13029[(1)] = (1));

return statearr_13029;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_12983){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_12983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13030){var ex__11731__auto__ = e13030;
var statearr_13031_13130 = state_12983;
(statearr_13031_13130[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_12983[(4)]))){
var statearr_13032_13132 = state_12983;
(statearr_13032_13132[(1)] = cljs.core.first.call(null,(state_12983[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13134 = state_12983;
state_12983 = G__13134;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_12983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_12983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13033 = f__11833__auto__.call(null);
(statearr_13033[(6)] = c__11832__auto___13048);

return statearr_13033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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
var G__13035 = arguments.length;
switch (G__13035) {
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
var G__13037 = arguments.length;
switch (G__13037) {
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
var G__13040 = arguments.length;
switch (G__13040) {
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
var c__11832__auto___13155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13092){
var state_val_13093 = (state_13092[(1)]);
if((state_val_13093 === (7))){
var state_13092__$1 = state_13092;
var statearr_13098_13159 = state_13092__$1;
(statearr_13098_13159[(2)] = null);

(statearr_13098_13159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (1))){
var state_13092__$1 = state_13092;
var statearr_13099_13160 = state_13092__$1;
(statearr_13099_13160[(2)] = null);

(statearr_13099_13160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (4))){
var inst_13044 = (state_13092[(7)]);
var inst_13043 = (state_13092[(8)]);
var inst_13046 = (inst_13044 < inst_13043);
var state_13092__$1 = state_13092;
if(cljs.core.truth_(inst_13046)){
var statearr_13101_13171 = state_13092__$1;
(statearr_13101_13171[(1)] = (6));

} else {
var statearr_13103_13174 = state_13092__$1;
(statearr_13103_13174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (15))){
var inst_13076 = (state_13092[(9)]);
var inst_13082 = cljs.core.apply.call(null,f,inst_13076);
var state_13092__$1 = state_13092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13092__$1,(17),out,inst_13082);
} else {
if((state_val_13093 === (13))){
var inst_13076 = (state_13092[(9)]);
var inst_13076__$1 = (state_13092[(2)]);
var inst_13077 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13076__$1);
var state_13092__$1 = (function (){var statearr_13105 = state_13092;
(statearr_13105[(9)] = inst_13076__$1);

return statearr_13105;
})();
if(cljs.core.truth_(inst_13077)){
var statearr_13106_13191 = state_13092__$1;
(statearr_13106_13191[(1)] = (14));

} else {
var statearr_13107_13192 = state_13092__$1;
(statearr_13107_13192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (6))){
var state_13092__$1 = state_13092;
var statearr_13109_13194 = state_13092__$1;
(statearr_13109_13194[(2)] = null);

(statearr_13109_13194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (17))){
var inst_13084 = (state_13092[(2)]);
var state_13092__$1 = (function (){var statearr_13118 = state_13092;
(statearr_13118[(10)] = inst_13084);

return statearr_13118;
})();
var statearr_13119_13196 = state_13092__$1;
(statearr_13119_13196[(2)] = null);

(statearr_13119_13196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (3))){
var inst_13089 = (state_13092[(2)]);
var state_13092__$1 = state_13092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13092__$1,inst_13089);
} else {
if((state_val_13093 === (12))){
var _ = (function (){var statearr_13120 = state_13092;
(statearr_13120[(4)] = cljs.core.rest.call(null,(state_13092[(4)])));

return statearr_13120;
})();
var state_13092__$1 = state_13092;
var ex13115 = (state_13092__$1[(2)]);
var statearr_13122_13198 = state_13092__$1;
(statearr_13122_13198[(5)] = ex13115);


if((ex13115 instanceof Object)){
var statearr_13123_13199 = state_13092__$1;
(statearr_13123_13199[(1)] = (11));

(statearr_13123_13199[(5)] = null);

} else {
throw ex13115;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (2))){
var inst_13042 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13043 = cnt;
var inst_13044 = (0);
var state_13092__$1 = (function (){var statearr_13128 = state_13092;
(statearr_13128[(11)] = inst_13042);

(statearr_13128[(8)] = inst_13043);

(statearr_13128[(7)] = inst_13044);

return statearr_13128;
})();
var statearr_13129_13203 = state_13092__$1;
(statearr_13129_13203[(2)] = null);

(statearr_13129_13203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (11))){
var inst_13052 = (state_13092[(2)]);
var inst_13054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13092__$1 = (function (){var statearr_13131 = state_13092;
(statearr_13131[(12)] = inst_13052);

return statearr_13131;
})();
var statearr_13133_13205 = state_13092__$1;
(statearr_13133_13205[(2)] = inst_13054);

(statearr_13133_13205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (9))){
var inst_13044 = (state_13092[(7)]);
var _ = (function (){var statearr_13135 = state_13092;
(statearr_13135[(4)] = cljs.core.cons.call(null,(12),(state_13092[(4)])));

return statearr_13135;
})();
var inst_13060 = chs__$1.call(null,inst_13044);
var inst_13061 = done.call(null,inst_13044);
var inst_13062 = cljs.core.async.take_BANG_.call(null,inst_13060,inst_13061);
var ___$1 = (function (){var statearr_13136 = state_13092;
(statearr_13136[(4)] = cljs.core.rest.call(null,(state_13092[(4)])));

return statearr_13136;
})();
var state_13092__$1 = state_13092;
var statearr_13138_13208 = state_13092__$1;
(statearr_13138_13208[(2)] = inst_13062);

(statearr_13138_13208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (5))){
var inst_13074 = (state_13092[(2)]);
var state_13092__$1 = (function (){var statearr_13139 = state_13092;
(statearr_13139[(13)] = inst_13074);

return statearr_13139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13092__$1,(13),dchan);
} else {
if((state_val_13093 === (14))){
var inst_13079 = cljs.core.async.close_BANG_.call(null,out);
var state_13092__$1 = state_13092;
var statearr_13140_13212 = state_13092__$1;
(statearr_13140_13212[(2)] = inst_13079);

(statearr_13140_13212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (16))){
var inst_13087 = (state_13092[(2)]);
var state_13092__$1 = state_13092;
var statearr_13141_13214 = state_13092__$1;
(statearr_13141_13214[(2)] = inst_13087);

(statearr_13141_13214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (10))){
var inst_13044 = (state_13092[(7)]);
var inst_13065 = (state_13092[(2)]);
var inst_13067 = (inst_13044 + (1));
var inst_13044__$1 = inst_13067;
var state_13092__$1 = (function (){var statearr_13143 = state_13092;
(statearr_13143[(14)] = inst_13065);

(statearr_13143[(7)] = inst_13044__$1);

return statearr_13143;
})();
var statearr_13144_13215 = state_13092__$1;
(statearr_13144_13215[(2)] = null);

(statearr_13144_13215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13093 === (8))){
var inst_13071 = (state_13092[(2)]);
var state_13092__$1 = state_13092;
var statearr_13145_13216 = state_13092__$1;
(statearr_13145_13216[(2)] = inst_13071);

(statearr_13145_13216[(1)] = (5));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13146[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13146[(1)] = (1));

return statearr_13146;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13092){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13147){var ex__11731__auto__ = e13147;
var statearr_13148_13217 = state_13092;
(statearr_13148_13217[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13092[(4)]))){
var statearr_13149_13219 = state_13092;
(statearr_13149_13219[(1)] = cljs.core.first.call(null,(state_13092[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13221 = state_13092;
state_13092 = G__13221;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13150 = f__11833__auto__.call(null);
(statearr_13150[(6)] = c__11832__auto___13155);

return statearr_13150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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
var G__13154 = arguments.length;
switch (G__13154) {
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
var c__11832__auto___13232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13193){
var state_val_13195 = (state_13193[(1)]);
if((state_val_13195 === (7))){
var inst_13168 = (state_13193[(7)]);
var inst_13169 = (state_13193[(8)]);
var inst_13168__$1 = (state_13193[(2)]);
var inst_13169__$1 = cljs.core.nth.call(null,inst_13168__$1,(0),null);
var inst_13170 = cljs.core.nth.call(null,inst_13168__$1,(1),null);
var inst_13172 = (inst_13169__$1 == null);
var state_13193__$1 = (function (){var statearr_13197 = state_13193;
(statearr_13197[(7)] = inst_13168__$1);

(statearr_13197[(8)] = inst_13169__$1);

(statearr_13197[(9)] = inst_13170);

return statearr_13197;
})();
if(cljs.core.truth_(inst_13172)){
var statearr_13200_13242 = state_13193__$1;
(statearr_13200_13242[(1)] = (8));

} else {
var statearr_13201_13245 = state_13193__$1;
(statearr_13201_13245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (1))){
var inst_13156 = cljs.core.vec.call(null,chs);
var inst_13157 = inst_13156;
var state_13193__$1 = (function (){var statearr_13202 = state_13193;
(statearr_13202[(10)] = inst_13157);

return statearr_13202;
})();
var statearr_13204_13260 = state_13193__$1;
(statearr_13204_13260[(2)] = null);

(statearr_13204_13260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (4))){
var inst_13157 = (state_13193[(10)]);
var state_13193__$1 = state_13193;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13193__$1,(7),inst_13157);
} else {
if((state_val_13195 === (6))){
var inst_13187 = (state_13193[(2)]);
var state_13193__$1 = state_13193;
var statearr_13206_13261 = state_13193__$1;
(statearr_13206_13261[(2)] = inst_13187);

(statearr_13206_13261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (3))){
var inst_13189 = (state_13193[(2)]);
var state_13193__$1 = state_13193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13193__$1,inst_13189);
} else {
if((state_val_13195 === (2))){
var inst_13157 = (state_13193[(10)]);
var inst_13161 = cljs.core.count.call(null,inst_13157);
var inst_13162 = (inst_13161 > (0));
var state_13193__$1 = state_13193;
if(cljs.core.truth_(inst_13162)){
var statearr_13209_13265 = state_13193__$1;
(statearr_13209_13265[(1)] = (4));

} else {
var statearr_13210_13267 = state_13193__$1;
(statearr_13210_13267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (11))){
var inst_13157 = (state_13193[(10)]);
var inst_13180 = (state_13193[(2)]);
var tmp13207 = inst_13157;
var inst_13157__$1 = tmp13207;
var state_13193__$1 = (function (){var statearr_13211 = state_13193;
(statearr_13211[(11)] = inst_13180);

(statearr_13211[(10)] = inst_13157__$1);

return statearr_13211;
})();
var statearr_13213_13269 = state_13193__$1;
(statearr_13213_13269[(2)] = null);

(statearr_13213_13269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (9))){
var inst_13169 = (state_13193[(8)]);
var state_13193__$1 = state_13193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13193__$1,(11),out,inst_13169);
} else {
if((state_val_13195 === (5))){
var inst_13185 = cljs.core.async.close_BANG_.call(null,out);
var state_13193__$1 = state_13193;
var statearr_13218_13271 = state_13193__$1;
(statearr_13218_13271[(2)] = inst_13185);

(statearr_13218_13271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (10))){
var inst_13183 = (state_13193[(2)]);
var state_13193__$1 = state_13193;
var statearr_13220_13273 = state_13193__$1;
(statearr_13220_13273[(2)] = inst_13183);

(statearr_13220_13273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (8))){
var inst_13157 = (state_13193[(10)]);
var inst_13168 = (state_13193[(7)]);
var inst_13169 = (state_13193[(8)]);
var inst_13170 = (state_13193[(9)]);
var inst_13175 = (function (){var cs = inst_13157;
var vec__13164 = inst_13168;
var v = inst_13169;
var c = inst_13170;
return (function (p1__13152_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13152_SHARP_);
});
})();
var inst_13176 = cljs.core.filterv.call(null,inst_13175,inst_13157);
var inst_13157__$1 = inst_13176;
var state_13193__$1 = (function (){var statearr_13222 = state_13193;
(statearr_13222[(10)] = inst_13157__$1);

return statearr_13222;
})();
var statearr_13223_13278 = state_13193__$1;
(statearr_13223_13278[(2)] = null);

(statearr_13223_13278[(1)] = (2));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13224[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13224[(1)] = (1));

return statearr_13224;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13193){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13225){var ex__11731__auto__ = e13225;
var statearr_13226_13282 = state_13193;
(statearr_13226_13282[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13193[(4)]))){
var statearr_13227_13283 = state_13193;
(statearr_13227_13283[(1)] = cljs.core.first.call(null,(state_13193[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13285 = state_13193;
state_13193 = G__13285;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13228 = f__11833__auto__.call(null);
(statearr_13228[(6)] = c__11832__auto___13232);

return statearr_13228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
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
var G__13231 = arguments.length;
switch (G__13231) {
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
var c__11832__auto___13295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13258){
var state_val_13259 = (state_13258[(1)]);
if((state_val_13259 === (7))){
var inst_13238 = (state_13258[(7)]);
var inst_13238__$1 = (state_13258[(2)]);
var inst_13239 = (inst_13238__$1 == null);
var inst_13240 = cljs.core.not.call(null,inst_13239);
var state_13258__$1 = (function (){var statearr_13262 = state_13258;
(statearr_13262[(7)] = inst_13238__$1);

return statearr_13262;
})();
if(inst_13240){
var statearr_13263_13296 = state_13258__$1;
(statearr_13263_13296[(1)] = (8));

} else {
var statearr_13264_13297 = state_13258__$1;
(statearr_13264_13297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (1))){
var inst_13233 = (0);
var state_13258__$1 = (function (){var statearr_13266 = state_13258;
(statearr_13266[(8)] = inst_13233);

return statearr_13266;
})();
var statearr_13268_13298 = state_13258__$1;
(statearr_13268_13298[(2)] = null);

(statearr_13268_13298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (4))){
var state_13258__$1 = state_13258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13258__$1,(7),ch);
} else {
if((state_val_13259 === (6))){
var inst_13253 = (state_13258[(2)]);
var state_13258__$1 = state_13258;
var statearr_13270_13299 = state_13258__$1;
(statearr_13270_13299[(2)] = inst_13253);

(statearr_13270_13299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (3))){
var inst_13255 = (state_13258[(2)]);
var inst_13256 = cljs.core.async.close_BANG_.call(null,out);
var state_13258__$1 = (function (){var statearr_13272 = state_13258;
(statearr_13272[(9)] = inst_13255);

return statearr_13272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13258__$1,inst_13256);
} else {
if((state_val_13259 === (2))){
var inst_13233 = (state_13258[(8)]);
var inst_13235 = (inst_13233 < n);
var state_13258__$1 = state_13258;
if(cljs.core.truth_(inst_13235)){
var statearr_13274_13300 = state_13258__$1;
(statearr_13274_13300[(1)] = (4));

} else {
var statearr_13275_13301 = state_13258__$1;
(statearr_13275_13301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (11))){
var inst_13233 = (state_13258[(8)]);
var inst_13244 = (state_13258[(2)]);
var inst_13246 = (inst_13233 + (1));
var inst_13233__$1 = inst_13246;
var state_13258__$1 = (function (){var statearr_13276 = state_13258;
(statearr_13276[(10)] = inst_13244);

(statearr_13276[(8)] = inst_13233__$1);

return statearr_13276;
})();
var statearr_13277_13302 = state_13258__$1;
(statearr_13277_13302[(2)] = null);

(statearr_13277_13302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (9))){
var state_13258__$1 = state_13258;
var statearr_13279_13303 = state_13258__$1;
(statearr_13279_13303[(2)] = null);

(statearr_13279_13303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (5))){
var state_13258__$1 = state_13258;
var statearr_13280_13307 = state_13258__$1;
(statearr_13280_13307[(2)] = null);

(statearr_13280_13307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (10))){
var inst_13250 = (state_13258[(2)]);
var state_13258__$1 = state_13258;
var statearr_13281_13308 = state_13258__$1;
(statearr_13281_13308[(2)] = inst_13250);

(statearr_13281_13308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (8))){
var inst_13238 = (state_13258[(7)]);
var state_13258__$1 = state_13258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13258__$1,(11),out,inst_13238);
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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13284[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13284[(1)] = (1));

return statearr_13284;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13258){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13286){var ex__11731__auto__ = e13286;
var statearr_13287_13309 = state_13258;
(statearr_13287_13309[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13258[(4)]))){
var statearr_13288_13310 = state_13258;
(statearr_13288_13310[(1)] = cljs.core.first.call(null,(state_13258[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13311 = state_13258;
state_13258 = G__13311;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13289 = f__11833__auto__.call(null);
(statearr_13289[(6)] = c__11832__auto___13295);

return statearr_13289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13292 = (function (f,ch,meta13293){
this.f = f;
this.ch = ch;
this.meta13293 = meta13293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13294,meta13293__$1){
var self__ = this;
var _13294__$1 = this;
return (new cljs.core.async.t_cljs$core$async13292(self__.f,self__.ch,meta13293__$1));
}));

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13294){
var self__ = this;
var _13294__$1 = this;
return self__.meta13293;
}));

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13304 = (function (f,ch,meta13293,_,fn1,meta13305){
this.f = f;
this.ch = ch;
this.meta13293 = meta13293;
this._ = _;
this.fn1 = fn1;
this.meta13305 = meta13305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13306,meta13305__$1){
var self__ = this;
var _13306__$1 = this;
return (new cljs.core.async.t_cljs$core$async13304(self__.f,self__.ch,self__.meta13293,self__._,self__.fn1,meta13305__$1));
}));

(cljs.core.async.t_cljs$core$async13304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13306){
var self__ = this;
var _13306__$1 = this;
return self__.meta13305;
}));

(cljs.core.async.t_cljs$core$async13304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async13304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__13291_SHARP_){
return f1.call(null,(((p1__13291_SHARP_ == null))?null:self__.f.call(null,p1__13291_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async13304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13293","meta13293",-1875214390,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13292","cljs.core.async/t_cljs$core$async13292",-1899352518,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13305","meta13305",-134245444,null)], null);
}));

(cljs.core.async.t_cljs$core$async13304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13304");

(cljs.core.async.t_cljs$core$async13304.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13304.
 */
cljs.core.async.__GT_t_cljs$core$async13304 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13304(f__$1,ch__$1,meta13293__$1,___$2,fn1__$1,meta13305){
return (new cljs.core.async.t_cljs$core$async13304(f__$1,ch__$1,meta13293__$1,___$2,fn1__$1,meta13305));
});

}

return (new cljs.core.async.t_cljs$core$async13304(self__.f,self__.ch,self__.meta13293,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async13292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13293","meta13293",-1875214390,null)], null);
}));

(cljs.core.async.t_cljs$core$async13292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13292");

(cljs.core.async.t_cljs$core$async13292.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13292.
 */
cljs.core.async.__GT_t_cljs$core$async13292 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13292(f__$1,ch__$1,meta13293){
return (new cljs.core.async.t_cljs$core$async13292(f__$1,ch__$1,meta13293));
});

}

return (new cljs.core.async.t_cljs$core$async13292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13312 = (function (f,ch,meta13313){
this.f = f;
this.ch = ch;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13314,meta13313__$1){
var self__ = this;
var _13314__$1 = this;
return (new cljs.core.async.t_cljs$core$async13312(self__.f,self__.ch,meta13313__$1));
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13314){
var self__ = this;
var _13314__$1 = this;
return self__.meta13313;
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async13312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13313","meta13313",-1639726482,null)], null);
}));

(cljs.core.async.t_cljs$core$async13312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13312");

(cljs.core.async.t_cljs$core$async13312.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13312.
 */
cljs.core.async.__GT_t_cljs$core$async13312 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13312(f__$1,ch__$1,meta13313){
return (new cljs.core.async.t_cljs$core$async13312(f__$1,ch__$1,meta13313));
});

}

return (new cljs.core.async.t_cljs$core$async13312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13315 = (function (p,ch,meta13316){
this.p = p;
this.ch = ch;
this.meta13316 = meta13316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13317,meta13316__$1){
var self__ = this;
var _13317__$1 = this;
return (new cljs.core.async.t_cljs$core$async13315(self__.p,self__.ch,meta13316__$1));
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13317){
var self__ = this;
var _13317__$1 = this;
return self__.meta13316;
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13316","meta13316",299257274,null)], null);
}));

(cljs.core.async.t_cljs$core$async13315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13315");

(cljs.core.async.t_cljs$core$async13315.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13315.
 */
cljs.core.async.__GT_t_cljs$core$async13315 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13315(p__$1,ch__$1,meta13316){
return (new cljs.core.async.t_cljs$core$async13315(p__$1,ch__$1,meta13316));
});

}

return (new cljs.core.async.t_cljs$core$async13315(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13319 = arguments.length;
switch (G__13319) {
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
var c__11832__auto___13362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13340){
var state_val_13341 = (state_13340[(1)]);
if((state_val_13341 === (7))){
var inst_13336 = (state_13340[(2)]);
var state_13340__$1 = state_13340;
var statearr_13342_13363 = state_13340__$1;
(statearr_13342_13363[(2)] = inst_13336);

(statearr_13342_13363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (1))){
var state_13340__$1 = state_13340;
var statearr_13343_13364 = state_13340__$1;
(statearr_13343_13364[(2)] = null);

(statearr_13343_13364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (4))){
var inst_13322 = (state_13340[(7)]);
var inst_13322__$1 = (state_13340[(2)]);
var inst_13323 = (inst_13322__$1 == null);
var state_13340__$1 = (function (){var statearr_13344 = state_13340;
(statearr_13344[(7)] = inst_13322__$1);

return statearr_13344;
})();
if(cljs.core.truth_(inst_13323)){
var statearr_13345_13365 = state_13340__$1;
(statearr_13345_13365[(1)] = (5));

} else {
var statearr_13346_13366 = state_13340__$1;
(statearr_13346_13366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (6))){
var inst_13322 = (state_13340[(7)]);
var inst_13327 = p.call(null,inst_13322);
var state_13340__$1 = state_13340;
if(cljs.core.truth_(inst_13327)){
var statearr_13347_13368 = state_13340__$1;
(statearr_13347_13368[(1)] = (8));

} else {
var statearr_13348_13371 = state_13340__$1;
(statearr_13348_13371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (3))){
var inst_13338 = (state_13340[(2)]);
var state_13340__$1 = state_13340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13340__$1,inst_13338);
} else {
if((state_val_13341 === (2))){
var state_13340__$1 = state_13340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13340__$1,(4),ch);
} else {
if((state_val_13341 === (11))){
var inst_13330 = (state_13340[(2)]);
var state_13340__$1 = state_13340;
var statearr_13349_13390 = state_13340__$1;
(statearr_13349_13390[(2)] = inst_13330);

(statearr_13349_13390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (9))){
var state_13340__$1 = state_13340;
var statearr_13350_13394 = state_13340__$1;
(statearr_13350_13394[(2)] = null);

(statearr_13350_13394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (5))){
var inst_13325 = cljs.core.async.close_BANG_.call(null,out);
var state_13340__$1 = state_13340;
var statearr_13351_13400 = state_13340__$1;
(statearr_13351_13400[(2)] = inst_13325);

(statearr_13351_13400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (10))){
var inst_13333 = (state_13340[(2)]);
var state_13340__$1 = (function (){var statearr_13352 = state_13340;
(statearr_13352[(8)] = inst_13333);

return statearr_13352;
})();
var statearr_13353_13404 = state_13340__$1;
(statearr_13353_13404[(2)] = null);

(statearr_13353_13404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13341 === (8))){
var inst_13322 = (state_13340[(7)]);
var state_13340__$1 = state_13340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13340__$1,(11),out,inst_13322);
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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13354 = [null,null,null,null,null,null,null,null,null];
(statearr_13354[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13354[(1)] = (1));

return statearr_13354;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13340){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13355){var ex__11731__auto__ = e13355;
var statearr_13356_13436 = state_13340;
(statearr_13356_13436[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13340[(4)]))){
var statearr_13357_13437 = state_13340;
(statearr_13357_13437[(1)] = cljs.core.first.call(null,(state_13340[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13438 = state_13340;
state_13340 = G__13438;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13358 = f__11833__auto__.call(null);
(statearr_13358[(6)] = c__11832__auto___13362);

return statearr_13358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13361 = arguments.length;
switch (G__13361) {
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
var c__11832__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13434){
var state_val_13435 = (state_13434[(1)]);
if((state_val_13435 === (7))){
var inst_13430 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13439_13503 = state_13434__$1;
(statearr_13439_13503[(2)] = inst_13430);

(statearr_13439_13503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (20))){
var inst_13398 = (state_13434[(7)]);
var inst_13411 = (state_13434[(2)]);
var inst_13412 = cljs.core.next.call(null,inst_13398);
var inst_13382 = inst_13412;
var inst_13383 = null;
var inst_13384 = (0);
var inst_13385 = (0);
var state_13434__$1 = (function (){var statearr_13441 = state_13434;
(statearr_13441[(8)] = inst_13411);

(statearr_13441[(9)] = inst_13382);

(statearr_13441[(10)] = inst_13383);

(statearr_13441[(11)] = inst_13384);

(statearr_13441[(12)] = inst_13385);

return statearr_13441;
})();
var statearr_13442_13504 = state_13434__$1;
(statearr_13442_13504[(2)] = null);

(statearr_13442_13504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (1))){
var state_13434__$1 = state_13434;
var statearr_13443_13505 = state_13434__$1;
(statearr_13443_13505[(2)] = null);

(statearr_13443_13505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (4))){
var inst_13370 = (state_13434[(13)]);
var inst_13370__$1 = (state_13434[(2)]);
var inst_13372 = (inst_13370__$1 == null);
var state_13434__$1 = (function (){var statearr_13445 = state_13434;
(statearr_13445[(13)] = inst_13370__$1);

return statearr_13445;
})();
if(cljs.core.truth_(inst_13372)){
var statearr_13446_13506 = state_13434__$1;
(statearr_13446_13506[(1)] = (5));

} else {
var statearr_13448_13507 = state_13434__$1;
(statearr_13448_13507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (15))){
var state_13434__$1 = state_13434;
var statearr_13452_13509 = state_13434__$1;
(statearr_13452_13509[(2)] = null);

(statearr_13452_13509[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (21))){
var state_13434__$1 = state_13434;
var statearr_13454_13511 = state_13434__$1;
(statearr_13454_13511[(2)] = null);

(statearr_13454_13511[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (13))){
var inst_13385 = (state_13434[(12)]);
var inst_13382 = (state_13434[(9)]);
var inst_13383 = (state_13434[(10)]);
var inst_13384 = (state_13434[(11)]);
var inst_13393 = (state_13434[(2)]);
var inst_13395 = (inst_13385 + (1));
var tmp13449 = inst_13384;
var tmp13450 = inst_13382;
var tmp13451 = inst_13383;
var inst_13382__$1 = tmp13450;
var inst_13383__$1 = tmp13451;
var inst_13384__$1 = tmp13449;
var inst_13385__$1 = inst_13395;
var state_13434__$1 = (function (){var statearr_13455 = state_13434;
(statearr_13455[(14)] = inst_13393);

(statearr_13455[(9)] = inst_13382__$1);

(statearr_13455[(10)] = inst_13383__$1);

(statearr_13455[(11)] = inst_13384__$1);

(statearr_13455[(12)] = inst_13385__$1);

return statearr_13455;
})();
var statearr_13456_13512 = state_13434__$1;
(statearr_13456_13512[(2)] = null);

(statearr_13456_13512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (22))){
var state_13434__$1 = state_13434;
var statearr_13461_13513 = state_13434__$1;
(statearr_13461_13513[(2)] = null);

(statearr_13461_13513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (6))){
var inst_13370 = (state_13434[(13)]);
var inst_13380 = f.call(null,inst_13370);
var inst_13381 = cljs.core.seq.call(null,inst_13380);
var inst_13382 = inst_13381;
var inst_13383 = null;
var inst_13384 = (0);
var inst_13385 = (0);
var state_13434__$1 = (function (){var statearr_13463 = state_13434;
(statearr_13463[(9)] = inst_13382);

(statearr_13463[(10)] = inst_13383);

(statearr_13463[(11)] = inst_13384);

(statearr_13463[(12)] = inst_13385);

return statearr_13463;
})();
var statearr_13464_13516 = state_13434__$1;
(statearr_13464_13516[(2)] = null);

(statearr_13464_13516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (17))){
var inst_13398 = (state_13434[(7)]);
var inst_13403 = cljs.core.chunk_first.call(null,inst_13398);
var inst_13405 = cljs.core.chunk_rest.call(null,inst_13398);
var inst_13406 = cljs.core.count.call(null,inst_13403);
var inst_13382 = inst_13405;
var inst_13383 = inst_13403;
var inst_13384 = inst_13406;
var inst_13385 = (0);
var state_13434__$1 = (function (){var statearr_13468 = state_13434;
(statearr_13468[(9)] = inst_13382);

(statearr_13468[(10)] = inst_13383);

(statearr_13468[(11)] = inst_13384);

(statearr_13468[(12)] = inst_13385);

return statearr_13468;
})();
var statearr_13469_13517 = state_13434__$1;
(statearr_13469_13517[(2)] = null);

(statearr_13469_13517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (3))){
var inst_13432 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13434__$1,inst_13432);
} else {
if((state_val_13435 === (12))){
var inst_13420 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13471_13518 = state_13434__$1;
(statearr_13471_13518[(2)] = inst_13420);

(statearr_13471_13518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (2))){
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13434__$1,(4),in$);
} else {
if((state_val_13435 === (23))){
var inst_13428 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13472_13519 = state_13434__$1;
(statearr_13472_13519[(2)] = inst_13428);

(statearr_13472_13519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (19))){
var inst_13415 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13473_13523 = state_13434__$1;
(statearr_13473_13523[(2)] = inst_13415);

(statearr_13473_13523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (11))){
var inst_13382 = (state_13434[(9)]);
var inst_13398 = (state_13434[(7)]);
var inst_13398__$1 = cljs.core.seq.call(null,inst_13382);
var state_13434__$1 = (function (){var statearr_13479 = state_13434;
(statearr_13479[(7)] = inst_13398__$1);

return statearr_13479;
})();
if(inst_13398__$1){
var statearr_13480_13542 = state_13434__$1;
(statearr_13480_13542[(1)] = (14));

} else {
var statearr_13481_13545 = state_13434__$1;
(statearr_13481_13545[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (9))){
var inst_13422 = (state_13434[(2)]);
var inst_13423 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13434__$1 = (function (){var statearr_13483 = state_13434;
(statearr_13483[(15)] = inst_13422);

return statearr_13483;
})();
if(cljs.core.truth_(inst_13423)){
var statearr_13484_13548 = state_13434__$1;
(statearr_13484_13548[(1)] = (21));

} else {
var statearr_13485_13549 = state_13434__$1;
(statearr_13485_13549[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (5))){
var inst_13374 = cljs.core.async.close_BANG_.call(null,out);
var state_13434__$1 = state_13434;
var statearr_13486_13551 = state_13434__$1;
(statearr_13486_13551[(2)] = inst_13374);

(statearr_13486_13551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (14))){
var inst_13398 = (state_13434[(7)]);
var inst_13401 = cljs.core.chunked_seq_QMARK_.call(null,inst_13398);
var state_13434__$1 = state_13434;
if(inst_13401){
var statearr_13487_13554 = state_13434__$1;
(statearr_13487_13554[(1)] = (17));

} else {
var statearr_13488_13555 = state_13434__$1;
(statearr_13488_13555[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (16))){
var inst_13418 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13489_13556 = state_13434__$1;
(statearr_13489_13556[(2)] = inst_13418);

(statearr_13489_13556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (10))){
var inst_13383 = (state_13434[(10)]);
var inst_13385 = (state_13434[(12)]);
var inst_13391 = cljs.core._nth.call(null,inst_13383,inst_13385);
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13434__$1,(13),out,inst_13391);
} else {
if((state_val_13435 === (18))){
var inst_13398 = (state_13434[(7)]);
var inst_13409 = cljs.core.first.call(null,inst_13398);
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13434__$1,(20),out,inst_13409);
} else {
if((state_val_13435 === (8))){
var inst_13385 = (state_13434[(12)]);
var inst_13384 = (state_13434[(11)]);
var inst_13387 = (inst_13385 < inst_13384);
var inst_13388 = inst_13387;
var state_13434__$1 = state_13434;
if(cljs.core.truth_(inst_13388)){
var statearr_13490_13562 = state_13434__$1;
(statearr_13490_13562[(1)] = (10));

} else {
var statearr_13491_13563 = state_13434__$1;
(statearr_13491_13563[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11728__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11728__auto____0 = (function (){
var statearr_13492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13492[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11728__auto__);

(statearr_13492[(1)] = (1));

return statearr_13492;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11728__auto____1 = (function (state_13434){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13493){var ex__11731__auto__ = e13493;
var statearr_13494_13567 = state_13434;
(statearr_13494_13567[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13434[(4)]))){
var statearr_13495_13568 = state_13434;
(statearr_13495_13568[(1)] = cljs.core.first.call(null,(state_13434[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13571 = state_13434;
state_13434 = G__13571;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11728__auto__ = function(state_13434){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11728__auto____1.call(this,state_13434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11728__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11728__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13499 = f__11833__auto__.call(null);
(statearr_13499[(6)] = c__11832__auto__);

return statearr_13499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));

return c__11832__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13502 = arguments.length;
switch (G__13502) {
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
var G__13510 = arguments.length;
switch (G__13510) {
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
var G__13515 = arguments.length;
switch (G__13515) {
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
var c__11832__auto___13585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13546){
var state_val_13547 = (state_13546[(1)]);
if((state_val_13547 === (7))){
var inst_13539 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13550_13586 = state_13546__$1;
(statearr_13550_13586[(2)] = inst_13539);

(statearr_13550_13586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (1))){
var inst_13520 = null;
var state_13546__$1 = (function (){var statearr_13552 = state_13546;
(statearr_13552[(7)] = inst_13520);

return statearr_13552;
})();
var statearr_13553_13587 = state_13546__$1;
(statearr_13553_13587[(2)] = null);

(statearr_13553_13587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (4))){
var inst_13524 = (state_13546[(8)]);
var inst_13524__$1 = (state_13546[(2)]);
var inst_13525 = (inst_13524__$1 == null);
var inst_13526 = cljs.core.not.call(null,inst_13525);
var state_13546__$1 = (function (){var statearr_13557 = state_13546;
(statearr_13557[(8)] = inst_13524__$1);

return statearr_13557;
})();
if(inst_13526){
var statearr_13558_13599 = state_13546__$1;
(statearr_13558_13599[(1)] = (5));

} else {
var statearr_13559_13603 = state_13546__$1;
(statearr_13559_13603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (6))){
var state_13546__$1 = state_13546;
var statearr_13560_13613 = state_13546__$1;
(statearr_13560_13613[(2)] = null);

(statearr_13560_13613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (3))){
var inst_13541 = (state_13546[(2)]);
var inst_13543 = cljs.core.async.close_BANG_.call(null,out);
var state_13546__$1 = (function (){var statearr_13561 = state_13546;
(statearr_13561[(9)] = inst_13541);

return statearr_13561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13546__$1,inst_13543);
} else {
if((state_val_13547 === (2))){
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13546__$1,(4),ch);
} else {
if((state_val_13547 === (11))){
var inst_13524 = (state_13546[(8)]);
var inst_13533 = (state_13546[(2)]);
var inst_13520 = inst_13524;
var state_13546__$1 = (function (){var statearr_13564 = state_13546;
(statearr_13564[(10)] = inst_13533);

(statearr_13564[(7)] = inst_13520);

return statearr_13564;
})();
var statearr_13565_13630 = state_13546__$1;
(statearr_13565_13630[(2)] = null);

(statearr_13565_13630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (9))){
var inst_13524 = (state_13546[(8)]);
var state_13546__$1 = state_13546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13546__$1,(11),out,inst_13524);
} else {
if((state_val_13547 === (5))){
var inst_13524 = (state_13546[(8)]);
var inst_13520 = (state_13546[(7)]);
var inst_13528 = cljs.core._EQ_.call(null,inst_13524,inst_13520);
var state_13546__$1 = state_13546;
if(inst_13528){
var statearr_13569_13633 = state_13546__$1;
(statearr_13569_13633[(1)] = (8));

} else {
var statearr_13570_13635 = state_13546__$1;
(statearr_13570_13635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (10))){
var inst_13536 = (state_13546[(2)]);
var state_13546__$1 = state_13546;
var statearr_13572_13636 = state_13546__$1;
(statearr_13572_13636[(2)] = inst_13536);

(statearr_13572_13636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13547 === (8))){
var inst_13520 = (state_13546[(7)]);
var tmp13566 = inst_13520;
var inst_13520__$1 = tmp13566;
var state_13546__$1 = (function (){var statearr_13573 = state_13546;
(statearr_13573[(7)] = inst_13520__$1);

return statearr_13573;
})();
var statearr_13574_13637 = state_13546__$1;
(statearr_13574_13637[(2)] = null);

(statearr_13574_13637[(1)] = (2));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13576[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13576[(1)] = (1));

return statearr_13576;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13546){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13577){var ex__11731__auto__ = e13577;
var statearr_13579_13641 = state_13546;
(statearr_13579_13641[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13546[(4)]))){
var statearr_13580_13643 = state_13546;
(statearr_13580_13643[(1)] = cljs.core.first.call(null,(state_13546[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13645 = state_13546;
state_13546 = G__13645;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13581 = f__11833__auto__.call(null);
(statearr_13581[(6)] = c__11832__auto___13585);

return statearr_13581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13584 = arguments.length;
switch (G__13584) {
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
var c__11832__auto___13667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13628){
var state_val_13629 = (state_13628[(1)]);
if((state_val_13629 === (7))){
var inst_13624 = (state_13628[(2)]);
var state_13628__$1 = state_13628;
var statearr_13631_13668 = state_13628__$1;
(statearr_13631_13668[(2)] = inst_13624);

(statearr_13631_13668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (1))){
var inst_13588 = (new Array(n));
var inst_13589 = inst_13588;
var inst_13590 = (0);
var state_13628__$1 = (function (){var statearr_13632 = state_13628;
(statearr_13632[(7)] = inst_13589);

(statearr_13632[(8)] = inst_13590);

return statearr_13632;
})();
var statearr_13634_13669 = state_13628__$1;
(statearr_13634_13669[(2)] = null);

(statearr_13634_13669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (4))){
var inst_13593 = (state_13628[(9)]);
var inst_13593__$1 = (state_13628[(2)]);
var inst_13594 = (inst_13593__$1 == null);
var inst_13595 = cljs.core.not.call(null,inst_13594);
var state_13628__$1 = (function (){var statearr_13638 = state_13628;
(statearr_13638[(9)] = inst_13593__$1);

return statearr_13638;
})();
if(inst_13595){
var statearr_13639_13670 = state_13628__$1;
(statearr_13639_13670[(1)] = (5));

} else {
var statearr_13640_13672 = state_13628__$1;
(statearr_13640_13672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (15))){
var inst_13618 = (state_13628[(2)]);
var state_13628__$1 = state_13628;
var statearr_13642_13678 = state_13628__$1;
(statearr_13642_13678[(2)] = inst_13618);

(statearr_13642_13678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (13))){
var state_13628__$1 = state_13628;
var statearr_13644_13684 = state_13628__$1;
(statearr_13644_13684[(2)] = null);

(statearr_13644_13684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (6))){
var inst_13590 = (state_13628[(8)]);
var inst_13614 = (inst_13590 > (0));
var state_13628__$1 = state_13628;
if(cljs.core.truth_(inst_13614)){
var statearr_13646_13697 = state_13628__$1;
(statearr_13646_13697[(1)] = (12));

} else {
var statearr_13647_13700 = state_13628__$1;
(statearr_13647_13700[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (3))){
var inst_13626 = (state_13628[(2)]);
var state_13628__$1 = state_13628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13628__$1,inst_13626);
} else {
if((state_val_13629 === (12))){
var inst_13589 = (state_13628[(7)]);
var inst_13616 = cljs.core.vec.call(null,inst_13589);
var state_13628__$1 = state_13628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13628__$1,(15),out,inst_13616);
} else {
if((state_val_13629 === (2))){
var state_13628__$1 = state_13628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13628__$1,(4),ch);
} else {
if((state_val_13629 === (11))){
var inst_13607 = (state_13628[(2)]);
var inst_13608 = (new Array(n));
var inst_13589 = inst_13608;
var inst_13590 = (0);
var state_13628__$1 = (function (){var statearr_13648 = state_13628;
(statearr_13648[(10)] = inst_13607);

(statearr_13648[(7)] = inst_13589);

(statearr_13648[(8)] = inst_13590);

return statearr_13648;
})();
var statearr_13649_13722 = state_13628__$1;
(statearr_13649_13722[(2)] = null);

(statearr_13649_13722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (9))){
var inst_13589 = (state_13628[(7)]);
var inst_13605 = cljs.core.vec.call(null,inst_13589);
var state_13628__$1 = state_13628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13628__$1,(11),out,inst_13605);
} else {
if((state_val_13629 === (5))){
var inst_13589 = (state_13628[(7)]);
var inst_13590 = (state_13628[(8)]);
var inst_13593 = (state_13628[(9)]);
var inst_13598 = (state_13628[(11)]);
var inst_13597 = (inst_13589[inst_13590] = inst_13593);
var inst_13598__$1 = (inst_13590 + (1));
var inst_13600 = (inst_13598__$1 < n);
var state_13628__$1 = (function (){var statearr_13650 = state_13628;
(statearr_13650[(12)] = inst_13597);

(statearr_13650[(11)] = inst_13598__$1);

return statearr_13650;
})();
if(cljs.core.truth_(inst_13600)){
var statearr_13651_13726 = state_13628__$1;
(statearr_13651_13726[(1)] = (8));

} else {
var statearr_13652_13727 = state_13628__$1;
(statearr_13652_13727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (14))){
var inst_13621 = (state_13628[(2)]);
var inst_13622 = cljs.core.async.close_BANG_.call(null,out);
var state_13628__$1 = (function (){var statearr_13654 = state_13628;
(statearr_13654[(13)] = inst_13621);

return statearr_13654;
})();
var statearr_13655_13730 = state_13628__$1;
(statearr_13655_13730[(2)] = inst_13622);

(statearr_13655_13730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (10))){
var inst_13611 = (state_13628[(2)]);
var state_13628__$1 = state_13628;
var statearr_13656_13732 = state_13628__$1;
(statearr_13656_13732[(2)] = inst_13611);

(statearr_13656_13732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13629 === (8))){
var inst_13589 = (state_13628[(7)]);
var inst_13598 = (state_13628[(11)]);
var tmp13653 = inst_13589;
var inst_13589__$1 = tmp13653;
var inst_13590 = inst_13598;
var state_13628__$1 = (function (){var statearr_13657 = state_13628;
(statearr_13657[(7)] = inst_13589__$1);

(statearr_13657[(8)] = inst_13590);

return statearr_13657;
})();
var statearr_13658_13734 = state_13628__$1;
(statearr_13658_13734[(2)] = null);

(statearr_13658_13734[(1)] = (2));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13659[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13659[(1)] = (1));

return statearr_13659;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13628){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13660){var ex__11731__auto__ = e13660;
var statearr_13661_13739 = state_13628;
(statearr_13661_13739[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13628[(4)]))){
var statearr_13662_13740 = state_13628;
(statearr_13662_13740[(1)] = cljs.core.first.call(null,(state_13628[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13743 = state_13628;
state_13628 = G__13743;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13663 = f__11833__auto__.call(null);
(statearr_13663[(6)] = c__11832__auto___13667);

return statearr_13663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13666 = arguments.length;
switch (G__13666) {
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
var c__11832__auto___13774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11833__auto__ = (function (){var switch__11727__auto__ = (function (state_13720){
var state_val_13721 = (state_13720[(1)]);
if((state_val_13721 === (7))){
var inst_13716 = (state_13720[(2)]);
var state_13720__$1 = state_13720;
var statearr_13723_13775 = state_13720__$1;
(statearr_13723_13775[(2)] = inst_13716);

(statearr_13723_13775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (1))){
var inst_13671 = [];
var inst_13673 = inst_13671;
var inst_13674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13720__$1 = (function (){var statearr_13724 = state_13720;
(statearr_13724[(7)] = inst_13673);

(statearr_13724[(8)] = inst_13674);

return statearr_13724;
})();
var statearr_13725_13777 = state_13720__$1;
(statearr_13725_13777[(2)] = null);

(statearr_13725_13777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (4))){
var inst_13677 = (state_13720[(9)]);
var inst_13677__$1 = (state_13720[(2)]);
var inst_13679 = (inst_13677__$1 == null);
var inst_13680 = cljs.core.not.call(null,inst_13679);
var state_13720__$1 = (function (){var statearr_13728 = state_13720;
(statearr_13728[(9)] = inst_13677__$1);

return statearr_13728;
})();
if(inst_13680){
var statearr_13729_13778 = state_13720__$1;
(statearr_13729_13778[(1)] = (5));

} else {
var statearr_13731_13783 = state_13720__$1;
(statearr_13731_13783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (15))){
var inst_13673 = (state_13720[(7)]);
var inst_13708 = cljs.core.vec.call(null,inst_13673);
var state_13720__$1 = state_13720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13720__$1,(18),out,inst_13708);
} else {
if((state_val_13721 === (13))){
var inst_13703 = (state_13720[(2)]);
var state_13720__$1 = state_13720;
var statearr_13733_13784 = state_13720__$1;
(statearr_13733_13784[(2)] = inst_13703);

(statearr_13733_13784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (6))){
var inst_13673 = (state_13720[(7)]);
var inst_13705 = inst_13673.length;
var inst_13706 = (inst_13705 > (0));
var state_13720__$1 = state_13720;
if(cljs.core.truth_(inst_13706)){
var statearr_13735_13789 = state_13720__$1;
(statearr_13735_13789[(1)] = (15));

} else {
var statearr_13736_13790 = state_13720__$1;
(statearr_13736_13790[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (17))){
var inst_13713 = (state_13720[(2)]);
var inst_13714 = cljs.core.async.close_BANG_.call(null,out);
var state_13720__$1 = (function (){var statearr_13737 = state_13720;
(statearr_13737[(10)] = inst_13713);

return statearr_13737;
})();
var statearr_13738_13791 = state_13720__$1;
(statearr_13738_13791[(2)] = inst_13714);

(statearr_13738_13791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (3))){
var inst_13718 = (state_13720[(2)]);
var state_13720__$1 = state_13720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13720__$1,inst_13718);
} else {
if((state_val_13721 === (12))){
var inst_13673 = (state_13720[(7)]);
var inst_13694 = cljs.core.vec.call(null,inst_13673);
var state_13720__$1 = state_13720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13720__$1,(14),out,inst_13694);
} else {
if((state_val_13721 === (2))){
var state_13720__$1 = state_13720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13720__$1,(4),ch);
} else {
if((state_val_13721 === (11))){
var inst_13673 = (state_13720[(7)]);
var inst_13677 = (state_13720[(9)]);
var inst_13682 = (state_13720[(11)]);
var inst_13691 = inst_13673.push(inst_13677);
var tmp13742 = inst_13673;
var inst_13673__$1 = tmp13742;
var inst_13674 = inst_13682;
var state_13720__$1 = (function (){var statearr_13747 = state_13720;
(statearr_13747[(12)] = inst_13691);

(statearr_13747[(7)] = inst_13673__$1);

(statearr_13747[(8)] = inst_13674);

return statearr_13747;
})();
var statearr_13748_13794 = state_13720__$1;
(statearr_13748_13794[(2)] = null);

(statearr_13748_13794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (9))){
var inst_13674 = (state_13720[(8)]);
var inst_13687 = cljs.core.keyword_identical_QMARK_.call(null,inst_13674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13720__$1 = state_13720;
var statearr_13749_13795 = state_13720__$1;
(statearr_13749_13795[(2)] = inst_13687);

(statearr_13749_13795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (5))){
var inst_13677 = (state_13720[(9)]);
var inst_13682 = (state_13720[(11)]);
var inst_13674 = (state_13720[(8)]);
var inst_13683 = (state_13720[(13)]);
var inst_13682__$1 = f.call(null,inst_13677);
var inst_13683__$1 = cljs.core._EQ_.call(null,inst_13682__$1,inst_13674);
var state_13720__$1 = (function (){var statearr_13750 = state_13720;
(statearr_13750[(11)] = inst_13682__$1);

(statearr_13750[(13)] = inst_13683__$1);

return statearr_13750;
})();
if(inst_13683__$1){
var statearr_13751_13797 = state_13720__$1;
(statearr_13751_13797[(1)] = (8));

} else {
var statearr_13752_13798 = state_13720__$1;
(statearr_13752_13798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (14))){
var inst_13677 = (state_13720[(9)]);
var inst_13682 = (state_13720[(11)]);
var inst_13696 = (state_13720[(2)]);
var inst_13698 = [];
var inst_13699 = inst_13698.push(inst_13677);
var inst_13673 = inst_13698;
var inst_13674 = inst_13682;
var state_13720__$1 = (function (){var statearr_13753 = state_13720;
(statearr_13753[(14)] = inst_13696);

(statearr_13753[(15)] = inst_13699);

(statearr_13753[(7)] = inst_13673);

(statearr_13753[(8)] = inst_13674);

return statearr_13753;
})();
var statearr_13754_13801 = state_13720__$1;
(statearr_13754_13801[(2)] = null);

(statearr_13754_13801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (16))){
var state_13720__$1 = state_13720;
var statearr_13756_13802 = state_13720__$1;
(statearr_13756_13802[(2)] = null);

(statearr_13756_13802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (10))){
var inst_13689 = (state_13720[(2)]);
var state_13720__$1 = state_13720;
if(cljs.core.truth_(inst_13689)){
var statearr_13759_13803 = state_13720__$1;
(statearr_13759_13803[(1)] = (11));

} else {
var statearr_13760_13804 = state_13720__$1;
(statearr_13760_13804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (18))){
var inst_13710 = (state_13720[(2)]);
var state_13720__$1 = state_13720;
var statearr_13761_13805 = state_13720__$1;
(statearr_13761_13805[(2)] = inst_13710);

(statearr_13761_13805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13721 === (8))){
var inst_13683 = (state_13720[(13)]);
var state_13720__$1 = state_13720;
var statearr_13762_13806 = state_13720__$1;
(statearr_13762_13806[(2)] = inst_13683);

(statearr_13762_13806[(1)] = (10));


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
var cljs$core$async$state_machine__11728__auto__ = null;
var cljs$core$async$state_machine__11728__auto____0 = (function (){
var statearr_13765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13765[(0)] = cljs$core$async$state_machine__11728__auto__);

(statearr_13765[(1)] = (1));

return statearr_13765;
});
var cljs$core$async$state_machine__11728__auto____1 = (function (state_13720){
while(true){
var ret_value__11729__auto__ = (function (){try{while(true){
var result__11730__auto__ = switch__11727__auto__.call(null,state_13720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11730__auto__;
}
break;
}
}catch (e13766){var ex__11731__auto__ = e13766;
var statearr_13767_13807 = state_13720;
(statearr_13767_13807[(2)] = ex__11731__auto__);


if(cljs.core.seq.call(null,(state_13720[(4)]))){
var statearr_13768_13808 = state_13720;
(statearr_13768_13808[(1)] = cljs.core.first.call(null,(state_13720[(4)])));

} else {
throw ex__11731__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13809 = state_13720;
state_13720 = G__13809;
continue;
} else {
return ret_value__11729__auto__;
}
break;
}
});
cljs$core$async$state_machine__11728__auto__ = function(state_13720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11728__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11728__auto____1.call(this,state_13720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11728__auto____0;
cljs$core$async$state_machine__11728__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11728__auto____1;
return cljs$core$async$state_machine__11728__auto__;
})()
})();
var state__11834__auto__ = (function (){var statearr_13769 = f__11833__auto__.call(null);
(statearr_13769[(6)] = c__11832__auto___13774);

return statearr_13769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11834__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
