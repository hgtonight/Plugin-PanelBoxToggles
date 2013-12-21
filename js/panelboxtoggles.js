jQuery(function($) {
	$('html').addClass('js');

	// Find all panel boxes
	var panelBoxToggle = '#Panel .Box:not(.Group)';

	$(document)
		.on('click', panelBoxToggle, function (e) {
			var $target = $(e.currentTarget);

			if ($target.children('h4').length) {
				e.preventDefault();

				$target.toggleClass('Collapsed');
				$target.children(':not(:first-child)').slideToggle();
			}
		})
		.on('click', panelBoxToggle + ' a', function(e) {
			e.stopPropagation(); // Prevent links from closing the panel box
		});
});
