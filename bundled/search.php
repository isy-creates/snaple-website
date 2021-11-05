<?php

get_header();

if ( have_posts() ) :
	?>
<main class="main frontpage">

  <section class="frontpage__intro">
    <h1>Search results for <?php the_search_query(); ?></h1>
  </section>
  <section class="section frontpage__articles js-hover">
    <ul class="layout">
      <?php
	while ( have_posts() ) : the_post(); ?>


      <li class="layout__content">
        <a href="<?php the_permalink() ?>"></a>
        <?php if ( has_post_thumbnail() ) { 
             the_post_thumbnail( 'small-thumbnail' ); 
           } ?>
        <h4><?php the_title() ?></h4>


      </li>


      <?php endwhile;

else :
	echo '<p>No search results found!</p>';

endif; ?>
    </ul>

  </section>
  <?php include 'decolines.php'; ?>
</main>

<?php get_footer(); ?>