// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.corec');
goog.require('cljs.core');
goog.require('c3kit.apron.test_fabric');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.object');
goog.scope(function(){
c3kit.apron.corec.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Like for-all, but with map
 */
c3kit.apron.corec.map_all = (function c3kit$apron$corec$map_all(var_args){
var G__7833 = arguments.length;
switch (G__7833) {
case 2:
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___7838 = arguments.length;
var i__5750__auto___7839 = (0);
while(true){
if((i__5750__auto___7839 < len__5749__auto___7838)){
args_arr__5774__auto__.push((arguments[i__5750__auto___7839]));

var G__7840 = (i__5750__auto___7839 + (1));
i__5750__auto___7839 = G__7840;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.doall.call(null,cljs.core.map.call(null,f,coll));
}));

(c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.doall.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
}));

/** @this {Function} */
(c3kit.apron.corec.map_all.cljs$lang$applyTo = (function (seq7830){
var G__7831 = cljs.core.first.call(null,seq7830);
var seq7830__$1 = cljs.core.next.call(null,seq7830);
var G__7832 = cljs.core.first.call(null,seq7830__$1);
var seq7830__$2 = cljs.core.next.call(null,seq7830__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7831,G__7832,seq7830__$2);
}));

(c3kit.apron.corec.map_all.cljs$lang$maxFixedArity = (2));

/**
 * Creates a collection where each element is put into component syntax: [component-fn item]
 *    Each component is given a React key using (key-fn item).
 */
c3kit.apron.corec.map_component = (function c3kit$apron$corec$map_component(key_fn,component_fn,coll){
return c3kit.apron.corec.map_all.call(null,(function (x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_fn,x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key_fn.call(null,x)], null));
}),coll);
});
/**
 * Like for-all, but with map-indexed
 */
c3kit.apron.corec.map_all_indexed = (function c3kit$apron$corec$map_all_indexed(f,coll){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,f,coll));
});
/**
 * assoc for js objects
 */
c3kit.apron.corec.oset = (function c3kit$apron$corec$oset(o,k,v){
if((o == null)){
var G__7849 = cljs.core.name.call(null,k);
var obj7851 = ({});
(obj7851[G__7849] = v);

return obj7851;
} else {
c3kit.apron.corec.goog$module$goog$object.set.call(null,o,cljs.core.name.call(null,k),v);

return o;
}
});
c3kit.apron.corec.k_name = (function c3kit$apron$corec$k_name(k){
if(typeof k === 'number'){
return k;
} else {
return cljs.core.name.call(null,k);
}
});
c3kit.apron.corec.o_name = (function c3kit$apron$corec$o_name(obj){
if(cljs.core.vector_QMARK_.call(null,obj)){
return "vector";
} else {
if(cljs.core.list_QMARK_.call(null,obj)){
return "list";
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return "set";
} else {
if((obj instanceof cljs.core.Keyword)){
return "keyword";
} else {
return clojure.string.lower_case.call(null,c3kit.apron.corec.goog$module$goog$object.get.call(null,cljs.core.type.call(null,obj),"name"));

}
}
}
}
});
c3kit.apron.corec.maybe_type_error = (function c3kit$apron$corec$maybe_type_error(k,obj){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7858_SHARP_){
return p1__7858_SHARP_.call(null,obj);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_], null)))){
var type_name = c3kit.apron.corec.o_name.call(null,obj);
var k__$1 = c3kit.apron.corec.k_name.call(null,k);
throw (new TypeError(["Cannot create property '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"' on ",type_name," '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),"'"].join('')));
} else {
return null;
}
});
/**
 * assoc-in for js objects
 */
