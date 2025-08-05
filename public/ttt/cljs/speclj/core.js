// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.core');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.error');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.stub');
goog.require('speclj.tags');
goog.require('speclj.report.documentation');
goog.require('speclj.report.progress');
goog.require('speclj.report.silent');
goog.require('speclj.run.standard');
var ret__5804__auto___9362 = (function (){
speclj.core._new_exception = (function speclj$core$_new_exception(var_args){
var G__9353 = arguments.length;
switch (G__9353) {
case 2:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,message,cause){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cause,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core._new_exception.cljs$lang$macro = true);

var ret__5804__auto___9376 = (function (){
speclj.core._new_throwable = (function speclj$core$_new_throwable(var_args){
var G__9363 = arguments.length;
switch (G__9363) {
case 2:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core._new_throwable.cljs$lang$macro = true);

var ret__5804__auto___9380 = speclj.core._new_failure = (function speclj$core$_new_failure(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.error","failure","speclj.error/failure",1870951539,null),null,(1),null)))))),null,(1),null)))));
});
(speclj.core._new_failure.cljs$lang$macro = true);

var ret__5804__auto___9381 = speclj.core._new_pending = (function speclj$core$_new_pending(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.error","pending","speclj.error/pending",-175618779,null),null,(1),null)))))),null,(1),null)))));
});
(speclj.core._new_pending.cljs$lang$macro = true);

var ret__5804__auto___9393 = (function (){
speclj.core.help_it = (function speclj$core$help_it(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9402 = arguments.length;
var i__5750__auto___9403 = (0);
while(true){
if((i__5750__auto___9403 < len__5749__auto___9402)){
args__5755__auto__.push((arguments[i__5750__auto___9403]));

var G__9404 = (i__5750__auto___9403 + (1));
i__5750__auto___9403 = G__9404;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,body){
if(cljs.core.seq.call(null,body)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
}
}));

(speclj.core.help_it.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_it.cljs$lang$applyTo = (function (seq9382){
var G__9383 = cljs.core.first.call(null,seq9382);
var seq9382__$1 = cljs.core.next.call(null,seq9382);
var G__9384 = cljs.core.first.call(null,seq9382__$1);
var seq9382__$2 = cljs.core.next.call(null,seq9382__$1);
var G__9385 = cljs.core.first.call(null,seq9382__$2);
var seq9382__$3 = cljs.core.next.call(null,seq9382__$2);
var G__9386 = cljs.core.first.call(null,seq9382__$3);
var seq9382__$4 = cljs.core.next.call(null,seq9382__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9383,G__9384,G__9385,G__9386,seq9382__$4);
}));

return null;
})()
;
(speclj.core.help_it.cljs$lang$macro = true);

var ret__5804__auto___9423 = (function (){
speclj.core.help_describe = (function speclj$core$help_describe(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9427 = arguments.length;
var i__5750__auto___9428 = (0);
while(true){
if((i__5750__auto___9428 < len__5749__auto___9427)){
args__5755__auto__.push((arguments[i__5750__auto___9428]));

var G__9429 = (i__5750__auto___9428 + (1));
i__5750__auto___9428 = G__9429;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"description__9394__auto__","description__9394__auto__",371202604,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-description","speclj.components/new-description",1764687593,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,speclj.platform.get_name.call(null,cljs.core._STAR_ns_STAR_)),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__9394__auto__","description__9394__auto__",371202604,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"component__9396__auto__","component__9396__auto__",-360951298,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),components))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","install","speclj.components/install",-280361868,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"component__9396__auto__","component__9396__auto__",-360951298,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__9394__auto__","description__9394__auto__",371202604,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.running","submit-description","speclj.running/submit-description",788083680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","active-runner","speclj.config/active-runner",982927849,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__9394__auto__","description__9394__auto__",371202604,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__9394__auto__","description__9394__auto__",371202604,null),null,(1),null)))));
}));

(speclj.core.help_describe.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_describe.cljs$lang$applyTo = (function (seq9397){
var G__9398 = cljs.core.first.call(null,seq9397);
var seq9397__$1 = cljs.core.next.call(null,seq9397);
var G__9399 = cljs.core.first.call(null,seq9397__$1);
var seq9397__$2 = cljs.core.next.call(null,seq9397__$1);
var G__9400 = cljs.core.first.call(null,seq9397__$2);
var seq9397__$3 = cljs.core.next.call(null,seq9397__$2);
var G__9401 = cljs.core.first.call(null,seq9397__$3);
var seq9397__$4 = cljs.core.next.call(null,seq9397__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9398,G__9399,G__9400,G__9401,seq9397__$4);
}));

return null;
})()
;
(speclj.core.help_describe.cljs$lang$macro = true);

var ret__5804__auto___9441 = (function (){
speclj.core.help_should = (function speclj$core$help_should(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9442 = arguments.length;
var i__5750__auto___9444 = (0);
while(true){
if((i__5750__auto___9444 < len__5749__auto___9442)){
args__5755__auto__.push((arguments[i__5750__auto___9444]));

var G__9446 = (i__5750__auto___9444 + (1));
i__5750__auto___9444 = G__9446;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.help_should.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.help_should.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","inc-assertions!","speclj.components/inc-assertions!",453792874,null),null,(1),null))))),null,(1),null)),body)));
}));

(speclj.core.help_should.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.help_should.cljs$lang$applyTo = (function (seq9418){
var G__9419 = cljs.core.first.call(null,seq9418);
var seq9418__$1 = cljs.core.next.call(null,seq9418);
var G__9420 = cljs.core.first.call(null,seq9418__$1);
var seq9418__$2 = cljs.core.next.call(null,seq9418__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9419,G__9420,seq9418__$2);
}));

return null;
})()
;
(speclj.core.help_should.cljs$lang$macro = true);

var ret__5804__auto___9457 = (function (){
/**
 * body => any forms, but should contain at least one assertion (should)
 * 
 *   Declares a new characteristic (example in rspec).
 */
speclj.core.it = (function speclj$core$it(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9458 = arguments.length;
var i__5750__auto___9459 = (0);
while(true){
if((i__5750__auto___9459 < len__5749__auto___9458)){
args__5755__auto__.push((arguments[i__5750__auto___9459]));

var G__9460 = (i__5750__auto___9459 + (1));
i__5750__auto___9459 = G__9460;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),body)));
}));

(speclj.core.it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.it.cljs$lang$applyTo = (function (seq9433){
var G__9434 = cljs.core.first.call(null,seq9433);
var seq9433__$1 = cljs.core.next.call(null,seq9433);
var G__9435 = cljs.core.first.call(null,seq9433__$1);
var seq9433__$2 = cljs.core.next.call(null,seq9433__$1);
var G__9436 = cljs.core.first.call(null,seq9433__$2);
var seq9433__$3 = cljs.core.next.call(null,seq9433__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9434,G__9435,G__9436,seq9433__$3);
}));

return null;
})()
;
(speclj.core.it.cljs$lang$macro = true);

var ret__5804__auto___9472 = (function (){
/**
 * Syntactic shortcut to make the characteristic pending.
 */
speclj.core.xit = (function speclj$core$xit(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9479 = arguments.length;
var i__5750__auto___9480 = (0);
while(true){
if((i__5750__auto___9480 < len__5749__auto___9479)){
args__5755__auto__.push((arguments[i__5750__auto___9480]));

var G__9481 = (i__5750__auto___9480 + (1));
i__5750__auto___9480 = G__9481;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","it","speclj.core/it",396347491,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null)),body)));
}));

(speclj.core.xit.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.xit.cljs$lang$applyTo = (function (seq9447){
var G__9448 = cljs.core.first.call(null,seq9447);
var seq9447__$1 = cljs.core.next.call(null,seq9447);
var G__9449 = cljs.core.first.call(null,seq9447__$1);
var seq9447__$2 = cljs.core.next.call(null,seq9447__$1);
var G__9450 = cljs.core.first.call(null,seq9447__$2);
var seq9447__$3 = cljs.core.next.call(null,seq9447__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9448,G__9449,G__9450,seq9447__$3);
}));

return null;
})()
;
(speclj.core.xit.cljs$lang$macro = true);

var ret__5804__auto___9485 = (function (){
/**
 * Same as 'it', but it is meant to facilitate temporary debugging.
 *   Characteristics defined with this macro will be executed along with any
 *   other characteristics thus defined, but all other characteristic defined
 *   with 'it' will be ignored.
 */
speclj.core.focus_it = (function speclj$core$focus_it(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9487 = arguments.length;
var i__5750__auto___9491 = (0);
while(true){
if((i__5750__auto___9491 < len__5749__auto___9487)){
args__5755__auto__.push((arguments[i__5750__auto___9491]));

var G__9492 = (i__5750__auto___9491 + (1));
i__5750__auto___9491 = G__9492;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),body)));
}));

