// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1484){
var map__1485 = p__1484;
var map__1485__$1 = (((((!((map__1485 == null))))?(((((map__1485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1485):map__1485);
var m = map__1485__$1;
var n = cljs.core.get.call(null,map__1485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1487_1519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1488_1520 = null;
var count__1489_1521 = (0);
var i__1490_1522 = (0);
while(true){
if((i__1490_1522 < count__1489_1521)){
var f_1523 = cljs.core._nth.call(null,chunk__1488_1520,i__1490_1522);
cljs.core.println.call(null,"  ",f_1523);


var G__1524 = seq__1487_1519;
var G__1525 = chunk__1488_1520;
var G__1526 = count__1489_1521;
var G__1527 = (i__1490_1522 + (1));
seq__1487_1519 = G__1524;
chunk__1488_1520 = G__1525;
count__1489_1521 = G__1526;
i__1490_1522 = G__1527;
continue;
} else {
var temp__5735__auto___1528 = cljs.core.seq.call(null,seq__1487_1519);
if(temp__5735__auto___1528){
var seq__1487_1529__$1 = temp__5735__auto___1528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1487_1529__$1)){
var c__4550__auto___1530 = cljs.core.chunk_first.call(null,seq__1487_1529__$1);
var G__1531 = cljs.core.chunk_rest.call(null,seq__1487_1529__$1);
var G__1532 = c__4550__auto___1530;
var G__1533 = cljs.core.count.call(null,c__4550__auto___1530);
var G__1534 = (0);
seq__1487_1519 = G__1531;
chunk__1488_1520 = G__1532;
count__1489_1521 = G__1533;
i__1490_1522 = G__1534;
continue;
} else {
var f_1535 = cljs.core.first.call(null,seq__1487_1529__$1);
cljs.core.println.call(null,"  ",f_1535);


var G__1536 = cljs.core.next.call(null,seq__1487_1529__$1);
var G__1537 = null;
var G__1538 = (0);
var G__1539 = (0);
seq__1487_1519 = G__1536;
chunk__1488_1520 = G__1537;
count__1489_1521 = G__1538;
i__1490_1522 = G__1539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1540 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1540);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1540)))?cljs.core.second.call(null,arglists_1540):arglists_1540));
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
var seq__1491_1541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1492_1542 = null;
var count__1493_1543 = (0);
var i__1494_1544 = (0);
while(true){
if((i__1494_1544 < count__1493_1543)){
var vec__1505_1545 = cljs.core._nth.call(null,chunk__1492_1542,i__1494_1544);
var name_1546 = cljs.core.nth.call(null,vec__1505_1545,(0),null);
var map__1508_1547 = cljs.core.nth.call(null,vec__1505_1545,(1),null);
var map__1508_1548__$1 = (((((!((map__1508_1547 == null))))?(((((map__1508_1547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1508_1547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1508_1547):map__1508_1547);
var doc_1549 = cljs.core.get.call(null,map__1508_1548__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1550 = cljs.core.get.call(null,map__1508_1548__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1546);

cljs.core.println.call(null," ",arglists_1550);

if(cljs.core.truth_(doc_1549)){
cljs.core.println.call(null," ",doc_1549);
} else {
}


var G__1551 = seq__1491_1541;
var G__1552 = chunk__1492_1542;
var G__1553 = count__1493_1543;
var G__1554 = (i__1494_1544 + (1));
seq__1491_1541 = G__1551;
chunk__1492_1542 = G__1552;
count__1493_1543 = G__1553;
i__1494_1544 = G__1554;
continue;
} else {
var temp__5735__auto___1555 = cljs.core.seq.call(null,seq__1491_1541);
if(temp__5735__auto___1555){
var seq__1491_1556__$1 = temp__5735__auto___1555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1491_1556__$1)){
var c__4550__auto___1557 = cljs.core.chunk_first.call(null,seq__1491_1556__$1);
var G__1558 = cljs.core.chunk_rest.call(null,seq__1491_1556__$1);
var G__1559 = c__4550__auto___1557;
var G__1560 = cljs.core.count.call(null,c__4550__auto___1557);
var G__1561 = (0);
seq__1491_1541 = G__1558;
chunk__1492_1542 = G__1559;
count__1493_1543 = G__1560;
i__1494_1544 = G__1561;
continue;
} else {
var vec__1510_1562 = cljs.core.first.call(null,seq__1491_1556__$1);
var name_1563 = cljs.core.nth.call(null,vec__1510_1562,(0),null);
var map__1513_1564 = cljs.core.nth.call(null,vec__1510_1562,(1),null);
var map__1513_1565__$1 = (((((!((map__1513_1564 == null))))?(((((map__1513_1564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1513_1564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1513_1564):map__1513_1564);
var doc_1566 = cljs.core.get.call(null,map__1513_1565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1567 = cljs.core.get.call(null,map__1513_1565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1563);

cljs.core.println.call(null," ",arglists_1567);

if(cljs.core.truth_(doc_1566)){
cljs.core.println.call(null," ",doc_1566);
} else {
}


var G__1568 = cljs.core.next.call(null,seq__1491_1556__$1);
var G__1569 = null;
var G__1570 = (0);
var G__1571 = (0);
seq__1491_1541 = G__1568;
chunk__1492_1542 = G__1569;
count__1493_1543 = G__1570;
i__1494_1544 = G__1571;
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

var seq__1515 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1516 = null;
var count__1517 = (0);
var i__1518 = (0);
while(true){
if((i__1518 < count__1517)){
var role = cljs.core._nth.call(null,chunk__1516,i__1518);
var temp__5735__auto___1572__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1572__$1)){
var spec_1573 = temp__5735__auto___1572__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1573));
} else {
}


var G__1574 = seq__1515;
var G__1575 = chunk__1516;
var G__1576 = count__1517;
var G__1577 = (i__1518 + (1));
seq__1515 = G__1574;
chunk__1516 = G__1575;
count__1517 = G__1576;
i__1518 = G__1577;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__1515);
if(temp__5735__auto____$1){
var seq__1515__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1515__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1515__$1);
var G__1578 = cljs.core.chunk_rest.call(null,seq__1515__$1);
var G__1579 = c__4550__auto__;
var G__1580 = cljs.core.count.call(null,c__4550__auto__);
var G__1581 = (0);
seq__1515 = G__1578;
chunk__1516 = G__1579;
count__1517 = G__1580;
i__1518 = G__1581;
continue;
} else {
var role = cljs.core.first.call(null,seq__1515__$1);
var temp__5735__auto___1582__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1582__$2)){
var spec_1583 = temp__5735__auto___1582__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1583));
} else {
}


var G__1584 = cljs.core.next.call(null,seq__1515__$1);
var G__1585 = null;
var G__1586 = (0);
var G__1587 = (0);
seq__1515 = G__1584;
chunk__1516 = G__1585;
count__1517 = G__1586;
i__1518 = G__1587;
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
var G__1588 = cljs.core.conj.call(null,via,t);
var G__1589 = cljs.core.ex_cause.call(null,t);
via = G__1588;
t = G__1589;
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
var map__1592 = datafied_throwable;
var map__1592__$1 = (((((!((map__1592 == null))))?(((((map__1592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1592):map__1592);
var via = cljs.core.get.call(null,map__1592__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1592__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1592__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1593 = cljs.core.last.call(null,via);
var map__1593__$1 = (((((!((map__1593 == null))))?(((((map__1593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1593):map__1593);
var type = cljs.core.get.call(null,map__1593__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1593__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1593__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1594 = data;
var map__1594__$1 = (((((!((map__1594 == null))))?(((((map__1594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1594):map__1594);
var problems = cljs.core.get.call(null,map__1594__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1594__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1594__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1595 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1595__$1 = (((((!((map__1595 == null))))?(((((map__1595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1595):map__1595);
var top_data = map__1595__$1;
var source = cljs.core.get.call(null,map__1595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1600 = phase;
var G__1600__$1 = (((G__1600 instanceof cljs.core.Keyword))?G__1600.fqn:null);
switch (G__1600__$1) {
case "read-source":
var map__1601 = data;
var map__1601__$1 = (((((!((map__1601 == null))))?(((((map__1601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1601):map__1601);
var line = cljs.core.get.call(null,map__1601__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1601__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1603 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1603__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1603,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1603);
var G__1603__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1603__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1603__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1603__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1603__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1604 = top_data;
var G__1604__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1604,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1604);
var G__1604__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1604__$1);
var G__1604__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1604__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1604__$2);
var G__1604__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1604__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1604__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1604__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1604__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1605 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1605,(0),null);
var method = cljs.core.nth.call(null,vec__1605,(1),null);
var file = cljs.core.nth.call(null,vec__1605,(2),null);
var line = cljs.core.nth.call(null,vec__1605,(3),null);
var G__1608 = top_data;
var G__1608__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1608,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1608);
var G__1608__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1608__$1);
var G__1608__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__1608__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1608__$2);
var G__1608__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1608__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1608__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1608__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1608__$4;
}

break;
case "execution":
var vec__1609 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1609,(0),null);
var method = cljs.core.nth.call(null,vec__1609,(1),null);
var file = cljs.core.nth.call(null,vec__1609,(2),null);
var line = cljs.core.nth.call(null,vec__1609,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__1609,source__$1,method,file,line,G__1600,G__1600__$1,map__1592,map__1592__$1,via,trace,phase,map__1593,map__1593__$1,type,message,data,map__1594,map__1594__$1,problems,fn,caller,map__1595,map__1595__$1,top_data,source){
return (function (p1__1591_SHARP_){
var or__4131__auto__ = (p1__1591_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1591_SHARP_);
}
});})(vec__1609,source__$1,method,file,line,G__1600,G__1600__$1,map__1592,map__1592__$1,via,trace,phase,map__1593,map__1593__$1,type,message,data,map__1594,map__1594__$1,problems,fn,caller,map__1595,map__1595__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__1612 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1612__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1612,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1612);
var G__1612__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1612__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1612__$1);
var G__1612__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__1612__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1612__$2);
var G__1612__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1612__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1612__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1612__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1612__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1600__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1616){
var map__1617 = p__1616;
var map__1617__$1 = (((((!((map__1617 == null))))?(((((map__1617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1617):map__1617);
var triage_data = map__1617__$1;
var phase = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1617__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__1619 = phase;
var G__1619__$1 = (((G__1619 instanceof cljs.core.Keyword))?G__1619.fqn:null);
switch (G__1619__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1620_1629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1621_1630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1622_1631 = true;
var _STAR_print_fn_STAR__temp_val__1623_1632 = ((function (_STAR_print_newline_STAR__orig_val__1620_1629,_STAR_print_fn_STAR__orig_val__1621_1630,_STAR_print_newline_STAR__temp_val__1622_1631,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1620_1629,_STAR_print_fn_STAR__orig_val__1621_1630,_STAR_print_newline_STAR__temp_val__1622_1631,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1622_1631;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1623_1632;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1620_1629,_STAR_print_fn_STAR__orig_val__1621_1630,_STAR_print_newline_STAR__temp_val__1622_1631,_STAR_print_fn_STAR__temp_val__1623_1632,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1620_1629,_STAR_print_fn_STAR__orig_val__1621_1630,_STAR_print_newline_STAR__temp_val__1622_1631,_STAR_print_fn_STAR__temp_val__1623_1632,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1614_SHARP_){
return cljs.core.dissoc.call(null,p1__1614_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1620_1629,_STAR_print_fn_STAR__orig_val__1621_1630,_STAR_print_newline_STAR__temp_val__1622_1631,_STAR_print_fn_STAR__temp_val__1623_1632,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1620_1629,_STAR_print_fn_STAR__orig_val__1621_1630,_STAR_print_newline_STAR__temp_val__1622_1631,_STAR_print_fn_STAR__temp_val__1623_1632,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1621_1630;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1620_1629;
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
var _STAR_print_newline_STAR__orig_val__1624_1633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1625_1634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1626_1635 = true;
var _STAR_print_fn_STAR__temp_val__1627_1636 = ((function (_STAR_print_newline_STAR__orig_val__1624_1633,_STAR_print_fn_STAR__orig_val__1625_1634,_STAR_print_newline_STAR__temp_val__1626_1635,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1624_1633,_STAR_print_fn_STAR__orig_val__1625_1634,_STAR_print_newline_STAR__temp_val__1626_1635,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1626_1635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1627_1636;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1624_1633,_STAR_print_fn_STAR__orig_val__1625_1634,_STAR_print_newline_STAR__temp_val__1626_1635,_STAR_print_fn_STAR__temp_val__1627_1636,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1624_1633,_STAR_print_fn_STAR__orig_val__1625_1634,_STAR_print_newline_STAR__temp_val__1626_1635,_STAR_print_fn_STAR__temp_val__1627_1636,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1615_SHARP_){
return cljs.core.dissoc.call(null,p1__1615_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1624_1633,_STAR_print_fn_STAR__orig_val__1625_1634,_STAR_print_newline_STAR__temp_val__1626_1635,_STAR_print_fn_STAR__temp_val__1627_1636,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1624_1633,_STAR_print_fn_STAR__orig_val__1625_1634,_STAR_print_newline_STAR__temp_val__1626_1635,_STAR_print_fn_STAR__temp_val__1627_1636,sb__4661__auto__,G__1619,G__1619__$1,loc,class_name,simple_class,cause_type,format,map__1617,map__1617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1625_1634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1624_1633;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1619__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
