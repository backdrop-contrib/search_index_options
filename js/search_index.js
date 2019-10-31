(function ($) {

  Backdrop.behaviors.search_indexFieldsetSummaries = {
    attach: function (context) {
      $('fieldset#edit-search-index', context).backdropSetSummary(function (context) {
        if ($('.form-item-search-index-option input', context).is(':checked')) {
          return Backdrop.t('Included in search indexing');
        }
        else {
          return Backdrop.t('Excluded from search indexing');
        }
      });
    }
  };

  })(jQuery);
