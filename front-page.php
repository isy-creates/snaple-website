<?php get_header(); ?>

<main class="main frontpage">

  <section class="section frontpage__intro">
    <h1><?php the_field('headline'); ?></h1>
    <h2 class="has-medium-font-size"><?php the_field('introtext'); ?></h2>
  </section>
  <section class="section frontpage__articles js-hover">
    <?php

      $args = array( 
          'posts_per_page' => -1
      );
  
      $query = new WP_Query($args);   
      $q = array();
  
      while ( $query->have_posts() ) { 
  
          $query->the_post(); 

          
          $a = '<a href="'. get_permalink() .'"></a><div class="boxes__image">'. get_the_post_thumbnail() .'</div><h4>' . get_the_title() .'</h4>';
  
          $categories = get_the_category();
  
          foreach ( $categories as $key=>$category ) {

              $count = $category->term_id;
              $b = $category->term_id;      
  
          }
  
          $q[$b][] = $a; // Create an array with the category names and post titles
      }
  
      /* Restore original Post Data */
      wp_reset_postdata();
  
      foreach ($q as $key=>$values) {

        $name = get_cat_name( $key );
        $category = get_category( $key );
        $count = $category->count;
        
          echo '<ul class="boxes '. strtolower($name) .'">';
          echo '<li class="boxes__headline"><h3>' . $name . '</h3><p>'. $count .' Pattern</p></li>';

              foreach ($values as $value){
                  echo '<li class="boxes__content ">' . $value . '</li>';
              }
          echo '</ul>';
      }
    ?>
  </section>

  <?php include 'decolines.php'; ?>
</main>

<?php get_footer(); ?>