c3kit.apron.corec.oset_in = (function c3kit$apron$corec$oset_in(o,ks,v){
if(cljs.core.not.call(null,cljs.core.seq.call(null,ks))){
return o;
} else {
var o__$1 = (((o == null))?({}):o);
var o_7889__$2 = o__$1;
var G__7864_7890 = ks;
var vec__7865_7891 = G__7864_7890;
var seq__7866_7892 = cljs.core.seq.call(null,vec__7865_7891);
var first__7867_7893 = cljs.core.first.call(null,seq__7866_7892);
var seq__7866_7894__$1 = cljs.core.next.call(null,seq__7866_7892);
var k_7895 = first__7867_7893;
var ks_7896__$1 = seq__7866_7894__$1;
var o_7897__$3 = o_7889__$2;
var G__7864_7898__$1 = G__7864_7890;
while(true){
var o_7899__$4 = o_7897__$3;
var vec__7874_7900 = G__7864_7898__$1;
var seq__7875_7901 = cljs.core.seq.call(null,vec__7874_7900);
var first__7876_7902 = cljs.core.first.call(null,seq__7875_7901);
var seq__7875_7903__$1 = cljs.core.next.call(null,seq__7875_7901);
var k_7904__$1 = first__7876_7902;
var ks_7905__$2 = seq__7875_7903__$1;
var k_7907__$2 = c3kit.apron.corec.k_name.call(null,k_7904__$1);
if(cljs.core.seq.call(null,ks_7905__$2)){
var temp__5823__auto___7908 = c3kit.apron.corec.goog$module$goog$object.get.call(null,o_7899__$4,k_7907__$2);
if(cljs.core.truth_(temp__5823__auto___7908)){
var o_next_7909 = temp__5823__auto___7908;
var or__5025__auto___7910 = c3kit.apron.corec.maybe_type_error.call(null,cljs.core.first.call(null,ks_7905__$2),o_next_7909);
if(cljs.core.truth_(or__5025__auto___7910)){
} else {
var G__7911 = o_next_7909;
var G__7912 = ks_7905__$2;
o_7897__$3 = G__7911;
G__7864_7898__$1 = G__7912;
continue;
}
} else {
var o_next_7913 = ({});
c3kit.apron.corec.goog$module$goog$object.set.call(null,o_7899__$4,k_7907__$2,o_next_7913);

var G__7914 = o_next_7913;
var G__7915 = ks_7905__$2;
o_7897__$3 = G__7914;
G__7864_7898__$1 = G__7915;
continue;
}
} else {
c3kit.apron.corec.goog$module$goog$object.set.call(null,o_7899__$4,k_7907__$2,v);
}
break;
}

return o__$1;
}
});
/**
 * get for js objects
 */
c3kit.apron.corec.oget = (function c3kit$apron$corec$oget(var_args){
var G__7884 = arguments.length;
switch (G__7884) {
case 2:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return c3kit.apron.corec.goog$module$goog$object.get.call(null,o,cljs.core.name.call(null,k),null);
}));

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return c3kit.apron.corec.goog$module$goog$object.get.call(null,o,cljs.core.name.call(null,k),not_found);
}));

(c3kit.apron.corec.oget.cljs$lang$maxFixedArity = 3);

/**
 * get-in for js objects
 */
c3kit.apron.corec.oget_in = (function c3kit$apron$corec$oget_in(var_args){
var G__7887 = arguments.length;
switch (G__7887) {
case 2:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return c3kit.apron.corec.oget_in.call(null,o,ks,null);
}));

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var or__5025__auto__ = cljs.core.apply.call(null,c3kit.apron.corec.goog$module$goog$object.getValueByKeys,o,cljs.core.map.call(null,(function (p1__7885_SHARP_){
if(typeof p1__7885_SHARP_ === 'number'){
return p1__7885_SHARP_;
} else {
return cljs.core.name.call(null,p1__7885_SHARP_);
}
}),ks));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(c3kit.apron.corec.oget_in.cljs$lang$maxFixedArity = 3);

c3kit.apron.corec.new_uuid = (function c3kit$apron$corec$new_uuid(){
return cljs.core.random_uuid.call(null);
});
/**
 * ensures the seq is a vector before conj-ing
 */
c3kit.apron.corec.conjv = (function c3kit$apron$corec$conjv(col,item){
return cljs.core.conj.call(null,cljs.core.vec.call(null,col),item);
});
/**
 * ensures the seq is a vector after concat-ing
 */
c3kit.apron.corec.concatv = (function c3kit$apron$corec$concatv(var_args){
var args__5755__auto__ = [];
var len__5749__auto___7919 = arguments.length;
var i__5750__auto___7920 = (0);
while(true){
if((i__5750__auto___7920 < len__5749__auto___7919)){
args__5755__auto__.push((arguments[i__5750__auto___7920]));

var G__7921 = (i__5750__auto___7920 + (1));
i__5750__auto___7920 = G__7921;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cols));
}));

