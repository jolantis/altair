/**
 * Initialize a variable with the right transitionEnd prefix based on the support in the browser.
 *
 * Use it like this:
 * element.addEventListener(transitionEnd, theFunctionToInvoke, false);
 *
 * Or:
 * notification.on(transitionEnd, theFunctionToInvoke);
 */

function whichTransitionEvent(){
	var t;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition':'transitionend',
		'OTransition':'oTransitionEnd',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
	};

	for(t in transitions){
		if( el.style[t] !== undefined ){
			return transitions[t];
		}
	}
}

var transitionEnd = whichTransitionEvent();
