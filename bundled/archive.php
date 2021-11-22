<?php
/*
Template Name: Archives
*/
get_header(); 
$name = single_term_title('', false);
?>

<main class="main frontpage">
  <section class="section frontpage__intro">
    <h1><?php echo $name; ?> Pattern</h1>
    <h2 class="has-medium-font-size"><?php echo category_description(); ?></h2>
  </section>

  <section class="section frontpage__articles js-hover">
    <ul class="boxes <?php echo strtolower($name); ?>">
      <li class="boxes__headline">
        <h3 class="headline h3"><span class="focus"><?php single_cat_title(); ?></span> pattern</h3>
      </li>
      <?php while(have_posts()) { the_post(); ?>
      <li class="boxes__content">
        <a href="<?php the_permalink(); ?>"></a>
        <div class="boxes__image"><?php get_the_post_thumbnail(); ?></div>
        <h4><?php the_title(); ?></h4>
      </li>
      <?php } ?>
    </ul>


  </section>

  <?php include 'decolines.php'; ?>
</main>

<?php get_footer(); ?>