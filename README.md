**Important note:** This feature is now included in Backdrop core, so you no
longer need this module.

**If you are running Backdrop version 1.16.0 or later, please disable and
uninstall this module. Use the core setting instead.**

There have been issues reported of performance problems stemming from this
module being enabaled on Backdrop 1.16.0 or later.

--------------------------------------------------------------------------------
                             Search Index Options
     Brought by Backdrop aficionados at AltaGrade.com <info@altagrade.com>
     Project homepage: https://backdropcms.org/project/search_index_options
--------------------------------------------------------------------------------

Introduction
------------

This light-weight module extends the core Search module's functionality by:

- providing a configuration setting to limit content types for search indexing;
- making only active search modules available for choosing as the default one;
- locking the default search module to prevent it from unselecting;
- introducing an exclusion option on node level.

How it works
------------
The core search module scans all the available content, regardless of whether
some content types were meant to be searchable at all or not. This kind of
design causes extra processing load while indexing and storing lots of
unnecessary information in database. The Search Index Options module addresses
this problem by letting users to set only desired content types for indexing,
thus significantly reducing the load and amount of stored index data.

Comparison with other search modules
------------------------------------
Unlike existing modules, which process data after the fact search index is
generated, this module acts early to limit flow of only useful information into
search index. In this meaning Search Index is not comparable, but rather
compatible and could be used along with other search-related modules.

Use it anyway
-------------
You might want to have Search Index module enabled regardless if you want to
restrict search indexing or not, because unlike the core search module it also
provides the detailed and useful search index statistics per content type.


Requirements
------------

This module requires the following modules:

 * Core Search module


Installation
------------
* Download the project from https://backdropcms.org/project/search_index_options
* Go to the Functionality page (`/admin/modules`) and enable the module.
  Alternatively, you can just run `drush en search_index_options` command on CLI.


Configuration
-------------

* Go to the Search settings page (`/admin/config/search/settings`), select content
  types which you would like to index.

* If you enable node level indexing option, then you can go to any node's edit
  page and opt it in or out of search index.

* After saving new configuration options, click on the Invalidate Search Index
  button and wait until the next cron triggers site re-indexing process.


Troubleshooting
---------------

* Report any issues on https://github.com/backdrop-contrib/search_index_options/issues

* If you excluded certain content types or certain nodes from indexing, but they
  still persist to appear in search results even after re-indexing, then please
  pay special attention to what the `/admin/config/search/settings/reindex` page
  says:

    "The search index is not cleared but systematically updated to reflect the
    new settings. Searching will continue to work but new content won't be
    indexed until all existing content has been re-indexed."

  So you have to wait for the search index to get completely re-build. If you
  can't wait, then consider using the Search Index Wipe
  (https://github.com/backdrop-contrib/searchindex_wipe) module.


Credits
-------

Initially created for Drupal (https://www.drupal.org/project/search_index) and
ported to Backdrop by Alan Mels (https://github.com/alanmels).
