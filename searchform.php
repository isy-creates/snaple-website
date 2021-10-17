<form role="search" method="get" id="searchform" class="searchform" action="<?php echo home_url( '/' ); ?>">
  <label class="hide-element" for="s">Search for:</label>
  <input value="" name="s" id="s" type="text" placeholder="Find your pattern">
  <button id="searchsubmit" value="Search" type="submit"><img
      src="<?php echo get_template_directory_uri(); ?>/dist/images/search.svg"></button>
</form>