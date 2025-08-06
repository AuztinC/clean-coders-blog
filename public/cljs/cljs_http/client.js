// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__5023__auto__ = v;
if(cljs.core.truth_(and__5023__auto__)){
return (v > (0));
} else {
return and__5023__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.conj.call(null,o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_.call(null,s)))){
return cljs.core.reduce.call(null,(function (p1__19447_SHARP_,p2__19446_SHARP_){
var vec__19448 = clojure.string.split.call(null,p2__19446_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__19448,(0),null);
var v = cljs.core.nth.call(null,vec__19448,(1),null);
return cljs.core.update.call(null,p1__19447_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),cljs_http.client.acc_param,no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_.call(null,url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode.call(null,cljs.core.name.call(null,k)),"=",no.en.core.url_encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__19451_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__19451_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__19452){
var vec__19453 = p__19452;
var k = cljs.core.nth.call(null,vec__19453,(0),null);
var v = cljs.core.nth.call(null,vec__19453,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,(function (p1__19456_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19456_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__5023__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5823__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5823__auto__)){
var params = temp__5823__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__19457_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19457_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19466 = arguments.length;
var i__5750__auto___19467 = (0);
while(true){
if((i__5750__auto___19467 < len__5749__auto___19466)){
args__5755__auto__.push((arguments[i__5750__auto___19467]));

var G__19468 = (i__5750__auto___19467 + (1));
i__5750__auto___19467 = G__19468;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19460){
var vec__19461 = p__19460;
var default_headers = cljs.core.nth.call(null,vec__19461,(0),null);
return (function (request){
var temp__5823__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var default_headers__$1 = temp__5823__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq19458){
var G__19459 = cljs.core.first.call(null,seq19458);
var seq19458__$1 = cljs.core.next.call(null,seq19458);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19459,seq19458__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19475 = arguments.length;
var i__5750__auto___19476 = (0);
while(true){
if((i__5750__auto___19476 < len__5749__auto___19475)){
args__5755__auto__.push((arguments[i__5750__auto___19476]));

var G__19477 = (i__5750__auto___19476 + (1));
i__5750__auto___19476 = G__19477;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19469){
var vec__19470 = p__19469;
var accept = cljs.core.nth.call(null,vec__19470,(0),null);
return (function (request){
var temp__5823__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var accept__$1 = temp__5823__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq19464){
var G__19465 = cljs.core.first.call(null,seq19464);
var seq19464__$1 = cljs.core.next.call(null,seq19464);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19465,seq19464__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19486 = arguments.length;
var i__5750__auto___19487 = (0);
while(true){
if((i__5750__auto___19487 < len__5749__auto___19486)){
args__5755__auto__.push((arguments[i__5750__auto___19487]));

var G__19488 = (i__5750__auto___19487 + (1));
i__5750__auto___19487 = G__19488;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19478){
var vec__19479 = p__19478;
var content_type = cljs.core.nth.call(null,vec__19479,(0),null);
return (function (request){
var temp__5823__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var content_type__$1 = temp__5823__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq19473){
var G__19474 = cljs.core.first.call(null,seq19473);
var seq19473__$1 = cljs.core.next.call(null,seq19473);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19474,seq19473__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5823__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5823__auto__)){
var params = temp__5823__auto__;
var map__19482 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__19482__$1 = cljs.core.__destructure_map.call(null,map__19482);
var encoding = cljs.core.get.call(null,map__19482__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__19482__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__19485 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__19485__$1 = cljs.core.__destructure_map.call(null,map__19485);
var decoding = cljs.core.get.call(null,map__19485__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__19485__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__19483_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__19483_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.call(null,(function (p1__19484_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19484_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5823__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5823__auto__)){
var params = temp__5823__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__19489_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19489_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__19490){
var map__19491 = p__19490;
var map__19491__$1 = cljs.core.__destructure_map.call(null,map__19491);
var req = map__19491__$1;
var query_params = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__19492){
var map__19493 = p__19492;
var map__19493__$1 = cljs.core.__destructure_map.call(null,map__19493);
var request = map__19493__$1;
var form_params = cljs.core.get.call(null,map__19493__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__19493__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__19493__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__5023__auto__ = form_params;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__5023__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__19494_19510 = cljs.core.seq.call(null,params);
var chunk__19495_19511 = null;
var count__19496_19512 = (0);
var i__19497_19513 = (0);
while(true){
if((i__19497_19513 < count__19496_19512)){
var vec__19504_19516 = cljs.core._nth.call(null,chunk__19495_19511,i__19497_19513);
var k_19517 = cljs.core.nth.call(null,vec__19504_19516,(0),null);
var v_19518 = cljs.core.nth.call(null,vec__19504_19516,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_19518)){
form_data.append(cljs.core.name.call(null,k_19517),cljs.core.first.call(null,v_19518),cljs.core.second.call(null,v_19518));
} else {
form_data.append(cljs.core.name.call(null,k_19517),v_19518);
}


var G__19519 = seq__19494_19510;
var G__19520 = chunk__19495_19511;
var G__19521 = count__19496_19512;
var G__19522 = (i__19497_19513 + (1));
seq__19494_19510 = G__19519;
chunk__19495_19511 = G__19520;
count__19496_19512 = G__19521;
i__19497_19513 = G__19522;
continue;
} else {
var temp__5825__auto___19523 = cljs.core.seq.call(null,seq__19494_19510);
if(temp__5825__auto___19523){
var seq__19494_19524__$1 = temp__5825__auto___19523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19494_19524__$1)){
var c__5548__auto___19525 = cljs.core.chunk_first.call(null,seq__19494_19524__$1);
var G__19526 = cljs.core.chunk_rest.call(null,seq__19494_19524__$1);
var G__19527 = c__5548__auto___19525;
var G__19528 = cljs.core.count.call(null,c__5548__auto___19525);
var G__19529 = (0);
seq__19494_19510 = G__19526;
chunk__19495_19511 = G__19527;
count__19496_19512 = G__19528;
i__19497_19513 = G__19529;
continue;
} else {
var vec__19507_19530 = cljs.core.first.call(null,seq__19494_19524__$1);
var k_19531 = cljs.core.nth.call(null,vec__19507_19530,(0),null);
var v_19532 = cljs.core.nth.call(null,vec__19507_19530,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_19532)){
form_data.append(cljs.core.name.call(null,k_19531),cljs.core.first.call(null,v_19532),cljs.core.second.call(null,v_19532));
} else {
form_data.append(cljs.core.name.call(null,k_19531),v_19532);
}


var G__19534 = cljs.core.next.call(null,seq__19494_19524__$1);
var G__19535 = null;
var G__19536 = (0);
var G__19537 = (0);
seq__19494_19510 = G__19534;
chunk__19495_19511 = G__19535;
count__19496_19512 = G__19536;
i__19497_19513 = G__19537;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__19514){
var map__19515 = p__19514;
var map__19515__$1 = cljs.core.__destructure_map.call(null,map__19515);
var request = map__19515__$1;
var multipart_params = cljs.core.get.call(null,map__19515__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__19515__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__5023__auto__ = multipart_params;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__5023__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5823__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__19533_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__19533_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__19539){
var map__19540 = p__19539;
var map__19540__$1 = cljs.core.__destructure_map.call(null,map__19540);
var req = map__19540__$1;
var query_params = cljs.core.get.call(null,map__19540__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5823__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5823__auto__)){
var spec = temp__5823__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__19538_SHARP_){
return cljs.core.merge.call(null,p1__19538_SHARP_,query_params);
})));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19547 = arguments.length;
var i__5750__auto___19548 = (0);
while(true){
if((i__5750__auto___19548 < len__5749__auto___19547)){
args__5755__auto__.push((arguments[i__5750__auto___19548]));

var G__19549 = (i__5750__auto___19548 + (1));
i__5750__auto___19548 = G__19549;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__19543){
var vec__19544 = p__19543;
var credentials = cljs.core.nth.call(null,vec__19544,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_.call(null,credentials__$1)))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq19541){
var G__19542 = cljs.core.first.call(null,seq19541);
var seq19541__$1 = cljs.core.next.call(null,seq19541);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19542,seq19541__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5823__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5823__auto__)){
var oauth_token = temp__5823__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5823__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5823__auto__)){
var custom_channel = temp__5823__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19558 = arguments.length;
var i__5750__auto___19559 = (0);
while(true){
if((i__5750__auto___19559 < len__5749__auto___19558)){
args__5755__auto__.push((arguments[i__5750__auto___19559]));

var G__19560 = (i__5750__auto___19559 + (1));
i__5750__auto___19559 = G__19560;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19552){
var vec__19553 = p__19552;
var req = cljs.core.nth.call(null,vec__19553,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq19550){
var G__19551 = cljs.core.first.call(null,seq19550);
var seq19550__$1 = cljs.core.next.call(null,seq19550);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19551,seq19550__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19567 = arguments.length;
var i__5750__auto___19568 = (0);
while(true){
if((i__5750__auto___19568 < len__5749__auto___19567)){
args__5755__auto__.push((arguments[i__5750__auto___19568]));

var G__19569 = (i__5750__auto___19568 + (1));
i__5750__auto___19568 = G__19569;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19561){
var vec__19562 = p__19561;
var req = cljs.core.nth.call(null,vec__19562,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq19556){
var G__19557 = cljs.core.first.call(null,seq19556);
var seq19556__$1 = cljs.core.next.call(null,seq19556);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19557,seq19556__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19580 = arguments.length;
var i__5750__auto___19581 = (0);
while(true){
if((i__5750__auto___19581 < len__5749__auto___19580)){
args__5755__auto__.push((arguments[i__5750__auto___19581]));

var G__19582 = (i__5750__auto___19581 + (1));
i__5750__auto___19581 = G__19582;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19570){
var vec__19571 = p__19570;
var req = cljs.core.nth.call(null,vec__19571,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq19565){
var G__19566 = cljs.core.first.call(null,seq19565);
var seq19565__$1 = cljs.core.next.call(null,seq19565);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19566,seq19565__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19585 = arguments.length;
var i__5750__auto___19586 = (0);
while(true){
if((i__5750__auto___19586 < len__5749__auto___19585)){
args__5755__auto__.push((arguments[i__5750__auto___19586]));

var G__19587 = (i__5750__auto___19586 + (1));
i__5750__auto___19586 = G__19587;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19576){
var vec__19577 = p__19576;
var req = cljs.core.nth.call(null,vec__19577,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq19574){
var G__19575 = cljs.core.first.call(null,seq19574);
var seq19574__$1 = cljs.core.next.call(null,seq19574);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19575,seq19574__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19594 = arguments.length;
var i__5750__auto___19595 = (0);
while(true){
if((i__5750__auto___19595 < len__5749__auto___19594)){
args__5755__auto__.push((arguments[i__5750__auto___19595]));

var G__19596 = (i__5750__auto___19595 + (1));
i__5750__auto___19595 = G__19596;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19588){
var vec__19589 = p__19588;
var req = cljs.core.nth.call(null,vec__19589,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq19583){
var G__19584 = cljs.core.first.call(null,seq19583);
var seq19583__$1 = cljs.core.next.call(null,seq19583);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19584,seq19583__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19603 = arguments.length;
var i__5750__auto___19604 = (0);
while(true){
if((i__5750__auto___19604 < len__5749__auto___19603)){
args__5755__auto__.push((arguments[i__5750__auto___19604]));

var G__19605 = (i__5750__auto___19604 + (1));
i__5750__auto___19604 = G__19605;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19597){
var vec__19598 = p__19597;
var req = cljs.core.nth.call(null,vec__19598,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq19592){
var G__19593 = cljs.core.first.call(null,seq19592);
var seq19592__$1 = cljs.core.next.call(null,seq19592);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19593,seq19592__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19612 = arguments.length;
var i__5750__auto___19613 = (0);
while(true){
if((i__5750__auto___19613 < len__5749__auto___19612)){
args__5755__auto__.push((arguments[i__5750__auto___19613]));

var G__19614 = (i__5750__auto___19613 + (1));
i__5750__auto___19613 = G__19614;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19606){
var vec__19607 = p__19606;
var req = cljs.core.nth.call(null,vec__19607,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq19601){
var G__19602 = cljs.core.first.call(null,seq19601);
var seq19601__$1 = cljs.core.next.call(null,seq19601);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19602,seq19601__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19621 = arguments.length;
var i__5750__auto___19622 = (0);
while(true){
if((i__5750__auto___19622 < len__5749__auto___19621)){
args__5755__auto__.push((arguments[i__5750__auto___19622]));

var G__19624 = (i__5750__auto___19622 + (1));
i__5750__auto___19622 = G__19624;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19615){
var vec__19616 = p__19615;
var req = cljs.core.nth.call(null,vec__19616,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq19610){
var G__19611 = cljs.core.first.call(null,seq19610);
var seq19610__$1 = cljs.core.next.call(null,seq19610);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19611,seq19610__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19628 = arguments.length;
var i__5750__auto___19629 = (0);
while(true){
if((i__5750__auto___19629 < len__5749__auto___19628)){
args__5755__auto__.push((arguments[i__5750__auto___19629]));

var G__19630 = (i__5750__auto___19629 + (1));
i__5750__auto___19629 = G__19630;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__19623){
var vec__19625 = p__19623;
var req = cljs.core.nth.call(null,vec__19625,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq19619){
var G__19620 = cljs.core.first.call(null,seq19619);
var seq19619__$1 = cljs.core.next.call(null,seq19619);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19620,seq19619__$1);
}));


//# sourceMappingURL=client.js.map