(c3kit.apron.corec.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.concatv.cljs$lang$applyTo = (function (seq7906){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7906));
}));

/**
 * insert elem into vector at index 
 */
c3kit.apron.corec.assocv = (function c3kit$apron$corec$assocv(coll,i,elem){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),cljs.core.subvec.call(null,coll,i)));
});
/**
 * removes the item at index i from the vector
 */
c3kit.apron.corec.dissocv = (function c3kit$apron$corec$dissocv(coll,i){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),i),cljs.core.subvec.call(null,coll,(i + (1)))));
});
/**
 * assocv with coll as last param
 */
c3kit.apron.corec.assocv_GT__GT_ = (function c3kit$apron$corec$assocv_GT__GT_(i,elem,coll){
return c3kit.apron.corec.assocv.call(null,coll,i,elem);
});
/**
 * dissocv with coll as last param
 */
c3kit.apron.corec.dissocv_GT__GT_ = (function c3kit$apron$corec$dissocv_GT__GT_(i,coll){
return c3kit.apron.corec.dissocv.call(null,coll,i);
});
c3kit.apron.corec.removev = (function c3kit$apron$corec$removev(pred,col){

return cljs.core.vec.call(null,cljs.core.remove.call(null,pred,col));
});
c3kit.apron.corec.removev_EQ_ = (function c3kit$apron$corec$removev_EQ_(col,item){

return c3kit.apron.corec.removev.call(null,(function (p1__7918_SHARP_){
return cljs.core._EQ_.call(null,p1__7918_SHARP_,item);
}),col);
});
/**
 * Same as (first (filter ...)), but faster!
 */
c3kit.apron.corec.ffilter = (function c3kit$apron$corec$ffilter(pred,coll){
return cljs.core.reduce.call(null,(function (_,b){
if(cljs.core.truth_(pred.call(null,b))){
return cljs.core.reduced.call(null,b);
} else {
return null;
}
}),null,coll);
});
/**
 * Sums the results of a function applied to the elements of a collection
 */
c3kit.apron.corec.sum_by = (function c3kit$apron$corec$sum_by(f,coll){
return cljs.core.transduce.call(null,cljs.core.map.call(null,f),cljs.core._PLUS_,coll);
});
/**
 * DEPRECATED: Use `keep` instead.
 * Like (filter some? (map f coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.map_some = (function c3kit$apron$corec$map_some(var_args){
var G__7926 = arguments.length;
switch (G__7926) {
case 1:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___7930 = arguments.length;
var i__5750__auto___7931 = (0);
while(true){
if((i__5750__auto___7931 < len__5749__auto___7930)){
args_arr__5774__auto__.push((arguments[i__5750__auto___7931]));

var G__7932 = (i__5750__auto___7931 + (1));
i__5750__auto___7931 = G__7932;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.filter.call(null,cljs.core.some_QMARK_));
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,c3kit.apron.corec.map_some.call(null,f),coll);
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.apply.call(null,cljs.core.sequence,c3kit.apron.corec.map_some.call(null,f),coll,colls);
}));

/** @this {Function} */
(c3kit.apron.corec.map_some.cljs$lang$applyTo = (function (seq7923){
var G__7924 = cljs.core.first.call(null,seq7923);
var seq7923__$1 = cljs.core.next.call(null,seq7923);
var G__7925 = cljs.core.first.call(null,seq7923__$1);
var seq7923__$2 = cljs.core.next.call(null,seq7923__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7924,G__7925,seq7923__$2);
}));

(c3kit.apron.corec.map_some.cljs$lang$maxFixedArity = (2));

/**
 * Like (map f (filter some? coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.some_map = (function c3kit$apron$corec$some_map(var_args){
var G__7933 = arguments.length;
switch (G__7933) {
case 1:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_),cljs.core.map.call(null,f));
}));

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,c3kit.apron.corec.some_map.call(null,f),coll);
}));

(c3kit.apron.corec.some_map.cljs$lang$maxFixedArity = 2);

/**
 * Like (set (map f coll))
 */
c3kit.apron.corec.map_set = (function c3kit$apron$corec$map_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f),coll);
});
/**
 * Like (set (mapcat f coll))
 */
