<?php get_header(); ?>

<main class="main">

  <section class="section">
    <div class="section__intro">
      <h1 class="headline h1"><span class="focus">snaple</span> helps you design & code faster </h1>
      <p class="text">Common UI Patterns turned into Frontend snacks for you to build from there.</p>
    </div>

  </section>
  <section class="section section__pattern">
    <h2 class="headline h2">Latest <span class="focus">pattern</span></h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <a href="#" aria-label="content pattern" class="card cc content swiper-slide">
          <div class="card__head card__head cc__background">
            <img src="wp-content/uploads/2021/04/test.svg"
              alt="attachment-post-thumbnail size-post-thumbnail wp-post-image" class="card__image" loading="lazy">
          </div>
          <div class="card__body">
            <div class="card__tags"><span class="tag">tag</span><span class="tag">tag</span><span class="tag">tag</span>
            </div>
            <h3 class="headline h3 card__headline">Card</h3>
            <div class="card__link">View Card</div>
          </div>
        </a>

        <a href="#" aria-label="content pattern" class="card cc navigation swiper-slide">
          <div class="card__head card__head cc__background">
            <img src="wp-content/uploads/2021/04/test.svg"
              alt="attachment-post-thumbnail size-post-thumbnail wp-post-image" class="card__image" loading="lazy">
          </div>
          <div class="card__body">
            <div class="card__tags"><span class="tag">tag</span><span class="tag">tag</span><span class="tag">tag</span>
            </div>
            <h3 class="headline h3 card__headline">Card</h3>
            <div class="card__link">View Card</div>
          </div>
        </a>

        <a href="#" aria-label="content pattern" class="card cc input swiper-slide">
          <div class="card__head card__head cc__background">
            <img src="wp-content/uploads/2021/04/test.svg"
              alt="attachment-post-thumbnail size-post-thumbnail wp-post-image" class="card__image" loading="lazy">
          </div>
          <div class="card__body">
            <div class="card__tags"><span class="tag">tag</span><span class="tag">tag</span><span class="tag">tag</span>
            </div>
            <h3 class="headline h3 card__headline">Card</h3>
            <div class="card__link">View Card</div>
          </div>
        </a>

        <a href="#" aria-label="content pattern" class="card cc list-pattern swiper-slide">
          <div class="card__head card__head cc__background">
            <img src="wp-content/uploads/2021/04/test.svg"
              alt="attachment-post-thumbnail size-post-thumbnail wp-post-image" class="card__image" loading="lazy">
          </div>
          <div class="card__body">
            <div class="card__tags"><span class="tag">tag</span><span class="tag">tag</span><span class="tag">tag</span>
            </div>
            <h3 class="headline h3 card__headline">Card</h3>
            <div class="card__link">View Card</div>
          </div>
        </a>

        <a href="#" aria-label="content pattern" class="card cc interaction swiper-slide">
          <div class="card__head card__head cc__background">
            <img src="wp-content/uploads/2021/04/test.svg"
              alt="attachment-post-thumbnail size-post-thumbnail wp-post-image" class="card__image" loading="lazy">
          </div>
          <div class="card__body">
            <div class="card__tags"><span class="tag">tag</span><span class="tag">tag</span><span class="tag">tag</span>
            </div>
            <h3 class="headline h3 card__headline">Card</h3>
            <div class="card__link">View Card</div>
          </div>
        </a>

        <a href="#" aria-label="content pattern" class="card cc template swiper-slide">
          <div class="card__head card__head cc__background">
            <img src="wp-content/uploads/2021/04/test.svg"
              alt="attachment-post-thumbnail size-post-thumbnail wp-post-image" class="card__image" loading="lazy">
          </div>
          <div class="card__body">
            <div class="card__tags"><span class="tag">tag</span><span class="tag">tag</span><span class="tag">tag</span>
            </div>
            <h3 class="headline h3 card__headline">Card</h3>
            <div class="card__link">View Card</div>
          </div>
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>

  <?php 
                $homepagePosts = new WP_Query(array(
                    'posts_per_page' => 5
                ));

            while ( $homepagePosts->have_posts() ) {
                $homepagePosts->the_post(); ?>
  <div class="event-summary">
    <?php
$posttags = get_the_tags();
if ($posttags) {
  foreach($posttags as $tag) {
    echo $tag->name . ' '; 
  }
}
?>
    <a class="event-summary__date event-summary__date--beige t-center" href="<?php the_permalink(); ?>">
      <span class="event-summary__month"><?php the_time('M'); ?></span>
      <span class="event-summary__day"><?php the_time('d'); ?></span>
    </a>
    <div class="event-summary__content">
      <h5 class="event-summary__title headline headline--tiny"><a
          href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      </h5>
      <?php the_post_thumbnail(); ?>
      <p><?php if ( has_excerpt() ) {
                        echo get_the_excerpt();
                    } else {
                        echo wp_trim_words(get_the_content(), 18);
                    } ?> <a href="<?php the_permalink(); ?>" class="nu gray">Read more</a></p>
    </div>
  </div>
  <?php } wp_reset_postdata();
          ?>
</main>

<?php get_footer(); ?>