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
        <div class="preview pattern__resizeable <?php echo $cat_name  ?>">
          <?php the_field('preview_code'); ?>
        </div>
      </div>
      <div class="pattern__code">
        <h2 class="headline h2">How to <strong>code</strong> the <?php the_title(); ?> pattern</h2>
        <?php  echo get_the_content() ?>
        <div class="codepen">
          <a href="<?php the_field('codepen_link'); ?>" target="_blank" rel="noopener noreferrer"
            class="codepen__link small">Play with it on
            Codepen</a>
        </div>
      </div>
    </article>
    <article class="pattern__information">
      <div class="pattern__use">
        <?php if( get_field('usecase') ): ?>
        <h3 class="headline h3"><strong>Use</strong> the <?php the_title(); ?> pattern</h3>
        <?php the_field('usecase', false); ?>
        <?php endif; ?>
      </div>
      <div class="pattern__accessebility">
        <?php if( get_field('accessebility') ): ?>
        <h3 class="headline h3"><?php the_title(); ?> pattern <strong>accessibility</strong> tipps</h3>
        <?php the_field('accessebility', false); ?>
        <?php endif; ?>
      </div>
    </article>
    <?php endwhile; endif; ?>
  </section>

</main>

<?php get_footer(); ?>