<?php get_header(); ?>

<main class="main">
  <section class="section pattern">
    <?php if (have_posts()) : while (have_posts()) : the_post(); 
      $categories = get_the_category(); 
      $cat_name = lcfirst($categories[0]->cat_name);
    ?>
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
      <h1 class="headline h1"><span class="focus"><?php the_title(); ?></span> Pattern</h1>
    </article>


    <article class="pattern__preview">
      <div class="pattern__example ">
        <div class="pattern__resizeable <?php echo $cat_name  ?>">
          <?php the_field('preview_code'); ?>
        </div>
      </div>
      <div class="pattern__code">
        <h2 class="headline h2">How to <span class="focus">code</span> the <?php the_title(); ?> pattern</h2>
        <?php  echo get_the_content() ?>
        <a href="#" class="code__codepen-link">Play with it on Codepen</a>
      </div>
    </article>
    <article class="pattern__information">
      <div class="pattern__use">
        use
      </div>
      <div class="pattern__accessebility">
        accessebility
      </div>
    </article>
    <?php endwhile; endif; ?>
  </section>

</main>

<?php get_footer(); ?>