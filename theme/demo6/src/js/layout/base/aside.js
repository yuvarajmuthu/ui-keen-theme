"use strict";

var KTLayoutAside = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;

    // Private functions
	// Initialize
	var _init = function() {
        // Initialize mobile aside offcanvas
		_offcanvasObject = new KTOffcanvas(_element, {
			baseClass: 'aside',
			overlay: true,
            closeBy: 'kt_aside_close_btn',
            toggleBy: ['kt_aside_toggle', 'kt_aside_mobile_toggle']
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
            _body = KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _init();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        },

        isFixed: function() {
            return KTUtil.hasClass(_body, 'aside-fixed');
        },

        isMinimized: function() {
            return (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize'));
        },

        isHoverable: function() {
            return (KTUtil.hasClass(_body, 'aside-fixed') && KTUtil.hasClass(_body, 'aside-minimize-hoverable'));
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAside;
}
