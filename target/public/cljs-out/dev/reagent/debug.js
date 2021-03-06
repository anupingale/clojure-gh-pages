// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8030__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8031__i = 0, G__8031__a = new Array(arguments.length -  0);
while (G__8031__i < G__8031__a.length) {G__8031__a[G__8031__i] = arguments[G__8031__i + 0]; ++G__8031__i;}
  args = new cljs.core.IndexedSeq(G__8031__a,0,null);
} 
return G__8030__delegate.call(this,args);};
G__8030.cljs$lang$maxFixedArity = 0;
G__8030.cljs$lang$applyTo = (function (arglist__8032){
var args = cljs.core.seq(arglist__8032);
return G__8030__delegate(args);
});
G__8030.cljs$core$IFn$_invoke$arity$variadic = G__8030__delegate;
return G__8030;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8033__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8034__i = 0, G__8034__a = new Array(arguments.length -  0);
while (G__8034__i < G__8034__a.length) {G__8034__a[G__8034__i] = arguments[G__8034__i + 0]; ++G__8034__i;}
  args = new cljs.core.IndexedSeq(G__8034__a,0,null);
} 
return G__8033__delegate.call(this,args);};
G__8033.cljs$lang$maxFixedArity = 0;
G__8033.cljs$lang$applyTo = (function (arglist__8035){
var args = cljs.core.seq(arglist__8035);
return G__8033__delegate(args);
});
G__8033.cljs$core$IFn$_invoke$arity$variadic = G__8033__delegate;
return G__8033;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
