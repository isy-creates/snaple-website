<?php get_header(); ?>

<main class="main pattern">
  <!-- <section class="section pattern"> -->

  <?php if (have_posts()) : while (have_posts()) : the_post(); 
      $categories = get_the_category(); 
      $cat_name = lcfirst($categories[0]->cat_name);
    ?>


  <div class="pattern__preview <?php if( get_field('pattern_resize') ) : ?>is-resizeable<?php endif; ?>">
    <div class="preview-<?php print strtolower( get_the_title() );?> pattern__resizeable <?php echo $cat_name  ?>">
      <?php the_field('preview_code'); ?>
    </div>
  </div>
  <div class="pattern__info">
    <article class="pattern__headline">
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
      <h1 class="headline h1"><?php the_title(); ?> Pattern</h1>
    </article>

    <?php the_content();?>

  </div>
  <?php endwhile; endif; ?>
  <!-- </section> -->
  <?php include 'decolines.php' ?>
</main>


<?php get_footer(); ?>