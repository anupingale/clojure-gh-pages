// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20663){
var map__20664 = p__20663;
var map__20664__$1 = ((((!((map__20664 == null)))?(((((map__20664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20664):map__20664);
var m = map__20664__$1;
var n = cljs.core.get.call(null,map__20664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20666_20688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20667_20689 = null;
var count__20668_20690 = (0);
var i__20669_20691 = (0);
while(true){
if((i__20669_20691 < count__20668_20690)){
var f_20692 = cljs.core._nth.call(null,chunk__20667_20689,i__20669_20691);
cljs.core.println.call(null,"  ",f_20692);


var G__20693 = seq__20666_20688;
var G__20694 = chunk__20667_20689;
var G__20695 = count__20668_20690;
var G__20696 = (i__20669_20691 + (1));
seq__20666_20688 = G__20693;
chunk__20667_20689 = G__20694;
count__20668_20690 = G__20695;
i__20669_20691 = G__20696;
continue;
} else {
var temp__5457__auto___20697 = cljs.core.seq.call(null,seq__20666_20688);
if(temp__5457__auto___20697){
var seq__20666_20698__$1 = temp__5457__auto___20697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20666_20698__$1)){
var c__4351__auto___20699 = cljs.core.chunk_first.call(null,seq__20666_20698__$1);
var G__20700 = cljs.core.chunk_rest.call(null,seq__20666_20698__$1);
var G__20701 = c__4351__auto___20699;
var G__20702 = cljs.core.count.call(null,c__4351__auto___20699);
var G__20703 = (0);
seq__20666_20688 = G__20700;
chunk__20667_20689 = G__20701;
count__20668_20690 = G__20702;
i__20669_20691 = G__20703;
continue;
} else {
var f_20704 = cljs.core.first.call(null,seq__20666_20698__$1);
cljs.core.println.call(null,"  ",f_20704);


var G__20705 = cljs.core.next.call(null,seq__20666_20698__$1);
var G__20706 = null;
var G__20707 = (0);
var G__20708 = (0);
seq__20666_20688 = G__20705;
chunk__20667_20689 = G__20706;
count__20668_20690 = G__20707;
i__20669_20691 = G__20708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20709 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20709);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20709)))?cljs.core.second.call(null,arglists_20709):arglists_20709));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20670_20710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20671_20711 = null;
var count__20672_20712 = (0);
var i__20673_20713 = (0);
while(true){
if((i__20673_20713 < count__20672_20712)){
var vec__20674_20714 = cljs.core._nth.call(null,chunk__20671_20711,i__20673_20713);
var name_20715 = cljs.core.nth.call(null,vec__20674_20714,(0),null);
var map__20677_20716 = cljs.core.nth.call(null,vec__20674_20714,(1),null);
var map__20677_20717__$1 = ((((!((map__20677_20716 == null)))?(((((map__20677_20716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20677_20716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20677_20716):map__20677_20716);
var doc_20718 = cljs.core.get.call(null,map__20677_20717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20719 = cljs.core.get.call(null,map__20677_20717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20715);

cljs.core.println.call(null," ",arglists_20719);

if(cljs.core.truth_(doc_20718)){
cljs.core.println.call(null," ",doc_20718);
} else {
}


var G__20720 = seq__20670_20710;
var G__20721 = chunk__20671_20711;
var G__20722 = count__20672_20712;
var G__20723 = (i__20673_20713 + (1));
seq__20670_20710 = G__20720;
chunk__20671_20711 = G__20721;
count__20672_20712 = G__20722;
i__20673_20713 = G__20723;
continue;
} else {
var temp__5457__auto___20724 = cljs.core.seq.call(null,seq__20670_20710);
if(temp__5457__auto___20724){
var seq__20670_20725__$1 = temp__5457__auto___20724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20670_20725__$1)){
var c__4351__auto___20726 = cljs.core.chunk_first.call(null,seq__20670_20725__$1);
var G__20727 = cljs.core.chunk_rest.call(null,seq__20670_20725__$1);
var G__20728 = c__4351__auto___20726;
var G__20729 = cljs.core.count.call(null,c__4351__auto___20726);
var G__20730 = (0);
seq__20670_20710 = G__20727;
chunk__20671_20711 = G__20728;
count__20672_20712 = G__20729;
i__20673_20713 = G__20730;
continue;
} else {
var vec__20679_20731 = cljs.core.first.call(null,seq__20670_20725__$1);
var name_20732 = cljs.core.nth.call(null,vec__20679_20731,(0),null);
var map__20682_20733 = cljs.core.nth.call(null,vec__20679_20731,(1),null);
var map__20682_20734__$1 = ((((!((map__20682_20733 == null)))?(((((map__20682_20733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20682_20733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20682_20733):map__20682_20733);
var doc_20735 = cljs.core.get.call(null,map__20682_20734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20736 = cljs.core.get.call(null,map__20682_20734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20732);

cljs.core.println.call(null," ",arglists_20736);

if(cljs.core.truth_(doc_20735)){
cljs.core.println.call(null," ",doc_20735);
} else {
}


var G__20737 = cljs.core.next.call(null,seq__20670_20725__$1);
var G__20738 = null;
var G__20739 = (0);
var G__20740 = (0);
seq__20670_20710 = G__20737;
chunk__20671_20711 = G__20738;
count__20672_20712 = G__20739;
i__20673_20713 = G__20740;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__20684 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20685 = null;
var count__20686 = (0);
var i__20687 = (0);
while(true){
if((i__20687 < count__20686)){
var role = cljs.core._nth.call(null,chunk__20685,i__20687);
var temp__5457__auto___20741__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___20741__$1)){
var spec_20742 = temp__5457__auto___20741__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20742));
} else {
}


var G__20743 = seq__20684;
var G__20744 = chunk__20685;
var G__20745 = count__20686;
var G__20746 = (i__20687 + (1));
seq__20684 = G__20743;
chunk__20685 = G__20744;
count__20686 = G__20745;
i__20687 = G__20746;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__20684);
if(temp__5457__auto____$1){
var seq__20684__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20684__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__20684__$1);
var G__20747 = cljs.core.chunk_rest.call(null,seq__20684__$1);
var G__20748 = c__4351__auto__;
var G__20749 = cljs.core.count.call(null,c__4351__auto__);
var G__20750 = (0);
seq__20684 = G__20747;
chunk__20685 = G__20748;
count__20686 = G__20749;
i__20687 = G__20750;
continue;
} else {
var role = cljs.core.first.call(null,seq__20684__$1);
var temp__5457__auto___20751__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___20751__$2)){
var spec_20752 = temp__5457__auto___20751__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20752));
} else {
}


var G__20753 = cljs.core.next.call(null,seq__20684__$1);
var G__20754 = null;
var G__20755 = (0);
var G__20756 = (0);
seq__20684 = G__20753;
chunk__20685 = G__20754;
count__20686 = G__20755;
i__20687 = G__20756;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
