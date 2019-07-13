class Dropdown {
  constructor($element) {
    this.element = $element;
    // Select button and content from the element
    this.button = this.element.find('.dropdown-button');
    this.content = this.element.find('.dropdown-content');
    // Add a click handler to the button
    this.button.click(() => this.toggleContent());

    $('html').click(e => {
      const notClicked = check => $(e.target).closest(check).length === 0;
      if (notClicked('.dropdown-content') 
        && notClicked('.dropdown-button')
      )
        this.content.addClass('dropdown-hidden');
    });
  }

  toggleContent() {
    // Add/remove class to/from content
    this.content.toggleClass('dropdown-hidden');
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);