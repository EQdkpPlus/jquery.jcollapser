/*!
 * jQuery Collapser 2.0.0
 *
 * Copyright (c) 2010 - 2016 Simon "Wallenium" Wallmann
 * Licensed under the LGPL license.
 * http://docs.jquery.com/License
 *
 * $Rev$
 * $Date::             $
 *
 */
(function($){
	$.fn.extend({

		//pass the options variable to the function
		jcollapser: function(options) {
			
			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				state			: 'active',
				persistence		: true,
			}
			
			var hasLocalstorage = function(){
				try {
					return ('localStorage' in window) && window[localstorage] !== null;
				} catch(e) {
					return false;
				}
			}
			
			var debug			= true;
			var options 		= $.extend(defaults, options);
			var o				= options;
			var n_persistence	= 'jcollapser.' + this.attr("id");
			var state			= (hasLocalstorage()) ? localStorage.getItem(n_persistence) : false;
			var container		= this;
			state				= (state) ? state : options.state;
			
			//Collapse the container on load if needed
			$('.toggle_container', this).hide();
			if(state == 'active'){
				$('.toggle_container', this).show();
			}
			
			// add the active class to the active state..
			if($('.toggle_container', this).is(":visible")){
				$('.toggle_button', this).addClass("active");
			}
	
			//Slide up and down on click
			$('.toggle_button', this).click(function(){
				$('.toggle_container', container).slideToggle("slow", function() {
				if(options.persistence){
					if($('.toggle_container', container).is(":visible")){
						if(hasLocalstorage()) localStorage.setItem(n_persistence, 'active');
					}else{
						//localStorage.setItem(n_persistence, null);
						if(hasLocalstorage()) localStorage.setItem(n_persistence, 'inactive');
					}
				}
			  });
				$(this).toggleClass("active");
			});
		}
	});
})(jQuery);