(speclj.core.focus_it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_it.cljs$lang$applyTo = (function (seq9468){
var G__9469 = cljs.core.first.call(null,seq9468);
var seq9468__$1 = cljs.core.next.call(null,seq9468);
var G__9470 = cljs.core.first.call(null,seq9468__$1);
var seq9468__$2 = cljs.core.next.call(null,seq9468__$1);
var G__9471 = cljs.core.first.call(null,seq9468__$2);
var seq9468__$3 = cljs.core.next.call(null,seq9468__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9469,G__9470,G__9471,seq9468__$3);
}));

return null;
})()
;
(speclj.core.focus_it.cljs$lang$macro = true);

var ret__5804__auto___9511 = (function (){
speclj.core.when_not_bound = (function speclj$core$when_not_bound(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9516 = arguments.length;
var i__5750__auto___9517 = (0);
while(true){
if((i__5750__auto___9517 < len__5749__auto___9516)){
args__5755__auto__.push((arguments[i__5750__auto___9517]));

var G__9518 = (i__5750__auto___9517 + (1));
i__5750__auto___9517 = G__9518;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","find-var","speclj.core/find-var",1418073279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.when_not_bound.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.when_not_bound.cljs$lang$applyTo = (function (seq9486){
var G__9488 = cljs.core.first.call(null,seq9486);
var seq9486__$1 = cljs.core.next.call(null,seq9486);
var G__9489 = cljs.core.first.call(null,seq9486__$1);
var seq9486__$2 = cljs.core.next.call(null,seq9486__$1);
var G__9490 = cljs.core.first.call(null,seq9486__$2);
var seq9486__$3 = cljs.core.next.call(null,seq9486__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9488,G__9489,G__9490,seq9486__$3);
}));

return null;
})()
;
(speclj.core.when_not_bound.cljs$lang$macro = true);

var ret__5804__auto___9524 = (function (){
/**
 * body => & spec-components
 * 
 *   Declares a new spec.  The body can contain any forms that evaluate to spec components (it, before, after, with ...).
 */
speclj.core.describe = (function speclj$core$describe(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9525 = arguments.length;
var i__5750__auto___9526 = (0);
while(true){
if((i__5750__auto___9526 < len__5749__auto___9525)){
args__5755__auto__.push((arguments[i__5750__auto___9526]));

var G__9527 = (i__5750__auto___9526 + (1));
i__5750__auto___9526 = G__9527;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),components)));
}));

(speclj.core.describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.describe.cljs$lang$applyTo = (function (seq9512){
var G__9513 = cljs.core.first.call(null,seq9512);
var seq9512__$1 = cljs.core.next.call(null,seq9512);
var G__9514 = cljs.core.first.call(null,seq9512__$1);
var seq9512__$2 = cljs.core.next.call(null,seq9512__$1);
var G__9515 = cljs.core.first.call(null,seq9512__$2);
var seq9512__$3 = cljs.core.next.call(null,seq9512__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9513,G__9514,G__9515,seq9512__$3);
}));

return null;
})()
;
(speclj.core.describe.cljs$lang$macro = true);

var ret__5804__auto___9532 = (function (){
/**
 * Same as 'describe', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'describe' will be ignored.
 */
speclj.core.focus_describe = (function speclj$core$focus_describe(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9533 = arguments.length;
var i__5750__auto___9534 = (0);
while(true){
if((i__5750__auto___9534 < len__5749__auto___9533)){
args__5755__auto__.push((arguments[i__5750__auto___9534]));

var G__9535 = (i__5750__auto___9534 + (1));
i__5750__auto___9534 = G__9535;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),components)));
}));

(speclj.core.focus_describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_describe.cljs$lang$applyTo = (function (seq9520){
var G__9521 = cljs.core.first.call(null,seq9520);
var seq9520__$1 = cljs.core.next.call(null,seq9520);
var G__9522 = cljs.core.first.call(null,seq9520__$1);
var seq9520__$2 = cljs.core.next.call(null,seq9520__$1);
var G__9523 = cljs.core.first.call(null,seq9520__$2);
var seq9520__$3 = cljs.core.next.call(null,seq9520__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9521,G__9522,G__9523,seq9520__$3);
}));

return null;
})()
;
(speclj.core.focus_describe.cljs$lang$macro = true);

