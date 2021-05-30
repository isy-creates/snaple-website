<?php
/*
Template Name: Archives
*/
get_header(); ?>

<main class="main">
  <section class="section">
    <h1 class="headline h1"><span class="focus"><?php single_cat_title(); ?></span> pattern</h1>
    <p class="text"><?php echo category_description(); ?></p>
  </section>
  <section class="section section__archive">

    <?php while(have_posts()) { the_post(); ?>
    <a class="card archive__card" href="<?php the_permalink(); ?>">
      <div class="tagline">
        <?php 
                  $posttags = get_the_tags(); 
                  if ($posttags) {
                    foreach($posttags as $tag) {
                      echo "<span class=\"tag\">" . $tag->name . '</span>'; 
                    }
                  }
                ?>
      </div>
      <h3 class="headline h3 card__headline"><?php the_title(); ?></h3>
    </a>
    <?php } ?>
  </section>
</main>

<?php get_footer(); ?>