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
      <?php the_content(); ?>
    </article>


    <article class="pattern__preview">
      <div class="pattern__example ">
        <div class="pattern__resizeable <?php echo $cat_name  ?>">
          test
        </div>
      </div>
      <div class="pattern__code">
        code
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