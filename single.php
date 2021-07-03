<?php get_header(); ?>

<main class="main">
  <section class="section pattern">

    <?php if (have_posts()) : while (have_posts()) : the_post(); 
      $categories = get_the_category(); 
      $cat_name = lcfirst($categories[0]->cat_name);
    ?>


    <div class="pattern__preview">
      <div class="preview-<?php print strtolower(get_the_title()); ?> pattern__resizeable <?php echo $cat_name  ?>">
        <?php the_field('preview_code'); ?>
        <div id="handle"></div>
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
      <div class="pattern__code">
        <?php  echo get_the_content() ?>
      </div>
    </div>
    <?php endwhile; endif; ?>
  </section>
</main>


<?php get_footer(); ?>