var ret__5804__auto___9543 = (function (){
/**
 * Same as describe, but should be used to nest testing contexts inside the outer describe.
 *   Contexts can be nested any number of times.
 */
speclj.core.context = (function speclj$core$context(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9544 = arguments.length;
var i__5750__auto___9545 = (0);
while(true){
if((i__5750__auto___9545 < len__5749__auto___9544)){
args__5755__auto__.push((arguments[i__5750__auto___9545]));

var G__9547 = (i__5750__auto___9545 + (1));
i__5750__auto___9545 = G__9547;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","describe","speclj.core/describe",-925284183,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.context.cljs$lang$applyTo = (function (seq9528){
var G__9529 = cljs.core.first.call(null,seq9528);
var seq9528__$1 = cljs.core.next.call(null,seq9528);
var G__9530 = cljs.core.first.call(null,seq9528__$1);
var seq9528__$2 = cljs.core.next.call(null,seq9528__$1);
var G__9531 = cljs.core.first.call(null,seq9528__$2);
var seq9528__$3 = cljs.core.next.call(null,seq9528__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9529,G__9530,G__9531,seq9528__$3);
}));

return null;
})()
;
(speclj.core.context.cljs$lang$macro = true);

var ret__5804__auto___9549 = (function (){
/**
 * Same as 'context', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'context' will be ignored.
 */
speclj.core.focus_context = (function speclj$core$focus_context(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9550 = arguments.length;
var i__5750__auto___9551 = (0);
while(true){
if((i__5750__auto___9551 < len__5749__auto___9550)){
args__5755__auto__.push((arguments[i__5750__auto___9551]));

var G__9553 = (i__5750__auto___9551 + (1));
i__5750__auto___9551 = G__9553;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","focus-describe","speclj.core/focus-describe",-1186168696,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.focus_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_context.cljs$lang$applyTo = (function (seq9536){
var G__9537 = cljs.core.first.call(null,seq9536);
var seq9536__$1 = cljs.core.next.call(null,seq9536);
var G__9538 = cljs.core.first.call(null,seq9536__$1);
var seq9536__$2 = cljs.core.next.call(null,seq9536__$1);
var G__9539 = cljs.core.first.call(null,seq9536__$2);
var seq9536__$3 = cljs.core.next.call(null,seq9536__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9537,G__9538,G__9539,seq9536__$3);
}));

return null;
})()
;
(speclj.core.focus_context.cljs$lang$macro = true);

var ret__5804__auto___9561 = (function (){
/**
 * Declares a function that is invoked before each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before = (function speclj$core$before(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9571 = arguments.length;
var i__5750__auto___9572 = (0);
while(true){
if((i__5750__auto___9572 < len__5749__auto___9571)){
args__5755__auto__.push((arguments[i__5750__auto___9572]));

var G__9573 = (i__5750__auto___9572 + (1));
i__5750__auto___9572 = G__9573;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before","speclj.components/new-before",-1748544967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before.cljs$lang$applyTo = (function (seq9552){
var G__9554 = cljs.core.first.call(null,seq9552);
var seq9552__$1 = cljs.core.next.call(null,seq9552);
var G__9555 = cljs.core.first.call(null,seq9552__$1);
var seq9552__$2 = cljs.core.next.call(null,seq9552__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9554,G__9555,seq9552__$2);
}));

return null;
})()
;
(speclj.core.before.cljs$lang$macro = true);

var ret__5804__auto___9576 = (function (){
/**
 * Declares a function that is invoked after each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after = (function speclj$core$after(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9581 = arguments.length;
var i__5750__auto___9582 = (0);
while(true){
if((i__5750__auto___9582 < len__5749__auto___9581)){
args__5755__auto__.push((arguments[i__5750__auto___9582]));

var G__9583 = (i__5750__auto___9582 + (1));
i__5750__auto___9582 = G__9583;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after","speclj.components/new-after",-755884805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after.cljs$lang$applyTo = (function (seq9562){
var G__9563 = cljs.core.first.call(null,seq9562);
var seq9562__$1 = cljs.core.next.call(null,seq9562);
var G__9564 = cljs.core.first.call(null,seq9562__$1);
var seq9562__$2 = cljs.core.next.call(null,seq9562__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9563,G__9564,seq9562__$2);
}));

return null;
})()
;
(speclj.core.after.cljs$lang$macro = true);

var ret__5804__auto___9588 = (function (){
/**
 * Declares a function that will be invoked around each characteristic of the containing describe scope.
 *   The characteristic will be passed in and the around function is responsible for invoking it.
 * 
 *   (around [it] (binding [*out* new-out] (it)))
 * 
 *   Note that if you have cleanup that must run, use a 'finally' block:
 * 
 *   (around [it] (try (it) (finally :clean-up)))
 */
speclj.core.around = (function speclj$core$around(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9589 = arguments.length;
var i__5750__auto___9590 = (0);
while(true){
if((i__5750__auto___9590 < len__5749__auto___9589)){
args__5755__auto__.push((arguments[i__5750__auto___9590]));

var G__9594 = (i__5750__auto___9590 + (1));
i__5750__auto___9590 = G__9594;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.around.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.around.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,binding,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around","speclj.components/new-around",1527117948,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around.cljs$lang$applyTo = (function (seq9577){
var G__9578 = cljs.core.first.call(null,seq9577);
var seq9577__$1 = cljs.core.next.call(null,seq9577);
var G__9579 = cljs.core.first.call(null,seq9577__$1);
var seq9577__$2 = cljs.core.next.call(null,seq9577__$1);
var G__9580 = cljs.core.first.call(null,seq9577__$2);
var seq9577__$3 = cljs.core.next.call(null,seq9577__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9578,G__9579,G__9580,seq9577__$3);
}));

return null;
})()
;
(speclj.core.around.cljs$lang$macro = true);

var ret__5804__auto___9595 = /**
 * Redefines the bindings around each characteristic of the containing describe scope.
 */
speclj.core.redefs_around = (function speclj$core$redefs_around(_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__9584__auto__","it__9584__auto__",648021371,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__9584__auto__","it__9584__auto__",648021371,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.redefs_around.cljs$lang$macro = true);

var ret__5804__auto___9597 = (function (){
/**
 * Declares a function that is invoked once before any characteristic in the containing describe scope is evaluated. The
 *   body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before_all = (function speclj$core$before_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9605 = arguments.length;
var i__5750__auto___9606 = (0);
while(true){
if((i__5750__auto___9606 < len__5749__auto___9605)){
args__5755__auto__.push((arguments[i__5750__auto___9606]));

var G__9607 = (i__5750__auto___9606 + (1));
i__5750__auto___9606 = G__9607;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before-all","speclj.components/new-before-all",879702550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before_all.cljs$lang$applyTo = (function (seq9591){
var G__9592 = cljs.core.first.call(null,seq9591);
var seq9591__$1 = cljs.core.next.call(null,seq9591);
var G__9593 = cljs.core.first.call(null,seq9591__$1);
var seq9591__$2 = cljs.core.next.call(null,seq9591__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9592,G__9593,seq9591__$2);
}));

return null;
})()
;
(speclj.core.before_all.cljs$lang$macro = true);

var ret__5804__auto___9614 = (function (){
/**
 * Declares a function that is invoked once after all the characteristics in the containing describe scope have been
 *   evaluated.  The body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after_all = (function speclj$core$after_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9615 = arguments.length;
var i__5750__auto___9616 = (0);
while(true){
if((i__5750__auto___9616 < len__5749__auto___9615)){
args__5755__auto__.push((arguments[i__5750__auto___9616]));

var G__9617 = (i__5750__auto___9616 + (1));
i__5750__auto___9616 = G__9617;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after-all","speclj.components/new-after-all",1608037396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after_all.cljs$lang$applyTo = (function (seq9598){
var G__9599 = cljs.core.first.call(null,seq9598);
var seq9598__$1 = cljs.core.next.call(null,seq9598);
var G__9600 = cljs.core.first.call(null,seq9598__$1);
var seq9598__$2 = cljs.core.next.call(null,seq9598__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9599,G__9600,seq9598__$2);
}));

return null;
})()
;
(speclj.core.after_all.cljs$lang$macro = true);

var ret__5804__auto___9621 = (function (){
/**
 * Declares a function that is invoked once around all characteristics of the containing describe scope.
 */
speclj.core.around_all = (function speclj$core$around_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9623 = arguments.length;
var i__5750__auto___9624 = (0);
while(true){
if((i__5750__auto___9624 < len__5749__auto___9623)){
args__5755__auto__.push((arguments[i__5750__auto___9624]));

var G__9625 = (i__5750__auto___9624 + (1));
i__5750__auto___9624 = G__9625;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around-all","speclj.components/new-around-all",1113944722,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around_all.cljs$lang$applyTo = (function (seq9610){
var G__9611 = cljs.core.first.call(null,seq9610);
var seq9610__$1 = cljs.core.next.call(null,seq9610);
var G__9612 = cljs.core.first.call(null,seq9610__$1);
var seq9610__$2 = cljs.core.next.call(null,seq9610__$1);
var G__9613 = cljs.core.first.call(null,seq9610__$2);
var seq9610__$3 = cljs.core.next.call(null,seq9610__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9611,G__9612,G__9613,seq9610__$3);
}));

return null;
})()
;
(speclj.core.around_all.cljs$lang$macro = true);

speclj.core._make_with = (function speclj$core$_make_with(name,body,ctor,bang_QMARK_){
var var_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ctor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__9622__auto__","v__9622__auto__",1286576946,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__9622__auto__","v__9622__auto__",1286576946,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bang_QMARK_,null,(1),null))))),null,(1),null)))));
});
var ret__5804__auto___9645 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (with meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with$ = (function speclj$core$with(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9646 = arguments.length;
var i__5750__auto___9647 = (0);
while(true){
if((i__5750__auto___9647 < len__5749__auto___9646)){
args__5755__auto__.push((arguments[i__5750__auto___9647]));

var G__9648 = (i__5750__auto___9647 + (1));
i__5750__auto___9647 = G__9648;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),false);
}));

(speclj.core.with$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with$.cljs$lang$applyTo = (function (seq9626){
var G__9627 = cljs.core.first.call(null,seq9626);
var seq9626__$1 = cljs.core.next.call(null,seq9626);
var G__9628 = cljs.core.first.call(null,seq9626__$1);
var seq9626__$2 = cljs.core.next.call(null,seq9626__$1);
var G__9629 = cljs.core.first.call(null,seq9626__$2);
var seq9626__$3 = cljs.core.next.call(null,seq9626__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9627,G__9628,G__9629,seq9626__$3);
}));

return null;
})()
;
(speclj.core.with$.cljs$lang$macro = true);

var ret__5804__auto___9651 = (function (){
/**
 * Declares a reference-able symbol that will be evaluated immediately and reset once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with! my-with! (swap! my-num inc))
 *   (it "increments my-num before being accessed" (should= 1 @my-num) (should= 2 @my-with!))
 */
speclj.core.with_BANG_ = (function speclj$core$with_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9652 = arguments.length;
var i__5750__auto___9653 = (0);
while(true){
if((i__5750__auto___9653 < len__5749__auto___9652)){
args__5755__auto__.push((arguments[i__5750__auto___9653]));

var G__9654 = (i__5750__auto___9653 + (1));
i__5750__auto___9653 = G__9654;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),true);
}));

(speclj.core.with_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_BANG_.cljs$lang$applyTo = (function (seq9633){
var G__9634 = cljs.core.first.call(null,seq9633);
var seq9633__$1 = cljs.core.next.call(null,seq9633);
var G__9635 = cljs.core.first.call(null,seq9633__$1);
var seq9633__$2 = cljs.core.next.call(null,seq9633__$1);
var G__9636 = cljs.core.first.call(null,seq9633__$2);
var seq9633__$3 = cljs.core.next.call(null,seq9633__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9634,G__9635,G__9636,seq9633__$3);
}));

return null;
})()
;
(speclj.core.with_BANG_.cljs$lang$macro = true);

var ret__5804__auto___9657 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (with-all meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with_all = (function speclj$core$with_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9658 = arguments.length;
var i__5750__auto___9659 = (0);
while(true){
if((i__5750__auto___9659 < len__5749__auto___9658)){
args__5755__auto__.push((arguments[i__5750__auto___9659]));

var G__9660 = (i__5750__auto___9659 + (1));
i__5750__auto___9659 = G__9660;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),false);
}));

(speclj.core.with_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all.cljs$lang$applyTo = (function (seq9637){
var G__9638 = cljs.core.first.call(null,seq9637);
var seq9637__$1 = cljs.core.next.call(null,seq9637);
var G__9639 = cljs.core.first.call(null,seq9637__$1);
var seq9637__$2 = cljs.core.next.call(null,seq9637__$1);
var G__9640 = cljs.core.first.call(null,seq9637__$2);
var seq9637__$3 = cljs.core.next.call(null,seq9637__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9638,G__9639,G__9640,seq9637__$3);
}));

return null;
})()
;
(speclj.core.with_all.cljs$lang$macro = true);

var ret__5804__auto___9666 = (function (){
/**
 * Declares a reference-able symbol that will be immediately evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with-all! my-with-all! (swap! my-num inc))
 *   (it "increments my-num before being accessed"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 *   (it "only increments my-num once per context"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 */
speclj.core.with_all_BANG_ = (function speclj$core$with_all_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9667 = arguments.length;
var i__5750__auto___9668 = (0);
while(true){
if((i__5750__auto___9668 < len__5749__auto___9667)){
args__5755__auto__.push((arguments[i__5750__auto___9668]));

var G__9669 = (i__5750__auto___9668 + (1));
i__5750__auto___9668 = G__9669;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),true);
}));

