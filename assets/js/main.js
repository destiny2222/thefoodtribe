(function() {
    "use strict";
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  
  })()



 /* 3. Mobile menu */
(function() {
	var menuOpenBtn = $('.menu-toggle');
	var menu = $('.__js_mobile-canvas');
	var menuCloseBtn = menu.find('.mobile-canvas__close');
	var headerContainer = $('.header .container');
	var animsition = $('.animsition');
	var isHandled = false;

	//var dropdownLinks = menu.find('.__js_menu-dropdown-link');
	var mobileDropdownLinks = $('.navigation__link');

	var ModifierClass = {
		MENU: 'mobile-canvas--opened',
		TOGGLE: 'menu-toggle--opened'
	};

	menuOpenBtn.on('click', function() {
		var overlay = setOverlay(closeMenu);//
		body.append(overlay);

		menuCloseBtn.on('click', closeMenu);
		menuOpenBtn.addClass(ModifierClass.TOGGLE);

		setTimeout(function() {
			overlay.fadeIn(DURATION);

			menu.addClass(ModifierClass.MENU);
		}, DURATION + 50);
	});

	if ($(window).width() >= mobileBreakpoint) {
		headerContainer.append(menu);
		menu.addClass('header__mobile');
	}

	if ($(window).width() < mobileBreakpoint) {
		mobileDropdownLinks.each(function() {
			if($(this).next().length !== 0) {
				$(this).removeClass('animsition-link');
			}
		});
	}

	if ($(window).width() < mobileBreakpoint && !isHandled) {
		mobileDropdownLinks.on('click', openMobileDropdown);
		isHandled = true;
	}

	$(window).on('resize', function() {
		if ($(window).width() >= mobileBreakpoint) {
			headerContainer.append(menu);
			menu.addClass('header__mobile');
		} else {
			animsition.prepend(menu);
			menu.removeClass('header__mobile');
		}

		if ($(window).width() < mobileBreakpoint && !isHandled) {
			mobileDropdownLinks.on('click', openMobileDropdown);
			isHandled = true;
		} else {
			mobileDropdownLinks.off('click', openMobileDropdown);
			isHandled = false;
		}


		if ($(window).width() < mobileBreakpoint) {
			mobileDropdownLinks.each(function() {
				if($(this).next().length !== 0) {
					$(this).removeClass('animsition-link');
				}
			});
		} else {
			mobileDropdownLinks.addClass('animsition-link');
		}
	})





	function openMobileDropdown(evt) {
		if ($(this).next().length !== 0) {
			evt.preventDefault();
			$(this).next().find('a[href]').on('click', closeMenu);
			$(this).next().slideToggle(DURATION);
		}
	}

	function closeMenu() {
		menuCloseBtn.off('click', closeMenu);
		menu.removeClass(ModifierClass.MENU);
		var overlay = $('.overlay').fadeOut(DURATION);

		setTimeout(function() {
			menuOpenBtn.removeClass(ModifierClass.TOGGLE);
			overlay.remove();
		}, DURATION + 50);
	}

	$(window).on('resize', function() {
		var windowWidth = $(window).width();

		if (windowWidth >= mobileBreakpoint) {
			closeMenu();
		}
	});
})(); 