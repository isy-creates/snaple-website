<?php get_header(); ?>

<main class="main">

  <section class="section">
    <div class="section__intro">
      <h1 class="headline h1"><?php the_field('headline'); ?></h1>
      <p class="text"><?php the_field('introtext'); ?></p>
    </div>

  </section>
  <section class="section section__pattern">
    <h2 class="headline h2">Latest <span class="focus">pattern</span></h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <?php 
          $homepagePosts = new WP_Query(array(
            'posts_per_page' => 5
          ));

          while ( $homepagePosts->have_posts() ) {
            $homepagePosts->the_post(); 
            $categories = get_the_category(); 
            $cat_name = lcfirst($categories[0]->cat_name);
          ?>

        <a href="<?php the_permalink(); ?>" aria-label="content pattern"
          class="card cc <?php echo $cat_name  ?> swiper-slide">
          <div class="card__head card__head cc__background">
            <?php the_post_thumbnail(); ?>
          </div>
          <div class="card__body">
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
            <div class="card__link">View <?php the_title(); ?></div>
          </div>
        </a>
        <?php } wp_reset_postdata();
          ?>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>


  <?php get_footer(); ?>