(speclj.core.with_all_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all_BANG_.cljs$lang$applyTo = (function (seq9641){
var G__9642 = cljs.core.first.call(null,seq9641);
var seq9641__$1 = cljs.core.next.call(null,seq9641);
var G__9643 = cljs.core.first.call(null,seq9641__$1);
var seq9641__$2 = cljs.core.next.call(null,seq9641__$1);
var G__9644 = cljs.core.first.call(null,seq9641__$2);
var seq9641__$3 = cljs.core.next.call(null,seq9641__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9642,G__9643,G__9644,seq9641__$3);
}));

return null;
})()
;
(speclj.core.with_all_BANG_.cljs$lang$macro = true);

var ret__5804__auto___9674 = speclj.core._to_s = (function speclj$core$_to_s(_AMPERSAND_form,_AMPERSAND_env,thing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",790328718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__9661__auto__","thing__9661__auto__",182621295,null),null,(1),null)),(new cljs.core.List(null,thing,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__9661__auto__","thing__9661__auto__",182621295,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)))));
});
(speclj.core._to_s.cljs$lang$macro = true);

var ret__5804__auto___9676 = /**
 * Useful for making custom assertions.
 */
speclj.core._fail = (function speclj$core$_fail(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
});
(speclj.core._fail.cljs$lang$macro = true);

var ret__5804__auto___9682 = speclj.core.wrong_types = (function speclj$core$wrong_types(_AMPERSAND_form,_AMPERSAND_env,assertion,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__9670__auto__","a__9670__auto__",1693680234,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__9671__auto__","b__9671__auto__",-322266668,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__9672__auto__","type-a__9672__auto__",1752275260,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__9670__auto__","a__9670__auto__",1693680234,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__9670__auto__","a__9670__auto__",1693680234,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__9673__auto__","type-b__9673__auto__",434906707,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__9671__auto__","b__9671__auto__",-322266668,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__9671__auto__","b__9671__auto__",-322266668,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,assertion,null,(1),null)),(new cljs.core.List(null," doesn't know how to handle these types: [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__9672__auto__","type-a__9672__auto__",1752275260,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__9673__auto__","type-b__9673__auto__",434906707,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null)))));
});
(speclj.core.wrong_types.cljs$lang$macro = true);

var ret__5804__auto___9685 = /**
 * Asserts the truthy-ness of a form
 */
