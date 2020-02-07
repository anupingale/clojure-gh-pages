// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__7938__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__7938__auto__["add"]).call(o__7938__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__7938__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__7938__auto__["delete"]).call(o__7938__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__7938__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__7938__auto__["has"]).call(o__7938__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__10800 = data;
var target__7943__auto__ = G__10800;
if(cljs.core.truth_(target__7943__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10800)].join(''),"\n","target__7943__auto__"].join('')));
}

(target__7943__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__10800;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_10805 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_10805);
} else {
var seq__10801_10806 = cljs.core.seq.call(null,json_ml);
var chunk__10802_10807 = null;
var count__10803_10808 = (0);
var i__10804_10809 = (0);
while(true){
if((i__10804_10809 < count__10803_10808)){
var item_10810 = cljs.core._nth.call(null,chunk__10802_10807,i__10804_10809);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_10810,new_depth_budget_10805);


var G__10811 = seq__10801_10806;
var G__10812 = chunk__10802_10807;
var G__10813 = count__10803_10808;
var G__10814 = (i__10804_10809 + (1));
seq__10801_10806 = G__10811;
chunk__10802_10807 = G__10812;
count__10803_10808 = G__10813;
i__10804_10809 = G__10814;
continue;
} else {
var temp__5735__auto___10815 = cljs.core.seq.call(null,seq__10801_10806);
if(temp__5735__auto___10815){
var seq__10801_10816__$1 = temp__5735__auto___10815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10801_10816__$1)){
var c__4550__auto___10817 = cljs.core.chunk_first.call(null,seq__10801_10816__$1);
var G__10818 = cljs.core.chunk_rest.call(null,seq__10801_10816__$1);
var G__10819 = c__4550__auto___10817;
var G__10820 = cljs.core.count.call(null,c__4550__auto___10817);
var G__10821 = (0);
seq__10801_10806 = G__10818;
chunk__10802_10807 = G__10819;
count__10803_10808 = G__10820;
i__10804_10809 = G__10821;
continue;
} else {
var item_10822 = cljs.core.first.call(null,seq__10801_10816__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_10822,new_depth_budget_10805);


var G__10823 = cljs.core.next.call(null,seq__10801_10816__$1);
var G__10824 = null;
var G__10825 = (0);
var G__10826 = (0);
seq__10801_10806 = G__10823;
chunk__10802_10807 = G__10824;
count__10803_10808 = G__10825;
i__10804_10809 = G__10826;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4131__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map