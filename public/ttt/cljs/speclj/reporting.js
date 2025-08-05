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
return speclj.reporting.sum_by.call(null,(function (p1__7027_SHARP_){
return p1__7027_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__7028_SHARP_){
return p1__7028_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_7035 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_7035.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_7036 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_7036.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_7037 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_7037.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_7042 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_7042.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_7043 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_7043.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_7044 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_7044.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_7045 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_7045.call(null,this$,exception);
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
var seq__7038 = cljs.core.seq.call(null,reporters);
var chunk__7039 = null;
var count__7040 = (0);
var i__7041 = (0);
while(true){
if((i__7041 < count__7040)){
var reporter = cljs.core._nth.call(null,chunk__7039,i__7041);
speclj.reporting.report_pass.call(null,reporter,result);


var G__7050 = seq__7038;
var G__7051 = chunk__7039;
var G__7052 = count__7040;
var G__7053 = (i__7041 + (1));
seq__7038 = G__7050;
chunk__7039 = G__7051;
count__7040 = G__7052;
i__7041 = G__7053;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7038);
if(temp__5825__auto__){
var seq__7038__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7038__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7038__$1);
var G__7054 = cljs.core.chunk_rest.call(null,seq__7038__$1);
var G__7055 = c__5548__auto__;
var G__7056 = cljs.core.count.call(null,c__5548__auto__);
var G__7057 = (0);
seq__7038 = G__7054;
chunk__7039 = G__7055;
count__7040 = G__7056;
i__7041 = G__7057;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7038__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__7058 = cljs.core.next.call(null,seq__7038__$1);
var G__7059 = null;
var G__7060 = (0);
var G__7061 = (0);
seq__7038 = G__7058;
chunk__7039 = G__7059;
count__7040 = G__7060;
i__7041 = G__7061;
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
var seq__7046 = cljs.core.seq.call(null,reporters);
var chunk__7047 = null;
var count__7048 = (0);
var i__7049 = (0);
while(true){
if((i__7049 < count__7048)){
var reporter = cljs.core._nth.call(null,chunk__7047,i__7049);
speclj.reporting.report_fail.call(null,reporter,result);


var G__7066 = seq__7046;
var G__7067 = chunk__7047;
var G__7068 = count__7048;
var G__7069 = (i__7049 + (1));
seq__7046 = G__7066;
chunk__7047 = G__7067;
count__7048 = G__7068;
i__7049 = G__7069;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7046);
if(temp__5825__auto__){
var seq__7046__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7046__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7046__$1);
var G__7070 = cljs.core.chunk_rest.call(null,seq__7046__$1);
var G__7071 = c__5548__auto__;
var G__7072 = cljs.core.count.call(null,c__5548__auto__);
var G__7073 = (0);
seq__7046 = G__7070;
chunk__7047 = G__7071;
count__7048 = G__7072;
i__7049 = G__7073;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7046__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__7074 = cljs.core.next.call(null,seq__7046__$1);
var G__7075 = null;
var G__7076 = (0);
var G__7077 = (0);
seq__7046 = G__7074;
chunk__7047 = G__7075;
count__7048 = G__7076;
i__7049 = G__7077;
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
var seq__7062 = cljs.core.seq.call(null,reporters);
var chunk__7063 = null;
var count__7064 = (0);
var i__7065 = (0);
while(true){
if((i__7065 < count__7064)){
var reporter = cljs.core._nth.call(null,chunk__7063,i__7065);
speclj.reporting.report_pending.call(null,reporter,result);


var G__7082 = seq__7062;
var G__7083 = chunk__7063;
var G__7084 = count__7064;
var G__7085 = (i__7065 + (1));
seq__7062 = G__7082;
chunk__7063 = G__7083;
count__7064 = G__7084;
i__7065 = G__7085;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7062);
if(temp__5825__auto__){
var seq__7062__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7062__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7062__$1);
var G__7086 = cljs.core.chunk_rest.call(null,seq__7062__$1);
var G__7087 = c__5548__auto__;
var G__7088 = cljs.core.count.call(null,c__5548__auto__);
var G__7089 = (0);
seq__7062 = G__7086;
chunk__7063 = G__7087;
count__7064 = G__7088;
i__7065 = G__7089;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7062__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__7090 = cljs.core.next.call(null,seq__7062__$1);
var G__7091 = null;
var G__7092 = (0);
var G__7093 = (0);
seq__7062 = G__7090;
chunk__7063 = G__7091;
count__7064 = G__7092;
i__7065 = G__7093;
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
var seq__7078 = cljs.core.seq.call(null,reporters);
var chunk__7079 = null;
var count__7080 = (0);
var i__7081 = (0);
while(true){
if((i__7081 < count__7080)){
var reporter = cljs.core._nth.call(null,chunk__7079,i__7081);
speclj.reporting.report_error.call(null,reporter,result);


var G__7098 = seq__7078;
var G__7099 = chunk__7079;
var G__7100 = count__7080;
var G__7101 = (i__7081 + (1));
seq__7078 = G__7098;
chunk__7079 = G__7099;
count__7080 = G__7100;
i__7081 = G__7101;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7078);
if(temp__5825__auto__){
var seq__7078__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7078__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7078__$1);
var G__7102 = cljs.core.chunk_rest.call(null,seq__7078__$1);
var G__7103 = c__5548__auto__;
var G__7104 = cljs.core.count.call(null,c__5548__auto__);
var G__7105 = (0);
seq__7078 = G__7102;
chunk__7079 = G__7103;
count__7080 = G__7104;
i__7081 = G__7105;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7078__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__7106 = cljs.core.next.call(null,seq__7078__$1);
var G__7107 = null;
var G__7108 = (0);
var G__7109 = (0);
seq__7078 = G__7106;
chunk__7079 = G__7107;
count__7080 = G__7108;
i__7081 = G__7109;
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
var levels_7114 = speclj.platform.stack_trace.call(null,exception);
var elides_7115 = (0);
while(true){
if(cljs.core.seq.call(null,levels_7114)){
var level_7116 = cljs.core.first.call(null,levels_7114);
if(speclj.platform.elide_level_QMARK_.call(null,level_7116)){
var G__7117 = cljs.core.rest.call(null,levels_7114);
var G__7118 = (elides_7115 + (1));
levels_7114 = G__7117;
elides_7115 = G__7118;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_7115);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_7116));

var G__7119 = cljs.core.rest.call(null,levels_7114);
var G__7120 = (0);
levels_7114 = G__7119;
elides_7115 = G__7120;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_7115);
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
var _STAR_print_newline_STAR__orig_val__7121_7128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7122_7129 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7123_7130 = true;
var _STAR_print_fn_STAR__temp_val__7124_7131 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7123_7130);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7124_7131);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7122_7129);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7121_7128);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___7132 = arguments.length;
var i__5750__auto___7134 = (0);
while(true){
if((i__5750__auto___7134 < len__5749__auto___7132)){
args__5755__auto__.push((arguments[i__5750__auto___7134]));

var G__7136 = (i__5750__auto___7134 + (1));
i__5750__auto___7134 = G__7136;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__7125_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7125_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq7126){
var G__7127 = cljs.core.first.call(null,seq7126);
var seq7126__$1 = cljs.core.next.call(null,seq7126);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7127,seq7126__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___7141 = arguments.length;
var i__5750__auto___7142 = (0);
while(true){
if((i__5750__auto___7142 < len__5749__auto___7141)){
args__5755__auto__.push((arguments[i__5750__auto___7142]));

var G__7143 = (i__5750__auto___7142 + (1));
i__5750__auto___7142 = G__7143;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq7133){
var G__7135 = cljs.core.first.call(null,seq7133);
var seq7133__$1 = cljs.core.next.call(null,seq7133);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7135,seq7133__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__7137 = cljs.core.seq.call(null,reporters);
var chunk__7138 = null;
var count__7139 = (0);
var i__7140 = (0);
while(true){
if((i__7140 < count__7139)){
var reporter = cljs.core._nth.call(null,chunk__7138,i__7140);
speclj.reporting.report_description.call(null,reporter,description);


var G__7144 = seq__7137;
var G__7145 = chunk__7138;
var G__7146 = count__7139;
var G__7147 = (i__7140 + (1));
seq__7137 = G__7144;
chunk__7138 = G__7145;
count__7139 = G__7146;
i__7140 = G__7147;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7137);
if(temp__5825__auto__){
var seq__7137__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7137__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7137__$1);
var G__7152 = cljs.core.chunk_rest.call(null,seq__7137__$1);
var G__7153 = c__5548__auto__;
var G__7154 = cljs.core.count.call(null,c__5548__auto__);
var G__7155 = (0);
seq__7137 = G__7152;
chunk__7138 = G__7153;
count__7139 = G__7154;
i__7140 = G__7155;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7137__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__7156 = cljs.core.next.call(null,seq__7137__$1);
var G__7157 = null;
var G__7158 = (0);
var G__7159 = (0);
seq__7137 = G__7156;
chunk__7138 = G__7157;
count__7139 = G__7158;
i__7140 = G__7159;
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
var seq__7148 = cljs.core.seq.call(null,reporters);
var chunk__7149 = null;
var count__7150 = (0);
var i__7151 = (0);
while(true){
if((i__7151 < count__7150)){
var reporter = cljs.core._nth.call(null,chunk__7149,i__7151);
speclj.reporting.report_runs.call(null,reporter,results);


var G__7164 = seq__7148;
var G__7165 = chunk__7149;
var G__7166 = count__7150;
var G__7167 = (i__7151 + (1));
seq__7148 = G__7164;
chunk__7149 = G__7165;
count__7150 = G__7166;
i__7151 = G__7167;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7148);
if(temp__5825__auto__){
var seq__7148__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7148__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7148__$1);
var G__7168 = cljs.core.chunk_rest.call(null,seq__7148__$1);
var G__7169 = c__5548__auto__;
var G__7170 = cljs.core.count.call(null,c__5548__auto__);
var G__7171 = (0);
seq__7148 = G__7168;
chunk__7149 = G__7169;
count__7150 = G__7170;
i__7151 = G__7171;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7148__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__7172 = cljs.core.next.call(null,seq__7148__$1);
var G__7173 = null;
var G__7174 = (0);
var G__7175 = (0);
seq__7148 = G__7172;
chunk__7149 = G__7173;
count__7150 = G__7174;
i__7151 = G__7175;
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
var seq__7160 = cljs.core.seq.call(null,reporters);
var chunk__7161 = null;
var count__7162 = (0);
var i__7163 = (0);
while(true){
if((i__7163 < count__7162)){
var reporter = cljs.core._nth.call(null,chunk__7161,i__7163);
speclj.reporting.report_message.call(null,reporter,message);


var G__7180 = seq__7160;
var G__7181 = chunk__7161;
var G__7182 = count__7162;
var G__7183 = (i__7163 + (1));
seq__7160 = G__7180;
chunk__7161 = G__7181;
count__7162 = G__7182;
i__7163 = G__7183;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7160);
if(temp__5825__auto__){
var seq__7160__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7160__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7160__$1);
var G__7184 = cljs.core.chunk_rest.call(null,seq__7160__$1);
var G__7185 = c__5548__auto__;
var G__7186 = cljs.core.count.call(null,c__5548__auto__);
var G__7187 = (0);
seq__7160 = G__7184;
chunk__7161 = G__7185;
count__7162 = G__7186;
i__7163 = G__7187;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7160__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__7188 = cljs.core.next.call(null,seq__7160__$1);
var G__7189 = null;
var G__7190 = (0);
var G__7191 = (0);
seq__7160 = G__7188;
chunk__7161 = G__7189;
count__7162 = G__7190;
i__7163 = G__7191;
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
var seq__7176 = cljs.core.seq.call(null,reporters);
var chunk__7177 = null;
var count__7178 = (0);
var i__7179 = (0);
while(true){
if((i__7179 < count__7178)){
var reporter = cljs.core._nth.call(null,chunk__7177,i__7179);
speclj.reporting.report_error.call(null,reporter,exception);


var G__7192 = seq__7176;
var G__7193 = chunk__7177;
var G__7194 = count__7178;
var G__7195 = (i__7179 + (1));
seq__7176 = G__7192;
chunk__7177 = G__7193;
count__7178 = G__7194;
i__7179 = G__7195;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__7176);
if(temp__5825__auto__){
var seq__7176__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7176__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__7176__$1);
var G__7196 = cljs.core.chunk_rest.call(null,seq__7176__$1);
var G__7197 = c__5548__auto__;
var G__7198 = cljs.core.count.call(null,c__5548__auto__);
var G__7199 = (0);
seq__7176 = G__7196;
chunk__7177 = G__7197;
count__7178 = G__7198;
i__7179 = G__7199;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7176__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__7200 = cljs.core.next.call(null,seq__7176__$1);
var G__7201 = null;
var G__7202 = (0);
var G__7203 = (0);
seq__7176 = G__7200;
chunk__7177 = G__7201;
count__7178 = G__7202;
i__7179 = G__7203;
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