speclj.core.should = (function speclj$core$should(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9681__auto__","value__9681__auto__",-988181690,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9681__auto__","value__9681__auto__",-988181690,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected truthy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9681__auto__","value__9681__auto__",-988181690,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should.cljs$lang$macro = true);

var ret__5804__auto___9688 = /**
 * Asserts the falsy-ness of a form
 */
speclj.core.should_not = (function speclj$core$should_not(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9683__auto__","value__9683__auto__",1524728370,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected falsy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9683__auto__","value__9683__auto__",1524728370,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not.cljs$lang$macro = true);

var ret__5804__auto___9709 = (function (){
/**
 * Asserts that two forms evaluate to equal values, with the expected value as the first parameter.
 */
speclj.core.should_EQ_ = (function speclj$core$should_EQ_(var_args){
var G__9693 = arguments.length;
switch (G__9693) {
case 4:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9686__auto__","expected__9686__auto__",-1642200703,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9687__auto__","actual__9687__auto__",-1206355445,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9686__auto__","expected__9686__auto__",-1642200703,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9687__auto__","actual__9687__auto__",-1206355445,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9686__auto__","expected__9686__auto__",-1642200703,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9687__auto__","actual__9687__auto__",-1206355445,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form,delta_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9689__auto__","expected__9689__auto__",-1180350642,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9690__auto__","actual__9690__auto__",-1300363554,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__9691__auto__","delta__9691__auto__",1286977360,null),null,(1),null)),(new cljs.core.List(null,delta_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","difference-greater-than-delta?","speclj.platform/difference-greater-than-delta?",-954532948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9689__auto__","expected__9689__auto__",-1180350642,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9690__auto__","actual__9690__auto__",-1300363554,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__9691__auto__","delta__9691__auto__",1286977360,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9689__auto__","expected__9689__auto__",-1180350642,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9690__auto__","actual__9690__auto__",-1300363554,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using delta: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__9691__auto__","delta__9691__auto__",1286977360,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_EQ_.cljs$lang$macro = true);

var ret__5804__auto___9726 = /**
 * Asserts that a form satisfies a function.
 */
speclj.core.should_be = (function speclj$core$should_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9710__auto__","f__9710__auto__",1387191231,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9711__auto__","actual__9711__auto__",1641546859,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9710__auto__","f__9710__auto__",1387191231,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9711__auto__","actual__9711__auto__",1641546859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9711__auto__","actual__9711__auto__",1641546859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be.cljs$lang$macro = true);

var ret__5804__auto___9730 = /**
 * Asserts that a form does not satisfy a function.
 */
speclj.core.should_not_be = (function speclj$core$should_not_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9717__auto__","f__9717__auto__",-1583685035,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9718__auto__","actual__9718__auto__",1370506694,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9717__auto__","f__9717__auto__",-1583685035,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9718__auto__","actual__9718__auto__",1370506694,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9718__auto__","actual__9718__auto__",1370506694,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be.cljs$lang$macro = true);

var ret__5804__auto___9734 = /**
 * Asserts that two forms evaluate to unequal values, with the unexpected value as the first parameter.
 */
speclj.core.should_not_EQ_ = (function speclj$core$should_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9720__auto__","expected__9720__auto__",1260041632,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9721__auto__","actual__9721__auto__",-1510606908,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9720__auto__","expected__9720__auto__",1260041632,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9721__auto__","actual__9721__auto__",-1510606908,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9720__auto__","expected__9720__auto__",1260041632,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to =: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9721__auto__","actual__9721__auto__",-1510606908,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ_.cljs$lang$macro = true);

var ret__5804__auto___9743 = /**
 * Asserts that two forms evaluate to the same object, with the expected value as the first parameter.
 */
speclj.core.should_be_same = (function speclj$core$should_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9724__auto__","expected__9724__auto__",849678462,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9725__auto__","actual__9725__auto__",650734904,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9724__auto__","expected__9724__auto__",849678462,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9725__auto__","actual__9725__auto__",650734904,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"         Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9724__auto__","expected__9724__auto__",849678462,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9725__auto__","actual__9725__auto__",650734904,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_same.cljs$lang$macro = true);

var ret__5804__auto___9750 = /**
 * Asserts that two forms evaluate to different objects, with the unexpected value as the first parameter.
 */
speclj.core.should_not_be_same = (function speclj$core$should_not_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9731__auto__","expected__9731__auto__",-1424494671,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9732__auto__","actual__9732__auto__",-620515732,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9731__auto__","expected__9731__auto__",-1424494671,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9732__auto__","actual__9732__auto__",-620515732,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"             Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9731__auto__","expected__9731__auto__",-1424494671,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9732__auto__","actual__9732__auto__",-620515732,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_same.cljs$lang$macro = true);

var ret__5804__auto___9751 = /**
 * Asserts that the form evaluates to nil
 */
speclj.core.should_be_nil = (function speclj$core$should_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_be_nil.cljs$lang$macro = true);

var ret__5804__auto___9755 = /**
 * Multipurpose assertion of containment.  Works on strings, regular expressions, sequences, and maps.
 * 
 *   (should-contain "foo" "foobar")            ; looks for sub-string
 *   (should-contain #"hello.*" "hello, world") ; looks for regular expression
 *   (should-contain :foo {:foo :bar})          ; looks for a key in a map
 *   (should-contain 3 [1 2 3 4])               ; looks for an object in a collection
 */
speclj.core.should_contain = (function speclj$core$should_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: nil",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","index-of","clojure.string/index-of",1428561254,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9742__9746__auto__","p1__9742__9746__auto__",-1809659512,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9742__9746__auto__","p1__9742__9746__auto__",-1809659512,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9744__auto__","expected__9744__auto__",-1896325182,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9745__auto__","actual__9745__auto__",1219459088,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_contain.cljs$lang$macro = true);

var ret__5804__auto___9773 = /**
 * Multipurpose assertion of non-containment.  See should-contain as an example of opposite behavior.
 */
speclj.core.should_not_contain = (function speclj$core$should_not_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","index-of","clojure.string/index-of",1428561254,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9756__9759__auto__","p1__9756__9759__auto__",-1810343226,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9756__9759__auto__","p1__9756__9759__auto__",-1810343226,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9757__auto__","expected__9757__auto__",34917094,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9758__auto__","actual__9758__auto__",-1743631143,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_contain.cljs$lang$macro = true);

var ret__5804__auto___9821 = /**
 * Multipurpose assertion on (count %). Works on strings, sequences, and maps.
 * 
 *   (should-have-count 6 "foobar")
 *   (should-have-count 2 [1 2])
 *   (should-have-count 1 {:foo :bar})
 *   (should-have-count 0 [])
 *   (should-have-count 0 nil)
 */
speclj.core.should_have_count = (function speclj$core$should_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9764__auto__","expected__9764__auto__",-1061864715,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9764__auto__","expected__9764__auto__",-1061864715,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9764__auto__","expected__9764__auto__",-1061864715,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9766__auto__","actual__9766__auto__",-1850271231,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9764__auto__","expected__9764__auto__",-1061864715,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9766__auto__","actual__9766__auto__",-1850271231,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9764__auto__","expected__9764__auto__",-1061864715,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual count:   ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9766__auto__","actual__9766__auto__",-1850271231,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual coll:    ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9765__auto__","coll__9765__auto__",2024807916,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_have_count.cljs$lang$macro = true);

var ret__5804__auto___9837 = /**
 * Multipurpose assertion on (not= (count %)). Works on strings, sequences, and maps.
 * 
 *   (should-not-have-count 1 "foobar")
 *   (should-not-have-count 1 [1 2])
 *   (should-not-have-count 42 {:foo :bar})
 *   (should-not-have-count 1 [])
 *   (should-not-have-count 1 nil)
 */
speclj.core.should_not_have_count = (function speclj$core$should_not_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9774__auto__","expected__9774__auto__",571485400,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9774__auto__","expected__9774__auto__",571485400,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9774__auto__","expected__9774__auto__",571485400,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9776__auto__","actual__9776__auto__",1673977030,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9774__auto__","expected__9774__auto__",571485400,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9776__auto__","actual__9776__auto__",1673977030,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count to not equal ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__9774__auto__","expected__9774__auto__",571485400,null),null,(1),null)),(new cljs.core.List(null," (but it did!)",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Collection: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9775__auto__","coll__9775__auto__",-516995433,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_have_count.cljs$lang$macro = true);

var ret__5804__auto___9852 = speclj.core._remove_first = (function speclj$core$_remove_first(_AMPERSAND_form,_AMPERSAND_env,coll,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9810__auto__","value__9810__auto__",1911054317,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9811__auto__","coll__9811__auto__",1520173713,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__9812__auto__","seen__9812__auto__",2140296389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9811__auto__","coll__9811__auto__",1520173713,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__9812__auto__","seen__9812__auto__",2140296389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9813__auto__","f__9813__auto__",-5397249,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9811__auto__","coll__9811__auto__",1520173713,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9813__auto__","f__9813__auto__",-5397249,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__9810__auto__","value__9810__auto__",1911054317,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__9812__auto__","seen__9812__auto__",2140296389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9811__auto__","coll__9811__auto__",1520173713,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__9811__auto__","coll__9811__auto__",1520173713,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__9812__auto__","seen__9812__auto__",2140296389,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9813__auto__","f__9813__auto__",-5397249,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._remove_first.cljs$lang$macro = true);

var ret__5804__auto___9912 = speclj.core._coll_difference = (function speclj$core$_coll_difference(_AMPERSAND_form,_AMPERSAND_env,coll1,coll2){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__9828__auto__","coll1__9828__auto__",1463435731,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__9829__auto__","coll2__9829__auto__",-1597861833,null),null,(1),null)),(new cljs.core.List(null,coll2,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__9828__auto__","coll1__9828__auto__",1463435731,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",-683865998,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__9828__auto__","coll1__9828__auto__",1463435731,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__9829__auto__","coll2__9829__auto__",-1597861833,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__9830__auto__","match-with__9830__auto__",-1907983565,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__9828__auto__","coll1__9828__auto__",1463435731,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__9831__auto__","match-against__9831__auto__",440470693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__9829__auto__","coll2__9829__auto__",-1597861833,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__9832__auto__","diff__9832__auto__",-152670396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__9830__auto__","match-with__9830__auto__",-1907983565,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__9832__auto__","diff__9832__auto__",-152670396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9833__auto__","f__9833__auto__",-1609081383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__9830__auto__","match-with__9830__auto__",-1907983565,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__9834__auto__","r__9834__auto__",1051350954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__9830__auto__","match-with__9830__auto__",-1907983565,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9827__9835__auto__","p1__9827__9835__auto__",-1256996238,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9827__9835__auto__","p1__9827__9835__auto__",-1256996238,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9833__auto__","f__9833__auto__",-1609081383,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__9831__auto__","match-against__9831__auto__",440470693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__9834__auto__","r__9834__auto__",1051350954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-remove-first","speclj.core/-remove-first",869128070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__9831__auto__","match-against__9831__auto__",440470693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9833__auto__","f__9833__auto__",-1609081383,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__9832__auto__","diff__9832__auto__",-152670396,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__9834__auto__","r__9834__auto__",1051350954,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__9831__auto__","match-against__9831__auto__",440470693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__9832__auto__","diff__9832__auto__",-152670396,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9833__auto__","f__9833__auto__",-1609081383,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._coll_difference.cljs$lang$macro = true);

var ret__5804__auto___9962 = /**
 * Assertion of prefix in strings and sequences.
 * 
 *   (should-start-with "foo" "foobar")            ; looks for string prefix
 *   (should-start-with [1 2] [1 2 3 4])               ; looks for a subset at start of collection
 */
speclj.core.should_start_with = (function speclj$core$should_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null)),(new cljs.core.List(null,"\" to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9907__auto__","actual__9907__auto__",334858663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__9908__auto__","extra__9908__auto__",-179363648,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9907__auto__","actual__9907__auto__",334858663,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__9909__auto__","missing__9909__auto__",-763913685,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9907__auto__","actual__9907__auto__",334858663,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__9908__auto__","extra__9908__auto__",-179363648,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__9909__auto__","missing__9909__auto__",-763913685,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9905__auto__","prefix__9905__auto__",-726296628,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9906__auto__","whole__9906__auto__",-2057886464,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_start_with.cljs$lang$macro = true);

var ret__5804__auto___10031 = /**
 * The inverse of should-start-with.
 */
speclj.core.should_not_start_with = (function speclj$core$should_not_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null)),(new cljs.core.List(null,"\" to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9968__auto__","actual__9968__auto__",646670824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__9969__auto__","extra__9969__auto__",2013063616,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9968__auto__","actual__9968__auto__",646670824,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__9971__auto__","missing__9971__auto__",1596675568,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__9968__auto__","actual__9968__auto__",646670824,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__9969__auto__","extra__9969__auto__",2013063616,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__9971__auto__","missing__9971__auto__",1596675568,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__9966__auto__","prefix__9966__auto__",2083283117,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__9967__auto__","whole__9967__auto__",1863273965,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_start_with.cljs$lang$macro = true);

var ret__5804__auto___10055 = /**
 * Assertion of suffix in strings and sequences.
 * 
 *   (should-end-with "foo" "foobar")            ; looks for string suffix
 *   (should-end-with [1 2] [1 2 3 4])               ; looks for a subset at end of collection
 */
speclj.core.should_end_with = (function speclj$core$should_end_with(_AMPERSAND_form,_AMPERSAND_env,suffix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null)),(new cljs.core.List(null,suffix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10032__auto__","padding__10032__auto__",-1608620412,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null)),(new cljs.core.List(null,"] to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10032__auto__","padding__10032__auto__",-1608620412,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10033__auto__","actual__10033__auto__",955024175,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10034__auto__","extra__10034__auto__",1826006083,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10033__auto__","actual__10033__auto__",955024175,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10035__auto__","missing__10035__auto__",-1919027274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10033__auto__","actual__10033__auto__",955024175,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10034__auto__","extra__10034__auto__",1826006083,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10035__auto__","missing__10035__auto__",-1919027274,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10032__auto__","padding__10032__auto__",-1608620412,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null)),(new cljs.core.List(null," to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10032__auto__","padding__10032__auto__",-1608620412,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__10028__auto__","suffix__10028__auto__",-858981404,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10029__auto__","whole__10029__auto__",-1410767550,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_end_with.cljs$lang$macro = true);

var ret__5804__auto___10094 = /**
 * The inverse of should-end-with.
 */
speclj.core.should_not_end_with = (function speclj$core$should_not_end_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10058__auto__","padding__10058__auto__",-1485937769,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null)),(new cljs.core.List(null,"] to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10058__auto__","padding__10058__auto__",-1485937769,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10059__auto__","actual__10059__auto__",-129313521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10060__auto__","extra__10060__auto__",1931680075,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10059__auto__","actual__10059__auto__",-129313521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10061__auto__","missing__10061__auto__",-665010460,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10059__auto__","actual__10059__auto__",-129313521,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10060__auto__","extra__10060__auto__",1931680075,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10061__auto__","missing__10061__auto__",-665010460,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10058__auto__","padding__10058__auto__",-1485937769,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null)),(new cljs.core.List(null," to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__10058__auto__","padding__10058__auto__",-1485937769,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__10056__auto__","prefix__10056__auto__",-1419742432,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__10057__auto__","whole__10057__auto__",-111233662,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_end_with.cljs$lang$macro = true);

var ret__5804__auto___10113 = speclj.core._difference_message = (function speclj$core$_difference_message(_AMPERSAND_form,_AMPERSAND_env,expected,actual,extra,missing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"              got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"          missing: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,missing,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"            extra: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,extra,null,(1),null))))),null,(1),null)))));
});
(speclj.core._difference_message.cljs$lang$macro = true);

var ret__5804__auto___10121 = /**
 * Asserts 'equivalency'.
 *   When passed collections it will check that they have the same contents.
 *   For anything else it will assert that clojure.core/== returns true.
 */
speclj.core.should_EQ__EQ_ = (function speclj$core$should_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10099__auto__","extra__10099__auto__",-130486763,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10100__auto__","missing__10100__auto__",922552616,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10099__auto__","extra__10099__auto__",-130486763,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10100__auto__","missing__10100__auto__",922552616,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-difference-message","speclj.core/-difference-message",762568995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10099__auto__","extra__10099__auto__",-130486763,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10100__auto__","missing__10100__auto__",922552616,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10097__auto__","expected__10097__auto__",-674540963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10098__auto__","actual__10098__auto__",155516012,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_EQ__EQ_.cljs$lang$macro = true);

var ret__5804__auto___10142 = /**
 * Asserts 'non-equivalency'.
 *   When passed collections it will check that they do NOT have the same contents.
 *   For anything else it will assert that clojure.core/== returns false.
 */
speclj.core.should_not_EQ__EQ_ = (function speclj$core$should_not_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10118__auto__","extra__10118__auto__",-1768672005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10120__auto__","missing__10120__auto__",-2009966917,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__10118__auto__","extra__10118__auto__",-1768672005,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__10120__auto__","missing__10120__auto__",-2009966917,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"   to differ from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null," Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to ==: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__10116__auto__","expected__10116__auto__",-1440777545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10117__auto__","actual__10117__auto__",-36405300,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ__EQ_.cljs$lang$macro = true);

var ret__5804__auto___10211 = /**
 * Asserts that the form evaluates to a non-nil value
 */
speclj.core.should_not_be_nil = (function speclj$core$should_not_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not=","speclj.core/should-not=",-671600182,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_not_be_nil.cljs$lang$macro = true);

var ret__5804__auto___10212 = (function (){
/**
 * Forces a failure. An optional message may be passed in.
 */
speclj.core.should_fail = (function speclj$core$should_fail(var_args){
var G__10136 = arguments.length;
switch (G__10136) {
case 2:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-fail","speclj.core/should-fail",1593830201,null),null,(1),null)),(new cljs.core.List(null,"Forced failure",null,(1),null)))));
}));

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_fail.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.should_fail.cljs$lang$macro = true);

var ret__5804__auto___10214 = speclj.core._create_should_throw_failure = (function speclj$core$_create_should_throw_failure(_AMPERSAND_form,_AMPERSAND_env,expected,actual,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__10145__auto__","expected-name__10145__auto__",-243334639,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__10146__auto__","expected-gaps__10146__auto__",-301671987,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__10145__auto__","expected-name__10145__auto__",-243334639,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__10147__auto__","actual-string__10147__auto__",-683423227,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10148__auto__","actual__10148__auto__",-1999357207,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10148__auto__","actual__10148__auto__",-1999357207,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<nothing thrown>",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__10145__auto__","expected-name__10145__auto__",-243334639,null),null,(1),null)),(new cljs.core.List(null," thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"         ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__10146__auto__","expected-gaps__10146__auto__",-301671987,null),null,(1),null)),(new cljs.core.List(null,"     but got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__10147__auto__","actual-string__10147__auto__",-683423227,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._create_should_throw_failure.cljs$lang$macro = true);

var ret__5804__auto___10244 = (function (){
/**
 * Asserts that a Throwable is throws by the evaluation of a form.
 * When a class is passed, it asserts that the thrown Exception is an instance of the class.
 * There are three options for passing different kinds of predicates:
 *   - If a string, assert that the message of the Exception is equal to the string.
 *   - If a regex, asserts that the message of the Exception matches the regex.
 *   - If a function, assert that calling the function on the Exception returns a truthy value.
 */
speclj.core.should_throw = (function speclj$core$should_throw(var_args){
var G__10196 = arguments.length;
switch (G__10196) {
case 3:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","throwable","speclj.platform/throwable",-599125238,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10188__auto__","e__10188__auto__",-95229298,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.error","failure?","speclj.error/failure?",759354357,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10188__auto__","e__10188__auto__",-95229298,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10188__auto__","e__10188__auto__",-95229298,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10188__auto__","e__10188__auto__",-95229298,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10188__auto__","e__10188__auto__",-95229298,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10188__auto__","e__10188__auto__",-95229298,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,predicate,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10190__auto__","e__10190__auto__",-1334809027,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__10191__auto__","predicate__10191__auto__",-533127795,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__10191__auto__","predicate__10191__auto__",-533127795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-be-nil","speclj.core/should-not-be-nil",962725329,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__10191__auto__","predicate__10191__auto__",-533127795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10190__auto__","e__10190__auto__",-1334809027,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__10191__auto__","predicate__10191__auto__",-533127795,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__10191__auto__","predicate__10191__auto__",-533127795,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10190__auto__","e__10190__auto__",-1334809027,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__10191__auto__","predicate__10191__auto__",-533127795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10190__auto__","e__10190__auto__",-1334809027,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__10194__auto__","f__10194__auto__",-1481663359,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected exception predicate didn't match",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__10194__auto__","f__10194__auto__",-1481663359,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_throw.cljs$lang$macro = true);

var ret__5804__auto___10301 = /**
 * Asserts that nothing is thrown by the evaluation of a form.
 */
speclj.core.should_not_throw = (function speclj$core$should_not_throw(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10243__auto__","e__10243__auto__",363604598,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected nothing thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"                     but got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__10243__auto__","e__10243__auto__",363604598,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_throw.cljs$lang$macro = true);

var ret__5804__auto___10316 = /**
 * Asserts that the type of the given form derives from or equals the expected type
 */
speclj.core.should_be_a = (function speclj$core$should_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10284__auto__","actual__10284__auto__",405715329,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__10285__auto__","actual-type__10285__auto__",369061852,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10284__auto__","actual__10284__auto__",405715329,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__10286__auto__","expected-type__10286__auto__",1612841619,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__10285__auto__","actual-type__10285__auto__",369061852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__10286__auto__","expected-type__10286__auto__",1612841619,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10284__auto__","actual__10284__auto__",405715329,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to be an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__10286__auto__","expected-type__10286__auto__",1612841619,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"           but was an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__10285__auto__","actual-type__10285__auto__",369061852,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_a.cljs$lang$macro = true);

var ret__5804__auto___10329 = /**
 * Asserts that the type of the given form does not derive from or equal the expected type
 */
speclj.core.should_not_be_a = (function speclj$core$should_not_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10293__auto__","actual__10293__auto__",1806402481,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__10294__auto__","actual-type__10294__auto__",1183996167,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10293__auto__","actual__10293__auto__",1806402481,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__10295__auto__","expected-type__10295__auto__",2140333431,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__10294__auto__","actual-type__10294__auto__",1183996167,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__10295__auto__","expected-type__10295__auto__",2140333431,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__10293__auto__","actual__10293__auto__",1806402481,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to be an instance of ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__10295__auto__","expected-type__10295__auto__",2140333431,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," but was (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_a.cljs$lang$macro = true);

var ret__5804__auto___10344 = (function (){
/**
 * When added to a characteristic, it is marked as pending.  If a message is provided it will be printed
 *   in the run report
 */
speclj.core.pending = (function speclj$core$pending(var_args){
var G__10334 = arguments.length;
switch (G__10334) {
case 2:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.pending.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null)),(new cljs.core.List(null,"Not Yet Implemented",null,(1),null)))));
}));

(speclj.core.pending.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-pending","speclj.core/-new-pending",-74755942,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core.pending.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.pending.cljs$lang$macro = true);

var ret__5804__auto___10349 = (function (){
/**
 * Add tags to the containing context.  All values passed will be converted into keywords.  Contexts can be filtered
 *   at runtime by their tags.
 * 
 *   (tags :one :two)
 */
speclj.core.tags = (function speclj$core$tags(var_args){
var args__5755__auto__ = [];
var len__5749__auto___10350 = arguments.length;
var i__5750__auto___10351 = (0);
while(true){
if((i__5750__auto___10351 < len__5749__auto___10350)){
args__5755__auto__.push((arguments[i__5750__auto___10351]));

var G__10353 = (i__5750__auto___10351 + (1));
i__5750__auto___10351 = G__10353;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,values){
var tag_kws = cljs.core.mapv.call(null,cljs.core.keyword,values);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-tag","speclj.components/new-tag",-1937226080,null),null,(1),null)),(new cljs.core.List(null,tag_kws,null,(1),null)))));
}));

(speclj.core.tags.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.tags.cljs$lang$applyTo = (function (seq10341){
var G__10342 = cljs.core.first.call(null,seq10341);
var seq10341__$1 = cljs.core.next.call(null,seq10341);
var G__10343 = cljs.core.first.call(null,seq10341__$1);
var seq10341__$2 = cljs.core.next.call(null,seq10341__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10342,G__10343,seq10341__$2);
}));

return null;
})()
;
(speclj.core.tags.cljs$lang$macro = true);

var ret__5804__auto___10390 = /**
 * Add this to describe/context blocks that use stubs.  It will set up a clean recording environment.
 */
speclj.core.with_stubs = (function speclj$core$with_stubs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__10348__auto__","it__10348__auto__",-322860406,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__10348__auto__","it__10348__auto__",-322860406,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.with_stubs.cljs$lang$macro = true);

var ret__5804__auto___10391 = (function (){
/**
 * Creates a stub function.  Each call to the stub will be recorded and can later be looked up using the specified name.
 * 
 *   Options:
 *  :invoke - a function that will be invoked when the stub is invoked.  All the arguments passed to the stub will
 *    be passed to the :invoke value and its return value returned by the stub.
 *  :return - a value that will be returned by the stub.  This overrides the result of the :invoke value, if specified.
 *  :throw - an exception that will be thrown by the stub.
 */
speclj.core.stub = (function speclj$core$stub(var_args){
var G__10358 = arguments.length;
switch (G__10358) {
case 3:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.stub.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.stub.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))));
}));

(speclj.core.stub.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.stub.cljs$lang$macro = true);

var ret__5804__auto___10394 = (function (){
/**
 * Checks for invocations of the specified stub.
 * 
 *   Options:
 *  :times - the number of times the stub should have been invoked. nil means at least once. (default: nil)
 *  :with - a list of arguments that the stubs should have been invoked with.
 *    If not specified, anything goes.  Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (foo 1)
 *  (foo 2)
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (should-have-invoked :foo {:with [1] :times 1}) ; pass
 *  (should-have-invoked :foo {:with [2] :times 1}) ; pass
 *  (should-have-invoked :foo {:times 3}) ; fail
 *  (should-have-invoked :foo {:times 2}) ; pass
 *  (should-have-invoked :foo {:times 1}) ; fail
 *  (should-have-invoked :foo {:with [1]}) ; pass
 *  (should-have-invoked :foo {:with [2]}) ; pass
 *  )
 */
speclj.core.should_have_invoked = (function speclj$core$should_have_invoked(var_args){
var G__10389 = arguments.length;
switch (G__10389) {
case 3:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10375__auto__","name__10375__auto__",467299547,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10376__auto__","options__10376__auto__",731963098,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10375__auto__","name__10375__auto__",467299547,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10376__auto__","options__10376__auto__",731963098,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__10379__auto__","times?__10379__auto__",-202243699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__10380__auto__","check-params?__10380__auto__",1304705333,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10376__auto__","options__10376__auto__",731963098,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10376__auto__","options__10376__auto__",731963098,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__10382__auto__","invocations-str__10382__auto__",-1710870228,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10372__10383__auto__","p1__10372__10383__auto__",-1345109957,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10372__10383__auto__","p1__10372__10383__auto__",-1345109957,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"invocation",null,(1),null)),(new cljs.core.List(null,"invocations",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__10379__auto__","times?__10379__auto__",-202243699,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__10380__auto__","check-params?__10380__auto__",1304705333,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__10384__auto__","matching-invocations__10384__auto__",604570597,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10373__10385__auto__","p1__10373__10385__auto__",-430882597,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10373__10385__auto__","p1__10373__10385__auto__",-430882597,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10386__auto__","matching-count__10386__auto__",191507503,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__10384__auto__","matching-invocations__10384__auto__",604570597,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10386__auto__","matching-count__10386__auto__",191507503,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__10382__auto__","invocations-str__10382__auto__",-1710870228,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10375__auto__","name__10375__auto__",467299547,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10386__auto__","matching-count__10386__auto__",191507503,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__10382__auto__","invocations-str__10382__auto__",-1710870228,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10386__auto__","matching-count__10386__auto__",191507503,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__10380__auto__","check-params?__10380__auto__",1304705333,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10374__10387__auto__","p1__10374__10387__auto__",-326702483,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10374__10387__auto__","p1__10374__10387__auto__",-326702483,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10375__auto__","name__10375__auto__",467299547,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10381__auto__","with__10381__auto__",1535319981,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__10379__auto__","times?__10379__auto__",-202243699,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__10382__auto__","invocations-str__10382__auto__",-1710870228,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10378__auto__","times__10378__auto__",-2072764378,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10375__auto__","name__10375__auto__",467299547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: an invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10375__auto__","name__10375__auto__",467299547,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10377__auto__","invocations__10377__auto__",-1817683309,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_have_invoked.cljs$lang$macro = true);

var ret__5804__auto___10442 = (function (){
/**
 * Inverse of should-have-invoked.
 * 
 *   Options:
 *  :times - the number of times the stub should not have been invoked. nil means never. (default: nil)
 *  :with - a list of arguments that the stubs should not have been invoked with.
 *    If not specified, anything goes. Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (foo 1)
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (should-not-have-invoked :foo {:with [1] :times 1}) ; fail
 *  (should-not-have-invoked :foo {:times 3}) ; pass
 *  (should-not-have-invoked :foo {:times 1}) ; fail
 *  (should-not-have-invoked :foo {:with [1]}) ; fail
 *  )
 */
speclj.core.should_not_have_invoked = (function speclj$core$should_not_have_invoked(var_args){
var G__10412 = arguments.length;
switch (G__10412) {
case 3:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10398__auto__","name__10398__auto__",-253648521,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10399__auto__","options__10399__auto__",-1371348187,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10398__auto__","name__10398__auto__",-253648521,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10399__auto__","options__10399__auto__",-1371348187,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__10402__auto__","times?__10402__auto__",-1768961852,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__10403__auto__","check-params?__10403__auto__",-1623373198,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10399__auto__","options__10399__auto__",-1371348187,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10399__auto__","options__10399__auto__",-1371348187,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__10405__auto__","add-s__10405__auto__",1949919832,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10395__10406__auto__","p1__10395__10406__auto__",466328123,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10395__10406__auto__","p1__10395__10406__auto__",466328123,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,"s",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__10402__auto__","times?__10402__auto__",-1768961852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__10403__auto__","check-params?__10403__auto__",-1623373198,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__10407__auto__","matching-invocations__10407__auto__",-149406100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10396__10408__auto__","p1__10396__10408__auto__",1117530084,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10396__10408__auto__","p1__10396__10408__auto__",1117530084,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10409__auto__","matching-count__10409__auto__",-1189382067,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__10407__auto__","matching-invocations__10407__auto__",-149406100,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10409__auto__","matching-count__10409__auto__",-1189382067,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10398__auto__","name__10398__auto__",-253648521,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__10405__auto__","add-s__10405__auto__",1949919832,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10409__auto__","matching-count__10409__auto__",-1189382067,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10409__auto__","matching-count__10409__auto__",-1189382067,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__10405__auto__","add-s__10405__auto__",1949919832,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__10409__auto__","matching-count__10409__auto__",-1189382067,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__10402__auto__","times?__10402__auto__",-1768961852,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10398__auto__","name__10398__auto__",-253648521,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__10405__auto__","add-s__10405__auto__",1949919832,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__10405__auto__","add-s__10405__auto__",1949919832,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__10401__auto__","times__10401__auto__",361823079,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__10403__auto__","check-params?__10403__auto__",-1623373198,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10397__10410__auto__","p1__10397__10410__auto__",-897809308,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__10397__10410__auto__","p1__10397__10410__auto__",-897809308,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10398__auto__","name__10398__auto__",-253648521,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__10404__auto__","with__10404__auto__",847049074,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: 0 invocations of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__10398__auto__","name__10398__auto__",-253648521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__10400__auto__","invocations__10400__auto__",1432591942,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_not_have_invoked.cljs$lang$macro = true);

speclj.core._STAR_bound_by_should_invoke_STAR_ = false;
var ret__5804__auto___10469 = speclj.core.bound_by_should_invoke_QMARK_ = (function speclj$core$bound_by_should_invoke_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null)))));
});
(speclj.core.bound_by_should_invoke_QMARK_.cljs$lang$macro = true);

var ret__5804__auto___10470 = (function (){
speclj.core.with_stubbed_invocations = (function speclj$core$with_stubbed_invocations(var_args){
var args__5755__auto__ = [];
var len__5749__auto___10471 = arguments.length;
var i__5750__auto___10472 = (0);
while(true){
if((i__5750__auto___10472 < len__5749__auto___10471)){
args__5755__auto__.push((arguments[i__5750__auto___10472]));

var G__10473 = (i__5750__auto___10472 + (1));
i__5750__auto___10472 = G__10473;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","bound-by-should-invoke?","speclj.platform/bound-by-should-invoke?",2142036973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","*bound-by-should-invoke*","speclj.platform/*bound-by-should-invoke*",-572267866,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.with_stubbed_invocations.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.with_stubbed_invocations.cljs$lang$applyTo = (function (seq10444){
var G__10445 = cljs.core.first.call(null,seq10444);
var seq10444__$1 = cljs.core.next.call(null,seq10444);
var G__10446 = cljs.core.first.call(null,seq10444__$1);
var seq10444__$2 = cljs.core.next.call(null,seq10444__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10445,G__10446,seq10444__$2);
}));

return null;
})()
;
(speclj.core.with_stubbed_invocations.cljs$lang$macro = true);

var ret__5804__auto___10474 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks the invocations.
 * 
 *   (should-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3]))
 * 
 *   See stub and should-have-invoked for valid options.
 */
speclj.core.should_invoke = (function speclj$core$should_invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___10475 = arguments.length;
var i__5750__auto___10476 = (0);
while(true){
if((i__5750__auto___10476 < len__5749__auto___10475)){
args__5755__auto__.push((arguments[i__5750__auto___10476]));

var G__10477 = (i__5750__auto___10476 + (1));
i__5750__auto___10476 = G__10477;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10447__auto__","options__10447__auto__",-473374733,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10447__auto__","options__10447__auto__",-473374733,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10447__auto__","options__10447__auto__",-473374733,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_invoke.cljs$lang$applyTo = (function (seq10448){
var G__10449 = cljs.core.first.call(null,seq10448);
var seq10448__$1 = cljs.core.next.call(null,seq10448);
var G__10450 = cljs.core.first.call(null,seq10448__$1);
var seq10448__$2 = cljs.core.next.call(null,seq10448__$1);
var G__10451 = cljs.core.first.call(null,seq10448__$2);
var seq10448__$3 = cljs.core.next.call(null,seq10448__$2);
var G__10452 = cljs.core.first.call(null,seq10448__$3);
var seq10448__$4 = cljs.core.next.call(null,seq10448__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10449,G__10450,G__10451,G__10452,seq10448__$4);
}));

return null;
})()
;
(speclj.core.should_invoke.cljs$lang$macro = true);

var ret__5804__auto___10482 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks that it was NOT invoked.
 * 
 *   (should-not-invoke reverse {:with [1 2 3] :return [] :times 2} (reverse [1 2 3])) ; pass
 *   (should-not-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3])) ; fail
 * 
 *   See stub and should-not-have-invoked for valid options.
 */
speclj.core.should_not_invoke = (function speclj$core$should_not_invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___10484 = arguments.length;
var i__5750__auto___10485 = (0);
while(true){
if((i__5750__auto___10485 < len__5749__auto___10484)){
args__5755__auto__.push((arguments[i__5750__auto___10485]));

var G__10487 = (i__5750__auto___10485 + (1));
i__5750__auto___10485 = G__10487;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-not-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10461__auto__","options__10461__auto__",-455218252,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10461__auto__","options__10461__auto__",-455218252,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__10461__auto__","options__10461__auto__",-455218252,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_not_invoke.cljs$lang$applyTo = (function (seq10462){
var G__10463 = cljs.core.first.call(null,seq10462);
var seq10462__$1 = cljs.core.next.call(null,seq10462);
var G__10464 = cljs.core.first.call(null,seq10462__$1);
var seq10462__$2 = cljs.core.next.call(null,seq10462__$1);
var G__10465 = cljs.core.first.call(null,seq10462__$2);
var seq10462__$3 = cljs.core.next.call(null,seq10462__$2);
var G__10466 = cljs.core.first.call(null,seq10462__$3);
var seq10462__$4 = cljs.core.next.call(null,seq10462__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10463,G__10464,G__10465,G__10466,seq10462__$4);
}));

return null;
})()
;
(speclj.core.should_not_invoke.cljs$lang$macro = true);

var ret__5804__auto___10518 = /**
 * Asserts that the first numeric form is less than the second numeric form, using the built-in < function.
 */
speclj.core.should_LT_ = (function speclj$core$should_LT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10479__auto__","a__10479__auto__",1302999678,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10480__auto__","b__10480__auto__",777391410,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10479__auto__","a__10479__auto__",1302999678,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10480__auto__","b__10480__auto__",777391410,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10479__auto__","a__10479__auto__",1302999678,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10480__auto__","b__10480__auto__",777391410,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10479__auto__","a__10479__auto__",1302999678,null),null,(1),null)),(new cljs.core.List(null," to be less than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10480__auto__","b__10480__auto__",777391410,null),null,(1),null)),(new cljs.core.List(null," but got: (< ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10479__auto__","a__10479__auto__",1302999678,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10480__auto__","b__10480__auto__",777391410,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10479__auto__","a__10479__auto__",1302999678,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10480__auto__","b__10480__auto__",777391410,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT_.cljs$lang$macro = true);

var ret__5804__auto___10544 = /**
 * Asserts that the first numeric form is greater than the second numeric form, using the built-in > function.
 */
speclj.core.should_GT_ = (function speclj$core$should_GT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10494__auto__","a__10494__auto__",153472905,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10495__auto__","b__10495__auto__",-1452891216,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10494__auto__","a__10494__auto__",153472905,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10495__auto__","b__10495__auto__",-1452891216,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10494__auto__","a__10494__auto__",153472905,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10495__auto__","b__10495__auto__",-1452891216,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10494__auto__","a__10494__auto__",153472905,null),null,(1),null)),(new cljs.core.List(null," to be greater than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10495__auto__","b__10495__auto__",-1452891216,null),null,(1),null)),(new cljs.core.List(null," but got: (> ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10494__auto__","a__10494__auto__",153472905,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10495__auto__","b__10495__auto__",-1452891216,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10494__auto__","a__10494__auto__",153472905,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10495__auto__","b__10495__auto__",-1452891216,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT_.cljs$lang$macro = true);

var ret__5804__auto___10551 = /**
 * Asserts that the first numeric form is less than or equal to the second numeric form, using the built-in <= function.
 */
speclj.core.should_LT__EQ_ = (function speclj$core$should_LT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10516__auto__","a__10516__auto__",-2043821549,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10517__auto__","b__10517__auto__",-758011992,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10516__auto__","a__10516__auto__",-2043821549,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10517__auto__","b__10517__auto__",-758011992,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10516__auto__","a__10516__auto__",-2043821549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10517__auto__","b__10517__auto__",-758011992,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10516__auto__","a__10516__auto__",-2043821549,null),null,(1),null)),(new cljs.core.List(null," to be less than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10517__auto__","b__10517__auto__",-758011992,null),null,(1),null)),(new cljs.core.List(null," but got: (<= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10516__auto__","a__10516__auto__",-2043821549,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10517__auto__","b__10517__auto__",-758011992,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10516__auto__","a__10516__auto__",-2043821549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10517__auto__","b__10517__auto__",-758011992,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT__EQ_.cljs$lang$macro = true);

var ret__5804__auto___10561 = /**
 * Asserts that the first numeric form is greater than or equal to the second numeric form, using the built-in >= function.
 */
speclj.core.should_GT__EQ_ = (function speclj$core$should_GT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10527__auto__","a__10527__auto__",2139681035,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10528__auto__","b__10528__auto__",1303005397,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10527__auto__","a__10527__auto__",2139681035,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10528__auto__","b__10528__auto__",1303005397,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10527__auto__","a__10527__auto__",2139681035,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10528__auto__","b__10528__auto__",1303005397,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10527__auto__","a__10527__auto__",2139681035,null),null,(1),null)),(new cljs.core.List(null," to be greater than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10528__auto__","b__10528__auto__",1303005397,null),null,(1),null)),(new cljs.core.List(null," but got: (>= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10527__auto__","a__10527__auto__",2139681035,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10528__auto__","b__10528__auto__",1303005397,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__10527__auto__","a__10527__auto__",2139681035,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__10528__auto__","b__10528__auto__",1303005397,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT__EQ_.cljs$lang$macro = true);

var ret__5804__auto___10566 = speclj.core.run_specs = (function speclj$core$run_specs(_AMPERSAND_form,_AMPERSAND_env){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comment","cljs.core/comment",1774254937,null),null,(1),null)),(new cljs.core.List(null,"Ignoring run-specs for clojurescript",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","require","cljs.core/require",2107770869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.cli","speclj.cli",1577675379,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.run.standard","run-specs","speclj.run.standard/run-specs",-1568794497,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.run_specs.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map
