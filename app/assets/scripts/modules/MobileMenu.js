import $ from "jquery";


class MobileMenu {
	constructor(){
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		// we do this to bind "this" to this event rather than it continuing down 
		// to the next set of instructions
	}
	toggleTheMenu(){
		// because we used bind above, this instance of THIS will stay as we need it.
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x")

	}

}

export default MobileMenu;