c3kit.apron.corec.mapcat_set = (function c3kit$apron$corec$mapcat_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,f),coll);
});
/**
 * Like (distinct (map f coll))
 */
c3kit.apron.corec.map_distinct = (function c3kit$apron$corec$map_distinct(var_args){
var G__7937 = arguments.length;
switch (G__7937) {
case 1:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.distinct.call(null));
}));

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,c3kit.apron.corec.map_distinct.call(null,f),coll);
}));

(c3kit.apron.corec.map_distinct.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort, but reversed
 */
c3kit.apron.corec.rsort = (function c3kit$apron$corec$rsort(var_args){
var G__7939 = arguments.length;
switch (G__7939) {
case 1:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return c3kit.apron.corec.rsort.call(null,cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2 = (function (comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return comp.call(null,y,x);
}),coll);
}));

(c3kit.apron.corec.rsort.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort-by, but reversed
 */
c3kit.apron.corec.rsort_by = (function c3kit$apron$corec$rsort_by(var_args){
var G__7942 = arguments.length;
switch (G__7942) {
case 2:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return c3kit.apron.corec.rsort_by.call(null,keyfn,cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3 = (function (keyfn,comp,coll){
return cljs.core.sort_by.call(null,keyfn,(function (x,y){
return comp.call(null,y,x);
}),coll);
}));

(c3kit.apron.corec.rsort_by.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll starting from the
 * first item for which (pred item) returns logical true.  Returns a
 * stateful transducer when no collection is provided.
 */
c3kit.apron.corec.drop_until = (function c3kit$apron$corec$drop_until(var_args){
var G__7944 = arguments.length;
switch (G__7944) {
case 1:
return c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred));
}));

(c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll);
}));

(c3kit.apron.corec.drop_until.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll while
 * (pred item) returns logical false. pred must be free of side effects.
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.take_until = (function c3kit$apron$corec$take_until(var_args){
var G__7950 = arguments.length;
switch (G__7950) {
case 1:
return c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.take_while.call(null,cljs.core.complement.call(null,pred));
}));

(c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.take_while.call(null,cljs.core.complement.call(null,pred),coll);
}));

(c3kit.apron.corec.take_until.cljs$lang$maxFixedArity = 2);

