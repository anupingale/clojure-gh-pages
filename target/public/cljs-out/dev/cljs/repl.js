// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12619){
var map__12620 = p__12619;
var map__12620__$1 = (((((!((map__12620 == null))))?(((((map__12620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12620):map__12620);
var m = map__12620__$1;
var n = cljs.core.get.call(null,map__12620__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12622_12654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12623_12655 = null;
var count__12624_12656 = (0);
var i__12625_12657 = (0);
while(true){
if((i__12625_12657 < count__12624_12656)){
var f_12658 = cljs.core._nth.call(null,chunk__12623_12655,i__12625_12657);
cljs.core.println.call(null,"  ",f_12658);


var G__12659 = seq__12622_12654;
var G__12660 = chunk__12623_12655;
var G__12661 = count__12624_12656;
var G__12662 = (i__12625_12657 + (1));
seq__12622_12654 = G__12659;
chunk__12623_12655 = G__12660;
count__12624_12656 = G__12661;
i__12625_12657 = G__12662;
continue;
} else {
var temp__5735__auto___12663 = cljs.core.seq.call(null,seq__12622_12654);
if(temp__5735__auto___12663){
var seq__12622_12664__$1 = temp__5735__auto___12663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12622_12664__$1)){
var c__4550__auto___12665 = cljs.core.chunk_first.call(null,seq__12622_12664__$1);
var G__12666 = cljs.core.chunk_rest.call(null,seq__12622_12664__$1);
var G__12667 = c__4550__auto___12665;
var G__12668 = cljs.core.count.call(null,c__4550__auto___12665);
var G__12669 = (0);
seq__12622_12654 = G__12666;
chunk__12623_12655 = G__12667;
count__12624_12656 = G__12668;
i__12625_12657 = G__12669;
continue;
} else {
var f_12670 = cljs.core.first.call(null,seq__12622_12664__$1);
cljs.core.println.call(null,"  ",f_12670);


var G__12671 = cljs.core.next.call(null,seq__12622_12664__$1);
var G__12672 = null;
var G__12673 = (0);
var G__12674 = (0);
seq__12622_12654 = G__12671;
chunk__12623_12655 = G__12672;
count__12624_12656 = G__12673;
i__12625_12657 = G__12674;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12675 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12675);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12675)))?cljs.core.second.call(null,arglists_12675):arglists_12675));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12626_12676 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12627_12677 = null;
var count__12628_12678 = (0);
var i__12629_12679 = (0);
while(true){
if((i__12629_12679 < count__12628_12678)){
var vec__12640_12680 = cljs.core._nth.call(null,chunk__12627_12677,i__12629_12679);
var name_12681 = cljs.core.nth.call(null,vec__12640_12680,(0),null);
var map__12643_12682 = cljs.core.nth.call(null,vec__12640_12680,(1),null);
var map__12643_12683__$1 = (((((!((map__12643_12682 == null))))?(((((map__12643_12682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12643_12682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12643_12682):map__12643_12682);
var doc_12684 = cljs.core.get.call(null,map__12643_12683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12685 = cljs.core.get.call(null,map__12643_12683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12681);

cljs.core.println.call(null," ",arglists_12685);

if(cljs.core.truth_(doc_12684)){
cljs.core.println.call(null," ",doc_12684);
} else {
}


var G__12686 = seq__12626_12676;
var G__12687 = chunk__12627_12677;
var G__12688 = count__12628_12678;
var G__12689 = (i__12629_12679 + (1));
seq__12626_12676 = G__12686;
chunk__12627_12677 = G__12687;
count__12628_12678 = G__12688;
i__12629_12679 = G__12689;
continue;
} else {
var temp__5735__auto___12690 = cljs.core.seq.call(null,seq__12626_12676);
if(temp__5735__auto___12690){
var seq__12626_12691__$1 = temp__5735__auto___12690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12626_12691__$1)){
var c__4550__auto___12692 = cljs.core.chunk_first.call(null,seq__12626_12691__$1);
var G__12693 = cljs.core.chunk_rest.call(null,seq__12626_12691__$1);
var G__12694 = c__4550__auto___12692;
var G__12695 = cljs.core.count.call(null,c__4550__auto___12692);
var G__12696 = (0);
seq__12626_12676 = G__12693;
chunk__12627_12677 = G__12694;
count__12628_12678 = G__12695;
i__12629_12679 = G__12696;
continue;
} else {
var vec__12645_12697 = cljs.core.first.call(null,seq__12626_12691__$1);
var name_12698 = cljs.core.nth.call(null,vec__12645_12697,(0),null);
var map__12648_12699 = cljs.core.nth.call(null,vec__12645_12697,(1),null);
var map__12648_12700__$1 = (((((!((map__12648_12699 == null))))?(((((map__12648_12699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12648_12699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12648_12699):map__12648_12699);
var doc_12701 = cljs.core.get.call(null,map__12648_12700__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12702 = cljs.core.get.call(null,map__12648_12700__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12698);

cljs.core.println.call(null," ",arglists_12702);

if(cljs.core.truth_(doc_12701)){
cljs.core.println.call(null," ",doc_12701);
} else {
}


var G__12703 = cljs.core.next.call(null,seq__12626_12691__$1);
var G__12704 = null;
var G__12705 = (0);
var G__12706 = (0);
seq__12626_12676 = G__12703;
chunk__12627_12677 = G__12704;
count__12628_12678 = G__12705;
i__12629_12679 = G__12706;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__12650 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12651 = null;
var count__12652 = (0);
var i__12653 = (0);
while(true){
if((i__12653 < count__12652)){
var role = cljs.core._nth.call(null,chunk__12651,i__12653);
var temp__5735__auto___12707__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___12707__$1)){
var spec_12708 = temp__5735__auto___12707__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12708));
} else {
}


var G__12709 = seq__12650;
var G__12710 = chunk__12651;
var G__12711 = count__12652;
var G__12712 = (i__12653 + (1));
seq__12650 = G__12709;
chunk__12651 = G__12710;
count__12652 = G__12711;
i__12653 = G__12712;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__12650);
if(temp__5735__auto____$1){
var seq__12650__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12650__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__12650__$1);
var G__12713 = cljs.core.chunk_rest.call(null,seq__12650__$1);
var G__12714 = c__4550__auto__;
var G__12715 = cljs.core.count.call(null,c__4550__auto__);
var G__12716 = (0);
seq__12650 = G__12713;
chunk__12651 = G__12714;
count__12652 = G__12715;
i__12653 = G__12716;
continue;
} else {
var role = cljs.core.first.call(null,seq__12650__$1);
var temp__5735__auto___12717__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___12717__$2)){
var spec_12718 = temp__5735__auto___12717__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12718));
} else {
}


var G__12719 = cljs.core.next.call(null,seq__12650__$1);
var G__12720 = null;
var G__12721 = (0);
var G__12722 = (0);
seq__12650 = G__12719;
chunk__12651 = G__12720;
count__12652 = G__12721;
i__12653 = G__12722;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__12723 = cljs.core.conj.call(null,via,t);
var G__12724 = cljs.core.ex_cause.call(null,t);
via = G__12723;
t = G__12724;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__12727 = datafied_throwable;
var map__12727__$1 = (((((!((map__12727 == null))))?(((((map__12727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12727):map__12727);
var via = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__12728 = cljs.core.last.call(null,via);
var map__12728__$1 = (((((!((map__12728 == null))))?(((((map__12728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12728):map__12728);
var type = cljs.core.get.call(null,map__12728__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__12728__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__12728__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__12729 = data;
var map__12729__$1 = (((((!((map__12729 == null))))?(((((map__12729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12729):map__12729);
var problems = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__12730 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__12730__$1 = (((((!((map__12730 == null))))?(((((map__12730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12730):map__12730);
var top_data = map__12730__$1;
var source = cljs.core.get.call(null,map__12730__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__12735 = phase;
var G__12735__$1 = (((G__12735 instanceof cljs.core.Keyword))?G__12735.fqn:null);
switch (G__12735__$1) {
case "read-source":
var map__12736 = data;
var map__12736__$1 = (((((!((map__12736 == null))))?(((((map__12736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12736):map__12736);
var line = cljs.core.get.call(null,map__12736__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12736__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__12738 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__12738__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12738,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12738);
var G__12738__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12738__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12738__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12738__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__12739 = top_data;
var G__12739__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__12739,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__12739);
var G__12739__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__12739__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__12739__$1);
var G__12739__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12739__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12739__$2);
var G__12739__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12739__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12739__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12739__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12739__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__12740 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12740,(0),null);
var method = cljs.core.nth.call(null,vec__12740,(1),null);
var file = cljs.core.nth.call(null,vec__12740,(2),null);
var line = cljs.core.nth.call(null,vec__12740,(3),null);
var G__12743 = top_data;
var G__12743__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__12743,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__12743);
var G__12743__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__12743__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__12743__$1);
var G__12743__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__12743__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__12743__$2);
var G__12743__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__12743__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__12743__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__12743__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__12743__$4;
}

break;
case "execution":
var vec__12744 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__12744,(0),null);
var method = cljs.core.nth.call(null,vec__12744,(1),null);
var file = cljs.core.nth.call(null,vec__12744,(2),null);
var line = cljs.core.nth.call(null,vec__12744,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__12744,source__$1,method,file,line,G__12735,G__12735__$1,map__12727,map__12727__$1,via,trace,phase,map__12728,map__12728__$1,type,message,data,map__12729,map__12729__$1,problems,fn,caller,map__12730,map__12730__$1,top_data,source){
return (function (p1__12726_SHARP_){
var or__4131__auto__ = (p1__12726_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__12726_SHARP_);
}
});})(vec__12744,source__$1,method,file,line,G__12735,G__12735__$1,map__12727,map__12727__$1,via,trace,phase,map__12728,map__12728__$1,type,message,data,map__12729,map__12729__$1,problems,fn,caller,map__12730,map__12730__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__12747 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__12747__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__12747,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__12747);
var G__12747__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__12747__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__12747__$1);
var G__12747__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__12747__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__12747__$2);
var G__12747__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__12747__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__12747__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__12747__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__12747__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12735__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__12751){
var map__12752 = p__12751;
var map__12752__$1 = (((((!((map__12752 == null))))?(((((map__12752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12752):map__12752);
var triage_data = map__12752__$1;
var phase = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__12754 = phase;
var G__12754__$1 = (((G__12754 instanceof cljs.core.Keyword))?G__12754.fqn:null);
switch (G__12754__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12755_12764 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12756_12765 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12757_12766 = true;
var _STAR_print_fn_STAR__temp_val__12758_12767 = ((function (_STAR_print_newline_STAR__orig_val__12755_12764,_STAR_print_fn_STAR__orig_val__12756_12765,_STAR_print_newline_STAR__temp_val__12757_12766,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12755_12764,_STAR_print_fn_STAR__orig_val__12756_12765,_STAR_print_newline_STAR__temp_val__12757_12766,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12757_12766;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12758_12767;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__12755_12764,_STAR_print_fn_STAR__orig_val__12756_12765,_STAR_print_newline_STAR__temp_val__12757_12766,_STAR_print_fn_STAR__temp_val__12758_12767,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__12755_12764,_STAR_print_fn_STAR__orig_val__12756_12765,_STAR_print_newline_STAR__temp_val__12757_12766,_STAR_print_fn_STAR__temp_val__12758_12767,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__12749_SHARP_){
return cljs.core.dissoc.call(null,p1__12749_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__12755_12764,_STAR_print_fn_STAR__orig_val__12756_12765,_STAR_print_newline_STAR__temp_val__12757_12766,_STAR_print_fn_STAR__temp_val__12758_12767,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__12755_12764,_STAR_print_fn_STAR__orig_val__12756_12765,_STAR_print_newline_STAR__temp_val__12757_12766,_STAR_print_fn_STAR__temp_val__12758_12767,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12756_12765;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12755_12764;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12759_12768 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12760_12769 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12761_12770 = true;
var _STAR_print_fn_STAR__temp_val__12762_12771 = ((function (_STAR_print_newline_STAR__orig_val__12759_12768,_STAR_print_fn_STAR__orig_val__12760_12769,_STAR_print_newline_STAR__temp_val__12761_12770,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__12759_12768,_STAR_print_fn_STAR__orig_val__12760_12769,_STAR_print_newline_STAR__temp_val__12761_12770,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12761_12770;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12762_12771;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__12759_12768,_STAR_print_fn_STAR__orig_val__12760_12769,_STAR_print_newline_STAR__temp_val__12761_12770,_STAR_print_fn_STAR__temp_val__12762_12771,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__12759_12768,_STAR_print_fn_STAR__orig_val__12760_12769,_STAR_print_newline_STAR__temp_val__12761_12770,_STAR_print_fn_STAR__temp_val__12762_12771,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__12750_SHARP_){
return cljs.core.dissoc.call(null,p1__12750_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__12759_12768,_STAR_print_fn_STAR__orig_val__12760_12769,_STAR_print_newline_STAR__temp_val__12761_12770,_STAR_print_fn_STAR__temp_val__12762_12771,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__12759_12768,_STAR_print_fn_STAR__orig_val__12760_12769,_STAR_print_newline_STAR__temp_val__12761_12770,_STAR_print_fn_STAR__temp_val__12762_12771,sb__4661__auto__,G__12754,G__12754__$1,loc,class_name,simple_class,cause_type,format,map__12752,map__12752__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12760_12769;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12759_12768;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12754__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
