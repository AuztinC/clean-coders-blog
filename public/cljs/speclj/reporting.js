// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.sum_by = (function speclj$reporting$sum_by(f,coll){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,coll));
});
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return speclj.reporting.sum_by.call(null,(function (p1__6788_SHARP_){
return p1__6788_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__6790_SHARP_){
return p1__6790_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6793 = (function (reporter,message){
var x__5373__auto__ = (((reporter == null))?null:reporter);
var m__5374__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,reporter,message);
} else {
var m__5372__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6793.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6794 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6794.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6799 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6799.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6807 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6807.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6808 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6808.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6813 = (function (this$,results){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,results);
} else {
var m__5372__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6813.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6816 = (function (this$,exception){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,exception);
} else {
var m__5372__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6816.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,_reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6800 = cljs.core.seq.call(null,reporters);
var chunk__6801 = null;
var count__6802 = (0);
var i__6803 = (0);
while(true){
if((i__6803 < count__6802)){
var reporter = cljs.core._nth.call(null,chunk__6801,i__6803);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6825 = seq__6800;
var G__6826 = chunk__6801;
var G__6827 = count__6802;
var G__6828 = (i__6803 + (1));
seq__6800 = G__6825;
chunk__6801 = G__6826;
count__6802 = G__6827;
i__6803 = G__6828;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6800);
if(temp__5825__auto__){
var seq__6800__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6800__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6800__$1);
var G__6829 = cljs.core.chunk_rest.call(null,seq__6800__$1);
var G__6830 = c__5548__auto__;
var G__6831 = cljs.core.count.call(null,c__5548__auto__);
var G__6832 = (0);
seq__6800 = G__6829;
chunk__6801 = G__6830;
count__6802 = G__6831;
i__6803 = G__6832;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6800__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6833 = cljs.core.next.call(null,seq__6800__$1);
var G__6834 = null;
var G__6835 = (0);
var G__6836 = (0);
seq__6800 = G__6833;
chunk__6801 = G__6834;
count__6802 = G__6835;
i__6803 = G__6836;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6809 = cljs.core.seq.call(null,reporters);
var chunk__6810 = null;
var count__6811 = (0);
var i__6812 = (0);
while(true){
if((i__6812 < count__6811)){
var reporter = cljs.core._nth.call(null,chunk__6810,i__6812);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6838 = seq__6809;
var G__6839 = chunk__6810;
var G__6840 = count__6811;
var G__6841 = (i__6812 + (1));
seq__6809 = G__6838;
chunk__6810 = G__6839;
count__6811 = G__6840;
i__6812 = G__6841;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6809);
if(temp__5825__auto__){
var seq__6809__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6809__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6809__$1);
var G__6842 = cljs.core.chunk_rest.call(null,seq__6809__$1);
var G__6843 = c__5548__auto__;
var G__6844 = cljs.core.count.call(null,c__5548__auto__);
var G__6845 = (0);
seq__6809 = G__6842;
chunk__6810 = G__6843;
count__6811 = G__6844;
i__6812 = G__6845;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6809__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6847 = cljs.core.next.call(null,seq__6809__$1);
var G__6848 = null;
var G__6849 = (0);
var G__6850 = (0);
seq__6809 = G__6847;
chunk__6810 = G__6848;
count__6811 = G__6849;
i__6812 = G__6850;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6817 = cljs.core.seq.call(null,reporters);
var chunk__6818 = null;
var count__6819 = (0);
var i__6820 = (0);
while(true){
if((i__6820 < count__6819)){
var reporter = cljs.core._nth.call(null,chunk__6818,i__6820);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6852 = seq__6817;
var G__6853 = chunk__6818;
var G__6854 = count__6819;
var G__6855 = (i__6820 + (1));
seq__6817 = G__6852;
chunk__6818 = G__6853;
count__6819 = G__6854;
i__6820 = G__6855;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6817);
if(temp__5825__auto__){
var seq__6817__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6817__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6817__$1);
var G__6856 = cljs.core.chunk_rest.call(null,seq__6817__$1);
var G__6857 = c__5548__auto__;
var G__6858 = cljs.core.count.call(null,c__5548__auto__);
var G__6859 = (0);
seq__6817 = G__6856;
chunk__6818 = G__6857;
count__6819 = G__6858;
i__6820 = G__6859;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6817__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6862 = cljs.core.next.call(null,seq__6817__$1);
var G__6863 = null;
var G__6864 = (0);
var G__6865 = (0);
seq__6817 = G__6862;
chunk__6818 = G__6863;
count__6819 = G__6864;
i__6820 = G__6865;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6821 = cljs.core.seq.call(null,reporters);
var chunk__6822 = null;
var count__6823 = (0);
var i__6824 = (0);
while(true){
if((i__6824 < count__6823)){
var reporter = cljs.core._nth.call(null,chunk__6822,i__6824);
speclj.reporting.report_error.call(null,reporter,result);


var G__6866 = seq__6821;
var G__6867 = chunk__6822;
var G__6868 = count__6823;
var G__6869 = (i__6824 + (1));
seq__6821 = G__6866;
chunk__6822 = G__6867;
count__6823 = G__6868;
i__6824 = G__6869;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6821);
if(temp__5825__auto__){
var seq__6821__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6821__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6821__$1);
var G__6871 = cljs.core.chunk_rest.call(null,seq__6821__$1);
var G__6872 = c__5548__auto__;
var G__6873 = cljs.core.count.call(null,c__5548__auto__);
var G__6874 = (0);
seq__6821 = G__6871;
chunk__6822 = G__6872;
count__6823 = G__6873;
i__6824 = G__6874;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6821__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6875 = cljs.core.next.call(null,seq__6821__$1);
var G__6876 = null;
var G__6877 = (0);
var G__6878 = (0);
seq__6821 = G__6875;
chunk__6822 = G__6876;
count__6823 = G__6877;
i__6824 = G__6878;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6887 = speclj.platform.stack_trace.call(null,exception);
var elides_6888 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6887)){
var level_6889 = cljs.core.first.call(null,levels_6887);
if(speclj.platform.elide_level_QMARK_.call(null,level_6889)){
var G__6890 = cljs.core.rest.call(null,levels_6887);
var G__6891 = (elides_6888 + (1));
levels_6887 = G__6890;
elides_6888 = G__6891;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6888);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6889));

var G__6892 = cljs.core.rest.call(null,levels_6887);
var G__6893 = (0);
levels_6887 = G__6892;
elides_6888 = G__6893;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6888);
}
break;
}

var temp__5825__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,speclj.platform.error_str.call(null,exception));
} else {
cljs.core.println.call(null,speclj.platform.error_str.call(null,exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6880_6894 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6881_6895 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6882_6896 = true;
var _STAR_print_fn_STAR__temp_val__6883_6897 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6882_6896);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6883_6897);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6881_6895);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6880_6894);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6900 = arguments.length;
var i__5750__auto___6901 = (0);
while(true){
if((i__5750__auto___6901 < len__5749__auto___6900)){
args__5755__auto__.push((arguments[i__5750__auto___6901]));

var G__6902 = (i__5750__auto___6901 + (1));
i__5750__auto___6901 = G__6902;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6884_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6884_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6885){
var G__6886 = cljs.core.first.call(null,seq6885);
var seq6885__$1 = cljs.core.next.call(null,seq6885);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6886,seq6885__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6908 = arguments.length;
var i__5750__auto___6909 = (0);
while(true){
if((i__5750__auto___6909 < len__5749__auto___6908)){
args__5755__auto__.push((arguments[i__5750__auto___6909]));

var G__6910 = (i__5750__auto___6909 + (1));
i__5750__auto___6909 = G__6910;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6898){
var G__6899 = cljs.core.first.call(null,seq6898);
var seq6898__$1 = cljs.core.next.call(null,seq6898);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6899,seq6898__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6903 = cljs.core.seq.call(null,reporters);
var chunk__6904 = null;
var count__6905 = (0);
var i__6906 = (0);
while(true){
if((i__6906 < count__6905)){
var reporter = cljs.core._nth.call(null,chunk__6904,i__6906);
speclj.reporting.report_description.call(null,reporter,description);


var G__6915 = seq__6903;
var G__6916 = chunk__6904;
var G__6917 = count__6905;
var G__6918 = (i__6906 + (1));
seq__6903 = G__6915;
chunk__6904 = G__6916;
count__6905 = G__6917;
i__6906 = G__6918;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6903);
if(temp__5825__auto__){
var seq__6903__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6903__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6903__$1);
var G__6919 = cljs.core.chunk_rest.call(null,seq__6903__$1);
var G__6920 = c__5548__auto__;
var G__6921 = cljs.core.count.call(null,c__5548__auto__);
var G__6922 = (0);
seq__6903 = G__6919;
chunk__6904 = G__6920;
count__6905 = G__6921;
i__6906 = G__6922;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6903__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6923 = cljs.core.next.call(null,seq__6903__$1);
var G__6924 = null;
var G__6925 = (0);
var G__6926 = (0);
seq__6903 = G__6923;
chunk__6904 = G__6924;
count__6905 = G__6925;
i__6906 = G__6926;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6911 = cljs.core.seq.call(null,reporters);
var chunk__6912 = null;
var count__6913 = (0);
var i__6914 = (0);
while(true){
if((i__6914 < count__6913)){
var reporter = cljs.core._nth.call(null,chunk__6912,i__6914);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6931 = seq__6911;
var G__6932 = chunk__6912;
var G__6933 = count__6913;
var G__6934 = (i__6914 + (1));
seq__6911 = G__6931;
chunk__6912 = G__6932;
count__6913 = G__6933;
i__6914 = G__6934;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6911);
if(temp__5825__auto__){
var seq__6911__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6911__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6911__$1);
var G__6935 = cljs.core.chunk_rest.call(null,seq__6911__$1);
var G__6936 = c__5548__auto__;
var G__6937 = cljs.core.count.call(null,c__5548__auto__);
var G__6938 = (0);
seq__6911 = G__6935;
chunk__6912 = G__6936;
count__6913 = G__6937;
i__6914 = G__6938;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6911__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6939 = cljs.core.next.call(null,seq__6911__$1);
var G__6940 = null;
var G__6941 = (0);
var G__6942 = (0);
seq__6911 = G__6939;
chunk__6912 = G__6940;
count__6913 = G__6941;
i__6914 = G__6942;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6927 = cljs.core.seq.call(null,reporters);
var chunk__6928 = null;
var count__6929 = (0);
var i__6930 = (0);
while(true){
if((i__6930 < count__6929)){
var reporter = cljs.core._nth.call(null,chunk__6928,i__6930);
speclj.reporting.report_message.call(null,reporter,message);


var G__6947 = seq__6927;
var G__6948 = chunk__6928;
var G__6949 = count__6929;
var G__6950 = (i__6930 + (1));
seq__6927 = G__6947;
chunk__6928 = G__6948;
count__6929 = G__6949;
i__6930 = G__6950;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6927);
if(temp__5825__auto__){
var seq__6927__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6927__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6927__$1);
var G__6951 = cljs.core.chunk_rest.call(null,seq__6927__$1);
var G__6952 = c__5548__auto__;
var G__6953 = cljs.core.count.call(null,c__5548__auto__);
var G__6954 = (0);
seq__6927 = G__6951;
chunk__6928 = G__6952;
count__6929 = G__6953;
i__6930 = G__6954;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6927__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6955 = cljs.core.next.call(null,seq__6927__$1);
var G__6956 = null;
var G__6957 = (0);
var G__6958 = (0);
seq__6927 = G__6955;
chunk__6928 = G__6956;
count__6929 = G__6957;
i__6930 = G__6958;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6943 = cljs.core.seq.call(null,reporters);
var chunk__6944 = null;
var count__6945 = (0);
var i__6946 = (0);
while(true){
if((i__6946 < count__6945)){
var reporter = cljs.core._nth.call(null,chunk__6944,i__6946);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6959 = seq__6943;
var G__6960 = chunk__6944;
var G__6961 = count__6945;
var G__6962 = (i__6946 + (1));
seq__6943 = G__6959;
chunk__6944 = G__6960;
count__6945 = G__6961;
i__6946 = G__6962;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6943);
if(temp__5825__auto__){
var seq__6943__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6943__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6943__$1);
var G__6963 = cljs.core.chunk_rest.call(null,seq__6943__$1);
var G__6964 = c__5548__auto__;
var G__6965 = cljs.core.count.call(null,c__5548__auto__);
var G__6966 = (0);
seq__6943 = G__6963;
chunk__6944 = G__6964;
count__6945 = G__6965;
i__6946 = G__6966;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6943__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6967 = cljs.core.next.call(null,seq__6943__$1);
var G__6968 = null;
var G__6969 = (0);
var G__6970 = (0);
seq__6943 = G__6967;
chunk__6944 = G__6968;
count__6945 = G__6969;
i__6946 = G__6970;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