c3kit.apron.corec.greatest_v = (function c3kit$apron$corec$greatest_v(var_args){
var G__7960 = arguments.length;
switch (G__7960) {
case 1:
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___7975 = arguments.length;
var i__5750__auto___7976 = (0);
while(true){
if((i__5750__auto___7976 < len__5749__auto___7975)){
args_arr__5774__auto__.push((arguments[i__5750__auto___7976]));

var G__7977 = (i__5750__auto___7976 + (1));
i__5750__auto___7976 = G__7977;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic = (function (greater_QMARK_,init,vals){
return cljs.core.reduce.call(null,(function (p1__7953_SHARP_,p2__7954_SHARP_){
if(cljs.core.truth_(greater_QMARK_.call(null,cljs.core.compare.call(null,p1__7953_SHARP_,p2__7954_SHARP_)))){
return p1__7953_SHARP_;
} else {
return p2__7954_SHARP_;
}
}),init,vals);
}));

/** @this {Function} */
(c3kit.apron.corec.greatest_v.cljs$lang$applyTo = (function (seq7956){
var G__7957 = cljs.core.first.call(null,seq7956);
var seq7956__$1 = cljs.core.next.call(null,seq7956);
var G__7958 = cljs.core.first.call(null,seq7956__$1);
var seq7956__$2 = cljs.core.next.call(null,seq7956__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7957,G__7958,seq7956__$2);
}));

(c3kit.apron.corec.greatest_v.cljs$lang$maxFixedArity = (2));

/**
 * Like max, but works with non-numeric values
 */
c3kit.apron.corec.max_v = cljs.core.partial.call(null,c3kit.apron.corec.greatest_v,cljs.core.pos_QMARK_);
/**
 * Like min, but works with non-numeric values
 */
c3kit.apron.corec.min_v = cljs.core.partial.call(null,c3kit.apron.corec.greatest_v,cljs.core.neg_QMARK_);
c3kit.apron.corec.greatest_m = (function c3kit$apron$corec$greatest_m(greater_QMARK_,k,comp,x,y){
if(cljs.core.truth_(greater_QMARK_.call(null,comp.call(null,cljs.core.get.call(null,x,k),cljs.core.get.call(null,y,k))))){
return x;
} else {
return y;
}
});
c3kit.apron.corec.greatest_by = (function c3kit$apron$corec$greatest_by(var_args){
var G__7985 = arguments.length;
switch (G__7985) {
case 3:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3 = (function (pos_neg_QMARK_,k,coll){
return c3kit.apron.corec.greatest_by.call(null,pos_neg_QMARK_,k,cljs.core.compare,coll);
}));

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4 = (function (pos_neg_QMARK_,k,comp,p__7986){
var vec__7987 = p__7986;
var seq__7988 = cljs.core.seq.call(null,vec__7987);
var first__7989 = cljs.core.first.call(null,seq__7988);
var seq__7988__$1 = cljs.core.next.call(null,seq__7988);
var first = first__7989;
var rest = seq__7988__$1;
return cljs.core.reduce.call(null,(function (p1__7978_SHARP_,p2__7979_SHARP_){
return c3kit.apron.corec.greatest_m.call(null,pos_neg_QMARK_,k,comp,p1__7978_SHARP_,p2__7979_SHARP_);
}),first,rest);
}));

(c3kit.apron.corec.greatest_by.cljs$lang$maxFixedArity = 4);

/**
 * Like max-key, but works with non-numeric values.
 */
c3kit.apron.corec.max_by = cljs.core.partial.call(null,c3kit.apron.corec.greatest_by,cljs.core.pos_QMARK_);
/**
 * Like min-key, but works with non-numeric values.
 */
c3kit.apron.corec.min_by = cljs.core.partial.call(null,c3kit.apron.corec.greatest_by,cljs.core.neg_QMARK_);
/**
 * Insert in threading macro to print the value.
 */
c3kit.apron.corec.__GT_inspect = (function c3kit$apron$corec$__GT_inspect(v){
cljs.core.prn.call(null,"->inspect: ",v);

return v;
});
/**
 * Returns the index of e (using =) in the seq. nil if missing.
 */
c3kit.apron.corec.index_of = (function c3kit$apron$corec$index_of(e,coll){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__7992_SHARP_,p2__7991_SHARP_){
if(cljs.core._EQ_.call(null,e,p2__7991_SHARP_)){
return p1__7992_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Takes keyword argument and converts them to a map.  If the args are prefixed with a map, the rest of the
 *   args are merged in.
 */
c3kit.apron.corec.__GT_options = (function c3kit$apron$corec$__GT_options(options){
if((options == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),options)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options))){
return cljs.core.merge.call(null,cljs.core.first.call(null,options),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.rest.call(null,options)));
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,options);

}
}
}
});
/**
 * Platform agnostic string format fm
 */
c3kit.apron.corec.formats = (function c3kit$apron$corec$formats(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8021 = arguments.length;
var i__5750__auto___8023 = (0);
while(true){
if((i__5750__auto___8023 < len__5749__auto___8021)){
args__5755__auto__.push((arguments[i__5750__auto___8023]));

var G__8025 = (i__5750__auto___8023 + (1));
i__5750__auto___8023 = G__8025;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic = (function (format,args){
return cljs.core.apply.call(null,goog.string.format,format,args);
}));

(c3kit.apron.corec.formats.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.formats.cljs$lang$applyTo = (function (seq8006){
var G__8007 = cljs.core.first.call(null,seq8006);
var seq8006__$1 = cljs.core.next.call(null,seq8006);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8007,seq8006__$1);
}));

/**
 * Creates a string of a given length by repeating the provided value.
 */
c3kit.apron.corec.__GT_string = (function c3kit$apron$corec$__GT_string(v,length){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,length,v));
});
/**
 * Pads the left side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_left = (function c3kit$apron$corec$pad_left(var_args){
var G__8019 = arguments.length;
switch (G__8019) {
case 2:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
var G__8020 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8020)].join('');
} else {
return G__8020;
}
}));

(c3kit.apron.corec.pad_left.cljs$lang$maxFixedArity = 3);

/**
 * Pads the right side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_right = (function c3kit$apron$corec$pad_right(var_args){
var G__8024 = arguments.length;
switch (G__8024) {
case 2:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
var G__8026 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8026),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size)))].join('');
} else {
return G__8026;
}
}));

(c3kit.apron.corec.pad_right.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-left, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_left_BANG_ = (function c3kit$apron$corec$pad_left_BANG_(var_args){
var G__8028 = arguments.length;
switch (G__8028) {
case 2:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left_BANG_.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
if(cljs.core._EQ_.call(null,length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.call(null,s,(size - length));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');

}
}
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-right, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_right_BANG_ = (function c3kit$apron$corec$pad_right_BANG_(var_args){
var G__8038 = arguments.length;
switch (G__8038) {
case 2:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right_BANG_.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
if(cljs.core._EQ_.call(null,length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.call(null,s,(0),length);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size)))].join('');

}
}
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Char code at the given index of a string
 */
c3kit.apron.corec.char_code_at = (function c3kit$apron$corec$char_code_at(s,i){
return s.charCodeAt(i);
});
/**
 * Char code at index 0 of a string
 */
c3kit.apron.corec.first_char_code = (function c3kit$apron$corec$first_char_code(s){
return c3kit.apron.corec.char_code_at.call(null,s,(0));
});
c3kit.apron.corec.not_blank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
/**
 * Return a map where all the keys with blank values are removed
 */
c3kit.apron.corec.remove_blanks = (function c3kit$apron$corec$remove_blanks(e){
return cljs.core.reduce.call(null,(function (r,p__8041){
var vec__8042 = p__8041;
var k = cljs.core.nth.call(null,vec__8042,(0),null);
var v = cljs.core.nth.call(null,vec__8042,(1),null);
if(clojure.string.blank_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))){
return r;
} else {
return cljs.core.assoc.call(null,r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Return a map where all the keys with nil values are removed
 */
c3kit.apron.corec.remove_nils = (function c3kit$apron$corec$remove_nils(e){
return cljs.core.reduce.call(null,(function (r,p__8045){
var vec__8046 = p__8045;
var k = cljs.core.nth.call(null,vec__8046,(0),null);
var v = cljs.core.nth.call(null,vec__8046,(1),null);
if(cljs.core._EQ_.call(null,null,v)){
return r;
} else {
return cljs.core.assoc.call(null,r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Returns true is e is an exception/error for the running platform
 */
c3kit.apron.corec.ex_QMARK_ = (function c3kit$apron$corec$ex_QMARK_(e){
return (e instanceof Error);
});
/**
 * Does nothing
 */
c3kit.apron.corec.noop = (function c3kit$apron$corec$noop(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8079 = arguments.length;
var i__5750__auto___8080 = (0);
while(true){
if((i__5750__auto___8080 < len__5749__auto___8079)){
args__5755__auto__.push((arguments[i__5750__auto___8080]));

var G__8081 = (i__5750__auto___8080 + (1));
i__5750__auto___8080 = G__8081;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(c3kit.apron.corec.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.noop.cljs$lang$applyTo = (function (seq8049){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8049));
}));

/**
 * Insert in threading macro to invoke a function with a given set of arguments.
 */
c3kit.apron.corec.invoke = (function c3kit$apron$corec$invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8096 = arguments.length;
var i__5750__auto___8100 = (0);
while(true){
if((i__5750__auto___8100 < len__5749__auto___8096)){
args__5755__auto__.push((arguments[i__5750__auto___8100]));

var G__8108 = (i__5750__auto___8100 + (1));
i__5750__auto___8100 = G__8108;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,args);
}));

(c3kit.apron.corec.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.invoke.cljs$lang$applyTo = (function (seq8069){
var G__8070 = cljs.core.first.call(null,seq8069);
var seq8069__$1 = cljs.core.next.call(null,seq8069);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8070,seq8069__$1);
}));

/**
 * Create an n-arity function from a 0-arity function
 */
c3kit.apron.corec.narity = (function c3kit$apron$corec$narity(f){
return (function() { 
var G__8117__delegate = function (_){
return f.call(null);
};
var G__8117 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8121__i = 0, G__8121__a = new Array(arguments.length -  0);
while (G__8121__i < G__8121__a.length) {G__8121__a[G__8121__i] = arguments[G__8121__i + 0]; ++G__8121__i;}
  _ = new cljs.core.IndexedSeq(G__8121__a,0,null);
} 
return G__8117__delegate.call(this,_);};
G__8117.cljs$lang$maxFixedArity = 0;
G__8117.cljs$lang$applyTo = (function (arglist__8122){
var _ = cljs.core.seq(arglist__8122);
return G__8117__delegate(_);
});
G__8117.cljs$core$IFn$_invoke$arity$variadic = G__8117__delegate;
return G__8117;
})()
;
});
/**
 * Filters coll by items matching kvs.
 */
c3kit.apron.corec.find_by = (function c3kit$apron$corec$find_by(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8124 = arguments.length;
var i__5750__auto___8126 = (0);
while(true){
if((i__5750__auto___8126 < len__5749__auto___8124)){
args__5755__auto__.push((arguments[i__5750__auto___8126]));

var G__8133 = (i__5750__auto___8126 + (1));
i__5750__auto___8126 = G__8133;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.find_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.find_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__8101){
var map__8102 = p__8101;
var map__8102__$1 = cljs.core.__destructure_map.call(null,map__8102);
var kvs = map__8102__$1;
var G__8103 = coll;
if(cljs.core.seq.call(null,kvs)){
return cljs.core.filter.call(null,c3kit.apron.test_fabric.spec__GT_tester.call(null,kvs),G__8103);
} else {
return G__8103;
}
}));

(c3kit.apron.corec.find_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.find_by.cljs$lang$applyTo = (function (seq8090){
var G__8091 = cljs.core.first.call(null,seq8090);
var seq8090__$1 = cljs.core.next.call(null,seq8090);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8091,seq8090__$1);
}));

/**
 * Finds the first item in coll matching kvs.
 */
c3kit.apron.corec.ffind_by = (function c3kit$apron$corec$ffind_by(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8144 = arguments.length;
var i__5750__auto___8145 = (0);
while(true){
if((i__5750__auto___8145 < len__5749__auto___8144)){
args__5755__auto__.push((arguments[i__5750__auto___8145]));

var G__8146 = (i__5750__auto___8145 + (1));
i__5750__auto___8145 = G__8146;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.ffind_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.ffind_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__8131){
var map__8132 = p__8131;
var map__8132__$1 = cljs.core.__destructure_map.call(null,map__8132);
var kvs = map__8132__$1;
return c3kit.apron.corec.ffilter.call(null,c3kit.apron.test_fabric.spec__GT_tester.call(null,kvs),coll);
}));

(c3kit.apron.corec.ffind_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.ffind_by.cljs$lang$applyTo = (function (seq8109){
var G__8110 = cljs.core.first.call(null,seq8109);
var seq8109__$1 = cljs.core.next.call(null,seq8109);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8110,seq8109__$1);
}));

/**
 * Counts the number of items in coll that satisfy a predicate
 */
c3kit.apron.corec.count_where = (function c3kit$apron$corec$count_where(pred,coll){
return cljs.core.reduce.call(null,(function (p1__8140_SHARP_,p2__8139_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__8139_SHARP_))){
return (p1__8140_SHARP_ + (1));
} else {
return p1__8140_SHARP_;
}
}),(0),coll);
});
/**
 * Counts the number of items in coll that
 * exactly match some given key-value pairs
 */
c3kit.apron.corec.count_by = (function c3kit$apron$corec$count_by(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8149 = arguments.length;
var i__5750__auto___8150 = (0);
while(true){
if((i__5750__auto___8150 < len__5749__auto___8149)){
args__5755__auto__.push((arguments[i__5750__auto___8150]));

var G__8151 = (i__5750__auto___8150 + (1));
i__5750__auto___8150 = G__8151;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__8147){
var map__8148 = p__8147;
var map__8148__$1 = cljs.core.__destructure_map.call(null,map__8148);
var kvs = map__8148__$1;
return c3kit.apron.corec.count_where.call(null,c3kit.apron.test_fabric.spec__GT_tester.call(null,kvs),coll);
}));

(c3kit.apron.corec.count_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.count_by.cljs$lang$applyTo = (function (seq8142){
var G__8143 = cljs.core.first.call(null,seq8142);
var seq8142__$1 = cljs.core.next.call(null,seq8142);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8143,seq8142__$1);
}));


//# sourceMappingURL=corec.js.map
