// Compiled by ClojureScript 1.10.520 {}
goog.provide('two048.core');
goog.require('cljs.core');
goog.require('reagent.core');
two048.core.app = (function two048$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.site__title","h1.site__title",-850361995),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.site__title-text","span.site__title-text",-2075873706),"Time Dive"], null)], null);
});
two048.core.mount = (function two048$core$mount(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [two048.core.app], null),document.getElementById("root"));
});
two048.core.re_render = (function two048$core$re_render(){
return two048.core.mount.call(null);
});
if((typeof two048 !== 'undefined') && (typeof two048.core !== 'undefined') && (typeof two048.core.start_up !== 'undefined')){
} else {
two048.core.start_up = (function (){
two048.core.mount.call(null);

return true;
})()
;
}

//# sourceMappingURL=core.js.map
