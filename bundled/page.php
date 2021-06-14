<?php get_header(); ?>

<main class="main">

  <section class="section">
    <?php if(have_posts()) : ?>
    <?php while(have_posts())  : the_post(); ?>
    <h1 class="headline h1"><?php the_title(); ?></h1>
    <?php the_content(); ?>
    <?php endwhile; ?>
    <?php else : ?>
    <h2 class="headline h2"><?php _e('404 Error&#58; Not Found'); ?></h2>
    <?php endif; ?>
  </section>


  <?php get_footer(); ?>